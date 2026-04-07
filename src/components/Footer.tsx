import Link from 'next/link'

import common from '@/locales/fr/common.json'
import { getLocalizedUrl } from '@/utils/navigation'

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
const createCoreLinks = (): FooterLink[] => [
  {
    name: common.navigation?.services || 'Services',
    href: getLocalizedUrl('/#services'),
  },
  {
    name: common.navigation?.portfolio || 'Portfolio',
    href: getLocalizedUrl('/projects'),
  },
  {
    name: common.navigation?.blog || 'Blog',
    href: getLocalizedUrl('/blog'),
  },
  {
    name: common.navigation?.faq || 'FAQ',
    href: getLocalizedUrl('/#faq'),
  },
  {
    name: common.navigation?.contact || 'Contact',
    href: getLocalizedUrl('/#contact'),
  },
]

/**
 * Generate SEO Niche/Expertise links
 */
const createSecteurLinks = (): FooterLink[] => [
  { name: 'Site E-commerce', href: getLocalizedUrl('/services/creation-site-ecommerce') },
  {
    name: 'Site Agence Voyage',
    href: getLocalizedUrl('/services/creation-site-internet-agence-voyage'),
  },
  {
    name: 'Site Médical',
    href: getLocalizedUrl('/services/creation-site-internet-medecin'),
  },
  {
    name: 'Site Freelance',
    href: getLocalizedUrl('/services/creation-site-internet-freelance'),
  },
  {
    name: 'Site Photographe',
    href: getLocalizedUrl('/services/creation-site-internet-photographe'),
  },
  {
    name: 'Site Boulangerie',
    href: getLocalizedUrl('/services/creation-site-internet-boulangerie'),
  },
  {
    name: 'Site Café & Resto',
    href: getLocalizedUrl('/services/creation-site-internet-cafe-paris'),
  },
  {
    name: 'Sites Web pour Restaurants',
    href: getLocalizedUrl('/services/restaurant-websites'),
  },
  {
    name: 'Site Barbershop',
    href: getLocalizedUrl('/services/creation-site-internet-barbershop'),
  },
]

/**
 * Generate SEO Location/Ville links
 */
const createVilleLinks = (): FooterLink[] => [
  { name: 'Agence Web Villeurbanne', href: getLocalizedUrl('/services/agence-web-villeurbanne') },
  { name: 'Agence Web Lyon', href: getLocalizedUrl('/services/agence-web-lyon') },
  { name: 'Agence Web Paris', href: getLocalizedUrl('/services/agence-web-paris') },
  { name: 'Agence Web Paris 15', href: getLocalizedUrl('/services/agence-web-paris-15') },
  {
    name: 'Site Web Paris 16',
    href: getLocalizedUrl('/services/creation-site-internet-paris-16'),
  },
  {
    name: 'Site Web Boulogne',
    href: getLocalizedUrl('/services/creation-site-internet-boulogne-billancourt'),
  },
  { name: 'Site Web Lyon', href: getLocalizedUrl('/services/creation-site-internet-lyon') },
  {
    name: 'Site Web Toulouse',
    href: getLocalizedUrl('/services/creation-site-internet-toulouse'),
  },
  {
    name: 'Site Web Villeurbanne',
    href: getLocalizedUrl('/services/creation-site-web-villeurbanne'),
  },
  {
    name: 'Site Web Caluire',
    href: getLocalizedUrl('/services/creation-site-web-caluire-et-cuire'),
  },
]

/**
 * Generate legal links
 */
const createLegalLinks = (): FooterLink[] => [
  {
    name: common.common?.legal_link || 'Mentions Légales',
    href: getLocalizedUrl('/mentions-legales'),
  },
]

/**
 * Footer component with navigation, contact info, and company branding
 * Features responsive design and accessible links
 */
