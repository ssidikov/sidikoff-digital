/**
 * Service Worker for SIDIKOFF DIGITAL
 * Optimizes performance and caching for lead generation
 */

const CACHE_NAME = 'sidikoff-digital-v1'
const STATIC_CACHE_NAME = 'sidikoff-static-v1'
const DYNAMIC_CACHE_NAME = 'sidikoff-dynamic-v1'

// Critical resources to cache immediately
const CRITICAL_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/images/logo-sidikoff.webp',
  '/images/hero-illustration.svg',
  '/styles/critical.css',
  '/contact',
  '/projects',
  '/services'
]

// Assets to cache on demand
const CACHE_STRATEGIES = {
  images: {
    match: /\.(?:png|jpg|jpeg|svg|webp|gif)$/,
    strategy: 'CacheFirst',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
  fonts: {
    match: /\.(?:woff|woff2|ttf|eot)$/,
    strategy: 'CacheFirst',
    maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
  },
  api: {
    match: /\/api\//,
    strategy: 'NetworkFirst',
    maxAge: 5 * 60 * 1000, // 5 minutes
  },
  pages: {
    match: /\.(?:html|htm)$/,
    strategy: 'StaleWhileRevalidate',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  }
}

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker')
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching critical assets')
        return cache.addAll(CRITICAL_ASSETS)
      })
      .then(() => {
        console.log('[SW] Critical assets cached')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('[SW] Failed to cache critical assets:', error)
      })
  )
})

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('[SW] Service worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - handle requests with caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip chrome-extension and other protocols
  if (!request.url.startsWith('http')) {
    return
  }

  // Handle different types of requests
  if (url.pathname.startsWith('/_next/')) {
    // Next.js static assets
    event.respondWith(handleNextAssets(request))
  } else if (CACHE_STRATEGIES.images.match.test(url.pathname)) {
    // Images
    event.respondWith(handleCacheFirst(request, 'images'))
  } else if (CACHE_STRATEGIES.fonts.match.test(url.pathname)) {
    // Fonts
    event.respondWith(handleCacheFirst(request, 'fonts'))
  } else if (CACHE_STRATEGIES.api.match.test(url.pathname)) {
    // API routes
    event.respondWith(handleNetworkFirst(request, 'api'))
  } else if (url.origin === self.location.origin) {
    // Same-origin requests (pages, etc.)
    event.respondWith(handleStaleWhileRevalidate(request))
  }
})

// Cache-first strategy (for static assets)
async function handleCacheFirst(request, type) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE_NAME)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      // Serve from cache
      return cachedResponse
    }
    
    // Fetch from network and cache
    const response = await fetch(request)
    
    if (response.status === 200) {
      const responseClone = response.clone()
      cache.put(request, responseClone)
    }
    
    return response
  } catch (error) {
    console.error(`[SW] Cache-first failed for ${request.url}:`, error)
    
    // Return fallback for images
    if (type === 'images') {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280">Image</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      )
    }
    
    throw error
  }
}

// Network-first strategy (for API calls)
async function handleNetworkFirst(request, type) {
  try {
    const response = await fetch(request)
    
    if (response.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME)
      const responseClone = response.clone()
      cache.put(request, responseClone)
    }
    
    return response
  } catch (error) {
    console.log(`[SW] Network failed for ${request.url}, trying cache`)
    
    const cache = await caches.open(DYNAMIC_CACHE_NAME)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return error response for API calls
    return new Response(
      JSON.stringify({ error: 'Network unavailable' }),
      { 
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Stale-while-revalidate strategy (for pages)
async function handleStaleWhileRevalidate(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE_NAME)
    const cachedResponse = await cache.match(request)
    
    // Fetch fresh version in background
    const fetchPromise = fetch(request).then((response) => {
      if (response.status === 200) {
        const responseClone = response.clone()
        cache.put(request, responseClone)
      }
      return response
    })
    
    // Return cached version immediately if available
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Otherwise wait for network
    return await fetchPromise
  } catch (error) {
    console.error(`[SW] Stale-while-revalidate failed for ${request.url}:`, error)
    
    // Return fallback page
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Offline - SIDIKOFF DIGITAL</title>
          <style>
            body { font-family: system-ui; text-align: center; padding: 2rem; }
            .offline { color: #6b7280; }
          </style>
        </head>
        <body>
          <h1>Vous êtes hors ligne</h1>
          <p class="offline">Vérifiez votre connexion internet et réessayez.</p>
          <button onclick="window.location.reload()">Réessayer</button>
        </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    )
  }
}

// Handle Next.js assets
async function handleNextAssets(request) {
  try {
    const cache = await caches.open(STATIC_CACHE_NAME)
    const cachedResponse = await cache.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    const response = await fetch(request)
    
    if (response.status === 200) {
      const responseClone = response.clone()
      cache.put(request, responseClone)
    }
    
    return response
  } catch (error) {
    console.error(`[SW] Failed to handle Next.js asset ${request.url}:`, error)
    throw error
  }
}

// Message handling for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    getCacheSize().then((size) => {
      event.ports[0].postMessage({ cacheSize: size })
    })
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    clearCache().then(() => {
      event.ports[0].postMessage({ success: true })
    })
  }
})

// Utility functions
async function getCacheSize() {
  const cacheNames = await caches.keys()
  let totalSize = 0
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName)
    const requests = await cache.keys()
    
    for (const request of requests) {
      const response = await cache.match(request)
      if (response) {
        const blob = await response.blob()
        totalSize += blob.size
      }
    }
  }
  
  return totalSize
}

async function clearCache() {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames.map(cacheName => caches.delete(cacheName))
  )
  console.log('[SW] All caches cleared')
}

// Performance monitoring
self.addEventListener('fetch', (event) => {
  const startTime = performance.now()
  
  event.respondWith(
    (async () => {
      try {
        const response = await fetch(event.request)
        const endTime = performance.now()
        const duration = endTime - startTime
        
        // Track slow requests
        if (duration > 3000) {
          console.warn(`[SW] Slow request detected: ${event.request.url} took ${duration}ms`)
        }
        
        return response
      } catch (error) {
        console.error(`[SW] Request failed: ${event.request.url}`, error)
        throw error
      }
    })()
  )
})
