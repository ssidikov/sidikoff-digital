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
  hasMap?: string
}

// Helper function to get locale-specific OG image
export function getLocalizedOgImage(locale: Locale, customImage?: string): string {
  return customImage ?? '/images/opengraph-fr.png'
}

// Default SEO configuration
export const DEFAULT_SEO = {
  siteName: 'SIDIKOFF DIGITAL',
  siteUrl: 'https://www.sidikoff.com',
  defaultImage: '/images/opengraph-fr.png',
  twitterHandle: '@sidikoffdigital',
  locale: 'fr' as Locale,
  keywords: [
    // High-conversion primary keywords - "agence web paris" as #1
    'agence web Villeurbanne',
    'agence web Next.js',
    'agence web React',
    'expert développement web',
    'expert React',
    'expert Next.js',
    'agence web Lyon',
    'agence web Paris',
    'création site web professionnel Lyon',
    'développeur web Lyon',
    'agence digitale Lyon',
    'création site internet Lyon',
    'développement web Lyon',
    'agence création site web',
    'développeur react Lyon',
    'expert nextjs',
    'typescript développeur',
    'freelance développeur web',
    'site web professionnel',
    'création site e-commerce',
    'refonte site web',
    'optimisation seo Lyon',
    'développement frontend',
    'développement backend',
    'full stack developer',
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

  const locales: Locale[] = ['fr']

  locales.forEach((locale) => {
    alternates[locale] = createCanonicalUrl(path, locale)
  })

  return alternates
}

// Business locations - Main business addresses for structured data
export const businessLocations: LocalBusiness[] = [
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Villeurbanne',
    url: 'https://www.sidikoff.com',
    address: {
      streetAddress: '73 Rue Racine',
      addressLocality: 'Villeurbanne',
      postalCode: '69100',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '45.7719019',
      longitude: '4.8508612',
    },
    areaServed: [
      'Villeurbanne',
      'Lyon',
      'Lyon métropole',
      'Rhône',
      'Paris',
      'Toulouse',
      'Strasbourg',
      'Lille',
      'Nantes',
      'Grenoble',
      'Montpellier',
      'Bordeaux',
      'Marseille',
      'Nice',
      'Clermont-Ferrand',
      'Mulhouse',
      'Geneva',
      'Lugano',
      'Haute-Garonne',
      'Occitanie',
      'Auvergne-Rhône-Alpes',
      'Grand Est',
      'Savie',
      'Hautes-Alpes',
      'Haute-Savoie',
      'Normandie',
      'Lisieux',
      'France',
    ],
  },
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Toulouse',
    url: 'https://www.sidikoff.com',
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
  },
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Lyon',
    url: 'https://www.sidikoff.com',
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
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web Freelance à Villeurbanne',
    url: 'https://www.sidikoff.com',
    address: {
      streetAddress: '73 Rue Racine',
      addressLocality: 'Villeurbanne',
      postalCode: '69100',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '45.7667',
      longitude: '4.8799',
    },
    areaServed: ['Villeurbanne', 'Lyon', 'Lyon métropole', 'Rhône'],
  },
  {
    name: 'SIDIKOFF DIGITAL - Développeur Web Freelance à Caluire-et-Cuire',
    url: 'https://www.sidikoff.com',
    address: {
      streetAddress: 'Service à domicile',
      addressLocality: 'Caluire-et-Cuire',
      postalCode: '69300',
      addressCountry: 'FR',
    },
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    geo: {
      latitude: '45.7867',
      longitude: '4.8599',
    },
    areaServed: ['Caluire-et-Cuire', 'Lyon', 'Lyon métropole', 'Rhône'],
  },
  {
    name: 'SIDIKOFF DIGITAL - Agence Web | Développeur Web à Strasbourg',
    url: 'https://www.sidikoff.com',
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
    ogImage, // Can be custom or undefined
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noIndex = false,
    publishedTime,
    modifiedTime,
    authors,
    tags,
  } = config

  // Get locale-specific OG image (will use custom if provided, otherwise locale-specific default)
  const localizedOgImage = getLocalizedOgImage(locale, ogImage)

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
          url: localizedOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: ogType,
      publishedTime,
      modifiedTime,
      tags,
    },

    twitter: {
      card: twitterCard,
      title,
      description,
      images: [localizedOgImage],
      creator: DEFAULT_SEO.twitterHandle,
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...alternateLanguages,
        'x-default': `${DEFAULT_SEO.siteUrl}/`, // Default to French version
      },
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
      ? 'Agence Web | Création de Sites Internet'
      : 'SIDIKOFF DIGITAL - Agence Web Expert | Développement React',
  }

  const descriptions = {
    fr: 'Agence web spécialisée en création de sites internet modernes et performants. Développement sur mesure, design professionnel, SEO optimisé. Votre projet digital commence ici.',
  }

  const seoData = {
    title: titles[locale as keyof typeof titles] || titles.fr,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.fr,
    keywords: [...DEFAULT_SEO.keywords],
    canonicalUrl: createCanonicalUrl('', locale),
    locale: locale as Locale,
    alternateLanguages: generateAlternateUrls(''),
    // ogImage will be automatically set to locale-specific image by getLocalizedOgImage()
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const,
  }

  return generateSEOMetadata(seoData)
}

