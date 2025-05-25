import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sidikoff-digital.fr'
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
          en: `${baseUrl}/en`,
          ru: `${baseUrl}/ru`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/about`,
          en: `${baseUrl}/en/about`,
          ru: `${baseUrl}/ru/about`,
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
          fr: `${baseUrl}/services`,
          en: `${baseUrl}/en/services`,
          ru: `${baseUrl}/ru/services`,
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
          fr: `${baseUrl}/portfolio`,
          en: `${baseUrl}/en/portfolio`,
          ru: `${baseUrl}/ru/portfolio`,
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
        en: `${baseUrl}/en/projects/${slug}`,
        ru: `${baseUrl}/ru/projects/${slug}`,
      },
    },
  }))

  return [...staticPages, ...projectPages]
}
