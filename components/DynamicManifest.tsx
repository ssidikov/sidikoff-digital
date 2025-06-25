'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function DynamicManifest() {
  const pathname = usePathname()

  useEffect(() => {
    // Skip dynamic manifest loading for admin routes - they handle their own manifest
    if (pathname.startsWith('/admin')) {
      console.log('🔧 Skipping DynamicManifest for admin route:', pathname)
      return
    }

    // Remove any existing manifest links (but preserve admin manifest if present)
    const existingManifests = document.querySelectorAll('link[rel="manifest"]:not(#admin-manifest)')
    console.log(`🔧 Removing ${existingManifests.length} existing manifest links`)
    existingManifests.forEach((link) => link.remove())

    // Create and add the appropriate manifest
    const manifestLink = document.createElement('link')
    manifestLink.rel = 'manifest'

    // Only handle main site manifest (admin is handled separately)
    manifestLink.href = '/manifest.json'
    console.log('🔧 Main manifest loaded for path:', pathname)

    // Add a data attribute to make it easier to identify
    manifestLink.setAttribute('data-manifest-type', 'main')

    document.head.appendChild(manifestLink)

    // Update PWA meta tags for main site
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
  }, [pathname])

  return null
}
