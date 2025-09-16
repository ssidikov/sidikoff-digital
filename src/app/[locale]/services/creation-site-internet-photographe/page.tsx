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
      locale: locale,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: '/images/og/photographer-websites.jpg',
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
      images: ['/images/og/photographer-websites.jpg'],
    },
    alternates: {
      canonical: `/services/creation-site-internet-photographe`,
      languages: {
        fr: '/fr/services/creation-site-internet-photographe',
        en: '/en/services/creation-site-internet-photographe',
        ru: '/ru/services/creation-site-internet-photographe',
      },
    },
  }
}

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ru' }]
}

export default async function PhotographerLandingPage({ params }: PageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <PhotographerLandingContent dictionary={dictionary} locale={locale} />
}
