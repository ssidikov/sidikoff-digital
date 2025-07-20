import { Metadata } from 'next'

// Supported locales for the multilingual site
export const supportedLocales = ['fr', 'en', 'ru'] as const
export type SupportedLocale = (typeof supportedLocales)[number]

// Locale to hreflang mapping
export const localeToHreflang: Record<SupportedLocale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  ru: 'ru-RU',
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[] // Deprecated for SEO but kept for internal structured data use
  ogImage?: string
  canonical?: string
  locale?: string
  alternateLanguages?: { [key: string]: string }
}

// Configuration SEO pour l'agence parisienne - Enhanced for 2025
const defaultSEOConfig = {
  siteName: 'SIDIKOFF DIGITAL',
  defaultTitle: 'Agence Web Paris - SIDIKOFF DIGITAL',
  defaultDescription:
    'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO. Devis gratuit.',
  defaultOgImage: 'https://sidikoff.com/opengraph-image',
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
  baseUrl: 'https://sidikoff.com',
  social: {
    twitter: '@sidikoffdigital',
    linkedin: 'sidikoff-digital',
  },
  business: {
    name: 'SIDIKOFF DIGITAL',
    address: 'Paris, France',
    phone: '+33 6 26 93 27 34',
    email: 's.sidikoff@gmail.com',
    foundingDate: '2025',
    founder: 'Sardorbek SIDIKOV',
    employees: '1-10',
    vatNumber: 'FR943266213',
  },
}

// Helper function to generate hreflang URLs for multilingual pages
export function generateHreflangAlternates(
  currentPath: string,
  currentLocale: SupportedLocale
): Record<string, string> {
  const alternates: Record<string, string> = {}

  supportedLocales.forEach((locale) => {
    if (locale === currentLocale) {
      // Add canonical for current locale
      alternates['x-default'] = `${defaultSEOConfig.baseUrl}${currentPath}`
    } else {
      // Add alternate languages
      const localizedPath =
        locale === 'fr'
          ? currentPath // French is default, no locale prefix
          : `/${locale}${currentPath}`
      alternates[localeToHreflang[locale]] = `${defaultSEOConfig.baseUrl}${localizedPath}`
    }
  })

  return alternates
}

// Helper function to get SEO data for a specific page and locale
export function getPageSEO(page: keyof typeof pagesSEO, locale: SupportedLocale = 'fr'): SEOData {
  const seoData = pagesSEO[page][locale]
  if (!seoData) {
    throw new Error(`SEO data not found for page "${page}" and locale "${locale}"`)
  }

  return {
    ...seoData,
    locale: localeToHreflang[locale],
  }
}

// Helper function to generate metadata for a specific page
export function generatePageMetadata(
  page: keyof typeof pagesSEO,
  locale: SupportedLocale = 'fr'
): Metadata {
  const seoData = getPageSEO(page, locale)
  return generateMetadata(seoData)
}

// Dynamic OG image utilities using file-based generation
export function generateOGImageUrl(params: {
  locale?: SupportedLocale
  page?: keyof typeof pagesSEO
}): string {
  const { locale = 'fr', page } = params

  // Use locale-specific OG images for different sections
  if (page === 'projects') {
    return `${defaultSEOConfig.baseUrl}/projects/opengraph-image`
  }

  if (locale !== 'fr') {
    return `${defaultSEOConfig.baseUrl}/${locale}/opengraph-image`
  }

  return `${defaultSEOConfig.baseUrl}/opengraph-image`
}

// Enhanced metadata generation with dynamic OG images
export function generateMetadataWithDynamicOG(
  seoData: SEOData & {
    page?: keyof typeof pagesSEO
  }
): Metadata {
  const dynamicOGImage = generateOGImageUrl({
    locale: (seoData.locale?.split('-')[0] as SupportedLocale) || 'fr',
    page: seoData.page,
  })

  return generateMetadata({
    ...seoData,
    ogImage: dynamicOGImage,
  })
}

