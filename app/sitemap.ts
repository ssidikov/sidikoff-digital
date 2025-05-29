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

function staticPage({
  path = '',
  anchor = '',
  changeFrequency,
  priority,
}: {
  path?: string
  anchor?: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}) {
  const url = anchor ? `${baseUrl}/#${anchor}` : path ? `${baseUrl}/${path}` : baseUrl
  return {
    url,
    lastModified: currentDate,
    changeFrequency,
    priority,
    alternates: makeAlternates(url),
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    staticPage({ changeFrequency: 'weekly', priority: 1.0 }),
    staticPage({ anchor: 'services', changeFrequency: 'weekly', priority: 0.9 }),
    staticPage({ anchor: 'portfolio', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: 'mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
  ]

  const projectPages = projects.map((project) => {
    const url = `${baseUrl}/projects/${project.id}`
    return {
      url,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: makeAlternates(url),
    }
  })

  return [...staticPages, ...projectPages]
}
