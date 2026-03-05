import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sidikoff.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/studio/',
          '/tmp/',
          '/_vercel/',
          '/404',
          '/500',
          '/fonts/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/studio/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/studio/', '/private/'],
        crawlDelay: 1,
      },
      // Block specific bad bots
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
        disallow: '/',
      },
      // Explicitly allow AI search and LLM bots
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'PerplexityBot',
          'CCBot',
          'OAI-SearchBot',
        ],
        allow: ['/'],
        disallow: ['/api/', '/admin/', '/studio/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
