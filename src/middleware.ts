import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from './lib/i18n'

// Domain configuration
const PREFERRED_DOMAIN = 'sidikoff.com'
const CANONICAL_PROTOCOL = 'https'

// Constants for better maintainability
const STATIC_PATHS = [
  '/_next',
  '/api',
  '/favicon',
  '/robots',
  '/sitemap',
  '/studio',
  '/fonts',
] as const

const SECURITY_HEADERS = {
  'X-DNS-Prefetch-Control': 'on',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
} as const

// Deleted SEO locations that should return 410 Gone
const DELETED_SEO_CITIES = [
  'paris',
  'marseille',
  'lyon',
  'toulouse',
  'nice',
  'nantes',
  'montpellier',
  'strasbourg',
  'bordeaux',
  'lille',
  'rennes',
  'reims',
  'saint-etienne',
  'toulon',
  'le-havre',
  'grenoble',
  'dijon',
  'angers',
  'nimes',
  'villeurbanne',
  'saint-denis-reunion',
  'aix-en-provence',
  'clermont-ferrand',
  'brest',
  'limoges',
  'tours',
  'amiens',
  'perpignan',
  'metz',
  'besancon',
  'boulogne-billancourt',
  'orleans',
  'mulhouse',
  'rouen',
  'caen',
  'nancy',
  'argenteuil',
  'montreuil',
  'roubaix',
  'tourcoing',
  'nanterre',
  'avignon',
  'poitiers',
  'fort-de-france',
  'courbevoie',
  'versailles',
  'colombes',
  'aulnay-sous-bois',
  'saint-paul',
  'rueil-malmaison',
  'champigny-sur-marne',
  'antibes',
  'dunkerque',
  'pessac',
  'levallois-perret',
  'noisy-le-grand',
  'cergy',
  'pau',
  'ivry-sur-seine',
  'creteil',
  'bourges',
  'cannes',
  'montrouge',
  'neuilly-sur-seine',
  'sarcelles',
  'troyes',
  'issy-les-moulineaux',
  'montauban',
  'lorient',
  'beauvais',
  'cholet',
  'vannes',
  'laval',
  'charleville-mezieres',
  'allonnes',
  'valence',
  'les-abymes',
  'quimper',
  'meaux',
  'biarritz',
  'auxerre',
  'la-rochelle',
  'matoury',
  'evry-courcouronnes',
  'calais',
  'merignac',
  'saint-malo',
  'chelles',
  'bourg-en-bresse',
  'blois',
  'cagnes-sur-mer',
  'salon-de-provence',
  'saint-brieuc',
  'saint-nazaire',
  'chatou',
  'garges-les-gonesse',
  'savigny-sur-orge',
  'pontoise',
  'sens',
  'evreux',
  'choisy-le-roi',
  'suresnes',
  'puteaux',
  'clichy',
  'saint-germain-en-laye',
  'franconville',
  'drancy',
  'gagny',
  'livry-gargan',
  'sevran',
  'vitry-sur-seine',
  'thiais',
  'fresnes',
  'fontenay-sous-bois',
  'noisy-le-sec',
  'maisons-alfort',
  'saint-maur-des-fosses',
  'vincennes',
  'nogent-sur-marne',
  'le-perreux-sur-marne',
  'bry-sur-marne',
  'joinville-le-pont',
  'saint-mande',
  'charenton-le-pont',
  'alfortville',
  'maisons-laffitte',
  'le-vesinet',
  'sartrouville',
  'houilles',
  'carrieres-sur-seine',
  'le-port-marly',
  'marnes-la-coquette',
  'vaucresson',
  'chaville',
  'sevres',
  'vanves',
  'malakoff',
  'bagneux',
  'fontenay-aux-roses',
  'le-plessis-robinson',
  'chatenay-malabry',
  'antony',
  'bourg-la-reine',
  'sceaux',
  'rungis',
  'chevilly-larue',
  'l-hay-les-roses',
  'cachan',
  'arcueil',
  'gentilly',
  'le-kremlin-bicetre',
  'villejuif',
  'saint-maurice',
  'bagnolet',
  'les-lilas',
  'le-pre-saint-gervais',
  'pantin',
  'bobigny',
  'bondy',
  'rosny-sous-bois',
  'villemomble',
  'montfermeil',
  'clichy-sous-bois',
  'coubron',
  'vaujours',
  'le-blanc-mesnil',
  'dugny',
  'le-bourget',
  'la-courneuve',
  'stains',
  'pierrefitte-sur-seine',
  'villetaneuse',
  'epinay-sur-seine',
  'saint-denis',
  'l-ile-saint-denis',
  'saint-ouen-sur-seine',
  'garches',
  'saint-cloud',
  'meudon',
  'clamart',
  'annecy',
  'le-mans',
]

