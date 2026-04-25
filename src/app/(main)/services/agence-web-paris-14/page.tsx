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

const PAGE_SLUG = 'services/agence-web-paris-14'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris 14 | Création Site Internet'
  const pageDescription =
    'Agence web Paris 14ème : création de sites internet professionnels pour commerces, professions libérales et PME de Montparnasse, Alésia et Denfert-Rochereau. Devis gratuit sous 24h.'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'agence web paris 14',
      'agence web paris 14ème',
      'création site internet paris 14',
      'création site web paris 14ème',
      'développement web paris 14',
      'agence digitale paris 14',
      'site vitrine paris 14',
      'site e-commerce paris 14',
      'refonte site web paris 14',
      'seo local paris 14',
      'création site internet montparnasse',
      'création site internet alésia',
      'création site internet denfert-rochereau',
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
          alt: 'Agence web Paris 14ème - Création site internet Montparnasse',
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

export default async function AgenceWebParis14Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Web Paris 14 - Création de sites internet',
    description:
      'Création de sites internet professionnels à Paris 14 (Montparnasse, Alésia, Denfert-Rochereau) avec SEO local intégré.',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 14 - Création de site internet',
    description:
      'Conception de sites web sur-mesure et référencement SEO pour les entreprises du 14e arrondissement de Paris.',
    url: pageUrl,
    serviceType: 'Création de site web Paris 14',
    areaServed: ['Paris 14ème', 'Montparnasse', 'Alésia', 'Denfert-Rochereau', 'Pernety', 'Plaisance'],
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
    { name: 'Agence web Paris', url: `${DEFAULT_SEO.siteUrl}/services/agence-web-paris` },
    { name: 'Agence web Paris 14', url: pageUrl },
  ])

  const faqJsonLd = generateFAQStructuredData([
    {
      question: 'Quel est le prix d\'un site internet à Paris 14 ?',
      answer:
        'Nos tarifs démarrent à 690 € pour un site vitrine professionnel clé en main, optimisé pour le référencement local dans le 14ème arrondissement (Montparnasse, Alésia, Denfert-Rochereau). Pour un site e-commerce, les budgets commencent à partir de 1 290 €.',
    },
    {
      question: 'Combien de temps faut-il pour créer un site dans le 14e ?',
      answer:
        'La création d\'un site vitrine prend généralement entre 7 et 14 jours ouvrés. Pour un projet e-commerce ou une application sur mesure, comptez 4 à 8 semaines selon la complexité des fonctionnalités.',
    },
    {
      question: 'Faites-vous du référencement local pour Paris 14 ?',
      answer:
        'Oui, nous optimisons votre site pour apparaître en tête des recherches locales liées à votre activité dans le 14ème arrondissement et les quartiers environnants (Montparnasse, Alésia, Plaisance, Pernety, Denfert-Rochereau).',
    },
    {
      question: 'Serais-je propriétaire de mon site ?',
      answer:
        'Totalement. Vous êtes propriétaire de votre nom de domaine, de votre hébergement et de votre back-office. Vous pouvez modifier vos contenus en toute autonomie. Une formation est incluse dans chaque livraison.',
    },
  ])

  return (
    <>
      <script
        id="schema-webpage-paris-14"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        id='schema-service-paris-14'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-14'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id='schema-faq-paris-14'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="14"
        heroTitle={
          <>
            Agence web Paris 14
            <br />
            de Montparnasse à Alésia.
          </>
        }
        heroDescription="De la créativité de Montparnasse au dynamisme commerçant d'Alésia, nous accompagnons les professionnels, artisans et PME du 14e arrondissement avec des sites vitrines et e-commerce pensés pour convertir et être trouvés sur Google."
        neighborhoods={['Montparnasse', 'Alésia', 'Denfert-Rochereau', 'Pernety', 'Plaisance', 'Mouton-Duvernet']}
        visionLocaleText="Des solutions digitales sur-mesure pour les commerces, studios et professions libérales du 14e arrondissement."
        faqItems={[
          {
            question: 'Quel budget prévoir pour un site à Paris 14 ?',
            answer:
              'Nos forfaits s\'adaptent à votre activité. Un site vitrine professionnel démarre à partir de 690 €, idéal pour les indépendants, artisans et TPE du 14e. Les projets e-commerce commencent autour de 1 290 €.',
          },
          {
            question: 'Combien de temps faut-il pour créer mon site ?',
            answer:
              'Grâce à notre méthode agile, un site vitrine peut être mis en ligne sous 7 à 14 jours ouvrés, incluant le design, le développement et l\'optimisation SEO de base.',
          },
          {
            question: 'Faites-vous du référencement local Paris 14 ?',
            answer:
              'Oui, notre priorité est de vous rendre visible là où se trouvent vos clients. Nous optimisons votre site pour des recherches telles que "votre métier + Montparnasse" ou "Paris 14ème".',
          },
          {
            question: 'Le site sera-t-il compatible mobile ?',
            answer:
              'Absolument. Tous nos sites sont conçus en mobile-first : ils s\'adaptent à tous les formats d\'écran. Google privilégie le responsive design, et plus de 60% du trafic web provient aujourd\'hui des mobiles.',
          },
        ]}
      />
    </>
  )
}
