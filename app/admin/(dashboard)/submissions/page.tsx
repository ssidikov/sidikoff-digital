'use client'

import { useEffect, useState } from 'react'
import MessageManager from '@/components/admin/MessageManager'

export default function SubmissionsPage() {
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full mx-auto mb-4 animate-spin" />
          <div className="animate-pulse">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Loading Submissions</h2>
            <p className="text-slate-600">Preparing submissions panel...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <MessageManager />
    </div>
  )
}
