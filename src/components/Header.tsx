'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'

import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { getLocalizedUrl } from '@/utils/navigation'

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

  const navigation = [
    { label: dictionary.navigation.home, href: getLocalizedUrl('/', locale), section: '' },
    {
      label: dictionary.navigation.services,
      href: getLocalizedUrl('/#services', locale),
      section: 'services',
    },
    {
      label: dictionary.navigation.portfolio,
      href: getLocalizedUrl('/#portfolio', locale),
      section: 'portfolio',
    },
    {
      label: dictionary.navigation.pricing,
      href: getLocalizedUrl('/#pricing', locale),
      section: 'pricing',
    },
    {
      label: dictionary.navigation.faq,
      href: getLocalizedUrl('/#faq', locale),
      section: 'faq',
    },
    {
      label: dictionary.navigation.blog,
      href: getLocalizedUrl('/blog', locale),
      section: 'blog',
    },
    {
      label: dictionary.navigation.contact,
      href: getLocalizedUrl('/#contact', locale),
      section: 'contact',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Определяем активную секцию только если мы на главной странице
      const homeUrl = getLocalizedUrl('/', locale)
      if (pathname === homeUrl || pathname === homeUrl + '/') {
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
      } else {
        // На других страницах нет активных секций
        setActiveSection('')
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
      const element = document.getElementById(id)
      if (element) {
        // Use a timeout to ensure the page has rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
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

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 bg-black/20 backdrop-blur-sm z-[100] md:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-[120] w-full max-w-7xl px-4'>
        <nav className='relative z-[110] px-3.5 xs:px-4'>
          <div className='flex items-center justify-between px-5 py-4 lg:px-4 3xl:p-4 transition-all duration-500 rounded-3xl backdrop-blur-xl bg-white/20 border-2 border-white/30 shadow-xl '>
            {/* Logo */}
            <div>
              <Link
                href={getLocalizedUrl('/', locale)}
                className='flex items-center transition-all duration-300 focus:outline-none outline-none cursor-pointer'
                style={{ outline: 'none !important', boxShadow: 'none !important' }}>
                <Image
                  src='/logo-sidikoff.webp'
                  alt='SIDIKOFF DIGITALDigital'
                  width={180}
                  height={45}
                  priority
                  unoptimized
                  className='h-10 w-auto lg:h-12'
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg text-[#112D4E] focus:outline-none outline-none cursor-pointer ${
                      isActive(item) ? 'bg-black text-white' : 'hover:text-white hover:bg-black'
                    }`}
                    style={{ outline: 'none !important', boxShadow: 'none !important' }}>
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* Language Switcher */}
              <LanguageSwitcher currentLocale={locale} dict={dictionary} />
            </div>

            {/* Mobile Controls */}
            <div className='md:hidden flex items-center space-x-2'>
              {/* Mobile Language Switcher */}
              <div className='scale-90'>
                <LanguageSwitcher currentLocale={locale} dict={dictionary} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='p-2 rounded-lg transition-all duration-300 bg-[#DBE2EF] text-[#112D4E] hover:bg-[#3F72AF] hover:text-white focus:outline-none outline-none cursor-pointer'
                aria-label='Toggle menu'>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className='absolute top-24 left-3.5 xs:left-4 right-3.5 xs:right-4 md:hidden z-[110] rounded-3xl'
              style={{
                background: 'rgba(249, 247, 247, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}>
              <div className='py-4 space-y-2 px-4'>
                {navigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition-all duration-300 text-[#112D4E] focus:outline-none focus:ring-0 focus:border-none outline-none cursor-pointer ${
                        isActive(item)
                          ? 'bg-black text-white'
                          : 'hover:bg-[#DBE2EF]/50 hover:text-[#3F72AF]'
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
