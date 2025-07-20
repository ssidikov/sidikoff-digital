import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SEOHead from '@/components/SEOHead'
import { 
  generatePageMetadata, 
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema
} from '@/lib/enhanced-seo'

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

export default function HomePage() {
  // Generate structured data for the homepage
  const organizationSchema = generateOrganizationSchema()
  const localBusinessSchema = generateLocalBusinessSchema()
  const websiteSchema = generateWebSiteSchema('fr')
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Accueil', url: 'https://sidikoff.com/' }
  ])

  const structuredData = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema
  ]

  return (
    <>
      <SEOHead
        title="SIDIKOFF DIGITAL - Agence Web à Paris | Création Sites Internet"
        description="Agence web parisienne spécialisée en création de sites internet, applications web et stratégie digitale. Expertise Next.js, React, SEO."
        canonical="https://sidikoff.com/"
        locale="fr"
        structuredData={structuredData}
        keywords={['agence web paris', 'création site internet', 'développement web', 'next.js', 'react', 'seo']}
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
