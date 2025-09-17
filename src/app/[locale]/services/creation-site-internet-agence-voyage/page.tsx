import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import TravelAgencyLandingContent from '@/components/TravelAgencyLandingContent'

interface Props {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const dict = await getDictionary(params.locale)

  return {
    title: dict.travel_agency_landing.meta_title,
    description: dict.travel_agency_landing.meta_description,
    keywords: dict.travel_agency_landing.keywords,
    openGraph: {
      title: dict.travel_agency_landing.meta_title,
      description: dict.travel_agency_landing.meta_description,
      type: 'website',
      locale: params.locale,
      url: `https://www.sidikoff.com/${params.locale}/services/creation-site-internet-agence-voyage`,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: '/images/og/travel-agency-websites.jpg',
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
      images: ['/images/og/travel-agency-websites.jpg'],
    },
    alternates: {
      canonical: `https://www.sidikoff.com/${params.locale}/services/creation-site-internet-agence-voyage`,
      languages: {
        fr: 'https://www.sidikoff.com/fr/services/creation-site-internet-agence-voyage',
        en: 'https://www.sidikoff.com/en/services/creation-site-internet-agence-voyage',
        ru: 'https://www.sidikoff.com/ru/services/creation-site-internet-agence-voyage',
      },
    },
  }
}

export default async function TravelAgencyLandingPage(props: Props) {
  const params = await props.params
  const dict = await getDictionary(params.locale)

  return <TravelAgencyLandingContent dictionary={dict} locale={params.locale} />
}
