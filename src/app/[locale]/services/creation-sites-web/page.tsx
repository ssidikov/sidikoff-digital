import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import LocaleProvider from '@/components/LocaleProvider'
import WebCreationLandingContent from '@/components/WebCreationLandingContent'
import { generateWebCreationSchema } from '@/lib/web-creation-schema'

interface WebCreationPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: WebCreationPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  const title =
    dictionary.web_creation_landing?.hero?.title ||
    dictionary.services?.web_creation?.title ||
    'Création de sites web'
  const description =
    dictionary.web_creation_landing?.hero?.description ||
    dictionary.services?.web_creation?.description ||
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
      siteName: 'SIDIKOFF DIGITAL',
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
      canonical: createCanonicalUrl('services/creation-sites-web', locale),
      languages: generateAlternateUrls('services/creation-sites-web'),
    },
  }
}

export function generateStaticParams() {
  return [{ locale: 'fr' }]
}

export default async function WebCreationPage({ params }: WebCreationPageProps) {
  const { locale } = await params

  try {
    const dictionary = await getDictionary(locale)

    // Check if web_creation_landing exists in dictionary
    if (!dictionary.web_creation_landing) {
      notFound()
    }

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
        { label: dictionary.web_creation_landing.hero.title },
      ],
    }

    // Generate JSON-LD schema
    const schema = generateWebCreationSchema()

    return (
      <LocaleProvider locale={locale}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <WebCreationLandingContent
          dictionary={dictionary}
          locale={locale}
          breadcrumbs={breadcrumbs}
        />
      </LocaleProvider>
    )
  } catch (error) {
    console.error('Error loading web creation page:', error)
    notFound()
  }
}
