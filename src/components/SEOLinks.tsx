'use client'

import { usePathname } from 'next/navigation'
import { Locale } from '@/lib/i18n'
import { createCanonicalUrl, createHreflangAlternates } from '@/lib/canonical'

interface SEOLinksProps {
  locale: Locale
}

export default function SEOLinks({ locale }: SEOLinksProps) {
  const pathname = usePathname()
  
  // Remove locale prefix from pathname for canonical generation
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
  
  const canonicalUrl = createCanonicalUrl(pathWithoutLocale, locale)
  const hreflangAlternates = createHreflangAlternates(pathWithoutLocale)

  return (
    <>
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Links */}
      {Object.entries(hreflangAlternates).map(([lang, url]) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/logo-sidikoff.webp" as="image" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preconnect for faster loading */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  )
}
