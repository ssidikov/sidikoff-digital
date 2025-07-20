'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface DynamicHreflangProps {
  currentLocale?: 'fr' | 'en' | 'ru'
  baseUrl?: string
}

export default function DynamicHreflang({ 
  currentLocale = 'fr',
  baseUrl = 'https://sidikoff.com' 
}: DynamicHreflangProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Remove any existing hreflang links
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingLinks.forEach(link => link.remove())

    // Generate clean path without locale prefix
    const cleanPath = pathname.replace(/^\/(en|ru)/, '') || '/'

    // Create hreflang links
    const hreflangData = [
      { hreflang: 'fr', href: `${baseUrl}${cleanPath}` },
      { hreflang: 'en', href: `${baseUrl}/en${cleanPath}` },
      { hreflang: 'ru', href: `${baseUrl}/ru${cleanPath}` },
      { hreflang: 'x-default', href: `${baseUrl}${cleanPath}` },
    ]

    // Add hreflang links to head
    hreflangData.forEach(({ hreflang, href }) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = hreflang
      link.href = href
      document.head.appendChild(link)
    })

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }

    // Set canonical URL based on current locale
    const canonicalUrl = currentLocale === 'fr' 
      ? `${baseUrl}${cleanPath}` 
      : `${baseUrl}/${currentLocale}${cleanPath}`
    
    canonicalLink.setAttribute('href', canonicalUrl)

  }, [pathname, currentLocale, baseUrl])

  return null // This component doesn't render anything visible
}
