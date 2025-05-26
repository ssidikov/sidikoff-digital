'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface AnalyticsProps {
  gtmId?: string
  gtagId?: string
  yandexMetricaId?: string
}

export default function Analytics({ gtmId, gtagId, yandexMetricaId }: AnalyticsProps) {
  // Performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return

    // Track Web Vitals after a short delay
    const timer = setTimeout(() => {
      if ('PerformanceObserver' in window) {
        // Track Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]

          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
          })
        })
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            const delay = entry.processingStart - entry.startTime

            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(delay),
              event_category: 'Web Vitals',
            })
          })
        })
        fidObserver.observe({ type: 'first-input', buffered: true })
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            id='gtm-script'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </>
      )}

      {/* Google Analytics */}
      {gtagId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy='afterInteractive'
          />
          <Script
            id='gtag-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtagId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </>
      )}

      {/* Yandex Metrica */}
      {yandexMetricaId && (
        <Script
          id='yandex-metrica'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${yandexMetricaId}, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
      )}
    </>
  )
}

// Global type declarations for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}
