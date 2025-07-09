'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { reportWebVitals } from '@/lib/performance'

interface AnalyticsProps {
  googleAnalyticsId?: string
  googleAdsId?: string
  enableWebVitals?: boolean
}

export default function Analytics({
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  enableWebVitals = true,
}: AnalyticsProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Delay analytics loading to improve initial performance
    const timer = setTimeout(() => {
      setShouldLoadAnalytics(true)
    }, 3000) // Load after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (enableWebVitals && isMounted && shouldLoadAnalytics) {
      // Import web-vitals dynamically after analytics is ready
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(reportWebVitals)
        onINP(reportWebVitals)
        onFCP(reportWebVitals)
        onLCP(reportWebVitals)
        onTTFB(reportWebVitals)
      })
    }
  }, [enableWebVitals, isMounted, shouldLoadAnalytics])

  if (!isMounted || !shouldLoadAnalytics) {
    return null
  }

  return (
    <>
      {/* Google Analytics with optimized loading */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy='lazyOnload'
        defer
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: false
          });
          ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}
        `}
      </Script>
    </>
  )
}

// Track custom events
export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Track conversions
export function trackConversion(label: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
    if (adsId) {
      window.gtag('event', 'conversion', {
        send_to: `${adsId}/${label}`,
        value: value,
        currency: 'EUR',
      })
    }
  }
}

// Track form submissions
export function trackFormSubmission({ firstName, email }: { firstName?: string; email?: string }) {
  trackEvent('lead_form_submission', {
    event_category: 'engagement',
    event_label: 'contact_form',
    custom_parameter_1: firstName || '',
    custom_parameter_2: email || '',
  })
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void
  }
}
