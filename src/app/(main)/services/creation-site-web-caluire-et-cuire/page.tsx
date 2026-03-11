import { Metadata } from 'next'
import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
  DEFAULT_SEO,
} from '@/lib/seo-utils'

import CaluireLandingContent, { VilleurbannContent } from '@/components/CaluireLandingContent'

// ─── Types ──────────────────────────────────────────────────────────────────────

// ─── SEO Slug (same across locales, route is locale-prefixed) ────────────────

const PAGE_PATH = 'services/creation-site-web-caluire-et-cuire'

// ─── Content Data ───────────────────────────────────────────────────────────────

const seoContent = {
  fr: {
    title: 'Création site web Caluire-et-Cuire | Développeur freelance premium',
    description:
      'Développeur web freelance à Caluire-et-Cuire (69300). Création de sites vitrines, e-commerce, refonte et SEO technique. Devis gratuit sous 24h.',
    keywords: [
      'création site web caluire',
      'développeur web caluire-et-cuire',
      'site internet caluire',
      'freelance web caluire',
      'agence web caluire',
      'création site vitrine caluire',
      'site e-commerce caluire',
      'refonte site web caluire',
      'seo caluire-et-cuire',
      'développeur freelance lyon',
      'création site internet lyon métropole',
      'webmaster caluire',
      'développeur react caluire',
      'site web professionnel caluire 69300',
    ],
  },
}

const faqData = {
  fr: [
    {
      question: 'Combien coûte la création d\u2019un site web à Caluire-et-Cuire ?',
      answer:
        'Le tarif dépend du type de projet. Un site vitrine démarre à partir de 1 500 €, un site e-commerce à partir de 3 000 €. Je vous envoie un devis détaillé et gratuit sous 24 h après notre premier échange.',
    },
    {
      question: 'Quel est le délai de livraison d\u2019un site internet à Caluire ?',
      answer:
        'Un site vitrine est livré en 3 à 5 semaines. Un projet e-commerce ou sur mesure peut nécessiter 6 à 10 semaines. Chaque planning est défini ensemble en amont.',
    },
    {
      question:
        'Pourquoi choisir un développeur freelance à Caluire-et-Cuire plutôt qu\u2019une agence ?',
      answer:
        'Un freelance vous offre un interlocuteur unique, des tarifs compétitifs et une grande réactivité. Basé dans la métropole de Lyon, je me déplace pour nos rendez-vous à Caluire et ses environs.',
    },
    {
      question: 'Mon site sera-t-il bien référencé sur Google à Caluire ?',
      answer:
        'Oui, chaque site est conçu avec le SEO technique intégré : balises sémantiques, vitesse de chargement optimisée, données structurées et mots-clés géolocalisés pour Caluire, Lyon et la métropole.',
    },
    {
      question: 'Proposez-vous la maintenance après la mise en ligne ?',
      answer:
        'Absolument. Je propose des forfaits de maintenance incluant mises à jour de sécurité, sauvegardes, monitoring de performance et support technique réactif.',
    },
    {
      question: 'Quelles technologies utilisez-vous pour créer des sites web ?',
      answer:
        'J\u2019utilise des technologies modernes et performantes : React, Next.js, TypeScript et Tailwind CSS. Cela garantit des sites rapides, sécurisés et facilement évolutifs.',
    },
    {
      question: 'Créez-vous des sites web pour tous les quartiers de Caluire ?',
      answer:
        'Oui, j\u2019interviens dans toute la commune de Caluire-et-Cuire : Le Bourg, Cuire le Bas, Cuire le Haut, Montessuy, Saint-Clair, Vassieux et les communes limitrophes.',
    },
    {
      question: 'Quelle est la différence entre un freelance et une agence web à Caluire ?',
      answer:
        'Un freelance offre un interlocuteur unique, des tarifs compétitifs (pas de frais de structure), une réactivité sous 24h et des technologies modernes (React, Next.js). Une agence implique souvent plusieurs intermédiaires, des délais plus longs et un coût 50 à 100% supérieur.',
    },
  ],
}

// ─── generateMetadata ───────────────────────────────────────────────────────────

export async function generateMetadata(): Promise<Metadata> {
  const content = seoContent.fr
  const alternates = generateAlternateUrls(PAGE_PATH)
  const canonical = createCanonicalUrl(PAGE_PATH, 'fr')

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        'fr-FR': alternates.fr,
        'x-default': alternates.fr,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      type: 'website',
      locale: 'fr_FR',
      url: canonical,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: ['/images/opengraph-fr.png'],
      creator: '@sidikoffdigital',
    },
  }
}

// ─── JSON-LD Schemas ────────────────────────────────────────────────────────────

