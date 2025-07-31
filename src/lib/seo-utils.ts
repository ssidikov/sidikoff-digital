import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'

// Types
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  locale: Locale
  alternateLanguages?: Record<Locale, string>
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export interface LocalBusiness {
  name: string
  url: string
  email?: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  telephone: string
  geo: {
    latitude: string
    longitude: string
  }
  areaServed: string[]
  hasMap: string
}

// Default SEO configuration
export const DEFAULT_SEO = {
  siteName: 'SIDIKOFF DIGITAL - Développeur Web Full Stack',
  siteUrl: 'https://sidikoff.com',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@sidikoffdigital',
  locale: 'fr' as Locale,
  keywords: [
    'développeur web',
    'full stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'développement frontend',
    'développement backend',
    'freelance développeur',
    'consultant web',
    'applications web',
    'sites internet',
    'développement sur mesure',
  ],
}

// Business locations - Couverture complète des principales villes françaises
export const businessLocations: LocalBusiness[] = [
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Paris',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '77 Ter Rue Michel Ange',
      addressLocality: 'Paris',
      postalCode: '75016',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '48.8566',
      longitude: '2.3522',
    },
    areaServed: [
      'Paris',
      'Île-de-France',
      'Seine-et-Marne',
      'Yvelines',
      'Essonne',
      'Hauts-de-Seine',
      'Seine-Saint-Denis',
      'Val-de-Marne',
      "Val-d'Oise",
      'Toulouse',
      'Lyon',
      'Strasbourg',
      'Mulhouse',
      'Colmar',
      'Reims',
      'Clermont-Ferrand',
      'Bordeaux',
      'Nice',
      'Nantes',
      'Lille',
      'Montpellier',
      'Rennes',
      'Toulon',
      'Marseille',
      'France',
      'Belgique',
      'Suisse',
      'Luxembourg',
      'Allemagne',
      'Italie',
      'Espagne',
      'Portugal',
    ],
    hasMap: 'https://maps.app.goo.gl/7219cD6xWk5tdYpb6',
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web à Toulouse',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '22 Bd Maréchal Leclerc',
      addressLocality: 'Toulouse',
      postalCode: '31000',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '43.6047',
      longitude: '1.4442',
    },
    areaServed: [
      'Toulouse',
      'Occitanie',
      'Haute-Garonne',
      'Ariège',
      'Aveyron',
      'Gard',
      'Gers',
      'Hérault',
      'Lot',
      'Lozère',
      'Hautes-Pyrénées',
      'Pyrénées-Orientales',
      'Tarn',
      'Tarn-et-Garonne',
      'Montauban',
      'Narbonne',
      'Perpignan',
      'Limoges',
      'Limousin',
      'Haute-Vienne',
      'Creuse',
      'Corrèze',
      'Dordogne',
      'Gironde',
      'Landes',
      'Pyrénées-Atlantiques',
      'Hautes-Pyrénées',
      'Pyrénées-Orientales',
      'Ariège',
      'Aveyron',
      'Gard',
      'Hérault',
      'Lot',
      'Montastruc-la-Conseillère',
      'Saint-Sulpice-la-Pointe',
      'Saint-Cyprien',
      'Saint-Gaudens',
      'Saint-Jean-Lasselle',
      'Saint-Lys',
      'Saint-Michel-de-Rieufret',
      'Saint-Pé-de-Bigorre',
      'France',
    ],
    hasMap: 'https://maps.google.com/?q=Toulouse+France',
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web à Lyon',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '25 Rue de la République',
      addressLocality: 'Lyon',
      postalCode: '69002',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '45.7640',
      longitude: '4.8357',
    },
    areaServed: [
      'Lyon',
      'Auvergne-Rhône-Alpes',
      'Rhône',
      'Métropole de Lyon',
      'Ain',
      'Allier',
      'Ardèche',
      'Cantal',
      'Drôme',
      'Isère',
      'Loire',
      'Haute-Loire',
      'Puy-de-Dôme',
      'Savoie',
      'Haute-Savoie',
      'France',
    ],
    hasMap: 'https://maps.google.com/?q=Lyon+France',
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web à Strasbourg',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: '15 Place Kléber',
      addressLocality: 'Strasbourg',
      postalCode: '67000',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '48.5734',
      longitude: '7.7521',
    },
    areaServed: [
      'Strasbourg',
      'Grand Est',
      'Bas-Rhin',
      'Haut-Rhin',
      'Ardennes',
      'Aube',
      'Marne',
      'Haute-Marne',
      'Meurthe-et-Moselle',
      'Meuse',
      'Moselle',
      'Vosges',
      'Mulhouse',
      'Colmar',
      'France',
    ],
    hasMap: 'https://maps.google.com/?q=Strasbourg+France',
  },
]

