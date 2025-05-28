'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Instant redirect to homepage
    router.replace('/')
  }, [router])

  // Return null or minimal content since we're redirecting immediately
  return null
}
