'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { type Dictionary } from '@/lib/dictionaries'
import { type Locale } from '@/lib/i18n'
import { getLocalizedUrl } from '@/utils/navigation'
import { scrollToElementWithRetry } from '@/utils/scroll'
import { LanguageSwitcher } from './LanguageSwitcher'
import PopupContactForm from './ui/PopupContactForm'

interface HeaderProps {
  dictionary: Dictionary
  locale: Locale
}

interface NavigationItem {
  label: string
  href: string
  section: string
}

// Constants for scroll behavior and layout
const SCROLL_CONFIG = {
  headerOffset: 100,
  scrollThreshold: 100,
  viewportMiddle: 0.5,
  retryAttempts: 5,
  retryDelay: 300,
} as const

const SECTIONS = ['services', 'portfolio', 'faq', 'pricing', 'contact'] as const

// Animation configurations
const HEADER_ANIMATION = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
} as const

const MENU_OVERLAY_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
} as const

// Icon components
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

/**
 * Creates navigation items array based on dictionary and locale
 */
function createNavigationItems(dictionary: Dictionary, locale: Locale): NavigationItem[] {
  return [
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
}

/**
 * Determines the active section based on scroll position and viewport
 */
function getActiveSectionFromScroll(): string {
  if (window.scrollY < SCROLL_CONFIG.scrollThreshold) {
    return ''
  }

  for (const section of SECTIONS) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      // Section is active if its top is above middle of screen and bottom is below threshold
      if (
        rect.top <= window.innerHeight * SCROLL_CONFIG.viewportMiddle &&
        rect.bottom >= SCROLL_CONFIG.scrollThreshold
      ) {
        return section
      }
    }
  }

  return ''
}

/**
 * Determines active section based on current pathname
 */
function getActiveSectionFromPath(pathname: string): string {
  if (pathname.includes('/services')) return 'services'
  if (pathname.includes('/contact')) return 'contact'
  if (pathname.includes('/faq')) return 'faq'
  if (pathname.includes('/blog')) return 'blog'
  if (pathname.includes('/projects')) return 'portfolio'
  return ''
}

/**
 * Header component with responsive navigation and scroll-based active states
 * Features smooth scrolling, mobile menu, and accessibility support
 */
