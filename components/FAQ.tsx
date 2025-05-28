'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
        <div className='max-w-4xl mx-auto'>
          <motion.h2 
            className='text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-foreground dark:via-primary dark:to-primary/80 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('faq.title')}
          </motion.h2>
          
          <div className='max-w-3xl mx-auto space-y-4'>
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className='group relative bg-white/90 dark:bg-card/80 backdrop-blur-sm border border-gray-200/60 dark:border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-primary/5 transition-all duration-500 hover:border-indigo-300/60 dark:hover:border-primary/30'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Animated border glow */}
                <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 dark:from-primary/20 dark:via-primary/10 dark:to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm' />
                
                <div className='relative z-10 p-6'>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className='w-full text-left flex items-center justify-between gap-4 font-semibold text-gray-900 dark:text-foreground group-hover:text-indigo-600 dark:group-hover:text-primary transition-colors duration-300'
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
                        <div className='pt-4 text-gray-600 dark:text-muted-foreground leading-relaxed'>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
