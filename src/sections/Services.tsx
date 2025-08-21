'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Dictionary } from '@/lib/dictionaries'
import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'
import { cardStyles } from '@/utils/styles'

interface ServicesProps {
  dictionary: Dictionary['services']
  locale: string
  className?: string
}

export function Services({ dictionary: dict, locale, className }: ServicesProps) {
  const services = [
    {
      title: dict.web_creation.title,
      subtitle: dict.web_creation.subtitle,
      description: dict.web_creation.description,
      image: '/images/services/web-development.webp',
      alt: dict.web_creation.title,
      badges: dict.web_creation.features,
    },
    {
      title: dict.web_redesign.title,
      description: dict.web_redesign.description,
      image: '/images/services/website-redesign.webp',
      alt: dict.web_redesign.title,
      badges: dict.web_redesign.features,
    },
    {
      title: dict.seo_optimization.title,
      description: dict.seo_optimization.description,
      image: '/images/services/seo.webp',
      alt: dict.seo_optimization.title,
      badges: dict.seo_optimization.features,
    },
    {
      title: dict.maintenance.title,
      description: dict.maintenance.description,
      image: '/images/services/maintenance-support.webp',
      alt: dict.maintenance.title,
      badges: dict.maintenance.features,
    },
  ]

  return (
    <Section
      id='services'
      variant='services'
      background='transparent'
      padding='lg'
      contentWidth='wide'
      className={className || ''}>
      <div className='relative z-10'>
        <SectionHeader
          title={dict.title}
          subtitle={dict.subtitle}
          titleId='services-title'
          className='text-left mb-16'
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
              className={`gap-2 xl:gap-16 3xl:gap-20 px-5 py-7 p-8 lg:p-10 3xl:p-12 min-h-[600px] lg:min-h-[500px] ${cardStyles.card}`}>
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
                      priority={false}
                      loading='lazy'
                    />
                  </div>
                </div>

                {/* Left Content - Second on mobile */}
                <div className='space-y-6 xl:h-full flex flex-col justify-between order-2 lg:order-1 h-full'>
                  <div>
                    <h3 className='text-2xl xl:text-4xl font-bold text-gray-900 mb-4 md:mb-8'>
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
                          className='inline-flex items-center justify-center px-5 py-3 xl:px-8 rounded-full text-sm xl:text-xl font-medium border border-gray-400/50 cursor-default'>
                          <span className='text-center'>{badge}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <p className='text-gray-600 text-sm xl:text-base leading-relaxed'>
                    {service.description}
                  </p>

                  {/* Enhanced CTA Buttons */}
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <CTAButton
                      variant='primary'
                      size='md'
                      className='w-full sm:w-auto flex-1 shadow-lg hover:shadow-xl transition-all duration-300'
                      onClick={() => {
                        const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact`
                        window.location.href = contactUrl
                      }}>
                      {dict.buttons.request_quote}
                    </CTAButton>

                    <CTAButton
                      variant='secondary'
                      size='md'
                      className='w-full sm:w-auto flex-1'
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

        {/* CTA Banner - Full Screen Redesign */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-20'>
          {/* Full Screen Banner */}
          <div className='relative w-full py-8 md:h-screen bg-[#3377FF] flex items-center justify-center overflow-hidden rounded-md'>
            {/* Centered Content */}
            <div className='text-center max-w-4xl mx-auto px-6 lg:px-8'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight'>
                {dict.cta_banner.background}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='text-base lg:text-2xl text-white/90 leading-relaxed mb-12 lg:mb-16 max-w-3xl mx-auto'>
                {dict.cta_banner.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className='flex justify-center'>
                <CTAButton
                  variant='outline'
                  size='lg'
                  className='bg-white text-[#3377FF] hover:bg-white hover:text-[#3377FF]! hover:shadow-xl border-white hover:border-gray-100 transform'
                  onClick={() => {
                    const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact`
                    window.location.href = contactUrl
                  }}>
                  <span className='flex items-center gap-3'>
                    <span>{dict.cta_banner.cta}</span>
                    <svg
                      className='w-6 h-6 transition-transform duration-300 group-hover:translate-x-1'
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
