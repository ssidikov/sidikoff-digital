/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sidikoff.com',
  generateRobotsTxt: true, // Генерация robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin'], // исключить определённые страницы
  alternateRefs: [
    {
      href: 'https://www.sidikoff.com/',
      hreflang: 'fr',
    },
    {
      href: 'https://www.sidikoff.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://www.sidikoff.com/ru',
      hreflang: 'ru',
    },
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ru'],
  },
}
