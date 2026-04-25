import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'

import { Section } from '@/components/ui'
import CTAButton from '@/components/ui/CTAButton'
import Link from 'next/link'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Création Site Internet Lyon | Développeur Web & Agence Digitale'

  const description =
    'Agence web & développeur web à Lyon (69 / 69100) — sites vitrines, e-commerce et applications sur mesure, livrés en 7–14 jours. SEO local, React & Next.js. Devis gratuit sous 24h ✓'

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
      canonical: createCanonicalUrl('services/creation-site-internet-lyon', 'fr'),
      languages: generateAlternateUrls('services/creation-site-internet-lyon'),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'fr_FR',
      url: 'https://www.sidikoff.com/services/creation-site-internet-lyon',
      siteName: 'Sidikoff Digital',
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

const lyonSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.sidikoff.com/services/creation-site-internet-lyon#webpage',
    url: 'https://www.sidikoff.com/services/creation-site-internet-lyon',
    name: 'Création site internet Lyon — Agence web & développeur web à Lyon',
    description: 'Agence web Lyon (69 / 69100) — sites vitrines, e-commerce et applications sur mesure, livrés en 7–14 jours. SEO local, React & Next.js. Devis gratuit sous 24h ✓',
    isPartOf: { '@id': 'https://www.sidikoff.com/#website' },
    about: { '@id': 'https://www.sidikoff.com/services/creation-site-internet-lyon#service' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sidikoff.com/services/creation-site-internet-lyon#service',
    mainEntityOfPage: { '@id': 'https://www.sidikoff.com/services/creation-site-internet-lyon#webpage' },
    name: 'Création de site internet à Lyon',
    description: 'Agence web à Lyon spécialisée en création de sites internet professionnels, e-commerce et SEO local. Développement React et Next.js pour entreprises lyonnaises.',
    url: 'https://www.sidikoff.com/services/creation-site-internet-lyon',
    serviceType: 'Création de site internet',
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Villeurbanne' },
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'City', name: 'Bron' },
      { '@type': 'City', name: 'Vénissieux' },
      { '@type': 'City', name: 'Saint-Priest' },
      { '@type': 'AdministrativeArea', name: 'Métropole de Lyon' },
      { '@type': 'Place', name: 'Auvergne-Rhône-Alpes' },
      { '@type': 'Country', name: 'France' },
    ],
    provider: {
      '@type': 'Organization',
      name: 'Sidikoff Digital',
      url: 'https://www.sidikoff.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.sidikoff.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.sidikoff.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Création site internet Lyon',
        item: 'https://www.sidikoff.com/services/creation-site-internet-lyon',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel est le prix pour créer un site internet à Lyon ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les tarifs varient selon le type de projet. Un site vitrine professionnel à Lyon démarre à 690€ TTC pour une livraison en 5 jours ouvrés. Un site multi-pages (3 à 5 pages) est proposé à partir de 1 290€, idéal pour les PME lyonnaises souhaitant présenter leurs services et obtenir un bon référencement local. Un site e-commerce ou sur mesure est disponible à partir de 1 990€, avec des fonctionnalités avancées (paiement en ligne, réservation, espace client). Tous nos tarifs incluent le SEO de base, le design responsive et la mise en ligne. Contactez-nous pour un devis gratuit et personnalisé sous 24h.',
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps dure la création d'un site web à Lyon ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le délai de création dépend du type de projet. Un site vitrine est livré en 5 à 7 jours ouvrés. Un site professionnel multi-pages prend en moyenne 10 à 14 jours selon la complexité et les contenus fournis. Un site e-commerce ou une application web sur mesure nécessite généralement 4 à 8 semaines. Nous proposons également un service express pour les projets urgents. Un planning détaillé est fourni dès la validation du devis, et vous êtes informé à chaque étape de la création de votre site internet à Lyon.",
        },
      },
      {
        '@type': 'Question',
        name: 'Mon site sera-t-il bien référencé sur Google à Lyon ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, le référencement SEO local à Lyon est intégré dès la conception. Nous optimisons les balises meta (title, description), la structure sémantique (h1-h3), les contenus géolocalisés mentionnant les arrondissements et quartiers cibles (Part-Dieu, Confluence, Presqu'île, Villeurbanne…), ainsi que la vitesse de chargement (Core Web Vitals LCP, CLS, INP). Nous configurons également votre fiche Google Business Profile pour apparaître dans le pack local de Google Maps. Chaque site est développé en Next.js, garantissant des scores Lighthouse supérieurs à 95, ce qui améliore directement votre positionnement dans la Métropole de Lyon.",
        },
      },
      {
        '@type': 'Question',
        name: 'Puis-je mettre à jour mon site moi-même ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, nous intégrons des CMS intuitifs (Sanity.io, WordPress) qui vous permettent de modifier vos textes, images, prix et actualités sans aucune compétence technique. Une formation complète de 1 à 2 heures est incluse dans chaque projet pour vous rendre totalement autonome. Si vous préférez déléguer les mises à jour, nos forfaits de maintenance mensuelle (à partir de 49€/mois) incluent jusqu'à 5 modifications par mois, un monitoring 24/7 et un support technique réactif.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle est la différence entre un site vitrine et un site e-commerce à Lyon ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un site vitrine présente votre activité, vos services et vos coordonnées — idéal pour les artisans, professions libérales, restaurants et PME de la Métropole de Lyon qui souhaitent une présence professionnelle en ligne. Un site e-commerce permet en plus de vendre des produits ou services directement en ligne, avec gestion des stocks, paiement sécurisé (Stripe, PayPal) et suivi des commandes. Dans les deux cas, le référencement SEO local à Lyon est inclus pour maximiser votre visibilité sur Google.",
        },
      },
    ],
  },
]