// Helper to update pagesSEO with dynamic OG images
export function generatePageMetadataWithDynamicOG(
  page: keyof typeof pagesSEO,
  locale: SupportedLocale = 'fr'
): Metadata {
  const seoData = getPageSEO(page, locale)

  return generateMetadataWithDynamicOG({
    ...seoData,
    page,
  })
}

export function generateMetadata(seoData: SEOData): Metadata {
  const {
    title,
    description,
    ogImage,
    canonical,
    locale = 'fr-FR',
    alternateLanguages = {},
  } = seoData

  // Always apply consistent title format: "Page Title | SIDIKOFF DIGITAL"
  const fullTitle = `${title} | ${defaultSEOConfig.siteName}`

  const metadata: Metadata = {
    metadataBase: new URL(defaultSEOConfig.baseUrl),
    title: fullTitle,
    description,
    // Note: keywords meta tag is deprecated for SEO but kept for internal use in structured data
    // keywords: [...defaultSEOConfig.defaultKeywords, ...keywords],

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || defaultSEOConfig.baseUrl,
      siteName: defaultSEOConfig.siteName,
      locale,
      type: 'website',
      images: [
        {
          url: ogImage || defaultSEOConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: defaultSEOConfig.social.twitter,
      images: [ogImage || defaultSEOConfig.defaultOgImage],
    },

    // Canonical URL and hreflang alternates
    alternates: {
      canonical: canonical || defaultSEOConfig.baseUrl,
      languages: Object.keys(alternateLanguages).length > 0 ? alternateLanguages : undefined,
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
      title: 'Création de sites internet à Paris - Agence Web',
      description:
        'Création de sites internet professionnels à Paris : vitrine, e-commerce, applications web. Agence web experte en Next.js, SEO, UX/UI, développement sur mesure. Devis gratuit.',
      keywords: [
        'création de sites internet',
        'agence web paris',
        'site vitrine',
        'site e-commerce',
        'développement web',
        'référencement SEO',
        'site internet professionnel',
        'agence digitale',
        'UX UI design',
        'application web',
        'développeur paris',
      ],
      canonical: 'https://sidikoff.com/',
      alternateLanguages: {
        'en-US': 'https://sidikoff.com/en',
        'ru-RU': 'https://sidikoff.com/ru',
        'x-default': 'https://sidikoff.com/',
      },
    },
    en: {
      title: 'Top Web Design Agency in Paris - Custom Websites & Apps',
      description:
        'Expert web design and development agency in Paris. We build custom websites, e-commerce stores, and web applications with a focus on Next.js, React, and SEO. Get a free quote today.',
      keywords: [
        'web design agency paris',
        'custom website development',
        'react developer paris',
        'next.js agency',
        'e-commerce development france',
        'web application developer',
        'seo services paris',
        'freelance developer paris',
      ],
      canonical: 'https://sidikoff.com/en',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/',
        'ru-RU': 'https://sidikoff.com/ru',
        'x-default': 'https://sidikoff.com/',
      },
    },
    ru: {
      title: 'Веб-агентство в Париже - Разработка сайтов и веб-приложений',
      description:
        'Профессиональная разработка сайтов, интернет-магазинов и веб-приложений в Париже. Экспертиза в Next.js, React, UX/UI дизайне и SEO. Закажите бесплатный расчет.',
      keywords: [
        'разработка сайтов париж',
        'веб-агентство франция',
        'создание интернет-магазина',
        'разработчик react париж',
        'next.js агентство',
        'заказать сайт',
        'seo-продвижение',
        'веб-приложения на заказ',
      ],
      canonical: 'https://sidikoff.com/ru',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/',
        'en-US': 'https://sidikoff.com/en',
        'x-default': 'https://sidikoff.com/',
      },
    },
  },
  services: {
    fr: {
      title: 'Services & Tarifs - Agence Web Paris',
      description:
        'Découvrez nos services web : création de sites, applications, e-commerce, référencement SEO. Tarifs transparents et devis gratuit. Agence web à Paris.',
      keywords: [
        'tarifs agence web',
        'services web paris',
        'devis site internet',
        'prix développement web',
      ],
      canonical: 'https://sidikoff.com/services',
      alternateLanguages: {
        'en-US': 'https://sidikoff.com/en/services',
        'ru-RU': 'https://sidikoff.com/ru/services',
        'x-default': 'https://sidikoff.com/services',
      },
    },
    en: {
      title: 'Web Development Services & Pricing - Paris',
      description:
        'Our web development services include custom website design, e-commerce solutions, web apps, and SEO. View our transparent pricing and get a free quote from our Paris-based agency.',
      keywords: [
        'web development services',
        'website design pricing',
        'e-commerce cost',
        'seo packages paris',
        'react development services',
      ],
      canonical: 'https://sidikoff.com/en/services',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/services',
        'ru-RU': 'https://sidikoff.com/ru/services',
        'x-default': 'https://sidikoff.com/services',
      },
    },
    ru: {
      title: 'Услуги и Цены на Разработку Сайтов',
      description:
        'Наши услуги: разработка сайтов под ключ, создание интернет-магазинов, веб-приложений и SEO-оптимизация. Прозрачные цены и бесплатный расчет стоимости.',
      keywords: [
        'стоимость разработки сайта',
        'цены на создание сайта',
        'заказать интернет-магазин цена',
        'seo услуги стоимость',
        'разработка на react',
      ],
      canonical: 'https://sidikoff.com/ru/services',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/services',
        'en-US': 'https://sidikoff.com/en/services',
        'x-default': 'https://sidikoff.com/services',
      },
    },
  },
  projects: {
    fr: {
      title: 'Projets - Nos Réalisations Web',
      description:
        'Découvrez nos projets web : sites vitrine, e-commerce, applications. Projets de SIDIKOFF DIGITAL, agence web à Paris. Exemples et références clients.',
      keywords: [
        'projets agence web',
        'réalisations web paris',
        'exemples sites internet',
        'références clients',
      ],
      canonical: 'https://sidikoff.com/projects',
      alternateLanguages: {
        'en-US': 'https://sidikoff.com/en/projects',
        'ru-RU': 'https://sidikoff.com/ru/projects',
        'x-default': 'https://sidikoff.com/projects',
      },
    },
    en: {
      title: 'Our Portfolio - Web Design & Development Projects',
      description:
        'Explore our portfolio of custom websites, e-commerce platforms, and web applications. See the quality of work delivered by our Paris web agency.',
      keywords: [
        'web design portfolio',
        'development case studies',
        'e-commerce projects',
        'react project examples',
        'our work',
      ],
      canonical: 'https://sidikoff.com/en/projects',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/projects',
        'ru-RU': 'https://sidikoff.com/ru/projects',
        'x-default': 'https://sidikoff.com/projects',
      },
    },
    ru: {
      title: 'Портфолио - Примеры Наших Работ',
      description:
        'Изучите наше портфолио: примеры разработанных сайтов, интернет-магазинов и веб-приложений. Оцените качество работы нашего веб-агентства в Париже.',
      keywords: [
        'портфолио веб-разработки',
        'примеры наших работ',
        'кейсы по созданию сайтов',
        'разработанные проекты react',
      ],
      canonical: 'https://sidikoff.com/ru/projects',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/projects',
        'en-US': 'https://sidikoff.com/en/projects',
        'x-default': 'https://sidikoff.com/projects',
      },
    },
  },
  legal: {
    fr: {
      title: 'Mentions légales - Agence Web Paris',
      description:
        "Mentions légales de SIDIKOFF DIGITAL, agence web parisienne. Protection des données personnelles, cookies et conditions d'utilisation.",
      keywords: [
        'Mentions légales',
        'protection données personnelles',
        'cookies',
        'conditions utilisation',
      ],
      canonical: 'https://sidikoff.com/mentions-legales',
      alternateLanguages: {
        'en-US': 'https://sidikoff.com/en/mentions-legales',
        'ru-RU': 'https://sidikoff.com/ru/mentions-legales',
        'x-default': 'https://sidikoff.com/mentions-legales',
      },
    },
    en: {
      title: 'Privacy Policy & Legal Notice',
      description:
        'Read the official privacy policy and legal notice for SIDIKOFF DIGITAL. Learn how we handle your data, our use of cookies, and terms of service.',
      keywords: [
        'privacy policy',
        'legal notice',
        'data protection gdpr',
        'terms of service',
        'cookie policy',
      ],
      canonical: 'https://sidikoff.com/en/mentions-legales',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/mentions-legales',
        'ru-RU': 'https://sidikoff.com/ru/mentions-legales',
        'x-default': 'https://sidikoff.com/mentions-legales',
      },
    },
    ru: {
      title: 'Политика конфиденциальности и правовая информация',
      description:
        'Официальная политика конфиденциальности и правовая информация SIDIKOFF DIGITAL. Узнайте, как мы обрабатываем данные, используем cookie и наши условия предоставления услуг.',
      keywords: [
        'политика конфиденциальности',
        'правовая информация',
        'защита данных gdpr',
        'условия обслуживания',
        'политика cookie',
      ],
      canonical: 'https://sidikoff.com/ru/mentions-legales',
      alternateLanguages: {
        'fr-FR': 'https://sidikoff.com/mentions-legales',
        'en-US': 'https://sidikoff.com/en/mentions-legales',
        'x-default': 'https://sidikoff.com/mentions-legales',
      },
    },
  },
}

