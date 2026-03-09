import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/dictionaries'
import { locales, type Locale } from '@/lib/i18n'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import FreelanceLandingContent from '@/components/FreelanceLandingContent'

type Props = {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    return {}
  }

  const dictionary = await getDictionary(locale as Locale)
  const t = dictionary.freelance_landing

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
      canonical: createCanonicalUrl('services/creation-site-internet-freelance', locale as Locale),
      languages: generateAlternateUrls('services/creation-site-internet-freelance'),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateStaticParams() {
  return [{ locale: 'fr' }]
}

export default async function FreelanceWebsitesPage({ params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale as Locale)

  return <FreelanceLandingContent dictionary={dictionary} locale={locale} />
}
