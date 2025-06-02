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

// Configuration SEO pour l'agence parisienne - Enhanced for 2024
const defaultSEOConfig = {
  siteName: 'SIDIKOFF DIGITAL',
  defaultTitle: 'Agence Web Paris - SIDIKOFF DIGITAL',
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
    'agence web française',
    'site internet professionnel',
    'développement next.js',
    'react développeur',
    'typescript développeur',
  ],
  baseUrl: 'https://www.sidikoff.com',
  social: {
    twitter: '@sidikoffdigital',
    linkedin: 'sidikoff-digital',
  },
  business: {
    name: 'SIDIKOFF DIGITAL',
    address: 'Paris, France',
    phone: '+33 6 26 93 27 34',
    email: 'contact@sidikoff.com',
    foundingDate: '2025',
    founder: 'Sardorbek SIDIKOV',
    employees: '1-10',
    vatNumber: 'FR943266213',
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
    }, // Verification and additional meta tags
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
    }, // Additional meta tags for enhanced SEO
    other: {
      'theme-color': '#4f46e5',
      'msapplication-TileColor': '#4f46e5',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'application-name': 'SIDIKOFF DIGITAL',
      'apple-mobile-web-app-title': 'SIDIKOFF DIGITAL',
      'msapplication-tooltip': 'SIDIKOFF DIGITAL - Agence Web Paris',
      'msapplication-starturl': '/',
      'msapplication-navbutton-color': '#4f46e5',
      'og:site_name': 'SIDIKOFF DIGITAL',
      'twitter:site': '@sidikoffdigital',
      'twitter:creator': '@sidikoffdigital',
      publisher: 'SIDIKOFF DIGITAL',
      organization: 'SIDIKOFF DIGITAL',
      company: 'SIDIKOFF DIGITAL',
      brand: 'SIDIKOFF DIGITAL',
      copyright: 'SIDIKOFF DIGITAL',
      author: 'SIDIKOFF DIGITAL',
    },
  }

  return metadata
}

// Pages SEO configurations
export const pagesSEO = {
  home: {
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
      canonical: 'https://www.sidikoff.com/',
    },
    en: {
      title: 'SIDIKOFF DIGITAL - Web Agency in Paris | Website & Web Application Development',
      description:
        'Web agency specialized in website creation, web applications and digital strategy. Modern development, UX/UI design, SEO optimization. Free quote.',
      keywords: ['web agency paris', 'website creation', 'web development', 'digital agency'],
      canonical: 'https://www.sidikoff.com/',
    },
    ru: {
      title: 'SIDIKOFF DIGITAL - Веб-агентство | Создание Сайтов и Веб-Приложений',
      description:
        'Веб-агентство, специализирующееся на создании сайтов, веб-приложений и цифровой стратегии. Современная разработка, UX/UI дизайн, SEO оптимизация.',
      keywords: ['веб агентство париж', 'создание сайтов', 'веб разработка', 'цифровое агентство'],
      canonical: 'https://www.sidikoff.com/',
    },
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
      canonical: 'https://www.sidikoff.com/services',
    },
    en: {
      title: 'Services & Pricing | SIDIKOFF DIGITAL - Web Agency',
      description:
        'Discover our web services: website creation, applications, e-commerce, SEO optimization. Transparent pricing and free quote. Web agency in France.',
      keywords: ['web agency pricing', 'web services paris', 'website quote', 'development costs'],
      canonical: 'https://www.sidikoff.com/services',
    },
    ru: {
      title: 'Услуги и Цены | SIDIKOFF DIGITAL - Веб-агентство',
      description:
        'Откройте для себя наши веб-услуги: создание сайтов, приложений, e-commerce, SEO оптимизация. Прозрачные цены и бесплатная смета.',
      keywords: ['цены веб агентство', 'веб услуги париж', 'смета сайта', 'стоимость разработки'],
      canonical: 'https://www.sidikoff.com/services',
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
      canonical: 'https://www.sidikoff.com/projects',
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
      canonical: 'https://www.sidikoff.com/projects',
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
      canonical: 'https://www.sidikoff.com/projects',
    },
  },
  legal: {
    fr: {
      title: 'Politique de confidentialité | SIDIKOFF DIGITAL - Agence Web Paris',
      description:
        "Politique de confidentialité de SIDIKOFF DIGITAL, agence web parisienne. Protection des données personnelles, cookies et conditions d'utilisation.",
      keywords: [
        'politique de confidentialité',
        'protection données personnelles',
        'cookies',
        'conditions utilisation',
      ],
      canonical: 'https://www.sidikoff.com/mentions-legales',
    },
    en: {
      title: 'Privacy Policy | SIDIKOFF DIGITAL - Web Agency Paris',
      description:
        'Privacy policy of SIDIKOFF DIGITAL, Parisian web agency. Personal data protection, cookies and terms of use.',
      keywords: ['privacy policy', 'data protection', 'cookies', 'terms of use'],
      canonical: 'https://www.sidikoff.com/mentions-legales',
    },
    ru: {
      title: 'Политика конфиденциальности | SIDIKOFF DIGITAL - Веб-агентство Париж',
      description:
        'Политика конфиденциальности SIDIKOFF DIGITAL, парижского веб-агентства. Защита персональных данных, куки и условия использования.',
      keywords: ['политика конфиденциальности', 'защита данных', 'куки', 'условия использования'],
      canonical: 'https://www.sidikoff.com/mentions-legales',
    },
  },
}

