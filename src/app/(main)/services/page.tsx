import { Services } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { Metadata } from 'next'

import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return generatePageMetadata(
    `${dictionary.services.title}`,
    dictionary.services.subtitle,
    '/services',
    locale,
    {
      ogImage: '/images/services/web-development.webp',
      ogType: 'website',
    },
  )
}

export default async function ServicesPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return <Services dictionary={dictionary.services} locale={locale} className='pt-[140px]' />
}
