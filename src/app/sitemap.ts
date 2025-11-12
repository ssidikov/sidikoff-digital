import { MetadataRoute } from 'next'
import { getBlogPosts, type BlogPost } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // IMPORTANT: Always use canonical domain without www
  const baseUrl = 'https://sidikoff.com'
  const currentDate = new Date()

  const routes = [
    '',
    '/contact',
    '/projects',
    '/services',
    '/services/agence-web-paris',
    '/services/creation-sites-web',
    '/services/refonte-sites-web',
    '/services/optimisation-seo',
    '/services/maintenance-support',
    '/services/creation-site-ecommerce',
    '/services/creation-site-internet-agence-voyage',
    '/services/creation-site-internet-barbershop',
    '/services/creation-site-internet-boulangerie',
    '/services/creation-site-internet-freelance',
    '/services/creation-site-internet-medecin',
    '/services/creation-site-internet-photographe',
    '/services/restaurant-websites',
    '/services/creation-site-internet-paris',
    '/services/creation-site-internet-paris-16',
    '/services/creation-site-internet-lyon',
    '/services/creation-site-internet-toulouse',
    '/services/creation-site-internet-boulogne-billancourt',
    '/services/creation-site-internet-cafe-paris',
    '/blog',
    '/tarifs',
    '/faq',
    '/mentions-legales',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Récupérer les articles de blog depuis Sanity
  let blogPosts: Array<{ slug: { current: string }; publishedAt: string }> = []
  try {
    const posts = await getBlogPosts()
    blogPosts = posts.map((post: BlogPost) => ({
      slug: post.slug,
      publishedAt: post.publishedAt || currentDate.toISOString(),
    }))
  } catch (error) {
    console.warn('Failed to fetch blog posts for sitemap:', error)
  }

  // French pages (default, no prefix)
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route === '' ? '/' : route}`,
      lastModified: currentDate,
      changeFrequency: route === '/blog' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.7,
    })
  })

  // Blog posts - French
  blogPosts.forEach((post) => {
    sitemap.push({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  // English pages
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/en${route === '' ? '/' : route}`,
      lastModified: currentDate,
      changeFrequency: route === '/blog' ? 'daily' : 'weekly',
      priority: route === '' ? 0.8 : route === '/contact' ? 0.7 : 0.6,
    })
  })

  // Blog posts - English
  blogPosts.forEach((post) => {
    sitemap.push({
      url: `${baseUrl}/en/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  })

  // Russian pages
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/ru${route === '' ? '/' : route}`,
      lastModified: currentDate,
      changeFrequency: route === '/blog' ? 'daily' : 'weekly',
      priority: route === '' ? 0.8 : route === '/contact' ? 0.7 : 0.6,
    })
  })

  // Blog posts - Russian
  blogPosts.forEach((post) => {
    sitemap.push({
      url: `${baseUrl}/ru/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  })

  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
