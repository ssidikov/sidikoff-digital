'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { projects } from '@/data/portfolio-data'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id) || null
}

export default function ProjectPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>
}) {
  // Next.js 14+ migration: unwrap params if it's a Promise
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actualParams =
    typeof (params as any).then === 'function'
      ? React.use(params as Promise<{ id: string }>)
      : (params as { id: string })

  const { t, language } = useLanguage()
  const router = useRouter()
  const { scrollToSection } = useSmoothScroll()
  const project = getProjectById(actualParams.id)

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/projects')
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push('/')
    setTimeout(() => {
      scrollToSection('contact')
    }, 150)
  }

  if (!project) {
    return <div className='text-center py-12'>{t('project.notFound')}</div>
  }

  // Get localized project data
  const localizedProject = {
    ...project,
    title:
      typeof project.title === 'object'
        ? project.title[language] || project.title.en
        : project.title,
    longDescription:
      typeof project.longDescription === 'object'
        ? project.longDescription[language] || project.longDescription.en
        : project.longDescription,
  }
  return (
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto px-4 pt-24 md:pt-32 min-h-screen'>
        <Breadcrumbs />
        <div className='float-right'>
          <button
            onClick={handleBackClick}
            className='px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
            ← {t('portfolio.viewAll')}
          </button>
        </div>
        <article className='grid md:grid-cols-2 gap-12 py-10 md:py-20 w-full'>
          <div className='relative h-[400px] rounded-xl overflow-hidden'>
            <Image
              src={localizedProject.image || '/placeholder.svg'}
              alt={localizedProject.title}
              fill
              className='object-cover object-top'
            />
          </div>
          <div className='space-y-6 flex flex-col justify-between'>
            <h1 className='text-4xl font-bold gradient-text'>{localizedProject.title}</h1>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              {localizedProject.longDescription}
            </p>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Technologies</h2>
              <div className='flex flex-wrap gap-2'>
                {localizedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>{' '}
            <div className='flex flex-row gap-4 justify-between md:justify-normal items-center'>
              <a href='/#contact' onClick={handleContactClick} className='w-1/2 md:w-48'>
                <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg flex items-center justify-center mx-auto'>
                  {t('hero.contact')}
                </button>
              </a>

              <a
                href={localizedProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='w-1/2 md:w-48'>
                <button className='w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium border border-indigo-500 text-indigo-600 dark:text-indigo-300 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors flex items-center justify-center mx-auto'>
                  {t('portfolio.viewProject')}
                </button>
              </a>
            </div>
          </div>
        </article>{' '}
      </main>
      <Footer />
    </div>
  )
}
