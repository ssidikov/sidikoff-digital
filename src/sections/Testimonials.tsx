'use client'

import { motion } from 'framer-motion'

import common from '@/locales/fr/common.json'
import CTAButton from '@/components/ui/CTAButton'
import Section from '@/components/ui/Section'
import StarRating from '@/components/ui/StarRating'
import { TESTIMONIALS_DATA } from '@/data/testimonials'
import { grotesk } from '@/lib/fonts'

interface TestimonialsProps {
  className?: string
}

// Animation configurations
const CARD_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: (index: number) => ({ duration: 0.5, delay: index * 0.1 }),
} as const

const DATE_FORMATTER = new Intl.DateTimeFormat('fr-FR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

function formatReviewDate(rawDate: string): string {
  const parsedDate = new Date(rawDate)

  if (Number.isNaN(parsedDate.getTime())) {
    return rawDate
  }

  return DATE_FORMATTER.format(parsedDate)
}

/**
 * Testimonials section component with client testimonials
 * Features responsive design, animations, and accessibility
 */
export function Testimonials({ className }: TestimonialsProps) {
  const dict = common.testimonials
  const googleReviewsUrl = 'https://maps.app.goo.gl/1aArF53esMA5vco28'

  const totalReviews = TESTIMONIALS_DATA.length
  const averageRating =
    totalReviews > 0
      ? (
          TESTIMONIALS_DATA.reduce((sum, testimonial) => sum + testimonial.rating, 0) / totalReviews
        ).toFixed(1)
      : '5.0'

  const averageRatingMetric = { label: 'Note moyenne', value: `${averageRating}/5` }

  return (
    <>
      <Section
        id='testimonials'
        variant='services'
        background='transparent'
        padding='lg'
        contentWidth='wide'
        aria-labelledby='testimonials-title'
        {...(className && { className })}>
        <div className='relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='relative overflow-hidden rounded-3xl border border-[#cedcf5] bg-[linear-gradient(145deg,#fbfdff_12%,#eef4ff_44%,#fdf8e9_100%)] p-6 sm:p-8 lg:p-10'>
            <div className='pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#3377FF]/20 blur-3xl' />
            <div className='pointer-events-none absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-[#f7c95f]/20 blur-3xl' />

            <div className='relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end'>
              <div>
                <span className='inline-flex rounded-full border border-[#112D4E]/20 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#112D4E]/70'>
                  Avis clients
                </span>
                <h2
                  id='testimonials-title'
                  className={`${grotesk.className} mt-4 text-balance text-3xl font-semibold leading-tight text-[#112D4E] sm:text-4xl lg:text-5xl`}>
                  {dict.title}
                </h2>
                <p className='mt-4 max-w-2xl text-base leading-relaxed text-[#1F3A66]/85 sm:text-lg'>
                  {dict.subtitle}. Chaque retour est vérifié et alimente une méthode axée sur des
                  résultats concrets.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className='w-full sm:w-auto'>
                <div className='rounded-2xl border border-[#112D4E]/20 bg-transparent px-4 py-3'>
                  <p className='text-xs font-medium uppercase tracking-[0.12em] text-[#112D4E]/70'>
                    {averageRatingMetric.label}
                  </p>
                  <p
                    className={`${grotesk.className} mt-1 text-lg font-semibold leading-none text-[#112D4E] sm:text-2xl`}>
                    {averageRatingMetric.value}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative z-10 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-center gap-3'>
                <StarRating rating={5} size='md' animated={true} className='justify-start' />
                <span className='text-sm font-medium text-[#112D4E]/75'>
                  Consultez nos avis publics sur Google
                </span>
              </div>
              <CTAButton
                variant='outline'
                size='lg'
                href={googleReviewsUrl}
                className='group'
                trackingAction='google_reviews_click'
                trackingCategory='testimonials'
                ariaLabel='Lire les avis sur Google'>
                <span className='flex items-center gap-3'>
                  <span>Lire les avis sur Google</span>
                  <svg
                    className='h-6 w-6 transition-transform duration-300 group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13.5 3H21m0 0v7.5M21 3l-9 9'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10.5 6H8.25A2.25 2.25 0 006 8.25v7.5A2.25 2.25 0 008.25 18h7.5A2.25 2.25 0 0018 15.75V13.5'
                    />
                  </svg>
                </span>
              </CTAButton>
            </motion.div>
          </motion.div>

          <div className='mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8'>
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={CARD_ANIMATION.initial}
                whileInView={CARD_ANIMATION.animate}
                transition={CARD_ANIMATION.transition(index)}
                viewport={{ once: true }}
                className='group relative overflow-hidden rounded-2xl border border-[#112D4E]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#3377FF]/30 sm:p-8'>
                <span className='pointer-events-none absolute -right-2 top-0 text-[5.5rem] leading-none text-[#1A5CE6]/10'>
                  &rdquo;
                </span>
                <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,119,255,0.06),transparent_58%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100' />

                <div className='relative z-10'>
                  <div className='flex flex-wrap items-center justify-between gap-3'>
                    <StarRating
                      rating={testimonial.rating}
                      size='md'
                      animated={true}
                      className='justify-start'
                    />
                    <time
                      dateTime={testimonial.date}
                      className='rounded-full border border-[#112D4E]/10 bg-[#F9F7F7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#112D4E]/70'>
                      {formatReviewDate(testimonial.date)}
                    </time>
                  </div>

                  <blockquote className='mt-5 text-base leading-relaxed text-[#1A2F4C]'>
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  <div className='mt-7 border-t border-[#112D4E]/10 pt-5'>
                    <p className='text-base font-semibold text-[#112D4E]'>{testimonial.author}</p>
                    <p className='mt-2 inline-flex rounded-full border border-[#112D4E]/10 bg-[#F9F7F7] px-3 py-1 text-sm text-[#1A2F4C]/80'>
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

export default Testimonials
