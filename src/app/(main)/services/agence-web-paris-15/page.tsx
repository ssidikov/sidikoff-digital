import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import type { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import AgenceWebParis15LandingContent from '@/components/AgenceWebParis15LandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const content = common.agence_web_paris_15_landing

  return {
    title: content.meta_title,
    description: content.meta_description,
    keywords: [
      'agence web paris 15ème',
      'agence web paris 15',
      'création site internet paris 15',
      'développement web paris 15ème',
      'agence digitale paris 15',
      'site web paris 75015',
      'agence web vaugirard',
      'agence web grenelle',
      'agence web convention',
      'création site web paris 15ème',
      'next.js paris 15',
      'react paris 15ème',
    ],
    openGraph: {
      title: content.meta_title,
      description: content.meta_description,
      type: 'website',
      locale: 'fr_FR',
      url: `https://www.sidikoff.com/services/agence-web-paris-15`,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: 'Agence Web Paris 15ème - Création Site Internet',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta_title,
      description: content.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/agence-web-paris-15', 'fr'),
      languages: generateAlternateUrls('services/agence-web-paris-15'),
    },
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
  }
}

export default function AgenceWebParis15Page() {
  return <AgenceWebParis15LandingContent />
}
