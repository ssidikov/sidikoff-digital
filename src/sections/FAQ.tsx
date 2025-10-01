'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'
import { type Locale } from '@/lib/i18n'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

interface FAQCategories {
  general?: string
  pricing?: string
  support?: string
}

interface FAQQuestionItem {
  question?: string
  answer?: string
  category?: string
}

interface FAQQuestions {
  [key: string]: FAQQuestionItem
}

interface FAQCTA {
  title?: string
  description?: string
  button?: string
}

interface FAQDictionary {
  title?: string
  subtitle?: string
  categories?: FAQCategories
  questions?: FAQQuestions
  cta?: FAQCTA
}

interface FAQProps {
  locale?: Locale
  dictionary?: FAQDictionary
  className?: string
}

// Default FAQ data for fallback
const DEFAULT_FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'Combien de temps faut-il pour développer un site web ?',
    answer:
      "Le délai de développement varie selon la complexité du projet. Un site vitrine simple peut être réalisé en 2-3 semaines, tandis qu'un site e-commerce complexe peut nécessiter 6-8 semaines.",
    category: 'développement',
  },
  {
    id: '2',
    question: 'Proposez-vous la maintenance après livraison ?',
    answer:
      'Oui, nous proposons différents plans de maintenance incluant les mises à jour de sécurité, les sauvegardes, et le support technique. Nous restons disponibles pour faire évoluer votre site selon vos besoins.',
    category: 'maintenance',
  },
  {
    id: '3',
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'Nous utilisons des technologies modernes et éprouvées : React, Next.js, TypeScript pour le frontend, et diverses solutions backend selon les besoins du projet (Node.js, Python, etc.).',
    category: 'technique',
  },
  {
    id: '4',
    question: 'Le site sera-t-il optimisé pour mobile ?',
    answer:
      'Absolument ! Tous nos sites sont développés avec une approche "mobile-first" et sont entièrement responsives. Nous testons sur tous les types d\'appareils pour garantir une expérience optimale.',
    category: 'design',
  },
  {
    id: '5',
    question: 'Puis-je modifier le contenu de mon site moi-même ?',
    answer:
      'Oui, nous mettons en place des systèmes de gestion de contenu (CMS) intuitifs qui vous permettent de modifier facilement textes, images et pages sans connaissances techniques.',
    category: 'gestion',
  },
] as const

// Animation configurations
const ANIMATION_CONFIG = {
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  },
  content: {
    initial: { maxHeight: 0 },
    animate: (isOpen: boolean) => ({ maxHeight: isOpen ? 200 : 0 }),
    transition: { duration: 0.3 },
  },
  icon: {
    animate: (isOpen: boolean) => ({ rotate: isOpen ? 180 : 0 }),
    transition: { duration: 0.3 },
  },
} as const

/**
 * FAQ section component with expandable items and responsive layout
 * Features smooth animations, accessibility, and analytics tracking
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FAQ = ({ dictionary, className, locale: _locale }: FAQProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  // Memoized FAQ data transformation
  const faqItems = useMemo((): FAQItem[] => {
    if (dictionary?.questions) {
      return Object.entries(dictionary.questions).map(([, item], index) => ({
        id: (index + 1).toString(),
        question: item.question || '',
        answer: item.answer || '',
        category: item.category || 'general',
      }))
    }
    return DEFAULT_FAQ_DATA
  }, [dictionary?.questions])

  // Memoized column distribution
  const { firstHalf, secondHalf } = useMemo(() => {
    const midPoint = Math.floor(faqItems.length / 2)
    return {
      firstHalf: faqItems.slice(0, midPoint),
      secondHalf: faqItems.slice(midPoint),
    }
  }, [faqItems])

  const toggleItem = useCallback((id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }, [])

  return (
    <Section
      id='faq'
      variant='faq'
      background='transparent'
      padding='lg'
      contentWidth='wide'
      {...(className && { className })}>
      <div className='relative z-10'>
        <SectionHeader
          title={dictionary?.title || 'Questions Fréquentes'}
          subtitle={
            dictionary?.subtitle ||
            'Retrouvez les réponses aux questions les plus courantes sur nos services'
          }
          titleId='faq-title'
          as='h1'
          className='mb-10 text-left md:mb-16'
        />

        {/* FAQ Items in Two Columns */}
        <div className='flex h-auto flex-col gap-x-10 gap-y-2.5 xl:flex-row'>
          {/* First Column */}
          <div className='w-full space-y-2.5 xl:w-1/2'>
            <AnimatePresence>
              {firstHalf.map((item) => (
                <FAQCard
                  key={item.id}
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={toggleItem}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Second Column */}
          <div className='w-full space-y-2.5 xl:w-1/2'>
            <AnimatePresence>
              {secondHalf.map((item) => (
                <FAQCard
                  key={item.id}
                  item={item}
                  isOpen={openItems.has(item.id)}
                  onToggle={toggleItem}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact CTA */}
        <div className='mt-16 text-center'>
          <p className='mb-6 text-gray-600'>
            {dictionary?.cta?.description || 'Vous ne trouvez pas la réponse à votre question ?'}
          </p>
          <CTAButton
            href='#contact'
            variant='primary'
            trackingAction='faq_contact'
            trackingCategory='faq'
            ariaLabel={dictionary?.cta?.button || 'Contactez-nous'}>
            {dictionary?.cta?.button || 'Contactez-nous'}
            <svg className='ml-2 h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </CTAButton>
        </div>
      </div>
    </Section>
  )
}

/**
 * Individual FAQ card component with expand/collapse functionality
 */
interface FAQCardProps {
  item: FAQItem
  isOpen: boolean
  onToggle: (id: string) => void
}

const FAQCard = ({ item, isOpen, onToggle }: FAQCardProps) => (
  <motion.div
    {...ANIMATION_CONFIG.item}
    className='relative overflow-hidden rounded-md border border-white/50 bg-white pb-5 shadow-2xl transition-all duration-500 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:opacity-60'>
    <button
      onClick={() => onToggle(item.id)}
      className='flex w-full cursor-pointer items-center justify-between px-5 pt-5 transition-all duration-[10000] sm:px-6'
      aria-expanded={isOpen}
      aria-controls={`faq-content-${item.id}`}>
      <div className='flex items-center gap-3 3xl:gap-6'>
        <h3 className='text-left text-base font-medium leading-7 sm:leading-8 md:text-xl lg:leading-9 3xl:leading-10'>
          {item.question}
        </h3>
      </div>
      <span className='flex size-8 shrink-0 items-center justify-center rounded-full bg-white opacity-50 transition-opacity duration-300 hover:opacity-100 3xl:size-11'>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={ANIMATION_CONFIG.icon.transition}
          className='h-5 w-5 transition-transform duration-300 3xl:h-7 3xl:w-7'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
        </motion.svg>
      </span>
    </button>
    <motion.div
      id={`faq-content-${item.id}`}
      initial={{ maxHeight: 0 }}
      animate={{ maxHeight: isOpen ? 400 : 0 }}
      transition={ANIMATION_CONFIG.content.transition}
      style={{ overflow: 'hidden' }}>
      <p className='mt-4 px-5 pb-2 text-lg sm:px-6 3xl:px-8 3xl:pb-4'>{item.answer}</p>
    </motion.div>
  </motion.div>
)

export default FAQ
