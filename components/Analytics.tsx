'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { reportWebVitals } from '@/lib/performance'

interface AnalyticsProps {
  googleAnalyticsId?: string
  enableWebVitals?: boolean
}

export default function Analytics({
  googleAnalyticsId = 'G-KFKPR6DVQ1',
  enableWebVitals = true,
}: AnalyticsProps) {
  useEffect(() => {
    if (enableWebVitals && typeof window !== 'undefined') {
      // Import web-vitals dynamically
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(reportWebVitals)
        onINP(reportWebVitals)
        onFCP(reportWebVitals)
        onLCP(reportWebVitals)
        onTTFB(reportWebVitals)
      })
    }
  }, [enableWebVitals])

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy='afterInteractive'
      />
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
            url: 'https://sidikoff-digital.fr',
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

// Track page views
export function trackPageView(url: string, title?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-KFKPR6DVQ1', {
      page_title: title || document.title,
      page_location: url,
    })
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
