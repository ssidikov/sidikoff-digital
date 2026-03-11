import { Metadata } from 'next'
import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import restaurantData from '@/locales/fr/restaurant.json'
import RestaurantLandingContent from '@/components/RestaurantLandingContent'

const t = restaurantData.restaurant_landing

export function generateMetadata(): Metadata {
  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    alternates: {
      canonical: createCanonicalUrl('services/restaurant-websites', 'fr'),
      languages: generateAlternateUrls('services/restaurant-websites'),
    },
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'SIDIKOFF DIGITAL',
      images: [{ url: '/images/opengraph-fr.png', width: 1200, height: 630, alt: t.meta_title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    robots: { index: true, follow: true },
  }
}

export default function RestaurantWebsitesPage() {
  const breadcrumbs = {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Sites Web Restaurant' },
    ],
  }

  return <RestaurantLandingContent breadcrumbs={breadcrumbs} />
}
