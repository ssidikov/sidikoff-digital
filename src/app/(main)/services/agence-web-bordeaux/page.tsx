import { Metadata } from 'next'
import { generatePageMetadata , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import BordeauxLandingClient from './BordeauxLandingClient'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Bordeaux | Sidikoff',
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
  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Bordeaux', url: `${DEFAULT_SEO.siteUrl}/services/agence-web-bordeaux` },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BordeauxLandingClient />
    </>
  )
}
