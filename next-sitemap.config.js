/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sidikoff.com',
  generateRobotsTxt: true, // Генерация robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/studio'], // исключить определённые страницы
  generateIndexSitemap: false,
  additionalPaths: async () => {
    const paths = []
    const locales = ['fr', 'en', 'ru']
    
    // Add localized paths
    const routes = ['', '/contact', '/projects', '/services', '/mentions-legales']
    
    routes.forEach(route => {
      locales.forEach(locale => {
        if (locale === 'fr') {
          // French is default, no locale prefix
          paths.push({
            loc: route || '/',
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
          })
        } else {
          // Other locales have prefix
          paths.push({
            loc: `/${locale}${route}`,
            changefreq: 'weekly', 
            priority: 0.7,
            lastmod: new Date().toISOString(),
          })
        }
      })
    })
    
    return paths
  },
}
