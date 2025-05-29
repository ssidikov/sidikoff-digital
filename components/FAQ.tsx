'use client'

import { useState, MouseEvent as ReactMouseEvent } from 'react'
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // FAQ data with translation keys
  const faqData = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section id='faq' className='py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-background dark:via-background/95 dark:to-primary/5 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-300/20 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-300/20 dark:bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>          <motion.h2 
            className='text-h1 font-heading text-center mb-12 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-foreground dark:via-primary dark:to-primary/80 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('faq.title')}
          </motion.h2>            <div className='max-w-3xl mx-auto space-y-4'>
            {faqData.map((faq, index) => {
              const mouseX = useMotionValue(0)
              const mouseY = useMotionValue(0)
              
              const handleMouseMove = ({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) => {
                const { left, top } = currentTarget.getBoundingClientRect()
                mouseX.set(clientX - left)
                mouseY.set(clientY - top)
              }

              const background = useMotionTemplate`
                radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 80%)
              `

              return (
                <motion.div
                  key={index}
                  className='group relative flex flex-col rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm cursor-pointer overflow-hidden'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseMove={handleMouseMove}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
                    style={{ background }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  {/* Border glow effect */}
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    
                    <div className='relative z-10 p-6'>
                      <button
                        onClick={() => toggleFAQ(index)}
                        className='w-full text-left flex items-center justify-between gap-4 text-h5 font-heading text-text-primary group-hover:text-indigo-600 transition-colors duration-300'
                      >
                        <span>{faq.question}</span>
                        <motion.div
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className='flex-shrink-0'
                        >
                          <ChevronDown className='w-5 h-5' />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className='overflow-hidden'
                          >
                            <div className='pt-4 text-body-base text-text-secondary leading-relaxed max-w-readable'>
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
