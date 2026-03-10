import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import TravelAgencyLandingContent from '@/components/TravelAgencyLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dict = await getDictionary(locale)

  return {
    title: dict.travel_agency_landing.meta_title,
    description: dict.travel_agency_landing.meta_description,
    keywords: dict.travel_agency_landing.keywords,
    openGraph: {
      title: dict.travel_agency_landing.meta_title,
      description: dict.travel_agency_landing.meta_description,
      type: 'website',
      locale: 'fr_FR',
      url: 'https://www.sidikoff.com/services/creation-site-internet-agence-voyage',
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: dict.travel_agency_landing.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.travel_agency_landing.meta_title,
      description: dict.travel_agency_landing.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/creation-site-internet-agence-voyage', locale),
      languages: generateAlternateUrls('services/creation-site-internet-agence-voyage'),
    },
  }
}

export default async function TravelAgencyLandingPage() {
  const locale = defaultLocale
  const dict = await getDictionary(locale)

  return <TravelAgencyLandingContent dictionary={dict} locale={locale} />
}
