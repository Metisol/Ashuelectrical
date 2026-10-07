import 'dotenv/config'
import { createServer } from 'node:http'
import { appendFile, mkdir, readFile, writeFile, unlink } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import { extname, join, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import nodemailer from 'nodemailer'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const dataDirectory = resolve(process.env.ASHU_DATA_DIR || join(projectRoot, 'server', 'data'))
const uploadDirectory = join(dataDirectory, 'uploads')
const submissionsPath = join(dataDirectory, 'submissions.jsonl')
const distDirectory = join(projectRoot, 'dist')
const port = Number(process.env.PORT || 3001)
const host = process.env.HOST || '0.0.0.0'
const maximumRequestBytes = 11 * 1024 * 1024
const maximumUploadBytes = 10 * 1024 * 1024
const rateLimitWindow = 15 * 60 * 1000
const rateLimitCount = 12
const recentRequests = new Map()
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS
const contactEmail = process.env.CONTACT_EMAIL || 'ashutame1216@gmail.com'
const smtpPort = Number(process.env.SMTP_PORT || 465)
const mailTransporter = smtpUser && smtpPass
  ? nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: smtpPort,
    secure: process.env.SMTP_SECURE !== 'false',
    auth: { user: smtpUser, pass: smtpPass },
  })
  : null

if (mailTransporter && (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535)) {
  throw new Error('SMTP_PORT must be a valid TCP port number.')
}

const formFields = {
  contact: ['name', 'company', 'phone', 'email', 'service', 'otherDetails', 'message'],
  consultation: ['name', 'company', 'phone', 'email', 'projectType', 'otherDetails', 'location', 'description'],
  supply: ['name', 'company', 'phone', 'email', 'category', 'otherDetails', 'quantity', 'item', 'location', 'requiredDate', 'notes'],
}

const requiredFields = {
  contact: ['name', 'phone', 'email', 'service', 'message'],
  consultation: ['name', 'phone', 'email', 'projectType', 'location', 'description'],
  supply: ['name', 'phone', 'email', 'category', 'quantity', 'item', 'location', 'requiredDate'],
}

const allowedFiles = new Map([
  ['application/pdf', '.pdf'],
  ['image/jpeg', '.jpg'],
  ['image/png', '.png'],
  ['image/webp', '.webp'],
  ['application/msword', '.doc'],
  ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.docx'],
  ['application/vnd.ms-excel', '.xls'],
  ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.xlsx'],
  ['text/csv', '.csv'],
])

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

await Promise.all([mkdir(dataDirectory, { recursive: true }), mkdir(uploadDirectory, { recursive: true })])

if (!mailTransporter) {
  console.warn('Email delivery is not configured. Set SMTP_USER and SMTP_PASS in the environment.')
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  })
  response.end(JSON.stringify(body))
}

function isRateLimited(address) {
  const now = Date.now()
  const current = recentRequests.get(address)
  if (!current || now - current.startedAt > rateLimitWindow) {
    recentRequests.set(address, { startedAt: now, count: 1 })
    return false
  }

  current.count += 1
  return current.count > rateLimitCount
}

async function readBody(request) {
  const chunks = []
  let size = 0
  for await (const chunk of request) {
    size += chunk.length
    if (size > maximumRequestBytes) {
      const error = new Error('The request is too large. Please reduce the attachment size and try again.')
      error.statusCode = 413
      throw error
    }
    chunks.push(chunk)
  }
  return Buffer.concat(chunks)
}

