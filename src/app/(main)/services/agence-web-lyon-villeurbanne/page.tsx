import {
  createCanonicalUrl,
  generateAlternateUrls,
  generateBreadcrumbStructuredData,
  DEFAULT_SEO,
} from '@/lib/seo-utils'
import { Metadata } from 'next'
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

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Agence Web Lyon & Villeurbanne 360° | Création Site Internet & SEO'
  const description =
    'Agence web et studio informatique à Lyon & Villeurbanne (69). Création de sites Next.js 16 sur-mesure, webapps SaaS, intégration IA et SEO local. Dès 690 €, livré en 7–14 jours. Devis gratuit sous 24h ✓'

  return {
    title,
    description,
    keywords: [
      'agence web Lyon',
      'agence web Villeurbanne',
      'agence web Lyon Villeurbanne',
      'création site internet Lyon',
      'création site internet Villeurbanne',
      'développeur web Lyon',
      'développeur web Villeurbanne',
      'SEO Lyon Villeurbanne',
      'Next.js Lyon',
      'agence digitale 69',
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: createCanonicalUrl('services/agence-web-lyon-villeurbanne', 'fr'),
      languages: generateAlternateUrls('services/agence-web-lyon-villeurbanne'),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      url: 'https://www.sidikoff.com/services/agence-web-lyon-villeurbanne',
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: 'https://cdn.sidikoff.com/images/og/creation-sites-web-lyon.jpg',
          width: 1200,
          height: 630,
          alt: 'Agence Web Lyon Villeurbanne 360°',
        },
      ],
    },
  }
}

const agenceLyonVilleurbanneSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.sidikoff.com/services/agence-web-lyon-villeurbanne#webpage',
    url: 'https://www.sidikoff.com/services/agence-web-lyon-villeurbanne',
    name: 'Agence Web Lyon & Villeurbanne 360°',
    description:
      'Agence web à Lyon & Villeurbanne spécialisée en création de sites internet sur mesure, webapps et SEO local.',
    isPartOf: { '@id': 'https://www.sidikoff.com/#website' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sidikoff.com/services/agence-web-lyon-villeurbanne#service',
    name: 'Création de Sites Internet & Écosystème Web Lyon Villeurbanne',
    serviceType: 'Agence Web & Développement Sur-Mesure',
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Villeurbanne' },
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'City', name: 'Bron' },
      { '@type': 'Place', name: 'Rhône (69)' },
    ],
    provider: {
      '@type': 'Organization',
      name: 'Sidikoff Digital',
      url: 'https://www.sidikoff.com',
    },
  },
]

export default async function AgenceWebLyonVilleurbannePage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Agence Web Lyon & Villeurbanne', url: `${DEFAULT_SEO.siteUrl}/services/agence-web-lyon-villeurbanne` },
  ])

  return (
    <div className='relative min-h-screen bg-[#060812] selection:bg-cyan-500 selection:text-black font-sans antialiased text-slate-100'>
      {/* Background Interactive Canvas */}
      <EcosystemCanvas />

      {/* JSON-LD Schemas */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {agenceLyonVilleurbanneSchemas.map((schema, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Landing Page Content */}
      <main className='relative z-10 m-0 p-0 overflow-x-hidden'>
        <Yandex360Hero />
        <Yandex360Ecosystem />
        <Yandex360Bento />
        <Yandex360Calculator />
        <Yandex360Portfolio />
        <Yandex360Testimonials />
        <Yandex360FAQ />
        <LyonVilleurbanneSeoHub currentPath='/services/agence-web-lyon-villeurbanne' />
        <Yandex360Contact />
      </main>
    </div>
  )
}
