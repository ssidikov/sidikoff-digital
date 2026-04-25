import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema } from '@/lib/seo-utils'
import common from '@/locales/fr/common.json'
import BoulangerieLandingContent from '@/components/BoulangerieLandingContent'

const t = common.boulangerie_landing
const PAGE_URL = createCanonicalUrl('services/creation-site-internet-boulangerie', 'fr')

export function generateMetadata(): Metadata {
  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      url: PAGE_URL,
      images: [{ url: '/images/og/creation-site-boulangerie.jpg', width: 1200, height: 630, alt: t.meta_title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/og/creation-site-boulangerie.jpg'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/creation-site-internet-boulangerie'),
    },
    robots: { index: true, follow: true },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site Internet pour Boulangeries',
  description:
    'Sites web professionnels sur mesure pour boulangeries : design gourmand, commandes en ligne, SEO local. Dès 900 € TTC, livré en 3–4 semaines. Devis gratuit sous 24h.',
  url: PAGE_URL,
  serviceType: 'Création de site internet boulangerie',
  areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne'],
  image: 'https://www.sidikoff.com/images/og/creation-site-boulangerie.jpg',
})

export default function BoulangerieWebsitesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BoulangerieLandingContent />
    </>
  )
}