const DELETED_SEO_REGIONS = [
  'ile-de-france',
  'auvergne-rhone-alpes',
  'nouvelle-aquitaine',
  'occitanie',
  'hauts-de-france',
  'grand-est',
  'provence-alpes-cote-azur',
  'bretagne',
  'pays-de-la-loire',
  'normandie',
  'bourgogne-franche-comte',
  'centre-val-de-loire',
  'corse',
  'guadeloupe',
  'martinique',
  'guyane',
  'la-reunion',
  'mayotte',
]

/**
 * Checks if the path should skip middleware processing
 */
function shouldSkipMiddleware(pathname: string): boolean {
  return STATIC_PATHS.some((path) => pathname.startsWith(path)) || pathname.includes('.')
}

/**
 * Checks if the pathname is a deleted SEO page that should return 410
 */
function isDeletedSEOPage(pathname: string): boolean {
  // Remove locale prefix if present
  const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '')

  // Check for /seo/[slug] pattern (all deleted SEO pages)
  if (pathWithoutLocale.startsWith('/seo/')) {
    return true
  }

  // Check for specific deleted city/region patterns
  const seoPattern = /^\/seo\/creation-site-web-(.*)/
  const match = pathWithoutLocale.match(seoPattern)

  if (match) {
    const slug = match[1]
    return slug ? DELETED_SEO_CITIES.includes(slug) || DELETED_SEO_REGIONS.includes(slug) : false
  }

  return false
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

  // Handle deprecated /services/consultation URLs - redirect to contact
  if (
    pathname === '/services/consultation' ||
    pathname === '/en/services/consultation' ||
    pathname === '/ru/services/consultation'
  ) {
    let redirectPath = '/contact'
    if (pathname.startsWith('/en/')) redirectPath = '/en/contact'
    if (pathname.startsWith('/ru/')) redirectPath = '/ru/contact'

    const redirectUrl = new URL(redirectPath, request.url)
    return NextResponse.redirect(redirectUrl, {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000', // Cache redirect for 1 year
        ...SECURITY_HEADERS,
      },
    })
  }

  // Check for deleted SEO pages first - return 410 Gone
  if (isDeletedSEOPage(pathname)) {
    // Extract location info from URL
    const pathWithoutLocale = pathname.replace(/^\/(en|ru)/, '')
    const seoMatch = pathWithoutLocale.match(/\/seo\/creation-site-web-(.*)/)
    const locationName = seoMatch?.[1]?.replace(/-/g, ' ') || ''

    // Determine locale from pathname
    let locale: 'fr' | 'en' | 'ru' = 'fr'
    if (pathname.startsWith('/en/')) locale = 'en'
    if (pathname.startsWith('/ru/')) locale = 'ru'

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
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
        ...SECURITY_HEADERS,
      },
    })
  }

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

  // Domain canonicalization: redirect www to non-www
  const host = request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'

  // Only redirect in production to avoid issues with localhost
  if (process.env.NODE_ENV === 'production' && host) {
    // Check if we need to redirect from www to non-www
    if (host === 'www.sidikoff.com' || host.startsWith('www.sidikoff.com:')) {
      const redirectUrl = new URL(request.url)
      redirectUrl.host = PREFERRED_DOMAIN
      redirectUrl.protocol = CANONICAL_PROTOCOL

      return NextResponse.redirect(redirectUrl, {
        status: 301,
        headers: {
          'Cache-Control': 'public, max-age=31536000', // Cache redirect for 1 year
        },
      })
    }

    // Also handle protocol redirects (HTTP → HTTPS)
    if (protocol === 'http' && (host === PREFERRED_DOMAIN || host === 'www.sidikoff.com')) {
      const redirectUrl = new URL(request.url)
      redirectUrl.protocol = 'https'
      if (host === 'www.sidikoff.com') {
        redirectUrl.host = PREFERRED_DOMAIN
      }

      return NextResponse.redirect(redirectUrl, {
        status: 301,
        headers: {
          'Cache-Control': 'public, max-age=31536000',
        },
      })
    }
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
