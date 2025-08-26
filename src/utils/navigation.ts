import { Locale, addLocaleToPathname } from '@/lib/i18n'

export interface NavigationItem {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

// Route label mappings for breadcrumb generation
const ROUTE_LABELS: Record<string, string> = {
  contact: 'Contact',
  projects: 'Projets',
  blog: 'Blog',
  about: 'À propos',
  services: 'Services',
  'mentions-legales': 'Mentions légales',
} as const

/**
 * Generate locale-aware URL
 */
export function getLocalizedUrl(path: string, locale: Locale): string {
  return addLocaleToPathname(path, locale)
}

/**
 * Generate project URL for specific locale
 */
export function getProjectUrl(projectId: string, locale: Locale): string {
  return getLocalizedUrl(`/projects/${projectId}`, locale)
}

/**
 * Generate projects list URL for specific locale
 */
export function getProjectsUrl(locale: Locale): string {
  return getLocalizedUrl('/projects', locale)
}

/**
 * Generate blog URL for specific locale
 */
export function getBlogUrl(locale: Locale): string {
  return getLocalizedUrl('/blog', locale)
}

/**
 * Generate blog post URL for specific locale
 */
export function getBlogPostUrl(slug: string, locale: Locale): string {
  return getLocalizedUrl(`/blog/${slug}`, locale)
}

// Navigation configurations
export const mainNavigation: NavigationItem[] = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Portfolio',
    href: '/#portfolio',
  },
  {
    label: 'Tarifs',
    href: '/#pricing',
  },
  {
    label: 'FAQ',
    href: '/#faq',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerNavigation = {
  services: [
    { label: 'Développement Web', href: '/#services' },
    { label: 'Applications Mobiles', href: '/#services' },
    { label: 'E-commerce', href: '/#services' },
    { label: 'Maintenance', href: '/#services' },
  ],
  company: [
    { label: 'À propos', href: '/about' },
    { label: 'Nos projets', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/privacy' },
    { label: 'CGV', href: '/terms' },
  ],
} as const

/**
 * Generate breadcrumb navigation based on pathname
 */
export function breadcrumbGenerator(pathname: string, locale?: string) {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [{ label: 'Accueil', href: locale ? `/${locale}` : '/' }]

  let currentPath = locale ? `/${locale}` : ''

  segments.forEach((segment) => {
    // Skip locale segment
    if (segment === locale) return

    currentPath += `/${segment}`

    const label = ROUTE_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)

    breadcrumbs.push({
      label,
      href: currentPath,
    })
  })

  return breadcrumbs
}

/**
 * Get localized path by adding/replacing locale
 */
export function getLocalizedPath(path: string, locale: string, currentLocale?: string): string {
  // Remove current locale from path if present
  if (currentLocale && path.startsWith(`/${currentLocale}`)) {
    path = path.replace(`/${currentLocale}`, '')
  }

  // Add new locale
  return locale === 'fr' ? path || '/' : `/${locale}${path || ''}`
}

/**
 * Check if a link is currently active based on pathname
 */
export function isActiveLink(href: string, pathname: string): boolean {
  if (href === '/') {
    return ['/', '/en', '/ru'].includes(pathname)
  }

  return pathname.includes(href)
}
