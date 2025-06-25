'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error for debugging (optional)
    console.error('Error occurred:', error)
    
    // Instant redirect to homepage for any errors
    router.replace('/')
  }, [error, router])

  // Return null since we're redirecting immediately
  return null
}
