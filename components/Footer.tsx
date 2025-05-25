'use client'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className='border-t bg-card'>
      <div className='container mx-auto px-4 py-12'>
        {' '}
        <div className='flex flex-row justify-between gap-2'>
          <div className='flex items-center order-1'>
            <a
              href='/'
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
          </div>
          <div className='hidden md:flex items-center text-sm text-muted-foreground order-3 md:order-2 min-w-80'>
            © {currentYear} {t('footer.rights')}
          </div>
          <div className='flex items-center gap-4 order-2 md:order-3'>
            <Link
              href='https://github.com/ssidikov'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <Github className='w-5 h-5' />
            </Link>
            <Link
              href='https://www.linkedin.com/in/sardorbeksidikov'
              className='text-muted-foreground hover:text-primary transition-colors'>
              <Linkedin className='w-5 h-5' />
            </Link>
          </div>
        </div>
        <div className='md:hidden text-center mt-5 text-sm text-muted-foreground'>
          © {currentYear} {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
