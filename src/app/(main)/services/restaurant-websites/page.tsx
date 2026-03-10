import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import RestaurantLandingContent from '@/components/RestaurantLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)
  const t = dictionary.restaurant_landing

  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    alternates: {
      canonical: createCanonicalUrl('services/restaurant-websites', locale),
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
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function RestaurantWebsitesPage() {
  const locale = defaultLocale
  const dictionary = await getDictionary(locale)

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
