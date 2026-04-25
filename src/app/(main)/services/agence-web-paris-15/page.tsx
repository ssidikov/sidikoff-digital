import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  generateFAQStructuredData,
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
      siteName: 'Sidikoff Digital',
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

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Web Paris 15 - Création de site internet',
    description: 'Agence web Paris 15ème : sites vitrines dès 690 €, livrés en 7-14 jours. Référencement SEO local, Next.js/React. Convention, Vaugirard, Grenelle. Devis gratuit sous 24h.',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
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
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  const breadcrumbJsonLd = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence web Paris 15', url: pageUrl },
  ])

  const faqJsonLd = generateFAQStructuredData([
    {
      question: 'Quel est le prix d\'un site internet à Paris 15 ?',
      answer: 'Nos tarifs démarrent à 690 € pour un site vitrine professionnel clé en main, optimisé pour le référencement local dans le 15ème arrondissement (Vaugirard, Convention, Grenelle).'
    },
    {
      question: 'Quels sont les délais de création ?',
      answer: 'La création d\'un site internet vitrine prend en moyenne entre 7 et 14 jours. Pour un site e-commerce, comptez plutôt 4 à 8 semaines selon la complexité du projet.'
    },
    {
      question: 'Faites-vous du référencement local (SEO) pour Paris 15 ?',
      answer: 'Oui, nous optimisons votre site pour qu\'il apparaisse sur les recherches locales liées à votre activité dans le 15ème arrondissement et les quartiers environnants.'
    }
  ])

  return (
    <>
      <script
        id="schema-webpage"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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
      <script
        id='schema-faq-paris-15'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AgenceWebParis15LandingContent />
    </>
  )
}
