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
  siteName: 'SIDIKOFF DIGITAL - Agence Web | Développement Site Web',
  siteUrl: 'https://sidikoff.com',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@sidikoffdigital',
  locale: 'fr' as Locale,
  keywords: [
    'développeur web',
    'full stack',
    'React',
    'Next.js',
    'TypeScript',
    'développement frontend',
    'développement backend',
    'freelance',
    'consultant',
  ],
}

// Business locations
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
    geo: {
      latitude: '48.8566',
      longitude: '2.3522',
    },
    areaServed: ['Paris', 'Île-de-France', 'France'],
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
    geo: {
      latitude: '43.6047',
      longitude: '1.4442',
    },
    areaServed: ['Toulouse', 'Occitanie', 'France'],
    hasMap: 'https://maps.google.com/?q=Toulouse+France',
  },
]

// Main services
export const mainServices = [
  {
    name: 'Développement Web Frontend',
    description: 'Applications React, Next.js, Angular avec une expertise en performances et UX',
    url: '/services/frontend',
    slug: 'frontend',
  },
  {
    name: 'Développement Web Backend',
    description: 'APIs REST, GraphQL, bases de données et architecture serveur robuste',
    url: '/services/backend',
    slug: 'backend',
  },
  {
    name: 'Développement Full Stack',
    description: 'Solutions complètes Next.js, MERN stack et applications web modernes',
    url: '/services/fullstack',
    slug: 'fullstack',
  },
  {
    name: 'Optimisation SEO',
    description: 'Amélioration du référencement naturel et performances web',
    url: '/services/seo',
    slug: 'seo',
  },
  {
    name: 'Consultation Technique',
    description: 'Audit de code, architecture et conseils en développement web',
    url: '/services/consultation',
    slug: 'consultation',
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
      ? 'SIDIKOFF DIGITAL - Développeur Web Full Stack à Paris et Toulouse | Expert React Next.js'
      : `SIDIKOFF DIGITAL - Développeur Web Full Stack`,
    description:
      'Développeur Web Full Stack expert en React, Next.js, TypeScript. Services de développement web professionnel à Paris et Toulouse. Portfolio, consultation technique et solutions sur mesure.',
    keywords: [
      'développeur web paris',
      'développeur web toulouse',
      'développeur full stack',
      'expert react',
      'next.js developer',
      'typescript expert',
      'freelance développeur',
      'consultant web',
      'développement frontend',
      'développement backend',
      'optimisation seo',
      'applications web',
      'sites web professionnels',
    ],
    canonicalUrl: 'https://sidikoff.com/',
    locale: locale as Locale,
    alternateLanguages: {
      fr: 'https://sidikoff.com/fr',
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
  return `${DEFAULT_SEO.siteUrl}/${locale}${cleanPath ? '/' + cleanPath : ''}`
}

// Generate local business schema
export function generateLocalBusinessSchema(location: LocalBusiness) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${location.url}#LocalBusiness-${location.address.addressLocality}`,
    name: location.name,
    description: `Services de développement web professionnel à ${location.address.addressLocality}. Expert en React, Next.js, TypeScript pour des solutions web modernes et performantes.`,
    url: location.url,
    telephone: location.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.streetAddress,
      addressLocality: location.address.addressLocality,
      postalCode: location.address.postalCode,
      addressCountry: location.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    areaServed: location.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasMap: location.hasMap,
    sameAs: ['https://github.com/sidikoff', 'https://linkedin.com/in/sidikoff'],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: location.geo.latitude,
        longitude: location.geo.longitude,
      },
      geoRadius: '50',
    },
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
    },
    serviceType: mainServices.map((service) => service.name),
    knowsAbout: [
      'React Development',
      'Next.js Development',
      'TypeScript Programming',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
      'SEO Optimization',
      'Web Performance',
    ],
    slogan: 'Développement web moderne et performant',
    foundingDate: '2020',
    employee: {
      '@type': 'Person',
      name: 'SIDIKOFF DIGITAL',
      jobTitle: 'Développeur Web Full Stack',
      worksFor: location.name,
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        serviceType: 'Développement Web',
        provider: location.name,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Développement Web',
      itemListElement: mainServices.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          provider: {
            '@type': 'LocalBusiness',
            name: location.name,
          },
        },
      })),
    },
  }
}

// Organization schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sidikoff.com#Organization',
  name: 'SIDIKOFF DIGITAL',
  legalName: 'SIDIKOFF DIGITAL - Développeur Web Full Stack',
  url: 'https://sidikoff.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sidikoff.com/images/logo-sidikoff.svg',
    width: 300,
    height: 100,
  },
  description:
    'Expert en développement web full stack spécialisé en React, Next.js, TypeScript. Services professionnels à Paris et Toulouse.',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'SIDIKOFF DIGITAL',
    jobTitle: 'Développeur Web Full Stack',
    url: 'https://sidikoff.com/about',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33123456789',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: ['French', 'English', 'Russian'],
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '15 Rue de la République',
      addressLocality: 'Paris',
      postalCode: '75011',
      addressCountry: 'FR',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '25 Rue du Taur',
      addressLocality: 'Toulouse',
      postalCode: '31000',
      addressCountry: 'FR',
    },
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'France',
    },
    {
      '@type': 'City',
      name: 'Paris',
    },
    {
      '@type': 'City',
      name: 'Toulouse',
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
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'France',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de Développement Web',
    itemListElement: mainServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'SIDIKOFF DIGITAL',
        },
      },
    })),
  },
  sameAs: ['https://github.com/sidikoff', 'https://linkedin.com/in/sidikoff'],
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
