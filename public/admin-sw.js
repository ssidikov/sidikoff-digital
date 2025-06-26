// Admin Dashboard Service Worker
const VERSION = '2.1.0'
const CACHE_NAME = `sidikoff-admin-v${VERSION}`
const STATIC_CACHE = `sidikoff-admin-static-v${VERSION}`
const DYNAMIC_CACHE = `sidikoff-admin-dynamic-v${VERSION}`

// Files to cache for offline functionality
const STATIC_FILES = [
  '/admin/dashboard',
  '/admin/projects',
  '/admin/submissions',
  '/admin/settings',
  '/favicon.png',
  '/logo-sidikoff.svg',
  '/admin-manifest.json'
]

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log(`Service Worker v${VERSION}: Installing...`)
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log(`Service Worker v${VERSION}: Caching static files`)
        return cache.addAll(STATIC_FILES)
      })
      .then(() => {
        console.log(`Service Worker v${VERSION}: Static files cached, skipping waiting`)
        // Force immediate activation to ensure updates are applied
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error(`Service Worker v${VERSION}: Cache failed`, error)
      })
  )
})

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  console.log(`Service Worker v${VERSION}: Activating...`)
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log(`Service Worker v${VERSION}: Deleting old cache`, cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      }),
      // Claim all clients immediately
      self.clients.claim().then(() => {
        console.log(`Service Worker v${VERSION}: Claimed all clients`)
        // Notify all clients that update is complete
        return self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: 'SW_UPDATED',
              version: VERSION,
              timestamp: Date.now()
            })
          })
        })
      })
    ]).then(() => {
      console.log(`Service Worker v${VERSION}: Activated successfully`)
    })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle admin routes
  if (!event.request.url.includes('/admin/')) {
    return
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            // Don't cache API calls or non-GET requests
            if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
              return fetchResponse
            }

            // Cache dynamic content
            return caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(event.request, fetchResponse.clone())
              return fetchResponse
            })
          })
        )
      })
      .catch(() => {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match('/admin/dashboard')
        }
      })
  )
})

// Push notification event with enhanced Android support
self.addEventListener('push', (event) => {
  console.log(`Service Worker v${VERSION}: Push notification received`, event)

  let notificationData = {
    title: 'SIDIKOFF Admin',
    body: 'New notification',
    icon: '/favicon.png',
    badge: '/favicon.png',
    data: {},
  }

  if (event.data) {
    try {
      const data = event.data.json()
      console.log(`Service Worker v${VERSION}: Push data received`, data)
      notificationData = {
        title: data.title || 'SIDIKOFF Admin',
        body: data.body || 'New notification',
        icon: data.icon || '/favicon.png',
        badge: data.badge || '/favicon.png',
        data: data.data || {},
        tag: data.tag || `admin-notification-${Date.now()}`,
        requireInteraction: data.requireInteraction || true, // Keep notification visible on Android
        actions: data.actions || [],
      }
    } catch (error) {
      console.error(`Service Worker v${VERSION}: Error parsing push data`, error)
    }
  }

  console.log(`Service Worker v${VERSION}: Showing notification`, notificationData)

  const notificationOptions = {
    body: notificationData.body,
    icon: notificationData.icon,
    badge: notificationData.badge,
    data: notificationData.data,
    tag: notificationData.tag,
    requireInteraction: notificationData.requireInteraction,
    actions: notificationData.actions,
    vibrate: [200, 100, 200], // Enhanced vibration for Android
    renotify: true,
    silent: false,
    timestamp: Date.now(),
    dir: 'ltr',
    lang: 'en',
    // Android-specific enhancements
    image: notificationData.data.image || undefined,
    sticky: true, // Keep notification persistent on Android
  }

  // Additional Android Chrome specific options
  if (notificationData.data.url) {
    notificationOptions.data.clickUrl = notificationData.data.url
  }

  event.waitUntil(
    Promise.all([
      // Show the notification
      self.registration.showNotification(notificationData.title, notificationOptions),
      // Log the notification for debugging
      self.clients.matchAll({ includeUncontrolled: true }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'PUSH_RECEIVED',
            notification: notificationData,
            timestamp: Date.now()
          })
        })
      })
    ])
  )
})

