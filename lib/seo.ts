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
  defaultDescription:
    'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO. Devis gratuit.',
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
    'développeur paris',
  ],
  baseUrl: 'https://sidikoff.com',
  social: {
    twitter: '@sidikoffdigital',
    linkedin: 'sidikoff-digital',
  },
  business: {
    name: 'SIDIKOFF DIGITAL',
    address: 'Paris, France',
    phone: '+33 6 26 93 27 34',
    email: 'contact@sidikoff.com',
  },
}

export function generateMetadata(seoData: SEOData): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage,
    canonical,
    locale = 'fr-FR',
    alternateLanguages = {},
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
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: defaultSEOConfig.social.twitter,
      images: ogImage ? [ogImage] : undefined,
    },

    // Canonical URL
    alternates: {
      canonical: canonical || defaultSEOConfig.baseUrl,
      languages: alternateLanguages,
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
        'max-snippet': -1,
      },
    },

    // Verification
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
    },
  }

  return metadata
}

// Pages SEO configurations
export const pagesSEO = {  home: {
    fr: {
      title: 'SIDIKOFF DIGITAL - Agence Web à Paris | Création Sites & Applications Web',
      description:
        'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO. Devis gratuit.',
      keywords: [
        'agence web paris',
        'création site internet',
        'développement web',
        'agence digitale',
      ],
      canonical: 'https://sidikoff.com/',
    },
    en: {
      title: 'SIDIKOFF DIGITAL - Web Agency in Paris | Website & Web Application Development',
      description:
        'Web agency specialized in website creation, web applications and digital strategy. Modern development, UX/UI design, SEO optimization. Free quote.',
      keywords: ['web agency paris', 'website creation', 'web development', 'digital agency'],
      canonical: 'https://sidikoff.com/',
    },
    ru: {
      title: 'SIDIKOFF DIGITAL - Веб-агентство | Создание Сайтов и Веб-Приложений',
      description:
        'Веб-агентство, специализирующееся на создании сайтов, веб-приложений и цифровой стратегии. Современная разработка, UX/UI дизайн, SEO оптимизация.',
      keywords: ['веб агентство париж', 'создание сайтов', 'веб разработка', 'цифровое агентство'],
      canonical: 'https://sidikoff.com/',    },
  },
  services: {
    fr: {
      title: 'Services & Tarifs | SIDIKOFF DIGITAL - Agence Web Paris',
      description:
        'Découvrez nos services web : création de sites, applications, e-commerce, référencement SEO. Tarifs transparents et devis gratuit. Agence web à Paris.',
      keywords: [
        'tarifs agence web',
        'services web paris',
        'devis site internet',
        'prix développement web',
      ],
      canonical: 'https://sidikoff.com/services',
    },
    en: {
      title: 'Services & Pricing | SIDIKOFF DIGITAL - Web Agency',
      description:
        'Discover our web services: website creation, applications, e-commerce, SEO optimization. Transparent pricing and free quote. Web agency in France.',
      keywords: ['web agency pricing', 'web services paris', 'website quote', 'development costs'],
      canonical: 'https://sidikoff.com/services',
    },
    ru: {
      title: 'Услуги и Цены | SIDIKOFF DIGITAL - Веб-агентство',
      description:
        'Откройте для себя наши веб-услуги: создание сайтов, приложений, e-commerce, SEO оптимизация. Прозрачные цены и бесплатная смета.',
      keywords: ['цены веб агентство', 'веб услуги париж', 'смета сайта', 'стоимость разработки'],
      canonical: 'https://sidikoff.com/services',
    },
  },
  Projects: {
    fr: {
      title: 'Projects | SIDIKOFF DIGITAL - Nos Réalisations Web',
      description:
        'Découvrez nos projets web : sites vitrine, e-commerce, applications. Projects de SIDIKOFF DIGITAL, agence web à Paris. Exemples et références clients.',
      keywords: [
        'Projects agence web',
        'réalisations web paris',
        'exemples sites internet',
        'références clients',
      ],
      canonical: 'https://sidikoff.com/projects',
    },
    en: {
      title: 'Projects | SIDIKOFF DIGITAL - Our Web Projects',
      description:
        'Discover our web projects: showcase websites, e-commerce, applications. Projects of SIDIKOFF DIGITAL, web agency in Paris. Examples and client references.',
      keywords: [
        'web agency Projects',
        'web projects paris',
        'website examples',
        'client references',
      ],
      canonical: 'https://sidikoff.com/projects',
    },
    ru: {
      title: 'Портфолио | SIDIKOFF DIGITAL - Наши Веб-проекты',
      description:
        'Откройте для себя наши веб-проекты: витринные сайты, электронная коммерция, приложения. Портфолио SIDIKOFF DIGITAL, веб-агентство в Париже.',
      keywords: [
        'портфолио веб агентство',
        'веб проекты париж',
        'примеры сайтов',
        'клиентские референсы',
      ],
      canonical: 'https://sidikoff.com/projects',
    },
  },  legal: {
    fr: {
      title: 'Politique de confidentialité | SIDIKOFF DIGITAL - Agence Web Paris',
      description:
        'Politique de confidentialité de SIDIKOFF DIGITAL, agence web parisienne. Protection des données personnelles, cookies et conditions d\'utilisation.',
      keywords: [
        'politique de confidentialité',
        'protection données personnelles',
        'cookies',
        'conditions utilisation',
      ],
      canonical: 'https://sidikoff.com/mentions-legales',
    },
    en: {
      title: 'Privacy Policy | SIDIKOFF DIGITAL - Web Agency Paris',
      description:
        'Privacy policy of SIDIKOFF DIGITAL, Parisian web agency. Personal data protection, cookies and terms of use.',
      keywords: ['privacy policy', 'data protection', 'cookies', 'terms of use'],
      canonical: 'https://sidikoff.com/mentions-legales',
    },
    ru: {
      title: 'Политика конфиденциальности | SIDIKOFF DIGITAL - Веб-агентство Париж',
      description:
        'Политика конфиденциальности SIDIKOFF DIGITAL, парижского веб-агентства. Защита персональных данных, куки и условия использования.',
      keywords: [
        'политика конфиденциальности',
        'защита данных',
        'куки',
        'условия использования',
      ],
      canonical: 'https://sidikoff.com/mentions-legales',
    },
  },
}

