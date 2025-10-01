import { ErrorBoundary } from '@/components/ErrorBoundary'
import { FAQ } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'
import SEOLinks from '@/components/SEOLinks'
import { generatePageMetadata } from '@/lib/seo-utils'

interface FAQPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return generatePageMetadata(
    `${dictionary.faq.title} | SIDIKOFF DIGITAL`,
    dictionary.faq.subtitle,
    '/faq',
    locale,
    {
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    }
  )
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      <SEOLinks locale={locale} />
      <LocaleProvider locale={locale}>
        <div className='min-h-screen'>
          <main className='m-0 p-0'>
            <ErrorBoundary>
              <FAQ dictionary={dictionary.faq} locale={locale} className='pt-[140px]' />
            </ErrorBoundary>
          </main>
        </div>
      </LocaleProvider>
    </>
  )
}
