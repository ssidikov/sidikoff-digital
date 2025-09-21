import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Locale } from '@/lib/i18n'

interface CanonicalMetaProps {
  pathname: string
  locale: Locale
  title: string
  description: string
  ogImage?: string
  noIndex?: boolean
}

/**
 * Generates complete canonical metadata for any page
 * Ensures consistent canonical URLs and hreflang tags across the site
 */
export function generateCanonicalMetadata({
  pathname,
  locale,
  title,
  description,
  ogImage = '/images/og-default.jpg',
  noIndex = false,
}: CanonicalMetaProps): Metadata {
  // Clean the pathname (remove leading slash if present)
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname

  // Generate canonical URL for this page
  const canonicalUrl = createCanonicalUrl(cleanPath, locale)

  // Generate alternate language URLs
  const alternateUrls = generateAlternateUrls(cleanPath)

  return {
    title,
    description,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls,
    },

    // Open Graph
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'SIDIKOFF DIGITAL - Développeur Web Full Stack',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: 'website',
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@sidikoffdigital',
    },

    // Additional meta tags for better SEO
    other: {
      'og:site_name': 'SIDIKOFF DIGITAL',
      'article:author': 'Sardorbek SIDIKOV',
    },
  }
}

/**
 * Hook to generate canonical metadata for service pages
 */
export function generateServicePageMetadata(service: string, locale: Locale): Metadata {
  const serviceTitles = {
    fr: {
      'creation-sites-web': 'Création de Sites Web Professionnels',
      'creation-site-internet-paris': 'Création Site Internet Paris - Agence Web Expert',
      'creation-site-internet-toulouse': 'Création Site Internet Toulouse - Développeur Web',
      'creation-site-internet-lyon': 'Création Site Internet Lyon - Expert React Next.js',
    },
    en: {
      'creation-sites-web': 'Professional Website Creation Services',
      'creation-site-internet-paris': 'Website Creation Paris - Expert Web Agency',
      'creation-site-internet-toulouse': 'Website Creation Toulouse - Web Developer',
      'creation-site-internet-lyon': 'Website Creation Lyon - React Next.js Expert',
    },
    ru: {
      'creation-sites-web': 'Профессиональное создание веб-сайтов',
      'creation-site-internet-paris': 'Создание сайтов Париж - Экспертное веб-агентство',
      'creation-site-internet-toulouse': 'Создание сайтов Тулуза - Веб-разработчик',
      'creation-site-internet-lyon': 'Создание сайтов Лион - Эксперт React Next.js',
    },
  }

  const serviceDescriptions = {
    fr: {
      'creation-sites-web':
        'Services professionnels de création de sites web modernes, responsive et optimisés SEO. Expert React, Next.js, TypeScript.',
      'creation-site-internet-paris':
        'Agence web Paris spécialisée en création de sites internet professionnels. Sites modernes, SEO optimisés, React Next.js.',
      'creation-site-internet-toulouse':
        'Création de sites internet à Toulouse. Développeur web expert en React, Next.js. Devis gratuit.',
      'creation-site-internet-lyon':
        'Expert création de sites web à Lyon. Solutions modernes React Next.js TypeScript. Devis gratuit 24h.',
    },
    en: {
      'creation-sites-web':
        'Professional modern website creation services, responsive and SEO optimized. React, Next.js, TypeScript expert.',
      'creation-site-internet-paris':
        'Paris web agency specialized in professional website creation. Modern, SEO optimized sites, React Next.js.',
      'creation-site-internet-toulouse':
        'Website creation in Toulouse. Web developer expert in React, Next.js. Free quote.',
      'creation-site-internet-lyon':
        'Website creation expert in Lyon. Modern React Next.js TypeScript solutions. Free quote 24h.',
    },
    ru: {
      'creation-sites-web':
        'Профессиональные услуги по созданию современных веб-сайтов, адаптивных и SEO-оптимизированных. Эксперт React, Next.js, TypeScript.',
      'creation-site-internet-paris':
        'Веб-агентство в Париже, специализирующееся на создании профессиональных сайтов. Современные, SEO-оптимизированные сайты, React Next.js.',
      'creation-site-internet-toulouse':
        'Создание веб-сайтов в Тулузе. Веб-разработчик, эксперт по React, Next.js. Бесплатная первая консультация.',
      'creation-site-internet-lyon':
        'Эксперт по созданию веб-сайтов в Лионе. Современные решения React Next.js TypeScript. Бесплатная первая консультация',
    },
  }

  const title =
    serviceTitles[locale][service as keyof (typeof serviceTitles)[typeof locale]] || service
  const description =
    serviceDescriptions[locale][service as keyof (typeof serviceDescriptions)[typeof locale]] || ''

  const pathname = `services/${service}`

  return generateCanonicalMetadata({
    pathname,
    locale,
    title,
    description,
    ogImage: '/images/og-creation-sites-web.jpg',
  })
}
