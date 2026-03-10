import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import DoctorLandingContent from '@/components/DoctorLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)
  const t = dictionary.doctor_landing

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
      canonical: createCanonicalUrl('services/creation-site-internet-medecin', locale),
      languages: generateAlternateUrls('services/creation-site-internet-medecin'),
    },
  }
}

export default async function DoctorLandingPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

  return <DoctorLandingContent dictionary={dictionary} locale={locale} />
}
