import { DEFAULT_SEO } from '@/lib/seo-utils'

interface WebRedesignServiceSchema {
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

export function generateWebRedesignSchema(): WebRedesignServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Refonte de Site Web Professionnel',
    description:
      'Service professionnel de refonte et modernisation de sites web. Redesign complet, amélioration des performances, optimisation SEO et mise à jour technologique avec React, Next.js, Tailwind CSS.',
    provider: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      url: DEFAULT_SEO.siteUrl,
    },
    offers: {
      '@type': 'Offer',
      price: '600',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
    },
    serviceType: 'Website Redesign & Modernisation',
    areaServed: 'France',
    url: `${DEFAULT_SEO.siteUrl}/services/refonte-sites-web`,
  }
}