async function serveBuiltSite(request, response, pathname) {
  if (request.method !== 'GET') {
    sendJson(response, 404, { error: 'Not found.' })
    return
  }

  const requestedPath = decodeURIComponent(pathname)
  const requestedFile = resolve(distDirectory, `.${requestedPath}`)
  const safePath = requestedFile === distDirectory || requestedFile.startsWith(`${distDirectory}${sep}`)
  let filePath = safePath ? requestedFile : join(distDirectory, 'index.html')

  try {
    const contents = await readFile(filePath)
    response.writeHead(200, {
      'Content-Type': contentTypes[extname(filePath).toLowerCase()] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    })
    response.end(contents)
  } catch {
    filePath = join(distDirectory, 'index.html')
    try {
      const contents = await readFile(filePath)
      response.writeHead(200, { 'Content-Type': contentTypes['.html'], 'X-Content-Type-Options': 'nosniff' })
      response.end(contents)
    } catch {
      sendJson(response, 404, { error: 'Built site not found. Run npm run build first.' })
    }
  }
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`)

  if (requestUrl.pathname === '/api/health' && request.method === 'GET') {
    sendJson(response, 200, { status: 'ok' })
    return
  }

  const submissionMatch = requestUrl.pathname.match(/^\/api\/requests\/(contact|consultation|supply)$/)
  if (submissionMatch && request.method === 'POST') {
    const address = request.socket.remoteAddress || 'unknown'
    if (isRateLimited(address)) {
      sendJson(response, 429, { error: 'Too many requests. Please try again later.' })
      return
    }

    let savedUploadPath
    let submissionSaved = false
    try {
      const body = await readBody(request)
      const formRequest = new Request(requestUrl, {
        method: 'POST',
        headers: request.headers,
        body,
      })
      const form = await formRequest.formData()
      const type = submissionMatch[1]
      const fields = Object.fromEntries(formFields[type].map((name) => [name, String(form.get(name) || '').trim()]))

      if (requiredFields[type].some((name) => !fields[name])) {
        sendJson(response, 400, { error: 'Please complete all required fields.' })
        return
      }
      const selectedCategory = type === 'contact' ? fields.service : type === 'consultation' ? fields.projectType : fields.category
      if (selectedCategory === 'Other' && !fields.otherDetails) {
        sendJson(response, 400, { error: 'Please specify the other service, project type, or category.' })
        return
      }
      if (fields.name.length > 160 || fields.email.length > 254 || fields.phone.length > 40) {
        sendJson(response, 400, { error: 'One or more contact fields are too long.' })
        return
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
        sendJson(response, 400, { error: 'Enter a valid email address.' })
        return
      }
      if (type === 'supply' && (!Number.isFinite(Number(fields.quantity)) || Number(fields.quantity) <= 0)) {
        sendJson(response, 400, { error: 'Quantity must be a number greater than zero.' })
        return
      }
      if (Object.values(fields).some((value) => value.length > 5000)) {
        sendJson(response, 400, { error: 'A field is too long. Please shorten your message and try again.' })
        return
      }

      const attachment = form.get('attachment')
      let attachmentInfo = null
      if (attachment && typeof attachment.arrayBuffer === 'function' && attachment.size > 0) {
        const extension = allowedFiles.get(attachment.type)
        if (!extension) {
          sendJson(response, 400, { error: 'Upload a PDF, image, Word document, Excel file, or CSV.' })
          return
        }
        if (attachment.size > maximumUploadBytes) {
          sendJson(response, 413, { error: 'Attachments must be 10 MB or smaller.' })
          return
        }

        const storedName = `${randomUUID()}${extension}`
        savedUploadPath = join(uploadDirectory, storedName)
        await writeFile(savedUploadPath, Buffer.from(await attachment.arrayBuffer()), { flag: 'wx' })
        attachmentInfo = {
          name: String(attachment.name || `attachment${extension}`).slice(0, 240),
          storedName,
          contentType: attachment.type,
          size: attachment.size,
        }
      }

      const submission = {
        id: randomUUID(),
        type,
        submittedAt: new Date().toISOString(),
        ...fields,
        attachment: attachmentInfo,
      }
      await appendFile(submissionsPath, `${JSON.stringify(submission)}\n`, 'utf8')
      submissionSaved = true

      if (!mailTransporter) {
        sendJson(response, 503, { error: 'Your request was saved, but email delivery is not configured. Please contact ASHU directly.' })
        return
      }

      const messageLines = [
        `New ASHU ${type} request`,
        `Submitted: ${submission.submittedAt}`,
        `Reference: ${submission.id}`,
        '',
        ...Object.entries(fields).flatMap(([name, value]) => [`${name}:`, value || '(not provided)', '']),
      ]
      await mailTransporter.sendMail({
        from: smtpUser,
        to: contactEmail,
        replyTo: fields.email,
        subject: `New ASHU ${type} request`,
        text: messageLines.join('\n'),
        attachments: attachmentInfo
          ? [{ filename: attachmentInfo.name, path: join(uploadDirectory, attachmentInfo.storedName), contentType: attachmentInfo.contentType }]
          : [],
      })
      sendJson(response, 201, { message: 'Your request has been sent. The ASHU team will follow up soon.' })
      return
    } catch (error) {
      if (savedUploadPath && !submissionSaved) await unlink(savedUploadPath).catch(() => {})
      if (submissionSaved) {
        console.error('The request was saved, but its email could not be delivered:', error)
        sendJson(response, 502, { error: 'Your request was saved, but we could not email ASHU. Please call the team to follow up.' })
        return
      }
      const status = error.statusCode || (error instanceof TypeError ? 400 : 500)
      sendJson(response, status, {
        error: status === 500 ? 'We could not save your request. Please try again shortly.' : error.message,
      })
      return
    }
  }

  if (requestUrl.pathname.startsWith('/api/')) {
    sendJson(response, 404, { error: 'API route not found.' })
    return
  }

  await serveBuiltSite(request, response, requestUrl.pathname)
})

server.listen(port, host, () => {
  console.log(`ASHU API listening at http://${host}:${port}`)
})

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.close(() => process.exit(0)))
}