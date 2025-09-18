import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sidikoff.com'
  const currentDate = new Date()

  const routes = [
    '',
    '/contact',
    '/projects',
    '/services',
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

  // French pages (default, no prefix)
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '/blog' ? 'daily' : 'weekly',
      priority: route === '' ? 1.0 : route === '/contact' ? 0.9 : 0.7,
    })
  })

  // English pages
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/en${route}`,
      lastModified: currentDate,
      changeFrequency: route === '/blog' ? 'daily' : 'weekly',
      priority: route === '' ? 0.8 : route === '/contact' ? 0.7 : 0.6,
    })
  })

  // Russian pages
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/ru${route}`,
      lastModified: currentDate,
      changeFrequency: route === '/blog' ? 'daily' : 'weekly',
      priority: route === '' ? 0.8 : route === '/contact' ? 0.7 : 0.6,
    })
  })

  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
