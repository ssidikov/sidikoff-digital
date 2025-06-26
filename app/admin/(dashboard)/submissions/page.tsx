'use client'

import { useEffect, useState } from 'react'
import MessageManager from '@/components/admin/MessageManager'

export default function SubmissionsPage() {
  const [key, setKey] = useState(0)

  // Force re-mount when navigating back to this page
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page became visible again, likely from back navigation
        setKey(prev => prev + 1)
      }
    }

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was loaded from bfcache (back button)
        setKey(prev => prev + 1)
      }
    }

    // Handle browser back/forward navigation
    window.addEventListener('pageshow', handlePageShow)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('pageshow', handlePageShow)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Also refresh when component mounts
  useEffect(() => {
    setKey(Date.now())
  }, [])

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <MessageManager key={key} />
    </div>
  )
}