export default async function LyonPage() {
  return (
    <div className='min-h-screen'>
      {lyonSchemas.map((schema, i) => (
        <script
          key={`lyon-schema-${i}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Hero Section */}
      <Section className='pt-32 pb-20 bg-linear-to-br from-[#DBE2EF] via-[#F9F7FF] to-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-top-right opacity-5'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <div className='inline-flex items-center bg-[#3F72AF]/10 text-[#3F72AF] px-4 py-2 rounded-full text-sm font-medium'>
                  <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Expert Web Lyon
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] leading-tight'>
                  Création de site internet professionnel à{' '}
                  <span className='text-[#3F72AF]'>Lyon</span>
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed'>
                  Vous êtes une entreprise, un artisan, une startup ou un indépendant basé à{' '}
                  <strong>Lyon</strong> et vous souhaitez booster votre visibilité en ligne ? Notre{' '}
                  <strong>agence web à Lyon</strong> vous accompagne dans la{' '}
                  <strong>création de sites internet sur mesure</strong>.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <CTAButton href='/contact' size='md' className='w-full sm:w-auto'>
                  Demander un devis gratuit
                </CTAButton>
                <CTAButton
                  href='/projects'
                  variant='outline'
                  size='md'
                  className='w-full sm:w-auto'>
                  Voir nos réalisations
                </CTAButton>
              </div>

              {/* Internal SEO links */}
              <div className='flex flex-wrap gap-3 pt-2'>
                <Link
                  href='/services/agence-web-lyon'
                  className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline transition-colors'>
                  → Agence web Lyon
                </Link>
                <Link
                  href='/services/agence-web-villeurbanne'
                  className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline transition-colors'>
                  → Création site Villeurbanne
                </Link>
                <Link
                  href='/services/creation-site-web-caluire-et-cuire'
                  className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline transition-colors'>
                  → Site web Caluire
                </Link>
              </div>

              {/* Floating Metrics */}
              <div className='grid grid-cols-3 gap-6 pt-8'>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                  <div className='text-2xl font-bold text-[#112D4E]'>20+</div>
                  <div className='text-sm text-gray-600'>Projets à Lyon</div>
                </div>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                  <div className='text-2xl font-bold text-[#112D4E]'>5sem</div>
                  <div className='text-sm text-gray-600'>Délai moyen</div>
                </div>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                  <div className='text-2xl font-bold text-[#112D4E]'>24/7</div>
                  <div className='text-sm text-gray-600'>Support</div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative z-10'>
                <Image
                  src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt='Création site internet Lyon - Bureau moderne'
                  className='rounded-2xl shadow-2xl'
                  width={600}
                  height={400}
                />
                <div className='absolute inset-0 bg-linear-to-tr from-[#3F72AF]/20 to-transparent rounded-2xl'></div>
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg z-20'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='text-sm font-medium text-gray-700'>En ligne</span>
                </div>
              </div>

              <div className='absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                <div className='text-center'>
                  <div className='text-lg font-bold text-[#112D4E]'>SEO</div>
                  <div className='text-xs text-gray-600'>Optimisé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className='flex flex-col gap-0'>
        {/* Services Section */}
        <Section className='py-20 bg-linear-to-b from-white to-[#F8F9FA]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Nos services de création de site web à Lyon
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Qu&apos;il s&apos;agisse de <strong>sites vitrines</strong> ou de{' '}
                <strong>boutiques e-commerce</strong>, avec un référencement local optimisé et un
                design moderne pensé pour convertir vos visiteurs en clients.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Site vitrine */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Site vitrine à Lyon</h3>
                <p className='text-gray-600 mb-6'>
                  Un <strong>site vitrine professionnel</strong> pour mettre en valeur vos services
                  et séduire vos prospects à Lyon et dans la région Auvergne-Rhône-Alpes.
                </p>
                <Link
                  href='/services/creation-sites-web'
                  className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>

              {/* Site e-commerce */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-8v8a2 2 0 11-4 0v-8m4 0V9a2 2 0 10-4 0v4.01'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Site e-commerce performant
                </h3>
                <p className='text-gray-600 mb-6'>
                  Développement de <strong>sites e-commerce fiables et sécurisés</strong> : gestion
                  des produits, paiement en ligne, design responsive et optimisation SEO.
                </p>
                <Link
                  href='/services/creation-sites-web'
                  className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>

              {/* Développement sur mesure */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Développement web sur mesure
                </h3>
                <p className='text-gray-600 mb-6'>
                  Intégration de fonctionnalités spécifiques, solutions adaptées à vos besoins, API
                  et CMS personnalisés.
                </p>
                <Link
                  href='/services/creation-sites-web'
                  className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>

              {/* SEO Lyon */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Référencement SEO Lyon</h3>
                <p className='text-gray-600 mb-6'>
                  Optimisation complète pour les recherches locales (
                  <em>création site internet Lyon</em>, <em>agence web Lyon</em>) : balises meta,
                  structure du site, rapidité et contenus géolocalisés.
                </p>
                <Link
                  href='/services/optimisation-seo'
                  className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>

              {/* Design & UX */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Web design & UX optimisée</h3>
                <p className='text-gray-600 mb-6'>
                  Sites modernes et ergonomiques, pensés pour offrir une expérience utilisateur
                  fluide et améliorer vos taux de conversion.
                </p>
                <Link
                  href='/services/creation-sites-web'
                  className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>

              {/* Maintenance */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Maintenance & support technique
                </h3>
                <p className='text-gray-600 mb-6'>
                  Suivi continu, mises à jour, sauvegardes automatiques, assistance rapide et
                  personnalisée.
                </p>
                <Link
                  href='/services/maintenance-support'
                  className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                  En savoir plus
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Choose Us Section */}
        <Section className='py-20 bg-linear-to-br from-[#F8F9FA] to-[#DBE2EF]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Pourquoi choisir notre agence web à Lyon ?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Une expertise locale au service de votre succès digital
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>Expertise locale</h3>
                <p className='text-gray-600'>
                  Nous connaissons le marché lyonnais et ses spécificités.
                </p>
              </div>

              <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>SEO local performant</h3>
                <p className='text-gray-600'>
                  Positionnement optimisé sur les recherches ciblant Lyon et sa région.
                </p>
              </div>

              <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>Accompagnement dédié</h3>
                <p className='text-gray-600'>Un expert vous suit à chaque étape du projet.</p>
              </div>

              <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>Transparence & clarté</h3>
                <p className='text-gray-600'>Devis gratuit et détaillé, sans frais cachés.</p>
              </div>

              <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>Résultats concrets</h3>
                <p className='text-gray-600'>
                  Plus de visibilité, plus de prospects, plus de clients.
                </p>
              </div>

              <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>Garantie de qualité</h3>
                <p className='text-gray-600'>
                  Sites performants, sécurisés et conformes aux standards web.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Methodology Section */}
        <Section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Notre méthodologie de création de site internet à Lyon
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Un processus éprouvé pour garantir le succès de votre projet web
              </p>
            </div>

            <div className='grid md:grid-cols-5 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  1
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>
                  Analyse & stratégie locale
                </h3>
                <p className='text-gray-600'>
                  Étude de vos concurrents à Lyon et recherche de mots-clés pertinents.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  2
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Conception & design</h3>
                <p className='text-gray-600'>
                  Maquettes graphiques adaptées à votre identité et à vos objectifs.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  3
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Développement web</h3>
                <p className='text-gray-600'>
                  Intégration technique, responsive design, compatibilité multi-supports.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  4
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>SEO & optimisation locale</h3>
                <p className='text-gray-600'>
                  Contenus géolocalisés, balises meta optimisées, vitesse et mobile-first.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  5
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Lancement & suivi</h3>
                <p className='text-gray-600'>
                  Mise en ligne, indexation Google, rapports de performance.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className='py-20 bg-linear-to-b from-[#F8F9FA] to-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                FAQ – Création de site internet Lyon
              </h2>
              <p className='text-xl text-gray-600'>Réponses aux questions les plus fréquentes</p>
            </div>

            <div className='space-y-6'>
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Quel est le prix pour créer un site internet à Lyon ?
                </h3>
                <p className='text-gray-600'>
                  Les tarifs varient selon le type de projet : un{' '}
                  <strong>site vitrine professionnel à Lyon</strong> démarre à{' '}
                  <strong>690€ TTC</strong>, livré en 5 jours ouvrés. Un site multi-pages (3–5
                  pages) est proposé à <strong>1 290€</strong>, idéal pour les PME qui souhaitent
                  présenter leurs services et améliorer leur référencement local. Un{' '}
                  <strong>site e-commerce ou sur mesure</strong> est disponible à partir de{' '}
                  <strong>1 990€</strong> avec des fonctionnalités avancées. Tous nos tarifs incluent
                  le SEO de base et le design responsive.{' '}
                  <strong>Devis gratuit et personnalisé sous 24h.</strong>
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Combien de temps dure la création d&apos;un site web à Lyon ?
                </h3>
                <p className='text-gray-600'>
                  Le délai dépend du projet : un <strong>site vitrine</strong> est livré en{' '}
                  <strong>5 à 7 jours ouvrés</strong>. Un site multi-pages prend{' '}
                  <strong>10 à 14 jours</strong> selon les contenus fournis. Un{' '}
                  <strong>site e-commerce</strong> nécessite 4 à 8 semaines. Nous proposons aussi un
                  service express pour les projets urgents. Un planning détaillé est remis dès
                  validation du devis — vous êtes informé à chaque étape.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Mon site sera-t-il bien référencé sur Google à Lyon ?
                </h3>
                <p className='text-gray-600'>
                  Oui. Le <strong>référencement SEO local à Lyon</strong> est intégré dès la
                  conception : balises meta, structure sémantique, contenus géolocalisés par
                  quartier (Part-Dieu, Confluence, Presqu&apos;île, Villeurbanne…), vitesse de
                  chargement (Core Web Vitals), et fiche{' '}
                  <strong>Google Business Profile</strong>. Nos sites en Next.js obtiennent
                  systématiquement des scores Lighthouse &gt; 95 dans toute la{' '}
                  <strong>Métropole de Lyon</strong>.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Puis-je mettre à jour mon site moi-même ?
                </h3>
                <p className='text-gray-600'>
                  Oui. Nous intégrons des CMS intuitifs (Sanity, WordPress) et incluons une{' '}
                  <strong>formation complète de 1 à 2h</strong> pour vous rendre autonome sur la
                  gestion de vos textes, images et actualités. Si vous préférez déléguer, nos{' '}
                  <strong>forfaits de maintenance mensuelle</strong> (dès 49€/mois) comprennent les
                  mises à jour, le monitoring 24/7 et un support technique réactif.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Quelle est la différence entre un site vitrine et un site e-commerce à Lyon ?
                </h3>
                <p className='text-gray-600'>
                  Un <strong>site vitrine</strong> présente votre activité, vos services et vos
                  coordonnées — idéal pour les artisans, professions libérales et PME de la{' '}
                  <strong>Métropole de Lyon</strong>. Un{' '}
                  <strong>site e-commerce</strong> permet en plus de vendre en ligne : gestion des
                  stocks, paiement sécurisé (Stripe, PayPal) et suivi des commandes. Dans les deux
                  cas, le <strong>référencement local à Lyon</strong> et le design responsive sont
                  inclus pour maximiser votre visibilité sur Google.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Local Context Section */}
        <Section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-16 items-start'>
              <div>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-8'>
                  Créer un site internet à Lyon en 2026 : ce qui compte vraiment
                </h2>
                <div className='space-y-5 text-lg text-gray-700 leading-relaxed'>
                  <p>
                    Lyon est la troisième métropole française, avec un tissu économique exceptionnel : plus de
                    160 000 entreprises dans la métropole, une scène startup dynamique autour de{' '}
                    <strong>Confluence et Part-Dieu</strong>, et des secteurs porteurs comme la santé (Biopôle),
                    la gastronomie, le luxe et les industries numériques. Dans cet environnement concurrentiel,
                    votre site web est votre premier argument commercial.
                  </p>
                  <p>
                    Un client lyonnais effectue sa recherche sur Google avant tout contact téléphonique. Si votre
                    site n'apparaît pas dans les{' '}<strong>3 premiers résultats locaux</strong>, vous perdez la
                    majorité de vos prospects au profit de concurrents mieux positionnés. Notre stratégie SEO locale
                    pour Lyon cible précisément les quartiers où se trouvent vos clients : Presqu'île, Croix-Rousse,
                    Monplaisir, Gerland, Vaise, La Guillotière ou Villeurbanne.
                  </p>
                  <p>
                    Depuis 2024, Google évalue la qualité d'un site via les <strong>Core Web Vitals</strong> :
                    vitesse de chargement (LCP &lt; 2,5s), interactivité (INP &lt; 200ms) et stabilité visuelle
                    (CLS &lt; 0,1). Nos sites construits en <strong>Next.js</strong> atteignent systématiquement
                    des scores Lighthouse supérieurs à 95, ce qui se traduit par un meilleur positionnement et
                    une meilleure expérience pour vos visiteurs.
                  </p>
                  <p>
                    En tant qu'agence web lyonnaise, nous intervenons aussi bien pour des{' '}
                    <strong>boutiques du vieux Lyon</strong>, des <strong>restaurants bouchons</strong>,
                    des cabinets d'avocats de la Part-Dieu, des cabinets médicaux et des PME industrielles
                    de la zone de Vénissieux ou Saint-Priest. Chaque projet est contextualisé à votre marché local.
                  </p>
                </div>

                {/* Internal linking hub */}
                <div className='mt-8 p-6 bg-[#DBE2EF]/30 rounded-2xl border border-[#3F72AF]/20'>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-4'>Nos pages locales connexes</h3>
                  <div className='flex flex-wrap gap-3'>
                    <Link href='/services/agence-web-lyon' className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline font-medium'>
                      → Agence web Lyon
                    </Link>
                    <Link href='/services/agence-web-villeurbanne' className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline font-medium'>
                      → Agence web Villeurbanne
                    </Link>
                    <Link href='/services/creation-site-web-caluire-et-cuire' className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline font-medium'>
                      → Site web Caluire-et-Cuire
                    </Link>
                    <Link href='/services/creation-site-internet-toulouse' className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline font-medium'>
                      → Site internet Toulouse
                    </Link>
                    <Link href='/services/optimisation-seo' className='text-sm text-[#3F72AF] hover:text-[#112D4E] hover:underline font-medium'>
                      → Optimisation SEO
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-2xl font-bold text-[#112D4E] mb-6'>Pour qui créons-nous des sites à Lyon ?</h3>
                <div className='space-y-4'>
                  {[
                    {
                      icon: '🍽️',
                      title: 'Restauration & gastronomie',
                      desc: 'Bouchons lyonnais, restaurants gastronomiques, bars à vin : menus en ligne, réservation en ligne (TheFork, Zenchef), galeries photos et SEO local pour apparaître en tête sur Google Maps et « restaurant Lyon » + quartier.'
                    },
                    {
                      icon: '⚕️',
                      title: 'Professions médicales & paramédicales',
                      desc: 'Médecins, dentistes, kinésithérapeutes, psychologues : sites conformes RGPD, prise de RDV en ligne (Doctolib, Calendly), fiches praticiens optimisées pour le référencement local au 69.'
                    },
                    {
                      icon: '🏢',
                      title: 'PME, industrie & B2B',
                      desc: 'Entreprises de la zone industrielle de Gerland, Saint-Priest ou Vénissieux : sites institutionnels, catalogues produits, configurateurs en ligne et outils de gestion sur mesure.'
                    },
                    {
                      icon: '🚀',
                      title: 'Startups & scale-ups tech',
                      desc: 'Entreprises en croissance de la Confluence ou du Biopôle : landing pages de conversion, applications web React/Next.js, API et solutions SaaS à haute disponibilité.'
                    },
                    {
                      icon: '🏪',
                      title: 'Commerce & artisanat',
                      desc: 'Boutiques, artisans, indépendants : sites vitrines avec galerie, prise de contact rapide, Google Business Profile optimisé et ciblage SEO par arrondissement lyonnais.'
                    },
                  ].map((item, i) => (
                    <div key={i} className='flex gap-4 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 hover:border-[#3F72AF]/30 transition-colors'>
                      <span className='text-2xl flex-shrink-0'>{item.icon}</span>
                      <div>
                        <h4 className='font-bold text-[#112D4E] mb-1'>{item.title}</h4>
                        <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Template A — Semantic Expansion Section */}
        <Section className='py-20 bg-[#F8F9FA]'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-[#112D4E] mb-8 leading-tight'>
              Agence web & développeur web à Lyon : notre approche sur mesure
            </h2>
            <div className='space-y-5 text-lg text-gray-700 leading-relaxed'>
              <p>
                Sidikoff Digital est une <strong>agence digitale à Lyon</strong> spécialisée dans la{' '}
                <strong>création de sites internet sur mesure</strong>, la{' '}
                <strong>refonte de sites web</strong> et l&apos;optimisation SEO locale pour les
                entreprises de la <strong>Métropole de Lyon</strong>. En tant que{' '}
                <strong>développeur web freelance à Lyon</strong>, nous combinons la flexibilité
                d&apos;un interlocuteur unique avec les ressources d&apos;une agence structurée.
              </p>
              <p>
                Chaque projet de <strong>création de site internet à Lyon</strong> commence par une
                analyse approfondie : étude de votre marché local, recherche des{' '}
                <strong>mots-clés à fort potentiel dans le 69</strong>, audit de la concurrence dans
                votre secteur (restauration, santé, B2B, e-commerce, artisanat). Nous définissons
                ensuite une architecture de l&apos;information optimisée pour Google et pour vos
                visiteurs — deux impératifs qui vont aujourd&apos;hui de pair.
              </p>
              <p>
                Notre stack technique — <strong>Next.js</strong>, React, Tailwind CSS et Sanity CMS
                — garantit des performances de haut niveau : chargement instantané (LCP{' '}
                <strong>&lt; 2,5s</strong>), stabilité visuelle (CLS = 0) et interactivité
                irréprochable (INP &lt; 200ms). Ces métriques{' '}
                <strong>Core Web Vitals</strong> ne sont pas cosmétiques : Google les intègre
                directement dans son algorithme de classement. Résultat : vos concurrents sur des{' '}
                <strong>sites WordPress lents</strong> perdent des positions que vous gagnez.
              </p>
              <p>
                Nos services couvrent l&apos;intégralité du cycle de vie digital :{' '}
                <strong>création de site vitrine Lyon</strong> pour lancer votre activité,{' '}
                <strong>site e-commerce Lyon</strong> pour vendre en ligne,{' '}
                <strong>refonte site web Lyon</strong> pour moderniser une présence existante, et{' '}
                <strong>référencement SEO Lyon</strong> pour attirer durablement des prospects
                qualifiés. Chaque livraison inclut une formation CMS, un rapport de lancement et 3
                mois de support technique offerts.
              </p>
            </div>
          </div>
        </Section>

        {/* Template C — Arrondissements & Secteurs Grid */}
        <Section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-4'>
                Nous intervenons dans toute la Métropole de Lyon
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Une expertise de proximité pour les entreprises lyonnaises, quel que soit votre
                arrondissement ou votre commune.
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-12'>
              {/* Arrondissements */}
              <div>
                <h3 className='text-xl font-semibold text-[#3F72AF] mb-5 flex items-center'>
                  <span className='w-8 h-8 bg-[#3F72AF]/10 rounded-lg flex items-center justify-center mr-3 text-[#3F72AF]'>
                    📍
                  </span>
                  Arrondissements & communes
                </h3>
                <div className='grid grid-cols-2 gap-2'>
                  {[
                    { label: "Lyon 1er \u2013 Presqu\u2019\u00eele", href: '/services/agence-web-lyon' },
                    { label: 'Lyon 2ème – Confluence', href: '/services/agence-web-lyon' },
                    { label: 'Lyon 3ème – Part-Dieu', href: '/services/agence-web-lyon' },
                    { label: 'Lyon 4ème – Croix-Rousse', href: '/services/agence-web-lyon' },
                    { label: 'Lyon 6ème – Brotteaux', href: '/services/agence-web-lyon' },
                    { label: 'Lyon 7ème – Guillotière', href: '/services/agence-web-lyon' },
                    { label: 'Lyon 8ème – Monplaisir', href: '/services/agence-web-lyon' },
                    { label: 'Villeurbanne', href: '/services/agence-web-villeurbanne' },
                    { label: 'Caluire-et-Cuire', href: '/services/creation-site-web-caluire-et-cuire' },
                    { label: 'Bron', href: '/services/agence-web-lyon' },
                    { label: 'Vénissieux', href: '/services/agence-web-lyon' },
                    { label: 'Saint-Priest', href: '/services/agence-web-lyon' },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className='flex items-center text-sm text-gray-700 hover:text-[#3F72AF] transition-colors py-1.5 group'>
                      <span className='w-1.5 h-1.5 bg-[#3F72AF] rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Secteurs d'activité */}
              <div>
                <h3 className='text-xl font-semibold text-[#3F72AF] mb-5 flex items-center'>
                  <span className='w-8 h-8 bg-[#3F72AF]/10 rounded-lg flex items-center justify-center mr-3 text-[#3F72AF]'>
                    🏢
                  </span>
                  Secteurs d&apos;activité à Lyon
                </h3>
                <div className='space-y-3'>
                  {[
                    {
                      icon: '🍽️',
                      label: 'Restauration & gastronomie',
                      desc: 'Bouchons, restaurants gastronomiques, bars, traiteurs',
                    },
                    {
                      icon: '⚕️',
                      label: 'Santé & paramédical',
                      desc: 'Médecins, dentistes, kinés, psychologues (Biopôle)',
                    },
                    {
                      icon: '⚖️',
                      label: 'Professions libérales',
                      desc: 'Avocats Part-Dieu, experts-comptables, architectes',
                    },
                    {
                      icon: '🏪',
                      label: 'Commerce & artisanat',
                      desc: 'Boutiques, artisans, indépendants par arrondissement',
                    },
                    {
                      icon: '🚀',
                      label: 'Startups & scale-ups tech',
                      desc: 'Confluence, French Tech Lyon, Biopôle, Gerland',
                    },
                    {
                      icon: '🏭',
                      label: 'Industrie & B2B',
                      desc: 'PME industrielles Vénissieux, Saint-Priest, Bron',
                    },
                  ].map((item, i) => (
                    <div key={i} className='flex items-start gap-3 p-3 rounded-lg hover:bg-[#F8F9FA] transition-colors'>
                      <span className='text-xl flex-shrink-0 mt-0.5'>{item.icon}</span>
                      <div>
                        <div className='font-semibold text-[#112D4E] text-sm'>{item.label}</div>
                        <div className='text-gray-500 text-xs mt-0.5'>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className='py-20 bg-linear-to-br from-[#112D4E] to-[#3F72AF] text-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-4xl font-bold mb-6'>Demandez un devis gratuit à Lyon</h2>
            <p className='text-xl mb-8 opacity-90'>
              Vous souhaitez attirer de nouveaux clients et renforcer votre visibilité à{' '}
              <strong>Lyon</strong> ?<br />
              Confiez-nous la <strong>création de votre site internet</strong> et profitez
              d&apos;une solution professionnelle, moderne et optimisée pour le SEO.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <CTAButton
                href='/contact'
                variant='outline'
                size='lg'
                className='bg-white text-[#112D4E] hover:bg-gray-100 border-white'>
                Demander un devis gratuit
              </CTAButton>
              <CTAButton
                href='/projects'
                variant='outline'
                size='lg'
                className='border-white text-white hover:bg-white/10'>
                Voir nos réalisations
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
