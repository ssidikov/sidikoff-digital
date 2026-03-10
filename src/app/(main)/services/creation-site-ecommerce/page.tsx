import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import EcommerceLandingContent from '@/components/EcommerceLandingContent'
import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)
  const t = dictionary.ecommerce_landing

  return generatePageMetadata(
    t.meta_title,
    t.meta_description,
    '/services/creation-site-ecommerce',
    locale,
    {
      keywords: t.keywords,
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    },
  )
}

export default async function EcommerceLandingPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return <EcommerceLandingContent dictionary={dictionary} locale={locale} />
}
