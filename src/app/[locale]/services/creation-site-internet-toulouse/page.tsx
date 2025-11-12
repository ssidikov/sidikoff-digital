import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'

import { Section } from '@/components/ui'
import CTAButton from '@/components/ui/CTAButton'
import Link from 'next/link'
import Image from 'next/image'

interface ToulousePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: ToulousePageProps): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === 'fr'
      ? 'Création site internet Toulouse – Agence web & SEO local'
      : locale === 'en'
        ? 'Website Creation Toulouse | Expert Local Web Developer'
        : 'Создание Сайтов Тулуза | Эксперт Веб-Разработчик'

  const description =
    locale === 'fr'
      ? 'SIDIKOFF DIGITAL, agence web 31, est spécialisée dans la création de sites Internet et le webmarketing. Contactez-nous dès maintenant.'
      : locale === 'en'
        ? 'SIDIKOFF DIGITAL, Toulouse web agency (31), specializes in website creation and web marketing. Contact us now.'
        : 'SIDIKOFF DIGITAL, веб-агентство Тулуза (31), специализируется на создании сайтов и веб-маркетинге. Свяжитесь с нами.'

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
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'}/${
        locale === 'fr' ? '' : locale + '/'
      }services/creation-site-internet-toulouse`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'}/${
        locale === 'fr' ? '' : locale + '/'
      }services/creation-site-internet-toulouse`,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'
          }/images/og/creation-sites-web-toulouse.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        `${
          process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'
        }/images/og/creation-sites-web-toulouse.jpg`,
      ],
    },
  }
}

