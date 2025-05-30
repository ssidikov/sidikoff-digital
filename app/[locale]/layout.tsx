import { notFound } from 'next/navigation'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'
import { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }> | { locale: string }
}

const locales = ['fr', 'en', 'ru']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string }
}): Promise<Metadata> {
  // Handle both Promise and direct params for Next.js 15+ compatibility
  const resolvedParams = await (
    typeof (params as any).then === 'function' 
      ? params as Promise<{ locale: string }> 
      : Promise.resolve(params as { locale: string })
  )
  
  const { locale } = resolvedParams

  if (!locales.includes(locale)) {
    notFound()
  }

  // Generate metadata based on locale
  const metadataByLocale = {
    fr: {
      title: 'SIDIKOFF DIGITAL - Agence Web à Paris | Création Sites & Apps',
      description:
        'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Développement moderne, design UX/UI, référencement SEO.',
      keywords: [
        'agence web paris',
        'création site internet',
        'développement web',
        'agence digitale',
      ],
    },
    en: {
      title: 'SIDIKOFF DIGITAL - Web Agency in Paris | Website & App Development',
      description:
        'Parisian web agency specialized in website creation, web applications and digital strategy. Modern development, UX/UI design, SEO optimization.',
      keywords: ['web agency paris', 'website creation', 'web development', 'digital agency'],
    },
    ru: {
      title: 'SIDIKOFF DIGITAL - Веб-агентство в Париже | Создание Сайтов и Приложений',
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
  // Handle both Promise and direct params for Next.js 15+ compatibility
  const resolvedParams = await (
    typeof (params as any).then === 'function' 
      ? params as Promise<{ locale: string }> 
      : Promise.resolve(params as { locale: string })
  )
  
  const { locale } = resolvedParams

  if (!locales.includes(locale)) {
    notFound()
  }

  return <>{children}</>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
