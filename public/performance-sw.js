// Enhanced Service Worker for Performance Optimization
const CACHE_NAME = 'sidikoff-performance-v1'
const STATIC_CACHE = 'sidikoff-static-v1'
const DYNAMIC_CACHE = 'sidikoff-dynamic-v1'
const IMAGE_CACHE = 'sidikoff-images-v1'

// Cache strategies
const CACHE_STRATEGIES = {
  html: 'NetworkFirst',
  js: 'CacheFirst',
  css: 'CacheFirst',
  images: 'CacheFirst',
  fonts: 'CacheFirst',
  api: 'NetworkFirst',
}

// Critical resources to cache immediately
const CRITICAL_RESOURCES = [
  '/',
  '/favicon.svg',
  '/logo-sidikoff.svg',
  '/manifest.json',
  '/_next/static/css/app.css',
]

// Max cache sizes for different resource types
const MAX_CACHE_SIZES = {
  [STATIC_CACHE]: 50,
  [DYNAMIC_CACHE]: 30,
  [IMAGE_CACHE]: 60,
}

// Install event
self.addEventListener('install', (event) => {
  console.log('🚀 Performance SW: Installing...')
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(CRITICAL_RESOURCES)
      }),
      self.skipWaiting(),
    ])
  )
})

// Activate event
self.addEventListener('activate', (event) => {
  console.log('🚀 Performance SW: Activating...')
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return (
                cacheName !== CACHE_NAME &&
                cacheName !== STATIC_CACHE &&
                cacheName !== DYNAMIC_CACHE &&
                cacheName !== IMAGE_CACHE
              )
            })
            .map((cacheName) => caches.delete(cacheName))
        )
      }),
      self.clients.claim(),
    ])
  )
})

// Fetch event - implement optimized caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip chrome-extension and non-http requests
  if (!url.protocol.startsWith('http')) return

  // Route to appropriate cache strategy
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request))
  } else if (request.destination === 'script') {
    event.respondWith(handleScriptRequest(request))
  } else if (request.destination === 'style') {
    event.respondWith(handleStyleRequest(request))
  } else if (request.destination === 'font') {
    event.respondWith(handleFontRequest(request))
  } else if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request))
  } else if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request))
  } else {
    event.respondWith(handleGenericRequest(request))
  }
})

// Image request handler with performance optimization
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetch(request)

    if (response.ok) {
      // Clone response before caching
      const responseToCache = response.clone()

      // Limit cache size
      await limitCacheSize(cache, MAX_CACHE_SIZES[IMAGE_CACHE])

      // Cache the response
      cache.put(request, responseToCache)
    }

    return response
  } catch (error) {
    // Return cached version or fallback
    return cachedResponse || createImageFallback()
  }
}

// Script request handler (CacheFirst)
async function handleScriptRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetch(request)

    if (response.ok) {
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    return cachedResponse || new Response('', { status: 404 })
  }
}

// Style request handler (CacheFirst)
async function handleStyleRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetch(request)

    if (response.ok) {
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    return cachedResponse || new Response('', { status: 404 })
  }
}

// Font request handler (CacheFirst with long TTL)
async function handleFontRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetch(request)

    if (response.ok) {
      // Cache fonts with modified headers for better performance
      const modifiedResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...response.headers,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      })

      cache.put(request, modifiedResponse.clone())
      return modifiedResponse
    }

    return response
  } catch (error) {
    return cachedResponse || new Response('', { status: 404 })
  }
}

// Navigation request handler (NetworkFirst)
async function handleNavigationRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE)

  try {
    const response = await fetch(request)

    if (response.ok) {
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    const cachedResponse = await cache.match(request)
    return cachedResponse || createOfflinePage()
  }
}

// API request handler (NetworkFirst with shorter cache)
async function handleApiRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE)

  try {
    const response = await fetch(request)

    if (response.ok) {
      // Cache API responses for shorter time
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    const cachedResponse = await cache.match(request)
    return (
      cachedResponse ||
      new Response('{"error": "offline"}', {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      })
    )
  }
}

// Generic request handler
async function handleGenericRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE)

  try {
    const response = await fetch(request)

    if (response.ok) {
      cache.put(request, response.clone())
    }

    return response
  } catch (error) {
    const cachedResponse = await cache.match(request)
    return cachedResponse || new Response('', { status: 404 })
  }
}

// Utility functions
async function limitCacheSize(cache, maxSize) {
  const keys = await cache.keys()

  if (keys.length > maxSize) {
    const keysToDelete = keys.slice(0, keys.length - maxSize)
    await Promise.all(keysToDelete.map((key) => cache.delete(key)))
  }
}

function createImageFallback() {
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#f3f4f6"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b7280" font-family="Arial, sans-serif" font-size="16">
        Изображение недоступно
      </text>
    </svg>
  `

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
    status: 200,
  })
}

function createOfflinePage() {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Офлайн - SIDIKOFF DIGITAL</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .offline-container { max-width: 400px; margin: 0 auto; }
        .offline-icon { font-size: 4rem; margin-bottom: 1rem; }
        .offline-title { font-size: 1.5rem; margin-bottom: 1rem; color: #333; }
        .offline-message { color: #666; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="offline-container">
        <div class="offline-icon">📱</div>
        <h1 class="offline-title">Вы офлайн</h1>
        <p class="offline-message">
          Проверьте подключение к интернету и попробуйте еще раз.
        </p>
      </div>
    </body>
    </html>
  `

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
    status: 200,
  })
}

// Background sync for performance metrics
self.addEventListener('sync', (event) => {
  if (event.tag === 'performance-sync') {
    event.waitUntil(syncPerformanceData())
  }
})

async function syncPerformanceData() {
  // Sync cached performance data when online
  try {
    const cache = await caches.open(DYNAMIC_CACHE)
    const request = new Request('/api/performance-metrics')
    const cachedData = await cache.match(request)

    if (cachedData) {
      const data = await cachedData.json()
      await fetch('/api/performance-metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }
  } catch (error) {
    console.error('Performance sync failed:', error)
  }
}

// Listen for messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Store performance metrics for background sync
    storePerformanceMetrics(event.data.metrics)
  }
})

async function storePerformanceMetrics(metrics) {
  const cache = await caches.open(DYNAMIC_CACHE)
  const request = new Request('/api/performance-metrics')
  const response = new Response(JSON.stringify(metrics), {
    headers: { 'Content-Type': 'application/json' },
  })

  await cache.put(request, response)
}
