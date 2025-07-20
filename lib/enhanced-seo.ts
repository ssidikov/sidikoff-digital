import { Metadata } from 'next'
import { Organization, LocalBusiness, WebSite, Service, BreadcrumbList, Thing } from 'schema-dts'

// Supported locales
export const supportedLocales = ['fr', 'en', 'ru'] as const
export type SupportedLocale = (typeof supportedLocales)[number]

// Locale to hreflang mapping
export const localeToHreflang: Record<SupportedLocale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  ru: 'ru-RU',
}

// Base SEO configuration
const baseSEOConfig = {
  siteName: 'SIDIKOFF DIGITAL',
  baseUrl: 'https://sidikoff.com',
  defaultTitle: 'Agence Web Paris - SIDIKOFF DIGITAL',
  defaultDescription: 'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO.',
  defaultImage: '/opengraph-image.jpg',
  twitterHandle: '@sidikoffdigital',
  business: {
    name: 'SIDIKOFF DIGITAL',
    legalName: 'SIDIKOFF DIGITAL',
    address: {
      streetAddress: '',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '',
      addressCountry: 'FR'
    },
    phone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    vatNumber: 'FR943266213',
    sirenNumber: '943266213',
    foundingDate: '2025-01-01',
    founder: 'Sardorbek SIDIKOV',
    employees: 5
  }
}

// Page-specific SEO data
export interface PageSEOData {
  title: string
  description: string
  keywords: string[]
  canonical: string
  alternateLanguages: Record<string, string>
  structuredData?: Thing[]
}

