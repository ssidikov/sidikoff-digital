import { Contact } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'
import SEOLinks from '@/components/SEOLinks'
import { generatePageMetadata } from '@/lib/seo-utils'

interface ContactPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return generatePageMetadata(
    `${dictionary.contact.title} | SIDIKOFF DIGITAL`,
    dictionary.contact.subtitle,
    '/contact',
    locale,
    {
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    }
  )
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <>
      <SEOLinks locale={locale} />
      <LocaleProvider locale={locale}>
        <div className='min-h-screen'>
          <main className='m-0 p-0'>
            <Contact dictionary={dictionary.contact} locale={locale} className='pt-[140px]' />
          </main>
        </div>
      </LocaleProvider>
    </>
  )
}
