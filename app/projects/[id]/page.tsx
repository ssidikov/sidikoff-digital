'use client'
import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { projects } from '@/data/portfolio-data'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { redirectToHomeWithRouter } from '@/lib/redirect'

const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id) || null
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>
}): Promise<Metadata> {
  const actualParams =
    typeof (params as any).then === 'function'
      ? await (params as Promise<{ id: string }>)
      : (params as { id: string })

  const project = getProjectById(actualParams.id)

  if (!project) {
    return {
      title: 'Projet non trouvé - SIDIKOFF DIGITAL',
      description: 'Le projet demandé n\'existe pas. Découvrez nos autres réalisations.',
      robots: 'noindex,nofollow',
    }
  }

  return {
    title: `${project.title.fr} - Portfolio SIDIKOFF DIGITAL`,
    description: `Découvrez ${project.title.fr}: ${project.description.fr} Réalisé par SIDIKOFF DIGITAL, agence web à Paris.`,
    keywords: [
      ...project.technologies,
      'portfolio',
      'projet web',
      'SIDIKOFF DIGITAL',
      'développement web',
      'agence web paris',
    ],
    openGraph: {
      title: `${project.title.fr} - Portfolio SIDIKOFF DIGITAL`,
      description: project.description.fr,
      images: [project.image],
      url: `https://www.sidikoff.com/projects/${project.id}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title.fr} - Portfolio SIDIKOFF DIGITAL`,
      description: project.description.fr,
      images: [project.image],
    },
    alternates: {
      canonical: `https://www.sidikoff.com/projects/${project.id}`,
      languages: {
        'fr': `https://www.sidikoff.com/fr/projects/${project.id}`,
        'en': `https://www.sidikoff.com/en/projects/${project.id}`,
        'ru': `https://www.sidikoff.com/ru/projects/${project.id}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
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
    // Redirect to homepage instantly using utility
    redirectToHomeWithRouter(router)
    return null
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
    <div className='scroll-smooth min-h-screen'>
      <Header />
      <main className='container mx-auto px-4 pt-24 md:pt-32 min-h-screen'>
        <Breadcrumbs />
        <div className='mt-8 max-w-4xl mx-auto float-right'>
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
                <button className='group relative w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto overflow-hidden'>
                  {/* Animated background overlay */}
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  {/* Button content */}
                  <span className='relative z-10 transition-all duration-300 group-hover:tracking-wide'>
                    {t('hero.contact')}
                  </span>

                  {/* Shine effect */}
                  <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12' />
                </button>
              </a>

              <a
                href={localizedProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='w-1/2 md:w-48'>
                <button className='group relative w-full min-w-[120px] max-w-[220px] px-6 py-3 text-base font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-2 border-primary/20 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center mx-auto overflow-hidden'>
                  {/* Background gradient overlay */}
                  <div className='absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  {/* Button content */}
                  <span className='relative z-10 transition-all duration-300 group-hover:tracking-wide'>
                    {t('portfolio.viewProject')}
                  </span>

                  {/* Shine effect */}
                  <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12' />
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