function getStructuredData() {
  const canonical = createCanonicalUrl(PAGE_PATH, 'fr')

  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DEFAULT_SEO.siteUrl}/services/creation-site-web-caluire-et-cuire#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL – Développeur Web Freelance à Caluire-et-Cuire',
    description:
      'Développeur web freelance spécialisé en création de sites internet à Caluire-et-Cuire et Lyon métropole. Sites vitrines, e-commerce, SEO technique.',
    url: canonical,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    image: '/images/opengraph-fr.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Caluire-et-Cuire',
      postalCode: '69300',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.7972',
      longitude: '4.8464',
    },
    areaServed: [
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'AdministrativeArea', name: 'Lyon métropole' },
      { '@type': 'AdministrativeArea', name: 'Rhône' },
    ],
    serviceType: [
      'Création de site web',
      'Développement site vitrine',
      'Site e-commerce',
      'Refonte de site internet',
      'SEO technique',
      'Développement web sur mesure',
    ],
    priceRange: '€€',
    sameAs: [
      'https://github.com/ssidikov',
      'https://linkedin.com/in/sardorbeksidikov',
      'https://twitter.com/sidikoffdigital',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '20',
    },
    slogan: 'Votre transformation digitale à Caluire-et-Cuire',
    foundingDate: '2025',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'SEO Technique',
      'Web Performance',
    ],
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sardorbek SIDIKOV',
    jobTitle: 'Développeur Web Freelance',
    url: DEFAULT_SEO.siteUrl,
    worksFor: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
    },
    sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'SEO'],
  }

  const faqSchema = generateFAQStructuredData(faqData.fr)

  const breadcrumb = generateBreadcrumbStructuredData([
    {
      name: 'Accueil',
      url: createCanonicalUrl('', 'fr'),
    },
    {
      name: 'Services',
      url: createCanonicalUrl('services', 'fr'),
    },
    {
      name: 'Création site web Caluire-et-Cuire',
      url: canonical,
    },
  ])

  return [professionalService, person, faqSchema, breadcrumb]
}

// ─── Page Component ─────────────────────────────────────────────────────────────

export default async function CaluirePage() {
  const faqs = faqData.fr
  const structuredData = getStructuredData()
  const t = getPageContent()

  return <CaluireLandingContent content={t} faqs={faqs} structuredData={structuredData} />
}

// ─── Content per locale ─────────────────────────────────────────────────────────

function getPageContent(): VilleurbannContent {
  // Fallback to FR
  return {
    badge: 'Expert Web Caluire',
    h1Start: 'Création de sites internet à ',
    h1City: 'Caluire-et-Cuire',
    subtitle:
      'Développeur web freelance basé dans la métropole de Lyon. Je conçois des sites vitrines et e-commerce modernes, performants et optimisés pour le SEO local à Caluire-et-Cuire.',
    cta1: 'Devis Gratuit',
    cta2: 'Voir les projets',
    stat1: '20+',
    stat1Label: 'Projets livrés',
    stat2: '2-4  sem',
    stat2Label: 'Délai moyen',
    stat3: '7j/7',
    stat3Label: 'Support',
    servicesTitle: 'Services de création web à Caluire',
    servicesSubtitle:
      'Des solutions digitales sur mesure pour les entreprises, artisans et indépendants de Caluire et du Grand Lyon.',
    services: [
      {
        icon: 'showcase',
        title: 'Site Vitrine Caluire',
        desc: 'Un site internet professionnel pour valoriser votre activité auprès de vos clients à Caluire et Lyon métropole.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'ecommerce',
        title: 'E-commerce Performant',
        desc: 'Boutique en ligne sécurisée, gestion de produits, paiements intégrés et design vendeur pour vendre depuis Caluire.',
        link: '/services/creation-site-ecommerce',
      },
      {
        icon: 'custom',
        title: 'Développement Sur Mesure',
        desc: 'Applications web, intégrations API, CMS personnalisé et fonctionnalités spécifiques à votre métier.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'seo',
        title: 'SEO Technique Caluire',
        desc: 'Référencement local optimisé pour positionner votre site sur les requêtes ciblant Caluire et la région.',
        link: '/services/optimisation-seo',
      },
      {
        icon: 'redesign',
        title: 'Refonte de Site Web',
        desc: 'Modernisez votre site actuel : nouveau design, meilleures performances, migration sécurisée et gain de positions.',
        link: '/services/refonte-sites-web',
      },
      {
        icon: 'maintenance',
        title: 'Maintenance & Support',
        desc: 'Suivi régulier, mises à jour de sécurité, sauvegardes automatiques et assistance technique réactive.',
        link: '/services/maintenance-support',
      },
    ],
    processTitle: 'Notre process de collaboration',
    processSubtitle:
      'Une méthodologie éprouvée pour livrer votre projet dans les meilleures conditions.',
    processSteps: [
      {
        step: '01',
        title: 'Audit & Découverte',
        desc: 'Analyse de vos besoins, de votre marché et de la concurrence à Caluire.',
      },
      {
        step: '02',
        title: 'Développement',
        desc: 'Codage propre et performant respectant les standards (React, Next.js).',
      },
      {
        step: '03',
        title: 'Recette & Optimisation',
        desc: 'Tests complets, vérification SEO, performance et compatibilité mobile.',
      },
      {
        step: '04',
        title: 'Mise en ligne',
        desc: 'Déploiement sécurisé, formation à l’administration et suivi.',
      },
    ],
    ctaTitle: 'Prêt à lancer votre projet web à Caluire ?',
    ctaSubtitle:
      'Obtenez un devis détaillé gratuitement sous 24h et démarrez votre transformation digitale.',
    ctaBtn1: 'Devis Gratuit',
    ctaBtn2: 'Me contacter',
    learnMore: 'En savoir plus',
  }
}
