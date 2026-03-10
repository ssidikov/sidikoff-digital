import { Contact } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  const description =
    dictionary.contact.description ||
    'Contactez SIDIKOFF DIGITAL pour discuter de votre projet web. Développement sur mesure, site vitrine, e-commerce. Devis gratuit, réponse sous 24h.'

  return generatePageMetadata(`${dictionary.contact.title}`, description, '/contact', locale, {
    ogImage: '/images/opengraph-fr.png',
    ogType: 'website',
  })
}

export default async function ContactPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return <Contact dictionary={dictionary.contact} locale={locale} className='pt-[140px]' />
}
