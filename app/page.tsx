import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import StructuredData from '@/components/StructuredData'
import { generateServiceSchema } from '@/lib/seo'

// Lazy load non-critical components to improve initial page load
const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />
})

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-screen bg-gray-100 animate-pulse rounded-lg mx-4" />
})

const Prices = dynamic(() => import('@/components/Prices'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 bg-gray-900 animate-pulse" />
})

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />
})

export const metadata: Metadata = {
  title: 'Agence Web - SIDIKOFF DIGITAL',
  description:
    'SIDIKOFF DIGITAL, agence web parisienne fondée par Sardorbek SIDIKOV. Création de sites internet sur mesure, applications React/Next.js, stratégie SEO et transformation digitale. Découvrez notre expertise et notre approche unique.',
  keywords: [
    'SIDIKOFF DIGITAL',
    'agence web Paris',
    'création site internet Paris',
    'développement web Paris',
    'Sardorbek SIDIKOV',
    'agence digitale parisienne',
    'développeur React Paris',
    'Next.js développement',
    'SEO Paris',
    'UX UI design Paris',
    'site web responsive',
    'application web React',
    'transformation digitale',
    'agence web française premium',
    'développeur TypeScript Paris',
    'Web agency Paris',
    'Web design Paris',
    'Web development agency',
    'Web design agency',
    'Web development services',
    'Web design services',
    'Web development company',
    'Web design company',
    'Web development Paris',
    'SEO',
    'Création site internet',
    'Digital marketing',
    'Веб-агентство Париж',
    'Создание сайтов',
    'React разработка',
    'Оптимизация SEO',
    'Разработка веб-приложений',
    'Сайт под ключ',
    'Разработка сайтов',
    'Landing page Paris',
    'Site vitrine Paris',
    'Site e-commerce Paris',
    'Site web Paris',
    'Site internet Paris',
    'Développement web Paris',
    'Développement React Paris',
    'Développement Next.js Paris',
    'Développement d’applications web Paris',
    'Développement d’applications React Paris',
    'Développement d’applications Next.js Paris',
    'Développement de sites web Paris',
    'Développement de sites internet Paris',
    'Développement de sites React Paris',
    'Développement de sites Next.js Paris',
    'Développement de sites e-commerce Paris',
    'Développement de sites vitrine Paris',
    'Développement de sites web responsive Paris',
    'Développement de sites web modernes Paris',
    'Développement de sites web professionnels Paris',
    'Développement de sites web sur mesure Paris',
    'Développement de sites web optimisés SEO Paris',
    'Développement de sites web performants Paris',
    'Développement de sites web sécurisés Paris',
    'Développement de sites web accessibles Paris',
    'Développement de sites web rapides Paris',
    'Développement de sites web évolutifs Paris',
    'Développement de sites web adaptatifs Paris',
    'Développement de sites web intuitifs Paris',
    'Développement de sites web ergonomiques Paris',
    'Développement de sites web interactifs Paris',
    'Développement de sites web dynamiques Paris',
    'Développement de sites web eco Paris',
    'Développement de sites web éco-responsables Paris',
    'Développement de sites web éco-conçus Paris',
    'Développement de sites web éco-durables Paris',
    'Développement de sites web éco-innovants Paris',
    'Développement de sites web éco-efficaces Paris',
    'Développement de sites web éco-performants Paris',
    'Développement de sites web éco-optimisés Paris',
    'Développement de sites web éco-responsables Paris',
    'Développement de sites web éco-conscients Paris',
    'Développement de sites web éco-compatibles Paris',
    'Développement de sites web éco-intelligents Paris',
    'Développement de sites web éco-centrés Paris',
    'Développement de sites web éco-innovants Paris',
    'Développement de sites web éco-optimisés Paris',
    'Développement de sites web éco-responsables Paris',
    'Web agency Paris',
    'React development',
    'SEO services',
    'Website creation',
    'Digital strategy',
  ],
  openGraph: {
    title: 'SIDIKOFF DIGITAL - Agence Web SEO & Développement Site web',
    description:
      'Agence web parisienne spécialisée en création de sites internet, applications web React, SEO et stratégie digitale efficace pour booster votre présence en ligne.',
    url: 'https://www.sidikoff.com/',
    siteName: 'SIDIKOFF DIGITAL',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIDIKOFF DIGITAL - Agence Web SEO & Développement Site web',
    description:
      'Agence web parisienne spécialisée en création de sites internet, applications web React, SEO et stratégie digitale efficace pour booster votre présence en ligne.',
  },
}

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.sidikoff.com/#webpage',
  url: 'https://www.sidikoff.com/',
  name: 'SIDIKOFF DIGITAL - Agence Web à Paris',
  description:
    'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale',
  isPartOf: {
    '@id': 'https://www.sidikoff.com/#website',
  },
  about: {
    '@id': 'https://www.sidikoff.com/#organization',
  },
  mainEntity: {
    '@id': 'https://www.sidikoff.com/#business',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.sidikoff.com/#organization',
  name: 'SIDIKOFF DIGITAL',
  url: 'https://www.sidikoff.com/',
  logo: 'https://www.sidikoff.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/sidikoff-digital',
    'https://www.facebook.com/sidikoff-digital',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33 6 26 93 27 34',
    contactType: 'customer service',
    availableLanguage: ['French', 'English', 'Russian'],
  },
}

const servicesSchema = [
  generateServiceSchema({
    name: 'Création de Sites Web',
    description: 'Développement de sites internet modernes, responsifs et optimisés SEO',
    price: '500',
    areaServed: 'Paris, France',
  }),
  generateServiceSchema({
    name: 'Applications Web',
    description: "Développement d'applications web sur mesure avec technologies modernes",
    price: '900',
    areaServed: 'Paris, France',
  }),
  generateServiceSchema({
    name: 'E-commerce',
    description: 'Création de boutiques en ligne performantes et sécurisées',
    price: '1200',
    areaServed: 'Paris, France',
  }),
]

export default function Page() {
  return (
    <>
      <StructuredData customData={homepageSchema} />
      <StructuredData customData={organizationSchema} />
      {servicesSchema.map((schema, index) => (
        <StructuredData key={index} customData={schema} />
      ))}

      <div className='scroll-smooth min-h-screen antialiased'>
        <Header />
        <main>
          {/* Critical above-the-fold content */}
          <Hero />
          <About />
          
          {/* Lazy loaded components with Suspense */}
          <Suspense fallback={<div className="h-screen bg-gray-100 animate-pulse rounded-lg mx-4" />}>
            <Services />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />}>
            <Portfolio />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />}>
            <Prices />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />}>
            <FAQ />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg mx-4" />}>
            <Contact />
          </Suspense>
        </main>
        
        <Suspense fallback={<div className="h-32 bg-gray-900 animate-pulse" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}