// Structured Data for Local Business (Paris) - Enhanced
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.sidikoff.com/#business',
    name: defaultSEOConfig.business.name,
    alternateName: 'SIDIKOFF DIGITAL',
    description:
      'Agence web parisienne spécialisée en création de sites internet et applications web modernes. Développement React, Next.js, design UX/UI, référencement SEO.',
    url: defaultSEOConfig.baseUrl,
    telephone: defaultSEOConfig.business.phone,
    email: defaultSEOConfig.business.email,
    foundingDate: defaultSEOConfig.business.foundingDate,
    founder: {
      '@type': 'Person',
      name: defaultSEOConfig.business.founder,
    },
    numberOfEmployees: defaultSEOConfig.business.employees,
    vatID: defaultSEOConfig.business.vatNumber,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
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
        '@type': 'State',
        name: 'Île-de-France',
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
      'Développement React & Next.js',
      'Stratégie digitale',
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      `https://linkedin.com/company/${defaultSEOConfig.social.linkedin}`,
      `https://twitter.com/${defaultSEOConfig.social.twitter.replace('@', '')}`,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création de sites web',
            description: 'Sites vitrine professionnels et e-commerce',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Applications web',
            description: "Développement d'applications web sur mesure",
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

// Website Schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.sidikoff.com/#website',
    url: defaultSEOConfig.baseUrl,
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'SIDIKOFF DIGITAL - Agence Web Paris',
    description: defaultSEOConfig.defaultDescription,
    publisher: {
      '@id': 'https://www.sidikoff.com/#organization',
    },
    copyrightHolder: {
      '@id': 'https://www.sidikoff.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.sidikoff.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['fr-FR', 'en-US', 'ru-RU'],
    about: {
      '@id': 'https://www.sidikoff.com/#organization',
    },
  }
}

