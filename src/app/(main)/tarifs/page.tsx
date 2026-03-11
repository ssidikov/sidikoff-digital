import { Metadata } from 'next'
import { Pricing } from '@/sections'
import common from '@/locales/fr/common.json'
import { generatePageMetadata } from '@/lib/seo-utils'

export async function generateMetadata(): Promise<Metadata> {
  const title = common?.pricing?.title ?? 'Tarifs & Prix — Création de Sites Web'

  const description =
    common?.pricing?.description ||
    'Découvrez nos tarifs transparents pour la création de sites web. Solutions adaptées à tous les budgets : site vitrine, site professionnel et solutions sur mesure.'

  return generatePageMetadata(title, description, '/tarifs', 'fr', {
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

export default function TarifsPage() {
  return <Pricing className='pt-[140px]' showGuide={true} />
}