export default async function ToulousePage({ params }: ToulousePageProps) {
  const { locale } = await params

  if (locale === 'en') {
    return (
      <div className='min-h-screen'>
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
                    Toulouse Web Expert
                  </div>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] leading-tight'>
                    Professional Website Creation in{' '}
                    <span className='text-[#3F72AF]'>Toulouse</span>
                  </h2>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    Toulouse web agency specialized in custom website creation. Whether showcase or
                    e-commerce sites, with optimized SEO for Google and modern design adapted to
                    your clients.
                  </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <CTAButton href='/contact' size='md' className='w-full sm:w-auto'>
                    Get Free Quote
                  </CTAButton>
                  <CTAButton
                    href='/projects'
                    variant='outline'
                    size='md'
                    className='w-full sm:w-auto'>
                    View Our Work
                  </CTAButton>
                </div>

                {/* Floating Metrics */}
                <div className='grid grid-cols-3 gap-6 pt-8'>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                    <div className='text-2xl font-bold text-[#112D4E]'>50+</div>
                    <div className='text-sm text-gray-600'>Toulouse Projects</div>
                  </div>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                    <div className='text-2xl font-bold text-[#112D4E]'>6 weeks</div>
                    <div className='text-sm text-gray-600'>Average Delivery</div>
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
                    src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    alt='Website creation Toulouse - Modern office'
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
                    <span className='text-sm font-medium text-gray-700'>Online Now</span>
                  </div>
                </div>

                <div className='absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-[#112D4E]'>SEO</div>
                    <div className='text-xs text-gray-600'>Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className='flex flex-col gap-0'>
          <Section className='py-20 bg-linear-to-b from-white to-[#F8F9FA]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-8'>Coming Soon</h2>
              <p className='text-lg text-gray-600'>English content is being prepared.</p>
            </div>
          </Section>
        </div>
      </div>
    )
  }

  if (locale === 'ru') {
    return (
      <div className='min-h-screen'>
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
                    Веб-эксперт в Тулузе
                  </div>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] leading-tight'>
                    Профессиональное создание сайтов в{' '}
                    <span className='text-[#3F72AF]'>Тулузе</span>
                  </h2>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    Веб-агентство в Тулузе, специализирующееся на создании сайтов под заказ.
                    Современные, SEO-оптимизированные сайты, адаптированные для ваших клиентов.
                  </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4'>
                  <CTAButton href='/contact' size='md' className='w-full sm:w-auto'>
                    Получить расчет
                  </CTAButton>
                  <CTAButton
                    href='/projects'
                    variant='outline'
                    size='md'
                    className='w-full sm:w-auto'>
                    Наши работы
                  </CTAButton>
                </div>

                {/* Floating Metrics */}
                <div className='grid grid-cols-3 gap-6 pt-8'>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                    <div className='text-2xl font-bold text-[#112D4E]'>50+</div>
                    <div className='text-sm text-gray-600'>Проектов в Тулузе</div>
                  </div>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                    <div className='text-2xl font-bold text-[#112D4E]'>6 недель</div>
                    <div className='text-sm text-gray-600'>Средний срок</div>
                  </div>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                    <div className='text-2xl font-bold text-[#112D4E]'>24/7</div>
                    <div className='text-sm text-gray-600'>Поддержка</div>
                  </div>
                </div>
              </div>

              <div className='relative'>
                <div className='relative z-10'>
                  <Image
                    src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    alt='Создание сайтов Тулуза - Современный офис'
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
                    <span className='text-sm font-medium text-gray-700'>Онлайн</span>
                  </div>
                </div>

                <div className='absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-[#112D4E]'>SEO</div>
                    <div className='text-xs text-gray-600'>Оптимизировано</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className='flex flex-col gap-0'>
          <Section className='py-20 bg-linear-to-b from-white to-[#F8F9FA]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-3xl font-bold text-[#112D4E] mb-8'>Скоро</h2>
              <p className='text-lg text-gray-600'>Контент на русском языке готовится.</p>
            </div>
          </Section>
        </div>
      </div>
    )
  }

  // French content (default)
  return (
    <div className='min-h-screen'>
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
                  Expert Web Toulouse
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] leading-tight'>
                  Création de site internet professionnel à{' '}
                  <span className='text-[#3F72AF]'>Toulouse</span>
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed'>
                  Vous êtes une entreprise, un artisan, une startup ou un indépendant basé à{' '}
                  <strong>Toulouse</strong> et vous souhaitez développer votre visibilité en ligne ?
                  Notre <strong>agence web à Toulouse</strong> est experte dans la{' '}
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

              {/* Floating Metrics */}
              <div className='grid grid-cols-3 gap-6 pt-8'>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                  <div className='text-2xl font-bold text-[#112D4E]'>50+</div>
                  <div className='text-sm text-gray-600'>Projets à Toulouse</div>
                </div>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                  <div className='text-2xl font-bold text-[#112D4E]'>6sem</div>
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
                  src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt='Création site internet Toulouse - Bureau moderne'
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
                Nos services de création de site web à Toulouse
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Qu&apos;il s&apos;agisse de <strong>sites vitrines</strong> ou de{' '}
                <strong>sites e-commerce</strong>, optimisés pour le{' '}
                <strong>référencement SEO local</strong> et conçus pour générer de nouveaux clients.
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Site vitrine à Toulouse</h3>
                <p className='text-gray-600 mb-6'>
                  Un <strong>site vitrine professionnel</strong> pour présenter vos services et vos
                  atouts auprès de la clientèle toulousaine et occitane.
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
                  Développement de <strong>boutiques en ligne</strong> avec paiement sécurisé,
                  gestion des produits, design responsive et référencement SEO optimisé pour
                  Toulouse et au-delà.
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
                  Solutions personnalisées adaptées à vos besoins : intégrations spécifiques,
                  fonctionnalités avancées, API, CRM.
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

              {/* SEO Toulouse */}
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Référencement SEO Toulouse
                </h3>
                <p className='text-gray-600 mb-6'>
                  Optimisation technique et éditoriale pour vous positionner sur les mots-clés
                  stratégiques comme
                  <em>&ldquo;création site internet Toulouse&rdquo;</em> ou{' '}
                  <em>&ldquo;agence web Toulouse&rdquo;</em>.
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Web design & expérience utilisateur
                </h3>
                <p className='text-gray-600 mb-6'>
                  Sites modernes, rapides et esthétiques, pensés pour offrir une{' '}
                  <strong>expérience utilisateur fluide</strong>
                  et augmenter votre taux de conversion.
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Maintenance & support</h3>
                <p className='text-gray-600 mb-6'>
                  Mises à jour, sécurité, sauvegardes automatiques, assistance réactive avec un
                  suivi continu.
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
                Pourquoi choisir notre agence web à Toulouse ?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Une expertise locale au service de votre croissance digitale
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>
                  Connaissance du marché local
                </h3>
                <p className='text-gray-600'>Expertise des besoins des entreprises toulousaines.</p>
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>Stratégie SEO locale</h3>
                <p className='text-gray-600'>
                  Optimisation pour apparaître en tête des recherches à Toulouse et en Occitanie.
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>
                  Accompagnement personnalisé
                </h3>
                <p className='text-gray-600'>Un interlocuteur dédié, réactif et proche de vous.</p>
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
                <p className='text-gray-600'>
                  Devis gratuit, tarifs adaptés, aucune mauvaise surprise.
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
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-3'>Résultats tangibles</h3>
                <p className='text-gray-600'>
                  Augmentation de la visibilité, nouveaux clients, croissance durable.
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
                Notre méthodologie de création de site internet à Toulouse
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
                  Audit & stratégie digitale locale
                </h3>
                <p className='text-gray-600'>
                  Analyse de vos concurrents à Toulouse et étude de votre marché.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  2
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Conception & design</h3>
                <p className='text-gray-600'>
                  Maquettes adaptées à votre identité visuelle et à vos clients cibles.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  3
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Développement technique</h3>
                <p className='text-gray-600'>
                  Site responsive, rapide, conforme aux standards web.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  4
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>SEO & optimisation locale</h3>
                <p className='text-gray-600'>
                  Contenus adaptés à Toulouse, balises meta, vitesse, mobile-first.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-linear-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl'>
                  5
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Mise en ligne & suivi</h3>
                <p className='text-gray-600'>
                  Indexation Google, monitoring des performances et ajustements continus.
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
                FAQ – Création de site internet Toulouse
              </h2>
              <p className='text-xl text-gray-600'>Réponses aux questions les plus fréquentes</p>
            </div>

            <div className='space-y-8'>
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Quel est le prix pour créer un site internet à Toulouse ?
                </h3>
                <p className='text-gray-600'>
                  Le coût dépend du type de site (vitrine, e-commerce, fonctionnalités).
                  Contactez-nous pour un <strong>devis gratuit et personnalisé</strong>.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Combien de temps pour développer un site web ?
                </h3>
                <p className='text-gray-600'>
                  En moyenne <strong>4 à 8 semaines</strong>, selon la complexité du projet et la
                  disponibilité des contenus.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Mon site sera-t-il visible sur Google ?
                </h3>
                <p className='text-gray-600'>
                  Oui. Tous nos sites sont optimisés pour le{' '}
                  <strong>référencement SEO à Toulouse</strong>, afin de maximiser votre visibilité
                  locale.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Puis-je modifier mon site moi-même ?
                </h3>
                <p className='text-gray-600'>
                  Oui. Nous proposons des CMS simples et une formation pour gérer vos textes, images
                  et contenus.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className='py-20 bg-linear-to-br from-[#112D4E] to-[#3F72AF] text-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-4xl font-bold mb-6'>Demandez votre devis gratuit à Toulouse</h2>
            <p className='text-xl mb-8 opacity-90'>
              Vous souhaitez renforcer votre présence en ligne et attirer de nouveaux clients à{' '}
              <strong>Toulouse</strong> ?<br />
              Confiez-nous la <strong>création de votre site internet</strong> et bénéficiez
              d&apos;une solution moderne, efficace et optimisée pour le SEO local.
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
