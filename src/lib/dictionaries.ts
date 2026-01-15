import { notFound } from 'next/navigation'
import 'server-only'
import { cache } from 'react'

import { type Locale, isValidLocale, defaultLocale } from './i18n'
import { fallbackDictionary } from './fallback-dictionary'

// Define the Dictionary type based on your actual JSON structure
export interface Dictionary {
  '404': {
    title: string
    description: string
    search_placeholder: string
    search_button: string
    go_home: string
    popular_pages: string
  }
  navigation: {
    home: string
    services: string
    portfolio: string
    blog: string
    faq: string
    contact: string
    pricing: string
    language: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    cta_primary: string
    cta_secondary: string
    trust_indicators?: string[]
    features: Array<{ title: string; icon: string }>
  }
  services: {
    title: string
    subtitle: string
    web_creation: {
      title: string
      subtitle: string
      features: string[]
      description: string
    }
    web_redesign: {
      title: string
      features: string[]
      description: string
    }
    seo_optimization: {
      title: string
      features: string[]
      description: string
    }
    maintenance: {
      title: string
      features: string[]
      description: string
    }
    restaurant: {
      title: string
      features: string[]
      description: string
    }
    cta_banner: {
      background: string
      description: string
      cta: string
    }
    buttons: {
      request_quote: string
      view_pricing: string
      learn_more: string
    }
    web_creation_landing?: {
      meta_title: string
      meta_description: string
      keywords: string[]
      hero: {
        badge: string
        title: string
        description: string
        benefits: string[]
        cta_primary: string
        cta_secondary: string
        image_alt: string
      }
      stats: Array<{
        number: string
        title: string
        description: string
      }>
      process: {
        title: string
        description: string
        steps: Array<{
          title: string
          description: string
        }>
      }
      features: {
        title: string
        description: string
        items: Array<{
          icon: string
          title: string
          description: string
        }>
      }
      cta: {
        title: string
        description: string
        primary_button: string
      }
    }
  }
  blog: {
    title: string
    subtitle: string
    all_posts: string
    featured_posts: string
    latest_posts: string
    read_more: string
    author: string
    min_read: string
    published_on: string
    related_posts: string
    share_article: string
    back_to_blog: string
    no_posts: string
    loading: string
    categories: string
    search_placeholder: string
    cta: {
      title: string
      description: string
      button: string
      secondary_button: string
    }
  }
  portfolio?: {
    title: string
    subtitle: string
    filter: {
      all: string
      web: string
      mobile: string
      design: string
    }
    projects: {
      [key: string]: {
        title: string
        description: string
        category: string
      }
    }
    view_project: string
    live_demo: string
    github: string
  }
  projects?: {
    title: string
    filter_all: string
    filter_featured: string
  }
  testimonials: {
    title: string
    subtitle: string
    cta: {
      title: string
      description: string
      button: string
    }
  }
  faq: {
    title: string
    subtitle: string
    categories: {
      general: string
      pricing: string
      support: string
    }
    questions: {
      [key: string]: {
        question: string
        answer: string
        category: string
      }
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
  pricing: {
    title: string
    subtitle: string
    description?: string
    guarantee_badge?: string
    maintenance?: {
      title?: string
      billing?: string
      features?: string[]
      cta?: string
    }
    plans: {
      pro: {
        name: string
        price: string
        description: string
        features: string[]
        cta: string
        popular?: boolean
      }
      premium: {
        name: string
        price: string
        description: string
        features: string[]
        cta: string
        popular?: boolean
      }
      entreprise: {
        name: string
        price: string
        description: string
        features: string[]
        cta: string
        popular?: boolean
      }
    }
  }
  contact: {
    title: string
    subtitle: string
    description: string
    quickContact: string
    social: string
    socialDesc: string
    form: {
      title: string
      responseTime: string
      name: {
        label: string
        placeholder: string
      }
      email: {
        label: string
        placeholder: string
      }
      phone: {
        label: string
        placeholder: string
      }
      subject: {
        label: string
        placeholder: string
      }
      message: {
        label: string
        placeholder: string
      }
      submit: string
      sending: string
      success: string
      success_description: string
      error: string
      error_description: string
    }
    channels: {
      title: string
      email: string
      emailDesc: string
      whatsapp: string
      whatsappDesc: string
      telegram: string
      telegramDesc: string
      phone: string
      phoneDesc: string
    }
  }
  footer: {
    description: string
    quick_links: string
    services_links: string
    contact_info: string
    social_media: string
    services: {
      web_creation: string
      web_redesign: string
      seo_optimization: string
      maintenance: string
      web_applications: string
      ecommerce: string
    }
    newsletter?: {
      title: string
      description: string
      placeholder: string
      subscribe: string
    }
    legal?: {
      privacy: string
      terms: string
      cookies: string
    }
    copyright?: string
  }
  common: {
    loading: string
    error: string
    try_again: string
    learn_more: string
    view_all: string
    back: string
    next: string
    previous: string
    close: string
    open: string
    badge_quality: string
    badge_response: string
    badge_support: string
    footer_copyright: string
    legal_link: string
  }
  legal: {
    title: string
    company_info_title: string
    company_name_label: string
    company_name: string
    company_type_label: string
    company_type: string
    siren_label: string
    siren: string
    address_label: string
    address: string
    phone_label: string
    phone: string
    email_label: string
    email: string
    director_title: string
    director_name: string
    hosting_title: string
    host_label: string
    host: string
    host_address_label: string
    host_address: string
    host_website_label: string
    host_website: string
    ip_title: string
    ip_text: string
    data_title: string
    data_text: string
    cookies_title: string
    cookies_text: string
  }
  web_creation_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    stats: Array<{
      number: string
      title: string
      description: string
    }>
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    features: {
      title: string
      description: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
    }
  }
  web_redesign_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    stats: Array<{
      number: string
      title: string
      description: string
    }>
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    features: {
      title: string
      description: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
    }
  }
  boulangerie_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    problems: {
      title: string
      subtitle: string
      pain_points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      features: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    portfolio: {
      title: string
      subtitle: string
      projects: Array<{
        name: string
        type: string
        image: string
        results: string[]
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      reviews: Array<{
        name: string
        position: string
        boulangerie: string
        location: string
        content: string
        rating: number
        image?: string
      }>
    }
    pricing: {
      title: string
      description: string
      packages: Array<{
        name: string
        price: string
        period: string
        description: string
        delivery_time?: string
        features: string[]
        is_popular?: boolean
      }>
    }
    faq: {
      title: string
      subtitle: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
      secondary_button: string
      features: string[]
    }
  }
  barbershop_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    problems: {
      title: string
      subtitle: string
      pain_points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      features: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    portfolio: {
      title: string
      subtitle: string
      projects: Array<{
        name: string
        type: string
        image: string
        results: string[]
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      reviews: Array<{
        name: string
        position: string
        barbershop: string
        location: string
        content: string
        rating: number
        image?: string
      }>
    }
    pricing: {
      title: string
      description: string
      packages: Array<{
        name: string
        price: string
        period: string
        description: string
        delivery_time?: string
        features: string[]
        is_popular?: boolean
      }>
    }
    faq: {
      title: string
      subtitle: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
      secondary_button: string
      features: string[]
    }
  }
  freelance_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    problems: {
      title: string
      subtitle: string
      pain_points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      features: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    portfolio: {
      title: string
      subtitle: string
      projects: Array<{
        name: string
        type: string
        image: string
        results: string[]
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      reviews: Array<{
        name: string
        position: string
        company: string
        location: string
        content: string
        rating: number
        image?: string
      }>
    }
    pricing: {
      title: string
      description: string
      packages: Array<{
        name: string
        price: string
        period: string
        description: string
        delivery_time?: string
        features: string[]
        is_popular?: boolean
      }>
    }
    faq: {
      title: string
      subtitle: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
      secondary_button: string
      features: string[]
    }
  }
  seo_local: {
    hero: {
      title: string
      description: string
      cta_primary: string
      cta_secondary: string
    }
    statistics: {
      websites_created: string
      satisfied_clients: string
      average_delivery: string
      support_included: string
    }
    services: {
      title: string
      description: string
      showcase: {
        title: string
        description: string
        price: string
      }
      ecommerce: {
        title: string
        description: string
        price: string
      }
      webapp: {
        title: string
        description: string
        price: string
      }
      seo: {
        title: string
        description: string
        price: string
      }
      redesign: {
        title: string
        description: string
        price: string
      }
      maintenance: {
        title: string
        description: string
        price: string
      }
    }
    advantages: {
      title: string
      description: string
      fast_delivery: {
        title: string
        description: string
      }
      guaranteed_quality: {
        title: string
        description: string
      }
      complete_support: {
        title: string
        description: string
      }
    }
    portfolio: {
      title: string
      description: string
    }
    cta: {
      title: string
      description: string
      primary_button: string
      secondary_button: string
      consultation_free: string
      quote_24h: string
      no_commitment: string
    }
  }
  photographer_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    problems: {
      title: string
      subtitle: string
      pain_points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      features: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    portfolio: {
      title: string
      subtitle: string
      projects: Array<{
        name: string
        type: string
        image: string
        results: string[]
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      reviews: Array<{
        name: string
        position: string
        company: string
        location: string
        content: string
        rating: number
        image?: string
      }>
    }
    pricing: {
      title: string
      description: string
      packages: Array<{
        name: string
        price: string
        period: string
        description: string
        delivery_time?: string
        features: string[]
        is_popular?: boolean
      }>
    }
    faq: {
      title: string
      subtitle: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
      secondary_button: string
      features: string[]
    }
  }
  seo_optimization_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    stats: Array<{
      number: string
      title: string
      description: string
    }>
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    features: {
      title: string
      description: string
      items: Array<{
        title: string
        description: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
    }
  }
  maintenance_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    stats: Array<{
      number: string
      title: string
      description: string
    }>
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    features: {
      title: string
      description: string
      items: Array<{
        title: string
        description: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
    }
  }
  restaurant_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    problems: {
      title: string
      subtitle: string
      pain_points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      features: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    pricing: {
      title: string
      description: string
      packages: Array<{
        name: string
        price: string
        period: string
        description: string
        features: string[]
        popular: boolean
      }>
      support_plans: {
        title: string
        subtitle: string
        plans: Array<{
          name: string
          price: string
          period: string
          features: string[]
        }>
      }
    }
    portfolio: {
      title: string
      subtitle: string
      projects: Array<{
        name: string
        type: string
        image: string
        results: string[]
      }>
    }
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      reviews: Array<{
        name: string
        position: string
        restaurant: string
        location: string
        content: string
        rating: number
        image?: string
      }>
    }
    faq: {
      title: string
      subtitle: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      description: string
      primary_button: string
      secondary_button: string
      guarantee: string
    }
  }
  doctor_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    problems: {
      title: string
      description: string
      pain_points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      features: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    portfolio: {
      title: string
      description: string
      projects: Array<{
        name: string
        type: string
        image: string
        results: string[]
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      reviews: Array<{
        name: string
        position: string
        company: string
        location: string
        content: string
        rating: number
        image?: string
      }>
    }
    pricing: {
      title: string
      description: string
      packages: Array<{
        name: string
        price: string
        period: string
        description: string
        delivery_time?: string
        features: string[]
        is_popular?: boolean
      }>
    }
    faq: {
      title: string
      description: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
  ecommerce_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      badge: string
      title: string
      description: string
      benefits: string[]
      cta_primary: string
      cta_secondary: string
      image_alt: string
    }
    problems: {
      title: string
      description: string
      pain_points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solution: {
      title: string
      description: string
      features: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      description: string
      steps: Array<{
        title: string
        description: string
      }>
    }
    portfolio: {
      title: string
      description: string
      projects: Array<{
        name: string
        type: string
        image: string
        results: string[]
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      reviews: Array<{
        name: string
        position: string
        company: string
        location: string
        content: string
        rating: number
        image?: string
      }>
    }
    pricing: {
      title: string
      description: string
      packages: Array<{
        name: string
        price: string
        period: string
        description: string
        delivery_time?: string
        features: string[]
        is_popular?: boolean
      }>
    }
    faq: {
      title: string
      description: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
  travel_agency_landing: {
    meta_title: string
    meta_description: string
    keywords: string[]
    hero: {
      title: string
      subtitle: string
      cta_primary: string
      cta_secondary: string
      stats_title: string
      stats_subtitle: string
    }
    pain_points: {
      title: string
      subtitle: string
      points: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    solutions: {
      title: string
      subtitle: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    features: {
      title: string
      subtitle: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    benefits: {
      title: string
      subtitle: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      subtitle: string
      steps: Array<{
        number: string
        title: string
        description: string
      }>
    }
    testimonials: {
      title: string
      subtitle: string
      items: Array<{
        name: string
        role: string
        text: string
        rating: number
        image?: string
      }>
    }
    faq: {
      title: string
      subtitle: string
      questions: Array<{
        question: string
        answer: string
      }>
    }
    cta: {
      title: string
      subtitle: string
      primary: string
      secondary: string
    }
  }
  agence_web_paris_landing: {
    meta_title: string
    meta_description: string
    hero: {
      badge: string
      title: string
      description: string
      cta_primary: string
      cta_secondary: string
      trust_indicators: string[]
    }
    services: {
      title: string
      subtitle: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    about: {
      title: string
      subtitle: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      steps: Array<{
        number: string
        title: string
        description: string
      }>
    }
    portfolio_teaser: {
      title: string
      description: string
      cta: string
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
  agence_web_paris_15_landing: {
    meta_title: string
    meta_description: string
    hero: {
      badge: string
      title: string
      description: string
      cta_primary: string
      cta_secondary: string
      trust_indicators: string[]
    }
    services: {
      title: string
      subtitle: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    about: {
      title: string
      subtitle: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    process: {
      title: string
      steps: Array<{
        number: string
        title: string
        description: string
      }>
    }
    portfolio_teaser: {
      title: string
      description: string
      cta: string
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
}

// Кеширование ОТКЛЮЧЕНО для разработки

/**
 * Dictionary loading functions with proper error handling
 */
const dictionaries = {
  fr: () => import('../../locales/fr/common.json').then((module) => module.default),
  en: () => import('../../locales/en/common.json').then((module) => module.default),
  ru: () => import('../../locales/ru/common.json').then((module) => module.default),
} as const

/**
 * Travel agency landing page dictionaries
 */
const travelAgencyDictionaries = {
  fr: () => import('../../locales/fr/travel_agency_landing.json').then((module) => module.default),
  en: () => import('../../locales/en/travel_agency_landing.json').then((module) => module.default),
  ru: () => import('../../locales/ru/travel_agency_landing.json').then((module) => module.default),
} as const

/**
 * Get dictionary for a locale with React cache() optimization
 * ОПТИМИЗИРОВАНО: Использует React cache() для дедупликации запросов
 * - Один запрос к getDictionary(locale) выполняется только 1 раз за render
 * - Последующие вызовы возвращают кешированный результат
 * - Экономия: ~300-500ms на повторных вызовах
 */
export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  // Locale validation
  if (!isValidLocale(locale)) {
    console.warn(`Invalid locale requested: ${locale}`)
    notFound()
  }

  try {
    const localeData = await dictionaries[locale]()

    // Load travel agency landing data
    let travelAgencyData: Record<string, unknown> = {}
    try {
      travelAgencyData = await travelAgencyDictionaries[locale]()
    } catch (error) {
      console.warn(`Failed to load travel agency landing data for locale: ${locale}`, error)
    }

    // Check if landing data is nested in services or testimonials
    const typedLocaleData = localeData as Record<string, unknown>
    const servicesData = typedLocaleData.services as Record<string, unknown>
    const testimonialsData = typedLocaleData.testimonials as Record<string, unknown>

    // Extract landing pages from services if they exist there
    const extractedData = { ...typedLocaleData }

    // Add travel agency landing data
    if (travelAgencyData && travelAgencyData.travel_agency_landing) {
      extractedData.travel_agency_landing = travelAgencyData.travel_agency_landing
    }

    if (servicesData) {
      // Move landing pages from services to top level
      if (servicesData.web_creation_landing) {
        extractedData.web_creation_landing = servicesData.web_creation_landing
      }
      if (servicesData.web_redesign_landing) {
        extractedData.web_redesign_landing = servicesData.web_redesign_landing
      }
      if (servicesData.seo_optimization_landing) {
        extractedData.seo_optimization_landing = servicesData.seo_optimization_landing
      }
      if (servicesData.maintenance_landing) {
        extractedData.maintenance_landing = servicesData.maintenance_landing
      }
    }

    // Extract landing pages from testimonials if they exist there (fallback for incorrect JSON structure)
    if (testimonialsData) {
      if (testimonialsData.seo_optimization_landing) {
        extractedData.seo_optimization_landing = testimonialsData.seo_optimization_landing
      }
      if (testimonialsData.maintenance_landing) {
        extractedData.maintenance_landing = testimonialsData.maintenance_landing
      }
      if (testimonialsData.web_creation_landing) {
        extractedData.web_creation_landing = testimonialsData.web_creation_landing
      }
      if (testimonialsData.web_redesign_landing) {
        extractedData.web_redesign_landing = testimonialsData.web_redesign_landing
      }
    }

    // Start with locale data and fill missing with fallback
    const mergedDictionary = JSON.parse(JSON.stringify(extractedData)) // Deep clone processed locale data

    // Deep merge function - target has priority, source fills missing values
    function mergeDeep(target: unknown, source: unknown): unknown {
      if (
        typeof target !== 'object' ||
        target === null ||
        Array.isArray(target) ||
        typeof source !== 'object' ||
        source === null ||
        Array.isArray(source)
      ) {
        return target !== undefined ? target : source
      }

      const targetObj = target as Record<string, unknown>
      const sourceObj = source as Record<string, unknown>

      // Start with target and fill missing from source
      const result = { ...targetObj }

      for (const key in sourceObj) {
        if (!(key in result)) {
          // Key missing in target, take from source
          result[key] = sourceObj[key]
        } else if (
          result[key] &&
          typeof result[key] === 'object' &&
          !Array.isArray(result[key]) &&
          sourceObj[key] &&
          typeof sourceObj[key] === 'object' &&
          !Array.isArray(sourceObj[key])
        ) {
          // Both have the key and both are objects, merge recursively
          result[key] = mergeDeep(result[key], sourceObj[key])
        }
        // If target has the key, keep target value (target has priority)
      }
      return result
    }

    const dictionary: Dictionary = mergeDeep(mergedDictionary, fallbackDictionary) as Dictionary

    return dictionary
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error)

    // Fallback to default locale if available
    if (locale !== defaultLocale) {
      console.warn(`Falling back to default locale: ${defaultLocale}`)
      return getDictionary(defaultLocale)
    }

    throw new Error(`Failed to load default dictionary for locale: ${defaultLocale}`)
  }
})

/**
 * Preload dictionaries for better performance
 * ОПТИМИЗИРОВАНО: Предзагрузка всех локалей для быстрого первого запроса
 */
export async function preloadDictionaries(): Promise<void> {
  const locales: Locale[] = ['en', 'fr', 'ru']
  await Promise.allSettled(locales.map((locale) => getDictionary(locale)))
}

// Types for safe key access
export type DictionaryKey = keyof Dictionary
export type NotFoundKey = keyof Dictionary['404']
export type NavigationKey = keyof Dictionary['navigation']
export type HeroKey = keyof Dictionary['hero']
export type ServicesKey = keyof Dictionary['services']
export type FaqKey = keyof Dictionary['faq']
export type ContactKey = keyof Dictionary['contact']
export type FooterKey = keyof Dictionary['footer']
export type CommonKey = keyof Dictionary['common']
