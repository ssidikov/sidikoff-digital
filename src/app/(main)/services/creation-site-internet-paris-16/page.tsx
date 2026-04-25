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

const PAGE_SLUG = 'services/creation-site-internet-paris-16'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence web Paris 16 - Creation de site web'
  const pageDescription =
    'Creation de site web a Paris 16: site vitrine, e-commerce, redesign et SEO local. Agence web orientee conversion pour Passy, Auteuil et Trocadero.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'creation site internet paris 16',
      'agence web paris 16',
      'creation site web paris 16',
      'agence creation site web paris 16',
      'site vitrine paris 16',
      'site e-commerce paris 16',
      'refonte site web paris 16',
      'seo local paris 16',
      'agence digitale paris 16',
      'creation site internet passy',
      'creation site internet auteuil',
      'creation site internet trocadero',
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
          alt: 'Agence web Paris 16 - Creation site web professionnel',
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

export default async function CreationSiteInternetParis16Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence web Paris 16 - Creation de site web',
    description: 'Création de sites internet',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 16 - Creation de site web',
    description:
      'Creation de sites internet professionnels a Paris 16 avec optimisation SEO locale et orientation conversion.',
    url: pageUrl,
    serviceType: 'Creation de site web Paris 16',
    areaServed: ['Paris 16eme', 'Passy', 'Auteuil', 'Trocadero', 'Paris'],
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
    { name: 'Creation site internet Paris 16', url: pageUrl },
  ])

  const faqItems = [
    {
      question: 'Quel budget pour un site internet a Paris 16 ?',
      answer: 'Le budget depend du niveau de personnalisation, du volume de contenu et des integrations. En general, un site vitrine demarre a partir de 690 EUR, et un projet e-commerce demarre autour de 1 290 EUR.',
    },
    {
      question: 'Combien de temps faut-il pour lancer le projet ?',
      answer: 'Pour une page de service ou un site vitrine cible, la mise en ligne peut se faire entre 7 et 14 jours apres validation des contenus et de la direction visuelle.',
    },
    {
      question: 'Est-ce que vous optimisez aussi le SEO local ?',
      answer: 'Oui. La structure technique, les titres, les sections de preuve et les donnees structurees sont alignees sur les requetes locales du 16e arrondissement.',
    },
    {
      question: 'Puis-je garder la main sur mon contenu ensuite ?',
      answer: 'Absolument. Nous livrons un back-office clair et un cadre d edition simple pour mettre a jour textes, visuels et pages sans blocage technique.',
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
        id='schema-service-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id='schema-faq-paris-16'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="16"
        heroTitle={
          <>
            Agence web Paris 16
            <br />
            creation site web qui convertit.
          </>
        }
        heroDescription="Notre service de creation site web a Paris 16 combine design editorial, structure SEO locale et parcours de conversion. Objectif: transformer la visibilite des entreprises de Passy, Auteuil, La Muette et Trocadero en demandes qualifiees."
        neighborhoods={['Passy', 'Auteuil', 'La Muette', 'Trocadero', 'Porte Dauphine', 'Chaillot']}
        visionLocaleText="Une page orientee conversion pour les entreprises, cabinets et commerces du 16e."
        faqItems={faqItems}
      />
    </>
  )
}
