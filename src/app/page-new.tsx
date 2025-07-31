import {
  generateSEOMetadata,
  generateLanguageAlternates,
  createCanonicalUrl,
} from '@/lib/seo-utils'
import { getDictionary } from '@/lib/dictionaries'
import { HomeClient } from '@/components/HomeClient'

export async function generateMetadata() {
  const dict = await getDictionary('fr')

  return generateSEOMetadata({
    title: dict.hero.title,
    description: dict.hero.subtitle,
    locale: 'fr',
    canonicalUrl: createCanonicalUrl('/', 'fr'),
    alternateLanguages: generateLanguageAlternates(
      process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com',
      ['fr', 'en', 'ru']
    ),
    ogImage: '/images/og-homepage.jpg',
  })
}

export default async function HomePage() {
  const dict = await getDictionary('fr')

  return <HomeClient dictionary={dict} />
}
