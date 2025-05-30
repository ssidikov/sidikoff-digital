'use client'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()
  const pathname = usePathname()

  // Get current locale from pathname
  const currentLocale = pathname.startsWith('/fr') ? 'fr' : 
                       pathname.startsWith('/en') ? 'en' : 
                       pathname.startsWith('/ru') ? 'ru' : 'fr'

  // Generate locale-aware URLs
  const getLocalePath = (path: string) => {
    if (currentLocale === 'fr' && !pathname.startsWith('/fr')) {
      return path // Default French without prefix
    }
    return `/${currentLocale}${path}`
  }

  return (
    <footer className='border-t bg-card'>
      <div className='container mx-auto px-4 py-12'>
        {' '}
        <div className='flex flex-row justify-between gap-2'>
          <div className='flex items-center order-1'>            <a
              href={getLocalePath('/')}
              className='flex flex-col items-center leading-none text-gray-900 dark:text-white'>
              <Image
                src='/logo-sidikoff.svg'
                alt='Logo'
                width={200}
                height={100}
                priority
                className='w-auto max-w-48 h-10 md:h-14 dark:invert'
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </a>
          </div>{' '}
          <div className='hidden md:flex flex-col items-center text-sm text-muted-foreground order-3 md:order-2 min-w-80'>
            <div>
              © {currentYear} {t('footer.rights')}
            </div>            <Link
              href={getLocalePath('/mentions-legales')}
              className='text-xs text-muted-foreground hover:text-primary transition-colors mt-1'>
              {t('legal.title')}
            </Link>
          </div>
          <div className='flex items-center gap-4 order-2 md:order-3'>
            <Link
              href='https://github.com/ssidikov'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <Github className='w-5 h-5' />
            </Link>
            <Link
              href='https://www.linkedin.com/company/sidikoff-digital'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <Linkedin className='w-5 h-5' />
            </Link>
          </div>
        </div>{' '}
        <div className='md:hidden text-center mt-5 text-sm text-muted-foreground'>
          <div>
            © {currentYear} {t('footer.rights')}
          </div>          <Link
            href={getLocalePath('/mentions-legales')}
            className='text-xs text-muted-foreground hover:text-primary transition-colors mt-1 block'>
            {t('legal.title')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
