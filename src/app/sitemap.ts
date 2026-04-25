import { MetadataRoute } from 'next'
import { getBlogPosts, type BlogPost } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sidikoff.com'
  const currentDate = new Date()

  const routes = [
    '',
    '/contact',
    '/projects',
    '/services',
    '/tarifs',
    '/faq',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/blog',

    // --- Core service pages ---
    '/services/creation-sites-web',
    '/services/refonte-sites-web',
    '/services/optimisation-seo',
    '/services/maintenance-support',
    '/services/creation-site-ecommerce',

    // --- Vertical industry pages ---
    '/services/creation-site-internet-agence-voyage',
    '/services/creation-site-internet-artisan',
    '/services/creation-site-internet-avocat',
    '/services/creation-site-internet-barbershop',
    '/services/creation-site-internet-boulangerie',
    '/services/creation-site-internet-coach-sportif',
    '/services/creation-site-internet-dentiste',
    '/services/creation-site-internet-freelance',
    '/services/creation-site-internet-medecin',
    '/services/creation-site-internet-photographe',
    '/services/creation-site-internet-restaurant',
    '/services/restaurant-websites',

    // --- Paris geo pages ---
    '/services/agence-web-paris',
    '/services/creation-site-internet-paris',
    '/services/creation-site-internet-paris-16',
    '/services/agence-web-paris-6',
    '/services/agence-web-paris-7',
    '/services/agence-web-paris-14',
    '/services/agence-web-paris-15',
    '/services/agence-web-paris-17',
    '/services/agence-web-paris-19',
    '/services/creation-site-internet-cafe-paris',
    '/services/ecommerce-paris',
    '/services/react-paris',
    '/services/wordpress-paris',

    // --- Lyon geo pages ---
    '/services/agence-web-lyon',
    '/services/creation-site-internet-lyon',
    '/services/agence-web-villeurbanne',
    '/services/creation-site-web-caluire-et-cuire',
    '/services/agence-web-caluire-et-cuire',
    '/services/agence-web-bron',
    '/services/seo-bron',
    '/services/seo-caluire',
    '/services/seo-villeurbanne',
    '/services/agence-web-vaulx-en-velin',
    '/services/agence-web-venissieux',
    '/services/ecommerce-lyon',
    '/services/react-lyon',
    '/services/wordpress-lyon',

    // --- Other geo pages ---
    '/services/agence-web-bordeaux',
    '/services/agence-web-nantes',
    '/services/creation-site-internet-toulouse',
    '/services/creation-site-internet-boulogne-billancourt',
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

  // French pages (only language — default, no prefix)
  routes.forEach((route) => {
    // KEY SEO PAGES near Top 10 in GSC get priority boost
    const highPriorityRoutes = [
      '/services/agence-web-lyon',
      '/services/agence-web-paris',
      '/services/agence-web-paris-15',
      '/services/creation-site-internet-paris-16',
      '/services/agence-web-villeurbanne',
      // Phase 7 verticals — high commercial intent
      '/services/creation-site-internet-artisan',
      '/services/creation-site-internet-avocat',
      '/services/creation-site-internet-dentiste',
      '/services/creation-site-internet-restaurant',
      '/services/creation-site-internet-coach-sportif',
      '/services/creation-site-internet-medecin',
    ]
    const isHighPriority = highPriorityRoutes.includes(route)

    sitemap.push({
      url: `${baseUrl}${route === '' ? '/' : route}`,
      lastModified: currentDate,
      changeFrequency: route === '/blog' ? 'daily' : route === '' ? 'weekly' : 'weekly',
      priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : isHighPriority ? 0.85 : 0.7,
    })
  })

  // Blog posts — French only (canonical = www.sidikoff.com/blog/slug)
  blogPosts.forEach((post) => {
    // Key article about website cost: near position 8, needs high priority
    const isKeyPost = post.slug.current === 'cout-site-web-professionnel-2025'
    sitemap.push({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: isKeyPost ? 'weekly' : 'monthly',
      priority: isKeyPost ? 0.9 : 0.6, // 0.9: near top 10, actively maintained
    })
  })

  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
