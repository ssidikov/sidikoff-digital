import { createCanonicalUrl, generateAlternateUrls, generateBreadcrumbStructuredData, generateServiceSchema, DEFAULT_SEO } from '@/lib/seo-utils'
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
          url: 'https://cdn.sidikoff.com/images/opengraph-fr.png',
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
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
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
  const pageUrl = createCanonicalUrl('services/refonte-sites-web', 'fr')
  const title = 'Refonte Site Web Professionnel'
  const description = 'Modernisez votre site existant avec notre service de redesign professionnel'
  // JSON-LD Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }
  const serviceSchema = generateServiceSchema({
    name: title,
    description,
    url: pageUrl,
    serviceType: 'Refonte de site web',
    areaServed: [{ '@type': 'Country', name: 'France' }],
    image: DEFAULT_SEO.defaultImage,
    priceRange: '€€',
  })

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Refonte Sites Web', url: `${DEFAULT_SEO.siteUrl}/services/refonte-sites-web` },
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
      <WebRedesignLandingContent
        breadcrumbs={{
          items: [
            { label: 'Accueil', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Redesign de site web' },
          ],
        }}
      />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-slate-900'>Refonte site web: performance, UX, SEO</h2>
          <div className='mt-6 space-y-4 text-lg leading-relaxed text-slate-600'>
            <p>
              Une refonte de site web devient necessaire quand design, contenu ou technique freinent vos conversions. Nous reprenons structure, messages, parcours et performance pour transformer un ancien site en actif commercial plus credible et plus rapide.
            </p>
            <p>
              La refonte inclut aussi la conservation du capital SEO existant: redirections, preservation des pages utiles, reecriture des balises et meilleure hierarchie de contenu. Objectif: moderniser sans perdre trafic ni lisibilite.
            </p>
            <p>
              Cette approche convient aux entreprises dont le site actuel est lent, difficile a mettre a jour, peu mobile-friendly ou simplement plus aligne avec leur niveau de gamme.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
