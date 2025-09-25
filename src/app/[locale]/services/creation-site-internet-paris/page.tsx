import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'
import SEOLinks from '@/components/SEOLinks'
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
      ? 'Agence web à Paris spécialisée en création de sites internet vitrine & e-commerce. Sites modernes, SEO optimisés et adaptés aux entreprises parisiennes.'
      : locale === 'en'
        ? 'Paris web agency specialized in professional website creation. Modern, SEO-optimized sites adapted to Parisian businesses.'
        : 'Веб-агентство в Париже, специализирующееся на создании профессиональных сайтов. Современные, SEO-оптимизированные сайты.'

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
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/${locale === 'fr' ? '' : locale + '/'}services/creation-site-internet-paris`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/${locale === 'fr' ? '' : locale + '/'}services/creation-site-internet-paris`,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/images/og/creation-sites-web-paris.jpg`,
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
        `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/images/og/creation-sites-web-paris.jpg`,
      ],
    },
  }
}

export default async function ParisPage({ params }: ParisPageProps) {
  const { locale } = await params

  return (
    <div className='min-h-screen'>
      <ParisLandingContent locale={locale} />
      <SEOLinks locale={locale} />
    </div>
  )
}
