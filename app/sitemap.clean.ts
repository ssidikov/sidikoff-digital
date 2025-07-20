import { MetadataRoute } from 'next'
import { projects } from '@/data/portfolio-data'

const baseUrl = 'https://sidikoff.com'
const currentDate = new Date().toISOString()

function makeAlternates(path: string) {
  return {
    languages: {
      'fr': `${baseUrl}${path}`,
      'en': `${baseUrl}/en${path}`,
      'ru': `${baseUrl}/ru${path}`,
      'x-default': `${baseUrl}${path}`,
    }
  }
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    // Homepage (French - default)
    staticPage({ path: '', changeFrequency: 'daily', priority: 1.0 }),
    
    // Main pages (French - default)
    staticPage({ path: '/about', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: '/services', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: '/projects', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: '/contact', changeFrequency: 'weekly', priority: 0.8 }),
    staticPage({ path: '/mentions-legales', changeFrequency: 'monthly', priority: 0.6 }),
    
    // English pages
    staticPage({ path: '/en', changeFrequency: 'daily', priority: 0.9 }),
    staticPage({ path: '/en/about', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/en/services', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/en/projects', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/en/contact', changeFrequency: 'weekly', priority: 0.7 }),
    
    // Russian pages
    staticPage({ path: '/ru', changeFrequency: 'daily', priority: 0.9 }),
    staticPage({ path: '/ru/about', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/ru/services', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/ru/projects', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/ru/contact', changeFrequency: 'weekly', priority: 0.7 }),
  ]

  // Individual project pages
  const projectPages = projects.flatMap((project) => [
    // French (default)
    {
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: makeAlternates(`/projects/${project.id}`),
    },
    // English
    {
      url: `${baseUrl}/en/projects/${project.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: makeAlternates(`/projects/${project.id}`),
    },
    // Russian
    {
      url: `${baseUrl}/ru/projects/${project.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: makeAlternates(`/projects/${project.id}`),
    },
  ])

  return [...staticPages, ...projectPages]
}
