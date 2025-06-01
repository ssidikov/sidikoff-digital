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

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (enableWebVitals && isMounted) {
      // Import web-vitals dynamically
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(reportWebVitals)
        onINP(reportWebVitals)
        onFCP(reportWebVitals)
        onLCP(reportWebVitals)
        onTTFB(reportWebVitals)
      })
    }
  }, [enableWebVitals, isMounted])

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy='afterInteractive'
      />

      {/* Google Ads */}
      {googleAdsId && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy='afterInteractive'
        />
      )}

      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'metric_id': 'web_vitals'
            }
          });
          ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}
        `}
      </Script>

      {/* Google Tag Manager (optional) */}
      <Script id='gtm' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>

      {/* Schema.org for French business */}
      <Script
        id='local-business-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SIDIKOFF DIGITAL',
            description:
              'Agence web parisienne spécialisée en création de sites internet et applications web modernes',
            url: 'https://www.sidikoff.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressCountry: 'FR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 48.8566,
              longitude: 2.3522,
            },
            areaServed: [
              { '@type': 'City', name: 'Paris' },
              { '@type': 'Country', name: 'France' },
            ],
            serviceType: [
              'Création de sites web',
              "Développement d'applications web",
              'Design UX/UI',
              'Référencement SEO',
            ],
          }),
        }}
      />
    </>
  )
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Track Google Ads conversions
export function trackConversion(
  conversionLabel?: string,
  value?: number,
  currency: string = 'EUR'
) {
  if (typeof window !== 'undefined' && window.gtag) {
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
    const label = conversionLabel || process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

    window.gtag('event', 'conversion', {
      send_to: `${adsId}/${label}`,
      value: value,
      currency: currency,
    })
  }
}

// Track lead form submission (specific conversion)
export function trackLeadFormSubmission(formData?: {
  firstName?: string
  email?: string
  tariff?: string
}) {
  trackConversion() // Uses default conversion label from env

  // Also track as a custom event for GA4
  trackEvent('lead_form_submission', {
    event_category: 'engagement',
    event_label: 'contact_form',
    form_type: 'lead_generation',
    tariff_selected: formData?.tariff || 'not_specified',
    user_email: formData?.email ? 'provided' : 'not_provided',
  })
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
