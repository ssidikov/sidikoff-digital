import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import WebRedesignLandingContent from '@/components/WebRedesignLandingContent'

interface WebRedesignPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: WebRedesignPageProps): Promise<Metadata> {
  const { locale } = await params

  const title = 'Redesign de site web professionnel'
  const description = 'Modernisez votre site existant avec notre service de redesign professionnel'

  const canonicalUrl = createCanonicalUrl('services/refonte-sites-web', locale)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'SIDIKOFF DIGITAL',
      locale: locale,
      type: 'website',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/opengraph-fr.png`,
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
      images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/opengraph-fr.png`],
    },
    alternates: {
      canonical: createCanonicalUrl('services/refonte-sites-web', locale),
      languages: generateAlternateUrls('services/refonte-sites-web'),
    },
    other: {
      google: 'notranslate',
    },
  }
}

export default async function WebRedesignLandingPage({ params }: WebRedesignPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Redesign',
    description: 'Professional website redesign service',
    provider: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    availableLanguage: ['fr'],
    serviceType: 'Website Redesign',
    category: 'Web Development',
    url: createCanonicalUrl('services/refonte-sites-web', locale),
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebRedesignLandingContent
        dictionary={dictionary}
        locale={locale}
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

export async function generateStaticParams() {
  return [{ locale: 'fr' }]
}
