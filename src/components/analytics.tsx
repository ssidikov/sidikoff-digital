'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { useEffect } from 'react'
import Script from 'next/script'

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

  return (
    <>
      <VercelAnalytics />
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w2a2gcis7z");
          `,
        }}
      />
    </>
  )
}

export default Analytics
