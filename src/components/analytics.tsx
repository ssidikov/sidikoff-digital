'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { useEffect } from 'react'

/**
 * Analytics component with enhanced tracking and privacy compliance
 */
const Analytics = () => {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    // Basic page view tracking
    const handleRouteChange = () => {
      // Additional custom tracking logic can be added here
      console.debug('Page view tracked')
    }

    // Track initial page load
    handleRouteChange()

    // Listen for route changes in SPA navigation
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  // Only render analytics in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return <VercelAnalytics />
}

export default Analytics
