import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'

import { Section } from '@/components/ui'
import CTAButton from '@/components/ui/CTAButton'
import Link from 'next/link'
import Image from 'next/image'

interface CafeParisPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: CafeParisPageProps): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === 'fr'
      ? 'Création site internet café Paris – Agence web spécialisée'
      : locale === 'en'
        ? 'Café Website Creation Paris | Specialized Web Agency'
        : 'Создание Сайтов для Кафе Париж | Специализированное Веб-Агентство'

  const description =
    locale === 'fr'
      ? 'Boostez la visibilité de votre café à Paris avec un site web professionnel : menu en ligne, réservation, multilingue et SEO local optimisé.'
      : locale === 'en'
        ? "Boost your café's visibility in Paris with a professional website: online menu, reservation, multilingual and optimized local SEO."
        : 'Повысьте видимость вашего кафе в Париже с профессиональным сайтом: онлайн-меню, бронирование, многоязычность и локальное SEO.'

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
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'}/${locale === 'fr' ? '' : locale + '/'}services/creation-site-internet-cafe-paris`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'}/${locale === 'fr' ? '' : locale + '/'}services/creation-site-internet-cafe-paris`,
      siteName: 'Sidikoff Digital',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'}/images/og/creation-site-cafe-paris.jpg`,
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
        `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'}/images/og/creation-site-cafe-paris.jpg`,
      ],
    },
  }
}

