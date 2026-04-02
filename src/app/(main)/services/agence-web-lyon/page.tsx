import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import Script from 'next/script'

import { Section } from '@/components/ui'
import CTAButton from '@/components/ui/CTAButton'
import Link from 'next/link'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Agence Web Lyon | Création de Sites Internet — SIDIKOFF DIGITAL'

  const description =
    'Agence web à Lyon — création de sites internet sur mesure, SEO local et refonte web. Sites livrés en 7–14 jours, dès 690 €. Expert React & Next.js. Devis gratuit sous 24h ✓'

  return {
    title,
    description,
    keywords: [
      'agence web Lyon',
      'agence web Lyon 69',
      'création site internet Lyon',
      'développeur web Lyon',
      'agence digitale Lyon',
      'site web professionnel Lyon',
      'SEO Lyon',
      'Next.js Lyon',
      'agence web Villeurbanne',
      'agence web Auvergne Rhône Alpes',
    ],
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
      canonical: createCanonicalUrl('services/agence-web-lyon', 'fr'),
      languages: generateAlternateUrls('services/agence-web-lyon'),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      url: 'https://www.sidikoff.com/services/agence-web-lyon',
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: '/images/opengraph-fr.png',
          width: 1200,
          height: 630,
          alt: 'Agence Web Lyon - Création site internet professionnel',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@sidikoffdigital',
      images: ['/images/opengraph-fr.png'],
    },
  }
}

const agenceWebLyonSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://www.sidikoff.com/services/agence-web-lyon#LocalBusiness',
    name: 'SIDIKOFF DIGITAL — Agence Web Lyon',
    description:
      'Agence web à Lyon spécialisée en création de sites internet sur mesure, SEO local et refonte web. Technologies React et Next.js.',
    url: 'https://www.sidikoff.com/services/agence-web-lyon',
    telephone: '+33626932734',
    email: 's.sidikoff@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Lyon',
      postalCode: '69000',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.7640',
      longitude: '4.8357',
    },
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Villeurbanne' },
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'City', name: 'Bron' },
      { '@type': 'City', name: 'Vénissieux' },
      { '@type': 'Place', name: 'Auvergne-Rhône-Alpes' },
    ],
    serviceType: [
      'Création de site internet',
      'Agence web Lyon',
      'SEO local Lyon',
      'Développement web React Next.js',
      'Refonte de site web',
      'Site e-commerce Lyon',
    ],
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://github.com/ssidikov',
      'https://linkedin.com/in/sardorbeksidikov',
      'https://www.sidikoff.com',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services agence web Lyon',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création site vitrine Lyon',
            description: 'Site vitrine professionnel pour entreprises lyonnaises, à partir de 690 €',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site e-commerce Lyon',
            description: 'Boutique en ligne sécurisée avec paiement et gestion des produits, à partir de 1 990 €',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO local Lyon',
            description: 'Référencement naturel local pour apparaître sur Google à Lyon et dans le 69',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Refonte de site web Lyon',
            description: 'Modernisation de site existant : nouveau design, performance, SEO amélioré',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.sidikoff.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.sidikoff.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Agence Web Lyon', item: 'https://www.sidikoff.com/services/agence-web-lyon' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle est la meilleure agence web à Lyon ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SIDIKOFF DIGITAL est une agence web à Lyon spécialisée en création de sites internet sur mesure avec React et Next.js. Nous livrons des sites modernes, rapides et optimisés SEO en 7 à 14 jours.',
        },
      },
      {
        '@type': 'Question',
        name: "Combien coûte la création d'un site web à Lyon ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La création d\'un site web à Lyon démarre à 690 € pour un site vitrine, 1 290 € pour un site multi-pages Pro et à partir de 1 990 € pour un site e-commerce ou sur mesure. Devis gratuit sous 24h.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le délai pour créer un site internet à Lyon ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En moyenne 7 à 14 jours pour un site vitrine, 4 à 8 semaines pour un site e-commerce ou sur mesure. Nous proposons aussi un service express pour les projets urgents.',
        },
      },
      {
        '@type': 'Question',
        name: "L'agence web SIDIKOFF DIGITAL intervient-elle dans toute la région lyonnaise ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Nous intervenons à Lyon (tous arrondissements), Villeurbanne, Caluire-et-Cuire, Bron, Vénissieux et dans toute la région Auvergne-Rhône-Alpes. Nous travaillons aussi à distance pour toute la France.",
        },
      },
    ],
  },
]

