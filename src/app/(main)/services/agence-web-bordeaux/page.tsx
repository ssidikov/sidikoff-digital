import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo-utils'
import BordeauxLandingClient from './BordeauxLandingClient'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Bordeaux | Création Site Internet & SEO Bordeaux',
    'Agence web à Bordeaux spécialisée en création de site internet, SEO local et solutions digitales sur mesure pour entreprises girondines et startups bordelaises.',
    '/services/agence-web-bordeaux',
    'fr',
    {
      keywords: [
        'Agence Web Bordeaux',
        'Création site internet Bordeaux',
        'Agence digitale Bordeaux',
        'Développeur web Bordeaux',
        'SEO Bordeaux',
        'Refonte site web Bordeaux',
        'Agence marketing digital Bordeaux',
        'Site vitrine Bordeaux',
        'E-commerce Bordeaux',
        'Freelance web Bordeaux',
      ],
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    }
  )
}

export default function AgenceWebBordeauxPage() {
  return <BordeauxLandingClient />
}
