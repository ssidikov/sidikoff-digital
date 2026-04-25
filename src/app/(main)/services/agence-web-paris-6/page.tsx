import type { Metadata } from 'next'

import ParisArrondissementLanding from '@/components/ParisArrondissementLanding'
import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'

const PAGE_SLUG = 'services/agence-web-paris-6'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris 6 - Création de sites web'
  const pageDescription =
    'Création de site internet à Paris 6 : Saint-Germain-des-Prés, Odéon. Agence digitale experte pour galeries, cabinets et commerces premium.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'agence web paris 6',
      'creation site internet paris 6',
      'creation site web paris 6',
      'agence digitale paris 6',
      'site vitrine paris 6',
      'site e-commerce paris 6',
      'refonte site web paris 6',
      'seo local paris 6',
      'creation site internet saint-germain-des-pres',
      'creation site internet odeon',
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
          alt: 'Agence web Paris 6 - Création site web premium',
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

export default async function AgenceWebParis6Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'Agence web Paris 6',
    description:
      'Création de sites internet premium et optimisation SEO pour les professionnels du 6ème arrondissement de Paris.',
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
      latitude: 48.8504,
      longitude: 2.3333,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      postalCode: '75006',
      addressRegion: 'Ile-de-France',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Paris' },
      { '@type': 'Place', name: 'Paris 6ème' },
      { '@type': 'Place', name: 'Saint-Germain-des-Prés' },
      { '@type': 'Place', name: 'Odéon' },
      { '@type': 'Place', name: 'Monnaie' },
      { '@type': 'Place', name: 'Notre-Dame-des-Champs' },
    ],
    serviceType: [
      'Création de site web premium',
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
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 6 - Création de site web',
    description:
      'Création de sites vitrines et plateformes haut de gamme pour galeries, cabinets et commerces du 6e arrondissement.',
    url: pageUrl,
    serviceType: 'Création de site web Paris 6',
    areaServed: ['Paris 6ème', 'Saint-Germain-des-Prés', 'Odéon', 'Paris'],
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
    { name: 'Agence web Paris 6', url: pageUrl },
  ])

  return (
    <>
      <script
        id='schema-local-business-paris-6'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        id='schema-service-paris-6'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-6'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="6"
        heroTitle={
          <>
            Agence web Paris 6
            <br />
            l'élégance alliée à la performance.
          </>
        }
        heroDescription="De Saint-Germain-des-Prés à l'Odéon, nous concevons des sites vitrines haut de gamme pour les galeries d'art, cabinets prestigieux et commerces d'exception du 6e arrondissement. Une esthétique raffinée pour un taux de conversion maximal."
        neighborhoods={['Saint-Germain-des-Prés', 'Odéon', 'Monnaie', 'Notre-Dame-des-Champs', 'Luxembourg']}
        visionLocaleText="Des expériences digitales qui reflètent le prestige et le standing du 6e arrondissement."
        faqItems={[
          {
            question: 'Concevez-vous des sites pour les galeries et métiers d\'art ?',
            answer:
              'Absolument. Nous portons une attention particulière à la direction artistique, au traitement des images et à la typographie pour mettre en valeur vos œuvres et votre savoir-faire.',
          },
          {
            question: 'Quels sont vos délais pour un site premium ?',
            answer:
              'Une conception sur-mesure demande de la précision. Comptez généralement 2 à 4 semaines selon la complexité du design et le volume de contenus à intégrer.',
          },
          {
            question: 'Assurez-vous un référencement spécifique ?',
            answer:
              'Oui, notre structure SEO est conçue pour capter une clientèle locale et internationale exigeante, recherchant spécifiquement vos services dans Paris 6.',
          },
          {
            question: 'Quels sont les tarifs pour le 6e arrondissement ?',
            answer:
              'Bien que notre approche soit premium, nos offres restent accessibles. Les projets de refonte ou de création démarrent à partir de 690 € pour un site vitrine, et s\'ajustent selon vos ambitions.',
          },
        ]}
      />
    </>
  )
}
