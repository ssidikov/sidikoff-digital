import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { type Metadata } from 'next'
import common from '@/locales/fr/common.json'
import SeoOptimizationLandingContent from '@/components/SeoOptimizationLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const t = common.seo_optimization_landing

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
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: t.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/optimisation-seo', 'fr'),
      languages: generateAlternateUrls('services/optimisation-seo'),
    },
  }
}

export default function SeoOptimizationLandingPage() {
  const breadcrumbs = {
    items: [
      {
        label: common.navigation.home,
        href: '/',
      },
      {
        label: common.navigation.services,
        href: '/#services',
      },
      {
        label: common.services.seo_optimization.title,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: common.seo_optimization_landing.hero.title,
    description: common.seo_optimization_landing.hero.description,
    provider: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      url: 'https://www.sidikoff.com',
    },
    serviceType: 'SEO Optimization',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      description: common.seo_optimization_landing.hero.description,
    },
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoOptimizationLandingContent breadcrumbs={breadcrumbs} />
    </>
  )
}
