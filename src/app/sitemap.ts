import { MetadataRoute } from 'next'
import { FRENCH_REGIONS, FRENCH_CITIES } from '@/lib/seo-utils'

// Type definitions for better maintainability
type SitemapEntry = MetadataRoute.Sitemap[0]
type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
type Locale = 'fr' | 'en' | 'ru'

interface SeoLocation {
  slug: string
  priority: number
}

interface StaticPageConfig {
  path: string
  changeFrequency: ChangeFrequency
  priority: number
}

// Constants for better maintainability
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'
const CURRENT_DATE = new Date()

// Priority configuration constants
const PRIORITY_CONFIG = {
  HOMEPAGE: 1.0,
  HIGH_PRIORITY: 0.9,
  MEDIUM_HIGH_PRIORITY: 0.8,
  MEDIUM_PRIORITY: 0.7,
  LOW_PRIORITY: 0.6,
  VERY_LOW_PRIORITY: 0.5,
  MINIMAL_PRIORITY: 0.3,
} as const

// Major cities to exclude from general city processing
const MAJOR_CITIES = [
  'paris',
  'lyon',
  'toulouse',
  'marseille',
  'nice',
  'nantes',
  'strasbourg',
  'bordeaux',
  'lille',
  'montpellier',
] as const

// High-priority regions for enhanced SEO focus
const HIGH_PRIORITY_REGIONS = [
  'ile-de-france',
  'auvergne-rhone-alpes',
  'occitanie',
  'grand-est',
] as const

/**
 * Creates a sitemap entry with standardized structure
 */
function createSitemapEntry(
  url: string,
  changeFrequency: ChangeFrequency,
  priority: number
): SitemapEntry {
  return {
    url,
    lastModified: CURRENT_DATE,
    changeFrequency,
    priority,
  }
}

/**
 * Generates static pages for a specific locale
 */
function generateStaticPagesForLocale(locale: Locale, pages: StaticPageConfig[]): SitemapEntry[] {
  const localePrefix = locale === 'fr' ? '' : `/${locale}`

  return pages.map(({ path, changeFrequency, priority }) =>
    createSitemapEntry(`${BASE_URL}${localePrefix}${path}`, changeFrequency, priority)
  )
}

/**
 * Generates SEO location pages for all locales
 */
function generateSeoLocationPages(locations: SeoLocation[]): SitemapEntry[] {
  return locations.flatMap(({ slug, priority }) => [
    // French version (highest priority for local SEO)
    createSitemapEntry(`${BASE_URL}/seo/${slug}`, 'weekly', priority),
    // English version (reduced priority)
    createSitemapEntry(`${BASE_URL}/en/seo/${slug}`, 'monthly', Math.max(0.4, priority - 0.2)),
    // Russian version (lowest priority)
    createSitemapEntry(`${BASE_URL}/ru/seo/${slug}`, 'monthly', Math.max(0.3, priority - 0.3)),
  ])
}

/**
 * Gets priority-based Paris districts configuration
 */
function getParisDistrictsConfig(): SeoLocation[] {
  return [
    // Tier 1: Premium business districts
    { slug: 'paris-16', priority: 0.95 }, // Primary business location
    { slug: 'paris-1', priority: 0.9 }, // Louvre, business center
    { slug: 'paris-8', priority: 0.9 }, // Champs-Élysées, business district

    // Tier 2: Important business areas
    { slug: 'paris-7', priority: 0.85 }, // Government district
    { slug: 'paris-9', priority: 0.85 }, // Opera, business

    // Tier 3: Central districts
    { slug: 'paris-2', priority: 0.8 },
    { slug: 'paris-3', priority: 0.8 },
    { slug: 'paris-4', priority: 0.8 },
    { slug: 'paris-5', priority: 0.8 },
    { slug: 'paris-6', priority: 0.8 },

    // Tier 4: Peripheral central districts
    { slug: 'paris-10', priority: 0.75 },
    { slug: 'paris-11', priority: 0.75 },
    { slug: 'paris-12', priority: 0.75 },
    { slug: 'paris-13', priority: 0.75 },
    { slug: 'paris-14', priority: 0.75 },
    { slug: 'paris-15', priority: 0.75 },
    { slug: 'paris-17', priority: 0.75 },

    // Tier 5: Outer districts
    { slug: 'paris-18', priority: 0.7 },
    { slug: 'paris-19', priority: 0.7 },
    { slug: 'paris-20', priority: 0.7 },
  ]
}

/**
 * Gets configuration for major French cities
 */
function getMajorCitiesConfig(): SeoLocation[] {
  return [
    { slug: 'paris', priority: 0.95 },
    { slug: 'lyon', priority: 0.9 },
    { slug: 'toulouse', priority: 0.85 },
    { slug: 'marseille', priority: 0.8 },
    { slug: 'nice', priority: 0.8 },
    { slug: 'nantes', priority: 0.8 },
    { slug: 'strasbourg', priority: 0.8 },
    { slug: 'bordeaux', priority: 0.8 },
    { slug: 'lille', priority: 0.75 },
    { slug: 'montpellier', priority: 0.75 },
  ]
}