export default async function AgenceWebLyonPage() {
  return (
    <div className='min-h-screen'>
      {agenceWebLyonSchemas.map((schema, i) => (
        <Script
          key={`agence-web-lyon-schema-${i}`}
          id={`agence-web-lyon-schema-${i}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <Section className='pt-32 pb-20 bg-linear-to-br from-[#112D4E] via-[#1a3f6f] to-[#3F72AF] relative overflow-hidden text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(63,114,175,0.4),transparent_60%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(17,45,78,0.6),transparent_60%)]' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <div className='inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20'>
                  <svg className='w-4 h-4 mr-2 text-blue-300' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Agence Web à Lyon — Expert React & Next.js
                </div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                  Votre{' '}
                  <span className='bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent'>
                    Agence Web à Lyon
                  </span>{' '}
                  — Sites Modernes & SEO
                </h1>

                <p className='text-xl text-blue-100 leading-relaxed'>
                  Vous êtes une entreprise, un artisan ou une startup à{' '}
                  <strong className='text-white'>Lyon</strong> et vous cherchez une{' '}
                  <strong className='text-white'>agence web locale</strong> pour créer votre site
                  internet ? SIDIKOFF DIGITAL crée des sites modernes, rapides et optimisés SEO —
                  livrés en <strong className='text-white'>7 à 14 jours</strong>, à partir de{' '}
                  <strong className='text-white'>690 €</strong>.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <CTAButton
                  href='/contact'
                  size='md'
                  className='bg-white text-[#112D4E] hover:bg-blue-50 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
                  Devis gratuit sous 24h
                </CTAButton>
                <CTAButton
                  href='/projects'
                  variant='outline'
                  size='md'
                  className='border-2 border-white/50 text-white hover:bg-white/10 transition-all duration-300'>
                  Voir nos réalisations
                </CTAButton>
              </div>

              {/* Internal SEO links */}
              <div className='flex flex-wrap gap-3 pt-2'>
                <Link
                  href='/services/creation-site-internet-lyon'
                  className='text-sm text-blue-200 hover:text-white hover:underline transition-colors'>
                  → Création site internet Lyon
                </Link>
                <Link
                  href='/services/creation-site-web-villeurbanne'
                  className='text-sm text-blue-200 hover:text-white hover:underline transition-colors'>
                  → Site web Villeurbanne
                </Link>
                <Link
                  href='/services/creation-site-web-caluire-et-cuire'
                  className='text-sm text-blue-200 hover:text-white hover:underline transition-colors'>
                  → Site web Caluire
                </Link>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-6 pt-4'>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20'>
                  <div className='text-2xl font-bold text-white'>20+</div>
                  <div className='text-sm text-blue-200'>Projets à Lyon</div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20'>
                  <div className='text-2xl font-bold text-white'>7–14j</div>
                  <div className='text-sm text-blue-200'>Délai livraison</div>
                </div>
                <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20'>
                  <div className='text-2xl font-bold text-white'>690€</div>
                  <div className='text-sm text-blue-200'>Dès</div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative z-10'>
                <Image
                  src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                  alt='Agence web Lyon - Création site internet professionnel'
                  className='rounded-2xl shadow-2xl'
                  width={600}
                  height={400}
                  priority
                />
                <div className='absolute inset-0 bg-linear-to-tr from-[#112D4E]/30 to-transparent rounded-2xl' />
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg z-20'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                  <span className='text-sm font-medium text-gray-700'>Disponible à Lyon</span>
                </div>
              </div>

              <div className='absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                <div className='text-center'>
                  <div className='text-lg font-bold text-[#112D4E]'>Top 3</div>
                  <div className='text-xs text-gray-600'>Google Lyon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className='flex flex-col gap-0'>
        {/* Services Section */}
        <Section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Nos services d&apos;agence web à Lyon
              </h2>
              <div className='w-24 h-1 bg-linear-to-r from-[#3F72AF] to-[#112D4E] mx-auto mb-6' />
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                De la création de votre site vitrine à la boutique e-commerce, en passant par le
                référencement SEO local à Lyon.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Site vitrine */}
              <div className='bg-linear-to-br from-[#F9F7FF] to-[#DBE2EF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Site vitrine Lyon</h3>
                <p className='text-gray-600 mb-4'>
                  Un <strong>site vitrine professionnel</strong> pour présenter vos services, attirer
                  des clients locaux et vous démarquer de la concurrence à Lyon.
                </p>
                <div className='text-[#3F72AF] font-bold text-lg mb-4'>À partir de 690 €</div>
                <Link href='/services/creation-sites-web' className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </div>

              {/* Site e-commerce */}
              <div className='bg-linear-to-br from-[#F9F7FF] to-[#DBE2EF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13a2 2 0 100 4 2 2 0 000-4zM9 19a2 2 0 100 4 2 2 0 000-4z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Site e-commerce Lyon</h3>
                <p className='text-gray-600 mb-4'>
                  Boutique en ligne avec paiement sécurisé, gestion des stocks et interface
                  d&apos;administration pour vendre 24h/24 à Lyon et dans toute la France.
                </p>
                <div className='text-[#3F72AF] font-bold text-lg mb-4'>À partir de 1 990 €</div>
                <Link href='/services/creation-site-ecommerce' className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </div>

              {/* SEO local Lyon */}
              <div className='bg-linear-to-br from-[#F9F7FF] to-[#DBE2EF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>SEO local Lyon</h3>
                <p className='text-gray-600 mb-4'>
                  Référencement naturel ciblé sur Lyon et sa région : balises meta, contenus
                  géolocalisés, Google Business Profile, Core Web Vitals optimisés.
                </p>
                <div className='text-[#3F72AF] font-bold text-lg mb-4'>Dès 149 €/mois</div>
                <Link href='/services/optimisation-seo' className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </div>

              {/* Refonte web */}
              <div className='bg-linear-to-br from-[#F9F7FF] to-[#DBE2EF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Refonte de site Lyon</h3>
                <p className='text-gray-600 mb-4'>
                  Votre site est obsolète ou lent ? Nous le modernisons avec un nouveau design,
                  de meilleures performances et un SEO amélioré.
                </p>
                <div className='text-[#3F72AF] font-bold text-lg mb-4'>À partir de 690 €</div>
                <Link href='/services/refonte-sites-web' className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </div>

              {/* Maintenance */}
              <div className='bg-linear-to-br from-[#F9F7FF] to-[#DBE2EF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Maintenance & Support</h3>
                <p className='text-gray-600 mb-4'>
                  Mises à jour de sécurité, sauvegardes automatiques, monitoring et support
                  technique réactif pour garder votre site performant.
                </p>
                <div className='text-[#3F72AF] font-bold text-lg mb-4'>Dès 49 €/mois</div>
                <Link href='/services/maintenance-support' className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </div>

              {/* Développement sur mesure */}
              <div className='bg-linear-to-br from-[#F9F7FF] to-[#DBE2EF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Application web sur mesure</h3>
                <p className='text-gray-600 mb-4'>
                  Développement React / Next.js de fonctionnalités avancées : espace client, outil
                  interne, API, intégrations tierces.
                </p>
                <div className='text-[#3F72AF] font-bold text-lg mb-4'>Sur devis</div>
                <Link href='/contact' className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  Demander un devis
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section className='py-20 bg-linear-to-br from-[#F8F9FA] to-[#DBE2EF]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Pourquoi choisir SIDIKOFF DIGITAL comme agence web à Lyon ?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Une expertise locale au service de votre visibilité digitale
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: (
                    <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                    </svg>
                  ),
                  title: 'Expertise locale Lyon',
                  desc: 'Basés à Lyon, nous connaissons le tissu économique local et les enjeux des entreprises lyonnaises.',
                },
                {
                  icon: (
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                  ),
                  title: 'Technologies modernes',
                  desc: 'React, Next.js et Tailwind CSS — les mêmes technologies utilisées par Netflix, Airbnb et Vercel.',
                },
                {
                  icon: (
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  ),
                  title: 'Livraison rapide',
                  desc: 'Site vitrine en 7–14 jours. Projet e-commerce en 4–8 semaines. Délais respectés, résultats garantis.',
                },
                {
                  icon: (
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                    </svg>
                  ),
                  title: 'SEO local intégré',
                  desc: 'Chaque site est optimisé pour les recherches locales à Lyon. Balises, contenu géolocalisé, Google Business.',
                },
                {
                  icon: (
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  ),
                  title: 'Tarifs transparents',
                  desc: 'Devis gratuit et détaillé sous 24h. Aucun frais caché. À partir de 690 € pour un site vitrine professionnel.',
                },
                {
                  icon: (
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  ),
                  title: 'Accompagnement dédié',
                  desc: 'De la conception à la mise en ligne et au-delà : formation, maintenance et conseil stratégique inclus.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300'>
                  <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4'>
                    {item.icon}
                  </div>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-3'>{item.title}</h3>
                  <p className='text-gray-600'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Zone d'intervention */}
        <Section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Zone d&apos;intervention — Agence web Lyon et région
                </h2>
                <p className='text-xl text-gray-600 mb-8'>
                  Notre agence web intervient dans tout le grand Lyon et ses communes
                  environnantes. Nous travaillons aussi à distance pour toute la France.
                </p>

                <div className='grid grid-cols-2 gap-4 mb-8'>
                  {[
                    { city: 'Lyon (tous arrondissements)', href: '/services/creation-site-internet-lyon' },
                    { city: 'Villeurbanne', href: '/services/creation-site-web-villeurbanne' },
                    { city: 'Caluire-et-Cuire', href: '/services/creation-site-web-caluire-et-cuire' },
                    { city: 'Bron', href: null },
                    { city: 'Vénissieux', href: null },
                    { city: 'Décines-Charpieu', href: null },
                    { city: 'Meyzieu', href: null },
                    { city: 'Toute la France', href: null },
                  ].map((item, i) => (
                    <div key={i} className='flex items-center space-x-2'>
                      <div className='w-2 h-2 bg-[#3F72AF] rounded-full flex-shrink-0' />
                      {item.href ? (
                        <Link href={item.href} className='text-[#3F72AF] hover:text-[#112D4E] hover:underline transition-colors font-medium'>
                          {item.city}
                        </Link>
                      ) : (
                        <span className='text-gray-700'>{item.city}</span>
                      )}
                    </div>
                  ))}
                </div>

                <CTAButton href='/contact' size='md'>
                  Obtenir un devis gratuit
                </CTAButton>
              </div>

              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                  alt='Agence web Lyon - zone intervention'
                  className='rounded-2xl shadow-xl'
                  width={600}
                  height={400}
                />
                <div className='absolute inset-0 bg-linear-to-tr from-[#3F72AF]/10 to-transparent rounded-2xl' />
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className='py-20 bg-linear-to-b from-[#F8F9FA] to-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                FAQ — Agence web Lyon
              </h2>
              <p className='text-xl text-gray-600'>Réponses aux questions les plus fréquentes</p>
            </div>

            <div className='space-y-8'>
              {[
                {
                  q: 'Quelle est la meilleure agence web à Lyon ?',
                  a: 'SIDIKOFF DIGITAL est une agence web à Lyon spécialisée en création de sites internet sur mesure avec React et Next.js. Nous livrons des sites modernes, rapides et optimisés SEO en 7 à 14 jours, avec un accompagnement personnalisé.',
                },
                {
                  q: "Combien coûte un site web à Lyon ?",
                  a: "La création d'un site web à Lyon démarre à 690 € pour un site vitrine, 1 290 € pour un site multi-pages Pro et à partir de 1 990 € pour un e-commerce ou un site sur mesure. Devis gratuit sous 24h.",
                },
                {
                  q: 'Quel est le délai de création de votre agence web à Lyon ?',
                  a: 'Nous livrons un site vitrine en 7 à 14 jours, un site e-commerce en 4 à 8 semaines. Nous proposons également un service express pour les projets urgents.',
                },
                {
                  q: "L'agence intervient-elle dans toute la région lyonnaise ?",
                  a: "Oui. Nous intervenons à Lyon (tous arrondissements), Villeurbanne, Caluire-et-Cuire, Bron, Vénissieux et dans toute la région Auvergne-Rhône-Alpes. Nous travaillons aussi à distance pour toute la France.",
                },
              ].map((faq, i) => (
                <div key={i} className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>{faq.q}</h3>
                  <p className='text-gray-600 leading-relaxed'>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className='py-20 bg-linear-to-br from-[#112D4E] to-[#3F72AF] text-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-4xl font-bold mb-6'>
              Lancez votre projet avec notre agence web à Lyon
            </h2>
            <p className='text-xl mb-8 opacity-90'>
              Contactez-nous pour un devis gratuit sous 24h. Sites livrés en 7–14 jours, à partir
              de <strong>690 €</strong>.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <CTAButton
                href='/contact'
                variant='outline'
                size='lg'
                className='bg-white text-[#112D4E] hover:bg-gray-100 border-white font-bold'>
                Devis gratuit sous 24h
              </CTAButton>
              <CTAButton
                href='/tarifs'
                variant='outline'
                size='lg'
                className='border-white text-white hover:bg-white/10'>
                Consulter nos tarifs
              </CTAButton>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
