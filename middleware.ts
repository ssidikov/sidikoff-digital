import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { projects } from '@/data/portfolio-data'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // List of valid paths
  const validPaths = [
    '/',
    '/services',
    '/projects',
    '/mentions-legales',
    '/about',
    '/contact'
  ]

  // Check for valid project paths - allow any numeric ID
  const isValidProjectPath = pathname.startsWith('/projects/') && pathname.split('/').length === 3
  const projectId = pathname.startsWith('/projects/') ? pathname.split('/')[2] : null

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

  // Handle legacy project slug redirects
  if (projectId && legacyProjectSlugs[projectId]) {
    return NextResponse.redirect(new URL(`/projects/${legacyProjectSlugs[projectId]}`, request.url))
  }

  // If it's a valid path or valid project path, continue
  if (validPaths.includes(pathname) || isValidProjectPath) {
    return NextResponse.next()
  }

  // For any other path, redirect to homepage
  return NextResponse.redirect(new URL('/', request.url))
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
