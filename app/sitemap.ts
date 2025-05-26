import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sidikoff.com'
  const currentDate = new Date().toISOString()
  // Static pages with multilingual support
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          fr: baseUrl,
          en: `${baseUrl}`,
          ru: `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/#services`,
          en: `${baseUrl}/#services`,
          ru: `${baseUrl}/#services`,
        },
      },
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/#portfolio`,
          en: `${baseUrl}/#portfolio`,
          ru: `${baseUrl}/#portfolio`,
        },
      },
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          fr: `${baseUrl}/mentions-legales`,
          en: `${baseUrl}/mentions-legales`,
          ru: `${baseUrl}/mentions-legales`,
        },
      },
    },
  ]

  // Dynamic project pages
  const projectSlugs = [
    'booki',
    'ohmyfood',
    'game-on',
    'fisheye',
    'petits-plats',
    'learn-home',
    'kasa',
    'sport-see',
    'argent-bank',
    'hrnet',
    'burger-house',
    'cookies',
    'billed',
    'euclid',
  ]

  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: {
      languages: {
        fr: `${baseUrl}/projects/${slug}`,
        en: `${baseUrl}/projects/${slug}`,
        ru: `${baseUrl}/projects/${slug}`,
      },
    },
  }))

  return [...staticPages, ...projectPages]
}
