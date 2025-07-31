
import Negotiator from 'negotiator'

import { match } from '@formatjs/intl-localematcher'

import { type Locale, locales, defaultLocale } from './i18n'




export function getLocale(request: Request): Locale {
  // Get Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language')
  
  if (!acceptLanguage) {
    return defaultLocale
  }

  // Parse languages from Accept-Language header
  const headers = { 'accept-language': acceptLanguage }
  const languages = new Negotiator({ headers }).languages()
  
  try {
    // Use intl-localematcher to find the best match
    const bestMatch = match(languages, locales, defaultLocale)
    return bestMatch as Locale
  } catch {
    // If no match found, return default locale
    return defaultLocale
  }
}

export function getPathnameLocale(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale
  }
  
  return null
}
