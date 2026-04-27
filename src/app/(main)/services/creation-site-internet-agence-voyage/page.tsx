import { createCanonicalUrl, generateAlternateUrls , generateBreadcrumbStructuredData, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import travelData from '@/locales/fr/travel_agency_landing.json'
import TravelAgencyLandingContent from '@/components/TravelAgencyLandingContent'

const t = travelData.travel_agency_landing

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
      url: 'https://www.sidikoff.com/services/creation-site-internet-agence-voyage',
      siteName: 'Sidikoff Digital',
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: t.meta_title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/creation-site-internet-agence-voyage', 'fr'),
      languages: generateAlternateUrls('services/creation-site-internet-agence-voyage'),
    },
  }
}

export default function TravelAgencyLandingPage() {
  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation Site Internet Agence Voyage', url: `${DEFAULT_SEO.siteUrl}/services/creation-site-internet-agence-voyage` },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TravelAgencyLandingContent />
    </>
  )
}
