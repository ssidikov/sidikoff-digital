import { ErrorBoundary } from '@/components/ErrorBoundary'
import { FAQ } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { Metadata } from 'next'

import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return generatePageMetadata(`${dictionary.faq.title}`, dictionary.faq.subtitle, '/faq', locale, {
    ogImage: '/images/opengraph-fr.png',
    ogType: 'website',
  })
}

export default async function FAQPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return (
    <ErrorBoundary>
      <FAQ dictionary={dictionary.faq} locale={locale} className='pt-[140px]' />
    </ErrorBoundary>
  )
}
