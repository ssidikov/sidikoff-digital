import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import common from '@/locales/fr/common.json'
import BarbershopLandingContent from '@/components/BarbershopLandingContent'

const t = common.barbershop_landing

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
      canonical: createCanonicalUrl('services/creation-site-internet-barbershop', 'fr'),
      languages: generateAlternateUrls('services/creation-site-internet-barbershop'),
    },
    robots: { index: true, follow: true },
  }
}

export default function BarbershopWebsitesPage() {
  return <BarbershopLandingContent />
}
