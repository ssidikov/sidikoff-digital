'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { type Dictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'
import { cardStyles } from '@/utils/styles'

interface ServicesProps {
  dictionary: Dictionary['services']
  locale: Locale
  className?: string
}

// Animation configurations
const CARD_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: (index: number) => ({ duration: 0.6, delay: index * 0.1 }),
} as const

const BADGE_ANIMATION = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: (index: number) => ({ duration: 0.3, delay: 0.1 + index * 0.1 }),
} as const

const CTA_BANNER_ANIMATIONS = {
  title: { duration: 0.6, delay: 0.2 },
  description: { duration: 0.6, delay: 0.4 },
  button: { duration: 0.6, delay: 0.6 },
} as const

/**
 * Generate contact URL based on locale
 */
const getContactUrl = (locale: Locale): string => {
  return locale === 'fr' ? '/contact' : `/${locale}/contact`
}

/**
 * Generate service landing page URL based on locale and service type
 */
const getServiceUrl = (locale: Locale, service: string): string => {
  return locale === 'fr' ? `/services/${service}` : `/${locale}/services/${service}`
}

/**
 * Scroll to pricing section smoothly
 */
const scrollToPricing = (): void => {
  const element = document.getElementById('pricing')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Services section component with service cards and CTA banner
 * Features responsive design, animations, and accessibility
 */
export function Services({ dictionary: dict, locale, className }: ServicesProps) {
  const services = [
    {
      title: dict.web_creation.title,
      subtitle: dict.web_creation.subtitle,
      description: dict.web_creation.description,
      image: '/images/services/web-development.webp',
      alt: dict.web_creation.title,
      badges: dict.web_creation.features,
      isWebCreation: true, // Add flag to identify web creation service
      isWebRedesign: false,
      isSeoOptimization: false,
      isMaintenance: false,
      isRestaurant: false,
    },
    {
      title: dict.web_redesign.title,
      description: dict.web_redesign.description,
      image: '/images/services/website-redesign.webp',
      alt: dict.web_redesign.title,
      badges: dict.web_redesign.features,
      isWebCreation: false,
      isWebRedesign: true, // Add flag to identify web redesign service
      isSeoOptimization: false,
      isMaintenance: false,
      isRestaurant: false,
    },
    {
      title: dict.seo_optimization.title,
      description: dict.seo_optimization.description,
      image: '/images/services/seo.webp',
      alt: dict.seo_optimization.title,
      badges: dict.seo_optimization.features,
      isWebCreation: false,
      isWebRedesign: false,
      isSeoOptimization: true, // Add flag to identify SEO service
      isMaintenance: false,
      isRestaurant: false,
    },
    {
      title: dict.restaurant.title,
      description: dict.restaurant.description,
      image: '/images/services/resto.webp',
      alt: dict.restaurant.title,
      badges: dict.restaurant.features,
      isWebCreation: false,
      isWebRedesign: false,
      isSeoOptimization: false,
      isMaintenance: false,
      isRestaurant: true, // Add flag to identify restaurant service
    },
    {
      title: dict.maintenance.title,
      description: dict.maintenance.description,
      image: '/images/services/maintenance-support.webp',
      alt: dict.maintenance.title,
      badges: dict.maintenance.features,
      isWebCreation: false,
      isWebRedesign: false,
      isSeoOptimization: false,
      isMaintenance: true, // Add flag to identify maintenance service
      isRestaurant: false,
    },
  ] as const

  const contactUrl = getContactUrl(locale)
  const webCreationUrl = getServiceUrl(locale, 'creation-sites-web')
  const webRedesignUrl = getServiceUrl(locale, 'refonte-sites-web')
  const seoOptimizationUrl = getServiceUrl(locale, 'optimisation-seo')
  const restaurantUrl = getServiceUrl(locale, 'restaurant-websites')
  const maintenanceUrl = getServiceUrl(locale, 'maintenance-support')

  return (
    <Section
      id='services'
      variant='services'
      background='transparent'
      padding='lg'
      contentWidth='wide'
      {...(className && { className })}>
      <div className='relative z-10'>
        <SectionHeader
          title={dict.title}
          subtitle={dict.subtitle}
          titleId='services-title'
          className='mb-16 text-left'
        />

        {/* Services Cards */}
        <div className='space-y-16'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={CARD_ANIMATION.initial}
              whileInView={CARD_ANIMATION.animate}
              transition={CARD_ANIMATION.transition(index)}
              viewport={{ once: true }}
              className={`min-h-[600px] gap-2 px-5 py-7 p-8 lg:min-h-[500px] lg:p-10 xl:gap-16 3xl:gap-20 3xl:p-12 ${cardStyles.card}`}>
              <div className='grid h-full gap-8 lg:grid-cols-2 items-center'>
                {/* Image - First on mobile, second on desktop */}
                <div className='relative order-1 flex h-full items-center lg:order-2'>
                  <div className='relative aspect-[4/3] w-full max-h-48 overflow-hidden rounded-2xl md:max-h-fit lg:h-full lg:min-h-[300px]'>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={900}
                      height={600}
                      quality={95}
                      className='h-full w-full object-cover'
                      loading='lazy'
                    />
                  </div>
                </div>

                {/* Content - Second on mobile, first on desktop */}
                <div className='order-2 flex h-full flex-col justify-between space-y-6 lg:order-1 xl:h-full'>
                  <div>
                    <h3 className='mb-4 text-2xl font-bold text-gray-900 md:mb-8 xl:text-4xl'>
                      {service.title}
                    </h3>

                    {/* Feature Badges */}
                    <div className='grid grid-cols-2 gap-2 md:flex md:flex-wrap'>
                      {service.badges.map((badge, badgeIndex) => (
                        <motion.span
                          key={badge}
                          initial={BADGE_ANIMATION.initial}
                          whileInView={BADGE_ANIMATION.animate}
                          transition={BADGE_ANIMATION.transition(badgeIndex)}
                          viewport={{ once: true }}
                          className='inline-flex cursor-default items-center justify-center rounded-full border border-gray-400/50 px-5 py-3 text-sm font-medium xl:px-8 xl:text-xl'>
                          <span className='text-center'>{badge}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <p className='text-sm leading-relaxed text-gray-600 xl:text-base'>
                    {service.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className='flex flex-col gap-4 sm:flex-row'>
                    <CTAButton
                      variant='primary'
                      size='md'
                      href={contactUrl}
                      className='w-full flex-1 shadow-lg transition-all duration-300 hover:shadow-xl sm:w-auto'
                      trackingAction='request_quote'
                      trackingCategory='services'
                      ariaLabel={dict.buttons.request_quote}>
                      {dict.buttons.request_quote}
                    </CTAButton>

                    {service.isWebCreation ? (
                      <CTAButton
                        variant='secondary'
                        size='md'
                        href={webCreationUrl}
                        className='w-full flex-1 sm:w-auto'
                        trackingAction='learn_more'
                        trackingCategory='services'
                        ariaLabel={dict.buttons.learn_more}>
                        {dict.buttons.learn_more}
                      </CTAButton>
                    ) : service.isWebRedesign ? (
                      <CTAButton
                        variant='secondary'
                        size='md'
                        href={webRedesignUrl}
                        className='w-full flex-1 sm:w-auto'
                        trackingAction='learn_more'
                        trackingCategory='services'
                        ariaLabel={dict.buttons.learn_more}>
                        {dict.buttons.learn_more}
                      </CTAButton>
                    ) : service.isSeoOptimization ? (
                      <CTAButton
                        variant='secondary'
                        size='md'
                        href={seoOptimizationUrl}
                        className='w-full flex-1 sm:w-auto'
                        trackingAction='learn_more'
                        trackingCategory='services'
                        ariaLabel={dict.buttons.learn_more}>
                        {dict.buttons.learn_more}
                      </CTAButton>
                    ) : service.isRestaurant ? (
                      <CTAButton
                        variant='secondary'
                        size='md'
                        href={restaurantUrl}
                        className='w-full flex-1 sm:w-auto'
                        trackingAction='learn_more'
                        trackingCategory='services'
                        ariaLabel={dict.buttons.learn_more}>
                        {dict.buttons.learn_more}
                      </CTAButton>
                    ) : service.isMaintenance ? (
                      <CTAButton
                        variant='secondary'
                        size='md'
                        href={maintenanceUrl}
                        className='w-full flex-1 sm:w-auto'
                        trackingAction='learn_more'
                        trackingCategory='services'
                        ariaLabel={dict.buttons.learn_more}>
                        {dict.buttons.learn_more}
                      </CTAButton>
                    ) : (
                      <CTAButton
                        variant='secondary'
                        size='md'
                        className='w-full flex-1 sm:w-auto'
                        onClick={scrollToPricing}
                        trackingAction='view_pricing'
                        trackingCategory='services'
                        ariaLabel={dict.buttons.view_pricing}>
                        {dict.buttons.view_pricing}
                      </CTAButton>
                    )}
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
          <div className='relative flex w-full items-center justify-center overflow-hidden rounded-md bg-accent py-8 md:h-screen'>
            <div className='mx-auto max-w-4xl px-6 text-center lg:px-8'>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={CTA_BANNER_ANIMATIONS.title}
                viewport={{ once: true }}
                className='mb-6 text-2xl font-bold leading-tight text-white md:text-5xl lg:mb-8 lg:text-6xl xl:text-7xl'>
                {dict.cta_banner.background}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={CTA_BANNER_ANIMATIONS.description}
                viewport={{ once: true }}
                className='mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/90 lg:mb-16 lg:text-2xl'>
                {dict.cta_banner.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={CTA_BANNER_ANIMATIONS.button}
                viewport={{ once: true }}
                className='flex justify-center'>
                <CTAButton
                  variant='outline'
                  size='lg'
                  href={contactUrl}
                  className='banner-button-white group transform hover:text-[#3377FF]!'
                  trackingAction='cta_banner_click'
                  trackingCategory='services'
                  ariaLabel={dict.cta_banner.cta}>
                  <span className='flex items-center gap-3'>
                    <span>{dict.cta_banner.cta}</span>
                    <svg
                      className='h-6 w-6 transition-transform duration-300 group-hover:translate-x-1'
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
