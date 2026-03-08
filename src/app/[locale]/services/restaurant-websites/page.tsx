import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/dictionaries'
import { locales, type Locale } from '@/lib/i18n'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import RestaurantLandingContent from '@/components/RestaurantLandingContent'

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
  const t = dictionary.restaurant_landing

  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    alternates: {
      canonical: createCanonicalUrl('services/restaurant-websites', locale as Locale),
      languages: generateAlternateUrls('services/restaurant-websites'),
    },
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
      images: ['/images/opengraph-fr.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export async function generateStaticParams() {
  return locales.map((locale: Locale) => ({
    locale,
  }))
}

export default async function RestaurantWebsitesPage({ params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale as Locale)

  const breadcrumbs = {
    items: [
      { label: dictionary.navigation.home, href: '/' },
      { label: dictionary.navigation.services, href: '/services' },
      { label: 'Sites Web Restaurant' },
    ],
  }

  return (
    <RestaurantLandingContent dictionary={dictionary} locale={locale} breadcrumbs={breadcrumbs} />
  )
}
