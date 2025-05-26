'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface BreadcrumbItem {
  label: string
  href: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const { t } = useLanguage()

  // Don't show breadcrumbs on homepage
  if (!pathname || pathname === '/') return null

  const pathSegments = pathname.split('/').filter(Boolean)

  // Generate breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [{ label: t('nav.home'), href: '/' }]

  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}` // Map path segments to labels
    const labels: { [key: string]: string } = {
      about: t('nav.expertise'),
      services: t('nav.services'),
      portfolio: t('nav.portfolio'),
      contact: t('nav.contact'),
      projects: t('nav.projects'),
      'mentions-legales': t('legal.title'),
    }

    const label = labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    breadcrumbs.push({ label, href: currentPath })
  })

  // Generate structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.label,
      item: `https://sidikoff.com${breadcrumb.href}`,
    })),
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label='Breadcrumb' className='hidden bg-muted/50 py-4'>
        <div className='container mx-auto px-4'>
          <ol className='flex items-center space-x-2 text-sm'>
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.href} className='flex items-center'>
                {index > 0 && <ChevronRight className='w-4 h-4 mx-2 text-muted-foreground' />}

                {index === 0 && <Home className='w-4 h-4 mr-2 text-muted-foreground' />}

                {index === breadcrumbs.length - 1 ? (
                  <span className='text-foreground font-medium' aria-current='page'>
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className='text-muted-foreground hover:text-foreground transition-colors'>
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
