'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { projects } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

interface PortfolioProps {
  title?: string
  subtitle?: string
  showAllProjects?: boolean
}

export default function Portfolio({ title, subtitle, showAllProjects = false }: PortfolioProps) {
  const [visibleProjects, setVisibleProjects] = useState(4)
  const { t, language } = useLanguage()
  const { scrollToSection } = useSmoothScroll()
  const router = useRouter()
  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Используем Next.js router для навигации без перезагрузки страницы
    router.push('/')
    // Небольшая задержка для завершения навигации, затем скролл к секции portfolio
    setTimeout(() => {
      scrollToSection('portfolio')
    }, 150)
  }

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, projects.length))
  }

  // Get localized projects based on current language
  const getLocalizedProjects = () => {
    return projects.map((project) => ({
      ...project,
      title:
        typeof project.title === 'object'
          ? project.title[language] || project.title.en
          : project.title,
      description:
        typeof project.description === 'object'
          ? project.description[language] || project.description.en
          : project.description,
      longDescription:
        typeof project.longDescription === 'object'
          ? project.longDescription[language] || project.longDescription.en
          : project.longDescription,
    }))
  }

  const localizedProjects = getLocalizedProjects()
  return (
    <section id='portfolio' className='container mx-auto px-4'>
      <AnimatedSection className='flex justify-between mb-12'>
        {' '}
        <div>
          <h2 className='text-lg text-primary mb-2'>{title || t('portfolio.title')}</h2>
          <h3 className='text-3xl font-bold'>{subtitle || t('portfolio.subtitle')}</h3>
        </div>
        {showAllProjects && (
          <button
            onClick={handleHomeClick}
            className='h-fit px-4 py-2 text-sm border rounded-md bg-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'>
            ← {t('nav.home')}
          </button>
        )}
        {!showAllProjects && (
          <Link href='/projects'>
            <button className='w-full px-4 py-2 text-sm font-medium bg-transparent border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
              {t('portfolio.viewAll')}
            </button>{' '}
          </Link>
        )}
      </AnimatedSection>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {localizedProjects
          .slice(0, showAllProjects ? localizedProjects.length : visibleProjects)
          .map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className='overflow-hidden hover:shadow-md dark:hover:shadow-slate-900 space-y-4 bg-white/5 backdrop-blur-md border rounded flex flex-col h-full min-h-[420px] smooth-animation'>
                <div className='relative h-48'>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className='object-cover object-top'
                  />
                </div>
                <div className='p-6 flex flex-col flex-1'>
                  <h4 className='font-semibold mb-2 text-card-foreground'>{project.title}</h4>
                  <p className='text-sm text-muted-foreground min-h-20 flex-1'>
                    {project.description}
                  </p>{' '}
                  <div className='mt-4'>
                    <Link href={`/projects/${project.id}`}>
                      <button className='w-full px-4 py-2 text-sm font-medium bg-transparent border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                        {t('portfolio.viewDetails')} →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
      </div>
      {!showAllProjects && visibleProjects < localizedProjects.length && (
        <AnimatedSection className='mt-8 text-center'>
          <button
            onClick={loadMoreProjects}
            className='px-4 py-2 text-sm text-white bg-primary rounded-md hover:bg-indigo-600 transition-colors'>
            {t('portfolio.showMore')}
          </button>
        </AnimatedSection>
      )}
    </section>
  )
}

// When passing project to <Link href={`/projects/${project.id}`}> or to a details page,
// make sure the details page also uses the same logic to localize fields based on language.
// If you use getStaticProps/getServerSideProps or fetch project by id, localize fields there as well.
