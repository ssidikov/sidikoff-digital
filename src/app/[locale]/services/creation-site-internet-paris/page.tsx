import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'

import ParisLandingContent from '@/components/ParisLandingContent'

interface ParisPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ParisPageProps): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === 'fr'
      ? 'Création site internet Paris – Agence web & SEO local'
      : locale === 'en'
      ? 'Website Creation Paris | Expert Local Web Developer'
      : 'Создание Сайтов Париж | Эксперт Веб-Разработчик'

  const description =
    locale === 'fr'
      ? 'SIDIKOFF DIGITAL, agence web 75, est spécialisée dans la création de sites Internet et le webmarketing. Contactez-nous dès maintenant.'
      : locale === 'en'
      ? 'SIDIKOFF DIGITAL, Paris web agency (75), specializes in website creation and web marketing. Contact us now.'
      : 'SIDIKOFF DIGITAL, веб-агентство Париж (75), специализируется на создании сайтов и веб-маркетинге. Свяжитесь с нами.'

  return {
    title,
    description,
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
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/${
        locale === 'fr' ? '' : locale + '/'
      }services/creation-site-internet-paris`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/${
        locale === 'fr' ? '' : locale + '/'
      }services/creation-site-internet-paris`,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'
          }/images/og/creation-sites-web-paris.jpg`,
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
      images: [
        `${
          process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'
        }/images/og/creation-sites-web-paris.jpg`,
      ],
    },
  }
}

export default async function ParisPage({ params }: ParisPageProps) {
  const { locale } = await params

  return (
    <div className='min-h-screen'>
      <ParisLandingContent locale={locale} />
    </div>
  )
}