// Notification click event with enhanced Android support
self.addEventListener('notificationclick', (event) => {
  console.log(`Service Worker v${VERSION}: Notification clicked`, event)

  // Close the notification
  event.notification.close()

  const { data } = event.notification
  let urlToOpen = '/admin/dashboard'

  // Handle different notification types
  if (data.type === 'new_submission') {
    urlToOpen = '/admin/submissions'
  } else if (data.type === 'project_update') {
    urlToOpen = '/admin/projects'
  } else if (data.url || data.clickUrl) {
    urlToOpen = data.url || data.clickUrl
  }

  // Handle action clicks
  if (event.action) {
    console.log(`Service Worker v${VERSION}: Notification action clicked:`, event.action)
    switch (event.action) {
      case 'view':
        urlToOpen = data.viewUrl || urlToOpen
        break
      case 'dismiss':
        return // Don't open anything
      default:
        break
    }
  }

  // Ensure URL is properly formatted for PWA
  if (!urlToOpen.startsWith('http') && !urlToOpen.startsWith('/')) {
    urlToOpen = '/' + urlToOpen
  }

  event.waitUntil(
    clients.matchAll({ 
      type: 'window', 
      includeUncontrolled: true 
    }).then((clientList) => {
      console.log(`Service Worker v${VERSION}: Found ${clientList.length} clients`)

      // Check if admin dashboard is already open
      for (const client of clientList) {
        const clientUrl = new URL(client.url)
        if (clientUrl.pathname.includes('/admin/')) {
          console.log(`Service Worker v${VERSION}: Focusing existing admin client`)
          return client.focus().then(() => {
            // Navigate to the specific URL
            return client.navigate ? client.navigate(urlToOpen) : client.postMessage({
              type: 'NAVIGATE',
              url: urlToOpen
            })
          })
        }
      }

      // Open new window if not already open
      console.log(`Service Worker v${VERSION}: Opening new window:`, urlToOpen)
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen).then((windowClient) => {
          // Ensure the window is focused (important for Android)
          if (windowClient) {
            return windowClient.focus()
          }
        })
      }
    }).catch((error) => {
      console.error(`Service Worker v${VERSION}: Error handling notification click:`, error)
      // Fallback - try to open new window anyway
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen)
      }
    })
  )
})

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log(`Service Worker v${VERSION}: Message received`, event.data)

  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log(`Service Worker v${VERSION}: Skipping waiting as requested`)
    self.skipWaiting()
  } else if (event.data && event.data.type === 'GET_VERSION') {
    // Respond with current version
    event.ports[0]?.postMessage({ version: VERSION })
  }
})

// Handle updates and version info
self.addEventListener('updatefound', () => {
  console.log(`Service Worker v${VERSION}: Update found`)
})

// Periodic background sync for push notification health check
self.addEventListener('sync', (event) => {
  console.log(`Service Worker v${VERSION}: Background sync triggered for tag:`, event.tag)

  if (event.tag === 'background-sync') {
    event.waitUntil(
      Promise.resolve().then(() => {
        console.log(`Service Worker v${VERSION}: Background sync completed`)
      })
    )
  } else if (event.tag === 'notification-health-check') {
    event.waitUntil(
      // Check notification permissions and re-subscribe if needed
      self.registration.pushManager.getSubscription().then((subscription) => {
        if (!subscription) {
          console.warn(`Service Worker v${VERSION}: Push subscription missing, client should re-subscribe`)
        } else {
          console.log(`Service Worker v${VERSION}: Push subscription is healthy`)
        }
      })
    )
  }
})
