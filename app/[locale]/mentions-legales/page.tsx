'use client'

import { useEffect } from 'react'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

const locales = ['fr', 'en', 'ru']

export default function LocaleLegalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = React.use(params)

  const { locale } = resolvedParams
  const { setLanguage, t } = useLanguage()
  useEffect(() => {
    if (!locales.includes(locale)) {
      notFound()
    }
    setLanguage(locale as 'fr' | 'en' | 'ru')
  }, [locale, setLanguage])

  if (!locales.includes(locale)) {
    notFound()
  }
  return (
    <div className='scroll-smooth min-h-screen'>
      <Header />
      <main className='pt-20'>
        <div className='container mx-auto px-4 py-8'>
          <Breadcrumbs />

          <div className='mt-8 max-w-4xl mx-auto'>
            <h1 className='text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-foreground dark:via-primary dark:to-primary/80 bg-clip-text text-transparent'>
              {t('legal.title')}
            </h1>

            <div className='prose prose-lg dark:prose-invert max-w-none'>
              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4'>{t('legal.company.title')}</h2>
                <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg'>
                  <p>
                    <strong>{t('legal.company.name')}:</strong> {t('legal.company.nameValue')}
                  </p>
                  <p>
                    <strong>{t('legal.company.form')}:</strong> {t('legal.company.formValue')}
                  </p>
                  <p>
                    <strong>Email:</strong> s.sidikoff@gmail.com
                  </p>
                  <p>
                    <strong>{t('legal.company.phone')}:</strong> +33 6 26 93 27 34
                  </p>
                  <p>
                    <strong>{t('legal.company.address')}:</strong> Paris, France
                  </p>
                </div>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4'>{t('legal.hosting.title')}</h2>
                <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg'>
                  <p>
                    <strong>{t('legal.hosting.provider')}:</strong> Vercel Inc.
                  </p>
                  <p>
                    <strong>{t('legal.hosting.address')}:</strong> 440 N Barranca Ave #4133, Covina,
                    CA 91723, USA
                  </p>
                  <p>
                    <strong>Website:</strong>
                    <a
                      href='https://vercel.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary hover:underline'>
                      vercel.com
                    </a>
                  </p>
                </div>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4'>{t('legal.data.title')}</h2>
                <div className='space-y-4'>
                  <p>{t('legal.data.collection')}</p>
                  <p>{t('legal.data.usage')}</p>
                  <p>{t('legal.data.cookies')}</p>
                  <p>{t('legal.data.rights')}</p>
                </div>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4'>{t('legal.contact.title')}</h2>
                <p>{t('legal.contact.text')}</p>
                <p className='mt-4'>
                  <strong>Email:</strong>
                  <a href='mailto:s.sidikoff@gmail.com' className='text-primary hover:underline'>
                    s.sidikoff@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
