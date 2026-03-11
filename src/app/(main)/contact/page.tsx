import { Contact } from '@/sections'
import common from '@/locales/fr/common.json'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const description =
    common.contact.description ||
    'Contactez SIDIKOFF DIGITAL pour discuter de votre projet web. Développement sur mesure, site vitrine, e-commerce. Devis gratuit, réponse sous 24h.'

  return generatePageMetadata(`${common.contact.title}`, description, '/contact', 'fr', {
    ogImage: '/images/opengraph-fr.png',
    ogType: 'website',
  })
}

export default function ContactPage() {
  return <Contact className='pt-[140px]' />
}
