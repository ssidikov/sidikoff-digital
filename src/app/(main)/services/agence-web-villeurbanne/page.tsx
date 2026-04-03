import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo-utils'
import AgenceVilleurbanneClient from './AgenceVilleurbanneClient'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Villeurbanne | Création de Site Internet & SEO dans le Grand Lyon',
    'Votre agence web experte à Villeurbanne. Création de sites internet sur-mesure, développement logiciel métier, applications e-commerce et SEO. Obtenez un devis gratuit.',
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
