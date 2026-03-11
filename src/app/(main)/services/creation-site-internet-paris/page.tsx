import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'

import ParisLandingContent from '@/components/ParisLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Création site internet Paris – Agence web & SEO local'

  const description =
    'SIDIKOFF DIGITAL, agence web Paris, est spécialisée dans la création de sites Internet et le webmarketing. Contactez-nous dès maintenant.'

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: createCanonicalUrl('services/creation-site-internet-paris', 'fr'),
      languages: generateAlternateUrls('services/creation-site-internet-paris'),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      url: 'https://www.sidikoff.com/services/creation-site-internet-paris',
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
  }
}

export default async function ParisPage() {
  return (
    <div className='min-h-screen'>
      <ParisLandingContent />
    </div>
  )
}
