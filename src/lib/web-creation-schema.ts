import { DEFAULT_SEO } from '@/lib/seo-utils'

interface WebCreationServiceSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  offers: {
    '@type': string
    price: string
    priceCurrency: string
    availability: string
    validFrom: string
  }
  serviceType: string
  areaServed: string
  url: string
}

export function generateWebCreationSchema(): WebCreationServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de Sites Web Sur Mesure',
    description:
      'Service professionnel de création de sites web modernes, rapides et optimisés SEO. De la conception UX/UI à la mise en ligne avec React, Next.js, Tailwind CSS.',
    provider: {
      '@type': 'Organization',
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
    offers: {
      '@type': 'Offer',
      price: '800',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
    },
    serviceType: 'Web Development',
    areaServed: 'France',
    url: `${DEFAULT_SEO.siteUrl}/services/creation-sites-web`,
  }
}
