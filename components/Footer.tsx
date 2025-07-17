'use client'
import Image from 'next/image'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { usePathname } from 'next/navigation'
import { useTariff } from '@/context/TariffContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const pathname = usePathname()
  const { setSelectedTariff } = useTariff()

  // Get current locale from pathname
  const currentLocale = pathname.startsWith('/fr')
    ? 'fr'
    : pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/ru')
    ? 'ru'
    : 'fr'

  // Generate locale-aware URLs
  const getLocalePath = (path: string) => {
    if (currentLocale === 'fr' && !pathname.startsWith('/fr')) {
      return path // Default French without prefix
    }
    return `/${currentLocale}${path}`
  }

  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServiceClick = (service: string) => {
    setSelectedTariff(service)
    handleContactClick()
  }

  return (
    <footer className='bg-card border-t'>
      <div className='container mx-auto px-4 py-12'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Company Logo and Description */}
          <div className='lg:col-span-1'>
            <Link href={getLocalePath('/')} className='flex items-center mb-4'>
              <Image
                src='/logo-sidikoff.svg'
                alt='SIDIKOFF DIGITAL - Agence Web Paris'
                width={200}
                height={60}
                loading='lazy'
                className='w-full h-12 dark:invert'
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </Link>
            <p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
              {t('footer.rights')}
            </p>
            <div className='flex items-center gap-3'>
              <Link
                href='https://github.com/ssidikov'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted'
                aria-label='GitHub'>
                <Github className='w-5 h-5' />
              </Link>
              <Link
                href='https://www.linkedin.com/company/sidikoff-digital'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted'
                aria-label='LinkedIn'>
                <Linkedin className='w-5 h-5' />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className='font-semibold text-foreground mb-4 text-sm uppercase tracking-wide'>
              {t('footer.navigation.title')}
            </h3>
            <nav className='space-y-2'>
              <Link
                href={getLocalePath('/')}
                className='block text-sm text-muted-foreground hover:text-primary transition-colors py-1'>
                {t('footer.navigation.home')}
              </Link>
              <Link
                href={getLocalePath('/#about')}
                className='block text-sm text-muted-foreground hover:text-primary transition-colors py-1'>
                {t('footer.navigation.about')}
              </Link>
              <Link
                href={getLocalePath('/#services')}
                className='block text-sm text-muted-foreground hover:text-primary transition-colors py-1'>
                {t('footer.navigation.services')}
              </Link>
              <Link
                href={getLocalePath('/#portfolio')}
                className='block text-sm text-muted-foreground hover:text-primary transition-colors py-1'>
                {t('footer.navigation.portfolio')}
              </Link>
              <Link
                href={getLocalePath('/#pricing')}
                className='block text-sm text-muted-foreground hover:text-primary transition-colors py-1'>
                {t('footer.navigation.pricing')}
              </Link>
              <Link
                href={getLocalePath('/blog')}
                className='block text-sm text-muted-foreground hover:text-primary transition-colors py-1'>
                {t('footer.navigation.blog')}
              </Link>
              <Link
                href={getLocalePath('/#faq')}
                className='block text-sm text-muted-foreground hover:text-primary transition-colors py-1'>
                {t('footer.navigation.faq')}
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-foreground mb-4 text-sm uppercase tracking-wide'>
              {t('footer.services.title')}
            </h3>
            <nav className='space-y-2'>
              <button
                onClick={() => handleServiceClick(t('prices.customDescription'))}
                className='block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 w-full'>
                {t('footer.services.webCreation')}
              </button>
              <button
                onClick={() => handleServiceClick(t('prices.customDescription'))}
                className='block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 w-full'>
                {t('footer.services.redesign')}
              </button>
              <button
                onClick={() => handleServiceClick(t('prices.customDescription'))}
                className='block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 w-full'>
                {t('footer.services.seo')}
              </button>
              <button
                onClick={() => handleServiceClick(t('prices.maintenanceSupport.title'))}
                className='block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 w-full'>
                {t('footer.services.maintenance')}
              </button>
              <button
                onClick={() => handleServiceClick(t('prices.customDescription'))}
                className='block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 w-full'>
                {t('footer.services.webApps')}
              </button>
              <button
                onClick={() => handleServiceClick(t('prices.customDescription'))}
                className='block text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1 w-full'>
                {t('footer.services.ecommerce')}
              </button>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className='font-semibold text-foreground mb-4 text-sm uppercase tracking-wide'>
              {t('footer.contact.title')}
            </h3>
            <div className='space-y-3 mb-4'>
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 text-muted-foreground flex-shrink-0' />
                <a
                  href={`mailto:${t('footer.contact.email')}`}
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                  {t('footer.contact.email')}
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-4 h-4 text-muted-foreground flex-shrink-0' />
                <a
                  href={`tel:${t('footer.contact.phone')}`}
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                  {t('footer.contact.phone')}
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin className='w-4 h-4 text-muted-foreground flex-shrink-0' />
                <span className='text-sm text-muted-foreground'>
                  {t('footer.contact.location')}
                </span>
              </div>
            </div>
            <button
              onClick={handleContactClick}
              className='w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors'>
              {t('footer.contact.button')}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-center md:text-left text-sm text-muted-foreground'>
              © {currentYear} SIDIKOFF DIGITAL
            </div>
            <Link
              href={getLocalePath('/mentions-legales')}
              className='text-sm text-muted-foreground hover:text-primary transition-colors'>
              {t('legal.title')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
