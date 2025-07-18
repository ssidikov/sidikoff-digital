'use client'

import { useState, useEffect, useCallback } from 'react'
// import Link from 'next/link' // Not used
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { DarkModeToggle } from './ui/DarkModeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSelector from './LanguageSelector'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  // const [isScrolled, setIsScrolled] = useState(false) // Not used
  // const [mounted, setMounted] = useState(false) // Not used
  const { t, language } = useLanguage() // Added language
  const { scrollToSection, scrollToTop } = useSmoothScroll()
  // const { theme, resolvedTheme } = useTheme() // Not used
  const router = useRouter()
  const pathname = usePathname()

  // Get current locale from pathname
  const getCurrentLocale = useCallback(() => {
    if (pathname.startsWith('/fr/') || pathname === '/fr') return 'fr'
    if (pathname.startsWith('/en/') || pathname === '/en') return 'en'
    if (pathname.startsWith('/ru/') || pathname === '/ru') return 'ru'
    return 'fr' // Default to French
  }, [pathname])

  // Use language from context instead of URL for navigation links
  const currentLocale = language // Use context language instead of getCurrentLocale()
  // Generate locale-aware URLs
  const getLocalePath = (path: string) => {
    // Check if user is on a localized URL path
    const isOnLocalizedPath =
      pathname.startsWith('/fr/') ||
      pathname.startsWith('/en/') ||
      pathname.startsWith('/ru/') ||
      pathname === '/fr' ||
      pathname === '/en' ||
      pathname === '/ru'

    // If user is on a localized path, use locale prefix for consistency
    // If user is on main site, keep them on main site (no locale prefix)
    if (isOnLocalizedPath) {
      return `/${currentLocale}${path}`
    } else {
      return path // Keep on main site
    }
  }

  // Theme mounting effect removed as not needed
  // Track active section for navigation indicators
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

    // Check if we're on the homepage (with or without locale)
    const urlLocale = getCurrentLocale() // Use URL-based locale for page detection
    const isHomePage =
      pathname === '/' || pathname === `/${urlLocale}` || pathname === `/${urlLocale}/`

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname, getCurrentLocale]) // Add getCurrentLocale to dependencies

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal?: boolean
  ) => {
    e.preventDefault()

    // If it's an external link (like blog), navigate directly
    if (isExternal || !href.includes('#')) {
      router.push(href)
      return
    }

    // Extract hash (section) from href, e.g. /fr/#contact-form => contact-form
    const hashIndex = href.indexOf('#')
    const hasHash = hashIndex !== -1
    const sectionId = hasHash ? href.substring(hashIndex + 1) : null

    // Check if we're on the homepage (with or without locale)
    const urlLocale = getCurrentLocale()
    const isHomePage =
      pathname === '/' || pathname === `/${urlLocale}` || pathname === `/${urlLocale}/`

    if (isHomePage && sectionId) {
      scrollToSection(sectionId)
    } else if (sectionId) {
      // Navigate to homepage with locale and hash, then scroll
      const homePath = getLocalePath('/') + `#${sectionId}`
      router.push(homePath)
      // Optionally, scroll after navigation (if needed)
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 350)
    } else {
      // For regular links, use locale-aware paths
      const localePath = getLocalePath(href)
      router.push(localePath)
    }
  }

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal?: boolean
  ) => {
    e.preventDefault()
    setMenuOpen(false)

    // If it's an external link (like blog), navigate directly
    if (isExternal || !href.includes('#')) {
      router.push(href)
      return
    }

    // Extract hash from href (could be /#section or /locale/#section)
    const hashIndex = href.indexOf('#')
    if (hashIndex !== -1) {
      const sectionId = href.substring(hashIndex + 1) // Remove "#"

      // Check if we're on the homepage (with or without locale)
      const urlLocale = getCurrentLocale() // Use URL-based locale for page detection
      const isHomePage =
        pathname === '/' || pathname === `/${urlLocale}` || pathname === `/${urlLocale}/`

      if (isHomePage) {
        setTimeout(() => scrollToSection(sectionId), 100) // Small delay for menu closing
      } else {
        // Navigate to homepage with locale and then scroll to section
        const homePath = getLocalePath('/')
        router.push(homePath)
        setTimeout(() => {
          scrollToSection(sectionId)
        }, 250) // More time for menu closing and navigation
      }
    } else {
      // For regular links, use locale-aware paths
      const localePath = getLocalePath(href)
      router.push(localePath)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Check if we're on the homepage (with or without locale)
    const urlLocale = getCurrentLocale() // Use URL-based locale for page detection
    const isHomePage =
      pathname === '/' || pathname === `/${urlLocale}` || pathname === `/${urlLocale}/`

    if (isHomePage) {
      scrollToTop()
    } else {
      // Navigate to homepage with proper locale
      const homePath = getLocalePath('/')
      router.push(homePath)
    }
  }

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
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
      },
    },
  }
  return (
    <motion.header
      role='banner'
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 border-b border-gray-200/30 dark:border-gray-700/30'>
      <motion.div className='container mx-auto px-4 py-2 md:py-3 flex items-center justify-between transition-all duration-300'>
        {/* Logo */}
        <div className='z-50'>
          <span className='sr-only'>Sidikoff Digital</span>
          <motion.a
            href='/'
            title='Sidikoff Digital — Web Development and Design'
            className='flex flex-col items-center leading-none text-gray-900 dark:text-white'
            onClick={handleLogoClick}>
            <Image
              src='/logo-sidikoff.svg'
              alt='Sidikoff Digital'
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
        </div>
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
        </div>
        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-6'>
          {[
            { href: `${getLocalePath('/')}#home`, key: 'nav.home', section: 'home' },
            { href: `${getLocalePath('/')}#about`, key: 'nav.expertise', section: 'about' },
            { href: `${getLocalePath('/')}#services`, key: 'nav.services', section: 'services' },
            { href: `${getLocalePath('/')}#portfolio`, key: 'nav.portfolio', section: 'portfolio' },
            { href: `${getLocalePath('/')}#prices`, key: 'nav.prices', section: 'prices' },
            {
              href: `${getLocalePath('/blog')}`,
              key: 'nav.blog',
              section: 'blog',
              isExternal: true,
            },
            { href: `${getLocalePath('/')}#faq`, key: 'nav.faq', section: 'faq' },
          ].map(({ href, key, section, isExternal }) => (
            <motion.div key={section} className='relative'>
              <motion.a
                href={href}
                onClick={(e) => handleNavClick(e, href, isExternal)}
                className={`text-sm font-medium transition-all duration-200 cursor-pointer relative px-3 py-2 rounded-lg backdrop-blur-sm ${
                  activeSection === section
                    ? 'text-primary bg-primary/10 shadow-sm ring-1 ring-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50 hover:shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {t(key)}
              </motion.a>
            </motion.div>
          ))}
        </nav>
        {/* Desktop CTA */}
        <div className='hidden md:flex items-center gap-2'>
          <motion.a href='/#contact-form' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button className='px-4 py-2 text-sm font-medium border border-border rounded-lg transition-all duration-200 backdrop-blur-sm shadow-sm bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'>
              {t('nav.contact')}
            </button>
          </motion.a>
          <div className='w-px h-5 bg-border' />
          <LanguageSelector />
          <DarkModeToggle />
        </div>
      </motion.div>
      {/* Mobile menu */}
      <AnimatePresence mode='wait'>
        {menuOpen && (
          <motion.div
            className='md:hidden w-full backdrop-blur-xxl bg-background/98 border-b border-border shadow-xl dark:shadow-2xl'
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
              height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}>
            <motion.nav
              className='flex flex-col gap-2 py-6 px-4 w-full bg-transparent'
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='hidden'>
              {[
                { href: `${getLocalePath('/')}#home`, key: 'nav.home', section: 'home' },
                { href: `${getLocalePath('/')}#about`, key: 'nav.expertise', section: 'about' },
                {
                  href: `${getLocalePath('/')}#services`,
                  key: 'nav.services',
                  section: 'services',
                },
                {
                  href: `${getLocalePath('/')}#portfolio`,
                  key: 'nav.portfolio',
                  section: 'portfolio',
                },
                { href: `${getLocalePath('/')}#prices`, key: 'nav.prices', section: 'prices' },
                {
                  href: `${getLocalePath('/blog')}`,
                  key: 'nav.blog',
                  section: 'blog',
                  isExternal: true,
                },
                { href: `${getLocalePath('/')}#faq`, key: 'nav.faq', section: 'faq' },
              ].map(({ href, key, section, isExternal }) => (
                <motion.div key={section} variants={itemVariants}>
                  <motion.a
                    href={href}
                    onClick={(e) => handleMobileNavClick(e, href, isExternal)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer backdrop-blur-sm ${
                      activeSection === section
                        ? 'bg-primary/15 text-primary border border-primary/30 shadow-sm'
                        : 'hover:bg-accent/60 text-muted-foreground hover:text-foreground hover:shadow-sm'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <span className='font-medium'>{t(key)}</span>
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
                  href='/#contact-form'
                  className='w-full block'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
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