export function Footer({ isDark = false }: { isDark?: boolean }) {
  const coreLinks = createCoreLinks()
  const secteurLinks = createSecteurLinks()
  const villeLinks = createVilleLinks()
  const legalLinks = createLegalLinks()

  const footerDescription =
    common.footer?.description ||
    'Votre partenaire digital pour créer des sites web modernes et performants.'

  return (
    <footer
      className={
        isDark
          ? 'bg-slate-950 px-6 py-20 text-slate-200 lg:px-16'
          : 'bg-[#FCFBFE] px-6 py-20 text-black lg:px-16'
      }>
      {/* Main Content Grid */}
      <div className='mb-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
        {/* Left Side - Brand & Contact */}
        <div className='space-y-8 lg:pr-8'>
          <div>
            <h2
              className={`text-xl font-light tracking-tight leading-snug ${isDark ? 'text-white' : 'text-[#112D4E]'}`}>
              {footerDescription}
            </h2>
          </div>

          <div className={`space-y-3 ${isDark ? 'text-slate-300' : 'text-[#112D4E]/80'}`}>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className={`block text-lg transition-colors ${isDark ? 'hover:text-blue-400' : 'hover:text-[#3377FF]'}`}
              aria-label={`Envoyer un email à ${CONTACT_INFO.emailLabel}`}>
              {CONTACT_INFO.emailLabel}
            </a>
            <div className='block text-lg'>{CONTACT_INFO.address}</div>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={`block text-lg transition-colors ${isDark ? 'hover:text-blue-400' : 'hover:text-[#3377FF]'}`}
              aria-label={`Appeler ${CONTACT_INFO.phoneLabel}`}>
              {CONTACT_INFO.phoneLabel}
            </a>
          </div>
        </div>

        {/* Column 2: Core Navigation */}
        <div className='lg:pl-8'>
          <h3
            className={`mb-8 text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-[#112D4E]/40'}`}>
            Menu
          </h3>
          <nav className='space-y-4' aria-label='Navigation principale'>
            {coreLinks.map((link) => (
              <div key={`nav-${link.href}`}>
                <Link
                  href={link.href}
                  className={`block text-lg font-medium transition-all hover:-translate-y-0.5 ${isDark ? 'text-slate-200 hover:text-blue-400' : 'text-[#112D4E] hover:text-[#3377FF]'}`}>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Column 3: Secteurs / Expertises (SEO) */}
        <div>
          <h3
            className={`mb-8 text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-[#112D4E]/40'}`}>
            Expertises
          </h3>
          <nav className='space-y-4' aria-label='Nos secteurs d expertise'>
            {secteurLinks.map((link) => (
              <div key={`nav-${link.href}`}>
                <Link
                  href={link.href}
                  className={`block text-[15px] font-medium transition-all hover:-translate-y-0.5 ${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-[#112D4E]/60 hover:text-[#3377FF]'}`}>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Column 4: Villes (SEO) */}
        <div>
          <h3
            className={`mb-8 text-xs font-semibold uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-[#112D4E]/40'}`}>
            Villes
          </h3>
          <nav className='space-y-4' aria-label='Nos agences locales'>
            {villeLinks.map((link) => (
              <div key={`nav-${link.href}`}>
                <Link
                  href={link.href}
                  className={`block text-[15px] font-medium transition-all hover:-translate-y-0.5 ${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-[#112D4E]/60 hover:text-[#3377FF]'}`}>
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Large SIDIKOFF Text */}
      <div className='flex w-full justify-center overflow-hidden'>
        <div
          className={`w-full text-[clamp(4rem,21.5vw,999rem)] font-bold leading-[0.85] tracking-tighter whitespace-nowrap ${isDark ? 'text-white/[0.03]' : 'text-[#112D4E]/[0.03]'}`}
          aria-hidden='true'>
          SIDIKOFF
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-[#112D4E]/10'}`}>
        <div className='flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0'>
          <div
            className={`hidden text-sm uppercase tracking-wider lg:block ${isDark ? 'text-slate-500' : 'text-[#112D4E]/40'}`}>
            {COMPANY_INFO.copyright}
          </div>

          <div
            className={`text-center text-sm uppercase tracking-wider lg:hidden ${isDark ? 'text-slate-500' : 'text-[#112D4E]/40'}`}>
            {COMPANY_INFO.copyright}
          </div>

          <div className='flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0'>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition-colors ${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-[#112D4E]/60 hover:text-[#3377FF]'}`}>
                {link.name}
              </Link>
            ))}
            <Link
              href='/politique-de-confidentialite'
              className={`text-sm uppercase tracking-wider transition-colors ${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-[#112D4E]/60 hover:text-[#3377FF]'}`}>
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
