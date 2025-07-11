'use client'

import { useEffect, useState, useCallback } from 'react'
import Script from 'next/script'
import { reportWebVitals } from '@/lib/performance'

interface AnalyticsProps {
  googleAnalyticsId?: string
  googleAdsId?: string
  enableWebVitals?: boolean
  ecoMode?: boolean
}

interface EcoConditions {
  isSlowConnection: boolean
  isPowerSaveMode: boolean
  isNightTime: boolean
  connection: NetworkInformation | null
}

interface NetworkInformation {
  effectiveType?: string
  saveData?: boolean
  downlink?: number
  rtt?: number
}

export default function Analytics({
  googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  enableWebVitals = true,
  ecoMode = true, // Enable eco mode by default
}: AnalyticsProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false)
  const [userConsent, setUserConsent] = useState<boolean | null>(null)
  const [networkInfo, setNetworkInfo] = useState<EcoConditions | null>(null)

  // Check user's connection and preferences for eco-friendly loading
  const checkEcoConditions = useCallback((): EcoConditions => {
    if (typeof window === 'undefined') {
      return {
        isSlowConnection: false,
        isPowerSaveMode: false,
        isNightTime: false,
        connection: null,
      }
    }

    // Check if user prefers reduced data usage
    const connection = (navigator as unknown as { connection?: NetworkInformation }).connection
    const isSlowConnection =
      connection &&
      (connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.saveData === true)

    // Check if user has power saving mode enabled
    const isPowerSaveMode =
      (navigator as unknown as { deviceMemory?: number }).deviceMemory &&
      (navigator as unknown as { deviceMemory?: number }).deviceMemory! < 4

    // Check if it's night time (reduce energy consumption)
    const hour = new Date().getHours()
    const isNightTime = hour >= 22 || hour <= 6

    return {
      isSlowConnection: !!isSlowConnection,
      isPowerSaveMode: !!isPowerSaveMode,
      isNightTime,
      connection: connection || null,
    }
  }, [])

  useEffect(() => {
    setIsMounted(true)

    // Get network information
    const ecoConditions = checkEcoConditions()
    setNetworkInfo(ecoConditions)

    // Check for existing consent
    const consent = localStorage.getItem('analytics-consent')
    if (consent === 'true') {
      setUserConsent(true)
    } else if (consent === 'false') {
      setUserConsent(false)
    }

    // Eco-friendly delay: longer delay for slow connections and power save mode
    let delay = 3000 // Default delay

    if (ecoMode) {
      if (ecoConditions.isSlowConnection) delay = 8000 // 8s for slow connections
      if (ecoConditions.isPowerSaveMode) delay = 10000 // 10s for low-memory devices
      if (ecoConditions.isNightTime) delay = 5000 // 5s at night time
    }

    const timer = setTimeout(() => {
      setShouldLoadAnalytics(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [ecoMode, checkEcoConditions])

  useEffect(() => {
    if (enableWebVitals && isMounted && shouldLoadAnalytics && userConsent === true) {
      // Only load web-vitals if user consented and under eco conditions
      if (ecoMode && networkInfo?.isSlowConnection) {
        // Skip web-vitals on slow connections to save bandwidth
        return
      }

      // Import web-vitals dynamically after analytics is ready
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(reportWebVitals)
        onINP(reportWebVitals)
        onFCP(reportWebVitals)
        onLCP(reportWebVitals)
        onTTFB(reportWebVitals)
      })
    }
  }, [enableWebVitals, isMounted, shouldLoadAnalytics, userConsent, ecoMode, networkInfo])

  // Don't load analytics if user hasn't consented or if eco conditions suggest not to
  if (!isMounted || !shouldLoadAnalytics || userConsent === false) {
    return null
  }

  // In eco mode, don't load on very slow connections unless explicitly consented
  if (ecoMode && networkInfo?.isSlowConnection && userConsent !== true) {
    return null
  }

  return (
    <>
      {userConsent === true && (
        <>
          {/* Google Analytics with eco-optimized loading */}
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
                send_page_view: false,
                // Eco-friendly settings
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false,
                sample_rate: ${ecoMode ? '50' : '100'}, // Reduce sampling in eco mode
                site_speed_sample_rate: ${ecoMode ? '10' : '100'}, // Reduce site speed tracking
              });
              ${googleAdsId && !ecoMode ? `gtag('config', '${googleAdsId}');` : ''}
            `}
          </Script>
        </>
      )}

      {/* Privacy-first consent banner */}
      {userConsent === null && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#1f2937',
            color: 'white',
            padding: '16px',
            borderRadius: '8px',
            maxWidth: '320px',
            fontSize: '14px',
            zIndex: 9999,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}>
          <p style={{ margin: '0 0 12px 0' }}>
            Mode éco activé. Accepter l&apos;analytics minimal pour nous aider à améliorer le
            site ?
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => {
                setUserConsent(true)
                localStorage.setItem('analytics-consent', 'true')
              }}
              style={{
                background: '#10b981',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
              }}>
              Accepter
            </button>
            <button
              onClick={() => {
                setUserConsent(false)
                localStorage.setItem('analytics-consent', 'false')
              }}
              style={{
                background: '#6b7280',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                cursor: 'pointer',
              }}>
              Refuser
            </button>
          </div>
        </div>
      )}
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
