'use client'

import { usePathname } from 'next/navigation'
import { Locale } from '@/lib/i18n'
import { createCanonicalUrl, generateLanguageAlternates } from '@/lib/seo-utils'

interface SEOLinksProps {
  locale: Locale
}

export default function SEOLinks({ locale }: SEOLinksProps) {
  const pathname = usePathname()

  // Remove locale prefix from pathname for canonical generation
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

  const canonicalUrl = createCanonicalUrl(pathWithoutLocale, locale)
  const hreflangAlternates = generateLanguageAlternates(pathWithoutLocale)

  return (
    <>
      {/* Canonical Link */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Hreflang Links */}
      {Object.entries(hreflangAlternates).map(([lang, url]) => (
        <link key={lang} rel='alternate' hrefLang={lang} href={url} />
      ))}

      {/* Preload critical resources */}
      <link rel='preload' href='/logo-sidikoff.webp' as='image' />

      {/* ИСПРАВЛЕНО: Убраны preload и preconnect для шрифтов - Next.js делает это автоматически */}
    </>
  )
}
