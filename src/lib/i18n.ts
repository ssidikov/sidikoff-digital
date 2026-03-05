export type Locale = 'fr'

export const locales: Locale[] = ['fr']
export const defaultLocale: Locale = 'fr' // French as default for the French market

// Language metadata configuration
export const LANGUAGE_CONFIG = {
  names: {
    fr: 'Français',
  },
  flags: {
    fr: '🇫🇷',
  },
  localeMap: {
    fr: 'fr-FR',
  },
  currencies: {
    fr: 'EUR',
  },
} as const

// Legacy exports for backward compatibility
export const languageNames = LANGUAGE_CONFIG.names
export const languageFlags = LANGUAGE_CONFIG.flags

/**
 * Check if locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

/**
 * Get locale from pathname
 */
export function getLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment
  }

  // If no locale in pathname, assume it's the default locale (French)
  return defaultLocale
}

/**
 * Remove locale from pathname
 */
export function removeLocaleFromPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] === locale) {
    segments.shift()
  }
  return '/' + segments.join('/')
}

/**
 * Add locale to pathname
 * French is the only locale, always serve at root (no locale prefix)
 */
export function addLocaleToPathname(pathname: string, locale: Locale): string {
  return pathname.startsWith('/') ? pathname : `/${pathname}`
}

/**
 * Get alternate URLs for SEO
 */
export function getAlternateUrls(pathname: string, baseUrl: string = '') {
  const cleanPath = removeLocaleFromPathname(
    pathname,
    getLocaleFromPathname(pathname) || defaultLocale,
  )

  return locales.map((locale) => ({
    locale,
    url: `${baseUrl}${addLocaleToPathname(cleanPath, locale)}`,
    hreflang: LANGUAGE_CONFIG.localeMap[locale],
  }))
}

/**
 * Format number based on locale
 */
export function formatNumber(num: number, locale: Locale): string {
  return new Intl.NumberFormat(LANGUAGE_CONFIG.localeMap[locale]).format(num)
}

/**
 * Format date based on locale
 */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(LANGUAGE_CONFIG.localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Format currency based on locale
 */
export function formatCurrency(amount: number, locale: Locale): string {
  const currency = LANGUAGE_CONFIG.currencies[locale]
  return new Intl.NumberFormat(LANGUAGE_CONFIG.localeMap[locale], {
    style: 'currency',
    currency,
  }).format(amount)
}
