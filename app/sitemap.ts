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
    // Homepage for each language - HIGHEST PRIORITY (includes About section)
    staticPage({ path: '', changeFrequency: 'daily', priority: 1.0 }), // Default (French)
    staticPage({ path: '/fr', changeFrequency: 'daily', priority: 1.0 }),
    staticPage({ path: '/en', changeFrequency: 'daily', priority: 1.0 }),
    staticPage({ path: '/ru', changeFrequency: 'daily', priority: 1.0 }),
    
    // Projects pages for each language - MEDIUM PRIORITY
    staticPage({ path: '/projects', changeFrequency: 'weekly', priority: 0.7 }), // Default (French)
    staticPage({ path: '/fr/projects', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/en/projects', changeFrequency: 'weekly', priority: 0.7 }),
    staticPage({ path: '/ru/projects', changeFrequency: 'weekly', priority: 0.7 }),
    
    // Legal pages for each language - LOW PRIORITY
    staticPage({ path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }), // Default (French)
    staticPage({ path: '/fr/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
    staticPage({ path: '/en/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
    staticPage({ path: '/ru/mentions-legales', changeFrequency: 'yearly', priority: 0.3 }),
  ]
  
  // Individual project pages for each language - LOWER PRIORITY than main pages
  const projectPages = projects.flatMap((project) =>
    locales.flatMap((locale) => [
      // Default language (French) without prefix
      {
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.4, // Reduced priority for individual projects
        alternates: makeAlternates(`/projects/${project.id}`),
      },
      // With language prefix
      {
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.4, // Reduced priority for individual projects
        alternates: makeAlternates(`/projects/${project.id}`),
      }
    ])
  )

  return [...staticPages, ...projectPages]
}
