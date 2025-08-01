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

    return paths
  },
}
