'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function DynamicManifest() {
  const pathname = usePathname()

  useEffect(() => {
    // Remove any existing manifest links
    const existingManifests = document.querySelectorAll('link[rel="manifest"]')
    console.log(`🔧 Removing ${existingManifests.length} existing manifest links`)
    existingManifests.forEach(link => link.remove())

    // Create and add the appropriate manifest
    const manifestLink = document.createElement('link')
    manifestLink.rel = 'manifest'
    
    if (pathname.startsWith('/admin')) {
      manifestLink.href = '/admin-manifest.json'
      console.log('🔧 Admin manifest loaded for path:', pathname)
      
      // Add a data attribute to make it easier to identify
      manifestLink.setAttribute('data-manifest-type', 'admin')
    } else {
      manifestLink.href = '/manifest.json'
      console.log('🔧 Main manifest loaded for path:', pathname)
      
      // Add a data attribute to make it easier to identify
      manifestLink.setAttribute('data-manifest-type', 'main')
    }
    
    document.head.appendChild(manifestLink)

    // Also update PWA meta tags for admin
    if (pathname.startsWith('/admin')) {
      console.log('🔧 Updating PWA meta tags for admin')
      
      // Update app title
      const appNameMeta = document.querySelector('meta[name="application-name"]')
      if (appNameMeta) {
        appNameMeta.setAttribute('content', 'SIDIKOFF Admin')
      }
      
      const appleTitleMeta = document.querySelector('meta[name="apple-mobile-web-app-title"]')
      if (appleTitleMeta) {
        appleTitleMeta.setAttribute('content', 'SIDIKOFF Admin')
      }

      // Update theme color
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#4f46e5')
      }
    } else {
      console.log('🔧 Updating PWA meta tags for main site')
      
      // Reset to main site values
      const appNameMeta = document.querySelector('meta[name="application-name"]')
      if (appNameMeta) {
        appNameMeta.setAttribute('content', 'SIDIKOFF DIGITAL')
      }
      
      const appleTitleMeta = document.querySelector('meta[name="apple-mobile-web-app-title"]')
      if (appleTitleMeta) {
        appleTitleMeta.setAttribute('content', 'SIDIKOFF DIGITAL')
      }

      // Update theme color
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', '#6366f1')
      }
    }
  }, [pathname])

  return null
}
