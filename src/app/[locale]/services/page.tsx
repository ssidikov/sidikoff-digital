import { Services } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'

import { generatePageMetadata } from '@/lib/seo-utils'

interface ServicesPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return generatePageMetadata(
    `${dictionary.services.title} | SIDIKOFF DIGITAL`,
    dictionary.services.subtitle,
    '/services',
    locale,
    {
      ogImage: '/images/services/web-development.webp',
      ogType: 'website',
    }
  )
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <LocaleProvider locale={locale}>
      <div className='min-h-screen'>
        <main className='m-0 p-0'>
          <Services dictionary={dictionary.services} locale={locale} className='pt-[140px]' />
        </main>
      </div>
    </LocaleProvider>
  )
}
