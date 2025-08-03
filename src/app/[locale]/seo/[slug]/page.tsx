import Script from 'next/script'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import {
  getSEOLocationBySlug,
  generateLocationSEOMetadata,
  businessLocations,
  generateLocalBusinessSchema,
  organizationSchema,
} from '@/lib/seo-utils'
import { getDictionary } from '@/lib/dictionaries'
import { Hero, Services, Pricing, Portfolio, FAQ, Contact } from '@/sections'
import { Locale } from '@/lib/i18n'

interface SEOPageProps {
  params: Promise<{ slug: string; locale: Locale }>
}

export async function generateMetadata({ params }: SEOPageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const location = getSEOLocationBySlug(slug)

  if (!location) {
    const notFoundTitles = {
      fr: 'Page non trouvée | SIDIKOFF DIGITAL',
      en: 'Page not found | SIDIKOFF DIGITAL',
      ru: 'Страница не найдена | SIDIKOFF DIGITAL',
    }
    const notFoundDescriptions = {
      fr: "Cette page n'existe pas.",
      en: 'This page does not exist.',
      ru: 'Эта страница не существует.',
    }

    return {
      title: notFoundTitles[locale],
      description: notFoundDescriptions[locale],
    }
  }

  return generateLocationSEOMetadata(location, locale)
}

export async function generateStaticParams() {
  // Static list of all SEO location slugs for reliable build-time generation
  const seoSlugs = [
    // Paris Districts (1-20)
    'paris-1',
    'paris-2',
    'paris-3',
    'paris-4',
    'paris-5',
    'paris-6',
    'paris-7',
    'paris-8',
    'paris-9',
    'paris-10',
    'paris-11',
    'paris-12',
    'paris-13',
    'paris-14',
    'paris-15',
    'paris-16', // Custom location
    'paris-17',
    'paris-18',
    'paris-19',
    'paris-20',
    // Lyon Districts (1-9)
    'lyon-1',
    'lyon-2',
    'lyon-3',
    'lyon-4',
    'lyon-5',
    'lyon-6',
    'lyon-7',
    'lyon-8',
    'lyon-9',
    // French Regions
    'ile-de-france',
    'auvergne-rhone-alpes',
    'nouvelle-aquitaine',
    'occitanie',
    'hauts-de-france',
    'grand-est',
    'provence-alpes-cote-azur',
    'bretagne',
    'pays-de-la-loire',
    'normandie',
    'bourgogne-franche-comte',
    'centre-val-de-loire',
    'corse',
    'guadeloupe',
    'martinique',
    'guyane',
    'la-reunion',
    'mayotte',
    // French Cities
    'paris',
    'marseille',
    'lyon',
    'toulouse',
    'nice',
    'nantes',
    'montpellier',
    'strasbourg',
    'bordeaux',
    'lille',
    'rennes',
    'reims',
    'saint-etienne',
    'toulon',
    'le-havre',
    'grenoble',
    'dijon',
    'angers',
    'nimes',
    'villeurbanne',
    'saint-denis-reunion',
    'aix-en-provence',
    'clermont-ferrand',
    'brest',
    'limoges',
    'tours',
    'amiens',
    'perpignan',
    'metz',
    'besancon',
    'boulogne-billancourt',
    'orleans',
    'mulhouse',
    'rouen',
    'caen',
    'nancy',
  ]

  const locales: Locale[] = ['fr', 'en', 'ru']
  const paths: { slug: string; locale: Locale }[] = []

  seoSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      paths.push({
        slug,
        locale,
      })
    })
  })

  return paths
}

export default async function LocalizedSEOLocationPage({ params }: SEOPageProps) {
  const { slug, locale } = await params
  const location = getSEOLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const dict = await getDictionary(locale)

  // Create customized hero dictionary with location-specific content
  const heroDict = {
    ...dict.hero,
    badge: location.badgeText[locale],
    title: location.title[locale].replace(' | SIDIKOFF DIGITAL', ''), // Remove company name from H1
    subtitle: `${location.keyword.charAt(0).toUpperCase() + location.keyword.slice(1)} : ${dict.hero.subtitle}`,
  }

  // Generate structured data for the location
  const parisLocation = businessLocations.find((loc) => loc.address.addressLocality === 'Paris')!
  const schemas = [
    organizationSchema,
    generateLocalBusinessSchema(parisLocation),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `https://sidikoff.com/${locale === 'fr' ? '' : locale + '/'}seo/${location.slug}#webpage`,
      name: location.title[locale],
      description: location.description[locale],
      url: `https://sidikoff.com/${locale === 'fr' ? '' : locale + '/'}seo/${location.slug}`,
      inLanguage: locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : 'ru-RU',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://sidikoff.com/#website',
      },
      about: {
        '@type': 'Service',
        name: location.badgeText[locale],
        description: location.description[locale],
        areaServed: {
          '@type': 'Place',
          name: location.city,
        },
        provider: {
          '@type': 'Organization',
          '@id': 'https://sidikoff.com/#organization',
        },
      },
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': `https://sidikoff.com/${locale === 'fr' ? '' : locale + '/'}seo/${location.slug}#localbusiness`,
        name: `SIDIKOFF DIGITAL - ${location.city}`,
        description: location.description[locale],
        areaServed: {
          '@type': 'Place',
          name: location.city,
        },
      },
    },
  ]

  return (
    <>
      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}

      <main>
        {/* Hero with custom badge, title and subtitle */}
        <Hero dict={heroDict} common={dict.common} locale={locale} />

        {/* Keep the same layout as the main site */}
        <Services dictionary={dict.services} locale={locale} />
        <Portfolio dictionary={dict.portfolio} locale={locale} />
        <Pricing locale={locale} />
        <FAQ dictionary={dict.faq} />
        <Contact dictionary={dict.contact} locale={locale} />
      </main>
    </>
  )
}
