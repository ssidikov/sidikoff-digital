'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'
import Section, { SectionHeader } from '@/components/ui/Section'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

interface FAQDictionary {
  title?: string
  subtitle?: string
  categories?: {
    general?: string
    pricing?: string
    support?: string
  }
  questions?: {
    [key: string]: {
      question?: string
      answer?: string
      category?: string
    }
  }
  cta?: {
    title?: string
    description?: string
    button?: string
  }
}

interface FAQProps {
  locale?: string
  dictionary?: FAQDictionary
}

const faqData: FAQItem[] = [
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
]

const categories = ['tous', 'développement', 'maintenance', 'technique', 'design', 'gestion']

export const FAQ = ({ dictionary }: FAQProps) => {
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  // Get FAQ data from dictionary or fallback to static data
  const getFAQData = (): FAQItem[] => {
    if (dictionary?.questions) {
      return Object.entries(dictionary.questions).map(([, item], index) => ({
        id: (index + 1).toString(),
        question: item.question || '',
        answer: item.answer || '',
        category: item.category || 'general',
      }))
    }
    return faqData
  }

  const faqItems = getFAQData()

  // Get categories from dictionary or use defaults
  const getCategories = () => {
    if (dictionary?.categories) {
      return [
        'tous',
        dictionary.categories.general || 'général',
        dictionary.categories.pricing || 'tarification',
        dictionary.categories.support || 'support',
      ]
    }
    return categories
  }

  const filteredFAQ =
    selectedCategory === 'tous'
      ? faqItems
      : faqItems.filter((item) => {
          if (dictionary?.categories) {
            // Map English categories to display categories
            const categoryMap: { [key: string]: string } = {
              general: dictionary.categories.general || 'général',
              pricing: dictionary.categories.pricing || 'tarification',
              support: dictionary.categories.support || 'support',
            }
            return categoryMap[item.category] === selectedCategory
          }
          return item.category === selectedCategory
        })

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <Section
      id="faq"
      background="pattern"
      padding="lg"
      contentWidth="wide"
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#f9fafb',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat-y'
      }}
    >
      <SectionHeader
        title={dictionary?.title || 'Questions Fréquentes'}
        subtitle={dictionary?.subtitle || 'Retrouvez les réponses aux questions les plus courantes sur nos services'}
        titleId="faq-title"
        className="text-left mb-10 md:mb-16 mt-6"
      />

        {/* Category Filter */}
        <div className='w-full mb-12'>
          <div className='flex flex-wrap gap-2.5'>
            {getCategories().map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-lg md:text-xl cursor-pointer rounded-xl px-3 md:px-6 transition-all duration-300 outline-none focus:ring-0 h-12 md:h-[60px] ${
                  index === getCategories().length - 1 ? 'mr-[30px]' : ''
                } ${
                  selectedCategory === category
                    ? 'text-white bg-black border border-transparent hover:bg-transparent hover:text-black hover:border-black'
                    : 'text-black border border-black hover:bg-black hover:text-white'
                }`}
                tabIndex={0}>
                #{category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-2.5 h-auto'>
          <div className='space-y-2.5 w-full lg:w-1/2'>
            <AnimatePresence>
              {filteredFAQ.slice(0, Math.ceil(filteredFAQ.length / 2)).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className='rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-white/30 shadow-lg'
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(16px) saturate(100%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 32px',
                  }}>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className='w-full flex items-center justify-between transition-all duration-[10000] pt-5 px-5 sm:pt-6 sm:px-6 3xl:pt-8 3xl:px-8 cursor-pointer'>
                    <div className='flex items-center gap-3 3xl:gap-6'>
                      <h4 className='font-medium text-left text-xl sm:text-22 3xl:text-30 leading-7 sm:leading-[22px] lg:leading-[30px] 3xl:leading-10'>
                        {item.question}
                      </h4>
                    </div>
                    <span className='size-8 3xl:size-11 shrink-0 flex items-center justify-center rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300'>
                      <motion.svg
                        animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className='w-5 h-5 3xl:w-7 3xl:h-7 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 9l-7 7-7-7'
                        />
                      </motion.svg>
                    </span>
                  </button>
                  <motion.div
                    initial={{ maxHeight: 0 }}
                    animate={{ maxHeight: openItems.has(item.id) ? 200 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}>
                    <p className='pb-2 3xl:pb-4 px-5 sm:px-6 3xl:px-8 text-lg mt-4'>
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className='space-y-2.5 w-full lg:w-1/2'>
            <AnimatePresence>
              {filteredFAQ.slice(Math.ceil(filteredFAQ.length / 2)).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className='rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-white/30 shadow-lg'
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(16px) saturate(100%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 8px 32px',
                  }}>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className='w-full flex items-center justify-between transition-all duration-[10000] pt-5 px-5 sm:pt-6 sm:px-6 3xl:pt-8 3xl:px-8 cursor-pointer'>
                    <div className='flex items-center gap-3 3xl:gap-6'>
                      <h4 className='font-medium text-left text-xl sm:text-22 3xl:text-30 leading-7 sm:leading-[22px] lg:leading-[30px] 3xl:leading-10'>
                        {item.question}
                      </h4>
                    </div>
                    <span className='size-8 3xl:size-11 shrink-0 flex items-center justify-center rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300'>
                      <motion.svg
                        animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className='w-5 h-5 3xl:w-7 3xl:h-7 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M19 9l-7 7-7-7'
                        />
                      </motion.svg>
                    </span>
                  </button>
                  <motion.div
                    initial={{ maxHeight: 0 }}
                    animate={{ maxHeight: openItems.has(item.id) ? 200 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}>
                    <p className='pb-2 3xl:pb-4 px-5 sm:px-6 3xl:px-8 text-lg mt-4'>
                      {item.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact CTA */}
        <div className='text-center mt-16'>
          <p className='text-gray-600 mb-6'>
            {dictionary?.cta?.description || 'Vous ne trouvez pas la réponse à votre question ?'}
          </p>
          <CTAButton href='#contact' variant='primary'>
            {dictionary?.cta?.button || 'Contactez-nous'}
            <svg className='ml-2 w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </CTAButton>
        </div>
    </Section>
  )
}

export default FAQ
