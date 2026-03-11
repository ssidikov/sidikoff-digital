import { Metadata } from 'next'
import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
  DEFAULT_SEO,
} from '@/lib/seo-utils'

import VilleurbanneLandingContent from '@/components/VilleurbanneLandingContent'

// ─── Types ──────────────────────────────────────────────────────────────────────

// ─── SEO Slug (same across locales, route is locale-prefixed) ────────────────

const PAGE_PATH = 'services/creation-site-web-villeurbanne'

// ─── Content Data ───────────────────────────────────────────────────────────────

const seoContent = {
  fr: {
    title: 'Création site web à Villeurbanne | Développeur freelance premium',
    description:
      'Développeur web freelance à Villeurbanne (69100). Création de sites vitrines, e-commerce, refonte et SEO technique. Devis gratuit sous 24h.',
    keywords: [
      'création site web villeurbanne',
      'développeur web villeurbanne',
      'site internet villeurbanne',
      'freelance web villeurbanne',
      'agence web villeurbanne',
      'création site vitrine villeurbanne',
      'site e-commerce villeurbanne',
      'refonte site web villeurbanne',
      'seo villeurbanne',
      'développeur freelance lyon',
      'création site internet lyon métropole',
      'webmaster villeurbanne',
      'développeur react villeurbanne',
      'site web professionnel villeurbanne 69100',
    ],
  },
}

const faqData = {
  fr: [
    {
      question: 'Combien coûte la création d\u2019un site web à Villeurbanne ?',
      answer:
        'Le tarif dépend du type de projet. Un site vitrine démarre à partir de 1 500 €, un site e-commerce à partir de 3 000 €. Je vous envoie un devis détaillé et gratuit sous 24 h après notre premier échange.',
    },
    {
      question: 'Quel est le délai de livraison d\u2019un site internet à Villeurbanne ?',
      answer:
        'Un site vitrine est livré en 3 à 5 semaines. Un projet e-commerce ou sur mesure peut nécessiter 6 à 10 semaines. Chaque planning est défini ensemble en amont.',
    },
    {
      question:
        'Pourquoi choisir un développeur freelance à Villeurbanne plutôt qu\u2019une agence ?',
      answer:
        'Un freelance vous offre un interlocuteur unique, des tarifs compétitifs et une grande réactivité. Basé dans la métropole de Lyon, je me déplace pour nos rendez-vous à Villeurbanne et ses environs.',
    },
    {
      question: 'Mon site sera-t-il bien référencé sur Google à Villeurbanne ?',
      answer:
        'Oui, chaque site est conçu avec le SEO technique intégré : balises sémantiques, vitesse de chargement optimisée, données structurées et mots-clés géolocalisés pour Villeurbanne et Lyon métropole.',
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
      question: 'Créez-vous des sites web pour tous les quartiers de Villeurbanne ?',
      answer:
        'Oui, j\u2019interviens dans toute la commune de Villeurbanne : Gratte-ciel, Tonkin, Charpennes, Cusset, Les Buers, Flachet, La Doua et les quartiers limitrophes comme Bron, Vaulx-en-Velin et Caluire-et-Cuire.',
    },
    {
      question: 'Quelle est la différence entre un freelance et une agence web à Villeurbanne ?',
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
    '@id': `${DEFAULT_SEO.siteUrl}/services/creation-site-web-villeurbanne#LocalBusiness`,
    name: 'SIDIKOFF DIGITAL – Développeur Web Freelance à Villeurbanne',
    description:
      'Développeur web freelance spécialisé en création de sites internet à Villeurbanne et Lyon métropole. Sites vitrines, e-commerce, SEO technique.',
    url: canonical,
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    image: '/images/opengraph-fr.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Villeurbanne',
      postalCode: '69100',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.7667',
      longitude: '4.8799',
    },
    areaServed: [
      { '@type': 'City', name: 'Villeurbanne' },
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
    slogan: 'Votre transformation digitale à Villeurbanne',
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
      name: 'Création site web Villeurbanne',
      url: canonical,
    },
  ])

  return [professionalService, person, faqSchema, breadcrumb]
}

// ─── Page Component ─────────────────────────────────────────────────────────────

export default async function VilleurbannePage() {
  const faqs = faqData.fr
  const structuredData = getStructuredData()
  const t = getPageContent()

  return (
    <VilleurbanneLandingContent
      content={t}
      faqs={faqs}
      structuredData={structuredData}
    />
  )
}

