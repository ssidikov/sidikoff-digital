import { DEFAULT_SEO } from '@/lib/seo-utils'

interface BreadcrumbItem {
  position: number
  name: string
  item: string
}

interface InternalBreadcrumbItem {
  position: number
  name: string
  href: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  }
}

export function getPageBreadcrumbs(pathname: string) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      position: 1,
      name: 'Accueil',
      item: DEFAULT_SEO.siteUrl,
    },
  ]

  const pathSegments = pathname.split('/').filter(Boolean)
  let currentPath = DEFAULT_SEO.siteUrl

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`

    let name = segment
    switch (segment) {
      case 'services':
        name = 'Services'
        break
      case 'projects':
        name = 'Portfolio'
        break
      case 'tarifs':
        name = 'Tarifs'
        break
      case 'creation-sites-web':
        name = 'Création de Sites Web'
        break
      case 'faq':
        name = 'FAQ'
        break
      case 'contact':
        name = 'Contact'
        break
      case 'blog':
        name = 'Blog'
        break
      default:
        name = segment.charAt(0).toUpperCase() + segment.slice(1)
    }

    breadcrumbs.push({
      position: breadcrumbs.length + 1,
      name,
      item: currentPath,
    })
  })

  return breadcrumbs
}

export function getInternalBreadcrumbs(pathname: string): InternalBreadcrumbItem[] {
  const breadcrumbs: InternalBreadcrumbItem[] = [
    {
      position: 1,
      name: 'Accueil',
      href: '/',
    },
  ]

  const pathSegments = pathname.split('/').filter(Boolean)
  let currentPath = ''

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`

    let name = segment
    switch (segment) {
      case 'services':
        name = 'Services'
        break
      case 'projects':
        name = 'Portfolio'
        break
      case 'tarifs':
        name = 'Tarifs'
        break
      case 'creation-sites-web':
        name = 'Création de Sites Web'
        break
      case 'faq':
        name = 'FAQ'
        break
      case 'contact':
        name = 'Contact'
        break
      case 'blog':
        name = 'Blog'
        break
      default:
        name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    }

    breadcrumbs.push({
      position: breadcrumbs.length + 1,
      name,
      href: currentPath || '/',
    })
  })

  return breadcrumbs
}
