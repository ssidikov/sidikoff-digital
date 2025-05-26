'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname()

  // Generate breadcrumbs from pathname if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items

    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]

    let currentPath = ''
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      breadcrumbs.push({ label, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://sidikoff.digital${item.href}`,
    })),
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav
        aria-label='Breadcrumb'
        className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400'>
        {breadcrumbs.map((item, index) => (
          <div key={item.href} className='flex items-center'>
            {index > 0 && (
              <svg
                className='w-4 h-4 mx-2 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                aria-hidden='true'>
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className='font-medium text-gray-900 dark:text-gray-100'>{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
