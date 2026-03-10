import { Metadata } from 'next'
import { Pricing } from '@/sections'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dict = await getDictionary(locale)

  const title = dict?.pricing?.title ?? 'Tarifs & Prix — Création de Sites Web'

  const description =
    dict?.pricing?.description ||
    'Découvrez nos tarifs transparents pour la création de sites web. Solutions adaptées à tous les budgets : site vitrine, site professionnel et solutions sur mesure.'

  return generatePageMetadata(title, description, '/tarifs', locale, {
    keywords: [
      'tarifs site web',
      'prix création site internet',
      'devis site web',
      'développement web prix',
      'création site vitrine prix',
    ],
    ogImage: '/images/prices-bg.webp',
    ogType: 'website',
  })
}

export default async function TarifsPage() {
  const locale = defaultLocale

  return <Pricing locale={locale} className='pt-[140px]' showGuide={true} />
}
