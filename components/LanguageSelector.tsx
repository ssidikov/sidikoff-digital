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
    setLanguage(lang)
    setIsOpen(false)
    
    // Get current path without locale prefix
    let currentPath = pathname
    
    // Remove existing locale prefix if present
    if (pathname.startsWith('/fr/') || pathname.startsWith('/en/') || pathname.startsWith('/ru/')) {
      currentPath = pathname.substring(3) // Remove /xx
    } else if (pathname === '/fr' || pathname === '/en' || pathname === '/ru') {
      currentPath = '/'
    }
    
    // Ensure currentPath starts with /
    if (currentPath && !currentPath.startsWith('/')) {
      currentPath = '/' + currentPath
    }
    
    // Generate new path with selected language - all languages use /lang prefix
    const newPath = `/${lang}${currentPath || '/'}`
    
    // Navigate to the new locale path
    router.push(newPath)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
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
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className='flex items-center space-x-1 px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
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
                className={`block px-4 py-2 text-sm w-full text-left ${
                  language === lang
                    ? 'bg-gray-100 dark:bg-gray-800 text-indigo-500'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                role='menuitem'>
                {getLanguageName(lang)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
