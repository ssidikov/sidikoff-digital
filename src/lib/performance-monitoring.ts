// Performance monitoring utilities for production optimization

export interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

export interface PageLoadMetrics {
  loadTime: number
  domContentLoaded: number
  firstPaint: number
  firstContentfulPaint: number
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime: number; loadTime: number }
      
      // Log LCP for analytics
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime)
      
      // You can send this to your analytics service
      // sendToAnalytics('lcp', lastEntry.renderTime || lastEntry.loadTime)
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming
        const fid = fidEntry.processingStart - fidEntry.startTime
        console.log('FID:', fid)
        // sendToAnalytics('fid', fid)
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as PerformanceEntry & { value: number; hadRecentInput: boolean }
        if (!layoutShift.hadRecentInput) {
          clsValue += layoutShift.value
        }
      }
      console.log('CLS:', clsValue)
      // sendToAnalytics('cls', clsValue)
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })
  }

  // Monitor page load metrics
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    const metrics: PageLoadMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      firstPaint: 0,
      firstContentfulPaint: 0
    }

    // Get paint metrics
    const paintEntries = performance.getEntriesByType('paint')
    paintEntries.forEach((entry) => {
      if (entry.name === 'first-paint') {
        metrics.firstPaint = entry.startTime
      }
      if (entry.name === 'first-contentful-paint') {
        metrics.firstContentfulPaint = entry.startTime
      }
    })

    console.log('Page Load Metrics:', metrics)
    // sendToAnalytics('pageLoad', metrics)
  })
}

// Measure component render time
export function measureRenderTime<T extends (...args: unknown[]) => unknown>(
  fn: T,
  componentName: string
): T {
  return ((...args: Parameters<T>) => {
    const start = performance.now()
    const result = fn(...args)
    const end = performance.now()
    
    console.log(`${componentName} render time: ${end - start}ms`)
    // sendToAnalytics('componentRender', { name: componentName, time: end - start })
    
    return result
  }) as T
}

// Monitor bundle size and loading performance
export function monitorBundleLoading() {
  if (typeof window === 'undefined') return

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      if (entry.name.includes('chunk') || entry.name.includes('.js')) {
        console.log(`Bundle loaded: ${entry.name} - ${entry.duration}ms`)
        // sendToAnalytics('bundleLoad', { name: entry.name, duration: entry.duration })
      }
    })
  })
  
  observer.observe({ entryTypes: ['resource'] })
}

// Check if user prefers reduced motion
export function preferReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Memory usage monitoring (for development)
export function monitorMemoryUsage() {
  if (typeof window === 'undefined') return

  const memory = (performance as unknown as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
  if (!memory) return
  
  console.log('Memory Usage:', {
    used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
    total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
    limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
  })
}

// Throttle performance measurements to avoid spam
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Image loading performance
export function monitorImageLoading() {
  if (typeof window === 'undefined') return

  const images = document.querySelectorAll('img')
  images.forEach((img, index) => {
    const start = performance.now()
    
    img.onload = () => {
      const end = performance.now()
      console.log(`Image ${index} loaded in ${end - start}ms`)
      // sendToAnalytics('imageLoad', { index, time: end - start, src: img.src })
    }
    
    img.onerror = () => {
      console.error(`Failed to load image ${index}: ${img.src}`)
      // sendToAnalytics('imageError', { index, src: img.src })
    }
  })
}

// Placeholder for analytics integration
// function sendToAnalytics(event: string, data: any) {
//   // Integration with Google Analytics, Vercel Analytics, etc.
//   // gtag('event', event, data)
//   // analytics.track(event, data)
// }
