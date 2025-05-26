import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateSEO({
  title = 'SIDIKOFF Digital - Modern Web Solutions & Development Agency',
  description = 'Professional web development agency specializing in modern websites and applications. Expert Next.js, React, TypeScript development with beautiful responsive design.',
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const baseUrl = 'https://sidikoff.digital'
  const fullTitle = title.includes('SIDIKOFF') ? title : `${title} | SIDIKOFF Digital`

  const defaultKeywords = [
    'web development',
    'web design',
    'Next.js development',
    'React development',
    'TypeScript',
    'responsive design',
    'modern websites',
    'web applications',
    'SIDIKOFF Digital',
  ]

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    canonical: canonical ? `${baseUrl}${canonical}` : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'SIDIKOFF Digital',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@sidikoff_digital',
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: true,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
  }
}

// Generate structured data for a local business
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SIDIKOFF Digital',
    description:
      'Professional web development agency specializing in modern websites and applications',
    url: 'https://sidikoff.digital',
    telephone: '+7-XXX-XXX-XXXX',
    email: 'contact@sidikoff.digital',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
      addressLocality: 'Moscow',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    sameAs: ['https://github.com/sidikoff', 'https://linkedin.com/company/sidikoff-digital'],
  }
}

// Generate structured data for a service
export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: 'SIDIKOFF Digital',
      url: 'https://sidikoff.digital',
    },
    areaServed: 'Worldwide',
    serviceType: 'Web Development',
  }
}

// Generate structured data for a webpage
export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `https://sidikoff.digital${url}`,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'SIDIKOFF Digital',
      url: 'https://sidikoff.digital',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SIDIKOFF Digital',
      url: 'https://sidikoff.digital',
    },
  }
}
