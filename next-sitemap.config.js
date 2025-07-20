const config = {
  siteUrl: 'https://sidikoff.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin',
    '/admin/*',
    '/studio',
    '/studio/*',
    '/api/*',
    '/404',
    '/500',
    '/en/404',
    '/ru/404'
  ],
  additionalPaths: async (config) => {
    const result = []
    
    // Static pages with localization
    const staticPages = [
      '/',
      '/about',
      '/services',
      '/projects',
      '/contact',
      '/mentions-legales'
    ]
    
    // Add French pages (default) - no prefix
    staticPages.forEach(page => {
      result.push({
        loc: page,
        changefreq: 'weekly',
        priority: page === '/' ? 1.0 : 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `https://sidikoff.com${page}`,
            hreflang: 'fr'
          },
          {
            href: `https://sidikoff.com/en${page}`,
            hreflang: 'en'
          },
          {
            href: `https://sidikoff.com/ru${page}`,
            hreflang: 'ru'
          },
          {
            href: `https://sidikoff.com${page}`,
            hreflang: 'x-default'
          }
        ]
      })
    })
    
    // Add English pages
    staticPages.forEach(page => {
      if (page !== '/mentions-legales') { // This page is only in French
        result.push({
          loc: `/en${page}`,
          changefreq: 'weekly',
          priority: page === '/' ? 0.9 : 0.7,
          lastmod: new Date().toISOString(),
          alternateRefs: [
            {
              href: `https://sidikoff.com${page}`,
              hreflang: 'fr'
            },
            {
              href: `https://sidikoff.com/en${page}`,
              hreflang: 'en'
            },
            {
              href: `https://sidikoff.com/ru${page}`,
              hreflang: 'ru'
            },
            {
              href: `https://sidikoff.com${page}`,
              hreflang: 'x-default'
            }
          ]
        })
      }
    })
    
    // Add Russian pages
    staticPages.forEach(page => {
      if (page !== '/mentions-legales') { // This page is only in French
        result.push({
          loc: `/ru${page}`,
          changefreq: 'weekly',
          priority: page === '/' ? 0.9 : 0.7,
          lastmod: new Date().toISOString(),
          alternateRefs: [
            {
              href: `https://sidikoff.com${page}`,
              hreflang: 'fr'
            },
            {
              href: `https://sidikoff.com/en${page}`,
              hreflang: 'en'
            },
            {
              href: `https://sidikoff.com/ru${page}`,
              hreflang: 'ru'
            },
            {
              href: `https://sidikoff.com${page}`,
              hreflang: 'x-default'
            }
          ]
        })
      }
    })

    return result
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/studio',
          '/api',
          '/_next',
          '/404',
          '/500'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin',
          '/studio',
          '/api',
          '/_next'
        ]
      }
    ],
    additionalSitemaps: [
      'https://sidikoff.com/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom transform for different page types
    let priority = 0.5
    let changefreq = 'weekly'
    
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/blog/')) {
      priority = 0.7
      changefreq = 'weekly'
    } else if (path.includes('/projects/')) {
      priority = 0.6
      changefreq = 'monthly'
    } else if (path.includes('/services')) {
      priority = 0.8
      changefreq = 'weekly'
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  }
}

module.exports = config
