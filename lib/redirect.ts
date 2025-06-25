/**
 * Redirect utilities for handling 404 and error cases
 */

export const redirectToHome = () => {
  if (typeof window !== 'undefined') {
    // Client-side redirect
    window.location.href = '/'
  }
}

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const redirectToHomeWithRouter = (router: AppRouterInstance | null) => {
  if (router) {
    router.replace('/')
  } else {
    redirectToHome()
  }
}

export const isValidPath = (pathname: string): boolean => {
  const validPaths = [
    '/',
    '/services',
    '/projects',
    '/mentions-legales',
    '/about',
    '/contact'
  ]

  // Check for valid static paths
  if (validPaths.includes(pathname)) {
    return true
  }

  // Check for valid project paths
  if (pathname.startsWith('/projects/') && pathname.split('/').length === 3) {
    return true
  }

  return false
}

export const shouldRedirect = (pathname: string): boolean => {
  // Don't redirect static assets, API routes, etc.
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
    return false
  }

  return !isValidPath(pathname)
}
