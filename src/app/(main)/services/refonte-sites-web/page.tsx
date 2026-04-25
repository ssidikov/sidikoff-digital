import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import WebRedesignLandingContent from '@/components/WebRedesignLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Refonte Site Web Professionnel'
  const description = 'Modernisez votre site existant avec notre service de redesign professionnel'

  const canonicalUrl = createCanonicalUrl('services/refonte-sites-web', 'fr')

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Sidikoff Digital',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/refonte-sites-web', 'fr'),
      languages: generateAlternateUrls('services/refonte-sites-web'),
    },
    other: {
      google: 'notranslate',
    },
  }
}

export default function WebRedesignLandingPage() {
  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Redesign',
    description: 'Professional website redesign service',
    provider: {
      '@type': 'Organization',
      name: 'Sidikoff Digital',
      url: createCanonicalUrl('', 'fr'),
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    availableLanguage: ['fr'],
    serviceType: 'Website Redesign',
    category: 'Web Development',
    url: createCanonicalUrl('services/refonte-sites-web', 'fr'),
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebRedesignLandingContent
        breadcrumbs={{
          items: [
            { label: 'Accueil', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Redesign de site web' },
          ],
        }}
      />
    </>
  )
}
