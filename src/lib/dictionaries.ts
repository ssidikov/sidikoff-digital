import { notFound } from 'next/navigation'
import 'server-only'

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
      essentiel: {
        name: string
        price: string
        description: string
        features: string[]
        cta: string
        popular?: boolean
      }
      pro: {
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
}

// Cache for dictionaries with TTL
interface CacheEntry {
  data: Dictionary
  timestamp: number
}

const CACHE_TTL = 5 * 60 * 1000 // 5 minutes in development, could be longer in production
const dictionaryCache = new Map<Locale, CacheEntry>()

/**
 * Dictionary loading functions with proper error handling
 */
const dictionaries = {
  fr: () => import('../../locales/fr/common.json').then((module) => module.default),
  en: () => import('../../locales/en/common.json').then((module) => module.default),
  ru: () => import('../../locales/ru/common.json').then((module) => module.default),
} as const

/**
 * Checks if cache entry is still valid
 */
function isCacheValid(entry: CacheEntry): boolean {
  return Date.now() - entry.timestamp < CACHE_TTL
}

/**
 * Get dictionary for a locale with enhanced caching and error handling
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  // Locale validation
  if (!isValidLocale(locale)) {
    console.warn(`Invalid locale requested: ${locale}`)
    notFound()
  }

  // Check cache with TTL
  const cachedEntry = dictionaryCache.get(locale)
  if (cachedEntry && isCacheValid(cachedEntry)) {
    return cachedEntry.data
  }

  try {
    const localeData = await dictionaries[locale]()
    
    // Check if landing data is nested in services or testimonials
    const typedLocaleData = localeData as Record<string, unknown>;
    const servicesData = typedLocaleData.services as Record<string, unknown>;
    const testimonialsData = typedLocaleData.testimonials as Record<string, unknown>;
    
    // Extract landing pages from services if they exist there
    const extractedData = { ...typedLocaleData };
    if (servicesData) {
      // Move landing pages from services to top level
      if (servicesData.web_creation_landing) {
        extractedData.web_creation_landing = servicesData.web_creation_landing;
      }
      if (servicesData.web_redesign_landing) {
        extractedData.web_redesign_landing = servicesData.web_redesign_landing;
      }
      if (servicesData.seo_optimization_landing) {
        extractedData.seo_optimization_landing = servicesData.seo_optimization_landing;
      }
      if (servicesData.maintenance_landing) {
        extractedData.maintenance_landing = servicesData.maintenance_landing;
      }
    }
    
    // Extract landing pages from testimonials if they exist there (fallback for incorrect JSON structure)
    if (testimonialsData) {
      if (testimonialsData.seo_optimization_landing) {
        extractedData.seo_optimization_landing = testimonialsData.seo_optimization_landing;
      }
      if (testimonialsData.maintenance_landing) {
        extractedData.maintenance_landing = testimonialsData.maintenance_landing;
      }
      if (testimonialsData.web_creation_landing) {
        extractedData.web_creation_landing = testimonialsData.web_creation_landing;
      }
      if (testimonialsData.web_redesign_landing) {
        extractedData.web_redesign_landing = testimonialsData.web_redesign_landing;
      }
    }
    
    // Start with locale data and fill missing with fallback
    const mergedDictionary = JSON.parse(JSON.stringify(extractedData)) // Deep clone processed locale data
    
    // Deep merge function - target has priority, source fills missing values
    function mergeDeep(target: unknown, source: unknown): unknown {
      if (typeof target !== 'object' || target === null || Array.isArray(target) ||
          typeof source !== 'object' || source === null || Array.isArray(source)) {
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
        } else if (result[key] && typeof result[key] === 'object' && !Array.isArray(result[key]) &&
                   sourceObj[key] && typeof sourceObj[key] === 'object' && !Array.isArray(sourceObj[key])) {
          // Both have the key and both are objects, merge recursively
          result[key] = mergeDeep(result[key], sourceObj[key])
        }
        // If target has the key, keep target value (target has priority)
      }
      return result
    }
    
    const dictionary: Dictionary = mergeDeep(mergedDictionary, fallbackDictionary) as Dictionary
    
    // Cache result with timestamp
    dictionaryCache.set(locale, {
      data: dictionary,
      timestamp: Date.now(),
    })

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
}

/**
 * Clear cache (for testing or hot reload)
 */
export function clearDictionaryCache(): void {
  dictionaryCache.clear()
}

/**
 * Preload dictionaries for better performance
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
