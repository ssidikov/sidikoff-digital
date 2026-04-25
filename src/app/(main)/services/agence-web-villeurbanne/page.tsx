import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo-utils'
import AgenceVilleurbanneClient from './AgenceVilleurbanneClient'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Villeurbanne | Création Site Internet & SEO',
    'Création de site internet à Villeurbanne, SEO local et solutions web sur mesure pour entreprises et indépendants.',
    '/services/agence-web-villeurbanne',
    'fr',
    {
      keywords: [
        'Agence Web Villeurbanne',
        'Création site internet Villeurbanne',
        'Agence marketing digital Villeurbanne',
        'Développement web sur mesure Villeurbanne',
        'Refonte de site web Villeurbanne',
        'Agence SEO Villeurbanne',
        'Création logiciel métier',
        'Sites vitrines',
        'E-commerce'
      ],
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    }
  )
}

export default function AgenceWebVilleurbannePage() {
  return <AgenceVilleurbanneClient />
}
