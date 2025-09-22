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
    // High-conversion primary keywords
    'création site web professionnel paris',
    'développeur web paris',
    'agence web paris',
    'création site internet',
    'développement web',
    'développeur react',
    'expert nextjs',
    'typescript développeur',
    'freelance développeur web',
    'site web professionnel',
    'création site e-commerce',
    'refonte site web',
    'optimisation seo',
    'développement frontend',
    'développement backend',
    'full stack developer',
    'agence digitale',
    'consultant web',
    'développement sur mesure',
    'applications web modernes',
  ],
}

/**
 * Generates alternate language URLs for hreflang tags
 */
export function generateAlternateUrls(path: string): Record<Locale, string> {
  const alternates: Record<Locale, string> = {} as Record<Locale, string>

  const locales: Locale[] = ['fr', 'en', 'ru']

  locales.forEach((locale) => {
    alternates[locale] = createCanonicalUrl(path, locale)
  })

  return alternates
}

// Business locations - Main business addresses for structured data
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
    areaServed: ['Paris', 'Île-de-France', 'France'],
    hasMap: 'https://maps.app.goo.gl/7219cD6xWk5tdYpb6',
  },
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Toulouse',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: 'Service à domicile',
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
    areaServed: ['Toulouse', 'Haute-Garonne', 'Occitanie'],
    hasMap: 'https://maps.app.goo.gl/toulouse',
  },
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Lyon',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: 'Service à domicile',
      addressLocality: 'Lyon',
      postalCode: '69000',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '45.7640',
      longitude: '4.8357',
    },
    areaServed: ['Lyon', 'Rhône', 'Auvergne-Rhône-Alpes'],
    hasMap: 'https://maps.app.goo.gl/lyon',
  },
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Strasbourg',
    url: 'https://sidikoff.com',
    address: {
      streetAddress: 'Service à domicile',
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
    areaServed: ['Strasbourg', 'Bas-Rhin', 'Grand Est'],
    hasMap: 'https://maps.app.goo.gl/strasbourg',
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

// Generate localized SEO metadata for all languages
export function generateLocalizedSEOMetadata(locale: Locale): Metadata {
  const isHomePage = true

  // Enhanced SEO-optimized titles with primary keywords and call-to-action
  const titles = {
    fr: isHomePage
      ? '🥇 Création Site Web Paris | Expert React Next.js | Devis Gratuit'
      : 'SIDIKOFF DIGITAL - Agence Web Expert Paris | Développement React',
    en: isHomePage
      ? '🥇 Website Creation Paris | React Next.js Expert | Free Quote'
      : 'SIDIKOFF DIGITAL - Expert Web Agency Paris | React Development',
    ru: isHomePage
      ? '🥇 Создание Сайтов Париж | Эксперт React Next.js | Бесплатная первая консультация'
      : 'SIDIKOFF DIGITAL - Экспертное Веб-агентство Париж | React Разработка',
  }

  // Enhanced SEO-optimized descriptions with better keyword density and local targeting
  const descriptions = {
    fr: 'Développeur React Paris - Sites web professionnels, e-commerce, refonte. Expert Next.js TypeScript. Devis gratuit 24h, livraison rapide.',
    en: 'React Developer Paris - Professional website creation, e-commerce, redesign. Next.js TypeScript expert. Free quote 24h, fast delivery.',
    ru: 'React Разработчик Париж - Создание сайтов, e-commerce, редизайн. Эксперт Next.js TypeScript. Бесплатная первая консультация',
  }

  const seoData = {
    title: titles[locale],
    description: descriptions[locale],
    keywords:
      locale === 'fr'
        ? [
            // French keywords
            ...DEFAULT_SEO.keywords,
          ]
        : locale === 'en'
          ? [
              // English keywords
              'web developer',
              'freelance web developer',
              'web development services',
              'website creation',
              'React developer',
              'Next.js expert',
              'TypeScript developer',
              'full stack developer',
              'frontend development',
              'backend development',
              'website development',
              'web agency',
              'digital agency',
              'web design',
              'responsive design',
              'SEO optimization',
              'web performance',
              'e-commerce development',
              'custom web solutions',
              'web consultation',
              'professional websites',
              'modern web applications',
            ]
          : [
              // Russian keywords
              'веб-разработчик',
              'фриланс веб-разработчик',
              'создание сайтов',
              'веб-разработка',
              'React разработчик',
              'Next.js эксперт',
              'TypeScript разработчик',
              'full stack разработчик',
              'frontend разработка',
              'backend разработка',
              'разработка сайтов',
              'веб-агентство',
              'цифровое агентство',
              'веб-дизайн',
              'адаптивный дизайн',
              'SEO оптимизация',
              'производительность веб-сайтов',
              'разработка электронной коммерции',
              'индивидуальные веб-решения',
              'веб-консультации',
              'профессиональные сайты',
              'современные веб-приложения',
            ],
    canonicalUrl: createCanonicalUrl('', locale),
    locale: locale as Locale,
    alternateLanguages: generateAlternateUrls(''),
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
export function generateLocalBusinessSchema(
  business: LocalBusiness,
  includeRating: boolean = true
) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${business.url}#LocalBusiness-${business.address.addressLocality.toLowerCase().replace(/\s+/g, '-')}`,
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
      'https://github.com/ssidikov',
      'https://linkedin.com/in/sardorbeksidikov',
      'https://twitter.com/sidikoffdigital',
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'France',
    },
    priceRange: '€€',
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
      worksFor: {
        '@type': 'Organization',
        '@id': `${business.url}#LocalBusiness-${business.address.addressLocality.toLowerCase().replace(/\s+/g, '-')}`,
        name: business.name,
      },
      sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
    },
  }

  // Only add aggregateRating to the main business location
  if (includeRating) {
    return {
      ...baseSchema,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '20',
      },
    }
  }

  return baseSchema
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
    'Expert en développement web full stack spécialisé en React, Next.js, TypeScript. Services professionnels en France : création de sites web modernes, applications sur mesure, optimisation SEO.',
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
      '@type': 'City',
      name: 'Paris',
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

/**
 * Generate structured data for customer reviews/testimonials
 */
export function generateReviewStructuredData(
  reviews: Array<{
    author: string
    rating: number
    reviewBody: string
    datePublished: string
  }>
) {
  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sidikoff.com#Organization',
    name: 'SIDIKOFF DIGITAL',
    url: 'https://sidikoff.com',
    description: 'Développeur Web Full Stack - Création de sites web professionnels',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  }
}
