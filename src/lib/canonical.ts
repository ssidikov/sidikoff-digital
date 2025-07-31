import { Locale } from './i18n'

/**
 * Create canonical URL for SEO
 */
export function createCanonicalUrl(path: string, locale: Locale): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // For root path, just return locale
  if (!cleanPath || cleanPath === '/') {
    return `${baseUrl}/${locale}`
  }
  
  return `${baseUrl}/${locale}/${cleanPath}`
}

/**
 * Create hreflang alternates for SEO
 */
export function createHreflangAlternates(path: string): Record<string, string> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'
  const locales: Locale[] = ['fr', 'en', 'ru']
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  const alternates: Record<string, string> = {}
  
  locales.forEach((locale) => {
    if (!cleanPath || cleanPath === '/') {
      alternates[locale] = `${baseUrl}/${locale}`
    } else {
      alternates[locale] = `${baseUrl}/${locale}/${cleanPath}`
    }
  })
  
  // Add x-default to French (main language)
  alternates['x-default'] = alternates['fr'] || `${baseUrl}/fr`
  
  return alternates
}

/**
 * Create Open Graph locale alternates
 */
export function createOgLocaleAlternates(): string[] {
  return ['fr_FR', 'en_US', 'ru_RU']
}

/**
 * Get proper locale string for meta tags
 */
export function getMetaLocale(locale: Locale): string {
  const localeMap = {
    fr: 'fr_FR',
    en: 'en_US', 
    ru: 'ru_RU'
  }
  
  return localeMap[locale] || 'fr_FR'
}