// Main services offered
export const mainServices = [
  {
    name: 'Développement Web Frontend',
    description: 'Applications React, Next.js, avec expertise en performances et UX/UI',
    url: '/#services',
    slug: 'frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    name: 'Développement Web Backend',
    description: 'APIs REST, Rest API, Node.js, bases de données et architecture serveur',
    url: '/#services',
    slug: 'backend',
    technologies: ['Node.js', 'Rest API'],
  },
  {
    name: 'Développement Web Full Stack',
    description: 'Solutions complètes de développement web avec Next.js et stack moderne',
    url: '/#services',
    slug: 'fullstack',
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Prisma'],
  },
  {
    name: 'Optimisation & Performance',
    description: 'Optimisation SEO, performances web, et amélioration de la vitesse de chargement',
    url: '/#services',
    slug: 'optimization',
    technologies: ['SEO', 'Core Web Vitals', 'Lighthouse', 'Analytics'],
  },
  {
    name: 'Consultation Technique',
    description: 'Audit de code, architecture et conseils en développement web',
    url: '/#services',
    slug: 'consultation',
    technologies: ['Code Review', 'Architecture', 'Performance', 'Scalability'],
  },
]

// Generate SEO metadata
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    locale,
    alternateLanguages,
    ogImage = DEFAULT_SEO.defaultImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noIndex = false,
    publishedTime,
    modifiedTime,
    authors,
    tags,
  } = config

  const metadata: Metadata = {
    title,
    description,
    keywords: [...DEFAULT_SEO.keywords, ...keywords],
    authors: authors?.map((author) => ({ name: author })),
    creator: 'Sardorbek SIDIKOV',
    publisher: 'Sardorbek SIDIKOV',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: DEFAULT_SEO.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: ogType,
      publishedTime,
      modifiedTime,
      tags,
    },

    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
      creator: DEFAULT_SEO.twitterHandle,
    },

    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  }

  return metadata
}

// Generate French SEO metadata
export function generateFrenchSEOMetadata(locale: string): Metadata {
  const isHomePage = true

  const seoData = {
    title: isHomePage
      ? 'SIDIKOFF DIGITAL - Création de Sites Web modernes | Agence Web'
      : `SIDIKOFF DIGITAL - Agence Web`,
    description:
      'Développeur Web Full Stack spécialisé en React, Next.js, TypeScript. Solutions de développement web modernes, applications sur mesure, optimisation SEO et consultation technique.',
    keywords: [
      // Mots-clés géographiques principaux
      'développeur web paris',
      'développeur web lyon',
      'développeur web toulouse',
      'développeur web strasbourg',
      'agence web paris',
      'agence web lyon',
      'agence web toulouse',
      'agence web strasbourg',
      'agence web france',

      // Autres villes importantes
      'développeur web marseille',
      'développeur web bordeaux',
      'développeur web nice',
      'développeur web nantes',
      'développeur web lille',
      'développeur web montpellier',
      'développeur web rennes',
      'développeur web toulon',
      'développeur web nancy',
      'développeur web metz',
      'développeur web mulhouse',
      'développeur web colmar',
      'développeur web reims',
      'développeur web clermont ferrand',
      'développeur web grenoble',
      'développeur web saint etienne',
      'développeur web annecy',
      'développeur web dijon',
      'développeur web orleans',
      'développeur web tours',

      // Termes géographiques avec qualificatifs
      'développeur web parisien',
      'développeur web toulousain',
      'développeur web lyonnais',
      'développeur web alsacien',
      'développeur web rhône alpes',
      'développeur web ile de france',
      'développeur web occitanie',
      'développeur web grand est',
      'développeur web auvergne rhône alpes',

      // Long tail keywords - Recherches spécifiques par ville
      'création site web paris',
      'création site web lyon',
      'création site web toulouse',
      'création site web strasbourg',
      'refonte site web paris',
      'refonte site web lyon',
      'développement application web paris',
      'développement application web lyon',
      'agence développement web paris',
      'agence développement web lyon',
      'agence création site internet paris',
      'agence création site internet lyon',

      // Services spécialisés par ville
      'développeur react paris',
      'développeur react lyon',
      'développeur nextjs paris',
      'développeur nextjs lyon',
      'expert seo paris',
      'expert seo lyon',
      'consultant web paris',
      'consultant web lyon',
      'freelance développeur paris',
      'freelance développeur lyon',
      'développeur freelance paris',
      'développeur freelance lyon',

      // Termes professionnels
      'développeur web freelance',
      'développeur web indépendant',
      'développeur web expert',
      'développeur web professionnel',
      'développeur web expérimenté',
      'développeur web senior',
      'développeur full stack',
      'développeur full stack france',
      'expert react france',
      'spécialiste next.js',
      'expert typescript',
      'développeur javascript',
      'développeur node.js',

      // Services techniques
      'développement frontend',
      'développement backend',
      'développement fullstack',
      'optimisation seo',
      'audit seo',
      'optimisation performance web',
      'développement responsive',
      'intégration web',
      'maintenance site web',
      'hébergement web',

      // Types de projets
      'site web',
      'site web professionnel',
      'site internet',
      'site internet professionnel',
      'application web',
      'applications web modernes',
      'sites internet professionnels',
      'développement sur mesure',
      'solutions web innovantes',
      'e-commerce',
      'boutique en ligne',
      'site vitrine',
      'portfolio en ligne',
      'blog professionnel',

      // Technologies
      'react developer',
      'next.js developer',
      'typescript expert',
      'javascript developer',
      'node.js developer',
      'mongodb developer',
      'postgresql developer',
      'tailwind css',
      'wordpress developer',
      'prestashop developer',

      // Secteurs d'activité
      'développeur web startup',
      'développeur web pme',
      'développeur web entreprise',
      'développeur web commerce',
      'développeur web restaurant',
      'développeur web médical',
      'développeur web immobilier',
      'développeur web avocat',
      'développeur web artisan',
      'développeur web consultant',
    ],
    canonicalUrl: 'https://sidikoff.com/',
    locale: locale as Locale,
    alternateLanguages: {
      fr: 'https://sidikoff.com/',
      en: 'https://sidikoff.com/en',
      ru: 'https://sidikoff.com/ru',
    },
    ogImage: '/images/og-homepage.jpg',
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const,
  }

  return generateSEOMetadata(seoData)
}