// Generate language alternates
export function generateLanguageAlternates(
  path: string,
  locales: Locale[] = ['fr'],
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

  // French is the only locale, no prefix needed
  return `${DEFAULT_SEO.siteUrl}${cleanPath ? '/' + cleanPath : '/'}`
}

// Generate local business schema
export function generateLocalBusinessSchema(
  business: LocalBusiness,
  includeRating: boolean = true,
) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${business.url}/#lb-${business.address.addressLocality
      .toLowerCase()
      .replace(/\s+/g, '-')}`,
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
        '@id': `${business.url}/#lb-${business.address.addressLocality
          .toLowerCase()
          .replace(/\s+/g, '-')}`,
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
  '@id': 'https://www.sidikoff.com/#organization',
  name: 'SIDIKOFF DIGITAL',
  legalName: 'SIDIKOFF DIGITAL - Création de Sites Web | Agence Web',
  url: 'https://www.sidikoff.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.sidikoff.com/images/logo-sidikoff.svg',
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
    url: 'https://www.sidikoff.com/',
    sameAs: ['https://github.com/ssidikov', 'https://linkedin.com/in/sardorbeksidikov'],
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33626932734',
      email: 's.sidikoff@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '73 Rue Racine',
    postalCode: '69100',
    addressLocality: 'Villeurbanne',
    addressRegion: 'Auvergne-Rhône-Alpes',
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
      name: 'Villeurbanne',
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
  breadcrumbs: Array<{ name: string; url: string }>,
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
  }>,
) {
  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.sidikoff.com/#organization',
    name: 'SIDIKOFF DIGITAL',
    url: 'https://www.sidikoff.com',
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

/**
 * Generate complete metadata with alternates for a page
 * @param config - Basic SEO configuration
 * @param path - Page path without locale (e.g., '/contact', '/services')
 * @param locale - Current locale
 */
export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  locale: Locale,
  additionalConfig?: Partial<SEOConfig>,
): Metadata {
  const canonicalUrl = createCanonicalUrl(path, locale)
  const alternateUrls = generateAlternateUrls(path)

  return generateSEOMetadata({
    title,
    description,
    canonicalUrl,
    locale,
    alternateLanguages: alternateUrls,
    ...additionalConfig,
  })
}

/**
 * Generate Article Schema for blog posts
 */
export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  imageUrl: string
  publishedAt: string
  modifiedAt?: string
  authorName: string
  authorUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: {
      '@type': 'ImageObject',
      url: article.imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.authorName,
      url: article.authorUrl || 'https://www.sidikoff.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      url: 'https://www.sidikoff.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sidikoff.com/logo-sidikoff.webp',
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

/**
 * Generate Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
