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

const PAGE_SLUG = 'services/agence-web-paris-17'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris 17 - Création de sites internet'
  const pageDescription =
    'Création de sites internet à Paris 17 : vitrines, e-commerce et SEO. Agence web locale accompagnant les entreprises des Batignolles, Ternes et Monceau.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'agence web paris 17',
      'creation site internet paris 17',
      'creation site web paris 17',
      'agence digitale paris 17',
      'site vitrine paris 17',
      'site e-commerce paris 17',
      'refonte site web paris 17',
      'seo local paris 17',
      'creation site internet batignolles',
      'creation site internet ternes',
      'creation site internet monceau',
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
          alt: 'Agence web Paris 17 - Création site web professionnel',
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

export default async function AgenceWebParis17Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DEFAULT_SEO.siteUrl}/${PAGE_SLUG}#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'Agence web Paris 17',
    description:
      'Création et refonte de sites internet pour les professionnels du 17ème arrondissement de Paris.',
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
      latitude: 48.8835,
      longitude: 2.3219,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      postalCode: '75017',
      addressRegion: 'Ile-de-France',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Paris' },
      { '@type': 'Place', name: 'Paris 17ème' },
      { '@type': 'Place', name: 'Batignolles' },
      { '@type': 'Place', name: 'Ternes' },
      { '@type': 'Place', name: 'Plaine-de-Monceaux' },
      { '@type': 'Place', name: 'Épinettes' },
    ],
    serviceType: [
      'Création de site web',
      'Site vitrine',
      'Site e-commerce',
      'Refonte de site internet',
      'Référencement SEO',
    ],
    sameAs: [
      'https://www.linkedin.com/in/sardorbeksidikov',
      'https://github.com/ssidikov',
      'https://twitter.com/sidikoffdigital',
    ],
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 17 - Création de site internet',
    description:
      'Conception de sites web sur-mesure et référencement SEO pour les entreprises du 17e arrondissement.',
    url: pageUrl,
    serviceType: 'Création de site web Paris 17',
    areaServed: ['Paris 17ème', 'Batignolles', 'Ternes', 'Monceau', 'Paris'],
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
    { name: 'Agence web Paris 17', url: pageUrl },
  ])

  return (
    <>
      <script
        id='schema-local-business-paris-17'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        id='schema-service-paris-17'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-17'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="17"
        heroTitle={
          <>
            Agence web Paris 17
            <br />
            pour des sites qui performent.
          </>
        }
        heroDescription="De Batignolles à Ternes en passant par Monceau, nous accompagnons les professionnels et commerçants du 17e arrondissement avec des sites vitrines et e-commerce taillés pour convertir."
        neighborhoods={['Batignolles', 'Ternes', 'Monceau', 'Épinettes', 'Péreire', 'Wagram']}
        visionLocaleText="Des solutions digitales sur-mesure adaptées à l'exigence et au dynamisme des professionnels du 17e."
        faqItems={[
          {
            question: 'Quel budget prévoir pour un site à Paris 17 ?',
            answer:
              'Nos forfaits s\'adaptent à vos besoins réels. Un site vitrine professionnel démarre à partir de 690 €, idéal pour les indépendants et TPE. Les projets e-commerce commencent autour de 1 290 €.',
          },
          {
            question: 'Combien de temps faut-il pour créer mon site ?',
            answer:
              'Grâce à notre approche agile, un site vitrine peut être mis en ligne sous 7 à 14 jours, incluant le design, le développement et l\'optimisation de base.',
          },
          {
            question: 'Faites-vous du référencement local ?',
            answer:
              'Oui, notre priorité est de vous rendre visible là où se trouvent vos clients. Nous optimisons votre site pour des recherches telles que "votre métier + Batignolles" ou "Paris 17".',
          },
          {
            question: 'Serais-je propriétaire de mon site ?',
            answer:
              'Totalement. Vous avez accès à votre nom de domaine, votre hébergement, et un back-office pour modifier vos contenus en toute autonomie.',
          },
        ]}
      />
    </>
  )
}
