import { Contact } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo-utils'

interface ContactPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  const description =
    dictionary.contact.description ||
    'Contactez SIDIKOFF DIGITAL pour discuter de votre projet web. Développement sur mesure, site vitrine, e-commerce. Devis gratuit, réponse sous 24h.'

  return generatePageMetadata(
    `${dictionary.contact.title} | SIDIKOFF DIGITAL`,
    description,
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
    <LocaleProvider locale={locale}>
      <div className='min-h-screen'>
        <main className='m-0 p-0'>
          <Contact dictionary={dictionary.contact} locale={locale} className='pt-[140px]' />
        </main>
      </div>
    </LocaleProvider>
  )
}
