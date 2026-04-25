import { Metadata } from 'next'
import GoneLandingPage from '@/components/GoneLandingPage'

export const metadata: Metadata = {
  title: 'Solutions Digitales & Création Site Internet',
  description:
    'Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Solutions Digitales & Création Site Internet',
    description:
      'Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.',
    type: 'website',
    url: 'https://www.sidikoff.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions Digitales & Création Site Internet',
    description:
      'Agence spécialisée en création de sites web, e-commerce et SEO. Nous accompagnons entreprises, indépendants et startups dans toute la France.',
  },
  alternates: {
    canonical: 'https://www.sidikoff.com/',
  },
}

interface PageProps {
  searchParams: {
    city?: string
  }
}

export default function GoneLandingPageRoute({ searchParams }: PageProps) {
  return <GoneLandingPage cityName={searchParams.city} />
}
