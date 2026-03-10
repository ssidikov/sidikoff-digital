import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { type Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import MaintenanceLandingContent from '@/components/MaintenanceLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)
  const t = dictionary.maintenance_landing

  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'SIDIKOFF DIGITAL',
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: t.meta_title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/maintenance-support', locale),
      languages: generateAlternateUrls('services/maintenance-support'),
    },
  }
}

export default async function MaintenanceLandingPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  const breadcrumbs = {
    items: [
      {
        label: dictionary.navigation.home,
        href: '/',
      },
      {
        label: dictionary.navigation.services,
        href: '/#services',
      },
      {
        label: dictionary.services.maintenance.title,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: dictionary.maintenance_landing.hero.title,
    description: dictionary.maintenance_landing.hero.description,
    provider: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      url: 'https://www.sidikoff.com',
    },
    serviceType: 'Website Maintenance',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      description: dictionary.maintenance_landing.hero.description,
    },
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MaintenanceLandingContent
        dictionary={dictionary}
        locale={locale}
        breadcrumbs={breadcrumbs}
      />
    </>
  )
}
