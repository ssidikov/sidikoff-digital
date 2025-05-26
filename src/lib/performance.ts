'use client'

// Core Web Vitals tracking
export function trackWebVitals() {
  if (typeof window === 'undefined') return

  // Track Largest Contentful Paint (LCP)
  const observeLCP = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]

        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
          })
        }
      })

      observer.observe({ type: 'largest-contentful-paint', buffered: true })
    }
  }

  // Track First Input Delay (FID)
  const observeFID = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          const delay = entry.processingStart - entry.startTime

          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(delay),
              event_category: 'Web Vitals',
            })
          }
        })
      })

      observer.observe({ type: 'first-input', buffered: true })
    }
  }

  // Track Cumulative Layout Shift (CLS)
  const observeCLS = () => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0
      let clsEntries: any[] = []

      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = clsEntries[0]
            const lastSessionEntry = clsEntries[clsEntries.length - 1]

            if (
              !firstSessionEntry ||
              (entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000)
            ) {
              clsEntries.push(entry)
              clsValue += entry.value
            } else {
              clsEntries = [entry]
              clsValue = entry.value
            }
          }
        })

        // Send to analytics
        if (window.gtag && clsValue > 0) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals',
          })
        }
      })

      observer.observe({ type: 'layout-shift', buffered: true })
    }
  }

  // Track Time to First Byte (TTFB)
  const observeTTFB = () => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming
      if (navigation) {
        const ttfb = navigation.responseStart - navigation.requestStart

        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'TTFB',
            value: Math.round(ttfb),
            event_category: 'Web Vitals',
          })
        }
      }
    }
  }

  // Initialize all observers
  observeLCP()
  observeFID()
  observeCLS()
  observeTTFB()
}

// Performance monitoring hook
export function usePerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now()

      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'page_load',
          value: Math.round(loadTime),
        })
      }
    })

    // Track Web Vitals
    trackWebVitals()
  }
}

// Global type declarations for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}
