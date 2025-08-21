'use client'

import Link from 'next/link'

import { Locale } from '@/lib/i18n'
import { getLocalizedUrl } from '@/utils/navigation'

import { Dictionary } from '@/lib/dictionaries'

interface FooterProps {
  dictionary: Dictionary
  locale: Locale
}

export function Footer({ dictionary, locale }: FooterProps) {
  const navigationLinks = [
    {
      name: dictionary.navigation?.services || 'Explore Chargers',
      href: getLocalizedUrl('/#services', locale),
    },
    {
      name: dictionary.navigation?.portfolio || 'Solutions',
      href: getLocalizedUrl('/#portfolio', locale),
    },
    { name: dictionary.navigation?.blog || 'Blog', href: getLocalizedUrl('/blog', locale) },
    { name: dictionary.navigation?.faq || 'About us', href: getLocalizedUrl('/#faq', locale) },
    {
      name: dictionary.navigation?.contact || 'Contact',
      href: getLocalizedUrl('/#contact', locale),
    },
  ]

  const legalLinks = [
    {
      name: dictionary.common.legal_link || 'PRIVACY POLICY',
      href: getLocalizedUrl('/mentions-legales', locale),
    },
  ]

  return (
    <footer className='text-black py-16 px-6 lg:px-16 bg-[#FCFBFE]'>
      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16'>
        {/* Left Side - Company Info */}
        <div className='space-y-8'>
          <div>
            <h2 className='text-4xl lg:text-5xl font-light leading-tight mb-4'>
              {dictionary.footer?.description ||
                'Embrace the future of energy with our smart EV charging expertise.'}
            </h2>
          </div>

          {/* Contact Info */}
          <div className='space-y-2'>
            <a
              href='mailto:s.sidikoff@gmail.com'
              className='text-lg hover:opacity-70 transition-opacity duration-200 block'>
              s.sidikoff@gmail.com
            </a>
            <a
              href='tel:+33626932734'
              className='text-lg hover:opacity-70 transition-opacity duration-200 block'>
              +33 6 26 93 27 34
            </a>
          </div>
        </div>

        {/* Right Side - Navigation */}
        <div className='lg:pl-16'>
          <nav className='space-y-4'>
            {navigationLinks.map((link, index) => (
              <div key={`nav-${index}-${link.href}`}>
                <Link
                  href={link.href}
                  className='text-lg hover:opacity-70 transition-opacity duration-200 block'>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Large SIDIKOFF Text */}
      <div className='mb-8'>
        <h1 className='text-[clamp(3.5rem,-0.1429rem+18.2143vw,16.25rem)] font-bold leading-none tracking-wider text-[#EFEEF3]'>
          SIDIKOFF
        </h1>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-200 pt-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-6 lg:space-y-0'>
          {/* Copyright and Legal */}

          <div className='hidden lg:block text-sm text-gray-600'>
            © Copyright 2025 | SIDIKOFF DIGITAL | Agence web | Création de sites web | Développeur
            web freelance
          </div>
          <div className='lg:hidden text-sm text-center text-gray-600'>
            Agence web | Création de sites web <br /> Développeur web freelance
          </div>
          <div className='space-x-6 text-center'>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm text-gray-600 hover:opacity-70 transition-opacity duration-200 uppercase'>
                {link.name}
                <p className='md:hidden'>© Copyright 2025 | SIDIKOFF DIGITAL</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
