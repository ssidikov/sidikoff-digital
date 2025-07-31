'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Dictionary } from '@/lib/dictionaries'
import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'

interface ServicesProps {
  dictionary: Dictionary['services']
  locale: string
}

export function Services({ dictionary: dict, locale }: ServicesProps) {
  const services = [
    {
      title: dict.web_creation.title,
      subtitle: dict.web_creation.subtitle,
      description: dict.web_creation.description,
      image: '/images/services/web-development-5.jpg',
      alt: dict.web_creation.title,
      badges: dict.web_creation.features,
    },
    {
      title: dict.web_redesign.title,
      description: dict.web_redesign.description,
      image: '/images/services/website-redesign-1.jpg',
      alt: dict.web_redesign.title,
      badges: dict.web_redesign.features,
    },
    {
      title: dict.seo_optimization.title,
      description: dict.seo_optimization.description,
      image: '/images/services/seo-8.jpg',
      alt: dict.seo_optimization.title,
      badges: dict.seo_optimization.features,
    },
    {
      title: dict.maintenance.title,
      description: dict.maintenance.description,
      image: '/images/services/maintenance-support-4.jpg',
      alt: dict.maintenance.title,
      badges: dict.maintenance.features,
    },
  ]

  return (
    <Section
      id="services"
      background="pattern"
      padding="lg"
      contentWidth="wide"
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#f1f5f9',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat-y'
      }}
    >
      <SectionHeader
        title={dict.title}
        subtitle={dict.subtitle}
        titleId="services-title"
        className="text-left mb-16 mt-6"
      />

      {/* Services Cards */}
      <div className='space-y-16'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='gap-30px sm:gap-10 xl:gap-16 3xl:gap-20 rounded-2xl lg:rounded-22px 3xl:rounded-30px px-5 py-7 sm:p-30px lg:p-10 3xl:p-12 min-h-[600px] lg:min-h-[500px] backdrop-blur-xl bg-white/60 border-2 border-white/50 shadow-xl '>
            <div className='grid lg:grid-cols-2 gap-8 items-center h-full'>
              {/* Right Image - First on mobile */}
              <div className='relative order-1 lg:order-2 h-full flex items-center'>
                <div className='aspect-[4/3] relative overflow-hidden rounded-2xl max-h-48 md:max-h-fit w-full lg:h-full lg:min-h-[300px]'>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={900}
                    height={600}
                    className='object-cover w-full h-full'
                    priority={index < 2}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
                </div>
              </div>

              {/* Left Content - Second on mobile */}
              <div className='space-y-6 xl:h-full flex flex-col justify-between order-2 lg:order-1 h-full'>
                <div>
                  <h3 className='text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8'>
                    {service.title}
                  </h3>

                  {/* Feature Badges */}
                  <div className='grid grid-cols-2 gap-2 md:flex md:flex-wrap'>
                    {service.badges.map((badge, badgeIndex) => (
                      <motion.span
                        key={badgeIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + badgeIndex * 0.1 }}
                        viewport={{ once: true }}
                        className='inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-6 rounded-full text-sm md:text-xl font-medium border border-gray-400/50 cursor-default'>
                        <span className='text-center'>{badge}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                <p className='text-gray-600 text-lg leading-relaxed'>{service.description}</p>

                {/* Enhanced CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <CTAButton
                    variant='primary'
                    size='lg'
                    className='3xl:w-1/2'
                    onClick={() => {
                      const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact`
                      window.location.href = contactUrl
                    }}>
                    {dict.buttons.request_quote}
                  </CTAButton>

                  <CTAButton
                    variant='secondary'
                    size='lg'
                    className='3xl:w-1/2'
                    onClick={() => {
                      const element = document.getElementById('pricing')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}>
                    {dict.buttons.view_pricing}
                  </CTAButton>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='mt-20'>
        {/* Mobile Card Version */}
        <div className='lg:hidden'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-md'>
            {/* Image at top */}
            <div className='relative h-48 w-full'>
              <Image
                src='/images/services/cta-background-21.jpg'
                alt='CTA Background'
                fill
                className='object-cover'
                priority={false}
                onError={(e) => {
                  if (process.env.NODE_ENV === 'development') {
                    // CTA background image failed to load
                  }
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>

            {/* Content at bottom */}
            <div className='p-6'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight text-[32px] sm:text-[40px] lg:lg:text-6xl 3xl:text-[80px]'>
                {dict.cta_banner.background}
              </h3>

              <p className='text-gray-600 text-base leading-relaxed mb-6'>
                {dict.cta_banner.description}
              </p>

              <CTAButton
                variant='primary'
                size='lg'
                className='w-full mt-5 sm:mt-10'
                onClick={() => {
                  const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact`
                  window.location.href = contactUrl
                }}>
                <span className='flex items-center justify-center gap-3'>
                  <span>{dict.cta_banner.cta}</span>
                  <svg
                    className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </span>
              </CTAButton>
            </div>
          </motion.div>
        </div>

        {/* Desktop Version */}
        <div className='hidden lg:block'>
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-700 min-h-[400px] flex items-center'>
            {/* Background Image */}
            <div className='absolute inset-0'>
              <Image
                src='/images/services/cta-background-21.jpg'
                alt='CTA Background'
                fill
                className='object-cover'
                priority={false}
              />
            </div>

            {/* Pattern Overlay */}
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent' />
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]' />
            </div>

            {/* Content Grid */}
            <div className='relative z-10 w-full px-8 py-12'>
              <div className='flex justify-center lg:justify-end items-center max-w-7xl mx-auto'>
                {/* CTA Card - Right on desktop */}
                <div className='w-full max-w-2xl lg:max-w-3xl'>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='bg-white rounded-2xl p-8 lg:p-12 shadow-2xl'
                    style={{
                      background: 'rgba(249, 247, 247, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight'>
                      {dict.cta_banner.background}
                    </h3>

                    <p className='text-gray-600 text-lg lg:text-xl leading-relaxed mb-8'>
                      {dict.cta_banner.description}
                    </p>

                    <CTAButton
                      variant='primary'
                      size='lg'
                      className='w-full mt-5 sm:mt-10'
                      onClick={() => {
                        const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact`
                        window.location.href = contactUrl
                      }}>
                      <span className='flex items-center justify-center gap-3'>
                        <span className='text-xl'>{dict.cta_banner.cta}</span>
                      </span>
                    </CTAButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
