'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { useLanguage } from '@/context/LanguageContext'

export default function LegalMentionsPage() {
  const { t } = useLanguage()

  return (
    <div className='scroll-smooth min-h-screen'>
      <Header />
      <Breadcrumbs />
      <main className='container mx-auto py-20 pt-24 md:pt-32 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold mb-8'>{t('legal.title')}</h1>

          {/* Company Information */}
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>{t('legal.company.title')}</h2>
            <div className='space-y-2 text-muted-foreground'>
              <p>
                <strong>{t('legal.company.name')}:</strong> {t('legal.company.nameValue')}
              </p>
              <p>
                <strong>{t('legal.company.form')}:</strong> {t('legal.company.formValue')}
              </p>
              <p>
                <strong>{t('legal.company.SIREN')}:</strong> {t('legal.company.SIRENValue')}
              </p>
              <p>
                <strong>{t('legal.company.address')}:</strong> {t('legal.company.addressValue')}
              </p>
              <p>
                <strong>{t('legal.company.phone')}:</strong> {t('legal.company.phoneValue')}
              </p>
              <p>
                <strong>{t('legal.company.email')}:</strong> {t('legal.company.emailValue')}
              </p>
            </div>
          </section>

          {/* Publication Director */}
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>{t('legal.director.title')}</h2>
            <p className='text-muted-foreground'>{t('legal.director.name')}</p>
          </section>

          {/* Hosting */}
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>{t('legal.hosting.title')}</h2>
            <div className='space-y-2 text-muted-foreground'>
              <p>
                <strong>{t('legal.hosting.provider')}:</strong> {t('legal.hosting.providerValue')}
              </p>
              <p>
                <strong>{t('legal.hosting.address')}:</strong> {t('legal.hosting.addressValue')}
              </p>
              <p>
                <strong>{t('legal.hosting.website')}:</strong>
                <a
                  href={t('legal.hosting.websiteValue')}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary hover:underline'>
                  {t('legal.hosting.websiteValue')}
                </a>
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>{t('legal.property.title')}</h2>
            <p className='text-muted-foreground'>{t('legal.property.content')}</p>
          </section>

          {/* Personal Data Protection */}
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>{t('legal.data.title')}</h2>
            <p className='text-muted-foreground'>{t('legal.data.content')}</p>
          </section>

          {/* Cookies */}
          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>{t('legal.cookies.title')}</h2>
            <p className='text-muted-foreground'>{t('legal.cookies.content')}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
