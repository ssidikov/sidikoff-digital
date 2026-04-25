import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'
import type { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import AgenceWebParis15LandingContent from '@/components/AgenceWebParis15LandingContent'

const PAGE_SLUG = 'services/agence-web-paris-15'

export async function generateMetadata(): Promise<Metadata> {
  const content = common.agence_web_paris_15_landing
  const pageUrl = createCanonicalUrl(PAGE_SLUG, 'fr')

  return {
    title: 'Agence Web Paris 15 - Création de site internet',
    description: 'Agence web Paris 15ème : sites vitrines dès 690 €, livrés en 7-14 jours. Référencement SEO local, Next.js/React. Convention, Vaugirard, Grenelle. Devis gratuit sous 24h.',
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
      title: 'Agence Web Paris 15 - Création de site internet',
      description: 'Agence web Paris 15ème : sites vitrines dès 690 €, livrés en 7-14 jours. Référencement SEO local, Next.js/React. Convention, Vaugirard, Grenelle. Devis gratuit sous 24h.',
      type: 'website',
      locale: 'fr_FR',
      url: pageUrl,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: 'Agence Web Paris 15ème - Création Site Internet',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Agence Web Paris 15 - Création de site internet',
      description: 'Agence web Paris 15ème : sites vitrines dès 690 €, livrés en 7-14 jours. Référencement SEO local, Next.js/React. Convention, Vaugirard, Grenelle. Devis gratuit sous 24h.',
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: pageUrl,
      languages: generateAlternateUrls(PAGE_SLUG),
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

export default function AgenceWebParis15Page() {
  const pageUrl = createCanonicalUrl(PAGE_SLUG, 'fr')

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'Agence web Paris 15',
    description: 'Création et redesign de sites internet pour les entreprises du 15ème arrondissement de Paris.',
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
      latitude: 48.8413,
      longitude: 2.3003,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      postalCode: '75015',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Paris' },
      { '@type': 'Place', name: 'Paris 15ème' },
      { '@type': 'Place', name: 'Vaugirard' },
      { '@type': 'Place', name: 'Grenelle' },
      { '@type': 'Place', name: 'Convention' },
      { '@type': 'Place', name: 'Necker' },
      { '@type': 'Place', name: 'Javel' },
    ],
    serviceType: [
      'Création de site web',
      'Site vitrine',
      'Site e-commerce',
      'Redesign web',
      'SEO local',
    ],
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 15 - Création de site web',
    description: 'Création de sites internet professionnels à Paris 15 avec optimisation SEO locale.',
    url: pageUrl,
    serviceType: 'Création de site web Paris 15',
    areaServed: ['Paris 15ème', 'Vaugirard', 'Grenelle', 'Convention', 'Javel'],
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
    { name: 'Agence web Paris 15', url: pageUrl },
  ])

  return (
    <>
      <script
        id='schema-local-business-paris-15'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        id='schema-service-paris-15'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-15'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AgenceWebParis15LandingContent />
    </>
  )
}
