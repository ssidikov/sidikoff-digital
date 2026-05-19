import { Metadata } from 'next'
import {
  generatePageMetadata,
  generateServiceSchema,
  generateBreadcrumbStructuredData,
  DEFAULT_SEO,
  createCanonicalUrl,
} from '@/lib/seo-utils'
import AgenceVilleurbanneClient from './AgenceVilleurbanneClient'

const PAGE_SLUG = 'services/agence-web-villeurbanne'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Villeurbanne | Sidikoff',
    'Création de site internet à Villeurbanne, expert en SEO Villeurbanne et solutions web sur mesure pour entreprises et indépendants.',
    `/services/agence-web-villeurbanne`,
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
        'E-commerce',
      ],
      ogImage: '/images/opengraph-fr.png',
      ogType: 'website',
    },
  )
}

export default function AgenceWebVilleurbannePage() {
  const pageUrl = createCanonicalUrl(PAGE_SLUG, 'fr')

  const serviceSchema = generateServiceSchema({
    name: 'Agence Web Villeurbanne - Sidikoff Digital',
    description:
      'Expertise en création de sites internet, référencement SEO et génie logiciel à Villeurbanne. Solutions sur-mesure pour entreprises.',
    url: pageUrl,
    serviceType: 'Agence Web & SEO',
    areaServed: [
      'Villeurbanne',
      'Gratte-Ciel',
      'Charpennes',
      'Cusset',
      'La Doua',
      'Tonkin',
      'Lyon',
      'Métropole de Lyon',
      'Grand Lyon',
    ],
  })

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Villeurbanne', url: pageUrl },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AgenceVilleurbanneClient />
    </>
  )
}
