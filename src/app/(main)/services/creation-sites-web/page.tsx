import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
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
          url: '/images/opengraph-fr.png',
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
      images: ['/images/opengraph-fr.png'],
    },
    alternates: {
      canonical: createCanonicalUrl('services/creation-sites-web', 'fr'),
      languages: generateAlternateUrls('services/creation-sites-web'),
    },
  }
}

export default function WebCreationPage() {
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

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WebCreationLandingContent breadcrumbs={breadcrumbs} />
    </>
  )
}
