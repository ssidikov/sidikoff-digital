'use client'

import { useEffect, useCallback } from 'react'
import { AdminNotificationManager } from '@/lib/admin-notifications'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInit() {
  const hideInstallBanner = useCallback(() => {
    const banner = document.getElementById('pwa-install-banner')
    if (banner) {
      banner.remove()
    }
  }, [])

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

      // Handle PWA install prompt
      let deferredPrompt: BeforeInstallPromptEvent | null = null

      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('💾 PWA install prompt available')
        e.preventDefault()
        deferredPrompt = e as BeforeInstallPromptEvent

        // Show custom install banner
        showInstallBanner(deferredPrompt)
      })

      window.addEventListener('appinstalled', () => {
        console.log('📱 PWA was installed')
        deferredPrompt = null
        hideInstallBanner()
      })

      // Check if app is running as PWA
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      const isInWebAppiOS =
        (window.navigator as unknown as Record<string, unknown>).standalone === true
      const isInWebAppChrome =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches

      if (isStandalone || isInWebAppiOS || isInWebAppChrome) {
        console.log('📱 Running as PWA')
        document.documentElement.classList.add('pwa-mode')
      }
    }
  }, [showInstallBanner, hideInstallBanner])

  return null
}
