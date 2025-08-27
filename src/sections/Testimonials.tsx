'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'

import { type Dictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'
import StarRating from '@/components/ui/StarRating'
import { cardStyles } from '@/utils/styles'
import { generateReviewStructuredData } from '@/lib/seo-utils'

interface TestimonialsProps {
  dictionary: Dictionary['testimonials']
  locale: Locale
  className?: string
}

interface Testimonial {
  id: string
  text: {
    ru: string
    en: string
    fr: string
  }
  author: {
    ru: string
    en: string
    fr: string
  }
  project: {
    ru: string
    en: string
    fr: string
  }
  rating: number
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
 * Generate contact URL based on locale
 */
const getContactUrl = (locale: Locale): string => {
  return locale === 'fr' ? '/contact' : `/${locale}/contact`
}

// Testimonials data
const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    text: {
      ru: 'Sardor помог нам исправить ошибки на нашем e-commerce сайте, из-за которых он неправильно работал на мобильных устройствах. Всё было сделано быстро и качественно, теперь сайт работает без проблем.',
      en: 'Sardor helped us fix several issues on our e-commerce website that were causing problems on mobile devices. Everything was done quickly and professionally, and the site now runs smoothly.',
      fr: 'Sardor nous a aidés à corriger des erreurs sur notre site e-commerce qui causaient des problèmes sur la version mobile. Tout a été fait rapidement et avec professionnalisme, et le site fonctionne parfaitement maintenant.',
    },
    author: {
      ru: 'Данияр Рахметов',
      en: 'Daniyar Rakhmetov',
      fr: 'Daniyar Rakhmetov',
    },
    project: {
      ru: 'E-commerce сайт',
      en: 'E-commerce website',
      fr: 'Site e-commerce',
    },
    rating: 5,
  },
  {
    id: '2',
    text: {
      ru: 'Sardor профессионально разработал сайт для нашего ресторана китайской кухни Chez Liqi. Он сделал современный дизайн, удобную навигацию и продумал все детали, чтобы сайт передавал атмосферу нашего заведения. Мы очень довольны результатом.',
      en: "Sardor professionally built the website for our Chinese restaurant Chez Liqi. He created a modern design, user-friendly navigation, and carefully worked on every detail to capture the restaurant's atmosphere. We are very satisfied with the result.",
      fr: "Sardor a réalisé le site de notre restaurant chinois Chez Liqi de manière professionnelle. Il a conçu un design moderne, une navigation intuitive et a soigné chaque détail pour refléter l'atmosphère de notre établissement. Nous sommes très satisfaits du résultat.",
    },
    author: {
      ru: 'Команда ресторана Chez Liqi',
      en: 'Chez Liqi Team',
      fr: 'Équipe du restaurant Chez Liqi',
    },
    project: {
      ru: 'Ресторан Chez Liqi',
      en: 'Chez Liqi Restaurant',
      fr: 'Restaurant Chez Liqi',
    },
    rating: 5,
  },
]

/**
 * Testimonials section component with client testimonials and CTA banner
 * Features responsive design, animations, and accessibility
 */
export function Testimonials({ dictionary: dict, locale, className }: TestimonialsProps) {
  const contactUrl = getContactUrl(locale)

  // Generate structured data for reviews
  const reviewsData = TESTIMONIALS_DATA.map((testimonial) => ({
    author: testimonial.author[locale],
    reviewBody: testimonial.text[locale],
    rating: testimonial.rating,
    projectName: testimonial.project[locale],
    datePublished: '2024-12-01', // You can make this dynamic if needed
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
                    &ldquo;{testimonial.text[locale]}&rdquo;
                  </blockquote>

                  {/* Author Information */}
                  <div className='space-y-2'>
                    <div className='font-semibold text-gray-900'>{testimonial.author[locale]}</div>
                    <div className='text-sm text-gray-600'>{testimonial.project[locale]}</div>
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