// FAQ data for structured data - using same content as FAQ component
export const faqData = {
  fr: [
    {
      question: "Combien coûte la création d'un site web ?",
      answer:
        'Le prix varie selon la complexité : site vitrine (800-2500€), site e-commerce (2500-8000€), application web (5000€+). Nous proposons un devis gratuit personnalisé selon vos besoins spécifiques.',
    },
    {
      question: 'Combien de temps prend le développement ?',
      answer:
        'Généralement 2-4 semaines pour un site vitrine, 4-8 semaines pour un e-commerce, et 8-16 semaines pour une application complexe. Le délai dépend de la complexité et de vos retours.',
    },
    {
      question: 'Proposez-vous la maintenance ?',
      answer:
        'Oui, nous offrons des forfaits de maintenance incluant mises à jour, sauvegardes, sécurité et support technique. Plans disponibles dès 50€/mois selon vos besoins.',
    },
    {
      question: 'Le site sera-t-il optimisé pour mobile ?',
      answer:
        'Absolument ! Tous nos sites sont responsive design et optimisés pour mobile, tablette et desktop. Nous testons sur différents appareils pour garantir une expérience parfaite.',
    },
    {
      question: 'Incluez-vous le référencement SEO ?',
      answer:
        'Oui, le SEO de base est inclus : optimisation technique, meta tags, sitemap, vitesse de chargement. Nous proposons aussi du SEO avancé en option.',
    },
  ],
  en: [
    {
      question: 'How much does website creation cost?',
      answer:
        'Prices vary by complexity: showcase site (€800-2500), e-commerce site (€2500-8000), web application (€5000+). We offer a free personalized quote based on your specific needs.',
    },
    {
      question: 'How long does development take?',
      answer:
        'Generally 2-4 weeks for a showcase site, 4-8 weeks for e-commerce, and 8-16 weeks for a complex application. Timeline depends on complexity and your feedback.',
    },
    {
      question: 'Do you offer maintenance?',
      answer:
        'Yes, we offer maintenance packages including updates, backups, security and technical support. Plans available from €50/month depending on your needs.',
    },
    {
      question: 'Will the site be mobile optimized?',
      answer:
        'Absolutely! All our sites are responsive design and optimized for mobile, tablet and desktop. We test on different devices to guarantee a perfect experience.',
    },
    {
      question: 'Do you include SEO optimization?',
      answer:
        'Yes, basic SEO is included: technical optimization, meta tags, sitemap, loading speed. We also offer advanced SEO as an option.',
    },
  ],
  ru: [
    {
      question: 'Сколько стоит создание веб-сайта?',
      answer:
        'Цены варьируются в зависимости от сложности: сайт-визитка (800-2500€), интернет-магазин (2500-8000€), веб-приложение (5000€+). Мы предлагаем бесплатную персональную смету в соответствии с вашими потребностями.',
    },
    {
      question: 'Сколько времени занимает разработка?',
      answer:
        'Обычно 2-4 недели для сайта-визитки, 4-8 недель для интернет-магазина и 8-16 недель для сложного приложения. Сроки зависят от сложности и ваших отзывов.',
    },
    {
      question: 'Предлагаете ли вы обслуживание?',
      answer:
        'Да, мы предлагаем пакеты обслуживания, включающие обновления, резервные копии, безопасность и техническую поддержку. Планы доступны от 50€/месяц в зависимости от ваших потребностей.',
    },
    {
      question: 'Будет ли сайт оптимизирован для мобильных устройств?',
      answer:
        'Конечно! Все наши сайты имеют адаптивный дизайн и оптимизированы для мобильных устройств, планшетов и компьютеров. Мы тестируем на разных устройствах для обеспечения идеального опыта.',
    },
    {
      question: 'Включаете ли вы SEO-оптимизацию?',
      answer:
        'Да, базовое SEO включено: техническая оптимизация, мета-теги, карта сайта, скорость загрузки. Мы также предлагаем продвинутое SEO как опцию.',
    },
  ],
}

