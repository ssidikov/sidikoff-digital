// Eco-friendly Service Worker for SIDIKOFF DIGITAL
// Focuses on reducing data usage and improving performance

const CACHE_NAME = 'sidikoff-eco-v1'
const STATIC_CACHE = 'sidikoff-static-v1'
const RUNTIME_CACHE = 'sidikoff-runtime-v1'

// Critical resources to cache immediately
const CRITICAL_ASSETS = ['/', '/favicon.svg', '/logo-sidikoff.svg', '/manifest.json']

// Static assets to cache
const STATIC_ASSETS = [
  '/images/services/web-site.webp',
  '/images/services/redesign.webp',
  '/images/services/seo.webp',
  '/images/services/support.webp',
]

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(CRITICAL_ASSETS)
      }),
      self.skipWaiting(),
    ])
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return (
                !cacheName.startsWith('sidikoff-') ||
                (cacheName !== CACHE_NAME &&
                  cacheName !== STATIC_CACHE &&
                  cacheName !== RUNTIME_CACHE)
              )
            })
            .map((cacheName) => caches.delete(cacheName))
        )
      }),
      self.clients.claim(),
    ])
  )
})

// Fetch event - implement eco-friendly caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) return

  // Handle different types of requests with eco-friendly strategies
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request))
  } else if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(handleStaticAsset(request))
  } else if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request))
  } else {
    event.respondWith(handleRuntimeCache(request))
  }
})

// Eco-friendly image handling
async function handleImageRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    // Return cached image immediately for better performance
    return cachedResponse
  }

  try {
    // Check network conditions
    const connection = navigator.connection
    let useCompression = true

    if (connection) {
      // On slow connections, prefer cached or compressed versions
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        useCompression = true
      }

      // If user has data saver on, be more aggressive with compression
      if (connection.saveData) {
        useCompression = true
      }
    }

    const response = await fetch(request)

    if (response.ok) {
      // Cache successful responses
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    // Return a fallback image if network fails
    return new Response(
      `<svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" fill="#f3f4f6"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b7280">🌱 Eco Mode</text>
      </svg>`,
      {
        headers: { 'Content-Type': 'image/svg+xml' },
        status: 200,
      }
    )
  }
}

// Handle static assets (JS, CSS)
async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetch(request)

    if (response.ok) {
      // Cache static assets for longer periods
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    return cachedResponse || new Response('', { status: 404 })
  }
}

// Handle navigation requests
async function handleNavigationRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE)

  try {
    // Try network first for fresh content
    const response = await fetch(request)

    if (response.ok) {
      cache.put(request, response.clone())
      return response
    }

    throw new Error('Network response not ok')
  } catch (error) {
    // Fallback to cache if network fails
    const cachedResponse = await cache.match(request)

    if (cachedResponse) {
      return cachedResponse
    }

    // Fallback to root page if available
    const rootResponse = await cache.match('/')
    return rootResponse || new Response('Offline', { status: 503 })
  }
}

// Handle runtime cache for API requests etc.
async function handleRuntimeCache(request) {
  const cache = await caches.open(RUNTIME_CACHE)

  // Try network first, fall back to cache
  try {
    const response = await fetch(request)

    if (response.ok) {
      // Only cache successful responses and limit cache size
      const responseToCache = response.clone()

      // Check cache size and clean up if needed
      await limitCacheSize(cache, 50) // Limit to 50 items for eco-friendliness

      cache.put(request, responseToCache)
    }

    return response
  } catch (error) {
    const cachedResponse = await cache.match(request)
    return cachedResponse || new Response('', { status: 404 })
  }
}

// Utility function to limit cache size for eco-friendliness
async function limitCacheSize(cache, maxItems) {
  const keys = await cache.keys()

  if (keys.length > maxItems) {
    // Remove oldest items
    const itemsToDelete = keys.slice(0, keys.length - maxItems)
    await Promise.all(itemsToDelete.map((key) => cache.delete(key)))
  }
}

// Handle message events for dynamic cache control
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'ECO_MODE_TOGGLE') {
    const ecoMode = event.data.enabled

    if (ecoMode) {
      // Enable aggressive caching and cleanup
      console.log('🌱 Eco mode enabled - optimizing cache')
      cleanupCaches()
    } else {
      console.log('🌱 Eco mode disabled - normal operation')
    }
  }
})

// Cleanup function for eco mode
async function cleanupCaches() {
  try {
    const cacheNames = await caches.keys()

    for (const cacheName of cacheNames) {
      const cache = await caches.open(cacheName)
      await limitCacheSize(cache, 25) // More aggressive cleanup in eco mode
    }
  } catch (error) {
    console.error('Cache cleanup failed:', error)
  }
}

// Periodic cleanup task
setInterval(() => {
  cleanupCaches()
}, 30 * 60 * 1000) // Every 30 minutes
