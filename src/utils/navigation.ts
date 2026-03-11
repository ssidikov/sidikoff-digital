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
 * Generate URL (French-only site, no locale prefix needed)
 */
export function getLocalizedUrl(path: string): string {
  return path.startsWith('/') ? path : `/${path}`
}

/**
 * Generate project URL
 */
export function getProjectUrl(projectId: string): string {
  return `/projects/${projectId}`
}

/**
 * Generate projects list URL
 */
export function getProjectsUrl(): string {
  return '/projects'
}

/**
 * Generate blog URL
 */
export function getBlogUrl(): string {
  return '/blog'
}

/**
 * Generate blog post URL
 */
export function getBlogPostUrl(slug: string): string {
  return `/blog/${slug}`
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
export function breadcrumbGenerator(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [{ label: 'Accueil', href: '/' }]

  let currentPath = ''

  segments.forEach((segment) => {
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
 * Get localized path by removing locale if present
 */
export function getLocalizedPath(path: string, locale: string, currentLocale?: string): string {
  // Remove current locale from path if present
  if (currentLocale && path.startsWith(`/${currentLocale}`)) {
    path = path.replace(`/${currentLocale}`, '')
  }

  return path || '/'
}

/**
 * Check if a link is currently active based on pathname
 */
export function isActiveLink(href: string, pathname: string): boolean {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname.includes(href)
}
