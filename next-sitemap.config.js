/** @type {import('next-sitemap').IConfig} */

// Import SEO locations from our seo-utils
const path = require('path')
const fs = require('fs')

// Function to extract all slugs from SEO_LOCATIONS
function getAllSEOSlugs() {
  try {
    // Read the seo-utils file content
    const seoUtilsPath = path.join(__dirname, 'src/lib/seo-utils.ts')
    const content = fs.readFileSync(seoUtilsPath, 'utf8')

    // Extract all slug values using regex
    const slugMatches = content.match(/slug:\s*['"`]([^'"`]+)['"`]/g)

    if (slugMatches) {
      return slugMatches
        .map((match) => {
          const slugMatch = match.match(/slug:\s*['"`]([^'"`]+)['"`]/)
          return slugMatch ? slugMatch[1] : null
        })
        .filter(Boolean)
    }

    return []
  } catch (error) {
    console.warn('Could not extract SEO slugs, falling back to basic list:', error.message)
    // Fallback to basic cities if extraction fails
    return [
      'paris',
      'marseille',
      'lyon',
      'toulouse',
      'nice',
      'nantes',
      'montpellier',
      'strasbourg',
      'bordeaux',
      'lille',
      'rennes',
      'reims',
      'toulon',
      'saint-etienne',
      'le-havre',
      'grenoble',
      'dijon',
      'angers',
      'nimes',
      'la-rochelle',
      'noisy-le-grand',
    ]
  }
}

module.exports = {
  siteUrl: 'https://www.sidikoff.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/studio'],
  generateIndexSitemap: false,
  additionalPaths: async () => {
    const paths = []
    const routes = ['', '/contact', '/projects', '/services', '/mentions-legales', '/blog']

    // Get all SEO slugs dynamically from seo-utils.ts
    const allSEOSlugs = getAllSEOSlugs()
    console.log(`Found ${allSEOSlugs.length} SEO locations for sitemap generation`)

    // Generate paths for all supported locales and routes
    const locales = ['en', 'ru'] // Removed 'fr' since it's the default locale without prefix
    const priorities = {
      default: { '': 1.0, '/contact': 0.9, '/projects': 0.9, '/services': 0.9, '/seo': 0.8 },
      en: { '': 0.8, '/contact': 0.7, '/projects': 0.7, '/services': 0.7, '/seo': 0.6 },
      ru: { '': 0.8, '/contact': 0.7, '/projects': 0.7, '/services': 0.7, '/seo': 0.6 },
    }

    // Add French (default) routes without locale prefix
    routes.forEach((route) => {
      const priority = priorities['default'][route] || 0.7
      paths.push({
        loc: route || '/',
        changefreq: route === '/blog' ? 'daily' : 'weekly',
        priority: priority,
        lastmod: new Date().toISOString(),
      })
    })

    // Add French SEO pages without locale prefix
    allSEOSlugs.forEach((slug) => {
      const priority = priorities['default']['/seo'] || 0.8
      paths.push({
        loc: `/seo/${slug}`,
        changefreq: 'monthly',
        priority: priority,
        lastmod: new Date().toISOString(),
      })
    })

    // Add other locales with prefixes
    locales.forEach((locale) => {
      // Main routes for en and ru
      routes.forEach((route) => {
        const path = `/${locale}${route}`
        const priority = priorities[locale][route] || 0.7
        paths.push({
          loc: path,
          changefreq: route === '/blog' ? 'daily' : 'weekly',
          priority: priority,
          lastmod: new Date().toISOString(),
        })
      })

      // SEO location pages for en and ru
      allSEOSlugs.forEach((slug) => {
        const path = `/${locale}/seo/${slug}`
        const priority = priorities[locale]['/seo'] || 0.6
        paths.push({
          loc: path,
          changefreq: 'monthly',
          priority: priority,
          lastmod: new Date().toISOString(),
        })
      })
    })

    return paths
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/studio'],
      },
    ],
    additionalSitemaps: [],
  },
}
