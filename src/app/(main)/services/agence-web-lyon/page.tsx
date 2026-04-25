import { createCanonicalUrl, generateAlternateUrls } from '@/lib/seo-utils'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Cormorant_Garamond, Manrope } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'] })
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Agence Web Lyon | Création de Sites Internet'

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
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: '/images/og/creation-sites-web-lyon.jpg',
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
      images: ['/images/og/creation-sites-web-lyon.jpg'],
    },
  }
}

const agenceWebLyonSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.sidikoff.com/services/agence-web-lyon#webpage',
    url: 'https://www.sidikoff.com/services/agence-web-lyon',
    name: 'Agence Web Lyon | Création de Sites Internet',
    description: 'Agence web à Lyon — création de sites internet sur mesure, SEO local et refonte web. Sites livrés en 7–14 jours, dès 690 €. Expert React & Next.js. Devis gratuit sous 24h ✓',
    isPartOf: { '@id': 'https://www.sidikoff.com/#website' },
    about: { '@id': 'https://www.sidikoff.com/services/agence-web-lyon#service' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.sidikoff.com/services/agence-web-lyon#service',
    mainEntityOfPage: { '@id': 'https://www.sidikoff.com/services/agence-web-lyon#webpage' },
    name: 'Agence Web Lyon | Création de Sites Internet',
    description: 'Agence web à Lyon spécialisée en création de sites internet sur mesure, SEO local et refonte web. Technologies React et Next.js.',
    url: 'https://www.sidikoff.com/services/agence-web-lyon',
    serviceType: 'Création de site internet',
    areaServed: [
      { '@type': 'City', name: 'Lyon' },
      { '@type': 'City', name: 'Villeurbanne' },
      { '@type': 'City', name: 'Caluire-et-Cuire' },
      { '@type': 'City', name: 'Bron' },
      { '@type': 'City', name: 'Vénissieux' },
      { '@type': 'Place', name: 'Auvergne-Rhône-Alpes' },
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
        name: 'Agence Web Lyon',
        item: 'https://www.sidikoff.com/services/agence-web-lyon',
      },
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
          text: 'Sidikoff Digital est une agence web à Lyon spécialisée en création de sites internet sur mesure avec React et Next.js. Nous livrons des sites modernes, rapides et optimisés SEO en 7 à 14 jours.',
        },
      },
      {
        '@type': 'Question',
        name: "Combien coûte la création d'un site web à Lyon ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La création d'un site web à Lyon démarre à 690 € pour un site vitrine, 1 290 € pour un site multi-pages Pro et à partir de 1 990 € pour un site e-commerce ou sur mesure. Devis gratuit sous 24h.",
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
        name: "L'agence web Sidikoff Digital intervient-elle dans toute la région lyonnaise ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Nous intervenons à Lyon (tous arrondissements), Villeurbanne, Caluire-et-Cuire, Bron, Vénissieux et dans toute la région Auvergne-Rhône-Alpes. Nous travaillons aussi à distance pour toute la France.',
        },
      },
    ],
  },
]

