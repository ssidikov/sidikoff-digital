import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/studio/',
          '*.json',
          '/tmp/',
          '/_vercel/',
          '/404',
          '/500',
          '/fonts/',
          '/services/fullstack',
          '/services/frontend',
          '/services/backend',
          '/services/consultation',
          '/portfolio',
          '/opengraph-image',
          '/twitter-image',
          '/projects/ohmyfood',
          '/projects/fisheye',
          '/projects/learn-home',
          '/projects/kasa',
          '/projects/billed',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/', '/private/'],
        crawlDelay: 1,
      },
      // Block specific bad bots
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
