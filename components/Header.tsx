'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { DarkModeToggle } from './ui/DarkModeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()
  const { scrollToSection, scrollToTop } = useSmoothScroll()
  const router = useRouter()
  const pathname = usePathname()
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2) // Удаляем "/#"

      // Если мы на главной странице, просто скроллим к секции
      if (pathname === '/') {
        scrollToSection(sectionId)
      } else {
        // Если мы на другой странице, переходим на главную с якорем
        router.push('/')
        // Добавляем задержку для завершения навигации, затем скролл к секции
        setTimeout(() => {
          scrollToSection(sectionId)
        }, 150)
      }
    } else {
      router.push(href)
    }
  }

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)

    if (href.startsWith('/#')) {
      const sectionId = href.substring(2) // Удаляем "/#"

      // Если мы на главной странице, просто скроллим к секции
      if (pathname === '/') {
        setTimeout(() => scrollToSection(sectionId), 100) // Небольшая задержка для закрытия меню
      } else {
        // Если мы на другой странице, переходим на главную с якорем
        router.push('/')
        // Добавляем задержку для завершения навигации, затем скролл к секции
        setTimeout(() => {
          scrollToSection(sectionId)
        }, 250) // Больше времени для закрытия меню и навигации
      }
    } else {
      router.push(href)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Если мы на главной странице, скролл наверх
    if (pathname === '/') {
      scrollToTop()
    } else {
      // Если на другой странице, переходим на главную через router
      router.push('/')
    }
  }

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background)/0.0)] backdrop-blur-xl md:backdrop-blur-md border-b border-[hsl(var(--border))]'>
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        {' '}
        {/* Logo */}
        <div className='z-50'>
          <a
            href='/'
            className='flex flex-col items-center leading-none text-gray-900 dark:text-white'
            onClick={handleLogoClick}>
            <Image
              src='/logo-sidikoff.svg'
              alt='Logo'
              width={200}
              height={100}
              priority
              className='w-auto max-w-48 h-10 md:h-14 dark:invert'
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </a>
        </div>
        {/* Mobile: language, theme, burger */}
        <div className='flex items-center md:hidden'>
          <LanguageSelector />
          <span className='w-2' />
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 transition-colors bg-[hsl(var(--background)/0.7)] backdrop-blur-md border border-[hsl(var(--border))] ${
              menuOpen ? 'opacity-50' : 'opacity-50 hover:opacity-100'
            }`}
            aria-label='Toggle menu'>
            {' '}
            <motion.svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              animate={menuOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: 45 },
                closed: { rotate: 0 },
              }}
              transition={{
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}>
              <motion.path
                strokeLinecap='round'
                strokeLinejoin='round'
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </motion.svg>
          </button>
        </div>{' '}
        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-6'>
          <a
            href='/#home'
            onClick={(e) => handleNavClick(e, '/#home')}
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
            {t('nav.home')}
          </a>
          <a
            href='/#portfolio'
            onClick={(e) => handleNavClick(e, '/#portfolio')}
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
            {t('nav.portfolio')}
          </a>
          <a
            href='/#about'
            onClick={(e) => handleNavClick(e, '/#about')}
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
            {t('nav.about')}
          </a>
          <a
            href='/#prices'
            onClick={(e) => handleNavClick(e, '/#prices')}
            className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
            {t('nav.prices')}
          </a>
        </nav>{' '}
        {/* Desktop CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <a href='/#contact' onClick={(e) => handleNavClick(e, '/#contact')}>
            <button className='px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
              {t('nav.contact')}
            </button>
          </a>
          <LanguageSelector />
          <DarkModeToggle />
        </div>
      </div>
      {/* Mobile menu */}{' '}
      <AnimatePresence mode='wait'>
        {menuOpen && (
          <motion.div
            className='md:hidden w-full backdrop-blur-3xl border-b border-[hsl(var(--border))]'
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
              height: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
            }}>
            <motion.nav
              className='flex flex-col items-start gap-4 py-6 px-4 w-full'
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'>
              {' '}
              <motion.div variants={itemVariants}>
                <a
                  href='/#home'
                  onClick={(e) => handleMobileNavClick(e, '/#home')}
                  className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
                  {t('nav.home')}
                </a>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a
                  href='/#portfolio'
                  onClick={(e) => handleMobileNavClick(e, '/#portfolio')}
                  className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
                  {t('nav.portfolio')}
                </a>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a
                  href='/#about'
                  onClick={(e) => handleMobileNavClick(e, '/#about')}
                  className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
                  {t('nav.about')}
                </a>
              </motion.div>
              <motion.div variants={itemVariants}>
                <a
                  href='/#prices'
                  onClick={(e) => handleMobileNavClick(e, '/#prices')}
                  className='text-sm hover:text-primary transition-colors text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 cursor-pointer'>
                  {t('nav.prices')}
                </a>
              </motion.div>
              <motion.div variants={itemVariants} className='w-full'>
                <a
                  href='/#contact'
                  className='w-full'
                  onClick={(e) => handleMobileNavClick(e, '/#contact')}>
                  <button className='w-full px-4 py-2 text-sm font-medium bg-transparent border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    {t('nav.contact')}
                  </button>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
