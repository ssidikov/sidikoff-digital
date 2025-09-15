'use client'

import Link from 'next/link'

import { type Locale } from '@/lib/i18n'
import { getLocalizedUrl } from '@/utils/navigation'
import { type Dictionary } from '@/lib/dictionaries'

interface FooterProps {
  dictionary: Dictionary
  locale: Locale
}

interface FooterLink {
  name: string
  href: string
}

// Contact information constants
const CONTACT_INFO = {
  email: 's.sidikoff@gmail.com',
  phone: '+33626932734',
  emailLabel: 's.sidikoff@gmail.com',
  phoneLabel: '+33 6 26 93 27 34',
} as const

// Copyright and company information
const COMPANY_INFO = {
  name: 'SIDIKOFF DIGITAL',
  year: new Date().getFullYear(),
  description: 'Agence web | Création de sites web | Développeur web freelance',
  copyright: `© Copyright ${new Date().getFullYear()} | SIDIKOFF DIGITAL | Agence web | Création de sites web | Développeur web freelance`,
} as const

/**
 * Generate navigation links based on dictionary and locale
 */
const createNavigationLinks = (dictionary: Dictionary, locale: Locale): FooterLink[] => [
  {
    name: dictionary.navigation?.services || 'Services',
    href: getLocalizedUrl('/#services', locale),
  },
  {
    name: 'Création Site Internet Paris 16',
    href: getLocalizedUrl('/services/creation-site-internet-paris-16', locale),
  },
  {
    name: 'Création Site Internet Paris',
    href: getLocalizedUrl('/services/creation-site-internet-paris', locale),
  },
  {
    name: 'Création Site Internet Toulouse',
    href: getLocalizedUrl('/services/creation-site-internet-toulouse', locale),
  },
  {
    name: dictionary.navigation?.portfolio || 'Portfolio',
    href: getLocalizedUrl('/#portfolio', locale),
  },
  {
    name: dictionary.navigation?.blog || 'Blog',
    href: getLocalizedUrl('/blog', locale),
  },
  {
    name: dictionary.navigation?.faq || 'FAQ',
    href: getLocalizedUrl('/#faq', locale),
  },
  {
    name: dictionary.navigation?.contact || 'Contact',
    href: getLocalizedUrl('/#contact', locale),
  },
]

/**
 * Generate legal links based on dictionary and locale
 */
const createLegalLinks = (dictionary: Dictionary, locale: Locale): FooterLink[] => [
  {
    name: dictionary.common?.legal_link || 'Mentions Légales',
    href: getLocalizedUrl('/mentions-legales', locale),
  },
]

/**
 * Footer component with navigation, contact info, and company branding
 * Features responsive design and accessible links
 */
export function Footer({ dictionary, locale }: FooterProps) {
  const navigationLinks = createNavigationLinks(dictionary, locale)
  const legalLinks = createLegalLinks(dictionary, locale)

  const footerDescription =
    dictionary.footer?.description ||
    'Votre partenaire digital pour créer des sites web modernes et performants.'

  return (
    <footer className='bg-[#FCFBFE] px-6 py-16 text-black lg:px-16'>
      {/* Main Content */}
      <div className='mb-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24'>
        {/* Left Side - Company Info */}
        <div className='space-y-8'>
          <div>
            <h2 className='mb-4 text-4xl font-light leading-tight lg:text-5xl'>
              {footerDescription}
            </h2>
          </div>

          {/* Contact Info */}
          <div className='space-y-2'>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className='block text-lg transition-opacity duration-200 hover:opacity-70'
              aria-label={`Envoyer un email à ${CONTACT_INFO.emailLabel}`}>
              {CONTACT_INFO.emailLabel}
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className='block text-lg transition-opacity duration-200 hover:opacity-70'
              aria-label={`Appeler ${CONTACT_INFO.phoneLabel}`}>
              {CONTACT_INFO.phoneLabel}
            </a>
          </div>
        </div>

        {/* Right Side - Navigation */}
        <div className='lg:pl-16'>
          <nav className='space-y-4' aria-label='Navigation du pied de page'>
            {navigationLinks.map((link) => (
              <div key={`nav-${link.href}`}>
                <Link
                  href={link.href}
                  className='block text-lg transition-opacity duration-200 hover:opacity-70'>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Large SIDIKOFF Text */}
      <div className='mb-8'>
        <h1
          className='text-[clamp(3.5rem,-0.1429rem+18.2143vw,16.25rem)] font-bold leading-none tracking-wider text-[#EFEEF3]'
          aria-hidden='true'>
          SIDIKOFF
        </h1>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-200 pt-8'>
        <div className='flex flex-col items-center justify-between space-y-6 lg:flex-row lg:items-center lg:space-y-0'>
          {/* Copyright and Legal */}
          <div className='hidden text-sm text-gray-600 lg:block'>{COMPANY_INFO.copyright}</div>

          <div className='text-center text-sm text-gray-600 lg:hidden'>
            {COMPANY_INFO.description}
          </div>

          <div className='space-x-6 text-center'>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm uppercase text-gray-600 transition-opacity duration-200 hover:opacity-70'>
                {link.name}
                <p className='md:hidden'>
                  © Copyright {COMPANY_INFO.year} | {COMPANY_INFO.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
