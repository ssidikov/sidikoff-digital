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
  // Static list of all SEO location slugs matching sitemap.ts
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
    'paris-16',
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
    // Major French Cities
    'marseille',
    'toulouse',
    'nice',
    'nantes',
    'lille',
    'rennes',
    'reims',
    'saint-etienne',
    'toulon',
    'grenoble',
    'dijon',
    'angers',
    'villeurbanne',
    'le-mans',
    'aix-en-provence',
    'clermont-ferrand',
    'brest',
    'tours',
    'amiens',
    'limoges',
    'annecy',
    'boulogne-billancourt',
    'perpignan',
    'besancon',
    'metz',
    'mulhouse',
    'caen',
    'nancy',
    'argenteuil',
    'montreuil',
    'roubaix',
    'tourcoing',
    'nanterre',
    'avignon',
    'poitiers',
    'fort-de-france',
    'courbevoie',
    'versailles',
    'colombes',
    'aulnay-sous-bois',
    'saint-paul',
    'rueil-malmaison',
    'champigny-sur-marne',
    'antibes',
    'dunkerque',
    'pessac',
    'levallois-perret',
    'noisy-le-grand',
    'cergy',
    'pau',
    'ivry-sur-seine',
    'creteil',
    'orleans',
    'bourges',
    'cannes',
    'le-havre',
    'montrouge',
    'neuilly-sur-seine',
    'sarcelles',
    'troyes',
    'issy-les-moulineaux',
    'montauban',
    'lorient',
    'beauvais',
    'cholet',
    'vannes',
    'laval',
    'charleville-mezieres',
    'allonnes',
    'valence',
    'les-abymes',
    'quimper',
    'meaux',
    'biarritz',
    'auxerre',
    'la-rochelle',
    'matoury',
    'evry-courcouronnes',
    'calais',
    'merignac',
    'saint-malo',
    'chelles',
    'bourg-en-bresse',
    'blois',
    'cagnes-sur-mer',
    'salon-de-provence',
    'saint-brieuc',
    'saint-nazaire',
    'chatou',
    'garges-les-gonesse',
    'savigny-sur-orge',
    'pontoise',
    'sens',
    'evreux',
    'choisy-le-roi',
    'suresnes',
    'puteaux',
    'clichy',
    'saint-germain-en-laye',
    'franconville',
    'drancy',
    'gagny',
    'livry-gargan',
    'sevran',
    'vitry-sur-seine',
    'thiais',
    'fresnes',
    'fontenay-sous-bois',
    'noisy-le-sec',
    'maisons-alfort',
    'saint-maur-des-fosses',
    'vincennes',
    'nogent-sur-marne',
    'le-perreux-sur-marne',
    'bry-sur-marne',
    'joinville-le-pont',
    'saint-mande',
    'charenton-le-pont',
    'alfortville',
    'maisons-laffitte',
    'le-vesinet',
    'sartrouville',
    'houilles',
    'carrieres-sur-seine',
    'le-port-marly',
    'marnes-la-coquette',
    'vaucresson',
    'chaville',
    'sevres',
    'vanves',
    'malakoff',
    'bagneux',
    'fontenay-aux-roses',
    'le-plessis-robinson',
    'chatenay-malabry',
    'antony',
    'bourg-la-reine',
    'sceaux',
    'rungis',
    'chevilly-larue',
    'l-hay-les-roses',
    'cachan',
    'arcueil',
    'gentilly',
    'le-kremlin-bicetre',
    'villejuif',
    'saint-maurice',
    'bagnolet',
    'les-lilas',
    'le-pre-saint-gervais',
    'pantin',
    'bobigny',
    'bondy',
    'rosny-sous-bois',
    'villemomble',
    'montfermeil',
    'clichy-sous-bois',
    'coubron',
    'vaujours',
    'le-blanc-mesnil',
    'dugny',
    'le-bourget',
    'la-courneuve',
    'stains',
    'pierrefitte-sur-seine',
    'villetaneuse',
    'epinay-sur-seine',
    'saint-denis',
    'l-ile-saint-denis',
    'saint-ouen-sur-seine',
    'garches',
    'saint-cloud',
    'meudon',
    'clamart',
    // French Regions
    'ile-de-france',
    'auvergne-rhone-alpes',
    'hauts-de-france',
    'nouvelle-aquitaine',
    'occitanie',
    'grand-est',
    'provence-alpes-cote-d-azur',
    'pays-de-la-loire',
    'bretagne',
    'normandie',
    'bourgogne-franche-comte',
    'centre-val-de-loire',
    'corse',
    'guadeloupe',
    'martinique',
    'guyane',
    'la-reunion',
    'mayotte',
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
    organizationSchema, // Main organization with rating
    generateLocalBusinessSchema(parisLocation, false), // No rating to avoid duplication
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
