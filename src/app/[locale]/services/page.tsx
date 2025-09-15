import { Services } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'
import SEOLinks from '@/components/SEOLinks'

interface ServicesPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.services.title} | SIDIKOFF DIGITAL`,
    description: dictionary.services.subtitle,
  }
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      <SEOLinks locale={locale} />
      <LocaleProvider locale={locale}>
        <div className='min-h-screen'>
          <main className='m-0 p-0'>
            <Services dictionary={dictionary.services} locale={locale} className='pt-[140px]' />
          </main>
        </div>
      </LocaleProvider>
    </>
  )
}
