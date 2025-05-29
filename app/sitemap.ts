import { MetadataRoute } from 'next'
import { projects } from '@/data/portfolio-data'

const baseUrl = 'https://www.sidikoff.com'
const currentDate = new Date().toISOString()

function makeAlternates(url: string) {
  return {
    languages: {
      fr: url,
      en: url,
      ru: url,
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with multilingual support
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      alternates: makeAlternates(baseUrl),
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: makeAlternates(`${baseUrl}/#services`),
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: makeAlternates(`${baseUrl}/#portfolio`),
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: makeAlternates(`${baseUrl}/mentions-legales`),
    },
  ]
  // Dynamic project pages - using actual project IDs from data
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: makeAlternates(`${baseUrl}/projects/${project.id}`),
  }))

  return [...staticPages, ...projectPages]
}
