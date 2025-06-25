import { notFound } from 'next/navigation'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const locales = ['fr', 'en', 'ru']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }
  // Generate metadata based on locale
  const metadataByLocale = {
    fr: {
      title: 'Agence Web - SIDIKOFF DIGITAL',
      description:
        'Agence web spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO.',
      keywords: [
        'agence web paris',
        'création site internet',
        'développement web',
        'agence digitale',
      ],
    },
    en: {
      title: 'Web Agency - SIDIKOFF DIGITAL',
      description:
        'Parisian web agency specialized in website creation, web applications and digital strategy. Modern development, UX/UI design, SEO optimization.',
      keywords: ['web agency paris', 'website creation', 'web development', 'digital agency'],
    },
    ru: {
      title: 'Веб-агентство - SIDIKOFF DIGITAL',
      description:
        'Парижское веб-агентство, специализирующееся на создании сайтов, веб-приложений и цифровой стратегии. Современная разработка, UX/UI дизайн, SEO оптимизация.',
      keywords: ['веб агентство париж', 'создание сайтов', 'веб разработка', 'цифровое агентство'],
    },
  }

  const seoData = metadataByLocale[locale as keyof typeof metadataByLocale]

  return generateSEOMetadata({
    ...seoData,
    locale: locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : 'ru-RU',
    canonical: `https://www.sidikoff.com/${locale}`,
    alternateLanguages: {
      fr: 'https://www.sidikoff.com/fr',
      en: 'https://www.sidikoff.com/en',
      ru: 'https://www.sidikoff.com/ru',
    },
  })
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  return <>{children}</>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
