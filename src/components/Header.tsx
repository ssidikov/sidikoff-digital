'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { getLocalizedUrl } from '@/utils/navigation'
import { scrollToElementWithRetry } from '@/utils/scroll'

import { LanguageSwitcher } from './LanguageSwitcher'

import { motion } from 'framer-motion'

interface HeaderProps {
  dictionary: Dictionary
  locale: Locale
}

const MenuIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <line x1='3' y1='6' x2='21' y2='6' />
    <line x1='3' y1='12' x2='21' y2='12' />
    <line x1='3' y1='18' x2='21' y2='18' />
  </svg>
)

const CloseIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
)

export function Header({ dictionary, locale }: HeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Check if we're on blog pages
  const isBlogPage = pathname.includes('/blog')

  const navigation = [
    { label: dictionary.navigation.home, href: getLocalizedUrl('/', locale), section: '' },
    {
      label: dictionary.navigation.services,
      href: getLocalizedUrl('/services', locale),
      section: 'services',
    },
    {
      label: dictionary.navigation.portfolio,
      href: getLocalizedUrl('/projects', locale),
      section: 'portfolio',
    },
    {
      label: dictionary.navigation.pricing,
      href: getLocalizedUrl('/tarifs', locale),
      section: 'pricing',
    },
    {
      label: dictionary.navigation.faq,
      href: getLocalizedUrl('/faq', locale),
      section: 'faq',
    },
    {
      label: dictionary.navigation.blog,
      href: getLocalizedUrl('/blog', locale),
      section: 'blog',
    },
    {
      label: dictionary.navigation.contact,
      href: getLocalizedUrl('/contact', locale),
      section: 'contact',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Определяем активную секцию в зависимости от текущей страницы
      const homeUrl = getLocalizedUrl('/', locale)

      if (pathname === homeUrl || pathname === homeUrl + '/') {
        // На главной странице отслеживаем секции по скроллу
        const sections = ['services', 'portfolio', 'faq', 'pricing', 'contact']
        let currentSection = ''

        // Если пользователь в самом верху страницы, активна главная
        if (window.scrollY < 100) {
          currentSection = ''
        } else {
          // Ищем секцию, которая находится в viewport
          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              // Секция активна если её верх выше середины экрана, а низ ниже
              if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
                currentSection = section
                break
              }
            }
          }
        }

        setActiveSection(currentSection)
      } else if (pathname.includes('/tarifs')) {
        // На странице тарифов определяем активную секцию по скроллу
        const sections = ['pricing']
        let currentSection = 'pricing' // По умолчанию активна секция pricing

        // Ищем секцию, которая находится в viewport
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
              currentSection = section
              break
            }
          }
        }

        setActiveSection(currentSection)
      } else {
        // На других страницах определяем активность по URL
        if (pathname.includes('/services')) {
          setActiveSection('services')
        } else if (pathname.includes('/contact')) {
          setActiveSection('contact')
        } else if (pathname.includes('/faq')) {
          setActiveSection('faq')
        } else if (pathname.includes('/blog')) {
          setActiveSection('blog')
        } else if (pathname.includes('/projects')) {
          setActiveSection('portfolio')
        } else {
          setActiveSection('')
        }
      }
    }

    // Вызываем сразу при монтировании
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname, locale])

  // Управляем скроллом body при открытии/закрытии меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup при размонтировании компонента
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Закрытие меню по ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }

    return undefined
  }, [isMenuOpen])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.substring(1)
      // Use the retry utility for more reliable scrolling
      scrollToElementWithRetry(id, 100, 5, 300)
    }
  }, [pathname]) // Rerun when path changes

  const isActive = (item: (typeof navigation)[0]) => {
    // Для главной страницы проверяем активную секцию
    const homeUrl = getLocalizedUrl('/', locale)
    const isOnHomePage = pathname === homeUrl || pathname === homeUrl + '/'

    if (isOnHomePage) {
      if (item.section === '') {
        // Home активен когда нет активной секции (пользователь вверху страницы)
        return activeSection === ''
      } else {
        // Секция активна когда она соответствует текущей активной секции
        return activeSection === item.section
      }
    }
    // Для других страниц проверяем точное соответствие URL
    return pathname === item.href
  }

  // Handle navigation click with smooth scroll for same page anchors
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof navigation)[0]) => {
    const homeUrl = getLocalizedUrl('/', locale)
    const isOnHomePage = pathname === homeUrl || pathname === homeUrl + '/'

    // If we're on the home page and clicking a section link
    if (isOnHomePage && item.href.includes('#')) {
      e.preventDefault()
      const sectionId = item.href.split('#')[1]

      if (sectionId) {
        const element = document.getElementById(sectionId)

        if (element) {
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }
    }
    // Otherwise, let the default Link behavior handle it
  }

  return (
    <>
      {/* Mobile & Tablet Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] lg:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-[120] w-full max-w-7xl px-3 sm:px-4'>
        <nav className='relative z-[110] px-2 xs:px-3 sm:px-4'>
          <div
            className={`flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 lg:px-4 3xl:p-4 transition-all duration-500 rounded-2xl sm:rounded-3xl backdrop-blur-xl border-2 border-white/30 shadow-xl ${
              isBlogPage ? 'bg-white/90' : 'bg-white/20'
            }`}>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link
                href={getLocalizedUrl('/', locale)}
                className='flex items-center transition-all duration-300 focus:outline-none outline-none cursor-pointer'
                style={{ outline: 'none !important', boxShadow: 'none !important' }}>
                <Image
                  src='/logo-sidikoff.webp'
                  alt='SIDIKOFF DIGITAL'
                  width={145}
                  height={40}
                  sizes='(max-width: 640px) 120px, (max-width: 768px) 130px, (max-width: 1024px) 145px, 160px'
                  priority
                  className='h-8 w-auto sm:h-9 md:h-10 lg:h-12'
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-sm xl:text-base font-medium transition-all duration-300 px-2.5 xl:px-3 py-2 rounded-lg text-[#112D4E] focus:outline-none outline-none cursor-pointer ${
                      isActive(item) ? 'bg-[#3377FF] text-white' : 'hover:text-white hover:bg-[#3377FF]'
                    }`}
                    style={{ outline: 'none !important', boxShadow: 'none !important' }}>
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* Language Switcher */}
              <LanguageSwitcher currentLocale={locale} dict={dictionary} />
            </div>

            {/* Mobile & Tablet Controls */}
            <div className='lg:hidden flex items-center space-x-2'>
              {/* Language Switcher */}
              <div className='scale-90'>
                <LanguageSwitcher currentLocale={locale} dict={dictionary} />
              </div>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='flex items-center gap-2 p-2 text-sm font-medium rounded-lg transition-all duration-300 bg-[#DBE2EF]/30 border border-white/30 text-[#112D4E] hover:bg-[#3377FF] hover:text-white hover:border-[#3377FF] cursor-pointer'
                aria-label='Toggle menu'>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className='absolute top-24 left-3.5 xs:left-4 right-3.5 xs:right-4 lg:hidden z-[110] rounded-3xl'
              style={{
                background: 'rgba(249, 247, 247, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}>
              <div className='py-3 sm:py-4 space-y-1 sm:space-y-2 px-3 sm:px-4'>
                {navigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item)
                        setIsMenuOpen(false)
                      }}
                      className={`block py-3 px-4 rounded-lg transition-all duration-300 text-[#112D4E] focus:outline-none focus:ring-0 focus:border-none outline-none cursor-pointer ${
                        isActive(item)
                          ? 'bg-[#3377FF] text-white'
                          : 'hover:bg-[#3377FF]/10 hover:text-[#3377FF]'
                      }`}>
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  )
}
