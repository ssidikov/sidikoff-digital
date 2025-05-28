import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

  // Check for valid project paths
  const isValidProjectPath = pathname.startsWith('/projects/') && pathname.split('/').length === 3

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
