'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface PopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const { t } = useLanguage()

  return (
    <div className='fixed inset-16 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className='max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='p-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <CheckCircle className='h-6 w-6 text-green-400' aria-hidden='true' />
                </div>
                <div className='ml-3 w-0 flex-1 pt-0.5'>
                  <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                    {t('popup.success.title')}
                  </p>
                  <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                    {t('popup.success.message')}
                  </p>
                </div>
                <div className='ml-4 flex-shrink-0 flex'>
                  <button
                    className='bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={onClose}>
                    <span className='sr-only'>Close</span>
                    <X className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
