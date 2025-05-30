'use client'

import { useEffect } from 'react'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { notFound } from 'next/navigation'
import { projects } from '@/data/portfolio-data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredData from '@/components/StructuredData'
import { generateCreativeWorkSchema } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'

const locales = ['fr', 'en', 'ru']

export default function LocaleProjectPage({ params }: { params: Promise<{ locale: string; id: string }> | { locale: string; id: string } }) {
  // Handle both Promise and direct params for Next.js 15+ compatibility
  const resolvedParams = React.use(
    typeof (params as any).then === 'function' 
      ? params as Promise<{ locale: string; id: string }> 
      : Promise.resolve(params as { locale: string; id: string })
  )
  
  const { locale, id } = resolvedParams
  const { setLanguage, t, language } = useLanguage()

  useEffect(() => {
    if (!locales.includes(locale)) {
      notFound()
    }
    setLanguage(locale as 'fr' | 'en' | 'ru')
  }, [locale, setLanguage])

  if (!locales.includes(locale)) {
    notFound()
  }
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const projectSchema = generateCreativeWorkSchema({
    name: project.title[language],
    description: project.description[language],
    url: project.link,
    image: `https://www.sidikoff.com${project.image}`,
    technologies: project.technologies,
    category: 'Web Development',
  })
  return (
    <>
      <Header />
      <main className='pt-20'>
        <div className='container mx-auto px-4 py-8'>
          <Breadcrumbs />

          <div className='mt-8 max-w-4xl mx-auto'>
            <Link
              href={`/${locale}/projects`}
              className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6'>
              <ArrowLeft className='w-4 h-4' />
              {t('common.back')}
            </Link>

            <div className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden'>
              <div className='relative h-64 md:h-96'>
                <Image
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  className='object-cover'
                />
              </div>

              <div className='p-8'>
                <h1 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-foreground dark:via-primary dark:to-primary/80 bg-clip-text text-transparent'>
                  {project.title[language]}
                </h1>

                <p className='text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                  {project.longDescription?.[language] || project.description[language]}
                </p>

                <div className='mb-6'>
                  <h3 className='text-xl font-semibold mb-3'>{t('portfolio.technologies')}</h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors'>
                    {t('portfolio.viewProject')}
                    <ExternalLink className='w-4 h-4' />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StructuredData type='all' customData={projectSchema} />
    </>
  )
}
