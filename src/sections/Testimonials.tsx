'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'

import common from '@/locales/fr/common.json'
import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'
import StarRating from '@/components/ui/StarRating'
import { TESTIMONIALS_DATA } from '@/data/testimonials'
import { cardStyles } from '@/utils/styles'
import { generateReviewStructuredData } from '@/lib/seo-utils'

interface TestimonialsProps {
  className?: string
}

// Animation configurations
const CARD_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: (index: number) => ({ duration: 0.6, delay: index * 0.1 }),
} as const

const CTA_BANNER_ANIMATIONS = {
  title: { duration: 0.6, delay: 0.2 },
  description: { duration: 0.6, delay: 0.4 },
  button: { duration: 0.6, delay: 0.6 },
} as const

/**
 * Testimonials section component with client testimonials and CTA banner
 * Features responsive design, animations, and accessibility
 */
export function Testimonials({ className }: TestimonialsProps) {
  const dict = common.testimonials
  const contactUrl = '/contact'

  // Generate structured data for reviews
  const reviewsData = TESTIMONIALS_DATA.map((testimonial) => ({
    author: testimonial.author,
    reviewBody: testimonial.text,
    rating: testimonial.rating,
    projectName: testimonial.project,
    datePublished: testimonial.date,
  }))

  const reviewStructuredData = generateReviewStructuredData(reviewsData)

  return (
    <>
      {/* Structured Data for Reviews */}
      <Script
        id='testimonials-structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewStructuredData, null, 0),
        }}
      />

      <Section
        id='testimonials'
        variant='services'
        background='transparent'
        padding='lg'
        contentWidth='wide'
        {...(className && { className })}>
        <div className='relative z-10'>
          <SectionHeader
            title={dict.title}
            subtitle={dict.subtitle}
            titleId='testimonials-title'
            className='mb-16 text-left'
          />

          {/* Testimonials Cards */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={CARD_ANIMATION.initial}
                whileInView={CARD_ANIMATION.animate}
                transition={CARD_ANIMATION.transition(index)}
                viewport={{ once: true }}
                className={`min-h-[300px] gap-2 px-5 py-7 p-8 lg:p-10 xl:gap-16 3xl:gap-20 3xl:p-12 ${cardStyles.card}`}>
                <div className='space-y-6'>
                  {/* Quote Icon */}
                  <div className='flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full'>
                    <svg
                      className='w-6 h-6 text-accent'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z' />
                    </svg>
                  </div>

                  {/* Star Rating */}
                  <StarRating
                    rating={testimonial.rating}
                    size='md'
                    animated={true}
                    className='justify-start'
                  />

                  {/* Testimonial Text */}
                  <blockquote className='text-lg leading-relaxed text-gray-700 xl:text-xl xl:min-h-[195px]'>
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Author Information */}
                  <div className='space-y-2'>
                    <div className='font-semibold text-gray-900'>{testimonial.author}</div>
                    <div className='text-sm text-gray-600'>{testimonial.project}</div>
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
                  {dict.cta.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={CTA_BANNER_ANIMATIONS.description}
                  viewport={{ once: true }}
                  className='mx-auto mb-12 max-w-3xl text-base leading-relaxed text-white/90 lg:mb-16 lg:text-2xl'>
                  {dict.cta.description}
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
                    trackingAction='testimonials_cta_click'
                    trackingCategory='testimonials'
                    ariaLabel={dict.cta.button}>
                    <span className='flex items-center gap-3'>
                      <span>{dict.cta.button}</span>
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
    </>
  )
}

export default Testimonials
