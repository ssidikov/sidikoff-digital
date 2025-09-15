import { Metadata } from 'next'
import { Locale } from '@/lib/i18n'
import SEOLinks from '@/components/SEOLinks'
import { Section } from '@/components/ui'
import CTAButton from '@/components/ui/CTAButton'
import Link from 'next/link'
import Image from 'next/image'

interface Paris16PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: Paris16PageProps): Promise<Metadata> {
  const { locale } = await params

  const title =
    locale === 'fr'
      ? 'Création site internet Paris 16 – Agence web & SEO local'
      : locale === 'en'
        ? 'Website Creation Paris 16 | Expert Local Web Developer'
        : 'Создание Сайтов Париж 16 | Эксперт Веб-Разработчик'

  const description =
    locale === 'fr'
      ? 'Agence web à Paris 16 spécialisée dans la création de sites internet sur mesure, vitrine & e-commerce. Boostez votre visibilité locale avec un site optimisé SEO.'
      : locale === 'en'
        ? 'Custom website creation in Paris 16. Local web developer expert in SEO and responsive design. Free quote for your professional website.'
        : 'Создание сайтов в Париже 16. Местный веб-разработчик, эксперт по SEO и адаптивному дизайну. Бесплатная консультация.'

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
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'}/${locale === 'fr' ? '' : locale + '/'}services/creation-site-internet-paris-16`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale,
      images: [
        {
          url: '/images/services/web-creation-paris-16.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function CreationSiteInternetParis16Page({ params }: Paris16PageProps) {
  const { locale } = await params

  // French content (primary target)
  if (locale === 'fr') {
    return (
      <>
        <SEOLinks locale={locale} />
        <div className='min-h-screen bg-gradient-to-br from-[#F9F7FF] via-[#F9F7FF] to-[#DBE2EF]'>
          {/* Hero Section */}
          <Section id='hero-paris-16' variant='hero' padding='xl' contentWidth='wide'>
            <div className='container mx-auto px-4 md:pt-32 pb-20'>
              <div className='max-w-6xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                  {/* Left Content */}
                  <div className='text-center lg:text-left'>
                    <div className='inline-flex items-center px-4 py-2 bg-[#3F72AF]/10 rounded-full text-[#3F72AF] font-medium text-sm mb-6'>
                      <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Expert Local Paris 16ème
                    </div>

                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] mb-6 leading-tight'>
                      Création de site internet professionnel à{' '}
                      <span className='bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent'>
                        Paris 16ᵉ
                      </span>
                    </h1>

                    <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                      Vous cherchez une <strong>agence web à Paris 16</strong> pour développer un
                      site internet moderne, efficace et visible sur Google ? Nous créons des{' '}
                      <strong>sites vitrines et e-commerce</strong> sur mesure, optimisés pour le{' '}
                      <strong>SEO local</strong> et adaptés aux besoins des entreprises, artisans et
                      professionnels du <strong>16ᵉ arrondissement de Paris</strong>.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                      <CTAButton
                        href='/contact'
                        variant='primary'
                        size='md'
                        className='bg-gradient-to-r from-[#3F72AF] to-[#112D4E] hover:from-[#112D4E] hover:to-[#3F72AF] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                        <svg
                          className='w-4 h-4 mr-2'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                          />
                        </svg>
                        Devis Gratuit
                      </CTAButton>
                      <CTAButton
                        href='/projects'
                        variant='outline'
                        size='md'
                        className='border-2 border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF] hover:text-white transition-all duration-300'>
                        <svg
                          className='w-4 h-4 mr-2'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                          />
                        </svg>
                        Nos Réalisations
                      </CTAButton>
                    </div>

                    {/* Trust Indicators */}
                    <div className='flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-600'>
                      <div className='flex items-center'>
                        <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                        <span>100% Sur-mesure</span>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                        <span>SEO Optimisé</span>
                      </div>
                      <div className='flex items-center'>
                        <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                        <span>Support Local</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className='relative'>
                    <div className='relative z-10'>
                      <Image
                        src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80'
                        alt='Création site internet Paris 16 - Développement web professionnel'
                        className='rounded-2xl shadow-2xl'
                        width={600}
                        height={400}
                      />
                      <div className='absolute inset-0 bg-gradient-to-tr from-[#112D4E]/20 to-transparent rounded-2xl'></div>
                    </div>

                    {/* Floating Cards */}
                    <div className='absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl z-20'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                          <svg
                            className='w-5 h-5 text-white'
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
                        <div>
                          <div className='font-semibold text-[#112D4E]'>+150%</div>
                          <div className='text-xs text-gray-600'>Conversion</div>
                        </div>
                      </div>
                    </div>

                    <div className='absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl z-20'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                          <svg
                            className='w-5 h-5 text-white'
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
                        <div>
                          <div className='font-semibold text-[#112D4E]'>Top 3</div>
                          <div className='text-xs text-gray-600'>Référencement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Introduction Card */}
                <div className='mt-16'>
                  <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50'>
                    <div className='max-w-4xl mx-auto'>
                      <div className='flex items-start space-x-4'>
                        <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-xl flex items-center justify-center'>
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
                        <div className='flex-1'>
                          <h2 className='text-2xl font-bold text-[#112D4E] mb-4'>
                            Pour les Entreprises du 16ème Arrondissement
                          </h2>
                          <p className='text-lg text-gray-700 leading-relaxed'>
                            Vous êtes une entreprise ou un professionnel du 16ème arrondissement de
                            Paris à la recherche d&apos;un
                            <strong> site web professionnel</strong> ? Vous constatez que votre
                            présence en ligne ne génère pas assez de clients locaux, que votre site
                            actuel est obsolète ou peu visible sur Google ? Notre agence spécialisée
                            dans la <strong>création site internet Paris 16</strong> vous accompagne
                            pour développer une solution web sur-mesure qui convertit vos visiteurs
                            en clients et améliore votre visibilité locale.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Services Section */}
          <Section id='services-paris-16' variant='services' padding='xl' contentWidth='wide'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-[#112D4E] mb-6'>
                  Nos services de création de site web à Paris 16
                </h2>
                <div className='w-24 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] mx-auto mb-6'></div>
              </div>

              {/* Service 1: Site vitrine professionnel */}
              <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
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
                    <h3 className='text-2xl font-bold text-[#112D4E]'>
                      Site vitrine professionnel
                    </h3>
                  </div>

                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Un <strong>site vitrine optimisé pour Paris 16</strong> afin de présenter vos
                    services, attirer de nouveaux clients et renforcer votre image professionnelle.
                  </p>

                  <Link
                    href='/services/creation-sites-web'
                    className='inline-flex items-center text-[#3F72AF] hover:text-[#112D4E] font-semibold transition-colors group'>
                    <span>En savoir plus sur nos sites vitrines</span>
                    <svg
                      className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
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

                <div className='relative'>
                  <div className='relative z-10'>
                    <Image
                      src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80'
                      alt='Site vitrine professionnel Paris 16'
                      className='rounded-2xl shadow-xl'
                      width={600}
                      height={400}
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-[#112D4E]/10 to-transparent rounded-2xl'></div>
                  </div>
                </div>
              </div>

              {/* Service 2: Site e-commerce sur mesure */}
              <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
                <div className='order-2 lg:order-1 relative'>
                  <div className='relative z-10'>
                    <Image
                      src='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                      alt='Site e-commerce Paris 16'
                      className='rounded-2xl shadow-xl'
                      width={600}
                      height={400}
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/10 to-transparent rounded-2xl'></div>
                  </div>
                </div>

                <div className='order-1 lg:order-2 space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13a2 2 0 100 4 2 2 0 000-4zM9 19a2 2 0 100 4 2 2 0 000-4z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-2xl font-bold text-[#112D4E]'>
                      Site e-commerce sur mesure
                    </h3>
                  </div>

                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Développement de <strong>boutiques en ligne performantes</strong> : gestion des
                    produits, paiement sécurisé, design responsive, adapté à vos clients locaux et
                    nationaux.
                  </p>
                </div>
              </div>

              {/* Service 3: SEO local Paris 16 */}
              <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-2xl font-bold text-[#112D4E]'>SEO local Paris 16</h3>
                  </div>

                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Optimisation complète : structure du site, balises, contenus géolocalisés,
                    fiches Google Business Profile, pour apparaître en haut des recherches locales
                    comme <em>&quot;création site internet Paris 16&quot;</em>.
                  </p>

                  <Link
                    href='/services/optimisation-seo'
                    className='inline-flex items-center text-[#3F72AF] hover:text-[#112D4E] font-semibold transition-colors group'>
                    <span>Découvrir nos services SEO</span>
                    <svg
                      className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
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

                <div className='relative'>
                  <div className='relative z-10'>
                    <Image
                      src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                      alt='SEO local Paris 16 - Analytics et performance'
                      className='rounded-2xl shadow-xl'
                      width={600}
                      height={400}
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/10 to-transparent rounded-2xl'></div>
                  </div>
                </div>
              </div>

              {/* Service 4: Design & expérience utilisateur */}
              <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
                <div className='order-2 lg:order-1 relative'>
                  <div className='relative z-10'>
                    <Image
                      src='https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                      alt='Design UX/UI Paris 16'
                      className='rounded-2xl shadow-xl'
                      width={600}
                      height={400}
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-[#112D4E]/10 to-transparent rounded-2xl'></div>
                  </div>
                </div>

                <div className='order-1 lg:order-2 space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
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
                    <h3 className='text-2xl font-bold text-[#112D4E]'>
                      Design & expérience utilisateur
                    </h3>
                  </div>

                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Sites modernes, rapides et adaptés aux mobiles. Navigation fluide, mise en avant
                    de vos prestations, respect des <strong>Core Web Vitals</strong>.
                  </p>
                </div>
              </div>

              {/* Service 5: Maintenance et support technique */}
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
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
                    <h3 className='text-2xl font-bold text-[#112D4E]'>
                      Maintenance et support technique
                    </h3>
                  </div>

                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Mises à jour, sécurité, hébergement optimisé, assistance locale et réactive.
                  </p>

                  <Link
                    href='/services/maintenance-support'
                    className='inline-flex items-center text-[#3F72AF] hover:text-[#112D4E] font-semibold transition-colors group'>
                    <span>En savoir plus sur la maintenance</span>
                    <svg
                      className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
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

                <div className='relative'>
                  <div className='relative z-10'>
                    <Image
                      src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                      alt='Maintenance et support technique Paris 16'
                      className='rounded-2xl shadow-xl'
                      width={600}
                      height={400}
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/10 to-transparent rounded-2xl'></div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Services Section */}
          <Section className='py-20 bg-gradient-to-b from-white to-[#F8F9FA]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-[#112D4E] mb-6'>
                  Nos Services de Création Web
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Notre expertise en <strong>développement web Paris</strong> nous permet de créer
                  des sites internet parfaitement adaptés aux besoins spécifiques des entreprises du
                  16ème arrondissement.
                </p>
              </div>

              {/* Service 1: Création Web */}
              <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
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
                    <h3 className='text-2xl font-bold text-[#112D4E]'>
                      Création Sites Web Sur-mesure
                    </h3>
                  </div>

                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Nous concevons chaque <strong>site web sur-mesure</strong> en intégrant les
                    dernières technologies et en respectant les standards de{' '}
                    <strong>design responsive</strong>.
                  </p>

                  <div className='bg-gradient-to-r from-[#F9F7FF] to-[#DBE2EF] rounded-xl p-6'>
                    <h4 className='font-semibold text-[#112D4E] mb-3'>
                      Technologies que nous maîtrisons :
                    </h4>
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-[#3F72AF] rounded-full'></div>
                        <span className='text-gray-700'>React & Next.js</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-[#3F72AF] rounded-full'></div>
                        <span className='text-gray-700'>WordPress</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-[#3F72AF] rounded-full'></div>
                        <span className='text-gray-700'>E-commerce</span>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <div className='w-2 h-2 bg-[#3F72AF] rounded-full'></div>
                        <span className='text-gray-700'>CMS sur-mesure</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href='/services/creation-sites-web'
                    className='inline-flex items-center text-[#3F72AF] hover:text-[#112D4E] font-semibold transition-colors group'>
                    <span>En savoir plus sur nos services de création web</span>
                    <svg
                      className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
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

                <div className='relative'>
                  <div className='relative z-10'>
                    <Image
                      src='https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                      alt='Équipe de développement web Paris 16 - Bureau moderne'
                      className='rounded-2xl shadow-xl'
                      width={600}
                      height={400}
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-[#112D4E]/10 to-transparent rounded-2xl'></div>
                  </div>

                  {/* Floating Badge */}
                  <div className='absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg z-20'>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-[#112D4E]'>7j</div>
                      <div className='text-xs text-gray-600'>Délai moyen</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2: SEO Local */}
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div className='order-2 lg:order-1 relative'>
                  <div className='relative z-10'>
                    <Image
                      src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                      alt='Optimisation SEO Paris 16 - Analytics et performance'
                      className='rounded-2xl shadow-xl'
                      width={600}
                      height={400}
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-[#3F72AF]/10 to-transparent rounded-2xl'></div>
                  </div>

                  {/* Floating SEO Stats */}
                  <div className='absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg z-20'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center'>
                        <svg
                          className='w-4 h-4 text-white'
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
                      <div>
                        <div className='font-bold text-green-600'>Position #1</div>
                        <div className='text-xs text-gray-600'>Recherches locales</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='order-1 lg:order-2 space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                      </svg>
                    </div>
                    <h3 className='text-2xl font-bold text-[#112D4E]'>
                      SEO Local Paris 16 Optimisé
                    </h3>
                  </div>

                  <p className='text-lg text-gray-700 leading-relaxed'>
                    La <strong>création site internet Paris 16</strong> ne se limite pas au design.
                    Notre expertise en
                    <strong>SEO local</strong> garantit que votre site sera visible sur Google
                    lorsque vos clients potentiels recherchent vos services dans le 16ème
                    arrondissement.
                  </p>

                  <div className='bg-gradient-to-r from-[#F9F7FF] to-[#DBE2EF] rounded-xl p-6'>
                    <h4 className='font-semibold text-[#112D4E] mb-3'>
                      Notre approche SEO local :
                    </h4>
                    <div className='space-y-3'>
                      <div className='flex items-start space-x-3'>
                        <div className='w-5 h-5 bg-[#3F72AF] rounded-full flex items-center justify-center mt-1'>
                          <span className='text-white text-xs font-bold'>1</span>
                        </div>
                        <div>
                          <span className='font-medium text-gray-800'>Audit SEO complet</span>
                          <p className='text-sm text-gray-600'>
                            Analyse de votre positionnement actuel
                          </p>
                        </div>
                      </div>
                      <div className='flex items-start space-x-3'>
                        <div className='w-5 h-5 bg-[#3F72AF] rounded-full flex items-center justify-center mt-1'>
                          <span className='text-white text-xs font-bold'>2</span>
                        </div>
                        <div>
                          <span className='font-medium text-gray-800'>Optimisation technique</span>
                          <p className='text-sm text-gray-600'>Structure, vitesse et indexation</p>
                        </div>
                      </div>
                      <div className='flex items-start space-x-3'>
                        <div className='w-5 h-5 bg-[#3F72AF] rounded-full flex items-center justify-center mt-1'>
                          <span className='text-white text-xs font-bold'>3</span>
                        </div>
                        <div>
                          <span className='font-medium text-gray-800'>Contenu géolocalisé</span>
                          <p className='text-sm text-gray-600'>Mots-clés Paris 16 ciblés</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href='/services/optimisation-seo'
                    className='inline-flex items-center text-[#3F72AF] hover:text-[#112D4E] font-semibold transition-colors group'>
                    <span>Découvrir nos services SEO</span>
                    <svg
                      className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
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

          {/* Process Section */}
          <Section id='process-paris-16' variant='default' padding='xl' contentWidth='wide'>
            <div className='container mx-auto px-4'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#112D4E] text-center mb-16'>
                Notre Processus de Création Site Internet Paris 16
              </h2>

              <div className='grid md:grid-cols-3 gap-8 mb-16'>
                <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-6'>
                    <span className='text-white font-bold text-xl'>1</span>
                  </div>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Analyse & Stratégie</h3>
                  <p className='text-gray-700'>
                    Nous analysons vos besoins, votre concurrence locale dans Paris 16 et
                    définissons une stratégie web personnalisée.
                  </p>
                </div>

                <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-6'>
                    <span className='text-white font-bold text-xl'>2</span>
                  </div>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>Design & Développement</h3>
                  <p className='text-gray-700'>
                    Création de votre site web sur-mesure avec un design responsive optimisé pour
                    votre clientèle parisienne.
                  </p>
                </div>

                <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center'>
                  <div className='w-16 h-16 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full flex items-center justify-center mx-auto mb-6'>
                    <span className='text-white font-bold text-xl'>3</span>
                  </div>
                  <h3 className='text-xl font-bold text-[#112D4E] mb-4'>
                    Optimisation & Lancement
                  </h3>
                  <p className='text-gray-700'>
                    Optimisation SEO local, tests de performance et mise en ligne de votre site
                    internet Paris 16.
                  </p>
                </div>
              </div>

              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg'>
                <h3 className='text-2xl font-bold text-[#112D4E] mb-6 text-center'>
                  Pourquoi Choisir Notre Agence pour Votre Création Site Internet Paris 16 ?
                </h3>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                      Spécialisés dans le <strong>développement web Paris</strong>, nous offrons une
                      approche locale unique qui comprend parfaitement les enjeux des entreprises du
                      16ème arrondissement. Notre proximité géographique nous permet de vous
                      rencontrer facilement et de maintenir une relation de confiance tout au long
                      de votre projet.
                    </p>
                    <p className='text-lg text-gray-700 leading-relaxed'>
                      Chaque <strong>site web sur-mesure</strong> que nous créons est optimisé pour
                      attirer votre clientèle locale tout en respectant les dernières exigences de
                      Google en matière de <strong>SEO local</strong>. Cette double expertise
                      technique et marketing garantit des résultats mesurables pour votre
                      entreprise.
                    </p>
                  </div>
                  <div>
                    <ul className='space-y-3'>
                      <li className='flex items-center'>
                        <span className='w-2 h-2 bg-[#3F72AF] rounded-full mr-3'></span>
                        <span className='text-gray-700'>Expert en design responsive et UX</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='w-2 h-2 bg-[#3F72AF] rounded-full mr-3'></span>
                        <span className='text-gray-700'>Spécialiste SEO local Paris 16</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='w-2 h-2 bg-[#3F72AF] rounded-full mr-3'></span>
                        <span className='text-gray-700'>Accompagnement personnalisé local</span>
                      </li>
                      <li className='flex items-center'>
                        <span className='w-2 h-2 bg-[#3F72AF] rounded-full mr-3'></span>
                        <span className='text-gray-700'>Support technique réactif</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* FAQ Section */}
          <Section id='faq-paris-16' variant='faq' padding='xl' contentWidth='wide'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold text-[#112D4E] mb-6'>
                  FAQ Création Site Internet Paris 16
                </h2>
                <div className='w-24 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] mx-auto mb-6'></div>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Réponses aux questions les plus posées par nos clients du 16ème arrondissement
                </p>
              </div>

              <div className='max-w-4xl mx-auto space-y-6'>
                {/* FAQ Item 1 */}
                <div className='bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
                  <div className='p-8'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center flex-shrink-0'>
                        <span className='text-white font-bold'>€</span>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-[#112D4E] mb-3'>
                          Combien coûte une création site internet Paris 16 ?
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                          Le prix d&apos;un <strong>site web sur-mesure</strong> varie selon vos
                          besoins spécifiques. Notre agence propose des solutions adaptées aux
                          budgets des entreprises du 16ème arrondissement, avec des tarifs
                          transparents incluant le <strong>design responsive</strong> et
                          l&apos;optimisation <strong>SEO local</strong>. Contactez-nous pour un
                          devis personnalisé gratuit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className='bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
                  <div className='p-8'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-white'
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
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-[#112D4E] mb-3'>
                          Combien de temps pour créer un site web à Paris 16 ?
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                          Un projet de <strong>création site internet Paris 16</strong> prend
                          généralement 4 à 8 semaines selon la complexité. Ce délai inclut la
                          conception, le <strong>développement web</strong>, l&apos;optimisation
                          <strong>référencement Google</strong> et les tests. Notre proximité dans
                          Paris 16 nous permet d&apos;accélérer les échanges et validations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className='bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
                  <div className='p-8'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-white'
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
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-[#112D4E] mb-3'>
                          Proposez-vous la maintenance après création ?
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                          Absolument ! Après la <strong>création site internet Paris 16</strong>,
                          nous proposons des contrats de maintenance pour assurer la sécurité, les
                          mises à jour et l&apos;évolution de votre{' '}
                          <strong>site web sur-mesure</strong>. Notre support local vous garantit
                          une réactivité optimale pour tous vos besoins techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className='bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
                  <div className='p-8'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                          />
                        </svg>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-[#112D4E] mb-3'>
                          Mon site sera-t-il visible sur Google ?
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                          Oui, chaque site que nous créons intègre une optimisation{' '}
                          <strong>SEO local</strong> avancée. Votre site sera structuré pour
                          apparaître dans les recherches locales &quot;Paris 16&quot; et bénéficiera
                          d&apos;un
                          <strong>référencement Google</strong> efficace dès sa mise en ligne,
                          attirant votre clientèle de proximité.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className='bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300'>
                  <div className='p-8'>
                    <div className='flex items-start space-x-4'>
                      <div className='w-10 h-10 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-lg flex items-center justify-center flex-shrink-0'>
                        <svg
                          className='w-5 h-5 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                          />
                        </svg>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-[#112D4E] mb-3'>
                          Puis-je modifier mon site moi-même après création ?
                        </h3>
                        <p className='text-gray-700 leading-relaxed'>
                          Oui, nous intégrons un système de gestion facile à utiliser avec votre{' '}
                          <strong>site web sur-mesure</strong>. Nous proposons également une
                          formation personnalisée dans nos locaux proches de Paris 16 pour vous
                          autonomiser dans la gestion quotidienne de votre contenu et
                          l&apos;optimisation <strong>SEO local</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* CTA Section */}
          <Section id='cta-paris-16' variant='default' padding='xl' contentWidth='wide'>
            <div className='container mx-auto px-4'>
              <div className='relative max-w-5xl mx-auto'>
                {/* Background Image */}
                <div className='absolute inset-0 rounded-3xl overflow-hidden'>
                  <Image
                    src='https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
                    alt='Bureau moderne Paris 16 - Consultation création site internet'
                    className='w-full h-full object-cover'
                    width={2069}
                    height={600}
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-[#112D4E]/95 via-[#112D4E]/90 to-[#3F72AF]/85'></div>
                </div>

                {/* Content */}
                <div className='relative text-center text-white p-12 lg:p-16'>
                  <div className='max-w-3xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                      Votre Projet de Création Site Internet Paris 16 Commence Ici
                    </h2>
                    <p className='text-xl lg:text-2xl leading-relaxed mb-8 text-white/90'>
                      Forte de notre expertise locale dans le{' '}
                      <strong>développement web Paris</strong> et notre maîtrise du
                      <strong>SEO local</strong>, notre agence vous accompagne pour créer un{' '}
                      <strong>site web sur-mesure</strong>
                      qui génère de nouveaux clients dans le 16ème arrondissement.
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                      <CTAButton
                        href='/contact'
                        variant='secondary'
                        size='lg'
                        className='group bg-white text-[#112D4E] hover:bg-gray-100 font-semibold'>
                        <svg
                          className='w-5 h-5 mr-2 group-hover:scale-110 transition-transform'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                          />
                        </svg>
                        Contactez-nous
                      </CTAButton>
                      <CTAButton
                        href='/tarifs'
                        variant='outline'
                        size='lg'
                        className='group border-white text-white hover:bg-white hover:text-[#112D4E] font-semibold'>
                        <svg
                          className='w-5 h-5 mr-2 group-hover:scale-110 transition-transform'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                          />
                        </svg>
                        Voir Nos Tarifs
                      </CTAButton>
                    </div>

                    {/* Trust Indicators */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20'>
                      <div className='text-center'>
                        <div className='text-2xl font-bold mb-1'>48h</div>
                        <div className='text-sm text-white/80'>Réponse garantie</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold mb-1'>+50</div>
                        <div className='text-sm text-white/80'>Sites créés</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold mb-1'>98%</div>
                        <div className='text-sm text-white/80'>Clients satisfaits</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold mb-1'>5★</div>
                        <div className='text-sm text-white/80'>Note moyenne</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </>
    )
  }

  // English content
  if (locale === 'en') {
    return (
      <>
        <SEOLinks locale={locale} />
        <div className='min-h-screen bg-gradient-to-br from-[#F9F7FF] via-[#F9F7FF] to-[#DBE2EF]'>
          <Section id='hero-paris-16-en' variant='hero' padding='xl' contentWidth='wide'>
            <div className='container mx-auto px-4 pt-32 pb-16'>
              <div className='max-w-4xl mx-auto text-center'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] mb-6 leading-tight'>
                  Website Creation Paris 16 - Local Expert
                </h1>
                <div className='w-24 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] mx-auto mb-8'></div>

                <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg'>
                  <p className='text-lg text-[#112D4E] leading-relaxed'>
                    Are you a business or professional in the 16th arrondissement of Paris looking
                    for a<strong> professional website</strong>? Do you find that your online
                    presence doesn&apos;t generate enough local clients, that your current site is
                    outdated or not visible on Google? Our agency specialized in{' '}
                    <strong>website creation Paris 16</strong> supports you to develop a custom web
                    solution that converts your visitors into clients and improves your local
                    visibility.
                  </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <CTAButton href='/contact' variant='primary' size='lg'>
                    Free Quote Paris 16
                  </CTAButton>
                  <CTAButton href='/projects' variant='outline' size='lg'>
                    View Our Work
                  </CTAButton>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </>
    )
  }

  // Russian content
  return (
    <>
      <SEOLinks locale={locale} />
      <div className='min-h-screen bg-gradient-to-br from-[#F9F7FF] via-[#F9F7FF] to-[#DBE2EF]'>
        <Section id='hero-paris-16-ru' variant='hero' padding='xl' contentWidth='wide'>
          <div className='container mx-auto px-4 pt-32 pb-16'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#112D4E] mb-6 leading-tight'>
                Создание Сайтов Париж 16 - Местный Эксперт
              </h1>
              <div className='w-24 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] mx-auto mb-8'></div>

              <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg'>
                <p className='text-lg text-[#112D4E] leading-relaxed'>
                  Вы бизнес или профессионал в 16-м округе Парижа, ищущий
                  <strong> профессиональный сайт</strong>? Вы обнаруживаете, что ваше
                  онлайн-присутствие не привлекает достаточно местных клиентов, что ваш текущий сайт
                  устарел или не виден в Google? Наше агентство, специализирующееся на{' '}
                  <strong>создании сайтов Париж 16</strong>, поможет вам разработать индивидуальное
                  веб-решение, которое превращает посетителей в клиентов.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <CTAButton href='/contact' variant='primary' size='lg'>
                  Бесплатная Консультация
                </CTAButton>
                <CTAButton href='/projects' variant='outline' size='lg'>
                  Наши Работы
                </CTAButton>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
