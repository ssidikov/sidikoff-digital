import { createCanonicalUrl, generateAlternateUrls, generateBreadcrumbStructuredData, generateServiceSchema, DEFAULT_SEO } from '@/lib/seo-utils'
import { Metadata } from 'next'
import common from '@/locales/fr/common.json'
import WebCreationLandingContent from '@/components/WebCreationLandingContent'
import { generateWebCreationSchema } from '@/lib/web-creation-schema'

export async function generateMetadata(): Promise<Metadata> {
  const title =
    common.services.web_creation_landing?.hero?.title ||
    common.services?.web_creation?.title ||
    'Création de sites web'
  const description =
    common.services.web_creation_landing?.hero?.description ||
    common.services?.web_creation?.description ||
    'Services de création de sites web sur mesure'

  return {
    title: `${title}`,
    description: description,
    keywords: ['création site web', 'développement web', 'site internet', 'web design'],
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Sidikoff Digital',
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
      title: title,
      description: description,
      creator: '@sidikoffdigital',
      images: ['https://cdn.sidikoff.com/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/creation-sites-web', 'fr'),
      languages: generateAlternateUrls('services/creation-sites-web'),
    },
  }
}

export default function WebCreationPage() {
  const pageUrl = createCanonicalUrl('services/creation-sites-web', 'fr')
  // Generate breadcrumbs
  const breadcrumbs = {
    items: [
      {
        label: 'Accueil',
        href: '/',
      },
      {
        label: 'Services',
        href: '/services',
      },
      { label: common.services.web_creation_landing.hero.title },
    ],
  }

  // Generate JSON-LD schema
  const schema = generateWebCreationSchema()
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: common.services.web_creation_landing.hero.title,
    description: common.services.web_creation_landing.hero.description,
    isPartOf: {
      '@id': `${DEFAULT_SEO.siteUrl}/#website`,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
  }
  const serviceSchema = generateServiceSchema({
    name: common.services.web_creation_landing.hero.title,
    description: common.services.web_creation_landing.hero.description,
    url: pageUrl,
    serviceType: 'Création de sites web',
    areaServed: ['France', 'Lyon', 'Paris', 'Villeurbanne'],
    image: DEFAULT_SEO.defaultImage,
    priceRange: '€€',
  })

  
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: DEFAULT_SEO.siteUrl },
    { name: 'Services', url: `${DEFAULT_SEO.siteUrl}/services` },
    { name: 'Creation Sites Web', url: `${DEFAULT_SEO.siteUrl}/services/creation-sites-web` },
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WebCreationLandingContent breadcrumbs={breadcrumbs} />
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-slate-900'>Création de site web sur mesure</h2>
          <div className='mt-6 space-y-4 text-lg leading-relaxed text-slate-600'>
            <p>
              Nous concevons des sites internet pensés pour acquisition, credibilite et conversion. Selon votre besoin, cela peut prendre la forme d un site vitrine, d un site e-commerce ou d une application web plus avancee.
            </p>
            <p>
              Chaque projet commence par cadrage clair: objectifs business, arborescence, positionnement SEO, contenus et performance attendue. Ensuite, nous produisons un site rapide, maintenable et optimise pour mobile comme pour recherche organique.
            </p>
            <p>
              Cette offre s adresse aux independants, PME et marques qui veulent un site utile commercialement, pas juste une presence visuelle supplementaire.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
