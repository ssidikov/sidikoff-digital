import Script from 'next/script'

import {
  businessLocations,
  generateLocalBusinessSchema,
  organizationSchema,
  generateSEOMetadata,
  generateLanguageAlternates,
  createCanonicalUrl,
} from '@/lib/seo-utils'
import { getBlogPosts } from '@/lib/sanity'
import { defaultLocale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  Hero,
  Services,
  Pricing,
  Portfolio,
  Testimonials,
  FAQ,
  Contact,
  Actualite,
} from '@/sections'
import LocaleProvider from '@/components/LocaleProvider'

const SEO_CONFIG = {
  title: 'Agence Web Lyon — Création de Sites Internet Sur Mesure',
  keywords: [
    'agence web Lyon',
    'création site internet Lyon',
    'site web professionnel',
    'création site vitrine',
    'création site e-commerce',
    'refonte site web',
    'agence web France',
    'site web PME',
  ],
  ogImage: '/images/opengraph-fr.png',
} as const

export async function generateMetadata() {
  return generateSEOMetadata({
    title: SEO_CONFIG.title,
    description:
      'Agence web Lyon spécialisée en création de sites internet sur mesure, SEO et refonte. Sites modernes, rapides, livrés en 7–14 jours. Devis gratuit sous 24h.',
    locale: defaultLocale,
    canonicalUrl: createCanonicalUrl('', defaultLocale),
    alternateLanguages: generateLanguageAlternates('', ['fr']),
    ogImage: SEO_CONFIG.ogImage,
    keywords: [...SEO_CONFIG.keywords],
  })
}

/**
 * Generates structured data schemas for the homepage
 */
function generateHomePageSchemas() {
  return [
    organizationSchema,
    // Only the first location gets a rating to avoid duplication
    ...businessLocations.map((location, index) =>
      generateLocalBusinessSchema(location, index === 0),
    ),
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://www.sidikoff.com/#website',
      name: 'SIDIKOFF DIGITAL',
      alternateName: 'SIDIKOFF DIGITAL',
      url: 'https://www.sidikoff.com',
      description:
        'Agence web à Lyon et Paris spécialisée en création de sites internet sur mesure, refonte et SEO. Développement React et Next.js.',
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'Organization',
        '@id': 'https://www.sidikoff.com/#organization',
      },
      copyrightYear: new Date().getFullYear(),
      copyrightHolder: {
        '@type': 'Organization',
        '@id': 'https://www.sidikoff.com/#organization',
      },
    },
  ]
}

export default async function HomePage() {
  // Serve French content directly at root
  const dict = await getDictionary(defaultLocale)
  const posts = await getBlogPosts()
  const latestPosts = posts.slice(0, 3)
  const schemas = generateHomePageSchemas()

  return (
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
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

        <Header locale={defaultLocale} dictionary={dict} />
        <main className='m-0 p-0'>
          <Hero dict={dict.hero} locale={defaultLocale} />
          <Services dictionary={dict.services} locale={defaultLocale} isHomePage={true} />
          <Portfolio dictionary={dict.portfolio} locale={defaultLocale} isHomePage={true} />
          <Pricing locale={defaultLocale} />
          <Testimonials dictionary={dict.testimonials} locale={defaultLocale} />
          <Actualite posts={latestPosts} dictionary={dict.blog} locale={defaultLocale} />
          <FAQ dictionary={dict.faq} isHomePage={true} />
          <Contact dictionary={dict.contact} locale={defaultLocale} isHomePage={true} />
        </main>
        <Footer dictionary={dict} locale={defaultLocale} />
      </div>
    </LocaleProvider>
  )
}
