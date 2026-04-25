import {
  createCanonicalUrl,
  DEFAULT_SEO,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  generateServiceSchema,
  generateFAQStructuredData,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import AgenceNextjsReactContent from '@/components/AgenceNextjsReactContent'

const PAGE_SLUG = 'services/agence-nextjs-react'

export async function generateMetadata(): Promise<Metadata> {
  const pageUrl = createCanonicalUrl(PAGE_SLUG, 'fr')

  return {
    title: 'Agence Next.js & React Paris | Développement Web Sur Mesure',
    description: 'Agence web spécialisée Next.js et React. Développement d\'applications web, sites vitrines haute performance et plateformes SaaS sur mesure. Développeurs React experts.',
    keywords: [
      'agence next js',
      'agence next.js',
      'agence web react',
      'développement react paris',
      'développeur react',
      'agence developpement web react',
      'agence next js paris',
      'création site next js',
      'application web react',
      'front end react',
      'développement front end next.js',
      'expert next.js',
    ],
    authors: [{ name: 'Sidikoff Digital' }],
    creator: 'Sidikoff Digital',
    publisher: 'Sidikoff Digital',
    alternates: {
      canonical: pageUrl,
      languages: generateAlternateUrls(PAGE_SLUG),
    },
    openGraph: {
      title: 'Agence Next.js & React Paris | Développement Web Sur Mesure',
      description: 'Agence web spécialisée Next.js et React. Développement d\'applications web, sites vitrines haute performance et plateformes SaaS sur mesure. Développeurs React experts.',
      url: pageUrl,
      siteName: 'Sidikoff Digital',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: 'Agence Next.js & React - Développement d\'applications web',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Agence Next.js & React Paris | Développement Web Sur Mesure',
      description: 'Agence web spécialisée Next.js et React. Développement d\'applications web, sites vitrines haute performance et plateformes SaaS sur mesure. Développeurs React experts.',
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

export default function AgenceNextjsReactPage() {
  const pageUrl = createCanonicalUrl(PAGE_SLUG, 'fr')

  const faqSchema = generateFAQStructuredData([
    {
      question: 'Pourquoi choisir Next.js plutôt que WordPress pour mon site ?',
      answer: 'Next.js est un framework React qui offre des performances nettement supérieures à WordPress : score Lighthouse 95-100 vs 40-70 en moyenne, chargement en moins d\'une seconde, sécurité renforcée (pas de plugins vulnérables) et SEO technique natif. WordPress reste pertinent pour les sites qui nécessitent un CMS classique avec un grand écosystème de plugins. Next.js est idéal si vous voulez vous démarquer techniquement et en performance SEO.',
    },
    {
      question: 'Quelle est la différence entre Next.js et React ?',
      answer: 'React est la bibliothèque d\'interface utilisateur (UI) développée par Meta. Next.js est un framework construit au-dessus de React qui ajoute le rendu côté serveur (SSR), la génération statique (SSG), le routing automatique, l\'optimisation des images et les API Routes. En résumé : React est le moteur, Next.js est la voiture complète prête à rouler en production.',
    },
    {
      question: 'Combien coûte un développement Next.js ou React ?',
      answer: 'Le budget dépend de la complexité du projet. Un site vitrine Next.js démarre à partir de 1 290 € avec CMS headless. Une application React sur mesure (dashboard, SaaS, e-commerce) commence autour de 3 000 €. Nous fournissons un devis détaillé et gratuit après un appel de cadrage. Chaque ligne du devis est expliquée et justifiée.',
    },
    {
      question: 'Livrez-vous le code source et puis-je le modifier moi-même ?',
      answer: 'Oui, vous êtes propriétaire à 100% du code source. Nous livrons un repo GitHub privé avec documentation technique. Si vous avez des développeurs en interne, ils pourront reprendre le projet facilement. Si vous n\'en avez pas, nous proposons des contrats de maintenance et d\'évolution.',
    },
    {
      question: 'Mon site Next.js sera-t-il bien référencé sur Google ?',
      answer: 'Oui, et c\'est l\'un des avantages majeurs de Next.js. Le rendu côté serveur génère un HTML complet et sémantique que Googlebot crawle parfaitement. Nous intégrons sitemap.xml dynamique, métadonnées Open Graph, données structurées JSON-LD et canonical automatiques. Nos sites atteignent systématiquement un score Lighthouse SEO de 100.',
    },
    {
      question: 'Combien de temps faut-il pour développer un projet Next.js ?',
      answer: 'Un site vitrine Next.js avec CMS prend 2 à 4 semaines. Une application React complexe (authentification, base de données, API) nécessite 6 à 12 semaines selon la portée fonctionnelle. Nous travaillons en sprints avec des livrables intermédiaires visibles pour vous tenir informé à chaque étape.',
    },
  ])

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Next.js & React', url: pageUrl },
  ])

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Agence Next.js & React - Développement Web Sur Mesure',
    description: 'Agence web spécialisée Next.js et React. Développement d\'applications web, sites vitrines haute performance et plateformes SaaS sur mesure.',
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
    name: 'Agence Next.js & React - Développement Web Sur Mesure',
    description: 'Développement sur mesure d\'applications web React et sites Next.js haute performance, avec architecture de pointe et SEO natif.',
    url: pageUrl,
    areaServed: ['France', 'Paris', 'International'],
    image: `${DEFAULT_SEO.siteUrl}/images/opengraph-fr.png`,
    priceRange: '€€€',
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

  return (
    <>
      <script
        id="schema-webpage"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        id='schema-service-nextjs-react'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        id='schema-organization'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        id='schema-breadcrumb-nextjs-react'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id='schema-faq-nextjs-react'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AgenceNextjsReactContent />
    </>
  )
}
