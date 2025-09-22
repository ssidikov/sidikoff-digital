import { Locale } from '@/lib/i18n'

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

export function getPageBreadcrumbs(pathname: string, locale: Locale = 'fr') {
  const baseUrl = 'https://sidikoff.com'
  const breadcrumbs: BreadcrumbItem[] = [
    {
      position: 1,
      name: locale === 'fr' ? 'Accueil' : locale === 'en' ? 'Home' : 'Главная',
      item: locale === 'fr' ? baseUrl : `${baseUrl}/${locale}`,
    },
  ]

  const pathSegments = pathname.split('/').filter(Boolean)
  let currentPath = locale === 'fr' ? baseUrl : `${baseUrl}/${locale}`

  pathSegments.forEach((segment) => {
    // Skip locale segment as it's already handled
    if (segment === locale) return

    currentPath += `/${segment}`

    let name = segment
    switch (segment) {
      case 'services':
        name = locale === 'fr' ? 'Services' : locale === 'en' ? 'Services' : 'Услуги'
        break
      case 'projects':
        name = locale === 'fr' ? 'Portfolio' : locale === 'en' ? 'Portfolio' : 'Портфолио'
        break
      case 'tarifs':
        name = locale === 'fr' ? 'Tarifs' : locale === 'en' ? 'Pricing' : 'Цены'
        break
      case 'creation-sites-web':
        name =
          locale === 'fr'
            ? 'Création de Sites Web'
            : locale === 'en'
              ? 'Website Creation'
              : 'Создание Сайтов'
        break
      case 'faq':
        name = locale === 'fr' ? 'FAQ' : locale === 'en' ? 'FAQ' : 'Вопросы и ответы'
        break
      case 'contact':
        name = locale === 'fr' ? 'Contact' : locale === 'en' ? 'Contact' : 'Контакты'
        break
      case 'blog':
        name = locale === 'fr' ? 'Blog' : locale === 'en' ? 'Blog' : 'Блог'
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

export function getInternalBreadcrumbs(
  pathname: string,
  locale: Locale = 'fr'
): InternalBreadcrumbItem[] {
  const breadcrumbs: InternalBreadcrumbItem[] = [
    {
      position: 1,
      name: locale === 'fr' ? 'Accueil' : locale === 'en' ? 'Home' : 'Главная',
      href: locale === 'fr' ? '/' : `/${locale}`,
    },
  ]

  const pathSegments = pathname.split('/').filter(Boolean)
  let currentPath = locale === 'fr' ? '' : `/${locale}`

  pathSegments.forEach((segment) => {
    // Skip locale segment as it's already handled
    if (segment === locale) return

    currentPath += `/${segment}`

    let name = segment
    switch (segment) {
      case 'services':
        name = locale === 'fr' ? 'Services' : locale === 'en' ? 'Services' : 'Услуги'
        break
      case 'projects':
        name = locale === 'fr' ? 'Portfolio' : locale === 'en' ? 'Portfolio' : 'Портфолио'
        break
      case 'tarifs':
        name = locale === 'fr' ? 'Tarifs' : locale === 'en' ? 'Pricing' : 'Цены'
        break
      case 'creation-sites-web':
        name =
          locale === 'fr'
            ? 'Création de Sites Web'
            : locale === 'en'
              ? 'Website Creation'
              : 'Создание Сайтов'
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
