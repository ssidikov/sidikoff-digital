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
    // Future analytics implementation can be added here
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  // Preload critical images
  const criticalImages = [
    '/images/hero/hero-bg.webp',
    '/logo-sidikoff.webp',
    '/images/og-homepage.jpg',
  ]

  criticalImages.forEach((imageSrc) => {
    const imageLink = document.createElement('link')
    imageLink.rel = 'preload'
    imageLink.href = imageSrc
    imageLink.as = 'image'
    imageLink.type = 'image/webp'
    document.head.appendChild(imageLink)
  })

  // Preload critical CSS (already handled by Next.js)
  // Inter font is automatically optimized by next/font/google
}

// Lazy load images with intersection observer
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
    lazyImages.forEach((img) => imageObserver.observe(img))
  }
}

// Service Worker registration for PWA
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

// Optimize third-party scripts
export function loadThirdPartyScripts() {
  // Load analytics scripts after user interaction
  const loadAnalytics = () => {
    // Future analytics implementation can be added here

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
