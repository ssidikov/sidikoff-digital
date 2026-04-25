import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls, generateServiceSchema } from '@/lib/seo-utils'
import common from '@/locales/fr/common.json'
import FreelanceLandingContent from '@/components/FreelanceLandingContent'

const t = common.freelance_landing

const PAGE_URL = createCanonicalUrl('services/creation-site-internet-freelance', 'fr')

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
      images: [
        {
          url: '/images/og/creation-sites-web-paris.jpg',
          width: 1200,
          height: 630,
          alt: t.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/og/creation-sites-web-paris.jpg'],
    },
    alternates: {
      canonical: PAGE_URL,
      languages: generateAlternateUrls('services/creation-site-internet-freelance'),
    },
    robots: { index: true, follow: true },
  }
}

const serviceSchema = generateServiceSchema({
  name: 'Création de Site Internet pour Freelances',
  description:
    'Sites web sur mesure pour freelances et indépendants : portfolio professionnel, blog, formulaire de contact, SEO optimisé. Attirez de nouveaux clients avec une vitrine digitale performante.',
  url: PAGE_URL,
  serviceType: 'Création de site internet freelance',
  areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne'],
  image: 'https://www.sidikoff.com/images/og/creation-sites-web-paris.jpg',
})

export default function FreelanceWebsitesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FreelanceLandingContent />
    </>
  )
}

