import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import AgenceWebParisLandingContent from '@/components/AgenceWebParisLandingContent'

interface Props {
  params: Promise<{
    locale: Locale
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const dict = await getDictionary(params.locale)
  const content = dict.agence_web_paris_landing

  const baseUrl = 'https://sidikoff-digital.fr'
  const url = `${baseUrl}/${params.locale}/services/agence-web-paris`

  return {
    title: content.meta_title,
    description: content.meta_description,
    keywords: [
      'agence web paris',
      'agence web ile de france',
      'agence communication paris',
      'agence digitale paris',
      'agence web wordpress paris',
      'creation site web paris',
      'next.js paris',
      'react paris',
      'développement web paris',
    ],
    authors: [{ name: 'SIDIKOFF DIGITAL' }],
    creator: 'SIDIKOFF DIGITAL',
    publisher: 'SIDIKOFF DIGITAL',
    alternates: {
      canonical: url,
      languages: {
        'fr-FR': `${baseUrl}/fr/services/agence-web-paris`,
        'en-US': `${baseUrl}/en/services/agence-web-paris`,
        'ru-RU': `${baseUrl}/ru/services/agence-web-paris`,
      },
    },
    openGraph: {
      title: content.meta_title,
      description: content.meta_description,
      url: url,
      siteName: 'SIDIKOFF DIGITAL',
      locale: params.locale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/og-creation-sites-web.jpg`,
          width: 1200,
          height: 630,
          alt: content.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta_title,
      description: content.meta_description,
      images: [`${baseUrl}/images/og-creation-sites-web.jpg`],
      creator: '@sidikoff_digital',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'technology',
  }
}

export default async function AgenceWebParisLandingPage(props: Props) {
  const params = await props.params
  const dict = await getDictionary(params.locale)

  return <AgenceWebParisLandingContent dictionary={dict} locale={params.locale} />
}