// Comprehensive SEO data for all pages and locales
export const pagesSEOData: Record<string, Record<SupportedLocale, PageSEOData>> = {
  home: {
    fr: {
      title: 'Création de sites internet à Paris - Agence Web | SIDIKOFF DIGITAL',
      description: 'Agence web parisienne experte en création de sites internet, e-commerce et applications web. Développement Next.js, React, SEO, UX/UI design. Devis gratuit.',
      keywords: [
        'agence web paris',
        'création site internet',
        'développement web',
        'site vitrine',
        'e-commerce',
        'next.js',
        'react',
        'seo paris',
        'ux ui design',
        'application web'
      ],
      canonical: `${baseSEOConfig.baseUrl}/`,
      alternateLanguages: {
        'en-US': `${baseSEOConfig.baseUrl}/en`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru`,
        'x-default': `${baseSEOConfig.baseUrl}/`
      }
    },
    en: {
      title: 'Web Design Agency Paris - Custom Websites | SIDIKOFF DIGITAL',
      description: 'Expert web design agency in Paris. We create custom websites, e-commerce platforms, and web applications using Next.js, React, and modern technologies.',
      keywords: [
        'web design agency paris',
        'custom website development',
        'react developer paris',
        'next.js agency',
        'e-commerce development',
        'web application',
        'seo services paris',
        'ux ui design'
      ],
      canonical: `${baseSEOConfig.baseUrl}/en`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru`,
        'x-default': `${baseSEOConfig.baseUrl}/`
      }
    },
    ru: {
      title: 'Веб-агентство в Париже - Создание сайтов | SIDIKOFF DIGITAL',
      description: 'Профессиональное веб-агентство в Париже. Создаем сайты, интернет-магазины и веб-приложения на Next.js, React. SEO, UX/UI дизайн.',
      keywords: [
        'веб-агентство париж',
        'создание сайтов',
        'разработка веб-приложений',
        'интернет-магазин',
        'next.js разработка',
        'react разработчик',
        'seo продвижение',
        'ux ui дизайн'
      ],
      canonical: `${baseSEOConfig.baseUrl}/ru`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/`,
        'en-US': `${baseSEOConfig.baseUrl}/en`,
        'x-default': `${baseSEOConfig.baseUrl}/`
      }
    }
  },
  services: {
    fr: {
      title: 'Services Web & Tarifs - Création Sites Internet | SIDIKOFF DIGITAL',
      description: 'Découvrez nos services web : création de sites vitrine, e-commerce, applications web, SEO. Tarifs transparents, devis gratuit. Agence web Paris.',
      keywords: [
        'services web paris',
        'tarifs site internet',
        'devis création site',
        'prix développement web',
        'services seo',
        'maintenance site web'
      ],
      canonical: `${baseSEOConfig.baseUrl}/services`,
      alternateLanguages: {
        'en-US': `${baseSEOConfig.baseUrl}/en/services`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru/services`,
        'x-default': `${baseSEOConfig.baseUrl}/services`
      }
    },
    en: {
      title: 'Web Services & Pricing - Website Development | SIDIKOFF DIGITAL',
      description: 'Our web services: custom websites, e-commerce, web apps, SEO optimization. Transparent pricing, free quotes. Paris web agency.',
      keywords: [
        'web services paris',
        'website development pricing',
        'web design cost',
        'seo services',
        'web maintenance'
      ],
      canonical: `${baseSEOConfig.baseUrl}/en/services`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/services`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru/services`,
        'x-default': `${baseSEOConfig.baseUrl}/services`
      }
    },
    ru: {
      title: 'Веб-услуги и Цены - Создание Сайтов | SIDIKOFF DIGITAL',
      description: 'Наши веб-услуги: создание сайтов, интернет-магазины, веб-приложения, SEO. Прозрачные цены, бесплатный расчет стоимости.',
      keywords: [
        'веб-услуги париж',
        'стоимость создания сайта',
        'цены на разработку',
        'seo услуги',
        'поддержка сайта'
      ],
      canonical: `${baseSEOConfig.baseUrl}/ru/services`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/services`,
        'en-US': `${baseSEOConfig.baseUrl}/en/services`,
        'x-default': `${baseSEOConfig.baseUrl}/services`
      }
    }
  },
  portfolio: {
    fr: {
      title: 'Portfolio - Réalisations Web & Projets | SIDIKOFF DIGITAL',
      description: 'Découvrez notre portfolio : sites vitrine, e-commerce, applications web. Projets réalisés par notre agence web parisienne. Exemples et références.',
      keywords: [
        'portfolio agence web',
        'réalisations web paris',
        'exemples sites internet',
        'références clients',
        'projets web'
      ],
      canonical: `${baseSEOConfig.baseUrl}/portfolio`,
      alternateLanguages: {
        'en-US': `${baseSEOConfig.baseUrl}/en/portfolio`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru/portfolio`,
        'x-default': `${baseSEOConfig.baseUrl}/portfolio`
      }
    },
    en: {
      title: 'Portfolio - Web Projects & Case Studies | SIDIKOFF DIGITAL',
      description: 'Explore our portfolio: custom websites, e-commerce platforms, web applications. Projects by our Paris web agency. Examples and client references.',
      keywords: [
        'web design portfolio',
        'paris web projects',
        'website examples',
        'client case studies',
        'web development work'
      ],
      canonical: `${baseSEOConfig.baseUrl}/en/portfolio`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/portfolio`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru/portfolio`,
        'x-default': `${baseSEOConfig.baseUrl}/portfolio`
      }
    },
    ru: {
      title: 'Портфолио - Веб-проекты и Кейсы | SIDIKOFF DIGITAL',
      description: 'Изучите наше портфолио: сайты, интернет-магазины, веб-приложения. Проекты парижского веб-агентства. Примеры работ и отзывы.',
      keywords: [
        'портфолио веб-агентства',
        'веб-проекты париж',
        'примеры сайтов',
        'кейсы клиентов',
        'работы по разработке'
      ],
      canonical: `${baseSEOConfig.baseUrl}/ru/portfolio`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/portfolio`,
        'en-US': `${baseSEOConfig.baseUrl}/en/portfolio`,
        'x-default': `${baseSEOConfig.baseUrl}/portfolio`
      }
    }
  },
  contact: {
    fr: {
      title: 'Contact - Devis Gratuit Site Internet | SIDIKOFF DIGITAL Paris',
      description: 'Contactez notre agence web parisienne pour un devis gratuit. Création de sites internet, applications web, SEO. Réponse sous 24h.',
      keywords: [
        'contact agence web paris',
        'devis gratuit site internet',
        'créer site web paris',
        'agence digitale contact'
      ],
      canonical: `${baseSEOConfig.baseUrl}/contact`,
      alternateLanguages: {
        'en-US': `${baseSEOConfig.baseUrl}/en/contact`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru/contact`,
        'x-default': `${baseSEOConfig.baseUrl}/contact`
      }
    },
    en: {
      title: 'Contact - Free Website Quote | SIDIKOFF DIGITAL Paris',
      description: 'Contact our Paris web agency for a free quote. Website creation, web applications, SEO services. Response within 24h.',
      keywords: [
        'contact web agency paris',
        'free website quote',
        'web design paris contact',
        'digital agency contact'
      ],
      canonical: `${baseSEOConfig.baseUrl}/en/contact`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/contact`,
        'ru-RU': `${baseSEOConfig.baseUrl}/ru/contact`,
        'x-default': `${baseSEOConfig.baseUrl}/contact`
      }
    },
    ru: {
      title: 'Контакты - Бесплатный Расчет Сайта | SIDIKOFF DIGITAL Париж',
      description: 'Свяжитесь с нашим веб-агентством в Париже для бесплатного расчета. Создание сайтов, веб-приложения, SEO. Ответ в течение 24ч.',
      keywords: [
        'контакты веб-агентство париж',
        'бесплатный расчет сайта',
        'создание сайтов париж',
        'связаться с агентством'
      ],
      canonical: `${baseSEOConfig.baseUrl}/ru/contact`,
      alternateLanguages: {
        'fr-FR': `${baseSEOConfig.baseUrl}/contact`,
        'en-US': `${baseSEOConfig.baseUrl}/en/contact`,
        'x-default': `${baseSEOConfig.baseUrl}/contact`
      }
    }
  }
}

// Structured Data Generators
export function generateOrganizationSchema(): Organization {
  return {
    '@type': 'Organization',
    '@id': `${baseSEOConfig.baseUrl}/#organization`,
    name: baseSEOConfig.business.name,
    legalName: baseSEOConfig.business.legalName,
    url: baseSEOConfig.baseUrl,
    logo: `${baseSEOConfig.baseUrl}/logo-sidikoff.svg`,
    image: `${baseSEOConfig.baseUrl}/opengraph-image.jpg`,
    description: baseSEOConfig.defaultDescription,
    foundingDate: baseSEOConfig.business.foundingDate,
    founder: {
      '@type': 'Person',
      name: baseSEOConfig.business.founder
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: baseSEOConfig.business.employees
    },
    vatID: baseSEOConfig.business.vatNumber,
    taxID: baseSEOConfig.business.sirenNumber,
    address: {
      '@type': 'PostalAddress',
      ...baseSEOConfig.business.address
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: baseSEOConfig.business.phone,
      email: baseSEOConfig.business.email,
      contactType: 'customer service',
      availableLanguage: ['French', 'English', 'Russian']
    },
    sameAs: [
      'https://www.linkedin.com/company/sidikoff-digital',
      'https://github.com/ssidikov'
    ]
  }
}

