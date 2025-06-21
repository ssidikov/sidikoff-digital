'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const selectLanguage = (lang: 'fr' | 'en' | 'ru') => {
    if (lang === language) {
      setIsOpen(false)
      return // Don't do anything if same language
    }

    setIsOpen(false)

    // Save current state for smooth transition
    const currentScrollY = window.scrollY
    const currentHash = window.location.hash
    const currentSection = getCurrentActiveSection()

    // Store restoration data in sessionStorage for persistence
    sessionStorage.setItem(
      'languageSwitch',
      JSON.stringify({
        scrollY: currentScrollY,
        hash: currentHash,
        section: currentSection,
        timestamp: Date.now(),
      })
    )

    // Update language context and localStorage - user stays on main site
    setLanguage(lang)

    // If user is currently on a localized path, redirect to main site
    if (pathname.startsWith('/fr/') || pathname.startsWith('/en/') || pathname.startsWith('/ru/')) {
      let currentPath = pathname.substring(3) // Remove /xx prefix
      if (!currentPath.startsWith('/')) {
        currentPath = '/' + currentPath
      }
      const fullNewPath = currentHash ? `${currentPath}${currentHash}` : currentPath
      router.push(fullNewPath)
    } else if (pathname === '/fr' || pathname === '/en' || pathname === '/ru') {
      // If on localized homepage, go to main homepage
      const fullNewPath = currentHash ? `/${currentHash}` : '/'
      router.push(fullNewPath)
    }
    // If already on main site (no locale prefix), no navigation needed - just language change
  }

  const getCurrentActiveSection = () => {
    const sections = ['home', 'services', 'portfolio', 'about', 'prices', 'contact']
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          return section
        }
      }
    }
    return null
  }
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  const getLanguageName = (code: string) => {
    switch (code) {
      case 'fr':
        return 'Français'
      case 'en':
        return 'English'
      case 'ru':
        return 'Русский'
      default:
        return code.toUpperCase()
    }
  }
  return (
    <div className='relative language-transition' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='flex items-center space-x-1 px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 language-transition'
        aria-expanded={isOpen}
        aria-haspopup='true'>
        <Globe className='h-4 w-4 mr-1' />
        <span>{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 z-10'>
          <div className='py-1' role='menu' aria-orientation='vertical'>
            {['fr', 'en', 'ru'].map((lang) => (
              <button
                key={lang}
                onClick={() => selectLanguage(lang as 'fr' | 'en' | 'ru')}
                className={`block px-4 py-2 text-sm w-full text-left transition-all duration-200 ${
                  language === lang
                    ? 'bg-gray-100 dark:bg-gray-800 text-indigo-500 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-500'
                }`}
                role='menuitem'>
                <span className='flex items-center'>
                  {language === lang && <span className='mr-2'>✓</span>}
                  {getLanguageName(lang)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
