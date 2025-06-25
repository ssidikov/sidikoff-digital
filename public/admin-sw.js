// Admin Dashboard Service Worker
const CACHE_NAME = 'sidikoff-admin-v1'
const STATIC_CACHE = 'sidikoff-admin-static-v1'
const DYNAMIC_CACHE = 'sidikoff-admin-dynamic-v1'

// Files to cache for offline functionality
const STATIC_FILES = [
  '/admin/dashboard',
  '/admin/projects',
  '/admin/submissions',
  '/admin/settings',
  '/favicon.png',
  '/logo-sidikoff.svg',
]

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files')
        return cache.addAll(STATIC_FILES)
      })
      .then(() => {
        console.log('Service Worker: Static files cached')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Service Worker: Cache failed', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activated')
        return self.clients.claim()
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

// Push notification event
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received')

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
      notificationData = {
        title: data.title || 'SIDIKOFF Admin',
        body: data.body || 'New notification',
        icon: data.icon || '/favicon.png',
        badge: data.badge || '/favicon.png',
        data: data.data || {},
        tag: data.tag || 'admin-notification',
        requireInteraction: data.requireInteraction || false,
        actions: data.actions || [],
      }
    } catch (error) {
      console.error('Service Worker: Error parsing push data', error)
    }
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon,
      badge: notificationData.badge,
      data: notificationData.data,
      tag: notificationData.tag,
      requireInteraction: notificationData.requireInteraction,
      actions: notificationData.actions,
      vibrate: [100, 50, 100],
      renotify: true,
    })
  )
})

// Notification click event
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked')

  event.notification.close()

  const { data } = event.notification
  let urlToOpen = '/admin/dashboard'

  // Handle different notification types
  if (data.type === 'new_submission') {
    urlToOpen = '/admin/submissions'
  } else if (data.type === 'project_update') {
    urlToOpen = '/admin/projects'
  } else if (data.url) {
    urlToOpen = data.url
  }

  // Handle action clicks
  if (event.action) {
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

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if admin dashboard is already open
      for (const client of clientList) {
        if (client.url.includes('/admin/') && 'focus' in client) {
          client.focus()
          client.navigate(urlToOpen)
          return
        }
      }

      // Open new window if not already open
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen)
      }
    })
  )
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered')

  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle offline actions here
      Promise.resolve()
    )
  }
})

// Message handling from main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received', event.data)

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
