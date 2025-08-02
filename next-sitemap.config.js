/** @type {import('next-sitemap').IConfig} */
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

    // French Regions - All 18 regions of France
    const FRENCH_REGIONS = [
      { slug: 'ile-de-france' },
      { slug: 'auvergne-rhone-alpes' },
      { slug: 'nouvelle-aquitaine' },
      { slug: 'occitanie' },
      { slug: 'hauts-de-france' },
      { slug: 'grand-est' },
      { slug: 'provence-alpes-cote-azur' },
      { slug: 'bretagne' },
      { slug: 'pays-de-la-loire' },
      { slug: 'normandie' },
      { slug: 'bourgogne-franche-comte' },
      { slug: 'centre-val-de-loire' },
      { slug: 'corse' },
      { slug: 'guadeloupe' },
      { slug: 'martinique' },
      { slug: 'guyane' },
      { slug: 'la-reunion' },
      { slug: 'mayotte' },
    ]

    // Major French Cities - 36 largest cities
    const FRENCH_CITIES = [
      { slug: 'paris' },
      { slug: 'marseille' },
      { slug: 'lyon' },
      { slug: 'toulouse' },
      { slug: 'nice' },
      { slug: 'nantes' },
      { slug: 'montpellier' },
      { slug: 'strasbourg' },
      { slug: 'bordeaux' },
      { slug: 'lille' },
      { slug: 'rennes' },
      { slug: 'reims' },
      { slug: 'saint-etienne' },
      { slug: 'toulon' },
      { slug: 'le-havre' },
      { slug: 'grenoble' },
      { slug: 'dijon' },
      { slug: 'angers' },
      { slug: 'nimes' },
      { slug: 'villeurbanne' },
      { slug: 'saint-denis-reunion' },
      { slug: 'aix-en-provence' },
      { slug: 'clermont-ferrand' },
      { slug: 'brest' },
      { slug: 'limoges' },
      { slug: 'tours' },
      { slug: 'amiens' },
      { slug: 'perpignan' },
      { slug: 'metz' },
      { slug: 'besancon' },
      { slug: 'boulogne-billancourt' },
      { slug: 'orleans' },
      { slug: 'mulhouse' },
      { slug: 'rouen' },
      { slug: 'caen' },
      { slug: 'nancy' },
    ]

    // Combine all SEO locations (custom + regions + cities)
    const SEO_LOCATIONS = [
      { slug: 'paris-16' }, // Custom high-priority location
      ...FRENCH_REGIONS,
      ...FRENCH_CITIES,
    ]

    // Standard routes
    routes.forEach((route) => {
      const routePath = route || '/'

      // French (default) - no prefix
      paths.push({
        loc: routePath === '/' ? '/' : route,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })

      // English version
      paths.push({
        loc: `/en${routePath === '/' ? '' : route}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })

      // Russian version
      paths.push({
        loc: `/ru${routePath === '/' ? '' : route}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })
    })

    // SEO location pages
    SEO_LOCATIONS.forEach((location) => {
      // French (default) - no prefix
      paths.push({
        loc: `/seo/${location.slug}`,
        changefreq: 'monthly',
        priority: 0.8, // Higher priority for SEO pages
        lastmod: new Date().toISOString(),
      })

      // English version
      paths.push({
        loc: `/en/seo/${location.slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })

      // Russian version
      paths.push({
        loc: `/ru/seo/${location.slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })
    })

    return paths
  },
}
