import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { projects } from '@/data/portfolio-data'

const locales = ['fr', 'en', 'ru']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const userAgent = request.headers.get('user-agent') || ''

  // Sanity Studio Basic Auth protection
  if (pathname.startsWith('/studio')) {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Sanity Studio"',
        },
      })
    }

    const auth = authHeader.split(' ')[1]
    const [username, password] = Buffer.from(auth, 'base64').toString().split(':')

    // Get credentials from environment variables
    const validUsername = process.env.STUDIO_AUTH_USERNAME
    const validPassword = process.env.STUDIO_AUTH_PASSWORD

    if (username !== validUsername || password !== validPassword) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Sanity Studio"',
        },
      })
    }

    // Authentication successful, continue to studio
    return NextResponse.next()
  }

  // Admin routes protection
  if (pathname.startsWith('/admin')) {
    // Allow login page
    if (pathname === '/admin/login') {
      return NextResponse.next()
    }

    // Check for admin session cookie
    const adminSession = request.cookies.get('admin_session')

    if (!adminSession) {
      // Redirect to login if no session
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    try {
      // Basic validation that the session exists and is parseable
      JSON.parse(adminSession.value)
      return NextResponse.next()
    } catch {
      // Invalid session, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Check if the request is from a search engine bot
  const isBot = /bot|crawl|spider|facebook|twitter|linkedin|whatsapp|telegram/i.test(userAgent)

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
    '/contact',
    '/blog',
  ]

  // Check for valid project paths - allow any numeric ID
  const isValidProjectPath = (path: string) => {
    const segments = path.split('/')
    return segments.length === 3 && segments[1] === 'projects' && segments[2]
  }

  // Legacy project slug mappings - redirect old slug URLs to new ID URLs
  const legacyProjectSlugs: Record<string, string> = {
    kasa: '1',
    'sport-see': '2',
    'argent-bank': '3',
    hrnet: '4',
    'petits-plats': '5',
    cookies: '6',
    fisheye: '7',
    'game-on': '8',
    ohmyfood: '9',
    billed: '10',
    booki: '11',
    'burger-house': '12',
    'learn-home': '13',
    euclid: '14',
  }

  // Static assets and API routes should pass through
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/logo/') ||
    pathname.startsWith('/studio') ||
    pathname.startsWith('/blog') ||
    pathname.includes('.') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico' ||
    pathname === '/manifest.json'
  ) {
    return NextResponse.next()
  }

  // Special redirects for hash-based navigation
  if (pathname === '/about') {
    return NextResponse.redirect(new URL('/#about', request.url))
  }
  if (pathname === '/services') {
    return NextResponse.redirect(new URL('/#services', request.url))
  }
  if (pathname === '/contact') {
    return NextResponse.redirect(new URL('/#contact', request.url))
  }

  // Special redirect for euclid project to homepage
  if (pathname === '/projects/euclid') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Handle legacy project slug redirects for paths without locale
  const projectMatch = pathname.match(/^\/projects\/(.+)$/)
  if (projectMatch && legacyProjectSlugs[projectMatch[1]]) {
    return NextResponse.redirect(
      new URL(`/projects/${legacyProjectSlugs[projectMatch[1]]}`, request.url)
    )
  }

  // Handle locale-prefixed legacy redirects
  const localeProjectMatch = pathname.match(/^\/([a-z]{2})\/projects\/(.+)$/)
  if (
    localeProjectMatch &&
    locales.includes(localeProjectMatch[1]) &&
    legacyProjectSlugs[localeProjectMatch[2]]
  ) {
    return NextResponse.redirect(
      new URL(
        `/${localeProjectMatch[1]}/projects/${legacyProjectSlugs[localeProjectMatch[2]]}`,
        request.url
      )
    )
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

  // If pathname has locale prefix, check if it's a bot request
  if (!pathnameIsMissingLocale) {
    // Extract locale and remaining path
    const segments = pathname.split('/')
    const locale = segments[1]
    const pathWithoutLocale = '/' + segments.slice(2).join('/')

    // Validate locale
    if (!locales.includes(locale)) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Allow access to localized pages for both bots and regular users
    if (
      pathWithoutLocale === '/' ||
      validPaths.includes(pathWithoutLocale) ||
      isValidProjectPath(pathWithoutLocale)
    ) {
      return NextResponse.next()
    }

    // For any other path with locale prefix, redirect to homepage with locale (for bots)
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }
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
