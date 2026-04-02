import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema } from '@/lib/seo-utils'
import type { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import AgenceWebParis15LandingContent from '@/components/AgenceWebParis15LandingContent'

const PAGE_URL = createCanonicalUrl('services/agence-web-paris-15', 'fr')

export async function generateMetadata(): Promise<Metadata> {
  const content = common.agence_web_paris_15_landing

  return {
    title: content.meta_title,
    description: content.meta_description,
    keywords: [
      'agence web paris 15ème',
      'agence web paris 15',
      'création site internet paris 15',
      'développement web paris 15ème',
      'agence digitale paris 15',
      'site web paris 75015',
      'agence web vaugirard',
      'agence web grenelle',
      'agence web convention',
      'création site web paris 15ème',
      'next.js paris 15',
      'react paris 15ème',
    ],
    openGraph: {
      title: content.meta_title,
      description: content.meta_description,
      type: 'website',
      locale: 'fr_FR',
      url: PAGE_URL,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/og/agence-web-paris-15-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Agence Web Paris 15ème - Création Site Internet',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta_title,
      description: content.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/og/agence-web-paris-15-og.jpg'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/agence-web-paris-15'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Agence Web Paris 15ème — Création de Sites Internet',
  description:
    'Agence web Paris 15 spécialisée en création de sites vitrines, e-commerce et SEO local. Next.js/React, livraison en 7–14 jours, devis gratuit sous 24h. Convention, Vaugirard, Grenelle.',
  url: PAGE_URL,
  serviceType: 'Création de site internet Paris 15',
  areaServed: ['Paris 15', 'Paris', 'Île-de-France', 'France'],
  image: 'https://www.sidikoff.com/images/og/agence-web-paris-15-og.jpg',
})

export default function AgenceWebParis15Page() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AgenceWebParis15LandingContent />
    </>
  )
}
