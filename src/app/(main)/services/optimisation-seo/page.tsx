import { createCanonicalUrl, generateAlternateUrls, generateBreadcrumbStructuredData, generateServiceSchema, DEFAULT_SEO } from '@/lib/seo-utils'
import { type Metadata } from 'next'
import common from '@/locales/fr/common.json'
import SeoOptimizationLandingContent from '@/components/SeoOptimizationLandingContent'

export async function generateMetadata(): Promise<Metadata> {
  const t = common.testimonials.seo_optimization_landing

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
      images: [
        {
          url: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: t.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta_title,
      description: t.meta_description,
      creator: '@sidikoffdigital',
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/optimisation-seo', 'fr'),
      languages: generateAlternateUrls('services/optimisation-seo'),
    },
  }
}

export default function SeoOptimizationLandingPage() {
  const pageUrl = createCanonicalUrl('services/optimisation-seo', 'fr')
  const breadcrumbs = {
    items: [
      {
        label: common.navigation.home,
        href: '/',
      },
      {
        label: common.navigation.services,
        href: '/#services',
      },
      {
        label: common.services.seo_optimization.title,
      },
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: common.testimonials.seo_optimization_landing.meta_title,
    description: common.testimonials.seo_optimization_landing.meta_description,
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }
  const serviceSchema = generateServiceSchema({
    name: common.testimonials.seo_optimization_landing.hero.title,
    description: common.testimonials.seo_optimization_landing.hero.description,
    url: pageUrl,
    serviceType: 'Optimisation SEO',
    areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne'],
    image: DEFAULT_SEO.defaultImage,
    priceRange: '€€',
  })

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Optimisation Seo', url: `${DEFAULT_SEO.siteUrl}/services/optimisation-seo` },
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
      <SeoOptimizationLandingContent breadcrumbs={breadcrumbs} />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-slate-900'>Optimisation SEO technique et editoriale</h2>
          <div className='mt-6 space-y-4 text-lg leading-relaxed text-slate-600'>
            <p>
              L optimisation SEO ne se limite pas aux balises title. Nous travaillons la structure HTML, le maillage interne, les contenus, les donnees structurees, la vitesse et les signaux locaux pour aider vos pages a mieux se positionner sur Google.
            </p>
            <p>
              Notre approche combine audit SEO, corrections on-page et priorisation business. Nous traitons d abord les blocages qui freinent indexation, comprehension semantique et conversion, puis nous consolidons les pages a fort potentiel commercial.
            </p>
            <p>
              Cette page s adresse aux entreprises qui veulent plus de trafic qualifie, de meilleures positions et une base saine pour grandir sans empiler des correctifs disperses.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
