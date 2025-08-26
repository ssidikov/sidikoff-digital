'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

import {
  type Locale,
  locales,
  languageNames,
  languageFlags,
  getLocaleFromPathname,
  removeLocaleFromPathname,
  addLocaleToPathname,
} from '@/lib/i18n'
import { Dictionary } from '@/lib/dictionaries'

interface LanguageSwitcherProps {
  readonly currentLocale: Locale
  readonly dict: Dictionary
}

// Animation configuration constants
const ANIMATION_CONFIG = {
  dropdown: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  },
  
  chevron: {
    transition: { duration: 0.2 },
  },
  
  checkIcon: {
    initial: { scale: 0 },
    animate: { scale: 1 },
  }
} as const

// Style configuration constants
const STYLES = {
  container: 'relative z-[140]',
  
  button: 'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 bg-[#DBE2EF]/30 border border-white/30 text-[#112D4E] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] cursor-pointer',
  
  chevron: 'w-4 h-4',
  
  dropdown: 'absolute right-0 mt-2 w-48 rounded-lg border border-white/30 shadow-2xl z-[150] bg-teal-50/90 md:bg-white/40 backdrop-blur-xl backdrop-saturate-180',
  
  dropdownContainer: 'py-2',
  
  option: {
    base: 'w-full flex items-center gap-3 px-4 py-2 text-sm transition-all duration-300 cursor-pointer',
    active: 'bg-[var(--accent)] text-white',
    inactive: 'text-black hover:bg-[var(--accent-alpha-10)] hover:text-[var(--accent)] hover:font-medium'
  },
  
  flag: 'text-lg',
  
  checkIcon: 'w-4 h-4 ml-auto text-white'
} as const

export function LanguageSwitcher({ currentLocale, dict }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  /**
   * Handle language change with navigation and persistence
   */
  const handleLanguageChange = useCallback((locale: Locale) => {
    const currentPath = removeLocaleFromPathname(
      pathname,
      getLocaleFromPathname(pathname) || currentLocale
    )
    const newPath = addLocaleToPathname(currentPath, locale)

    // Store language preference in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', locale)
    }

    router.push(newPath)
    setIsOpen(false)
  }, [pathname, currentLocale, router])

  /**
   * Toggle dropdown visibility
   */
  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /**
   * Get appropriate CSS classes for option buttons
   */
  const getOptionClasses = useCallback((locale: Locale) => {
    const baseClasses = STYLES.option.base
    const variantClasses = locale === currentLocale 
      ? STYLES.option.active 
      : STYLES.option.inactive
    
    return `${baseClasses} ${variantClasses}`
  }, [currentLocale])

  return (
    <div className={STYLES.container} ref={ref}>
      <button
        onClick={toggleDropdown}
        className={STYLES.button}
        aria-label={dict?.navigation?.language || 'Language'}
        aria-expanded={isOpen}
        aria-haspopup='listbox'>
        <span 
          className={STYLES.flag} 
          role='img' 
          aria-label={languageNames[currentLocale]}>
          {languageFlags[currentLocale]}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={ANIMATION_CONFIG.chevron.transition}
          className={STYLES.chevron}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'>
          <path 
            strokeLinecap='round' 
            strokeLinejoin='round' 
            strokeWidth={2} 
            d='M19 9l-7 7-7-7' 
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={ANIMATION_CONFIG.dropdown.initial}
            animate={ANIMATION_CONFIG.dropdown.animate}
            exit={ANIMATION_CONFIG.dropdown.exit}
            transition={ANIMATION_CONFIG.dropdown.transition}
            className={STYLES.dropdown}
            role='listbox'
            aria-label='Language options'>
            <div className={STYLES.dropdownContainer}>
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={getOptionClasses(locale)}
                  role='option'
                  aria-selected={locale === currentLocale}>
                  <span 
                    className={STYLES.flag} 
                    role='img' 
                    aria-label={languageNames[locale]}>
                    {languageFlags[locale]}
                  </span>
                  <span>{languageNames[locale]}</span>
                  {locale === currentLocale && (
                    <motion.svg
                      initial={ANIMATION_CONFIG.checkIcon.initial}
                      animate={ANIMATION_CONFIG.checkIcon.animate}
                      className={STYLES.checkIcon}
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </motion.svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
