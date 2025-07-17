import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import StructuredData from '@/components/StructuredData'
import { generateServiceSchema, generatePageMetadata, getFAQData } from '@/lib/seo'

// Lazy load non-critical components to improve initial page load
const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  loading: () => <div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />,
})

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className='h-screen bg-gray-100 animate-pulse rounded-lg mx-4' />,
})

const Prices = dynamic(() => import('@/components/Prices'), {
  loading: () => <div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />,
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className='h-32 bg-gray-900 animate-pulse' />,
})

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />,
})

export const metadata: Metadata = generatePageMetadata('home', 'fr')

const serviceSchema = generateServiceSchema({
  name: 'Création de Sites Web',
  description: 'Services de création de sites web professionnels à Paris',
  price: '€€',
  areaServed: 'Paris, Île-de-France, France',
})

export default function HomePage() {
  const faqStructuredData = getFAQData('fr')

  return (
    <>
      <StructuredData
        type='all'
        pageData={{
          name: 'SIDIKOFF DIGITAL - Agence Web à Paris',
          description:
            'Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale',
          url: 'https://www.sidikoff.com/',
          datePublished: '2025-01-01',
          dateModified: new Date().toISOString().split('T')[0],
          locale: 'fr-FR',
        }}
        breadcrumbs={[{ name: 'Accueil', url: 'https://www.sidikoff.com/' }]}
        faqs={faqStructuredData}
        customData={serviceSchema}
      />
      <div className='scroll-smooth min-h-screen'>
        {/* Header avec navigation optimisée */}
        <Header />

        {/* Section Hero optimisée */}
        <main>
          <Hero />

          {/* About section avec SEO amélioré */}
          <About />
          {/* Services avec structured data */}
          <Suspense
            fallback={<div className='h-screen bg-gray-100 animate-pulse rounded-lg mx-4' />}>
            <Services />
          </Suspense>

          {/* Portfolio avec lazy loading */}
          <Suspense fallback={<div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />}>
            <Portfolio />
          </Suspense>

          {/* Pricing avec optimisation conversion */}
          <Suspense fallback={<div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />}>
            <Prices />
          </Suspense>

          {/* FAQ pour améliorer le SEO */}
          <Suspense fallback={<div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />}>
            <FAQ />
          </Suspense>

          {/* Contact form optimisé */}
          <Suspense fallback={<div className='h-96 bg-gray-100 animate-pulse rounded-lg mx-4' />}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer avec structured data */}
        <Suspense fallback={<div className='h-32 bg-gray-900 animate-pulse' />}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}
