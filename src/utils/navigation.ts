import { Locale, addLocaleToPathname } from '@/lib/i18n'

export interface NavigationItem {
  label: string
  href: string
  icon?: string
  children?: NavigationItem[]
}

// Generate locale-aware URL
export function getLocalizedUrl(path: string, locale: Locale): string {
  return addLocaleToPathname(path, locale)
}

// Generate project URL for specific locale
export function getProjectUrl(projectId: string, locale: Locale): string {
  return getLocalizedUrl(`/projects/${projectId}`, locale)
}

// Generate projects list URL for specific locale
export function getProjectsUrl(locale: Locale): string {
  return getLocalizedUrl('/projects', locale)
}

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
}

export const breadcrumbGenerator = (pathname: string, locale?: string) => {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [{ label: 'Accueil', href: locale ? `/${locale}` : '/' }]

  let currentPath = locale ? `/${locale}` : ''

  segments.forEach((segment) => {
    if (segment === locale) return // Skip locale segment

    currentPath += `/${segment}`

    let label = segment.charAt(0).toUpperCase() + segment.slice(1)

    // Custom labels for common routes
    const labelMap: Record<string, string> = {
      contact: 'Contact',
      projects: 'Projets',
      blog: 'Blog',
      about: 'À propos',
      services: 'Services',
      'mentions-legales': 'Mentions légales',
    }

    if (labelMap[segment]) {
      label = labelMap[segment]
    }

    breadcrumbs.push({
      label,
      href: currentPath,
    })
  })

  return breadcrumbs
}

export const getLocalizedPath = (path: string, locale: string, currentLocale?: string) => {
  // Remove current locale from path if present
  if (currentLocale && path.startsWith(`/${currentLocale}`)) {
    path = path.replace(`/${currentLocale}`, '')
  }

  // Add new locale
  return locale === 'fr' ? path || '/' : `/${locale}${path || ''}`
}

export const isActiveLink = (href: string, pathname: string) => {
  if (href === '/') {
    return pathname === '/' || pathname === '/fr' || pathname === '/en' || pathname === '/ru'
  }

  return pathname.includes(href)
}
