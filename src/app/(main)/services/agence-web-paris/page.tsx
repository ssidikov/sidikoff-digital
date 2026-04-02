import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema } from '@/lib/seo-utils'
import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import AgenceWebParisLandingContent from '@/components/AgenceWebParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/agence-web-paris', 'fr')

export async function generateMetadata(): Promise<Metadata> {
  const content = common.agence_web_paris_landing

  return {
    title: content.meta_title,
    description: content.meta_description,
    keywords: [
      'agence web paris',
      'agence web ile de france',
      'agence communication paris',
      'agence digitale paris',
      'agence web wordpress paris',
      'creation site web paris',
      'next.js paris',
      'react paris',
      'développement web paris',
    ],
    authors: [{ name: 'SIDIKOFF DIGITAL' }],
    creator: 'SIDIKOFF DIGITAL',
    publisher: 'SIDIKOFF DIGITAL',
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/agence-web-paris'),
    },
    openGraph: {
      title: content.meta_title,
      description: content.meta_description,
      url: PAGE_URL,
      siteName: 'SIDIKOFF DIGITAL',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/og/creation-sites-web-paris.jpg',
          width: 1200,
          height: 630,
          alt: content.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta_title,
      description: content.meta_description,
      images: ['/images/og/creation-sites-web-paris.jpg'],
      creator: '@sidikoffdigital',
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
    category: 'technology',
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Agence Web Paris — Création de Sites Internet',
  description:
    'Agence web à Paris spécialisée en développement Next.js et React. Création de sites internet professionnels, SEO optimisé, livraison en 7–14 jours. Devis gratuit sous 24h.',
  url: PAGE_URL,
  serviceType: 'Création de site internet',
  areaServed: ['Paris', 'Île-de-France', 'France'],
  image: 'https://www.sidikoff.com/images/og/creation-sites-web-paris.jpg',
})

export default function AgenceWebParisLandingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AgenceWebParisLandingContent />
    </>
  )
}

