import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
import AgenceWebParisLandingContent from '@/components/AgenceWebParisLandingContent'

const PAGE_SLUG = 'services/agence-web-paris'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris | Sidikoff'
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
    authors: [{ name: 'Sidikoff Digital' }],
    creator: 'Sidikoff Digital',
    publisher: 'Sidikoff Digital',
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
      "Création de sites internet sur mesure, SEO local et refonte web pour les entreprises de Paris et d'Île-de-France.",
    url: pageUrl,
    serviceType: 'Création de site internet',
    areaServed: ['Paris', 'Île-de-France'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    provider: {
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  return (
    <>
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
