// Performance monitoring utilities for Core Web Vitals and SEO
export interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

interface WebVitalMetric {
  name: string
  value: number
  id: string
  delta: number
  navigationType?: string
  rating?: 'good' | 'needs-improvement' | 'poor'
}

export function reportWebVitals(metric: WebVitalMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric)
  }

  // Send to analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      custom_map: { metric_id: 'web_vitals' },
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    })
  }

  // Send to custom analytics endpoint
  sendToAnalytics(metric)
}

function sendToAnalytics(metric: WebVitalMetric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
    url: window.location.href,
    timestamp: Date.now(),
  })

  // Use navigator.sendBeacon if available
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics/web-vitals', body)
  } else {
    // Fallback to fetch
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: true,
    }).catch(console.error)
  }
}

// Core Web Vitals thresholds
export const PERFORMANCE_THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 }, // ms
  LCP: { good: 2500, poor: 4000 }, // ms
  FID: { good: 100, poor: 300 }, // ms
  CLS: { good: 0.1, poor: 0.25 }, // ratio
  TTFB: { good: 800, poor: 1800 }, // ms
}

export function getPerformanceScore(metrics: PerformanceMetrics): number {
  let score = 0
  let count = 0

  Object.entries(metrics).forEach(([key, value]) => {
    if (value !== undefined) {
      const thresholds =
        PERFORMANCE_THRESHOLDS[key.toUpperCase() as keyof typeof PERFORMANCE_THRESHOLDS]
      if (thresholds) {
        if (value <= thresholds.good) {
          score += 100
        } else if (value <= thresholds.poor) {
          score += 50
        } else {
          score += 0
        }
        count++
      }
    }
  })

  return count > 0 ? Math.round(score / count) : 0
}

// Image optimization helpers
export function generateImageSrcSet(
  src: string,
  sizes: number[] = [640, 768, 1024, 1280, 1536]
): string {
  return sizes.map((size) => `${src}?w=${size}&q=75 ${size}w`).join(', ')
}

export function generateImageSizes(
  breakpoints: { [key: string]: string } = {
    sm: '100vw',
    md: '50vw',
    lg: '33vw',
  }
): string {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(min-width: ${getBreakpointValue(breakpoint)}px) ${size}`)
    .join(', ')
}

function getBreakpointValue(breakpoint: string): number {
  const breakpoints: { [key: string]: number } = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  }
  return breakpoints[breakpoint] || 640
}

// Resource hints for performance
export function generateResourceHints() {
  return [
    // DNS prefetch for external domains
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },

    // Preconnect to critical external domains
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },

    // Preload critical resources
    {
      rel: 'preload',
      href: '/fonts/inter-var.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
  ]
}

// Lazy loading observer
export function createLazyLoadObserver(callback: (entry: IntersectionObserverEntry) => void) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback)
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  )
}

// Critical CSS detection
export function detectCriticalCSS() {
  if (typeof window === 'undefined') return

  const criticalHeight = window.innerHeight
  const criticalElements = document.elementsFromPoint(window.innerWidth / 2, criticalHeight / 2)

  // Log critical elements for CSS optimization
  console.log('Critical elements:', criticalElements)
}

// Performance monitoring hook for React components
export function usePerformanceMonitoring(componentName: string) {
  if (typeof window === 'undefined') return

  const startTime = performance.now()

  return {
    measureRender: () => {
      const endTime = performance.now()
      const duration = endTime - startTime

      if (duration > 16) {
        // Warn if render takes more than one frame
        console.warn(`Slow render detected in ${componentName}: ${duration.toFixed(2)}ms`)
      }

      return duration
    },
  }
}
