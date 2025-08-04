import { Contact } from '@/sections'
import { defaultLocale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'
import { generateBreadcrumbSchema, getPageBreadcrumbs } from '@/lib/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale)
  const breadcrumbs = getPageBreadcrumbs('/contact', defaultLocale)
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return {
    title: `${dictionary.contact.title} | SIDIKOFF DIGITAL`,
    description: dictionary.contact.subtitle,
    other: {
      'script:ld+json': JSON.stringify(breadcrumbSchema),
    },
  }
}

export default async function ContactPage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
        <main className='m-0 p-0'>
          <Contact dictionary={dictionary.contact} locale={defaultLocale} className='pt-[140px]' />
        </main>
      </div>
    </LocaleProvider>
  )
}
