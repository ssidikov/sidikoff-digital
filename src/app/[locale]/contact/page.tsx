import { Contact } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import { Metadata } from 'next'

interface ContactPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.contact.title} | SIDIKOFF DIGITAL`,
    description: dictionary.contact.subtitle,
  }
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