export function generateLocalBusinessSchema(): LocalBusiness {
  return {
    '@type': 'LocalBusiness',
    '@id': `${baseSEOConfig.baseUrl}/#localbusiness`,
    name: baseSEOConfig.siteName,
    description: baseSEOConfig.defaultDescription,
    url: baseSEOConfig.baseUrl,
    logo: `${baseSEOConfig.baseUrl}/logo-sidikoff.svg`,
    image: `${baseSEOConfig.baseUrl}/opengraph-image.jpg`,
    telephone: baseSEOConfig.business.phone,
    email: baseSEOConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      ...baseSEOConfig.business.address
    },
    founder: {
      '@type': 'Person',
      name: baseSEOConfig.business.founder
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: baseSEOConfig.business.employees
    },
    vatID: baseSEOConfig.business.vatNumber,
    taxID: baseSEOConfig.business.sirenNumber,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Paris, France'
      },
      {
        '@type': 'Place',
        name: 'Île-de-France, France'
      },
      {
        '@type': 'Place',
        name: 'France'
      }
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'France'
    }
  }
}

export function generateWebSiteSchema(locale: SupportedLocale): WebSite {
  const urls = {
    fr: baseSEOConfig.baseUrl,
    en: `${baseSEOConfig.baseUrl}/en`,
    ru: `${baseSEOConfig.baseUrl}/ru`
  }

  return {
    '@type': 'WebSite',
    '@id': `${baseSEOConfig.baseUrl}/#website`,
    url: urls[locale],
    name: baseSEOConfig.siteName,
    description: baseSEOConfig.defaultDescription,
    publisher: {
      '@id': `${baseSEOConfig.baseUrl}/#organization`
    },
    inLanguage: localeToHreflang[locale],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${urls[locale]}/search?q={search_term_string}`
      }
    }
  }
}

export function generateServicesSchema(): Service[] {
  const services = [
    {
      name: 'Création de sites web',
      description: 'Conception et développement de sites web sur mesure',
      serviceType: 'Web Development'
    },
    {
      name: 'Applications web',
      description: 'Développement d\'applications web complexes',
      serviceType: 'Web Application Development'
    },
    {
      name: 'E-commerce',
      description: 'Création de boutiques en ligne performantes',
      serviceType: 'E-commerce Development'
    },
    {
      name: 'Référencement SEO',
      description: 'Optimisation pour les moteurs de recherche',
      serviceType: 'SEO Optimization'
    },
    {
      name: 'Design UX/UI',
      description: 'Conception d\'interfaces utilisateur modernes',
      serviceType: 'UX/UI Design'
    }
  ]

  return services.map(service => ({
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      '@id': `${baseSEOConfig.baseUrl}/#organization`
    },
    areaServed: {
      '@type': 'Place',
      name: 'France'
    }
  }))
}

