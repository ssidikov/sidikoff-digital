import { MetadataRoute } from 'next'
import { projects } from '@/data/portfolio-data'

const baseUrl = 'https://www.sidikoff.com'
const currentDate = new Date().toISOString()

const locales = ['fr', 'en', 'ru'] as const

function makeAlternates(path: string) {
  const alternates: Record<string, string> = {}
  locales.forEach((locale) => {
    alternates[locale] = `${baseUrl}/${locale}${path}`
  })
  return { languages: alternates }
}

function staticPage({
  path = '',
  changeFrequency,
  priority,
}: {
  path?: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}) {
  const url = path ? `${baseUrl}${path}` : baseUrl
  return {
    url,
    lastModified: currentDate,
    changeFrequency,
    priority,
    alternates: makeAlternates(path),
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Только главная страница и другие отдельные страницы
  const staticPages = [
    staticPage({ path: '/', changeFrequency: 'weekly', priority: 1.0 }),
    staticPage({ path: '/projects', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
  ]

  const projectPages = projects.flatMap((project) =>
    locales.map((locale) => {
      const path = `/${locale}/projects/${project.id}`
      return {
        url: `${baseUrl}${path}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: makeAlternates(`/projects/${project.id}`),
      }
    })
  )

  return [...staticPages, ...projectPages]
}