export default async function CafeParisPage({ params }: CafeParisPageProps) {
  const { locale } = await params

  if (locale === 'en') {
    return (
      <div className='min-h-screen'>
        {/* Hero Section */}
        <Section className='pt-32 pb-20 bg-gradient-to-br from-[#DBE2EF] via-[#F9F7FF] to-white relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-right-top opacity-5'></div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <div className='inline-flex items-center bg-[#3F72AF]/10 text-[#3F72AF] px-4 py-2 rounded-full text-sm font-medium'>
                    <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' />
                    </svg>
                    Café Website Expert
                  </div>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] leading-tight'>
                    Professional Website Creation for{' '}
                    <span className='text-[#3F72AF]'>Cafés in Paris</span>
                  </h2>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    Specialized web agency helping Parisian cafés boost their digital presence with
                    professional, SEO-optimized websites featuring online menus, reservations, and
                    multilingual support.
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
                    <div className='text-2xl font-bold text-[#112D4E]'>20+</div>
                    <div className='text-sm text-gray-600'>Café Projects</div>
                  </div>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                    <div className='text-2xl font-bold text-[#112D4E]'>4 weeks</div>
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
                    src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80'
                    alt='Café website creation Paris - Modern café interior'
                    className='rounded-2xl shadow-2xl'
                    width={600}
                    height={400}
                  />
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/20 to-transparent rounded-2xl'></div>
                </div>

                {/* Floating Elements */}
                <div className='absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg z-20'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-sm font-medium text-gray-700'>Online Menu</span>
                  </div>
                </div>

                <div className='absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-[#112D4E]'>Multi</div>
                    <div className='text-xs text-gray-600'>Language</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className='flex flex-col gap-0'>
          {/* Why Essential Section */}
          <Section className='py-20 bg-gradient-to-b from-white to-[#F8F9FA]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Why a website is essential for your café in Paris
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Today, a café without a website visible on Google loses potential customers. A{' '}
                  <strong>Paris-optimized website</strong> allows:
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    <strong>Showcase your menus</strong> and specialties (coffee, drinks, pastries,
                    brunch).
                  </p>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    <strong>Facilitate reservations</strong> and online orders.
                  </p>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    <strong>Improve your local visibility</strong> and attract residents and
                    tourists.
                  </p>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    Offer a <strong>modern user experience</strong> and mobile-friendly interface.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Services Section */}
          <Section className='py-20 bg-gradient-to-br from-[#F8F9FA] to-[#DBE2EF]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Our web creation services for cafés
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Complete solutions adapted to the specific needs of Parisian cafés
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Professional showcase website */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Professional showcase website
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Present your café with a <strong>modern design</strong>, your hours, address and
                    values.
                  </p>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Learn more
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

                {/* E-commerce for café */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>E-commerce for café</h3>
                  <p className='text-gray-600 mb-6'>
                    Enable <strong>online product sales</strong>: coffee beans, pastries,
                    subscriptions or gift cards.
                  </p>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Learn more
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

                {/* Café-specific features */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                    Features adapted to cafés
                  </h3>
                  <div className='text-gray-600 space-y-2 mb-6'>
                    <p>• Online menu and downloadable PDF</p>
                    <p>• Table reservation and customer flow management</p>
                    <p>• Click & Collect and delivery</p>
                    <p>• Multilingual section (FR/EN)</p>
                  </div>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Learn more
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

                {/* Local SEO for cafés in Paris */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                    Local SEO for cafés in Paris
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Content optimization, meta tags, Google Business Profile, customer reviews and
                    geolocation to appear at the top of searches:
                    <em>café Paris</em>, <em>best café Paris</em>, <em>coffee shop Paris</em>.
                  </p>
                  <Link
                    href='/services/optimisation-seo'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Learn more
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

                {/* Design & user experience */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                    Design & user experience
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Smooth navigation, responsive design,{' '}
                    <strong>attractive photos and videos</strong> to seduce your visitors and
                    convert them into customers.
                  </p>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Learn more
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

                {/* Maintenance & technical support */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Maintenance & technical support
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Regular updates, security, <strong>backups and dedicated assistance</strong> to
                    ensure your site&apos;s performance.
                  </p>
                  <Link
                    href='/services/maintenance-support'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Learn more
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

          {/* Advantages Section */}
          <Section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Advantages of an optimized website for your café
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Transform your digital presence into a competitive advantage
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>
                    Increased visibility in Paris
                  </h3>
                  <p className='text-gray-600'>and Île-de-France region.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
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
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>
                    Better informed customers
                  </h3>
                  <p className='text-gray-600'>and loyalty through online menu and reservation.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Time savings</h3>
                  <p className='text-gray-600'>for you thanks to automatic features.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Professional image</h3>
                  <p className='text-gray-600'>and modern appearance of your establishment.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Multilingual website</h3>
                  <p className='text-gray-600'>to reach tourists and expatriates.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Portfolio Section */}
          <Section className='py-20 bg-gradient-to-b from-[#F8F9FA] to-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Project examples / Portfolio
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                Discover our work for Parisian cafés and restaurants. See our results in local SEO
                and modern design.
              </p>
              <CTAButton href='/projects' size='lg' className='mx-auto'>
                View our projects
              </CTAButton>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section className='py-20 bg-white'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  FAQ – Café website creation Paris
                </h2>
                <p className='text-xl text-gray-600'>
                  Answers to the most frequent questions from café owners
                </p>
              </div>

              <div className='space-y-8'>
                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    What is the price to create a website for my café in Paris?
                  </h3>
                  <p className='text-gray-600'>
                    The price varies according to the type of site and desired features. Contact us
                    for a <strong>free and personalized quote</strong>.
                  </p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    How long does it take to create a café website?
                  </h3>
                  <p className='text-gray-600'>
                    On average <strong>4 to 8 weeks</strong>, depending on complexity and content
                    provided.
                  </p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Will my site be visible on Google?
                  </h3>
                  <p className='text-gray-600'>
                    Yes. Each site is designed with a <strong>local SEO strategy for Paris</strong>,
                    to maximize visibility among nearby customers.
                  </p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Can I manage my site myself after it goes live?
                  </h3>
                  <p className='text-gray-600'>
                    Yes. We provide simple training to update your menus, images and texts.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* CTA Section */}
          <Section className='py-20 bg-gradient-to-br from-[#112D4E] to-[#3F72AF] text-white'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-4xl font-bold mb-6'>Request your free quote</h2>
              <p className='text-xl mb-8 opacity-90'>
                Do you want to <strong>attract more customers to your café in Paris</strong> and
                improve your online visibility?
                <br />
                Trust us with the <strong>creation of your professional website</strong>, SEO and
                multilingual optimized, to transform your visitors into loyal customers.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <CTAButton
                  href='/contact'
                  variant='outline'
                  size='lg'
                  className='bg-white text-[#112D4E] hover:bg-gray-100 border-white'>
                  Request free quote
                </CTAButton>
                <CTAButton
                  href='/projects'
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white/10'>
                  View our work
                </CTAButton>
                <CTAButton
                  href='/tarifs'
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white/10'>
                  Check our prices
                </CTAButton>
              </div>
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
        <Section className='pt-32 pb-20 bg-gradient-to-br from-[#DBE2EF] via-[#F9F7FF] to-white relative overflow-hidden'>
          <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-right-top opacity-5'></div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <div className='inline-flex items-center bg-[#3F72AF]/10 text-[#3F72AF] px-4 py-2 rounded-full text-sm font-medium'>
                    <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' />
                    </svg>
                    Эксперт по сайтам кафе
                  </div>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] leading-tight'>
                    Профессиональное создание сайтов для{' '}
                    <span className='text-[#3F72AF]'>кафе в Париже</span>
                  </h2>
                  <p className='text-xl text-gray-600 leading-relaxed'>
                    Специализированное веб-агентство помогает парижским кафе повысить цифровое
                    присутствие с профессиональными, SEO-оптимизированными сайтами с онлайн-меню,
                    бронированием и многоязычной поддержкой.
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
                    <div className='text-2xl font-bold text-[#112D4E]'>20+</div>
                    <div className='text-sm text-gray-600'>Проектов кафе</div>
                  </div>
                  <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                    <div className='text-2xl font-bold text-[#112D4E]'>4 недели</div>
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
                    src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80'
                    alt='Создание сайтов для кафе Париж - Современный интерьер кафе'
                    className='rounded-2xl shadow-2xl'
                    width={600}
                    height={400}
                  />
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/20 to-transparent rounded-2xl'></div>
                </div>

                {/* Floating Elements */}
                <div className='absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg z-20'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-sm font-medium text-gray-700'>Онлайн-меню</span>
                  </div>
                </div>

                <div className='absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                  <div className='text-center'>
                    <div className='text-lg font-bold text-[#112D4E]'>Много</div>
                    <div className='text-xs text-gray-600'>Языков</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className='flex flex-col gap-0'>
          {/* Why Essential Section */}
          <Section className='py-20 bg-gradient-to-b from-white to-[#F8F9FA]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Почему сайт необходим для вашего кафе в Париже
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Сегодня кафе без сайта, видимого в Google, теряет потенциальных клиентов.
                  <strong>Сайт, оптимизированный для Парижа</strong> позволяет:
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    <strong>Представить ваши меню</strong> и фирменные блюда (кофе, напитки,
                    выпечка, бранч).
                  </p>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    <strong>Упростить бронирование</strong> и онлайн-заказы.
                  </p>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    <strong>Улучшить локальную видимость</strong> и привлечь жителей и туристов.
                  </p>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <p className='text-gray-600'>
                    Обеспечить <strong>современный пользовательский опыт</strong> и мобильный
                    интерфейс.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Services Section */}
          <Section className='py-20 bg-gradient-to-br from-[#F8F9FA] to-[#DBE2EF]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Наши услуги по созданию веб-сайтов для кафе
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Комплексные решения, адаптированные к специфическим потребностям парижских кафе
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Professional showcase website */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Профессиональный сайт-витрина
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Представьте ваше кафе с <strong>современным дизайном</strong>, расписанием,
                    адресом и ценностями.
                  </p>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Подробнее
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

                {/* E-commerce for café */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                    Интернет-магазин для кафе
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Обеспечьте <strong>онлайн-продажу продуктов</strong>: кофе в зернах, выпечка,
                    подписки или подарочные карты.
                  </p>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Подробнее
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

                {/* Café-specific features */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                    Функции, адаптированные для кафе
                  </h3>
                  <div className='text-gray-600 space-y-2 mb-6'>
                    <p>• Онлайн-меню и загружаемый PDF</p>
                    <p>• Бронирование столов и управление потоком клиентов</p>
                    <p>• Click & Collect и доставка</p>
                    <p>• Многоязычная секция (FR/EN)</p>
                  </div>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Подробнее
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

                {/* Local SEO for cafés in Paris */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                    Локальное SEO для кафе в Париже
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Оптимизация контента, мета-теги, Google Business Profile, отзывы клиентов и
                    геолокация для появления в топе поисков:
                    <em>кафе Париж</em>, <em>лучшее кафе Париж</em>, <em>кофейня Париж</em>.
                  </p>
                  <Link
                    href='/services/optimisation-seo'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Подробнее
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

                {/* Design & user experience */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                    Дизайн и пользовательский опыт
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Плавная навигация, адаптивный дизайн,{' '}
                    <strong>привлекательные фото и видео</strong> для привлечения посетителей и их
                    превращения в клиентов.
                  </p>
                  <Link
                    href='/services/creation-sites-web'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Подробнее
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

                {/* Maintenance & technical support */}
                <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Обслуживание и техническая поддержка
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Регулярные обновления, безопасность,{' '}
                    <strong>резервные копии и специализированная помощь</strong> для обеспечения
                    производительности вашего сайта.
                  </p>
                  <Link
                    href='/services/maintenance-support'
                    className='text-[#3F72AF] hover:text-[#112D4E] font-semibold inline-flex items-center group'>
                    Подробнее
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

          {/* Advantages Section */}
          <Section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Преимущества оптимизированного сайта для вашего кафе
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Превратите ваше цифровое присутствие в конкурентное преимущество
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>
                    Повышенная видимость в Париже
                  </h3>
                  <p className='text-gray-600'>и регионе Иль-де-Франс.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
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
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>
                    Лучше информированные клиенты
                  </h3>
                  <p className='text-gray-600'>и лояльность через онлайн-меню и бронирование.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Экономия времени</h3>
                  <p className='text-gray-600'>для вас благодаря автоматическим функциям.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Профессиональный имидж</h3>
                  <p className='text-gray-600'>и современный вид вашего заведения.</p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                  <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Многоязычный сайт</h3>
                  <p className='text-gray-600'>для привлечения туристов и экспатов.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Portfolio Section */}
          <Section className='py-20 bg-gradient-to-b from-[#F8F9FA] to-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Примеры проектов / Портфолио
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                Ознакомьтесь с нашими работами для парижских кафе и ресторанов. Убедитесь в наших
                результатах в локальном SEO и современном дизайне.
              </p>
              <CTAButton href='/projects' size='lg' className='mx-auto'>
                Смотреть наши проекты
              </CTAButton>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section className='py-20 bg-white'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  FAQ – Создание сайта для кафе Париж
                </h2>
                <p className='text-xl text-gray-600'>
                  Ответы на наиболее частые вопросы владельцев кафе
                </p>
              </div>

              <div className='space-y-8'>
                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Какова цена создания сайта для моего кафе в Париже?
                  </h3>
                  <p className='text-gray-600'>
                    Цена варьируется в зависимости от типа сайта и желаемых функций. Свяжитесь с
                    нами для получения{' '}
                    <strong>бесплатного и персонализированного предложения</strong>.
                  </p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Сколько времени занимает создание сайта для кафе?
                  </h3>
                  <p className='text-gray-600'>
                    В среднем <strong>от 4 до 8 недель</strong>, в зависимости от сложности и
                    предоставленного контента.
                  </p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Будет ли мой сайт виден в Google?
                  </h3>
                  <p className='text-gray-600'>
                    Да. Каждый сайт разработан с{' '}
                    <strong>локальной SEO-стратегией для Парижа</strong>, чтобы максимизировать
                    видимость среди близлежащих клиентов.
                  </p>
                </div>

                <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Смогу ли я сам управлять сайтом после его запуска?
                  </h3>
                  <p className='text-gray-600'>
                    Да. Мы предоставляем простое обучение для обновления ваших меню, изображений и
                    текстов.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* CTA Section */}
          <Section className='py-20 bg-gradient-to-br from-[#112D4E] to-[#3F72AF] text-white'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <h2 className='text-4xl font-bold mb-6'>Запросите бесплатное предложение</h2>
              <p className='text-xl mb-8 opacity-90'>
                Хотите <strong>привлечь больше клиентов в ваше кафе в Париже</strong> и улучшить
                вашу онлайн-видимость?
                <br />
                Доверьте нам <strong>создание вашего профессионального сайта</strong>,
                оптимизированного для SEO и многоязычного, чтобы превратить ваших посетителей в
                постоянных клиентов.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <CTAButton
                  href='/contact'
                  variant='outline'
                  size='lg'
                  className='bg-white text-[#112D4E] hover:bg-gray-100 border-white'>
                  Запросить бесплатное предложение
                </CTAButton>
                <CTAButton
                  href='/projects'
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white/10'>
                  Смотреть наши работы
                </CTAButton>
                <CTAButton
                  href='/tarifs'
                  variant='outline'
                  size='lg'
                  className='border-white text-white hover:bg-white/10'>
                  Посмотреть наши цены
                </CTAButton>
              </div>
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
      <Section className='pt-32 pb-20 bg-gradient-to-br from-[#DBE2EF] via-[#F9F7FF] to-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/images/hero-illustration.svg")] bg-no-repeat bg-right-top opacity-5'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <div className='space-y-4'>
                <div className='inline-flex items-center bg-[#3F72AF]/10 text-[#3F72AF] px-4 py-2 rounded-full text-sm font-medium'>
                  <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' />
                  </svg>
                  Expert Cafés Paris
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] leading-tight'>
                  Création de site internet pour{' '}
                  <span className='text-[#3F72AF]'>cafés à Paris</span>
                </h1>
                <p className='text-xl text-gray-600 leading-relaxed'>
                  Vous êtes propriétaire d&apos;un <strong>café ou coffee shop à Paris</strong> et
                  souhaitez attirer plus de clients grâce au digital ? Notre{' '}
                  <strong>agence web spécialisée</strong> accompagne les cafés dans la{' '}
                  <strong>création de sites internet sur mesure</strong>,
                  <strong>modernes, performants et optimisés pour le SEO local</strong>.
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
                  <div className='text-2xl font-bold text-[#112D4E]'>25+</div>
                  <div className='text-sm text-gray-600'>Projets cafés</div>
                </div>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-white/20'>
                  <div className='text-2xl font-bold text-[#112D4E]'>4sem</div>
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
                  src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80'
                  alt='Création site internet café Paris - Intérieur moderne de café'
                  className='rounded-2xl shadow-2xl'
                  width={600}
                  height={400}
                />
                <div className='absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/20 to-transparent rounded-2xl'></div>
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg z-20'>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='text-sm font-medium text-gray-700'>Menu en ligne</span>
                </div>
              </div>

              <div className='absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                <div className='text-center'>
                  <div className='text-lg font-bold text-[#112D4E]'>Multi</div>
                  <div className='text-xs text-gray-600'>Lingue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className='flex flex-col gap-0'>
        {/* Why Essential Section */}
        <Section className='py-20 bg-gradient-to-b from-white to-[#F8F9FA]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Pourquoi un site internet est essentiel pour votre café à Paris
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Aujourd&apos;hui, un café sans site web visible sur Google perd des clients
                potentiels. Un <strong>site optimisé pour Paris</strong> permet :
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                    />
                  </svg>
                </div>
                <p className='text-gray-600'>
                  <strong>Présenter vos menus</strong> et spécialités (café, boissons, pâtisseries,
                  brunch).
                </p>
              </div>

              <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <p className='text-gray-600'>
                  <strong>Faciliter les réservations</strong> et commandes en ligne.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-gray-600'>
                  <strong>Améliorer votre visibilité locale</strong> et attirer habitants et
                  touristes.
                </p>
              </div>

              <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <p className='text-gray-600'>
                  Offrir une <strong>expérience utilisateur moderne</strong> et mobile-friendly.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section className='py-20 bg-gradient-to-br from-[#F8F9FA] to-[#DBE2EF]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Nos services de création de site web pour cafés
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Solutions complètes adaptées aux besoins spécifiques des cafés parisiens
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Site vitrine professionnel */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Site vitrine professionnel
                </h3>
                <p className='text-gray-600 mb-6'>
                  Présentez votre café avec un <strong>design moderne</strong>, vos horaires, votre
                  adresse et vos valeurs.
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

              {/* Site e-commerce pour café */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Site e-commerce pour café</h3>
                <p className='text-gray-600 mb-6'>
                  Permettez la <strong>vente de produits en ligne</strong> : café en grains,
                  pâtisseries, abonnements ou cartes cadeaux.
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

              {/* Fonctionnalités adaptées aux cafés */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                  Fonctionnalités adaptées aux cafés
                </h3>
                <div className='text-gray-600 space-y-2 mb-6'>
                  <p>• Menu en ligne et PDF téléchargeable</p>
                  <p>• Réservation de table et gestion du flux client</p>
                  <p>• Click & Collect et livraison</p>
                  <p>• Section multilingue (FR/EN/DE)</p>
                </div>
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

              {/* SEO local pour cafés à Paris */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                  SEO local pour cafés à Paris
                </h3>
                <p className='text-gray-600 mb-6'>
                  Optimisation des contenus, balises meta, Google Business Profile, avis clients et
                  géolocalisation pour apparaître en haut des recherches :<em>café Paris</em>,{' '}
                  <em>meilleur café Paris</em>, <em>coffee shop Paris</em>.
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

              {/* Design & expérience utilisateur */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
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
                  Design & expérience utilisateur
                </h3>
                <p className='text-gray-600 mb-6'>
                  Navigation fluide, responsive design,{' '}
                  <strong>photos et vidéos attractives</strong> pour séduire vos visiteurs et les
                  convertir en clients.
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

              {/* Maintenance & support technique */}
              <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-6'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Maintenance & support technique
                </h3>
                <p className='text-gray-600 mb-6'>
                  Mises à jour régulières, sécurité,{' '}
                  <strong>sauvegardes et assistance dédiée</strong> pour assurer la performance de
                  votre site.
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

        {/* Advantages Section */}
        <Section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                Avantages d&apos;un site web optimisé pour votre café
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Transformez votre présence digitale en avantage concurrentiel
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Visibilité accrue à Paris</h3>
                <p className='text-gray-600'>et en Île-de-France.</p>
              </div>

              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
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
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Clients mieux informés</h3>
                <p className='text-gray-600'>
                  et fidélisés grâce au menu en ligne et à la réservation.
                </p>
              </div>

              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Gain de temps</h3>
                <p className='text-gray-600'>pour vous grâce aux fonctionnalités automatiques.</p>
              </div>

              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Image professionnelle</h3>
                <p className='text-gray-600'>et moderne de votre établissement.</p>
              </div>

              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl p-6 border border-gray-100'>
                <div className='w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center mb-4'>
                  <svg
                    className='w-6 h-6 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-[#112D4E] mb-3'>Site multilingue</h3>
                <p className='text-gray-600'>pour toucher touristes et expatriés.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Portfolio Section */}
        <Section className='py-20 bg-gradient-to-b from-[#F8F9FA] to-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
              Exemple de projet / Portfolio
            </h2>
            <p className='text-xl text-gray-600 mb-8'>
              Découvrez nos réalisations pour des cafés et restaurants parisiens. Constatez nos
              résultats en SEO local et design moderne.
            </p>
            <CTAButton href='/projects' size='lg' className='mx-auto'>
              Voir nos projets
            </CTAButton>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className='py-20 bg-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                FAQ – Création de site internet café Paris
              </h2>
              <p className='text-xl text-gray-600'>
                Réponses aux questions les plus fréquentes des propriétaires de cafés
              </p>
            </div>

            <div className='space-y-8'>
              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Quel est le prix pour créer un site pour mon café à Paris ?
                </h3>
                <p className='text-gray-600'>
                  Le tarif varie selon le type de site et les fonctionnalités souhaitées.
                  Contactez-nous pour un <strong>devis gratuit et personnalisé</strong>.
                </p>
              </div>

              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Combien de temps pour créer un site web pour café ?
                </h3>
                <p className='text-gray-600'>
                  En moyenne <strong>4 à 8 semaines</strong>, selon la complexité et le contenu
                  fourni.
                </p>
              </div>

              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Mon site sera-t-il visible sur Google ?
                </h3>
                <p className='text-gray-600'>
                  Oui. Chaque site est conçu avec une <strong>stratégie SEO locale Paris</strong>,
                  pour maximiser la visibilité auprès des clients à proximité.
                </p>
              </div>

              <div className='bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 shadow-lg border border-gray-100'>
                <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                  Puis-je gérer mon site moi-même après sa mise en ligne ?
                </h3>
                <p className='text-gray-600'>
                  Oui. Nous fournissons une formation simple pour mettre à jour vos menus, images et
                  textes.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className='py-20 bg-gradient-to-br from-[#112D4E] to-[#3F72AF] text-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-4xl font-bold mb-6'>Demandez votre devis gratuit</h2>
            <p className='text-xl mb-8 opacity-90'>
              Vous souhaitez <strong>attirer plus de clients dans votre café à Paris</strong> et
              améliorer votre visibilité en ligne ?<br />
              Confiez-nous la <strong>création de votre site internet professionnel</strong>,
              optimisé SEO et multilingue, pour transformer vos visiteurs en clients fidèles.
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
