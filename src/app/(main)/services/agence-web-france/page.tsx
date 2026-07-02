import { Metadata } from 'next'
import { defaultLocale } from '@/lib/i18n'
import {
  createCanonicalUrl,
  generateAlternateUrls,
  DEFAULT_SEO,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
} from '@/lib/seo-utils'
import AgenceWebFranceLandingContent from '@/components/AgenceWebFranceLandingContent'

const PAGE_SLUG = 'services/agence-web-france'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web France : Création de Site Internet Sur Mesure'
  const pageDescription = 'Agence web experte en France. Nous concevons des sites internet ultra-performants, vitrines digitales et applications web sur-mesure pour propulser votre entreprise.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: ['agence web france', 'création site internet france', 'développement web sur mesure', 'agence digitale france'],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'SIDIKOFF DIGITAL',
      url: createCanonicalUrl(PAGE_SLUG, locale),
      images: [{ url: 'https://cdn.sidikoff.com/images/opengraph-fr.png', width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: '@sidikoffdigital',
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl(PAGE_SLUG, locale),
      languages: generateAlternateUrls(PAGE_SLUG),
    },
  }
}

export default async function AgenceWebFrancePage() {
  const pageUrl = createCanonicalUrl(PAGE_SLUG, defaultLocale)
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Web France : Création de Site Internet Sur Mesure',
    description:
      'Agence web experte en France. Nous concevons des sites internet ultra-performants, vitrines digitales et applications web sur-mesure pour propulser votre entreprise.',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web France', url: pageUrl },
  ])
  const serviceSchema = generateServiceSchema({
    name: 'Agence Web France : Création de Site Internet Sur Mesure',
    description:
      'Agence web experte en France. Nous concevons des sites internet ultra-performants, vitrines digitales et applications web sur-mesure pour propulser votre entreprise.',
    url: pageUrl,
    serviceType: 'Création de site internet',
    areaServed: [{ '@type': 'Country', name: 'France' }],
    image: DEFAULT_SEO.defaultImage,
    priceRange: '€€',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AgenceWebFranceLandingContent />
    </>
  )
}
