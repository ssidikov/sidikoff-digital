import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { type Locale, isValidLocale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import SeoOptimizationLandingContent from '@/components/SeoOptimizationLandingContent'

interface PageProps {
  params: {
    locale: Locale
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale)
  const t = dictionary.seo_optimization_landing

  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
    },
    alternates: {
      canonical: `/${locale}/services/optimisation-seo`,
      languages: {
        fr: '/services/optimisation-seo',
        en: '/en/services/optimisation-seo',
        ru: '/ru/services/optimisation-seo',
      },
    },
  }
}

export default async function SeoOptimizationLandingPage({ params }: PageProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale)

  const breadcrumbs = {
    items: [
      {
        label: dictionary.navigation.home,
        href: locale === 'fr' ? '/' : `/${locale}`,
      },
      {
        label: dictionary.navigation.services,
        href: locale === 'fr' ? '/#services' : `/${locale}/#services`,
      },
      {
        label: dictionary.services.seo_optimization.title,
      },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: dictionary.seo_optimization_landing.hero.title,
    description: dictionary.seo_optimization_landing.hero.description,
    provider: {
      '@type': 'Organization',
      name: 'Sidikoff Digital',
      url: 'https://sidikoff.digital',
    },
    serviceType: 'SEO Optimization',
    areaServed: 'Global',
    offers: {
      '@type': 'Offer',
      description: dictionary.seo_optimization_landing.hero.description,
    },
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoOptimizationLandingContent
        dictionary={dictionary}
        locale={locale}
        breadcrumbs={breadcrumbs}
      />
    </>
  )
}
