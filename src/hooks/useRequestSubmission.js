import { useState } from 'react'

export default function useRequestSubmission(type) {
  const [status, setStatus] = useState({ pending: false, message: '', error: false })

  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus({ pending: true, message: '', error: false })

    try {
      const response = await fetch(`/api/requests/${type}`, {
        method: 'POST',
        body: new FormData(form),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Your request could not be sent. Please try again.')
      }

      form.reset()
      setStatus({ pending: false, message: result.message, error: false })
    } catch (error) {
      setStatus({
        pending: false,
        message: error instanceof TypeError
          ? 'We could not connect to the request service. Please try again shortly.'
          : error.message,
        error: true,
      })
    }
  }

  return { status, submit }
}