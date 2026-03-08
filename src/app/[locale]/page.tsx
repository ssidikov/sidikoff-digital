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

// ОПТИМИЗАЦИЯ: ISR для моментального TTFB
// Страница генерируется статически и ревалидируется каждые 12 часов
export const revalidate = 43200 // 12 hours in seconds

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

// ОПТИМИЗАЦИЯ: Предгенерация статических параметров для всех локалей
// Next.js сгенерирует эти страницы на этапе build
export async function generateStaticParams() {
  return [{ locale: 'fr' }]
}

// ИСПРАВЛЕНО: Добавлена структурированная разметка WebPage
function generateWebPageSchema() {
  const url = 'https://www.sidikoff.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name: 'Agence Web - SIDIKOFF DIGITAL',
    description:
      'Agence web spécialisée dans la création de sites internet modernes et applications web. React, Next.js, SEO optimisé.',
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.sidikoff.com/#website',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: url,
        },
      ],
    },
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.sidikoff.com/#organization',
    },
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  // Use first business location for the schema
  const mainLocation = businessLocations[0]!
  const webPageSchema = generateWebPageSchema()

  return (
    <>
      {/* ИСПРАВЛЕНО: Оптимизированные Structured Data */}
      <Script
        id='structured-data-org'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id='structured-data-lb'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(mainLocation, true)),
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
          {'Aller au contenu principal'}
        </a>

        <div id='main-content'>
          <Hero dict={dict.hero} locale={locale} />
          <Services dictionary={dict.services} locale={locale} isHomePage={true} />
          <Portfolio locale={locale} dictionary={dict.portfolio} isHomePage={true} />
          <Pricing locale={locale} />
          <Testimonials locale={locale} dictionary={dict.testimonials} />
          <FAQ locale={locale} dictionary={dict.faq} isHomePage={true} />
          <Contact dictionary={dict.contact} locale={locale} className='' isHomePage={true} />
        </div>
      </main>
    </>
  )
}