// Structured Data for Local Business (Paris)
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sidikoff.com/#business',
    name: defaultSEOConfig.business.name,
    alternateName: 'SIDIKOFF DIGITAL',
    description:
      'Agence web parisienne spécialisée en création de sites internet et applications web modernes',
    url: defaultSEOConfig.baseUrl,
    telephone: defaultSEOConfig.business.phone,
    email: defaultSEOConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
      postalCode: '75000',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Paris',
      },
      {
        '@type': 'Country',
        name: 'France',
      },
    ],
    serviceType: [
      'Création de sites web',
      "Développement d'applications web",
      'Design UX/UI',
      'Référencement SEO',
      'E-commerce',
      'Maintenance web',
    ],
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      `https://linkedin.com/company/${defaultSEOConfig.social.linkedin}`,
      `https://twitter.com/${defaultSEOConfig.social.twitter.replace('@', '')}`,
    ],
  }
}

// Website Schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sidikoff.com/#website',
    url: defaultSEOConfig.baseUrl,
    name: defaultSEOConfig.siteName,
    description: defaultSEOConfig.defaultDescription,
    publisher: {
      '@id': 'https://sidikoff.com/#business',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sidikoff.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['fr-FR', 'en-US', 'ru-RU'],
  }
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sidikoff.com/#organization',
    name: defaultSEOConfig.business.name,
    url: defaultSEOConfig.baseUrl,
    logo: 'https://sidikoff.com/logo.png',
    description:
      'Agence web parisienne spécialisée en développement de sites internet et applications web modernes',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: defaultSEOConfig.business.phone,
      contactType: 'Customer Service',
      availableLanguage: ['French', 'English', 'Russian'],
    },
    foundingLocation: {
      '@type': 'Place',
      name: 'Paris, France',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
  }
}

export { defaultSEOConfig }

// FAQ Schema generator for services page
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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
        addressCountry: 'FR',
      },
    },
    areaServed: service.areaServed || 'Paris, France',
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'EUR',
      },
    }),
  }
}

// Projects/Work Schema
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
      name: 'SIDIKOFF DIGITAL',
    },
    ...(work.url && { url: work.url }),
    ...(work.image && { image: work.image }),
    ...(work.dateCreated && { dateCreated: work.dateCreated }),
  }
}
