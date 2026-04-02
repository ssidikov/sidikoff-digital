import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema } from '@/lib/seo-utils'
import { Metadata } from 'next'

import ParisLandingContent from '@/components/ParisLandingContent'

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-paris', 'fr')

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Création site internet Paris — Sites vitrines & e-commerce | SIDIKOFF DIGITAL'

  const description =
    'Agence web Paris : sites vitrines dès 690 €, livrés en 7–14 jours. React & Next.js, SEO local, Lighthouse 95+. Devis gratuit sous 24h pour votre projet à Paris.'

  return {
    title,
    description,
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
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/creation-site-internet-paris'),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      url: PAGE_URL,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/og/creation-sites-web-paris.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['/images/og/creation-sites-web-paris.jpg'],
    },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site Internet à Paris',
  description:
    'Agence web Paris spécialisée en création de sites vitrines et e-commerce. Next.js, React, SEO local optimisé. Livraison en 7–14 jours, devis gratuit sous 24h.',
  url: PAGE_URL,
  serviceType: 'Création de site internet Paris',
  areaServed: ['Paris', 'Île-de-France', 'France'],
  image: 'https://www.sidikoff.com/images/og/creation-sites-web-paris.jpg',
})

export default async function ParisPage() {
  return (
    <div className='min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ParisLandingContent />
    </div>
  )
}
