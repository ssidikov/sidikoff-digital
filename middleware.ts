import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { projects } from '@/data/portfolio-data'

// Polyfill for 'self is not defined' error
if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
  // @ts-ignore
  globalThis.self = globalThis
}

// Supported locales for manual routing
const locales = ['fr', 'en', 'ru']
const defaultLocale = 'fr'

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

  // Check if pathname has a locale
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If no locale in pathname, it's French (default)
  if (!pathnameLocale) {
    // Allow French pages without locale prefix
    // French content is served from root paths
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

  // Handle legacy project slug redirects for all locales
  const projectMatch = pathname.match(/^(\/(?:en|ru))?\/projects\/(.+)$/)
  if (projectMatch && legacyProjectSlugs[projectMatch[2]]) {
    const localePrefix = projectMatch[1] || ''
    return NextResponse.redirect(
      new URL(`${localePrefix}/projects/${legacyProjectSlugs[projectMatch[2]]}`, request.url)
    )
  }

  // Manual locale detection and routing for App Router
  // Since we removed i18n config, handle locale routing manually
  return NextResponse.next()
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