export function generateFAQSchema(locale: SupportedLocale): Thing {
  const faqData = {
    fr: [
      {
        question: 'Combien coûte la création d\'un site web ?',
        answer: 'Le prix varie selon vos besoins. Sites vitrine à partir de 500€, sites e-commerce à partir de 1500€. Devis gratuit personnalisé.'
      },
      {
        question: 'Combien de temps prend la création d\'un site ?',
        answer: 'Entre 2 à 8 semaines selon la complexité. Site vitrine : 2-3 semaines, e-commerce : 4-8 semaines.'
      },
      {
        question: 'Proposez-vous le référencement SEO ?',
        answer: 'Oui, nous optimisons tous nos sites pour le SEO et proposons des services de référencement avancés.'
      }
    ],
    en: [
      {
        question: 'How much does website creation cost?',
        answer: 'Prices vary based on your needs. Business sites from €500, e-commerce from €1500. Free personalized quote.'
      },
      {
        question: 'How long does website creation take?',
        answer: '2 to 8 weeks depending on complexity. Business site: 2-3 weeks, e-commerce: 4-8 weeks.'
      },
      {
        question: 'Do you offer SEO services?',
        answer: 'Yes, we optimize all our sites for SEO and offer advanced SEO services.'
      }
    ],
    ru: [
      {
        question: 'Сколько стоит создание сайта?',
        answer: 'Цены варьируются в зависимости от потребностей. Сайты-визитки от 500€, интернет-магазины от 1500€.'
      },
      {
        question: 'Сколько времени занимает создание сайта?',
        answer: 'От 2 до 8 недель в зависимости от сложности. Сайт-визитка: 2-3 недели, интернет-магазин: 4-8 недели.'
      },
      {
        question: 'Предлагаете ли вы SEO-услуги?',
        answer: 'Да, мы оптимизируем все наши сайты для SEO и предлагаем продвинутые SEO-услуги.'
      }
    ]
  }

  return {
    '@type': 'FAQPage',
    mainEntity: faqData[locale].map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

// Generate metadata for pages
export function generatePageMetadata(
  page: keyof typeof pagesSEOData,
  locale: SupportedLocale = 'fr'
): Metadata {
  const seoData = pagesSEOData[page]?.[locale]
  
  if (!seoData) {
    throw new Error(`SEO data not found for page "${page}" and locale "${locale}"`)
  }

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    alternates: {
      canonical: seoData.canonical,
      languages: seoData.alternateLanguages
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.canonical,
      siteName: baseSEOConfig.siteName,
      images: [
        {
          url: `${baseSEOConfig.baseUrl}${baseSEOConfig.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seoData.title
        }
      ],
      locale: localeToHreflang[locale],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      site: baseSEOConfig.twitterHandle,
      images: [`${baseSEOConfig.baseUrl}${baseSEOConfig.defaultImage}`]
    },
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
    }
  }
}

// Helper function to generate all structured data for a page
export function generatePageStructuredData(
  page: keyof typeof pagesSEOData,
  locale: SupportedLocale,
  breadcrumbs?: Array<{name: string, url: string}>
): Thing[] {
  const structuredData: Thing[] = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema(locale)
  ]

  // Add services schema for home and services pages
  if (page === 'home' || page === 'services') {
    structuredData.push(...generateServicesSchema())
  }

  // Add FAQ schema for home page
  if (page === 'home') {
    structuredData.push(generateFAQSchema(locale))
  }

  // Add breadcrumbs if provided
  if (breadcrumbs && breadcrumbs.length > 1) {
    structuredData.push(generateBreadcrumbSchema(breadcrumbs))
  }

  return structuredData
}

export default baseSEOConfig