/**
 * Gets configuration for Lyon districts
 */
function getLyonDistrictsConfig(): SeoLocation[] {
  return [
    { slug: 'lyon-1', priority: 0.8 },
    { slug: 'lyon-2', priority: 0.8 },
    { slug: 'lyon-3', priority: 0.75 },
    { slug: 'lyon-4', priority: 0.75 },
    { slug: 'lyon-5', priority: 0.75 },
    { slug: 'lyon-6', priority: 0.75 },
    { slug: 'lyon-7', priority: 0.7 },
    { slug: 'lyon-8', priority: 0.7 },
    { slug: 'lyon-9', priority: 0.7 },
  ]
}

/**
 * Filters and maps remaining French cities
 */
function getRemainingCitiesConfig(): SeoLocation[] {
  return FRENCH_CITIES.filter(
    (city) =>
      !city.slug.startsWith('paris-') &&
      !city.slug.startsWith('lyon-') &&
      !(MAJOR_CITIES as readonly string[]).includes(city.slug)
  ).map((city) => ({
    slug: city.slug,
    priority:
      city.population > 100000 ? PRIORITY_CONFIG.MEDIUM_PRIORITY : PRIORITY_CONFIG.LOW_PRIORITY,
  }))
}

/**
 * Gets configuration for French regions
 */
function getRegionsConfig(): SeoLocation[] {
  return FRENCH_REGIONS.map((region) => ({
    slug: region.slug,
    priority: (HIGH_PRIORITY_REGIONS as readonly string[]).includes(region.slug)
      ? PRIORITY_CONFIG.MEDIUM_PRIORITY
      : PRIORITY_CONFIG.LOW_PRIORITY,
  }))
}

/**
 * Main sitemap generation function
 * Generates a comprehensive sitemap with SEO-optimized priorities
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages configuration
  const staticPagesConfig: StaticPageConfig[] = [
    { path: '', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.HOMEPAGE },
    { path: '/services', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.HIGH_PRIORITY },
    { path: '/services/creation-sites-web', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.MEDIUM_HIGH_PRIORITY },
    { path: '/services/refonte-sites-web', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.MEDIUM_HIGH_PRIORITY },
    { path: '/services/optimisation-seo', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.MEDIUM_HIGH_PRIORITY },
    { path: '/services/maintenance-support', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.MEDIUM_HIGH_PRIORITY },
    { path: '/projects', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.HIGH_PRIORITY },
    { path: '/tarifs', changeFrequency: 'monthly', priority: PRIORITY_CONFIG.MEDIUM_HIGH_PRIORITY },
    { path: '/faq', changeFrequency: 'monthly', priority: PRIORITY_CONFIG.MEDIUM_PRIORITY },
    {
      path: '/contact',
      changeFrequency: 'monthly',
      priority: PRIORITY_CONFIG.MEDIUM_HIGH_PRIORITY,
    },
    { path: '/blog', changeFrequency: 'weekly', priority: PRIORITY_CONFIG.MEDIUM_PRIORITY },
    {
      path: '/mentions-legales',
      changeFrequency: 'yearly',
      priority: PRIORITY_CONFIG.MINIMAL_PRIORITY,
    },
  ]

  // Locale-specific priority adjustments
  const localeConfigs = {
    fr: { basePages: staticPagesConfig },
    en: {
      basePages: staticPagesConfig.map((page) => ({
        ...page,
        priority: page.path === '' ? PRIORITY_CONFIG.HOMEPAGE : Math.max(0.5, page.priority - 0.1),
      })),
    },
    ru: {
      basePages: staticPagesConfig.map((page) => ({
        ...page,
        priority: page.path === '' ? PRIORITY_CONFIG.HOMEPAGE : Math.max(0.4, page.priority - 0.2),
      })),
    },
  } as const

  // Generate static pages for all locales
  const allStaticPages: SitemapEntry[] = [
    ...generateStaticPagesForLocale('fr', localeConfigs.fr.basePages),
    ...generateStaticPagesForLocale('en', localeConfigs.en.basePages),
    ...generateStaticPagesForLocale('ru', localeConfigs.ru.basePages),
  ]

  // Collect all SEO location configurations
  const allSeoLocations: SeoLocation[] = [
    ...getParisDistrictsConfig(),
    ...getMajorCitiesConfig(),
    ...getLyonDistrictsConfig(),
    ...getRemainingCitiesConfig(),
    ...getRegionsConfig(),
  ]

  // Generate SEO pages for all locations
  const seoPages = generateSeoLocationPages(allSeoLocations)

  return [...allStaticPages, ...seoPages]
}
