import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'
import { Metadata } from 'next'

import ParisLandingContent from '@/components/ParisLandingContent'

const PAGE_SLUG = 'services/creation-site-internet-paris'
const PAGE_URL = createCanonicalUrl(PAGE_SLUG, defaultLocale)

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Création Site Internet Paris | Sites Vitrine et E-Commerce'

  const description =
    'Création de site internet à Paris pour TPE, PME et indépendants : site vitrine ou e-commerce, SEO local et performances Core Web Vitals. Devis gratuit sous 24h.'

  return {
    title,
    description,
    keywords: [
      'création site internet paris',
      'création site web paris',
      'site vitrine paris',
      'site e-commerce paris',
      'refonte site internet paris',
      'création site internet paris 15',
      'création site internet paris 16',
      'création site internet paris 17',
      'création site internet paris 19',
      'seo local paris',
    ],
    authors: [{ name: 'Sidikoff Digital' }],
    creator: 'Sidikoff Digital',
    publisher: 'Sidikoff Digital',
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
      languages: generateAlternateUrls(PAGE_SLUG),
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
          url: '/images/opengraph-fr.png',
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
      images: ['/images/opengraph-fr.png'],
    },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site Internet à Paris',
  description:
    'Création de sites internet vitrines et e-commerce à Paris, avec SEO local et optimisation des performances pour convertir un trafic qualifié.',
  url: PAGE_URL,
  serviceType: 'Création de site internet Paris',
  areaServed: [
    'Paris 1er',
    'Paris 6ème',
    'Paris 8ème',
    'Paris 15ème',
    'Paris 16ème',
    'Paris 17ème',
    'Paris 19ème',
    'Boulogne-Billancourt',
    'Neuilly-sur-Seine',
    'Île-de-France',
    'France',
  ],
  image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
  provider: {
    name: 'Sidikoff Digital',
    url: DEFAULT_SEO.siteUrl,
  },
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Combien coûte la création d'un site internet à Paris ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un site vitrine professionnel à Paris démarre à 690€ TTC, livré en 5 jours ouvrés. Un site multi-pages complet est proposé à partir de 1 290€ — idéal pour les PME, restaurants et professions libérales parisiennes souhaitant un bon référencement local. Un site e-commerce ou application sur mesure est disponible à partir de 1 990€. Tous nos tarifs incluent le SEO de base, le design responsive et la mise en ligne. Devis gratuit personnalisé sous 24h.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel prestataire choisir à Paris pour créer mon site internet ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour choisir un bon prestataire à Paris, privilégiez une équipe qui maîtrise les technologies modernes (React, Next.js), intègre le SEO local dès la conception et livre dans des délais clairs (7 à 14 jours pour un site vitrine). Sidikoff Digital intervient dans tout Paris et en Île-de-France avec un accompagnement personnalisé et des tarifs transparents.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mon site Paris sera-t-il référencé sur Google Maps et dans le pack local ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Nous configurons votre fiche Google Business Profile, optimisons vos contenus pour les requêtes géolocalisées (ex. 'création site internet Paris 8', 'agence web Île-de-France') et structurons vos données avec Schema.org pour améliorer votre présence dans le pack local de Google Maps. Le référencement SEO local Paris est inclus dans tous nos projets web.",
      },
    },
  ],
}

const breadcrumbSchema = generateBreadcrumbStructuredData([
  { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
  { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
  { name: 'Création Site Internet Paris', url: PAGE_URL },
])

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Création Site Internet Paris',
  description:
    'Création de sites internet à Paris pour TPE, PME et indépendants avec SEO local et design orienté conversion.',
  isPartOf: {
    '@id': `${DEFAULT_SEO.siteUrl}/#website`,
  },
  about: {
    '@id': `${PAGE_URL}#service`,
  },
}

export default async function ParisPage() {
  return (
    <div className='min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <ParisLandingContent />
    </div>
  )
}