// Organization Schema - Enhanced for Brand Recognition
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.sidikoff.com/#organization',
    name: 'SIDIKOFF DIGITAL',
    legalName: 'SIDIKOFF DIGITAL',
    alternateName: [
      'SIDIKOFF DIGITAL - Agence Web Paris',
      'SIDIKOFF DIGITAL Agence',
      'Sardorbek SIDIKOV Agence',
    ],
    brand: {
      '@type': 'Brand',
      name: 'SIDIKOFF DIGITAL',
      slogan: 'Votre transformation digitale commence ici',
    },
    url: defaultSEOConfig.baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.sidikoff.com/logo-sidikoff.svg',
      width: 400,
      height: 400,
      caption: 'SIDIKOFF DIGITAL Logo',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://www.sidikoff.com/images/contact.png',
      width: 1200,
      height: 630,
      caption: 'SIDIKOFF DIGITAL - Agence Web Paris',
    },
    description:
      'SIDIKOFF DIGITAL est une agence web parisienne fondée par Sardorbek SIDIKOV, spécialisée en développement de sites internet et applications web modernes. React, Next.js, TypeScript, design UX/UI.',
    slogan: 'Votre transformation digitale commence ici',
    foundingDate: defaultSEOConfig.business.foundingDate,
    founder: {
      '@type': 'Person',
      name: defaultSEOConfig.business.founder,
      jobTitle: 'Founder & Lead Developer',
      sameAs: 'https://linkedin.com/in/sardorbek-sidikov',
    },
    employee: {
      '@type': 'Person',
      name: 'Sardorbek SIDIKOV',
      jobTitle: 'Founder & Lead Developer',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
      postalCode: '75000',
      streetAddress: 'Paris, France',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522,
    },
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
        '@type': 'AdministrativeArea',
        name: 'Europe',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: defaultSEOConfig.business.phone,
        contactType: 'Customer Service',
        availableLanguage: ['French', 'English', 'Russian'],
        hoursAvailable: 'Mo-Fr 09:00-18:00',
      },
      {
        '@type': 'ContactPoint',
        email: defaultSEOConfig.business.email,
        contactType: 'Customer Support',
        availableLanguage: ['French', 'English', 'Russian'],
      },
    ],
    foundingLocation: {
      '@type': 'Place',
      name: 'Paris, France',
    },
    knowsAbout: [
      'Web Development',
      'React.js',
      'Next.js',
      'TypeScript',
      'UX/UI Design',
      'SEO Optimization',
      'E-commerce Development',
      'Web Applications',
      'Digital Strategy',
      'Responsive Design',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Web Development Industry',
      },
    },
    sameAs: [
      'https://github.com/ssidikov',
      'https://linkedin.com/company/sidikoff-digital',
      `https://linkedin.com/company/${defaultSEOConfig.social.linkedin}`,
      `https://twitter.com/${defaultSEOConfig.social.twitter.replace('@', '')}`,
    ],
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

// Projects/Work Schema - Enhanced
export function generateCreativeWorkSchema(work: {
  name: string
  description: string
  url?: string
  image?: string
  dateCreated?: string
  technologies?: string[]
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.name,
    description: work.description,
    creator: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      '@id': 'https://www.sidikoff.com/#organization',
    },
    about: work.category || 'Web Development',
    keywords: work.technologies?.join(', ') || 'React, Next.js, TypeScript',
    inLanguage: 'fr-FR',
    ...(work.url && { url: work.url }),
    ...(work.image && {
      image: {
        '@type': 'ImageObject',
        url: work.image,
        width: 800,
        height: 600,
      },
    }),
    ...(work.dateCreated && { dateCreated: work.dateCreated }),
    audience: {
      '@type': 'Audience',
      audienceType: 'Business Professionals',
    },
  }
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
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

// Person Schema for Founder
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.sidikoff.com/#founder',
    name: defaultSEOConfig.business.founder,
    givenName: 'Sardorbek',
    familyName: 'SIDIKOV',
    jobTitle: 'Founder & Lead Developer',
    description:
      'Développeur web spécialisé en React, Next.js et TypeScript. Fondateur de SIDIKOFF DIGITAL, agence web parisienne.',
    url: defaultSEOConfig.baseUrl,
    email: defaultSEOConfig.business.email,
    telephone: defaultSEOConfig.business.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      '@id': 'https://www.sidikoff.com/#organization',
    },
    knowsAbout: [
      'Web Development',
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'UX/UI Design',
      'SEO Optimization',
      'E-commerce Development',
    ],
    sameAs: [`https://linkedin.com/in/sardorbek-sidikov`, `https://github.com/sidikoff`],
  }
}

// WebPage Schema
export function generateWebPageSchema(page: {
  name: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.sidikoff.com/#website',
    },
    about: {
      '@type': 'Organization',
      '@id': 'https://www.sidikoff.com/#organization',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.sidikoff.com/#organization',
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    potentialAction: {
      '@type': 'ReadAction',
      target: page.url,
    },
  }
}
