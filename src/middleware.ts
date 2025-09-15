import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from './lib/i18n'

// Constants for better maintainability
const STATIC_PATHS = ['/_next', '/api', '/favicon', '/robots', '/sitemap', '/studio', '/fonts'] as const

const SECURITY_HEADERS = {
  'X-DNS-Prefetch-Control': 'on',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
} as const

/**
 * Checks if the path should skip middleware processing
 */
function shouldSkipMiddleware(pathname: string): boolean {
  return STATIC_PATHS.some((path) => pathname.startsWith(path)) || pathname.includes('.')
}

/**
 * Checks if pathname has a valid locale prefix (excluding French as it's default)
 */
function hasLocalePrefix(pathname: string): boolean {
  const nonDefaultLocales = locales.filter((locale) => locale !== defaultLocale)
  return nonDefaultLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
}

/**
 * Checks if pathname has double locale prefixes that need to be fixed
 */
function hasDoubleLocalePrefix(pathname: string): boolean {
  const localePattern = /^\/([a-z]{2})\/([a-z]{2})\//
  return localePattern.test(pathname)
}

/**
 * Fixes double locale prefixes by removing the first occurrence
 */
function fixDoubleLocalePrefix(pathname: string): string {
  const match = pathname.match(/^\/([a-z]{2})\/([a-z]{2})\/(.*)$/)
  if (match) {
    const [, , secondLocale, rest] = match
    // Keep the second locale and remove the first
    return `/${secondLocale}/${rest}`
  }
  return pathname
}

/**
 * Validates studio authentication
 */
function validateStudioAuth(request: NextRequest): boolean {
  const token = request.cookies.get('studio-auth')?.value
  const validToken = process.env.STUDIO_AUTH_TOKEN
  return Boolean(token && validToken && token === validToken)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Studio authentication check
  if (pathname.startsWith('/studio') && pathname !== '/studio') {
    if (!validateStudioAuth(request)) {
      return NextResponse.redirect(new URL('/studio', request.url))
    }
  }

  // Skip middleware for static files and API routes
  if (shouldSkipMiddleware(pathname)) {
    return enhanceResponse(NextResponse.next(), pathname)
  }

  // Fix double locale prefixes (e.g., /ru/ru/blog -> /ru/blog)
  if (hasDoubleLocalePrefix(pathname)) {
    const fixedPath = fixDoubleLocalePrefix(pathname)
    const redirectUrl = new URL(fixedPath, request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = hasLocalePrefix(pathname)

  // Handle French redirects properly to avoid redirect chains
  if (pathname.startsWith('/fr/') || pathname === '/fr') {
    const newPath = pathname === '/fr' ? '/' : pathname.replace('/fr', '')
    const redirectUrl = new URL(newPath, request.url)
    return NextResponse.redirect(redirectUrl, 301)
  }

  // If pathname already has a locale (en/ru), continue normally
  if (pathnameHasLocale) {
    return enhanceResponse(NextResponse.next(), pathname)
  }

  // For App Router with French as default:
  // Root path "/" should be handled by root page.tsx (French content)
  // Other paths without locale should be rewritten to French locale internally
  if (pathname !== '/' && !pathnameHasLocale) {
    // Rewrite to French locale path internally (no redirect)
    const rewriteUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
    return enhanceResponse(NextResponse.rewrite(rewriteUrl), pathname)
  }

  // For root path, let it go to page.tsx (French content)
  return enhanceResponse(NextResponse.next(), pathname)
}

/**
 * Enhances response with security headers and CSP
 */
function enhanceResponse(response: NextResponse, pathname?: string) {
  // Apply security headers
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // CSP Header for security
  const isStudio = pathname?.startsWith('/studio') ?? false
  const isDevelopment = process.env.NODE_ENV === 'development'

  // Only set CSP in production to avoid development issues
  if (!isDevelopment) {
    const cspHeader = generateCSPHeader(isStudio)
    response.headers.set('Content-Security-Policy', cspHeader)
  }

  return response
}

/**
 * Generates Content Security Policy header based on context
 */
function generateCSPHeader(isStudio: boolean): string {
  const baseCSP = "default-src 'self';"

  if (isStudio) {
    return `
      ${baseCSP}
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data: https://cdn.sanity.io;
      font-src 'self' data:;
      connect-src 'self' https://71pz7dxk.api.sanity.io;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
    `
      .replace(/\s{2,}/g, ' ')
      .trim()
  }

  return `
    ${baseCSP}
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
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
  matcher: [
    // Skip all internal paths (_next, api, etc) and static files, but include studio
    '/((?!_next|api|favicon|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)',
    '/studio/:path*',
  ],
}
