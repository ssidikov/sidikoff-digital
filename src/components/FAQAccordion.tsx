'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

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

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  // Memoized column distribution
  const { firstHalf, secondHalf } = useMemo(() => {
    const midPoint = Math.floor(items.length / 2)
    return {
      firstHalf: items.slice(0, midPoint),
      secondHalf: items.slice(midPoint),
    }
  }, [items])

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
    className='relative overflow-hidden rounded-md border border-white/50 bg-white pb-5 shadow-2xl transition-all duration-500 before:pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:bg-linear-to-br before:from-white/30 before:to-transparent before:opacity-60'>
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
