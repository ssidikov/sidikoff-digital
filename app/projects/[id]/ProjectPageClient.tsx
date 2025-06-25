'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredData from '@/components/StructuredData'
import { useLanguage } from '@/context/LanguageContext'
import { generateCreativeWorkSchema } from '@/lib/seo'

interface Project {
  id: string
  title: { fr: string; en: string; ru: string }
  description: { fr: string; en: string; ru: string }
  longDescription?: { fr: string; en: string; ru: string }
  image: string
  technologies: string[]
  link?: string
}

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const { t, language } = useLanguage()
  const router = useRouter()
  // const { scrollToSection } = useSmoothScroll() // Removed unused function

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Check if user came from a localized URL or main site
    const referrer = document.referrer
    if (referrer.includes('/fr/projects') || referrer.includes('/en/projects') || referrer.includes('/ru/projects')) {
      // If coming from localized projects page, go back to localized projects
      router.push(`/${language}/projects`)
    } else {
      // Otherwise go to main projects page
      router.push('/projects')
    }
  }

  // Get localized project data
  const localizedProject = {
    ...project,
    title:
      typeof project.title === 'object'
        ? project.title[language] || project.title.fr
        : project.title,
    description:
      typeof project.description === 'object'
        ? project.description[language] || project.description.fr
        : project.description,
    longDescription:
      typeof project.longDescription === 'object'
        ? project.longDescription[language] || project.longDescription.fr
        : project.longDescription,
  }

  const projectSchema = generateCreativeWorkSchema({
    name: localizedProject.title,
    description: localizedProject.description,
    url: project.link,
    image: `https://www.sidikoff.com${project.image}`,
    technologies: project.technologies,
    category: 'Web Development',
  })

  return (
    <div className='scroll-smooth min-h-screen'>
      <Header />
      <main className='container mx-auto px-4 pt-24 md:pt-32 min-h-screen'>
        <Breadcrumbs />
        <div className='mt-8 max-w-4xl mx-auto float-right'>
          <button
            onClick={handleBackClick}
            className='px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
            ← {t('common.back')}
          </button>
        </div>
        <article className='grid md:grid-cols-2 gap-12 py-10 md:py-20 w-full'>
          <div className='relative h-[400px] rounded-xl overflow-hidden'>
            <Image
              src={project.image}
              alt={localizedProject.title}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover object-top'
            />
          </div>
          <div className='space-y-6 flex flex-col justify-between'>
            <h1 className='text-4xl font-bold gradient-text'>{localizedProject.title}</h1>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              {localizedProject.longDescription || localizedProject.description}
            </p>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>{t('portfolio.technologies')}</h2>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className='bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-between md:justify-normal items-center'>
              <Link href='/#contact-form' className='w-full md:w-48'>
                <button className='group relative w-full md:min-w-[120px] md:max-w-[220px] px-6 py-4 md:py-3 text-base font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <span className='text-m relative z-10 transition-all duration-300 group-hover:tracking-wide'>
                    {t('hero.contact')}
                  </span>
                  <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12' />
                </button>
              </Link>

              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full md:w-48'>
                  <button className='group relative w-full md:min-w-[120px] md:max-w-[220px] px-6 py-4 md:py-3 text-base font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-2 border-primary/20 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center mx-auto overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <span className='text-m relative z-10 transition-all duration-300 group-hover:tracking-wide'>
                      {t('portfolio.viewProject')}
                    </span>
                    <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12' />
                  </button>
                </a>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <StructuredData type='all' customData={projectSchema} />
    </div>
  )
}
