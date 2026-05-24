'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import common from '@/locales/fr/common.json'
import { getLocalizedUrl } from '@/utils/navigation'
import { scrollToElementWithRetry } from '@/utils/scroll'
import dynamic from 'next/dynamic'

const PopupContactForm = dynamic(() => import('./ui/PopupContactForm'))

interface NavigationItem {
  label: string
  href: string
  section: string
}

// Constants for scroll behavior and layout
const SCROLL_CONFIG = {
  headerOffset: 100,
} as const

// CSS classes will be used for entry animations instead if needed

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
 * Creates navigation items array based on dictionary
 */
function createNavigationItems(): NavigationItem[] {
  return [
    { label: common.navigation.home, href: getLocalizedUrl('/'), section: '' },
    {
      label: common.navigation.services,
      href: getLocalizedUrl('/services'),
      section: 'services',
    },
    {
      label: common.navigation.portfolio,
      href: getLocalizedUrl('/projects'),
      section: 'portfolio',
    },
    {
      label: common.navigation.pricing,
      href: getLocalizedUrl('/tarifs'),
      section: 'pricing',
    },
    {
      label: common.navigation.blog,
      href: getLocalizedUrl('/blog'),
      section: 'blog',
    },
    {
      label: common.navigation.faq,
      href: getLocalizedUrl('/faq'),
      section: 'faq',
    },
    {
      label: common.navigation.contact,
      href: getLocalizedUrl('/contact'),
      section: 'contact',
    },
  ]
}

/**
 * Determines active section based on current pathname
 */
function getActiveSectionFromPath(pathname: string): string {
  if (pathname.includes('/services')) return 'services'
  if (pathname.includes('/contact')) return 'contact'
  if (pathname.includes('/faq')) return 'faq'
  if (pathname.includes('/projects')) return 'portfolio'
  return ''
}

/**
 * Header component with responsive navigation and scroll-based active states
 * Features smooth scrolling, mobile menu, and accessibility support
 */
export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  // Memoized computed values
  const isBlogPage = useMemo(() => pathname.includes('/blog'), [pathname])
  const navigation = createNavigationItems()

  /**
   * Determines if a navigation item is currently active
   */
  const isActive = useCallback(
    (item: NavigationItem): boolean => {
      // Home link: active only on the home page
      if (item.href === getLocalizedUrl('/')) {
        const homeUrl = getLocalizedUrl('/')
        return pathname === homeUrl || pathname === homeUrl + '/'
      }
      // All other links: active only when pathname matches exactly
      return pathname === item.href
    },
    [pathname],
  )

  /**
   * Handles navigation click with smooth scroll for same-page anchors
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavigationItem) => {
      const homeUrl = getLocalizedUrl('/')
      const isOnHomePage = pathname === homeUrl || pathname === homeUrl + '/'

      // If we're on the home page and clicking a section link
      if (isOnHomePage && item.href.includes('#')) {
        e.preventDefault()
        const sectionId = item.href.split('#')[1]

        if (sectionId) {
          const element = document.getElementById(sectionId)
          if (element) {
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - SCROLL_CONFIG.headerOffset

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
    [pathname],
  )

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
      scrollToElementWithRetry(id, SCROLL_CONFIG.headerOffset, 5, 300)
    }
  }, [pathname])

  return (
    <>
      {/* Mobile & Tablet Menu Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm lg:hidden animate-[fadeIn_0.2s_ease-out]'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className='fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-[120] w-full max-w-7xl px-3 sm:px-4 mobile-no-animate animate-[fadeInDown_0.6s_ease-out]'>
        <nav className='relative z-[110] px-2 xs:px-3 sm:px-4'>
          <div
            className={`flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 lg:px-4 3xl:p-4 transition-all duration-500 rounded-2xl sm:rounded-3xl backdrop-blur-xl border-2 border-white/30 shadow-xl ${
              isBlogPage ? 'bg-white/90' : 'bg-white/20'
            }`}>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link
                href={getLocalizedUrl('/')}
                className='flex items-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent cursor-pointer'>
                <Image
                  src='/logo-sidikoff.webp'
                  alt='Sidikoff Digital'
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
                    className={`text-sm md:text-sm xl:text-base font-medium transition-all duration-300 px-2.5 xl:px-3 py-2 rounded-lg text-[#112D4E] focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
                      isActive(item)
                        ? 'bg-[var(--accent)] text-white'
                        : 'hover:text-white hover:bg-[var(--accent)]'
                    }`}>
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => setIsContactPopupOpen(true)}
                className='text-sm md:text-sm xl:text-base font-semibold transition-all duration-300 px-4 xl:px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] hover:scale-105 focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-md hover:shadow-lg'>
                Devis gratuit
              </button>
            </div>

            {/* Mobile & Tablet Controls */}
            <div className='lg:hidden flex items-center space-x-2'>
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
            <div
              className='absolute top-24 left-3.5 xs:left-4 right-3.5 xs:right-4 lg:hidden z-[110] rounded-3xl animate-[fadeInDown_0.2s_ease-out]'
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
                      className={`block py-3 px-4 rounded-lg transition-all duration-300 text-[#112D4E] focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
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
                    Devis gratuit
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Contact Popup */}
      <PopupContactForm
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        dictionary={{
          title: common.hero.cta_primary || 'Devis gratuit',
          subtitle: 'Décrivez votre projet',
          form: common.contact.form,
        }}
      />
    </>
  )
}
