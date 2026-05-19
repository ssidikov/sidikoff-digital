import { Metadata } from 'next'
import { generatePageMetadata, generateBreadcrumbStructuredData, generateServiceSchema, DEFAULT_SEO } from '@/lib/seo-utils'
import NantesLandingClient from './NantesLandingClient'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Nantes | Sidikoff',
    'Agence web à Nantes spécialisée en création de site internet, SEO local et solutions digitales sur mesure pour entreprises de Loire-Atlantique et startups.',
    '/services/agence-web-nantes',
    'fr',
    {
      keywords: [
        'Agence Web Nantes',
        'Création site internet Nantes',
        'Agence digitale Nantes',
        'Développeur web Nantes',
        'SEO Nantes',
        'Refonte site web Nantes',
        'Agence marketing digital Nantes',
        'Site vitrine Nantes',
        'E-commerce Nantes',
        'Freelance web Nantes',
      ],
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    }
  )
}

export default function AgenceWebNantesPage() {
  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Nantes', url: `${DEFAULT_SEO.siteUrl}/services/agence-web-nantes` },
  ])

  const serviceSchema = generateServiceSchema({
    name: 'Agence Web Nantes — Création de Sites Internet',
    description: 'Agence web à Nantes spécialisée en création de site internet, SEO local et solutions digitales sur mesure pour entreprises de Loire-Atlantique et startups.',
    url: `${DEFAULT_SEO.siteUrl}/services/agence-web-nantes`,
    serviceType: 'Création de site internet',
    areaServed: [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ],
  })

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NantesLandingClient />
    </>
  )
}
