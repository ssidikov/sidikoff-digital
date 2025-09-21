import Script from 'next/script'
import dynamic from 'next/dynamic'
import {
  businessLocations,
  generateLocalBusinessSchema,
  organizationSchema,
  generateLocalizedSEOMetadata,
} from '@/lib/seo-utils'
import { getDictionary } from '@/lib/dictionaries'
import { Hero, Services } from '@/sections'

import { Locale } from '@/lib/i18n'

// ИСПРАВЛЕНО: Приоритетная загрузка компонентов с loading states
const Portfolio = dynamic(() => import('@/sections/Portfolio'), {
  ssr: true,
  loading: () => <div className='loading-skeleton h-96 mx-4' />,
})

const Pricing = dynamic(() => import('@/sections/Pricing'), {
  loading: () => <div className='loading-skeleton h-64 mx-4' />,
})

const Testimonials = dynamic(() => import('@/sections/Testimonials'), {
  loading: () => <div className='loading-skeleton h-80 mx-4' />,
})

const FAQ = dynamic(() => import('@/sections/FAQ').then((mod) => ({ default: mod.FAQ })), {
  loading: () => <div className='loading-skeleton h-96 mx-4' />,
})

const Contact = dynamic(() => import('@/sections/Contact'), {
  ssr: true, // Важно для SEO
  loading: () => <div className='loading-skeleton h-64 mx-4' />,
})

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params
  return generateLocalizedSEOMetadata(locale)
}

// ИСПРАВЛЕНО: Добавлена структурированная разметка WebPage
function generateWebPageSchema(locale: Locale) {
  const url = locale === 'fr' ? 'https://www.sidikoff.com' : `https://www.sidikoff.com/${locale}`

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name:
      locale === 'fr'
        ? 'Agence Web Paris - SIDIKOFF DIGITAL'
        : 'Web Agency Paris - SIDIKOFF DIGITAL',
    description:
      locale === 'fr'
        ? 'Agence web Paris spécialisée dans la création de sites internet modernes et applications web. React, Next.js, SEO optimisé.'
        : 'Paris web agency specialized in modern website creation and web applications. React, Next.js, SEO optimized.',
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.sidikoff.com#website',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'fr' ? 'Accueil' : locale === 'en' ? 'Home' : 'Главная',
          item: url,
        },
      ],
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.sidikoff.com#organization',
    },
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  // ИСПРАВЛЕНО: Упрощенная схема данных
  const parisLocation = businessLocations.find((loc) => loc.address.addressLocality === 'Paris')!
  const webPageSchema = generateWebPageSchema(locale)

  return (
    <>
      {/* ИСПРАВЛЕНО: Оптимизированные Structured Data */}
      <Script
        id='structured-data-org'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id='structured-data-paris'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(parisLocation, true)),
        }}
      />
      <Script
        id='webpage-schema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <main className='relative'>
        {/* ИСПРАВЛЕНО: Skip-to-content скрыт по умолчанию, показывается только при фокусе */}
        <a href='#main-content' className='skip-to-content sr-only'>
          {locale === 'fr'
            ? 'Aller au contenu principal'
            : locale === 'en'
              ? 'Skip to main content'
              : 'Перейти к основному содержанию'}
        </a>

        <div id='main-content'>
          <Hero dict={dict.hero} locale={locale} />
          <Services dictionary={dict.services} locale={locale} />
          <Portfolio locale={locale} dictionary={dict.portfolio} />
          <Pricing locale={locale} />
          <Testimonials locale={locale} dictionary={dict.testimonials} />
          <FAQ locale={locale} dictionary={dict.faq} />
          <Contact dictionary={dict.contact} locale={locale} className='' />
        </div>
      </main>
    </>
  )
}
