'use client'

import { useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/**
 * Component specifically to handle Android Chrome PWA issues
 * Addresses common problems with Android PWA installation and notifications
 */
export default function AndroidPWAEnhancements() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Detect Android Chrome
    const isAndroid = /Android/i.test(navigator.userAgent)
    const isChrome = /Chrome/i.test(navigator.userAgent) && !/Edge/i.test(navigator.userAgent)
    
    if (!isAndroid || !isChrome) return

    console.log('🤖 Android Chrome detected - applying PWA enhancements')

    // Add Android-specific meta tags if not present
    const addMetaTag = (name: string, content: string, property?: string) => {
      const existingTag = document.querySelector(
        property ? `meta[property="${property}"]` : `meta[name="${name}"]`
      )
      if (!existingTag) {
        const meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', property)
        } else {
          meta.setAttribute('name', name)
        }
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    // Android Chrome specific meta tags
    addMetaTag('mobile-web-app-capable', 'yes')
    addMetaTag('application-name', 'SIDIKOFF Admin')
    addMetaTag('msapplication-TileColor', '#4f46e5')
    addMetaTag('msapplication-config', '/browserconfig.xml')
    addMetaTag('format-detection', 'telephone=no')
    
    // Android Chrome theme color
    addMetaTag('theme-color', '#4f46e5')
    addMetaTag('msapplication-navbutton-color', '#4f46e5')
    addMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent')

    // Ensure viewport is properly set for Android
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      )
    }

    // Android-specific PWA improvements
    const enhanceForAndroid = () => {
      // Force reload manifest for Android Chrome
      const manifestLink = document.querySelector('link[rel="manifest"]') as HTMLLinkElement
      if (manifestLink) {
        const href = manifestLink.href
        manifestLink.href = ''
        setTimeout(() => {
          manifestLink.href = href + '?v=' + Date.now()
        }, 100)
      }

      // Add Android home screen prompt enhancement
      let installPromptShown = false
      
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        
        if (installPromptShown) return
        installPromptShown = true

        console.log('🤖 Android install prompt intercepted')
        
        // Create custom Android install prompt
        const createAndroidInstallPrompt = () => {
          const promptContainer = document.createElement('div')
          promptContainer.id = 'android-install-prompt'
          promptContainer.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            z-index: 10000;
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
          `
          
          promptContainer.innerHTML = `
            <div style="max-width: 600px; margin: 0 auto;">
              <div style="display: flex; align-items: center; gap: 15px;">
                <div style="flex: 1;">
                  <h3 style="margin: 0 0 5px 0; font-size: 18px; font-weight: 600;">Install SIDIKOFF Admin</h3>
                  <p style="margin: 0; font-size: 14px; opacity: 0.9;">Get the full app experience with offline access and push notifications</p>
                </div>
                <div style="display: flex; gap: 10px;">
                  <button id="android-install-btn" style="
                    background: rgba(255,255,255,0.2);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    backdrop-filter: blur(10px);
                  ">Install</button>
                  <button id="android-dismiss-btn" style="
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.8);
                    padding: 10px;
                    font-size: 20px;
                    cursor: pointer;
                  ">×</button>
                </div>
              </div>
            </div>
          `
          
          document.body.appendChild(promptContainer)
          
          // Animate in
          setTimeout(() => {
            promptContainer.style.transform = 'translateY(0)'
          }, 100)
          
          // Add event listeners
          const installBtn = document.getElementById('android-install-btn')
          const dismissBtn = document.getElementById('android-dismiss-btn')
          
          installBtn?.addEventListener('click', async () => {
            try {
              ;(e as BeforeInstallPromptEvent).prompt()
              const { outcome } = await (e as BeforeInstallPromptEvent).userChoice
              console.log('🤖 Android install outcome:', outcome)
              
              if (outcome === 'accepted') {
                localStorage.setItem('pwa-installed', 'true')
              }
            } catch (err) {
              console.error('🤖 Android install error:', err)
            }
            
            promptContainer.remove()
          })
          
          dismissBtn?.addEventListener('click', () => {
            promptContainer.style.transform = 'translateY(100%)'
            setTimeout(() => promptContainer.remove(), 300)
            localStorage.setItem('pwa-install-dismissed', Date.now().toString())
          })
          
          // Auto dismiss after 10 seconds
          setTimeout(() => {
            if (document.contains(promptContainer)) {
              promptContainer.style.transform = 'translateY(100%)'
              setTimeout(() => promptContainer.remove(), 300)
            }
          }, 10000)
        }

        // Show prompt with delay to ensure page is loaded
        setTimeout(createAndroidInstallPrompt, 2000)
      })

      // Handle app installation
      window.addEventListener('appinstalled', () => {
        console.log('🤖 Android PWA installed successfully')
        localStorage.setItem('pwa-installed', 'true')
        
        // Clean up any install prompts
        const prompt = document.getElementById('android-install-prompt')
        if (prompt) prompt.remove()
      })

      // Android-specific service worker enhancements
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          console.log('🤖 Service Worker ready on Android')
          
          // Android Chrome sometimes needs manual push subscription refresh
          if (registration.pushManager) {
            registration.pushManager.getSubscription().then((subscription) => {
              if (subscription) {
                console.log('🤖 Push subscription active on Android')
              } else {
                console.log('🤖 No push subscription found on Android - may need to re-subscribe')
              }
            })
          }
        })
      }
    }

    // Run Android enhancements after page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhanceForAndroid)
    } else {
      enhanceForAndroid()
    }

    // Android Chrome specific fixes for display mode detection
    const checkPWAMode = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      const isFullscreen = window.matchMedia('(display-mode: fullscreen)').matches
      const isMinimalUI = window.matchMedia('(display-mode: minimal-ui)').matches
      
      if (isStandalone || isFullscreen || isMinimalUI) {
        console.log('🤖 Running as PWA on Android Chrome')
        document.body.classList.add('android-pwa-mode')
        
        // Prevent default Android Chrome behaviors that can interfere with PWA
        document.addEventListener('touchstart', (e) => {
          if (e.touches.length > 1) {
            e.preventDefault() // Prevent zoom
          }
        }, { passive: false })
        
        // Prevent pull-to-refresh
        document.body.style.overscrollBehavior = 'none'
        
        // Ensure proper viewport on orientation change
        window.addEventListener('orientationchange', () => {
          setTimeout(() => {
            window.scrollTo(0, 0)
          }, 500)
        })
      }
    }
    
    checkPWAMode()
    
    // Cleanup function
    return () => {
      const prompt = document.getElementById('android-install-prompt')
      if (prompt) prompt.remove()
    }
  }, [])

  return null
}
