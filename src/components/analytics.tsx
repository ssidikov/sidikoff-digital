'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
    dataLayer: Record<string, unknown>[]
  }
}

// Google Analytics tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  // Don't track in development mode
  if (process.env.NODE_ENV === 'development') {
    // Analytics event logged in development only
    return
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Google Ads conversion tracking
export const trackConversion = (conversionLabel?: string) => {
  // Don't track in development mode
  if (process.env.NODE_ENV === 'development') {
    // Conversion event logged in development only
    return
  }

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const defaultLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

  if (typeof window !== 'undefined' && window.gtag && adsId) {
    window.gtag('event', 'conversion', {
      send_to: `${adsId}/${conversionLabel || defaultLabel}`,
    })
  }
}

// Analytics component for Google Analytics, GTM, and Google Ads
const Analytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
  const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const isDevelopment = process.env.NODE_ENV === 'development'
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Initialize dataLayer for GTM
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
    }
  }, [])

  // Don't render anything on server side to prevent hydration issues
  if (!isClient) {
    return null
  }

  // Don't load analytics in development mode
  if (isDevelopment) {
    return <VercelAnalytics />
  }

  return (
    <>
      {/* Google Tag Manager */}
      {GTM_ID && (
        <>
          <Script
            id='gtm-script'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy='lazyOnload'
          />
          <Script
            id='ga-script'
            strategy='lazyOnload'
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </>
      )}

      {/* Google Ads */}
      {GOOGLE_ADS_ID && (
        <Script
          id='google-ads-script'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', '${GOOGLE_ADS_ID}');
            `,
          }}
        />
      )}

      {/* Vercel Analytics */}
      <VercelAnalytics />
    </>
  )
}

export default Analytics
