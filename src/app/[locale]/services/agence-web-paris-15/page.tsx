import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n'
import AgenceWebParis15LandingContent from '@/components/AgenceWebParis15LandingContent'

interface Props {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const content = dict.agence_web_paris_15_landing

  return {
    title: content.meta_title,
    description: content.meta_description,
    keywords: [
      'agence web paris 15ème',
      'agence web paris 15',
      'création site internet paris 15',
      'développement web paris 15ème',
      'agence digitale paris 15',
      'site web paris 75015',
      'agence web vaugirard',
      'agence web grenelle',
      'agence web convention',
      'création site web paris 15ème',
      'next.js paris 15',
      'react paris 15ème',
    ],
    openGraph: {
      title: content.meta_title,
      description: content.meta_description,
      type: 'website',
      locale: locale,
      url: `https://sidikoff.com/${locale}/services/agence-web-paris-15`,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/og/agence-web-paris-15-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Agence Web Paris 15ème - Création Site Internet',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta_title,
      description: content.meta_description,
      images: ['/images/og/agence-web-paris-15-og.jpg'],
    },
    alternates: {
      canonical: `https://sidikoff.com/${locale}/services/agence-web-paris-15`,
      languages: {
        fr: '/fr/services/agence-web-paris-15',
        en: '/en/services/agence-web-paris-15',
        ru: '/ru/services/agence-web-paris-15',
        'x-default': '/fr/services/agence-web-paris-15',
      },
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
  }
}

export default async function AgenceWebParis15Page({ params }: Props) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <AgenceWebParis15LandingContent dictionary={dictionary} locale={locale} />
}