export function Header({ dictionary, locale }: HeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Memoized computed values
  const isBlogPage = useMemo(() => pathname.includes('/blog'), [pathname])
  const navigation = useMemo(() => createNavigationItems(dictionary, locale), [dictionary, locale])

  /**
   * Determines if a navigation item is currently active
   */
  const isActive = useCallback(
    (item: NavigationItem): boolean => {
      const homeUrl = getLocalizedUrl('/', locale)
      const isOnHomePage = pathname === homeUrl || pathname === homeUrl + '/'

      if (isOnHomePage) {
        if (item.section === '') {
          // Home is active when no section is active (user is at top of page)
          return activeSection === ''
        }
        // Section is active when it matches current active section
        return activeSection === item.section
      }

      // For other pages, check exact URL match
      return pathname === item.href
    },
    [pathname, locale, activeSection]
  )

  /**
   * Handles navigation click with smooth scroll for same-page anchors
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavigationItem) => {
      const homeUrl = getLocalizedUrl('/', locale)
      const isOnHomePage = pathname === homeUrl || pathname === homeUrl + '/'

      // If we're on the home page and clicking a section link
      if (isOnHomePage && item.href.includes('#')) {
        e.preventDefault()
        const sectionId = item.href.split('#')[1]

        if (sectionId) {
          const element = document.getElementById(sectionId)
          if (element) {
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - SCROLL_CONFIG.headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })
          }
        }
      }
      // Close mobile menu after navigation
      setIsMenuOpen(false)
    },
    [pathname, locale]
  )

  useEffect(() => {
    const handleScroll = () => {
      const homeUrl = getLocalizedUrl('/', locale)
      const isOnHomePage = pathname === homeUrl || pathname === homeUrl + '/'

      if (isOnHomePage) {
        // On homepage, track sections by scroll position
        setActiveSection(getActiveSectionFromScroll())
      } else if (pathname.includes('/tarifs')) {
        // On pricing page, determine active section by scroll
        const pricingElement = document.getElementById('pricing')
        if (pricingElement) {
          const rect = pricingElement.getBoundingClientRect()
          const isActive =
            rect.top <= window.innerHeight * SCROLL_CONFIG.viewportMiddle &&
            rect.bottom >= SCROLL_CONFIG.scrollThreshold
          setActiveSection(isActive ? 'pricing' : 'pricing')
        } else {
          setActiveSection('pricing')
        }
      } else {
        // On other pages, determine activity by URL
        setActiveSection(getActiveSectionFromPath(pathname))
      }
    }

    // Call immediately on mount
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname, locale])

  // Manage body scroll when menu is open/closed
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Handle ESC key to close menu
  useEffect(() => {
    if (!isMenuOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Handle hash-based scrolling on route change
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.substring(1)
      // Use retry utility for more reliable scrolling
      scrollToElementWithRetry(
        id,
        SCROLL_CONFIG.headerOffset,
        SCROLL_CONFIG.retryAttempts,
        SCROLL_CONFIG.retryDelay
      )
    }
  }, [pathname])

  return (
    <>
      {/* Mobile & Tablet Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          {...MENU_OVERLAY_ANIMATION}
          className='fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm lg:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <motion.header
        {...HEADER_ANIMATION}
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
                  quality={95}
                  sizes='(max-width: 640px) 120px, (max-width: 768px) 130px, (max-width: 1024px) 130px, 145px'
                  priority
                  className='h-8 w-auto xl:h-10 '
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-6 xl:space-x-8 ml-2'>
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-sm md:text-sm xl:text-base font-medium transition-all duration-300 px-2.5 xl:px-3 py-2 rounded-lg text-[#112D4E] focus:outline-none outline-none cursor-pointer ${
                      isActive(item)
                        ? 'bg-[var(--accent)] text-white'
                        : 'hover:text-white hover:bg-[var(--accent)]'
                    }`}
                    style={{ outline: 'none !important', boxShadow: 'none !important' }}>
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* Language Switcher */}
              <LanguageSwitcher currentLocale={locale} dict={dictionary} />

              {/* CTA Button */}
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className='text-sm md:text-sm xl:text-base font-semibold transition-all duration-300 px-4 xl:px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] hover:scale-105 focus:outline-none outline-none cursor-pointer shadow-md hover:shadow-lg'
                style={{ outline: 'none !important', boxShadow: 'none !important' }}>
                {(dictionary?.navigation as Record<string, string>)?.cta || 'Devis gratuit'}
              </button>
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
                className='flex items-center gap-2 p-2 text-sm font-medium rounded-lg transition-all duration-300 bg-[#DBE2EF]/30 border border-white/30 text-[#112D4E] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] cursor-pointer'
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
                          ? 'bg-[var(--accent)] text-white'
                          : 'hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]'
                      }`}>
                      {item.label}
                    </Link>
                  </div>
                ))}

                {/* Mobile CTA Button */}
                <div className='pt-2 border-t border-white/20 mt-4'>
                  <button
                    onClick={() => {
                      setIsContactPopupOpen(true)
                      setIsMenuOpen(false)
                    }}
                    className='w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] cursor-pointer'>
                    {(dictionary?.navigation as Record<string, string>)?.cta || 'Devis gratuit'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Contact Popup */}
      <PopupContactForm
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        dictionary={{
          title: dictionary?.hero?.cta_primary || 'Devis gratuit',
          subtitle:
            (dictionary?.navigation as Record<string, string>)?.cta || 'Décrivez votre projet',
          form: dictionary?.contact?.form,
        }}
        locale={locale}
      />
    </>
  )
}
