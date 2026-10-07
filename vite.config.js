import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'ashu-api-server',
      configureServer(server) {
        const apiPath = fileURLToPath(new URL('./server/index.js', import.meta.url))
        const apiProcess = spawn(process.execPath, [apiPath], {
          env: { ...process.env, HOST: '127.0.0.1', PORT: '3001' },
          stdio: 'inherit',
        })

        apiProcess.on('error', (error) => {
          console.error('Unable to start the ASHU API server:', error)
        })
        server.httpServer?.once('close', () => apiProcess.kill())
      },
    },
  ],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:3001',
    },
  },
})
