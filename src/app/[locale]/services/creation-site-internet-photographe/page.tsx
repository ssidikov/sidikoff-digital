import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import PhotographerLandingContent from '@/components/PhotographerLandingContent'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const t = dictionary.photographer_landing

  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/opengraph-fr.png',
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
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/creation-site-internet-photographe', locale),
      languages: generateAlternateUrls('services/creation-site-internet-photographe'),
    },
  }
}

export async function generateStaticParams() {
  return [{ locale: 'fr' }]
}

export default async function PhotographerLandingPage({ params }: PageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <PhotographerLandingContent dictionary={dictionary} locale={locale} />
}
