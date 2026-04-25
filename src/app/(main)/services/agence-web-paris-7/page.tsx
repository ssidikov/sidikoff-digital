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

const PAGE_SLUG = 'services/agence-web-paris-7'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const pageTitle = 'Agence Web Paris 7 | Création Site Internet Premium'
  const pageDescription =
    'Agence web Paris 7ème : création de sites internet premium et sur-mesure pour professions libérales, cabinets, et commerces de luxe (Invalides, Tour Eiffel, Gros-Caillou).'

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'agence web paris 7',
      'agence web paris 7ème',
      'création site internet paris 7',
      'création site web paris 7ème',
      'développement web paris 7',
      'agence digitale paris 7',
      'site internet premium paris',
      'site e-commerce paris 7',
      'seo local paris 7',
      'création site internet invalides',
      'création site internet gros-caillou',
      'agence web ecole militaire',
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
          alt: 'Agence web Paris 7ème - Création site internet Premium',
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

export default async function AgenceWebParis7Page() {
  const locale = defaultLocale
  const pageUrl = createCanonicalUrl(PAGE_SLUG, locale)

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Web Paris 7 - Création de sites internet premium',
    description:
      'Création de sites internet haut de gamme et référencement SEO pour les cabinets, ambassades et commerces du 7e arrondissement de Paris (Invalides, Tour Eiffel).',
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }

  const serviceJsonLd = generateServiceSchema({
    name: 'Agence web Paris 7 - Création de site internet premium',
    description:
      'Conception de sites web sur-mesure et référencement SEO pour les professionnels exigeants du 7e arrondissement de Paris.',
    url: pageUrl,
    serviceType: 'Création de site web Paris 7',
    areaServed: ['Paris 7ème', 'Invalides', 'Gros-Caillou', 'École Militaire', 'Saint-Thomas-d\'Aquin'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€€',
    provider: {
      name: 'Sidikoff Digital',
      url: DEFAULT_SEO.siteUrl,
    },
  })

  const breadcrumbJsonLd = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence web Paris', url: `${DEFAULT_SEO.siteUrl}/services/agence-web-paris` },
    { name: 'Agence web Paris 7', url: pageUrl },
  ])

  const faqJsonLd = generateFAQStructuredData([
    {
      question: 'Quel est le prix d\'un site internet à Paris 7 ?',
      answer:
        'Pour les professionnels du 7ème arrondissement nécessitant un design premium et statutaire, nos sites vitrines sur-mesure démarrent à 1 290 €. Pour une boutique de luxe ou un site e-commerce complexe, le budget est à partir de 1 990 €.',
    },
    {
      question: 'Combien de temps faut-il pour créer un site dans le 7e ?',
      answer:
        'L\'exigence de qualité demande un délai adapté. Un site vitrine haut de gamme est généralement livré en 2 à 3 semaines ouvrées. Pour un projet sur-mesure complexe (réservations, e-commerce), comptez 4 à 8 semaines.',
    },
    {
      question: 'Faites-vous du référencement local pour Paris 7 (Invalides, Tour Eiffel) ?',
      answer:
        'Oui, nous optimisons votre présence digitale pour capter la clientèle exigeante du 7ème arrondissement (Gros-Caillou, Invalides, Saint-Thomas-d\'Aquin) ainsi que les touristes internationaux.',
    },
    {
      question: 'Serais-je propriétaire de mon site web ?',
      answer:
        'Totalement. Vous êtes l\'unique propriétaire de votre nom de domaine, de l\'hébergement et du code source. Vous disposerez également d\'une interface d\'administration pour modifier vos contenus en toute autonomie.',
    },
  ])

  return (
    <>
      <script
        id="schema-webpage-paris-7"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        id='schema-service-paris-7'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        id='schema-breadcrumb-paris-7'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id='schema-faq-paris-7'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ParisArrondissementLanding
        arrondissement="7"
        heroTitle={
          <>
            Agence web Paris 7<br />
            Excellence & Prestige.
          </>
        }
        heroDescription="Des Invalides au Gros-Caillou, nous concevons des sites internet premium, sécurisés et performants pour les cabinets d'avocats, les professions libérales et les boutiques de luxe du 7e arrondissement."
        neighborhoods={['Invalides', 'Gros-Caillou', 'École Militaire', 'Saint-Thomas-d\'Aquin', 'Tour Eiffel']}
        visionLocaleText="Une expertise digitale haut de gamme pour les institutions et professionnels exigeants de Paris Rive Gauche."
        faqItems={[
          {
            question: 'Quel budget prévoir pour un site premium à Paris 7 ?',
            answer:
              'Nos forfaits s\'adaptent au standing de votre activité. Un site vitrine institutionnel et premium démarre à partir de 1 290 €. Les projets e-commerce et sur-mesure commencent autour de 1 990 €.',
          },
          {
            question: 'Combien de temps faut-il pour créer mon site ?',
            answer:
              'La conception sur-mesure d\'un site internet premium prend entre 2 à 4 semaines, garantissant un design parfait, des performances optimales et une sécurité renforcée.',
          },
          {
            question: 'Faites-vous du référencement local Paris 7 ?',
            answer:
              'Absolument. Nous mettons en place des stratégies SEO pointues pour positionner votre cabinet ou établissement en tête des recherches sur Invalides, Gros-Caillou, ou le 7ème arrondissement de manière globale.',
          },
          {
            question: 'Le design sera-t-il à la hauteur de mon image de marque ?',
            answer:
              'Nous utilisons les dernières technologies (Next.js, Framer Motion) pour créer des interfaces ultra-fluides, élégantes et modernes, reflétant parfaitement le prestige de votre marque.',
          },
        ]}
      />
    </>
  )
}
