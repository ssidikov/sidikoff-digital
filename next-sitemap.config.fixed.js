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
    '/500'
  ],
  additionalPaths: async (config) => {
    const result = []
    
    // Static pages
    const staticPages = [
      { path: '/', priority: 1.0 },
      { path: '/about', priority: 0.8 },
      { path: '/services', priority: 0.8 },
      { path: '/projects', priority: 0.8 },
      { path: '/contact', priority: 0.8 },
      { path: '/mentions-legales', priority: 0.6 }
    ]
    
    // Add French pages (default)
    staticPages.forEach(({ path, priority }) => {
      result.push({
        loc: path,
        changefreq: 'weekly',
        priority,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `https://sidikoff.com${path}`,
            hreflang: 'fr'
          },
          {
            href: `https://sidikoff.com/en${path}`,
            hreflang: 'en'
          },
          {
            href: `https://sidikoff.com/ru${path}`,
            hreflang: 'ru'
          },
          {
            href: `https://sidikoff.com${path}`,
            hreflang: 'x-default'
          }
        ]
      })
    })
    
    // Add English pages
    staticPages.forEach(({ path, priority }) => {
      if (path !== '/mentions-legales') { // French only page
        result.push({
          loc: `/en${path}`,
          changefreq: 'weekly',
          priority: priority * 0.9,
          lastmod: new Date().toISOString(),
          alternateRefs: [
            {
              href: `https://sidikoff.com${path}`,
              hreflang: 'fr'
            },
            {
              href: `https://sidikoff.com/en${path}`,
              hreflang: 'en'
            },
            {
              href: `https://sidikoff.com/ru${path}`,
              hreflang: 'ru'
            },
            {
              href: `https://sidikoff.com${path}`,
              hreflang: 'x-default'
            }
          ]
        })
      }
    })
    
    // Add Russian pages
    staticPages.forEach(({ path, priority }) => {
      if (path !== '/mentions-legales') { // French only page
        result.push({
          loc: `/ru${path}`,
          changefreq: 'weekly',
          priority: priority * 0.9,
          lastmod: new Date().toISOString(),
          alternateRefs: [
            {
              href: `https://sidikoff.com${path}`,
              hreflang: 'fr'
            },
            {
              href: `https://sidikoff.com/en${path}`,
              hreflang: 'en'
            },
            {
              href: `https://sidikoff.com/ru${path}`,
              hreflang: 'ru'
            },
            {
              href: `https://sidikoff.com${path}`,
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
        disallow: ['/admin', '/studio', '/api']
      }
    ],
    additionalSitemaps: []
  },
  transform: async (config, path) => {
    // Custom transform for specific paths
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
