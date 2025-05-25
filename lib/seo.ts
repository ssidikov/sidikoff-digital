import { Metadata } from 'next'

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  locale?: string
  alternateLanguages?: { [key: string]: string }
}

// Configuration SEO pour l'agence parisienne
const defaultSEOConfig = {
  siteName: 'SIDIKOFF DIGITAL',
  defaultTitle: 'SIDIKOFF DIGITAL - Agence Web à Paris | Création Sites & Apps',
  defaultDescription: 'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO. Devis gratuit.',
  defaultKeywords: [
    'agence web paris',
    'création site internet',
    'développement web',
    'agence digitale',
    'site web responsive',
    'UX UI design',
    'référencement SEO',
    'application web',
    'e-commerce',
    'développeur paris'
  ],
  baseUrl: 'https://sidikoff-digital.fr',
  social: {
    twitter: '@sidikoffdigital',
    linkedin: 'sidikoff-digital'
  },
  business: {
    name: 'SIDIKOFF DIGITAL',
    address: 'Paris, France',
    phone: '+33 1 XX XX XX XX',
    email: 'contact@sidikoff-digital.fr'
  }
}

export function generateMetadata(seoData: SEOData): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage,
    canonical,
    locale = 'fr-FR',
    alternateLanguages = {}
  } = seoData

  const fullTitle = title.includes(defaultSEOConfig.siteName) 
    ? title 
    : `${title} | ${defaultSEOConfig.siteName}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [...defaultSEOConfig.defaultKeywords, ...keywords],
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || defaultSEOConfig.baseUrl,
      siteName: defaultSEOConfig.siteName,
      locale,
      type: 'website',
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ] : undefined
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: defaultSEOConfig.social.twitter,
      images: ogImage ? [ogImage] : undefined
    },

    // Canonical URL
    alternates: {
      canonical: canonical || defaultSEOConfig.baseUrl,
      languages: alternateLanguages
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },

    // Verification
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code'
    }
  }

  return metadata
}

// Pages SEO configurations
export const pagesSEO = {
  home: {
    fr: {
      title: 'SIDIKOFF DIGITAL - Agence Web à Paris | Création Sites & Apps',
      description: 'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO. Devis gratuit.',
      keywords: ['agence web paris', 'création site internet', 'développement web', 'agence digitale'],
      canonical: 'https://sidikoff-digital.fr/'
    },
    en: {
      title: 'SIDIKOFF DIGITAL - Web Agency in Paris | Website & App Development',
      description: 'Parisian web agency specialized in website creation, web applications and digital strategy. Modern development, UX/UI design, SEO optimization. Free quote.',
      keywords: ['web agency paris', 'website creation', 'web development', 'digital agency'],
      canonical: 'https://sidikoff-digital.fr/en'
    },
    ru: {
      title: 'SIDIKOFF DIGITAL - Веб-агентство в Париже | Создание Сайтов и Приложений',
      description: 'Парижское веб-агентство, специализирующееся на создании сайтов, веб-приложений и цифровой стратегии. Современная разработка, UX/UI дизайн, SEO оптимизация.',
      keywords: ['веб агентство париж', 'создание сайтов', 'веб разработка', 'цифровое агентство'],
      canonical: 'https://sidikoff-digital.fr/ru'
    }
  },
  
  about: {
    fr: {
      title: 'À Propos | SIDIKOFF DIGITAL - Agence Web Paris',
      description: 'Découvrez SIDIKOFF DIGITAL, votre agence web parisienne. Notre équipe experte vous accompagne dans vos projets de développement web et transformation digitale.',
      keywords: ['agence web paris', 'équipe développement', 'expertise web'],
      canonical: 'https://sidikoff-digital.fr/about'
    },
    en: {
      title: 'About Us | SIDIKOFF DIGITAL - Web Agency Paris',
      description: 'Discover SIDIKOFF DIGITAL, your Parisian web agency. Our expert team supports you in your web development and digital transformation projects.',
      keywords: ['web agency paris', 'development team', 'web expertise'],
      canonical: 'https://sidikoff-digital.fr/en/about'
    },
    ru: {
      title: 'О Нас | SIDIKOFF DIGITAL - Веб-агентство Париж',
      description: 'Познакомьтесь с SIDIKOFF DIGITAL, вашим парижским веб-агентством. Наша команда экспертов поддержит вас в проектах веб-разработки и цифровой трансформации.',
      keywords: ['веб агентство париж', 'команда разработки', 'веб экспертиза'],
      canonical: 'https://sidikoff-digital.fr/ru/about'
    }
  },

  services: {
    fr: {
      title: 'Services & Tarifs | SIDIKOFF DIGITAL - Agence Web Paris',
      description: 'Découvrez nos services web : création de sites, applications, e-commerce, référencement SEO. Tarifs transparents et devis gratuit. Agence web à Paris.',
      keywords: ['tarifs agence web', 'services web paris', 'devis site internet', 'prix développement web'],
      canonical: 'https://sidikoff-digital.fr/services'
    },
    en: {
      title: 'Services & Pricing | SIDIKOFF DIGITAL - Web Agency Paris',
      description: 'Discover our web services: website creation, applications, e-commerce, SEO optimization. Transparent pricing and free quote. Web agency in Paris.',
      keywords: ['web agency pricing', 'web services paris', 'website quote', 'development costs'],
      canonical: 'https://sidikoff-digital.fr/en/services'
    },
    ru: {
      title: 'Услуги и Цены | SIDIKOFF DIGITAL - Веб-агентство Париж',
      description: 'Откройте для себя наши веб-услуги: создание сайтов, приложений, e-commerce, SEO оптимизация. Прозрачные цены и бесплатная смета.',
      keywords: ['цены веб агентство', 'веб услуги париж', 'смета сайта', 'стоимость разработки'],
      canonical: 'https://sidikoff-digital.fr/ru/services'
    }
  },

  portfolio: {
    fr: {
      title: 'Portfolio | SIDIKOFF DIGITAL - Nos Réalisations Web',
      description: 'Découvrez nos projets web : sites vitrine, e-commerce, applications. Portfolio de SIDIKOFF DIGITAL, agence web à Paris. Exemples et références clients.',
      keywords: ['portfolio agence web', 'réalisations web paris', 'exemples sites internet', 'références clients'],
      canonical: 'https://sidikoff-digital.fr/portfolio'
    },
    en: {
      title: 'Portfolio | SIDIKOFF DIGITAL - Our Web Projects',
      description: 'Discover our web projects: showcase websites, e-commerce, applications. Portfolio of SIDIKOFF DIGITAL, web agency in Paris. Examples and client references.',
      keywords: ['web agency portfolio', 'web projects paris', 'website examples', 'client references'],
      canonical: 'https://sidikoff-digital.fr/en/portfolio'
    },
    ru: {
      title: 'Портфолио | SIDIKOFF DIGITAL - Наши Веб-проекты',
      description: 'Откройте для себя наши веб-проекты: витринные сайты, электронная коммерция, приложения. Портфолио SIDIKOFF DIGITAL, веб-агентство в Париже.',
      keywords: ['портфолио веб агентство', 'веб проекты париж', 'примеры сайтов', 'клиентские референсы'],
      canonical: 'https://sidikoff-digital.fr/ru/portfolio'
    }
  }
}

// Structured Data for Local Business (Paris)
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sidikoff-digital.fr/#business',
    name: defaultSEOConfig.business.name,
    alternateName: 'SIDIKOFF DIGITAL',
    description: 'Agence web parisienne spécialisée en création de sites internet et applications web modernes',
    url: defaultSEOConfig.baseUrl,
    telephone: defaultSEOConfig.business.phone,
    email: defaultSEOConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
      postalCode: '75000'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris'
      },
      {
        '@type': 'Country',
        name: 'France'
      }
    ],
    serviceType: [
      'Création de sites web',
      'Développement d\'applications web',
      'Design UX/UI',
      'Référencement SEO',
      'E-commerce',
      'Maintenance web'
    ],
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      `https://linkedin.com/company/${defaultSEOConfig.social.linkedin}`,
      `https://twitter.com/${defaultSEOConfig.social.twitter.replace('@', '')}`
    ]
  }
}

