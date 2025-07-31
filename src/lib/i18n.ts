

export type Locale = 'fr' | 'en' | 'ru'

export const locales: Locale[] = ['fr', 'en', 'ru']
export const defaultLocale: Locale = 'fr' // French as default for the French market

// Language metadata
export const languageNames = {
  en: 'English',
  fr: 'Français', 
  ru: 'Русский',
}

export const languageFlags = {
  en: '🇺🇸',
  fr: '🇫🇷',
  ru: '🇷🇺',
}

// Check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// Get locale from pathname
export function getLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment
  }

  // If no locale in pathname, assume it's the default locale (French)
  return defaultLocale
}

// Remove locale from pathname
export function removeLocaleFromPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] === locale) {
    segments.shift()
  }
  return '/' + segments.join('/')
}

// Add locale to pathname
export function addLocaleToPathname(pathname: string, locale: Locale): string {
  // For French (default locale), don't add locale prefix - serve at root
  if (locale === defaultLocale) {
    return pathname.startsWith('/') ? pathname : `/${pathname}`
  }
  
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname
  return `/${locale}/${cleanPath}`.replace(/\/+/g, '/').replace(/\/$/, '') || `/${locale}`
}

// Get alternate URLs for SEO
export function getAlternateUrls(pathname: string, baseUrl: string = '') {
  const cleanPath = removeLocaleFromPathname(
    pathname,
    getLocaleFromPathname(pathname) || defaultLocale
  )

  return locales.map((locale) => ({
    locale,
    url: `${baseUrl}${addLocaleToPathname(cleanPath, locale)}`,
    hreflang: locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU',
  }))
}

// Format number based on locale
export function formatNumber(num: number, locale: Locale): string {
  return new Intl.NumberFormat(
    locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU'
  ).format(num)
}

// Format date based on locale
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Format currency based on locale
export function formatCurrency(amount: number, locale: Locale): string {
  const currency = locale === 'en' ? 'USD' : locale === 'fr' ? 'EUR' : 'RUB'
  return new Intl.NumberFormat(locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU', {
    style: 'currency',
    currency,
  }).format(amount)
}
