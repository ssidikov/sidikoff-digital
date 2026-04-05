import type { Metadata } from 'next'

import Paris16LandingContent from '../../../../components/Paris16LandingContent'
import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'

const PAGE_SLUG = 'services/creation-site-internet-paris-16'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence web Paris 16 - Creation de site web'
  const pageDescription =
    'Creation de site web a Paris 16: site vitrine, e-commerce, redesign et SEO local. Agence web orientee conversion pour Passy, Auteuil et Trocadero.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'creation site internet paris 16',
      'agence web paris 16',
      'creation site web paris 16',
      'agence creation site web paris 16',
      'site vitrine paris 16',
      'site e-commerce paris 16',
      'refonte site web paris 16',
      'seo local paris 16',
      'agence digitale paris 16',
      'creation site internet passy',
      'creation site internet auteuil',
      'creation site internet trocadero',
    ],
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
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'SIDIKOFF DIGITAL',
      url: createCanonicalUrl(PAGE_SLUG, locale),
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: 'Agence web Paris 16 - Creation site web professionnel',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl(PAGE_SLUG, locale),
      languages: generateAlternateUrls(PAGE_SLUG),
    },
  }
}

export default async function CreationSiteInternetParis16Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'Agence web Paris 16',
    description:
      'Creation et redesign de sites internet pour les entreprises du 16eme arrondissement de Paris.',
    url: pageUrl,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.86237,
      longitude: 2.27692,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      postalCode: '75016',
      addressRegion: 'Ile-de-France',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Paris' },
      { '@type': 'Place', name: 'Paris 16eme' },
      { '@type': 'Place', name: 'Passy' },
      { '@type': 'Place', name: 'Auteuil' },
      { '@type': 'Place', name: 'Trocadero' },
      { '@type': 'Place', name: 'La Muette' },
    ],
    serviceType: [
      'Creation de site web',
      'Site vitrine',
      'Site e-commerce',
      'Redesign web',
      'SEO local',
    ],
    sameAs: [
      'https://www.linkedin.com/in/sardorbeksidikov',
      'https://github.com/ssidikov',
      'https://twitter.com/sidikoffdigital',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services web Paris 16',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creation de site vitrine Paris 16',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creation de site e-commerce Paris 16',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO local Paris 16',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33626932734',
      email: 's.sidikoff@gmail.com',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['fr'],
    },
    inLanguage: 'fr-FR',
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 16 - Creation de site web',
    description:
      'Creation de sites internet professionnels a Paris 16 avec optimisation SEO locale et orientation conversion.',
    url: pageUrl,
    serviceType: 'Creation de site web Paris 16',
    areaServed: ['Paris 16eme', 'Passy', 'Auteuil', 'Trocadero', 'Paris'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€',
    provider: {
      name: 'SIDIKOFF DIGITAL',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  const breadcrumbJsonLd = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation site internet Paris 16', url: pageUrl },
  ])

  return (
    <>
      <script
        id='schema-local-business-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        id='schema-service-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Paris16LandingContent />
    </>
  )
}
