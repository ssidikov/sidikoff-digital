import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import AgenceWebParisLandingContent from '@/components/AgenceWebParisLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dict = await getDictionary(locale)
  const content = dict.agence_web_paris_landing

  const url = createCanonicalUrl('services/agence-web-paris', locale)

  return {
    title: content.meta_title,
    description: content.meta_description,
    keywords: [
      'agence web paris',
      'agence web ile de france',
      'agence communication paris',
      'agence digitale paris',
      'agence web wordpress paris',
      'creation site web paris',
      'next.js paris',
      'react paris',
      'développement web paris',
    ],
    authors: [{ name: 'SIDIKOFF DIGITAL' }],
    creator: 'SIDIKOFF DIGITAL',
    publisher: 'SIDIKOFF DIGITAL',
    alternates: {
      canonical: createCanonicalUrl('services/agence-web-paris', locale),
      languages: generateAlternateUrls('services/agence-web-paris'),
    },
    openGraph: {
      title: content.meta_title,
      description: content.meta_description,
      url: url,
      siteName: 'SIDIKOFF DIGITAL',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: content.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta_title,
      description: content.meta_description,
      images: ['/images/opengraph-fr.png'],
      creator: '@sidikoffdigital',
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
    category: 'technology',
  }
}

export default async function AgenceWebParisLandingPage() {
  const locale = defaultLocale
  const dict = await getDictionary(locale)

  return <AgenceWebParisLandingContent dictionary={dict} locale={locale} />
}
