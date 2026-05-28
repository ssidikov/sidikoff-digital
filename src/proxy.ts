import { NextRequest, NextResponse } from 'next/server'
import { SECURITY_HEADERS_MAP } from '@/lib/security-headers'

// Domain configuration
const PREFERRED_DOMAIN = 'www.sidikoff.com'
const CANONICAL_PROTOCOL = 'https'

// Constants for better maintainability
const STATIC_PATHS = ['/_next', '/api', '/favicon', '/robots', '/sitemap', '/fonts'] as const

const SECURITY_HEADERS = {
  ...SECURITY_HEADERS_MAP,
  ...(process.env.NODE_ENV === 'development'
    ? {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        Pragma: 'no-cache',
        Expires: '0',
        'Surrogate-Control': 'no-store',
      }
    : {
        'Cache-Control': 'public, max-age=0, must-revalidate',
      }),
} as const

/**
 * Checks if the path should skip middleware processing
 * ОПТИМИЗИРОВАНО: Используем Set для быстрого поиска
 */
const STATIC_PATHS_SET = new Set(STATIC_PATHS)

const FILE_EXTENSION_RE = /\.\w{1,6}$/

function shouldSkipMiddleware(pathname: string): boolean {
  if (FILE_EXTENSION_RE.test(pathname)) return true

  for (const path of STATIC_PATHS_SET) {
    if (pathname.startsWith(path)) return true
  }

  return false
}

/**
 * Checks if the pathname is a deleted SEO page that should return 410
 * ОПТИМИЗИРОВАНО: Используем Set для быстрого поиска O(1)
 */
function isDeletedSEOPage(pathname: string): boolean {
  // Remove locale prefix if present
  const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '')

  // ИСПРАВЛЕНО: Все URL с /seo/ считаются удалёнными страницами
  // Это включает как /seo/city так и /seo/creation-site-web-city
  if (pathWithoutLocale.startsWith('/seo/')) {
    return true
  }

  return false
}

/**
 * Checks if pathname has double locale prefixes that need to be fixed
 */
function hasDoubleLocalePrefix(pathname: string): boolean {
  const localePattern = /^\/([a-z]{2})\/([a-z]{2})\//
  return localePattern.test(pathname)
}

/**
 * Fixes double locale prefixes by stripping both locale segments → clean path
 */
