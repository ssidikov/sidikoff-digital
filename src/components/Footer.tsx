'use client'

import Link from 'next/link'

import { EmailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GitHubIcon } from '@/components/ui/icons'
import { Locale } from '@/lib/i18n'
import { motion } from 'framer-motion'
import { getLocalizedUrl } from '@/utils/navigation'

import { Dictionary } from '@/lib/dictionaries'

interface FooterProps {
  dictionary: Dictionary
  locale: Locale
}

const SocialIcon = ({
  name,
  href,
  children,
}: {
  name: string
  href: string
  children: React.ReactNode
}) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className='w-12 h-12 bg-gray-800 hover:bg-white border border-gray-700 hover:border-black rounded-xl flex items-center justify-center transition-all duration-300 group'
    aria-label={name}>
    <div className='text-gray-300 group-hover:text-black transition-colors duration-300'>
      {children}
    </div>
  </motion.a>
)

export function Footer({ dictionary, locale }: FooterProps) {
  const quickLinks = [
    { name: dictionary.navigation?.home || 'Accueil', href: getLocalizedUrl('/', locale) },
    {
      name: dictionary.navigation?.services || 'Services',
      href: getLocalizedUrl('/#services', locale),
    },
    {
      name: dictionary.navigation?.portfolio || 'Portfolio',
      href: getLocalizedUrl('/#portfolio', locale),
    },
    {
      name: dictionary.navigation?.pricing || 'Tarifs',
      href: getLocalizedUrl('/#pricing', locale),
    },
    { name: dictionary.navigation?.faq || 'FAQ', href: getLocalizedUrl('/#faq', locale) },
    { name: dictionary.navigation?.blog || 'Blog', href: getLocalizedUrl('/blog', locale) },
    {
      name: dictionary.navigation?.contact || 'Contact',
      href: getLocalizedUrl('/#contact', locale),
    },
  ]

  const legalLinks = [
    {
      name: dictionary.common.legal_link,
      href: getLocalizedUrl('/mentions-legales', locale),
    },
  ]

  const services = [
    {
      id: 'web-creation',
      name: dictionary.services?.web_creation?.title || 'Développement Web',
      href: getLocalizedUrl('/#services', locale),
    },
    {
      id: 'web-redesign',
      name: dictionary.services?.web_redesign?.title || 'Refonte de Site',
      href: getLocalizedUrl('/#services', locale),
    },
    {
      id: 'seo-optimization',
      name: dictionary.services?.seo_optimization?.title || 'SEO',
      href: getLocalizedUrl('/#services', locale),
    },
    {
      id: 'maintenance',
      name: dictionary.services?.maintenance?.title || 'Maintenance',
      href: getLocalizedUrl('/#services', locale),
    },
  ]

  return (
    <footer className='relative bg-black text-white'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]' />
      </div>

      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='container mx-auto px-4 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-1'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <Link
                  href={getLocalizedUrl('/', locale)}
                  className='inline-flex items-center justify-center mb-6'>
                  {/* <Image
                    src='/logo-sidikoff.webp'
                    alt='SIDIKOFF DIGITALDigital'
                    width={216}
                    height={60}
                    className='w-full h-full invert'
                  /> */}
                  <h2 className='text-2xl font-bold'>SIDIKOFF DIGITAL</h2>
                </Link>

                <p className='text-gray-400 text-sm leading-relaxed mb-6 max-w-sm'>
                  {dictionary.footer?.description ||
                    'Agence digitale spécialisée dans le développement web moderne et le design créatif.'}
                </p>

                {/* Social Links */}
                <div className='flex space-x-4'>
                  <SocialIcon name='LinkedIn' href='https://linkedin.com/in/sidikoff'>
                    <LinkedInIcon />
                  </SocialIcon>
                  <SocialIcon name='GitHub' href='https://github.com/sidikoff'>
                    <GitHubIcon />
                  </SocialIcon>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}>
                <h3 className='text-lg font-semibold mb-6 text-white'>
                  {dictionary.footer?.quick_links || 'Navigation'}
                </h3>
                <ul className='space-y-3'>
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>
                <h3 className='text-lg font-semibold mb-6 text-white'>
                  {dictionary.footer?.services_links || 'Services'}
                </h3>
                <ul className='space-y-3'>
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}>
                <h3 className='text-lg font-semibold mb-6 text-white'>
                  {dictionary.footer?.contact_info || 'Contact'}
                </h3>
                <div className='space-y-4'>
                  {/* Email */}
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 text-gray-400'>
                      <EmailIcon />
                    </div>
                    <a
                      href='mailto:s.sidikoff@gmail.com'
                      className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                      s.sidikoff@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 text-gray-400'>
                      <PhoneIcon />
                    </div>
                    <a
                      href='tel:+330625305923'
                      className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                      +33 06 25 30 59 23
                    </a>
                  </div>

                  {/* Location */}
                  <div className='flex items-start space-x-3'>
                    <div className='w-5 h-5 text-gray-400 mt-0.5'>
                      <LocationIcon />
                    </div>
                    <span className='text-gray-400 text-sm'>75016 Paris, France</span>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <div className='w-5 h-5 text-gray-400 mt-0.5'>
                      <LocationIcon />
                    </div>
                    <span className='text-gray-400 text-sm'>31000 Toulouse, France</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800'>
          <div className='container mx-auto px-4 py-6'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
              {/* Copyright */}
              <div className='text-gray-400 text-sm'>
                © 2025 SIDIKOFF DIGITALDigital. {dictionary.common.footer_copyright}
              </div>

              {/* Legal Links */}
              <div className='flex flex-wrap justify-center md:justify-end space-x-6'>
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
