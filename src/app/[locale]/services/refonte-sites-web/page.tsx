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

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/services/refonte-sites-web`

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
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-homepage.jpg`,
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
      images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/og-homepage.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: `${process.env.NEXT_PUBLIC_SITE_URL}/fr/services/refonte-sites-web`,
        en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/services/refonte-sites-web`,
        ru: `${process.env.NEXT_PUBLIC_SITE_URL}/ru/services/refonte-sites-web`,
      },
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
    availableLanguage: ['fr', 'en', 'ru'],
    serviceType: 'Website Redesign',
    category: 'Web Development',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/services/refonte-sites-web`,
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
            { label: 'Accueil', href: `/${locale}` },
            { label: 'Services', href: `/${locale}/services` },
            { label: 'Redesign de site web' },
          ],
        }}
      />
    </>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ru' }]
}
