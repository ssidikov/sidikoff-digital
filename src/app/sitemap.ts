import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'
  const locales = ['fr', 'en', 'ru']
  const lastModified = new Date()

  // Pages principales avec toutes les langues
  const mainPages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/projects', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/contact', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/mentions-legales', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/faq', priority: 0.6, changeFreq: 'monthly' as const },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Page racine avec redirection vers français (priorité maximale)
  sitemap.push({
    url: baseUrl,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: {
      languages: locales.reduce(
        (acc, locale) => {
          acc[locale] = `${baseUrl}/${locale}`
          return acc
        },
        {} as Record<string, string>
      ),
    },
  })

  // Ajouter pages principales multilingues
  mainPages.forEach((page) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFreq,
        priority: locale === 'fr' ? page.priority : page.priority * 0.8, // Priorité française
        alternates: {
          languages: locales.reduce(
            (acc, loc) => {
              acc[loc] = `${baseUrl}/${loc}${page.path}`
              return acc
            },
            {} as Record<string, string>
          ),
        },
      })
    })
  })

  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
