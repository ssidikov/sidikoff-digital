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

const PAGE_SLUG = 'services/agence-web-paris-19'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris 19 | Création Site Internet'
  const pageDescription =
    'Création de site internet à Paris 19 : La Villette, Buttes-Chaumont. Agence web pour artisans, PME et associations. Devis gratuit.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'agence web paris 19',
      'creation site internet paris 19',
      'creation site web paris 19',
      'agence digitale paris 19',
      'site vitrine paris 19',
      'site e-commerce paris 19',
      'refonte site web paris 19',
      'seo local paris 19',
      'creation site internet la villette',
      'creation site internet buttes-chaumont',
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
          alt: 'Agence web Paris 19 - Création site web',
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

export default async function AgenceWebParis19Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Web Paris 19 - Création de site internet',
    description: 'Création de sites internet',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }

  const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${pageUrl}#service`,
    mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
    name: 'Agence web Paris 19 - Création site internet',
    description: 'Votre partenaire digital dans le 19ème arrondissement : conception web, e-commerce et SEO.',
    url: pageUrl,
    areaServed: ['Paris 19ème', 'La Villette', 'Buttes-Chaumont', 'Paris'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€',
    provider: {
      '@type': 'Organization',
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${DEFAULT_SEO.siteUrl}/#organization`,
    name: 'Sidikoff Digital',
    url: DEFAULT_SEO.siteUrl,
    logo: `${DEFAULT_SEO.siteUrl}/images/logo-sidikoff.svg`,
  }

  const breadcrumbJsonLd = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence web Paris 19', url: pageUrl },
  ])

  const faqItems = [
    {
      question: 'Combien coûte un site web dans le 19e ?',
      answer:
        'Nos tarifs sont transparents : à partir de 690 € pour un site vitrine professionnel clé en main. Pour de la vente en ligne, les budgets commencent autour de 1 290 €.',
    },
    {
      question: 'En combien de temps mon site sera prêt ?',
      answer:
        'Notre méthode de production optimisée permet des lancements rapides. Un site vitrine est généralement prêt et en ligne en 7 à 14 jours.',
    },
    {
      question: 'Le site sera-t-il adapté aux smartphones ?',
      answer:
        'Bien sûr. Plus de la moitié du trafic provient des mobiles. Nos créations sont 100% responsive et testées sur tous les appareils.',
    },
    {
      question: 'Proposez-vous une assistance une fois le site en ligne ?',
      answer:
        'Oui, nous offrons des contrats de maintenance et nous restons à votre disposition pour faire évoluer votre site selon vos futurs besoins.',
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
        id='schema-service-paris-19'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        id='schema-organization'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-19'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id='schema-faq-paris-19'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="19"
        heroTitle={
          <>
            Agence web Paris 19
            <br />
            pour développer votre activité locale.
          </>
        }
        heroDescription="Du dynamisme de la Villette au charme des Buttes-Chaumont, nous concevons des sites vitrines et plateformes e-commerce pensés pour la visibilité des entreprises, associations et artisans du 19e arrondissement."
        neighborhoods={['La Villette', 'Buttes-Chaumont', 'Pont-de-Flandre', 'Amérique', 'Flandre', 'Ourcq']}
        visionLocaleText="Une approche concrète pour mettre en valeur le savoir-faire des acteurs locaux du 19e."
        faqItems={faqItems}
      />
    </>
  )
}