export default async function AgenceWebLyonPage() {
  return (
    <div
      className={`min-h-screen bg-[#F6F4EE] text-[#121212] overflow-x-hidden ${manrope.className}`}>
      {agenceWebLyonSchemas.map((schema, i) => (
        <script
          key={`agence-web-lyon-schema-${i}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className='relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b-[3px] border-[#121212] flex flex-col justify-center overflow-hidden'>
        {/* Abstract structural elements */}
        <div className='absolute top-0 right-0 w-[40%] h-[120%] bg-[#121212] z-0 hidden lg:block -skew-x-12 origin-top' />
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-[#FF3E1A] z-0 blur-3xl opacity-20' />

        <div className='max-w-7xl mx-auto w-full relative z-10 flex-col'>
          <div className='grid lg:grid-cols-12 gap-8 lg:gap-16 items-center'>
            <div className='lg:col-span-7 xl:col-span-8 order-2 lg:order-1 pt-12 lg:pt-0'>
              <div className='flex items-center gap-4 mb-8 relative z-20'>
                <div className='h-[2px] w-12 bg-[#FF3E1A]' />
                <span className='uppercase tracking-[0.3em] text-xs font-bold text-[#121212]'>
                  Creative Studio
                </span>
              </div>
              <h1
                className={`${cormorant.className} text-[14vw] lg:text-[8vw] leading-[0.85] font-bold flex flex-col uppercase tracking-tighter relative z-20`}>
                <span className='block text-[#121212]'>Agence</span>
                <span className='block text-[#FF3E1A] ml-[10%] italic'>Web</span>
                <span className='block text-[#121212] ml-[20%] lg:ml-[25%] mt-2'>Lyon</span>
              </h1>

              <p className='mt-12 max-w-xl text-lg sm:text-xl font-medium leading-relaxed border-l-[3px] border-[#FF3E1A] pl-6 text-[#121212] relative z-20'>
                Design moderne. Référencement SEO dominant.
                <br />
                Nous construisons des expériences digitales mémorables pour les marques ambitieuses
                dans le grand Lyon.
              </p>

              <div className='mt-12 flex flex-col sm:flex-row gap-8 items-start sm:items-center relative z-20'>
                <Link
                  href='/contact'
                  className='group relative inline-flex items-center justify-center bg-[#FF3E1A] text-[#121212] px-8 py-5 font-bold uppercase tracking-widest text-sm overflow-hidden border-[3px] border-[#121212] transition-colors'>
                  <span className='absolute inset-0 bg-[#F6F4EE] transform origin-bottom translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0'></span>
                  <span className='relative z-10 flex items-center gap-4 group-hover:text-[#121212]'>
                    Démarrer un projet
                    <svg
                      className='w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
                    </svg>
                  </span>
                </Link>
                <div className='uppercase tracking-widest text-xs font-bold flex flex-col gap-1 text-[#121212]'>
                  <span className='opacity-70'>À partir de 690€</span>
                  <span className='text-[#FF3E1A] font-extrabold flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 bg-[#FF3E1A] rounded-full animate-pulse' />
                    Livraison 7-14 Jours
                  </span>
                </div>
              </div>
            </div>

            <div className='lg:col-span-5 xl:col-span-4 relative h-[50vh] lg:h-[75vh] w-full order-1 lg:order-2 mt-8 lg:mt-0 grayscale hover:grayscale-0 transition-all duration-[800ms] group'>
              <div className='absolute inset-0 border-[3px] border-[#121212] translate-x-4 translate-y-4 z-0 bg-transparent group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500' />
              <Image
                src='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1769&auto=format&fit=crop'
                layout='fill'
                objectFit='cover'
                alt='Bureau Agence Web Lyon'
                className='z-10 border-[3px] border-[#121212]'
                priority
              />
              <div className='absolute -bottom-6 -left-6 lg:-left-12 bg-[#FF3E1A] text-[#121212] px-6 py-4 border-[3px] border-[#121212] font-black uppercase tracking-widest text-sm z-20 shadow-[8px_8px_0px_#121212]'>
                Studio Local
              </div>
            </div>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className='absolute bottom-0 left-0 w-full bg-[#121212] text-[#F6F4EE] py-3 border-t-[3px] border-[#121212] overflow-hidden flex whitespace-nowrap z-20'>
          <div className='animate-[marquee_50s_linear_infinite] flex items-center shrink-0 min-w-full'>
            {[...Array(6)].map((_, i) => (
              <div key={i} className='flex items-center'>
                <span className='uppercase tracking-[0.2em] text-sm font-bold mx-8'>
                  CRÉATION SUR MESURE
                </span>
                <span className='text-[#FF3E1A] text-xl'>&times;</span>
                <span className='uppercase tracking-[0.2em] text-sm font-bold mx-8'>
                  RÉFÉRENCEMENT LOCAL
                </span>
                <span className='text-[#FF3E1A] text-xl'>&times;</span>
                <span className='uppercase tracking-[0.2em] text-sm font-bold mx-8'>
                  PERFORMANCE NEXT.JS
                </span>
                <span className='text-[#FF3E1A] text-xl'>&times;</span>
              </div>
            ))}
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `,
          }}
        />
      </section>

      {/* Services Section */}
      <section className='py-24 lg:py-32 bg-[#F6F4EE] border-b-[3px] border-[#121212]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row justify-between items-end mb-16 gap-8'>
            <h2
              className={`${cormorant.className} text-5xl lg:text-7xl font-bold text-[#121212] uppercase leading-none`}>
              Expertise <br />
              <span
                className='text-transparent bg-clip-text'
                style={{ WebkitTextStroke: '2px #121212' }}>
                Brute
              </span>
            </h2>
            <p className='max-w-xs text-lg font-medium border-l-[3px] border-[#FF3E1A] pl-4 text-gray-700'>
              Des solutions sur-mesure pour dominer votre marché local.
            </p>
          </div>

          <div className='border-t-[3px] border-[#121212]'>
            {[
              {
                num: '01',
                title: 'Site Vitrine',
                desc: "Un design exclusif pour affirmer votre identité. Expérience fluide, optimisation mobile et conversions maximisées. L'outil parfait pour captiver vos futurs clients.",
                price: 'Dès 690 €',
                link: '/services/creation-sites-web',
              },
              {
                num: '02',
                title: 'E-Commerce',
                desc: "Architecture pensée pour la vente. Taux de conversion optimisé, gestion fluide du catalogue et paiements sécurisés pour exploser votre chiffre d'affaires.",
                price: 'Dès 1 990 €',
                link: '/services/creation-site-ecommerce',
              },
              {
                num: '03',
                title: 'SEO Local',
                desc: 'Dominez les recherches sur Lyon et le 69. Nous plaçons votre entreprise là où vos clients vous cherchent. Stratégie agressive et résultats traçables.',
                price: 'Dès 149 €/mois',
                link: '/services/optimisation-seo',
              },
              {
                num: '04',
                title: 'Refonte & Dev',
                desc: "Migration Next.js, modernisation d'interface ou développement d'app sur mesure. Nous réparons le passé pour construire le futur.",
                price: 'Sur devis',
                link: '/services/refonte-sites-web',
              },
            ].map((srv, i) => (
              <div
                key={i}
                className='group flex flex-col lg:flex-row border-b-[3px] border-[#121212] lg:hover:bg-[#121212] transition-colors duration-500'>
                <div className='lg:w-32 py-8 px-4 flex items-start border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#121212] lg:group-hover:border-[#333]'>
                  <span
                    className={`${cormorant.className} text-4xl lg:text-5xl font-bold text-[#FF3E1A]`}>
                    {srv.num}
                  </span>
                </div>
                <div className='flex-1 py-10 px-4 lg:px-12'>
                  <h3
                    className={`${cormorant.className} text-4xl lg:text-5xl font-bold text-[#121212] mb-6 lg:group-hover:text-[#F6F4EE] transition-colors duration-500 uppercase`}>
                    {srv.title}
                  </h3>
                  <div className='flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-end'>
                    <p className='max-w-xl text-lg text-gray-700 lg:group-hover:text-gray-400 transition-colors duration-500 leading-relaxed'>
                      {srv.desc}
                    </p>
                    <div className='flex flex-col items-start lg:items-end gap-4 shrink-0'>
                      <span className='font-bold text-[#121212] lg:group-hover:text-[#FF3E1A] transition-colors duration-500 tracking-widest uppercase text-sm border-b-2 border-transparent lg:group-hover:border-[#FF3E1A] pb-1'>
                        {srv.price}
                      </span>
                      <Link
                        href={srv.link}
                        className='flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#F6F4EE] bg-[#121212] lg:group-hover:bg-[#FF3E1A] lg:group-hover:text-[#121212] px-6 py-3 border-[3px] border-transparent lg:hover:border-[#121212] transition-all'>
                        Découvrir
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Brutalist Grid */}
      <section className='py-24 lg:py-32 bg-[#121212] text-[#F6F4EE] border-b-[3px] border-[#121212]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mb-16'>
            <h2
              className={`${cormorant.className} text-5xl lg:text-7xl font-bold uppercase leading-none`}>
              Contre La <span className='text-[#FF3E1A] italic'>Médiocrité</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-0 border-[3px] border-[#F6F4EE] bg-[#F6F4EE]'>
            {[
              {
                title: 'Vitesse Extrême',
                desc: 'Architecture Next.js. Chargement instantané. Nous refusons les sites lents.',
                color: 'bg-[#121212]',
                text: 'text-[#F6F4EE]',
              },
              {
                title: 'Local, Sans Filtre',
                desc: "Basés à Lyon. Nous comprenons le marché local parce que nous l'y vivons. Pas de sous-traitance à l'autre bout du monde.",
                color: 'bg-[#FF3E1A]',
                text: 'text-[#121212]',
              },
              {
                title: 'ROI Obsessif',
                desc: 'Nos designs ne sont pas juste esthétiques, ils sont mathématiquement conçus pour engager et convertir.',
                color: 'bg-[#1A311F]',
                text: 'text-[#F6F4EE]',
              },
              {
                title: '0 Bullshit',
                desc: "Tarification claire. Délais tenus (7-14 jours pour un vitrine). On fait ce qu'on dit.",
                color: 'bg-[#F6F4EE]',
                text: 'text-[#121212]',
              },
              {
                title: 'SEO Natif',
                desc: "Chaque ligne de code est structurée pour satisfaire les algorithmes de Google. Le SEO n'est pas une option.",
                color: 'bg-[#121212]',
                text: 'text-[#F6F4EE]',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 lg:p-12 ${item.color} ${item.text} border-[3px] border-[#F6F4EE] ${i === 4 ? 'lg:col-span-2' : ''} hover:scale-[0.98] transition-transform duration-300`}>
                <div className='text-4xl lg:text-5xl font-black mb-6 border-b-[3px] border-current pb-6 inline-block w-full'>{`0${i + 1}`}</div>
                <h3 className={`${cormorant.className} text-3xl font-bold uppercase mb-4`}>
                  {item.title}
                </h3>
                <p className='text-lg font-medium opacity-90 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of intervention */}
      <section className='py-20 bg-[#FF3E1A] border-b-[3px] border-[#121212] overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2
            className={`${cormorant.className} text-6xl lg:text-8xl font-black text-[#121212] uppercase mb-12 flex flex-wrap gap-4 leading-none`}>
            <span className='text-transparent' style={{ WebkitTextStroke: '2px #121212' }}>
              Partout Dans{' '}
            </span>
            <span>Le 69</span>
          </h2>
          <div className='flex flex-wrap gap-4 lg:gap-6 items-center'>
            {[
              { city: 'Lyon', link: '/services/creation-site-internet-lyon' },
              { city: 'Villeurbanne', link: '/services/agence-web-villeurbanne' },
              { city: 'Caluire-et-Cuire', link: '/services/creation-site-web-caluire-et-cuire' },
              { city: 'Bron', link: null },
              { city: 'Vénissieux', link: null },
              { city: 'Décines-Charpieu', link: null },
              { city: 'Meyzieu', link: null },
            ].map((loc, i) =>
              loc.link ? (
                <Link
                  key={i}
                  href={loc.link}
                  className='text-xl lg:text-3xl font-bold uppercase tracking-wider text-[#121212] hover:text-[#F6F4EE] border-b-4 border-[#121212] hover:border-[#F6F4EE] pb-2 transition-colors'>
                  {loc.city}
                </Link>
              ) : (
                <span
                  key={i}
                  className='text-xl lg:text-3xl font-bold uppercase tracking-wider text-[#121212] opacity-50 pb-2'>
                  {loc.city}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FAQ & Final CTA Section */}
      <section className='bg-[#F6F4EE] border-b-[3px] border-[#121212]'>
        <div className='grid lg:grid-cols-2'>
          <div className='border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[#121212] p-8 lg:p-20'>
            <h2
              className={`${cormorant.className} text-5xl font-bold text-[#121212] uppercase mb-12`}>
              F.A.Q.
            </h2>
            <div className='space-y-0 border-t-[3px] border-[#121212]'>
              {[
                {
                  q: 'Meilleure agence web à Lyon ?',
                  a: "C'est subjectif, mais si vous cherchez des designs audacieux, des temps de chargement éclair et un SEO agressif, Sidikoff Digital s'impose comme l'évidence.",
                },
                {
                  q: "Le vrai prix d'un site à Lyon ?",
                  a: "Dès 690 € pour un vitrine percutant. 1 990 € minimum pour un e-commerce. On ne fait pas dans l'usurpation, chaque euro investi a un impact. Devis précis gratuit sous 24h.",
                },
                {
                  q: 'Délai de création réel ?',
                  a: "7 à 14 jours pour un vitrine. On travaille vite parce qu'on travaille bien. Les e-commerces prennent 4 à 8 semaines selon la complexité.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className='group border-b-[3px] border-[#121212] bg-[#F6F4EE] open:bg-[#121212] open:text-[#F6F4EE] transition-colors duration-300'>
                  <summary className='flex justify-between items-center py-6 px-4 cursor-pointer list-none text-xl lg:text-2xl font-bold uppercase tracking-wide'>
                    {faq.q}
                    <span className='text-3xl font-light transform group-open:rotate-45 transition-transform duration-300 group-open:text-[#FF3E1A]'>
                      +
                    </span>
                  </summary>
                  <div className='px-4 pb-8 pt-0 text-lg leading-relaxed font-medium'>{faq.a}</div>
                </details>
              ))}
            </div>
          </div>

          <div className='p-8 lg:p-20 flex flex-col justify-center bg-[#121212] text-[#F6F4EE]'>
            <div className='mb-8'>
              <span className='inline-block bg-[#FF3E1A] text-[#121212] px-4 py-2 font-black uppercase text-sm -rotate-2 mb-6'>
                Action Immédiate
              </span>
              <h2
                className={`${cormorant.className} text-5xl lg:text-7xl font-bold uppercase leading-none mb-6`}>
                Lancer Votre <br />
                Projet.
              </h2>
              <p className='text-xl text-gray-400 font-medium'>
                Devis sous 24h. Livré en 7 à 14 jours.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-6 mt-8'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center bg-[#FF3E1A] text-[#121212] px-8 py-5 font-black uppercase tracking-widest text-sm hover:bg-[#F6F4EE] hover:scale-105 transition-all'>
                Demander Un Devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
