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
  address: '69100 Villeurbanne, France',
} as const

// Copyright and company information
const COMPANY_INFO = {
  name: 'SIDIKOFF DIGITAL',
  year: new Date().getFullYear(),
  description: 'Agence web | Création de sites web | Développeur web freelance',
  copyright: `© Copyright ${new Date().getFullYear()} | SIDIKOFF DIGITAL | Agence web | Création de sites web | Développeur web freelance`,
} as const

/**
 * Generate core navigation links
 */
const createCoreLinks = (dictionary: Dictionary, locale: Locale): FooterLink[] => [
  {
    name: dictionary.navigation?.services || 'Services',
    href: getLocalizedUrl('/#services', locale),
  },
  {
    name: dictionary.navigation?.portfolio || 'Portfolio',
    href: getLocalizedUrl('/portfolio', locale),
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
 * Generate SEO Niche/Expertise links
 */
const createSecteurLinks = (locale: Locale): FooterLink[] => [
  { name: 'Site E-commerce', href: getLocalizedUrl('/services/creation-site-ecommerce', locale) },
  {
    name: 'Site Agence Voyage',
    href: getLocalizedUrl('/services/creation-site-internet-agence-voyage', locale),
  },
  {
    name: 'Site Médical',
    href: getLocalizedUrl('/services/creation-site-internet-medecin', locale),
  },
  {
    name: 'Site Freelance',
    href: getLocalizedUrl('/services/creation-site-internet-freelance', locale),
  },
  {
    name: 'Site Photographe',
    href: getLocalizedUrl('/services/creation-site-internet-photographe', locale),
  },
  {
    name: 'Site Boulangerie',
    href: getLocalizedUrl('/services/creation-site-internet-boulangerie', locale),
  },
  {
    name: 'Site Café & Resto',
    href: getLocalizedUrl('/services/creation-site-internet-cafe-paris', locale),
  },
  {
    name: 'Site Barbershop',
    href: getLocalizedUrl('/services/creation-site-internet-barbershop', locale),
  },
]

/**
 * Generate SEO Location/Ville links
 */
const createVilleLinks = (locale: Locale): FooterLink[] => [
  { name: 'Agence Web Paris', href: getLocalizedUrl('/services/agence-web-paris', locale) },
  { name: 'Agence Web Paris 15', href: getLocalizedUrl('/services/agence-web-paris-15', locale) },
  {
    name: 'Site Web Paris 16',
    href: getLocalizedUrl('/services/creation-site-internet-paris-16', locale),
  },
  {
    name: 'Site Web Boulogne',
    href: getLocalizedUrl('/services/creation-site-internet-boulogne-billancourt', locale),
  },
  { name: 'Site Web Lyon', href: getLocalizedUrl('/services/creation-site-internet-lyon', locale) },
  {
    name: 'Site Web Toulouse',
    href: getLocalizedUrl('/services/creation-site-internet-toulouse', locale),
  },
  {
    name: 'Site Web Villeurbanne',
    href: getLocalizedUrl('/services/creation-site-web-villeurbanne', locale),
  },
  {
    name: 'Site Web Caluire',
    href: getLocalizedUrl('/services/creation-site-web-caluire-et-cuire', locale),
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
  const coreLinks = createCoreLinks(dictionary, locale)
  const secteurLinks = createSecteurLinks(locale)
  const villeLinks = createVilleLinks(locale)
  const legalLinks = createLegalLinks(dictionary, locale)

  const footerDescription =
    dictionary.footer?.description ||
    'Votre partenaire digital pour créer des sites web modernes et performants.'

  return (
    <footer className='bg-[#FCFBFE] px-6 py-20 text-black lg:px-16'>
      {/* Main Content Grid */}
      <div className='mb-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
        {/* Left Side - Brand & Contact */}
        <div className='space-y-8 lg:pr-8'>
          <div>
            <h2 className='text-xl font-light tracking-tight leading-snug text-[#112D4E]'>
              {footerDescription}
            </h2>
          </div>

          <div className='space-y-3 text-[#112D4E]/80'>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className='block text-lg hover:text-[#3377FF] transition-colors'
              aria-label={`Envoyer un email à ${CONTACT_INFO.emailLabel}`}>
              {CONTACT_INFO.emailLabel}
            </a>
            <div className='block text-lg'>{CONTACT_INFO.address}</div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className='block text-lg hover:text-[#3377FF] transition-colors'
              aria-label={`Appeler ${CONTACT_INFO.phoneLabel}`}>
              {CONTACT_INFO.phoneLabel}
            </a>
          </div>
        </div>

        {/* Column 2: Core Navigation */}
        <div className='lg:pl-8'>
          <h3 className='mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#112D4E]/40'>
            Menu
          </h3>
          <nav className='space-y-4' aria-label='Navigation principale'>
            {coreLinks.map((link) => (
              <div key={`nav-${link.href}`}>
                <Link
                  href={link.href}
                  className='block text-lg font-medium text-[#112D4E] transition-all hover:text-[#3377FF] hover:-translate-y-0.5'>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Column 3: Secteurs / Expertises (SEO) */}
        <div>
          <h3 className='mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#112D4E]/40'>
            Expertises
          </h3>
          <nav className='space-y-4' aria-label='Nos secteurs d expertise'>
            {secteurLinks.map((link) => (
              <div key={`nav-${link.href}`}>
                <Link
                  href={link.href}
                  className='block text-[15px] font-medium text-[#112D4E]/60 transition-all hover:text-[#3377FF] hover:-translate-y-0.5'>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Column 4: Villes (SEO) */}
        <div>
          <h3 className='mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#112D4E]/40'>
            Villes
          </h3>
          <nav className='space-y-4' aria-label='Nos agences locales'>
            {villeLinks.map((link) => (
              <div key={`nav-${link.href}`}>
                <Link
                  href={link.href}
                  className='block text-[15px] font-medium text-[#112D4E]/60 transition-all hover:text-[#3377FF] hover:-translate-y-0.5'>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Large SIDIKOFF Text */}
      <div className='mb-12 overflow-hidden'>
        <div
          className='text-[clamp(3.5rem,-0.1429rem+16vw,17rem)] font-bold leading-[0.85] tracking-tight text-[#112D4E]/[0.03]'
          aria-hidden='true'>
          SIDIKOFF
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-[#112D4E]/10 pt-8'>
        <div className='flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0'>
          <div className='hidden text-sm uppercase tracking-wider text-[#112D4E]/40 lg:block'>
            {COMPANY_INFO.copyright}
          </div>

          <div className='text-center text-sm uppercase tracking-wider text-[#112D4E]/40 lg:hidden'>
            {COMPANY_INFO.copyright}
          </div>

          <div className='flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0'>
            <Link
              href='/mentions-legales'
              className='text-sm uppercase tracking-wider text-[#112D4E]/60 transition-colors hover:text-[#3377FF]'>
              Mentions Légales
            </Link>
            <Link
              href='/politique-de-confidentialite'
              className='text-sm uppercase tracking-wider text-[#112D4E]/60 transition-colors hover:text-[#3377FF]'>
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
