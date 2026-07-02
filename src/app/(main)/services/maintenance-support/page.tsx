import { createCanonicalUrl, generateAlternateUrls, generateBreadcrumbStructuredData, generateServiceSchema, DEFAULT_SEO } from '@/lib/seo-utils'
import { type Metadata } from 'next'
import common from '@/locales/fr/common.json'
import MaintenanceLandingContent from '@/components/MaintenanceLandingContent'

const t = common.testimonials.maintenance_landing

export function generateMetadata(): Metadata {
  return {
    title: t.meta_title,
    description: t.meta_description,
    keywords: t.keywords,
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
      images: [{ url: 'https://cdn.sidikoff.com/images/opengraph-fr.png', width: 1200, height: 630, alt: t.meta_title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/maintenance-support', 'fr'),
      languages: generateAlternateUrls('services/maintenance-support'),
    },
  }
}

export default function MaintenanceLandingPage() {
  const pageUrl = createCanonicalUrl('services/maintenance-support', 'fr')
  const breadcrumbs = {
    items: [
      { label: common.navigation.home, href: '/' },
      { label: common.navigation.services, href: '/#services' },
      { label: common.services.maintenance.title },
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: t.meta_title,
    description: t.meta_description,
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }
  const serviceSchema = generateServiceSchema({
    name: t.hero.title,
    description: t.hero.description,
    url: pageUrl,
    serviceType: 'Maintenance et support de site web',
    areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne'],
    image: DEFAULT_SEO.defaultImage,
    priceRange: '€€',
  })

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Maintenance Support', url: `${DEFAULT_SEO.siteUrl}/services/maintenance-support` },
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MaintenanceLandingContent breadcrumbs={breadcrumbs} />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-slate-900'>Maintenance web proactive</h2>
          <div className='mt-6 space-y-4 text-lg leading-relaxed text-slate-600'>
            <p>
              Un site en ligne ne reste pas performant tout seul. Notre service de maintenance web couvre les mises a jour techniques, la surveillance des erreurs, les sauvegardes et les correctifs de securite pour eviter les interruptions qui coutent du trafic et des leads.
            </p>
            <p>
              Nous intervenons sur des sites vitrines, e-commerce et applications web avec une logique preventive. Objectif: garder un site rapide, stable et indexable, tout en preservant vos Core Web Vitals, votre SEO et votre experience utilisateur.
            </p>
            <p>
              Cette offre convient aux entreprises qui veulent un partenaire long terme pour la maintenance WordPress, Next.js ou React, avec un interlocuteur capable de gerer support, incidents et evolutions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
