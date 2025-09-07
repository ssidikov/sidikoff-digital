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
    title: `${title} | SIDIKOFF DIGITAL`,
    description: description,
    keywords: ['création site web', 'développement web', 'site internet', 'web design'],
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      locale: locale,
      images: [
        {
          url: '/images/og-creation-sites-web.jpg',
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
      images: ['/images/og-creation-sites-web.jpg'],
    },
    alternates: {
      canonical:
        locale === 'fr' ? '/services/creation-sites-web' : `/${locale}/services/creation-sites-web`,
      languages: {
        fr: '/services/creation-sites-web',
        en: '/en/services/creation-sites-web',
        ru: '/ru/services/creation-sites-web',
      },
    },
  }
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
          label: locale === 'fr' ? 'Accueil' : locale === 'en' ? 'Home' : 'Главная',
          href: `/${locale === 'fr' ? '' : locale}`,
        },
        {
          label: locale === 'fr' ? 'Services' : locale === 'en' ? 'Services' : 'Услуги',
          href: `/${locale === 'fr' ? '' : locale}services`,
        },
        { label: dictionary.web_creation_landing.hero.title },
      ],
    }

    // Generate JSON-LD schema
    const schema = generateWebCreationSchema(locale)

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
