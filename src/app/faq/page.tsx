import { FAQ } from '@/sections'
import { defaultLocale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'
import { generateBreadcrumbSchema, getPageBreadcrumbs } from '@/lib/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale)
  const breadcrumbs = getPageBreadcrumbs('/faq', defaultLocale)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return {
    title: `${dictionary.faq.title} | SIDIKOFF DIGITAL`,
    description: dictionary.faq.subtitle,
    other: {
      'script:ld+json': JSON.stringify(breadcrumbSchema),
    },
  }
}

export default async function FAQPage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
        <main className='m-0 p-0'>
          <FAQ dictionary={dictionary.faq} locale={defaultLocale} className='pt-[140px]' />
        </main>
      </div>
    </LocaleProvider>
  )
}
