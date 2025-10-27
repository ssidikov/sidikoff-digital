import { Metadata } from 'next'
import GoneLandingPage from '@/components/GoneLandingPage'

export const metadata: Metadata = {
  title: 'Solutions digitales & création de sites internet en France – Sidikoff',
  description:
    'Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Solutions digitales & création de sites internet en France – Sidikoff',
    description:
      'Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.',
    type: 'website',
    url: 'https://sidikoff.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions digitales & création de sites internet en France – Sidikoff',
    description:
      'Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.',
  },
  alternates: {
    canonical: 'https://sidikoff.com/',
  },
}

interface PageProps {
  searchParams: {
    city?: string
    locale?: 'fr' | 'en' | 'ru'
  }
}

export default function GoneLandingPageRoute({ searchParams }: PageProps) {
  // Detect locale from various sources
  const locale = searchParams.locale || 'fr'

  return <GoneLandingPage cityName={searchParams.city} locale={locale} />
}
