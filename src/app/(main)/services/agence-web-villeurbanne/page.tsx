import { Metadata } from 'next'
import {
  generatePageMetadata,
  generateServiceSchema,
  generateBreadcrumbStructuredData,
  DEFAULT_SEO,
  createCanonicalUrl,
} from '@/lib/seo-utils'
import dynamic from 'next/dynamic'

// Yandex 360 Ecosystem Components & Sections
import { EcosystemCanvas } from '@/components/Yandex360/EcosystemCanvas'
import { Yandex360Hero } from '@/sections/Yandex360Hero'
import { Yandex360Ecosystem } from '@/sections/Yandex360Ecosystem'
import { Yandex360Bento } from '@/sections/Yandex360Bento'
import { Yandex360Calculator } from '@/sections/Yandex360Calculator'
import { LyonVilleurbanneSeoHub } from '@/components/seo/LyonVilleurbanneSeoHub'

// Non-critical sections — lazy loaded
const Yandex360Portfolio = dynamic(() =>
  import('@/sections/Yandex360Portfolio').then((mod) => mod.Yandex360Portfolio)
)
const Yandex360Testimonials = dynamic(() =>
  import('@/sections/Yandex360Testimonials').then((mod) => mod.Yandex360Testimonials)
)
const Yandex360FAQ = dynamic(() =>
  import('@/sections/Yandex360FAQ').then((mod) => mod.Yandex360FAQ)
)
const Yandex360Contact = dynamic(() =>
  import('@/sections/Yandex360Contact').then((mod) => mod.Yandex360Contact)
)

const PAGE_SLUG = 'services/agence-web-villeurbanne'

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata(
    'Agence Web Villeurbanne 360° | Création Site Internet & SEO Local',
    'Création de site internet sur-mesure à Villeurbanne (69100). Expert Next.js 16, SEO local et solutions web d\'élite pour PME et indépendants.',
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
        'développeur web Villeurbanne',
        'développeur web freelance Villeurbanne',
      ],
      ogImage: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
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
    <div className='relative min-h-screen bg-[#060812] selection:bg-cyan-500 selection:text-black font-sans antialiased text-slate-100'>
      <EcosystemCanvas />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className='relative z-10 m-0 p-0 overflow-x-hidden'>
        <Yandex360Hero />
        <Yandex360Ecosystem />
        <Yandex360Bento />
        <Yandex360Calculator />
        <Yandex360Portfolio />
        <Yandex360Testimonials />
        <Yandex360FAQ />
        <LyonVilleurbanneSeoHub currentPath='/services/agence-web-villeurbanne' />
        <Yandex360Contact />
      </main>
    </div>
  )
}
