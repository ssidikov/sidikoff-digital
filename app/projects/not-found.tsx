'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProjectNotFound() {
  const router = useRouter()

  useEffect(() => {
    // Instant redirect to homepage for any non-existent project
    router.replace('/')
  }, [router])

  return null
}
