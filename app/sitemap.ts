import { MetadataRoute } from 'next'
import { projects } from '@/data/portfolio-data'
import { getPostsForSitemap } from '@/lib/blog-api'

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages for each language
  const staticPages = [
    // Homepage for each language - HIGHEST PRIORITY (includes About section)
    staticPage({ path: '', changeFrequency: 'daily', priority: 1.0 }), // Default (French)
    staticPage({ path: '/fr', changeFrequency: 'daily', priority: 1.0 }),
    staticPage({ path: '/en', changeFrequency: 'daily', priority: 1.0 }),
    staticPage({ path: '/ru', changeFrequency: 'daily', priority: 1.0 }),

    // Blog pages for each language - HIGH PRIORITY
    staticPage({ path: '/blog', changeFrequency: 'daily', priority: 0.8 }), // Default (French)
    staticPage({ path: '/fr/blog', changeFrequency: 'daily', priority: 0.8 }),
    staticPage({ path: '/en/blog', changeFrequency: 'daily', priority: 0.8 }),
    staticPage({ path: '/ru/blog', changeFrequency: 'daily', priority: 0.8 }),

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

  // Get blog posts for sitemap with error handling
  let blogPages: MetadataRoute.Sitemap = []
  try {
    // Only fetch blog posts if Sanity environment variables are available
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET) {
      const blogPosts = await getPostsForSitemap()
      blogPages = blogPosts.flatMap((post) => [
        // French blog posts (default)
        {
          url: `${baseUrl}/blog/${post.slug.fr.current}`,
          lastModified: post._updatedAt,
          changeFrequency: 'weekly' as const,
          priority: 0.6,
          alternates: {
            languages: {
              fr: `${baseUrl}/blog/${post.slug.fr.current}`,
              en: `${baseUrl}/en/blog/${post.slug.en.current}`,
            },
          },
        },
        // English blog posts
        {
          url: `${baseUrl}/en/blog/${post.slug.en.current}`,
          lastModified: post._updatedAt,
          changeFrequency: 'weekly' as const,
          priority: 0.6,
          alternates: {
            languages: {
              fr: `${baseUrl}/blog/${post.slug.fr.current}`,
              en: `${baseUrl}/en/blog/${post.slug.en.current}`,
            },
          },
        },
      ])
    } else {
      console.warn('Sanity environment variables not available, skipping blog posts in sitemap')
    }
  } catch (error) {
    console.warn('Failed to fetch blog posts for sitemap:', error)
    // Continue without blog posts if there's an error
  }
  // Individual project pages for each language - LOWER PRIORITY than main pages
  const projectPages = projects.flatMap((project) => [
    // Default language (French) without prefix
    {
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4, // Reduced priority for individual projects
      alternates: makeAlternates(`/projects/${project.id}`),
    },
    // With language prefixes (for non-default languages)
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projects/${project.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.4, // Reduced priority for individual projects
      alternates: makeAlternates(`/projects/${project.id}`),
    })),
  ])

  return [...staticPages, ...blogPages, ...projectPages]
}
