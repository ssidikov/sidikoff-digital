import { createCanonicalUrl, generateAlternateUrls , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { type Metadata } from 'next'
import common from '@/locales/fr/common.json'
import MaintenanceLandingContent from '@/components/MaintenanceLandingContent'

const t = common.testimonials.maintenance_landing

export function generateMetadata(): Metadata {
  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
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
      canonical: createCanonicalUrl('services/maintenance-support', 'fr'),
      languages: generateAlternateUrls('services/maintenance-support'),
    },
  }
}

export default function MaintenanceLandingPage() {
  const breadcrumbs = {
    items: [
      { label: common.navigation.home, href: '/' },
      { label: common.navigation.services, href: '/#services' },
      { label: common.services.maintenance.title },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t.hero.title,
    description: t.hero.description,
    provider: {
      '@type': 'Organization',
      name: 'Sidikoff Digital',
      url: 'https://www.sidikoff.com',
    },
    serviceType: 'Website Maintenance',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      description: t.hero.description,
    },
  }

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Maintenance Support', url: `${DEFAULT_SEO.siteUrl}/services/maintenance-support` },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MaintenanceLandingContent breadcrumbs={breadcrumbs} />
    </>
  )
}
