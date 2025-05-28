'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { DarkModeToggle } from './ui/DarkModeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()
  const { scrollToSection, scrollToTop } = useSmoothScroll()
  const { theme, resolvedTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  // Ensure theme is mounted before using it
  useEffect(() => {
    setMounted(true)
  }, [])  // Track active section for navigation indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'prices', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

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
  return (    <motion.header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 border-b border-gray-200/30 dark:border-gray-700/30'>
      <motion.div className='container mx-auto px-4 py-2 md:py-3 flex items-center justify-between transition-all duration-300'>
        {/* Logo */}
        <div className='z-50'>
          <motion.a
            href='/'
            className='flex flex-col items-center leading-none text-gray-900 dark:text-white'
            onClick={handleLogoClick}>
            <Image              src='/logo-sidikoff.svg'
              alt='Logo'
              width={200}
              height={100}
              priority
              className='w-auto max-w-36 md:max-w-40 h-6 md:h-10 dark:invert'
              style={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </motion.a>
        </div>{' '}
        {/* Mobile: language, theme, burger */}
        <div className='flex items-center gap-2 md:hidden'>
          <LanguageSelector />
          <DarkModeToggle />
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none transition-all duration-200 ${
              menuOpen
                ? 'bg-primary/10 text-primary'
                : 'bg-background/80 hover:bg-background/90 border border-border'
            }`}
            aria-label='Toggle menu'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
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
          </motion.button>
        </div>{' '}        {/* Desktop nav */}        <nav className='hidden md:flex items-center gap-6'>
          {[
            { href: '/#home', key: 'nav.home', section: 'home' },
            { href: '/#services', key: 'nav.services', section: 'services' },
            { href: '/#portfolio', key: 'nav.portfolio', section: 'portfolio' },
            { href: '/#about', key: 'nav.expertise', section: 'about' },
            { href: '/#prices', key: 'nav.prices', section: 'prices' },
          ].map(({ href, key, section }) => (
            <motion.div key={section} className='relative'>
              <motion.a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`text-sm font-medium transition-all duration-200 cursor-pointer relative px-3 py-2 rounded-lg backdrop-blur-sm ${
                  activeSection === section
                    ? 'text-primary bg-primary/10 shadow-sm ring-1 ring-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50 hover:shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {t(key)}{' '}
                {activeSection === section && (
                  <motion.div
                    className='absolute -bottom-1 left-1/2 w-4 h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full shadow-sm'
                    layoutId='activeIndicator'
                    initial={{ opacity: 0, scale: 0, width: 0 }}
                    animate={{ opacity: 1, scale: 1, width: 16 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ translateX: '-50%' }}
                  />
                )}
              </motion.a>
            </motion.div>
          ))}
        </nav>{' '}        {/* Desktop CTA */}
        <div className='hidden md:flex items-center gap-2'>
          <motion.a
            href='/#contact'
            onClick={(e) => handleNavClick(e, '/#contact')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            {' '}
            <button className='px-4 py-2 text-sm font-medium border border-border rounded-lg bg-background/90 hover:bg-accent/80 transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50'>
              {t('nav.contact')}
            </button>
          </motion.a>
          <div className='w-px h-5 bg-border' />
          <LanguageSelector />
          <DarkModeToggle />
        </div>
      </motion.div>{' '}
      {/* Mobile menu */}
      <AnimatePresence mode='wait'>
        {menuOpen && (
          <motion.div
            className='md:hidden w-full backdrop-blur-xl bg-background/98 border-b border-border shadow-xl dark:bg-background/95 dark:shadow-2xl'
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
              height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}>
            <motion.nav
              className='flex flex-col gap-2 py-6 px-4 w-full'
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'>              {' '}              {[
                { href: '/#home', key: 'nav.home', section: 'home' },
                { href: '/#services', key: 'nav.services', section: 'services' },
                { href: '/#portfolio', key: 'nav.portfolio', section: 'portfolio' },
                { href: '/#about', key: 'nav.expertise', section: 'about' },
                { href: '/#prices', key: 'nav.prices', section: 'prices' },
              ].map(({ href, key, section }) => (
                <motion.div key={section} variants={itemVariants}>
                  <motion.a
                    href={href}
                    onClick={(e) => handleMobileNavClick(e, href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer backdrop-blur-sm ${
                      activeSection === section
                        ? 'bg-primary/15 text-primary border border-primary/30 shadow-sm dark:bg-primary/10 dark:border-primary/20'
                        : 'hover:bg-accent/60 text-muted-foreground hover:text-foreground hover:shadow-sm dark:hover:bg-accent/40'
                    }`}                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <span className='font-medium'>{t(key)}</span>{' '}
                    {activeSection === section && (
                      <motion.div
                        className='w-2 h-2 bg-primary rounded-full shadow-sm dark:shadow-primary/50'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.a>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                className='w-full mt-4 pt-4 border-t border-border'>
                <motion.a
                  href='/#contact'
                  className='w-full block'
                  onClick={(e) => handleMobileNavClick(e, '/#contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  {' '}
                  <button className='w-full px-4 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg dark:shadow-primary/25 dark:hover:shadow-primary/30'>
                    {t('nav.contact')}
                  </button>
                </motion.a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
