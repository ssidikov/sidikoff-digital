import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/dictionaries'
import { locales, type Locale } from '@/lib/i18n'
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
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: locale,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: '/images/og/restaurant-websites.jpg',
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
      images: ['/images/og/restaurant-websites.jpg'],
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
      { label: dictionary.navigation.home, href: `/${locale}` },
      { label: dictionary.navigation.services, href: `/${locale}/services` },
      { label: 'Sites Web Restaurant' },
    ],
  }

  return (
    <RestaurantLandingContent dictionary={dictionary} locale={locale} breadcrumbs={breadcrumbs} />
  )
}
