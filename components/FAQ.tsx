'use client'

import { useState, MouseEvent as ReactMouseEvent } from 'react'
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
// FAQItem component to avoid hooks in map
interface FAQItemProps {
  faq: { question: string; answer: string }
  index: number
  openIndex: number | null
  setOpenIndex: (index: number | null) => void
}

function FAQItem({ faq, index, openIndex, setOpenIndex }: FAQItemProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`
    radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.1), transparent 80%)
  `

  return (
    <motion.div
      className='group relative flex flex-col rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm cursor-pointer overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.98 }}>
      {/* Gradient overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
        style={{ background }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Border glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10 p-8 md:pt-6 md:pr-6 md:pb-6'>
        <button
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          className='w-full text-left flex items-center justify-between gap-4 text-base md:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors duration-300'>
          <span>{faq.question}</span>
          <motion.div
            animate={{ rotate: openIndex === index ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className='flex-shrink-0'>
            <ChevronDown className='w-5 h-5' />
          </motion.div>
        </button>

        <AnimatePresence>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='overflow-hidden'>
              <div className='pt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// FAQ Section component
interface FAQSectionProps {
  title: string
  questions: { question: string; answer: string }[]
  openIndex: number | null
  setOpenIndex: (index: number | null) => void
  startIndex: number
}

function FAQSection({ title, questions, openIndex, setOpenIndex, startIndex }: FAQSectionProps) {
  return (
    <div className='mb-12'>
      <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>{title}</h3>
      <div className='space-y-4'>
        {questions.map((faq, index) => (
          <FAQItem
            key={startIndex + index}
            faq={faq}
            index={startIndex + index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  )
}

// Feature Card component
interface FeatureCardProps {
  icon: string
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      className='group relative bg-white dark:bg-gray-900/80 rounded-2xl p-6 border border-gray-200/60 dark:border-white/10 backdrop-blur-sm overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5 }}>
      {/* Gradient overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <div className='relative z-10'>
        <div className='text-3xl mb-4'>{icon}</div>
        <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>{title}</h4>
        <p className='text-gray-600 dark:text-gray-400'>{description}</p>
      </div>
    </motion.div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // General FAQ data
  const generalFAQData = [
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
    {
      question: t('faq.question5'),
      answer: t('faq.answer5'),
    },
  ]

  // Technical FAQ data
  const technicalFAQData = [
    {
      question: t('faq.technical.question1'),
      answer: t('faq.technical.answer1'),
    },
    {
      question: t('faq.technical.question2'),
      answer: t('faq.technical.answer2'),
    },
  ]

  // After delivery FAQ data
  const afterDeliveryFAQData = [
    {
      question: t('faq.afterDelivery.question1'),
      answer: t('faq.afterDelivery.answer1'),
    },
    {
      question: t('faq.afterDelivery.question2'),
      answer: t('faq.afterDelivery.answer2'),
    },
  ]

  // Feature cards data
  const featureCards = [
    {
      icon: t('faq.card1.icon'),
      title: t('faq.card1.title'),
      description: t('faq.card1.description'),
    },
    {
      icon: t('faq.card2.icon'),
      title: t('faq.card2.title'),
      description: t('faq.card2.description'),
    },
    {
      icon: t('faq.card3.icon'),
      title: t('faq.card3.title'),
      description: t('faq.card3.description'),
    },
  ]

  return (
    <section
      id='faq'
      className='py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-background dark:via-background/95 dark:to-primary/5 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 -left-20 w-72 h-72 bg-indigo-300/20 dark:bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-20 -right-20 w-96 h-96 bg-purple-300/20 dark:bg-primary/3 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <motion.h2
              className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              {t('faq.title')}
            </motion.h2>
            <motion.p
              className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              {t('faq.subtitle')}
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className='grid md:grid-cols-3 gap-6 mb-16'>
            {featureCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                index={index}
              />
            ))}
          </div>

          {/* FAQ Sections */}
          <div className='max-w-4xl mx-auto'>
            {/* General Questions */}
            <FAQSection
              title=''
              questions={generalFAQData}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              startIndex={0}
            />

            {/* Technical Questions */}
            <FAQSection
              title={t('faq.technical.title')}
              questions={technicalFAQData}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              startIndex={generalFAQData.length}
            />

            {/* After Delivery Questions */}
            <FAQSection
              title={t('faq.afterDelivery.title')}
              questions={afterDeliveryFAQData}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              startIndex={generalFAQData.length + technicalFAQData.length}
            />
          </div>

          {/* Contact Section */}
          <motion.div
            className='mt-16 bg-white dark:bg-gray-900/80 rounded-3xl p-8 border border-gray-200/60 dark:border-white/10 backdrop-blur-sm text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
              {t('faq.contact.title')}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-8'>{t('faq.contact.description')}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/#contact'
                className='inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors'>
                <MessageCircle className='w-5 h-5' />
                {t('faq.contact.askQuestion')}
              </Link>
              <a
                href='https://wa.me/33626932734'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors'>
                <Phone className='w-5 h-5' />
                {t('faq.contact.whatsapp')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
