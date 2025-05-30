import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { projects } from '@/data/portfolio-data'

const locales = ['fr', 'en', 'ru']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Extract locale from pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // List of valid paths (without locale prefix)
  const validPaths = [
    '/',
    '/services',
    '/projects',
    '/mentions-legales',
    '/about',
    '/contact'
  ]

  // Check for valid project paths - allow any numeric ID
  const isValidProjectPath = (path: string) => {
    const segments = path.split('/')
    return segments.length === 3 && segments[1] === 'projects' && segments[2]
  }

  // Legacy project slug mappings - redirect old slug URLs to new ID URLs
  const legacyProjectSlugs: Record<string, string> = {
    'kasa': '1',
    'sport-see': '2', 
    'argent-bank': '3',
    'hrnet': '4',
    'petits-plats': '5',
    'cookies': '6',
    'fisheye': '7',
    'game-on': '8',
    'ohmyfood': '9',
    'billed': '10',
    'booki': '11',
    'burger-house': '12',
    'learn-home': '13',
    'euclid': '14'
  }

  // Static assets and API routes should pass through
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/logo/') ||
    pathname.includes('.') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico' ||
    pathname === '/manifest.json'
  ) {
    return NextResponse.next()
  }

  // Special redirect for euclid project to homepage
  if (pathname === '/projects/euclid') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Handle legacy project slug redirects for paths without locale
  const projectMatch = pathname.match(/^\/projects\/(.+)$/)
  if (projectMatch && legacyProjectSlugs[projectMatch[1]]) {
    return NextResponse.redirect(new URL(`/projects/${legacyProjectSlugs[projectMatch[1]]}`, request.url))
  }

  // Handle locale-prefixed legacy redirects
  const localeProjectMatch = pathname.match(/^\/([a-z]{2})\/projects\/(.+)$/)
  if (localeProjectMatch && locales.includes(localeProjectMatch[1]) && legacyProjectSlugs[localeProjectMatch[2]]) {
    return NextResponse.redirect(new URL(`/${localeProjectMatch[1]}/projects/${legacyProjectSlugs[localeProjectMatch[2]]}`, request.url))
  }

  // If pathname is missing locale, redirect to default locale (fr)
  if (pathnameIsMissingLocale) {
    // Special handling for root path
    if (pathname === '/') {
      return NextResponse.next() // Allow root path without redirect
    }
    
    // For other paths, check if they're valid
    if (validPaths.includes(pathname) || isValidProjectPath(pathname)) {
      return NextResponse.next() // Allow valid paths without locale
    }
    
    // For invalid paths, redirect to homepage
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Extract locale and remaining path
  const segments = pathname.split('/')
  const locale = segments[1]
  const pathWithoutLocale = '/' + segments.slice(2).join('/')

  // Validate locale
  if (!locales.includes(locale)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Check if the path without locale is valid
  if (validPaths.includes(pathWithoutLocale) || isValidProjectPath(pathWithoutLocale)) {
    return NextResponse.next()
  }

  // For any other path, redirect to homepage with locale
  return NextResponse.redirect(new URL(`/${locale}`, request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
