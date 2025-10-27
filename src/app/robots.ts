import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/fr/', // Allow /fr/ paths since they redirect to canonical URLs
        ],
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
          '/seo/', // Block all deleted SEO pages
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
        allow: [
          '/',
          '/fr/', // Allow /fr/ paths for Googlebot
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/studio/',
          '/private/',
          '/seo/', // Block all deleted SEO pages
        ],
        // Note: Googlebot ignores crawlDelay directive
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/fr/', // Allow /fr/ paths for Bingbot
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/studio/',
          '/private/',
          '/seo/', // Block all deleted SEO pages
        ],
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
