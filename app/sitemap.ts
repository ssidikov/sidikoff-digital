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
  // Static pages for each language
  const staticPages = [
    // Homepage for each language
    staticPage({ path: '', changeFrequency: 'weekly', priority: 1.0 }), // Default (French)
    staticPage({ path: '/fr', changeFrequency: 'weekly', priority: 1.0 }),
    staticPage({ path: '/en', changeFrequency: 'weekly', priority: 1.0 }),
    staticPage({ path: '/ru', changeFrequency: 'weekly', priority: 1.0 }),
    
    // Projects pages for each language
    staticPage({ path: '/projects', changeFrequency: 'weekly', priority: 0.8 }), // Default (French)
    staticPage({ path: '/fr/projects', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: '/en/projects', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: '/ru/projects', changeFrequency: 'weekly', priority: 0.8 }),
    
    // Legal pages for each language
    staticPage({ path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }), // Default (French)
    staticPage({ path: '/fr/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
    staticPage({ path: '/en/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
    staticPage({ path: '/ru/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
  ]

  // Individual project pages for each language
  const projectPages = projects.flatMap((project) =>
    locales.flatMap((locale) => [
      // Default language (French) without prefix
      {
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: makeAlternates(`/projects/${project.id}`),
      },
      // With language prefix
      {
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: makeAlternates(`/projects/${project.id}`),
      }
    ])
  )

  return [...staticPages, ...projectPages]
}
