import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LocaleAboutPageClient from './LocaleAboutPageClient'

const locales = ['fr', 'en', 'ru']

// Generate dynamic metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const metadataByLocale = {
    fr: {
      title: 'À propos - SIDIKOFF DIGITAL | Sardorbek SIDIKOV, Fondateur',
      description:
        'Découvrez SIDIKOFF DIGITAL et son fondateur Sardorbek SIDIKOV. Agence web parisienne spécialisée en création de sites internet, React, Next.js et stratégie digitale.',
      keywords: [
        'SIDIKOFF DIGITAL',
        'Sardorbek SIDIKOV',
        'à propos agence web',
        'fondateur SIDIKOFF',
        'développeur web Paris',
        'expert React Next.js',
        'agence web française',
        'histoire SIDIKOFF DIGITAL',
        'équipe développement web',
        'expertise technique Paris',
      ],
    },
    en: {
      title: 'About Us - SIDIKOFF DIGITAL | Sardorbek SIDIKOV, Founder',
      description:
        'Discover SIDIKOFF DIGITAL and its founder Sardorbek SIDIKOV. Parisian web agency specialized in website creation, React, Next.js and digital strategy.',
      keywords: [
        'SIDIKOFF DIGITAL',
        'Sardorbek SIDIKOV',
        'about web agency',
        'SIDIKOFF founder',
        'web developer Paris',
        'React Next.js expert',
        'French web agency',
        'SIDIKOFF DIGITAL story',
        'web development team',
        'technical expertise Paris',
      ],
    },
    ru: {
      title: 'О нас - SIDIKOFF DIGITAL | Сардорбек СИДИКОВ, Основатель',
      description:
        'Узнайте о SIDIKOFF DIGITAL и его основателе Сардорбеке СИДИКОВЕ. Парижское веб-агентство, специализирующееся на создании сайтов, React, Next.js и цифровой стратегии.',
      keywords: [
        'SIDIKOFF DIGITAL',
        'Сардорбек СИДИКОВ',
        'о веб агентстве',
        'основатель SIDIKOFF',
        'веб разработчик Париж',
        'эксперт React Next.js',
        'французское веб агентство',
        'история SIDIKOFF DIGITAL',
        'команда веб разработки',
        'техническая экспертиза Париж',
      ],
    },
  }

  const metadata = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.fr

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://www.sidikoff.com/${locale}/about`,
      type: 'website',
      images: ['/images/contact.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/images/contact.png'],
    },
    alternates: {
      canonical: `https://www.sidikoff.com/${locale}/about`,
      languages: {
        fr: 'https://www.sidikoff.com/fr/about',
        en: 'https://www.sidikoff.com/en/about',
        ru: 'https://www.sidikoff.com/ru/about',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  return <LocaleAboutPageClient locale={locale} />
}
