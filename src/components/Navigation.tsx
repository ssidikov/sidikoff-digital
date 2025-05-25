'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
              SIDIKOFF<span className='text-blue-600'>.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <div className='flex items-center space-x-8'>
              <a
                href='#features'
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors'>
                Возможности
              </a>
              <a
                href='#contact'
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors'>
                Контакты
              </a>
              <a
                href='#contact'
                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>
                Связаться
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2'>
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
              <a
                href='#features'
                className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium'
                onClick={() => setIsMenuOpen(false)}>
                Возможности
              </a>
              <a
                href='#contact'
                className='block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-base font-medium'
                onClick={() => setIsMenuOpen(false)}>
                Контакты
              </a>
              <a
                href='#contact'
                className='block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-base font-medium mt-4'
                onClick={() => setIsMenuOpen(false)}>
                Связаться
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