// Website Schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sidikoff-digital.fr/#website',
    url: defaultSEOConfig.baseUrl,
    name: defaultSEOConfig.siteName,
    description: defaultSEOConfig.defaultDescription,
    publisher: {
      '@id': 'https://sidikoff-digital.fr/#business'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sidikoff-digital.fr/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['fr-FR', 'en-US', 'ru-RU']
  }
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sidikoff-digital.fr/#organization',
    name: defaultSEOConfig.business.name,
    url: defaultSEOConfig.baseUrl,
    logo: 'https://sidikoff-digital.fr/logo.png',
    description: 'Agence web parisienne spécialisée en développement de sites internet et applications web modernes',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: defaultSEOConfig.business.phone,
      contactType: 'Customer Service',
      availableLanguage: ['French', 'English', 'Russian']
    },
    foundingLocation: {
      '@type': 'Place',
      name: 'Paris, France'
    },
    areaServed: {
      '@type': 'Country',
      name: 'France'
    }
  }
}

export { defaultSEOConfig }

// FAQ Schema generator for services page
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Service Schema for specific services
export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'SIDIKOFF DIGITAL',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'FR'
      }
    },
    areaServed: service.areaServed || 'Paris, France',
    ...(service.price && { 
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'EUR'
      }
    })
  }
}

// Portfolio/Work Schema
export function generateCreativeWorkSchema(work: {
  name: string
  description: string
  url?: string
  image?: string
  dateCreated?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.name,
    description: work.description,
    creator: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL'
    },
    ...(work.url && { url: work.url }),
    ...(work.image && { image: work.image }),
    ...(work.dateCreated && { dateCreated: work.dateCreated })
  }
}