// Helper function to get FAQ data for structured data
export function getFAQData(locale: SupportedLocale = 'fr') {
  return faqData[locale] || faqData.fr
}

// Helper function to generate structured data for FAQ
export function generateFAQStructuredData(locale: SupportedLocale = 'fr') {
  const faqs = getFAQData(locale)
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

// Structured Data for Local Business (Paris) - Enhanced
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sidikoff.com/#business',
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
    '@id': 'https://sidikoff.com/#website',
    url: defaultSEOConfig.baseUrl,
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'SIDIKOFF DIGITAL - Agence Web Paris',
    description: defaultSEOConfig.defaultDescription,
    publisher: {
      '@id': 'https://sidikoff.com/#organization',
    },
    copyrightHolder: {
      '@id': 'https://sidikoff.com/#organization',
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
    about: {
      '@id': 'https://sidikoff.com/#organization',
    },
  }
}

// Organization Schema - Enhanced for Brand Recognition
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sidikoff.com/#organization',
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
      url: 'https://sidikoff.com/logo-sidikoff.svg',
      width: 400,
      height: 400,
      caption: 'SIDIKOFF DIGITAL Logo',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://sidikoff.com/opengraph-image.jpg',
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
      'https://github.com/sidikoff',
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
  locale?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.name,
    description: work.description,
    creator: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      '@id': 'https://sidikoff.com/#organization',
    },
    about: work.category || 'Web Development',
    keywords: work.technologies?.join(', ') || 'React, Next.js, TypeScript',
    inLanguage: work.locale || 'fr-FR',
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
    '@id': 'https://sidikoff.com/#founder',
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
      '@id': 'https://sidikoff.com/#organization',
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
  locale: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: page.locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://sidikoff.com/#website',
    },
    about: {
      '@type': 'Organization',
      '@id': 'https://sidikoff.com/#organization',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://sidikoff.com/#organization',
    },
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    potentialAction: {
      '@type': 'ReadAction',
      target: page.url,
    },
  }
}
