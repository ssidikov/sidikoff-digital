

// Performance monitoring utilities for better Lighthouse scores

interface WebVitalsMetric {
  name: string
  value: number
  id: string
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Log performance metrics
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric)
  }
  
  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics, Vercel Analytics, etc.
    // gtag('event', metric.name, {
    //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //   event_category: 'Web Vitals',
    //   event_label: metric.id,
    //   non_interaction: true,
    // })
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  // Preload fonts
  const fontLink = document.createElement('link')
  fontLink.rel = 'preload'
  fontLink.href = '/fonts/inter-var.woff2'
  fontLink.as = 'font'
  fontLink.type = 'font/woff2'
  fontLink.crossOrigin = 'anonymous'
  document.head.appendChild(fontLink)
}

// Lazy load images with intersection observer
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        }
      })
    })

    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))
  }
}

// Service Worker registration for PWA
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

// Optimize third-party scripts
export function loadThirdPartyScripts() {
  // Load analytics scripts after user interaction
  const loadAnalytics = () => {
    // Example: Load Google Analytics
    // const script = document.createElement('script')
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
    // script.async = true
    // document.head.appendChild(script)
    
    // Remove event listeners after loading
    document.removeEventListener('scroll', loadAnalytics)
    document.removeEventListener('click', loadAnalytics)
    document.removeEventListener('touchstart', loadAnalytics)
  }

  // Load scripts on user interaction
  document.addEventListener('scroll', loadAnalytics, { once: true })
  document.addEventListener('click', loadAnalytics, { once: true })
  document.addEventListener('touchstart', loadAnalytics, { once: true })
}
