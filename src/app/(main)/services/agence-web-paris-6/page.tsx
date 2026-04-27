import type { Metadata } from 'next'

import ParisArrondissementLanding from '@/components/ParisArrondissementLanding'
import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  generateFAQStructuredData,
} from '@/lib/seo-utils'

const PAGE_SLUG = 'services/agence-web-paris-6'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris 6 | Sidikoff'
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
      siteName: 'Sidikoff Digital',
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

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Web Paris 6 - Création de sites web',
    description: 'Création de sites internet',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
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
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  const breadcrumbJsonLd = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence web Paris 6', url: pageUrl },
  ])

  const faqItems = [
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
  ]

  const faqJsonLd = generateFAQStructuredData(faqItems)

  return (
    <>
      <script
        id="schema-webpage"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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
      <script
        id='schema-faq-paris-6'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        faqItems={faqItems}
      />
    </>
  )
}
