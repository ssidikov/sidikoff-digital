export type Locale = 'fr'

export const locales: Locale[] = ['fr']
export const defaultLocale: Locale = 'fr'

/**
 * Check if locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

/**
 * Add locale prefix to pathname
 * French is the only locale, always serve at root (no locale prefix)
 */
export function addLocaleToPathname(pathname: string, _locale: Locale): string {
  return pathname.startsWith('/') ? pathname : `/${pathname}`
}

/**
 * Format date for French locale
 */
export function formatDate(date: Date, _locale: Locale): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
