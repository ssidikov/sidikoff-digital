'use client'

import { useEffect, useCallback, useState } from 'react'
import { AdminNotificationManager } from '@/lib/admin-notifications'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInit() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null)
  const [isCheckingForUpdates, setIsCheckingForUpdates] = useState(false)
  const [lastUpdateCheck, setLastUpdateCheck] = useState<number>(0)

  const checkForUpdates = useCallback(async () => {
    if (!swRegistration || isCheckingForUpdates) return
    
    const now = Date.now()
    // Check for updates at most once every 30 seconds
    if (now - lastUpdateCheck < 30000) return
    
    setIsCheckingForUpdates(true)
    setLastUpdateCheck(now)
    
    try {
      console.log('🔄 Checking for service worker updates...')
      await swRegistration.update()
      console.log('✅ Update check completed')
    } catch (error) {
      console.error('❌ Error checking for updates:', error)
    } finally {
      setIsCheckingForUpdates(false)
    }
  }, [swRegistration, isCheckingForUpdates, lastUpdateCheck])

  const applyUpdate = useCallback(() => {
    if (swRegistration?.waiting) {
      console.log('🔄 Applying service worker update...')
      swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' })
      // Reload after a short delay to ensure the new SW is active
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }, [swRegistration])

  const hideInstallBanner = useCallback(() => {
    const banner = document.getElementById('pwa-install-banner')
    if (banner) {
      banner.remove()
    }
  }, [])

  const showUpdateBanner = useCallback(() => {
    if (document.getElementById('pwa-update-banner')) return

    const banner = document.createElement('div')
    banner.id = 'pwa-update-banner'
    banner.className =
      'fixed top-0 left-0 right-0 bg-green-600 text-white p-3 text-center text-sm z-50 shadow-lg animate-pulse'
    banner.innerHTML = `
      <div class="flex items-center justify-between max-w-7xl mx-auto px-4">
        <span>🔄 New version available! Update now for the latest features.</span>
        <div class="flex space-x-2">
          <button id="update-pwa-btn" class="bg-white text-green-600 px-3 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors">
            Update Now
          </button>
          <button id="dismiss-update-btn" class="text-green-200 hover:text-white transition-colors">
            ✕
          </button>
        </div>
      </div>
    `

    document.body.appendChild(banner)

    document.getElementById('update-pwa-btn')?.addEventListener('click', applyUpdate)

    document.getElementById('dismiss-update-btn')?.addEventListener('click', () => {
      banner.remove()
      setUpdateAvailable(false)
    })
  }, [applyUpdate])

  const showInstallBanner = useCallback(
    (prompt: BeforeInstallPromptEvent | null) => {
      // Create install banner if it doesn't exist
      if (document.getElementById('pwa-install-banner')) return

      const banner = document.createElement('div')
      banner.id = 'pwa-install-banner'
      banner.className =
        'fixed top-0 left-0 right-0 bg-indigo-600 text-white p-3 text-center text-sm z-50 shadow-lg'
      banner.innerHTML = `
      <div class="flex items-center justify-between max-w-7xl mx-auto px-4">
        <span>📱 Install SIDIKOFF Admin as an app for better experience</span>
        <div class="flex space-x-2">
          <button id="install-pwa-btn" class="bg-white text-indigo-600 px-3 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors">
            Install
          </button>
          <button id="dismiss-pwa-btn" class="text-indigo-200 hover:text-white transition-colors">
            ✕
          </button>
        </div>
      </div>
    `

      document.body.appendChild(banner)

      // Add event listeners
      document.getElementById('install-pwa-btn')?.addEventListener('click', async () => {
        if (prompt) {
          await prompt.prompt()
          const { outcome } = await prompt.userChoice
          console.log(`PWA install outcome: ${outcome}`)
          if (outcome === 'accepted') {
            hideInstallBanner()
          }
        }
      })

      document.getElementById('dismiss-pwa-btn')?.addEventListener('click', hideInstallBanner)

      // Auto-hide after 10 seconds
      setTimeout(hideInstallBanner, 10000)
    },
    [hideInstallBanner]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize notification manager
      const notificationManager = AdminNotificationManager.getInstance()
      notificationManager.initialize().then((success) => {
        if (success) {
          console.log('🔔 Admin notification system initialized')
        }
      })

      // Register service worker with enhanced update detection
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/admin-sw.js', { scope: '/admin/' })
          .then((registration) => {
            console.log('✅ Service Worker registered successfully')
            setSwRegistration(registration)

            // Check for updates immediately
            registration.update()

            // Handle waiting service worker (update available)
            if (registration.waiting) {
              console.log('🔄 Service Worker update available immediately')
              setUpdateAvailable(true)
            }

            // Listen for updates
            registration.addEventListener('updatefound', () => {
              console.log('🔄 Service Worker update found')
              const newWorker = registration.installing
              
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('🔄 New Service Worker installed, update available')
                    setUpdateAvailable(true)
                  }
                })
              }
            })

            // Listen for controller change (update applied)
            navigator.serviceWorker.addEventListener('controllerchange', () => {
              console.log('🔄 Service Worker controller changed, reloading...')
              window.location.reload()
            })

            // Listen for messages from service worker
            navigator.serviceWorker.addEventListener('message', (event) => {
              console.log('📨 Message from Service Worker:', event.data)
              
              if (event.data?.type === 'SW_UPDATED') {
                console.log(`✅ Service Worker updated to version ${event.data.version}`)
                // Hide update banner if it was shown
                const banner = document.getElementById('pwa-update-banner')
                if (banner) banner.remove()
                setUpdateAvailable(false)
              }
            })
          })
          .catch((error) => {
            console.error('❌ Service Worker registration failed:', error)
          })
      }

      // Handle PWA install prompt
      let deferredPrompt: BeforeInstallPromptEvent | null = null

      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('💾 PWA install prompt available')
        e.preventDefault()
        deferredPrompt = e as BeforeInstallPromptEvent

        // Show custom install banner only if not already a PWA
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches
        const isInWebAppiOS = (window.navigator as Navigator & { standalone?: boolean }).standalone === true
        
        if (!isStandalone && !isInWebAppiOS) {
          showInstallBanner(deferredPrompt)
        }
      })

      window.addEventListener('appinstalled', () => {
        console.log('📱 PWA was installed successfully')
        deferredPrompt = null
        hideInstallBanner()
      })

      // Check if app is running as PWA and enhance the experience
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      const isInWebAppiOS = (window.navigator as Navigator & { standalone?: boolean }).standalone === true
      const isInWebAppChrome = window.matchMedia('(display-mode: standalone)').matches ||
                               window.matchMedia('(display-mode: fullscreen)').matches

      if (isStandalone || isInWebAppiOS || isInWebAppChrome) {
        console.log('📱 Running as PWA')
        document.documentElement.classList.add('pwa-mode')
        
        // Add PWA-specific styles and behaviors
        document.body.style.userSelect = 'none'
        ;(document.body.style as CSSStyleDeclaration & { webkitUserSelect?: string; webkitTouchCallout?: string }).webkitUserSelect = 'none'
        ;(document.body.style as CSSStyleDeclaration & { webkitUserSelect?: string; webkitTouchCallout?: string }).webkitTouchCallout = 'none'
        
        // Prevent pull-to-refresh on mobile
        document.body.style.overscrollBehavior = 'none'
        
        // Hide address bar on mobile
        if (window.navigator.userAgent.includes('Mobile')) {
          setTimeout(() => {
            window.scrollTo(0, 1)
          }, 100)
        }
      }

      // Periodic update check (every 5 minutes when app is active)
      const updateInterval = setInterval(() => {
        if (document.visibilityState === 'visible') {
          checkForUpdates()
        }
      }, 5 * 60 * 1000)

      // Check for updates when page becomes visible
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          setTimeout(checkForUpdates, 1000)
        }
      })

      // Cleanup
      return () => {
        clearInterval(updateInterval)
      }
    }
  }, [showInstallBanner, hideInstallBanner, checkForUpdates])

  // Show update banner when update becomes available
  useEffect(() => {
    if (updateAvailable) {
      showUpdateBanner()
    }
  }, [updateAvailable, showUpdateBanner])

  return null
}