// Generate language alternates
export function generateLanguageAlternates(
  path: string,
  locales: Locale[] = ['fr', 'en', 'ru']
): Record<string, string> {
  const alternates: Record<string, string> = {}

  locales.forEach((locale) => {
    alternates[locale] = createCanonicalUrl(path, locale)
  })

  return alternates
}

// Create canonical URL
export function createCanonicalUrl(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  // French is the default locale, no prefix needed
  if (locale === 'fr') {
    return `${DEFAULT_SEO.siteUrl}${cleanPath ? '/' + cleanPath : ''}`
  }

  // Other locales get prefixes
  return `${DEFAULT_SEO.siteUrl}/${locale}${cleanPath ? '/' + cleanPath : ''}`
}

// Generate local business schema
export function generateLocalBusinessSchema(business: LocalBusiness) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${business.url}#LocalBusiness`,
    name: business.name,
    description: `Développeur Web Full Stack spécialisé en React, Next.js, TypeScript. Solutions de développement web modernes et performantes pour entreprises et startups.`,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: business.address.addressCountry,
      addressLocality: business.address.addressLocality,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: business.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    sameAs: [
      'https://github.com/sidikoff',
      'https://linkedin.com/in/sidikoff',
      'https://twitter.com/sidikoffdigital',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'France',
    },
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '20',
    },
    serviceType: [
      'Développement Web Frontend',
      'Développement Web Backend',
      'Développement Web Full Stack',
      'Optimisation & Performance',
      'Consultation Technique',
    ],
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'React Development',
      'Next.js Development',
      'TypeScript Programming',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'SEO Optimization',
      'Web Performance',
      'Modern Web Applications',
    ],
    slogan: 'Votre transformation digitale commence ici',
    foundingDate: '2025',
    founder: {
      '@type': 'Person',
      name: 'Sardorbek SIDIKOV',
      jobTitle: 'Développeur Web Full Stack',
      worksFor: business.name,
      sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
    },
  }
}

// Organization schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sidikoff.com#Organization',
  name: 'SIDIKOFF DIGITAL',
  legalName: 'SIDIKOFF DIGITAL - Création de Sites Web | Agence Web',
  url: 'https://sidikoff.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sidikoff.com/images/logo-sidikoff.svg',
    width: 300,
    height: 100,
  },
  description:
    'Expert en développement web full stack spécialisé en React, Next.js, TypeScript. Services professionnels en France : Paris, Lyon, Toulouse, Strasbourg, Mulhouse, Colmar et toute la France. Création de sites web modernes, applications sur mesure, optimisation SEO.',
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: 'Sardorbek SIDIKOV',
    jobTitle: 'Développeur Web Full Stack',
    url: 'https://sidikoff.com/',
    sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33626932734',
      email: 's.sidikoff@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: ['French', 'English', 'Russian'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '77 Ter Rue Michel Ange',
    postalCode: '75016',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'France',
    },
    {
      '@type': 'Place',
      name: 'Europe',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Île-de-France',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Auvergne-Rhône-Alpes',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Occitanie',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Grand Est',
    },
    {
      '@type': 'City',
      name: 'Paris',
    },
    {
      '@type': 'City',
      name: 'Lyon',
    },
    {
      '@type': 'City',
      name: 'Toulouse',
    },
    {
      '@type': 'City',
      name: 'Strasbourg',
    },
    {
      '@type': 'City',
      name: 'Mulhouse',
    },
    {
      '@type': 'City',
      name: 'Colmar',
    },
  ],
  knowsAbout: [
    'React Development',
    'Next.js Development',
    'TypeScript Programming',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'SEO Optimization',
    'Web Performance Optimization',
    'Modern Web Applications',
    'API Development',
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'France',
  },
  sameAs: [
    'https://github.com/ssidikov',
    'https://linkedin.com/in/sardorbeksidikov',
    'https://twitter.com/sidikoffdigital',
  ],
}

// Structured data generators for better SEO

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate article structured data
export function generateArticleStructuredData(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: {
      '@type': 'ImageObject',
      url: article.image,
    },
    url: article.url,
  }
}