function fixDoubleLocalePrefix(pathname: string): string {
  const match = pathname.match(/^\/[a-z]{2}\/[a-z]{2}\/(.*)$/)
  if (match) {
    return `/${match[1]}`
  }
  return pathname
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ОПТИМИЗАЦИЯ: Ранний выход для статических файлов (самая частая проверка)
  // Экономит ~50-100ms на каждый запрос статики
  if (shouldSkipMiddleware(pathname)) {
    return enhanceResponse(NextResponse.next())
  }

  // ── Markdown Content Negotiation (RFC: text/markdown for AI agents) ──────
  // When a client sends Accept: text/markdown, return Markdown instead of HTML.
  const acceptHeader = request.headers.get('accept') || ''
  const isContentPage =
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/well-known/') &&
    !pathname.match(/\.well-known/) &&
    !pathname.match(/\.(ico|png|svg|jpg|jpeg|webp|avif|xml|json|txt|js|css|woff2?)$/)

  if (acceptHeader.includes('text/markdown') && isContentPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/api/markdown'
    url.searchParams.set('path', pathname)
    return NextResponse.rewrite(url)
  }
  // ─────────────────────────────────────────────────────────────────────────

  // Handle deprecated /services/consultation URLs - redirect to contact
  if (pathname === '/services/consultation') {
    const redirectUrl = new URL('/contact', request.url)
    return NextResponse.redirect(redirectUrl, {
      status: 301,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        ...SECURITY_HEADERS,
      },
    })
  }

  // Check for deleted SEO pages first - return 410 Gone
  if (isDeletedSEOPage(pathname)) {
    // Extract location info from URL
    const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '')

    // ИСПРАВЛЕНО: Обрабатываем оба формата:
    // - /seo/creation-site-web-city
    // - /seo/city
    let locationName = ''
    const longFormatMatch = pathWithoutLocale.match(/\/seo\/creation-site-web-(.+)/)
    const shortFormatMatch = pathWithoutLocale.match(/\/seo\/(.+)/)

    if (longFormatMatch?.[1]) {
      locationName = longFormatMatch[1].replace(/-/g, ' ')
    } else if (shortFormatMatch?.[1]) {
      locationName = shortFormatMatch[1].replace(/-/g, ' ')
    }

    // Determine locale from pathname (always FR now)
    const locale = 'fr'

    // Create URL for our landing page with parameters
    const landingUrl = new URL('/gone-landing', request.url)
    if (locationName) {
      landingUrl.searchParams.set('city', locationName)
    }
    landingUrl.searchParams.set('locale', locale)

    // Return 410 status with redirect to our React landing page
    return NextResponse.rewrite(landingUrl, {
      status: 410,
      statusText: 'Gone',
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        ...SECURITY_HEADERS,
      },
    })
  }

  // Domain canonicalization: non-www → www
  // vercel.json handles this at CDN level — this is a belt-and-suspenders fallback
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'

  if (host && (host === 'sidikoff.com' || host.startsWith('sidikoff.com:'))) {
    const redirectUrl = new URL(request.url)
    redirectUrl.host = PREFERRED_DOMAIN
    redirectUrl.protocol = CANONICAL_PROTOCOL

    return NextResponse.redirect(redirectUrl, {
      status: 301,
      headers: { ...SECURITY_HEADERS },
    })
  }

  // Also handle protocol redirects (HTTP → HTTPS) in production
  if (process.env.NODE_ENV === 'production' && protocol === 'http' && host === PREFERRED_DOMAIN) {
    const redirectUrl = new URL(request.url)
    redirectUrl.protocol = 'https'

    return NextResponse.redirect(redirectUrl, {
      status: 301,
      headers: SECURITY_HEADERS,
    })
  }

  // Fix double locale prefixes (e.g., /ru/ru/blog -> /ru/blog)
  if (hasDoubleLocalePrefix(pathname)) {
    const fixedPath = fixDoubleLocalePrefix(pathname)
    const redirectUrl = new URL(fixedPath, request.url)
    return NextResponse.redirect(redirectUrl, {
      status: 301,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        ...SECURITY_HEADERS,
      },
    })
  }

  // Handle French redirects properly to avoid redirect chains
  if (pathname.startsWith('/fr/') || pathname === '/fr') {
    const newPath = pathname === '/fr' ? '/' : pathname.replace('/fr', '')
    const redirectUrl = new URL(newPath, request.url)
    return NextResponse.redirect(redirectUrl, {
      status: 301,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        ...SECURITY_HEADERS,
      },
    })
  }

  // French is the only locale and served at clean URLs (no prefix needed).
  // All (main) routes live at their clean paths directly — no rewrite required.
  return enhanceResponse(NextResponse.next())
}

/**
 * Enhances response with security headers and CSP
 */
function enhanceResponse(response: NextResponse) {
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  const isDevelopment = process.env.NODE_ENV === 'development'

  if (!isDevelopment) {
    response.headers.set('Content-Security-Policy', generateCSPHeader())
  }

  return response
}

/**
 * Generates Content Security Policy header based on context
 */
function generateCSPHeader(): string {
  const baseCSP = "default-src 'self';"

  return `
    ${baseCSP}
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    img-src 'self' blob: data:;
    font-src 'self' fonts.gstatic.com;
    connect-src 'self' https://vitals.vercel-insights.com;
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export const config = {
  matcher: ['/((?!_next|api|favicon|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)'],
}
