import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
import AgenceWebParisLandingContent from '@/components/AgenceWebParisLandingContent'

const PAGE_SLUG = 'services/agence-web-paris'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris | Création Site Internet'
  const pageDescription =
    'Agence web à Paris spécialisée en création de sites internet, SEO local et refonte web pour TPE, PME et startups. Devis gratuit sous 24h.'
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'agence web paris',
      'création site internet paris',
      'agence digitale paris',
      'développeur web paris',
      'agence web ile de france',
      'création site web paris',
      'site vitrine paris',
      'site e-commerce paris',
      'seo local paris',
      'refonte site web paris',
    ],
    authors: [{ name: 'SIDIKOFF DIGITAL' }],
    creator: 'SIDIKOFF DIGITAL',
    publisher: 'SIDIKOFF DIGITAL',
    alternates: {
      canonical: pageUrl,
      languages: generateAlternateUrls(PAGE_SLUG),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'SIDIKOFF DIGITAL',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/images/opengraph-fr.png'],
      creator: '@sidikoffdigital',
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
    category: 'technology',
  }
}

export default function AgenceWebParisLandingPage() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const faqSchema = generateFAQStructuredData([
    {
      question: 'Combien coûte un site internet à Paris ?',
      answer: 'Le tarif dépend de vos besoins. Un site vitrine de base commence généralement à partir de 690€, tandis qu\'un site e-commerce plus complexe ou un site sur mesure peut démarrer autour de 1500€. Nous fournissons un devis détaillé après un premier appel.',
    },
    {
      question: 'Combien de temps faut-il pour créer un site internet ?',
      answer: 'En moyenne, la création d\'un site internet professionnel prend entre 7 et 14 jours pour un site vitrine, et de 4 à 8 semaines pour un site e-commerce ou sur mesure.',
    },
    {
      question: 'Votre agence web propose-t-elle l\'optimisation SEO ?',
      answer: 'Oui, tous nos sites sont optimisés pour le référencement naturel (SEO) dès leur conception (structure technique, balises meta, vitesse de chargement) pour vous aider à être visible sur Google à Paris et ailleurs.',
    },
    {
      question: 'Puis-je gérer mon site moi-même après sa mise en ligne ?',
      answer: 'Absolument ! Nous utilisons des systèmes de gestion de contenu (CMS) ou des back-offices intuitifs qui vous permettent de modifier vos textes, images et articles de blog facilement et sans compétences techniques.',
    }
  ])

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Paris', url: pageUrl },
  ])

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Web Paris - Création de site internet',
    description:
      'Agence web à Paris spécialisée dans la création de sites internet sur mesure, SEO local et refonte de site.',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence Web Paris - Création de site internet',
    description:
      'Création de sites internet sur mesure, SEO local et refonte web pour les entreprises de Paris et d\'Île-de-France.',
    url: pageUrl,
    serviceType: 'Création de site internet',
    areaServed: ['Paris', 'Île-de-France'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    provider: {
      name: 'SIDIKOFF DIGITAL',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  return (
    <>
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <AgenceWebParisLandingContent />
    </>
  )
}
