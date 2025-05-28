'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error for debugging
    console.error('Global error occurred:', error)
    
    // Redirect to homepage using window.location for global errors
    window.location.href = '/'
  }, [error])

  // Return null since we're redirecting immediately
  return null
}
