'use client'

import { useEffect } from 'react'

export default function AdminManifestOverride() {
  useEffect(() => {
    // Force the admin manifest to be the active one
    console.log('🔧 AdminManifestOverride: Ensuring admin manifest is active')

    // Remove all existing manifest links
    const existingManifests = document.querySelectorAll('link[rel="manifest"]')
    console.log(`🔧 Removing ${existingManifests.length} existing manifest links`)
    existingManifests.forEach((link) => link.remove())

    // Create and add the admin manifest link
    const adminManifestLink = document.createElement('link')
    adminManifestLink.rel = 'manifest'
    adminManifestLink.href = '/admin-manifest.json'
    adminManifestLink.setAttribute('data-manifest-type', 'admin')
    adminManifestLink.setAttribute('id', 'admin-manifest')

    // Add to head with high priority
    document.head.appendChild(adminManifestLink)
    console.log('🔧 Admin manifest loaded and set as primary')

    // Update meta tags specifically for Android PWA detection
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Set PWA meta tags specifically for admin
    updateMeta('application-name', 'SIDIKOFF Admin')
    updateMeta('apple-mobile-web-app-title', 'SIDIKOFF Admin')
    updateMeta('apple-mobile-web-app-capable', 'yes')
    updateMeta('mobile-web-app-capable', 'yes')
    updateMeta('theme-color', '#4f46e5')
    updateMeta('apple-mobile-web-app-status-bar-style', 'default')

    // Add viewport meta for PWA
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      )
    }

    console.log('🔧 Admin PWA meta tags updated for Android detection')

    // Dispatch custom event to notify that admin manifest is ready
    window.dispatchEvent(
      new CustomEvent('adminManifestReady', {
        detail: { manifestUrl: '/admin-manifest.json' },
      })
    )
  }, [])

  return null
}