// ─── Content per locale ─────────────────────────────────────────────────────────

function getPageContent() {
  // French (default)
  return {
    badge: 'Expert Web Villeurbanne',
    h1Start: 'Développeur web à ',
    h1City: 'Villeurbanne',
    h1Suffix: '– création de sites modernes et optimisés SEO',
    subtitle:
      'Développeur web freelance basé dans la métropole de Lyon. Je conçois des sites internet performants, modernes et optimisés pour le référencement local à Villeurbanne (69100).',
    cta1: 'Devis gratuit',
    cta2: 'Voir les réalisations',
    stat1: '20+',
    stat1Label: 'Projets livrés',
    stat2: '2-4  sem',
    stat2Label: 'Délai moyen',
    stat3: '7j/7',
    stat3Label: 'Support',
    servicesTitle: 'Services de création de site web à Villeurbanne',
    servicesSubtitle:
      'Des solutions digitales sur mesure pour les entreprises, artisans et indépendants de Villeurbanne et Lyon métropole.',
    services: [
      {
        icon: 'showcase',
        title: 'Site vitrine à Villeurbanne',
        desc: 'Un site vitrine professionnel pour valoriser votre activité auprès de vos clients à Villeurbanne et dans la métropole de Lyon.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'ecommerce',
        title: 'Site e-commerce performant',
        desc: 'Boutique en ligne sécurisée, gestion des produits, paiement intégré et design responsive pour vendre en ligne depuis Villeurbanne.',
        link: '/services/creation-site-ecommerce',
      },
      {
        icon: 'custom',
        title: 'Développement web sur mesure',
        desc: 'Applications web, intégrations API, CMS personnalisés et solutions adaptées aux besoins spécifiques de votre entreprise.',
        link: '/services/creation-sites-web',
      },
      {
        icon: 'seo',
        title: 'SEO technique Villeurbanne',
        desc: 'Référencement local optimisé pour positionner votre site sur les requêtes ciblant Villeurbanne, Lyon et la région Auvergne-Rhône-Alpes.',
        link: '/services/optimisation-seo',
      },
      {
        icon: 'redesign',
        title: 'Refonte de site internet',
        desc: 'Modernisation de votre site existant : nouveau design, meilleure performance, migration sécurisée et amélioration du SEO.',
        link: '/services/refonte-sites-web',
      },
      {
        icon: 'maintenance',
        title: 'Maintenance & support',
        desc: 'Suivi continu, mises à jour de sécurité, sauvegardes automatiques et assistance technique réactive.',
        link: '/services/maintenance-support',
      },
    ],
    pricingTitle: 'Tarifs transparents',
    pricingSubtitle:
      'Des tarifs clairs, sans frais cachés. Chaque projet inclut le SEO, le design responsive et le support post-lancement.',
    pricingTiers: [
      {
        name: 'Site Vitrine',
        price: 'À partir de 1 500 €',
        timeline: '2-4  semaines',
        features: [
          'Design responsive sur mesure',
          'SEO technique intégré',
          'CMS pour gestion facile',
          'SSL & optimisation performance',
          'Formation post-lancement',
        ],
      },
      {
        name: 'E-commerce',
        price: 'À partir de 3 000 €',
        timeline: '6-10 semaines',
        featured: true,
        features: [
          'Boutique complète',
          'Paiement sécurisé intégré',
          'Gestion de catalogue produits',
          'SEO local optimisé',
          'Tableau de bord analytics',
          '3 mois de support',
        ],
      },
      {
        name: 'Sur Mesure',
        price: 'Sur devis',
        timeline: '8-12 semaines',
        features: [
          'Intégration API',
          'Fonctionnalités personnalisées',
          'Architecture dédiée',
          'Performance avancée',
          'Support prioritaire',
        ],
      },
    ],
    pricingCta: 'Demander un devis',
    pricingPopular: '\u2605 Le plus populaire',
    whyTitle: 'Pourquoi me choisir à Villeurbanne ?',
    whySubtitle:
      'Une expertise technique premium et un accompagnement de proximité pour votre projet digital.',
    whyItems: [
      {
        title: 'Proximité locale',
        desc: 'Basé dans la métropole de Lyon, je me déplace à Villeurbanne pour nos rendez-vous et assure un suivi rapproché.',
      },
      {
        title: 'Performance maximale',
        desc: 'Sites ultra-rapides avec un score Lighthouse 95+, optimisés pour les Core Web Vitals.',
      },
      {
        title: 'SEO technique avancé',
        desc: 'Référencement intégré dès la conception : données structurées, balisage sémantique, mots-clés géolocalisés.',
      },
      {
        title: 'Design moderne & premium',
        desc: 'Interfaces élégantes et responsive, conçues pour convertir vos visiteurs en clients.',
      },
      {
        title: 'Technologies modernes',
        desc: 'React, Next.js, TypeScript — des technologies qui garantissent sécurité, scalabilité et maintenabilité.',
      },
      {
        title: 'Accompagnement dédié',
        desc: 'Un interlocuteur unique du brief à la mise en ligne. Communication transparente et réactivité garantie.',
      },
    ],
    comparisonTitle: 'Freelancer vs Agence à Villeurbanne',
    comparisonHeaders: ['Critère', 'Freelance', 'Agence'],
    comparisonRows: [
      ['Tarif', 'Compétitif, pas de frais de structure', '50 à 100 % plus cher'],
      ['Communication', 'Interlocuteur unique direct', 'Plusieurs intermédiaires'],
      ['Réactivité', '< 24h en moyenne', '48-72h en moyenne'],
      ['Technologies', 'React, Next.js (modernes)', 'Souvent WordPress/legacy'],
      ['Flexibilité', 'Élevée, approche sur mesure', 'Processus standardisés'],
    ],
    processTitle: 'Notre processus de collaboration',
    processSubtitle:
      'Une méthodologie éprouvée pour livrer votre projet dans les meilleures conditions.',
    processSteps: [
      {
        step: '01',
        title: 'Découverte & audit',
        desc: 'Analyse de vos besoins, de votre marché et de vos concurrents à Villeurbanne.',
      },
      {
        step: '02',
        title: 'Développement',
        desc: 'Codage propre et performant avec React et Next.js.',
      },
      {
        step: '03',
        title: 'Tests & optimisation',
        desc: 'Contrôle qualité, SEO et performance cross-navigateurs.',
      },
      {
        step: '04',
        title: 'Lancement & suivi',
        desc: 'Mise en ligne, formation et maintenance continue.',
      },
    ],
    trustTitle: 'Résultats prouvés',
    trustSubtitle: 'Des performances mesurables pour mes clients de Villeurbanne et Lyon.',
    trustItems: [
      {
        metric: '95+',
        label: 'Score Lighthouse',
        desc: 'Performance moyenne sur tous les projets',
      },
      {
        metric: '< 24h',
        label: 'Temps de réponse',
        desc: 'Réactivité garantie pour chaque demande',
      },
      { metric: '5/5', label: 'Note clients', desc: 'Satisfaction basée sur 20+ avis' },
      {
        metric: '20+',
        label: 'Projets livrés',
        desc: 'Sites vitrines, e-commerce, apps sur mesure',
      },
    ],
    quartiersTitle: 'Développeur web pour tout Villeurbanne',
    quartiersText:
      'J\u2019interviens dans tout <strong>Villeurbanne</strong> et ses quartiers, en proposant des services de création de site web, refonte et optimisation SEO pour les entreprises locales.',
    quartiersNearby:
      'Je couvre également les villes voisines de la <strong>métropole de Lyon</strong>, garantissant un service de proximité et des rendez-vous en personne.',
    quartiersLabel: 'Quartiers de Villeurbanne',
    quartiersList: [
      'Gratte-ciel',
      'Tonkin',
      'Charpennes',
      'Cusset',
      'Les Buers',
      'Flachet',
      'La Doua',
      'Croix-Luizet',
    ],
    quartiersProximity: 'Villes voisines',
    quartiersNearbyList: [
      'Lyon',
      'Bron',
      'Vaulx-en-Velin',
      'Caluire-et-Cuire',
      'Décines-Charpieu',
      'Rillieux-la-Pape',
    ],
    faqTitle: 'FAQ — Création site web Villeurbanne',
    ctaTitle: 'Prêt à lancer votre projet web ?',
    ctaSubtitle:
      'Obtenez un devis gratuit et détaillé sous 24 h et démarrez votre transformation digitale à Villeurbanne.',
    ctaBtn1: 'Devis gratuit',
    ctaBtn2: 'Me contacter',
    learnMore: 'En savoir plus',
  }
}
