import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { getProjects, projects as fallbackProjects } from '@/data/projects'
import { getProjectsUrl, getProjectUrl, getLocalizedUrl } from '@/utils/navigation'
import CTAButton from '@/components/ui/CTAButton'
import { Section } from '@/components/ui'

interface ProjectPageProps {
  params: Promise<{ locale: Locale; id: string }>
}

function findProject(locale: Locale, id: string) {
  const localizedProject = getProjects(locale).find((project) => project.id === id)

  if (localizedProject) {
    return localizedProject
  }

  return fallbackProjects.find((project) => project.id === id)
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, id } = await params
  const project = findProject(locale, id)

  if (!project) {
    return {
      title: 'Projet non trouvé',
    }
  }

  const projectUrl = getProjectUrl(id, locale)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sidikoff.com'

  return {
    title: `${project.title} | SIDIKOFF DIGITAL- Projets`,
    description: project.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}${projectUrl}`,
      languages: {
        fr: `${baseUrl}${getProjectUrl(id, 'fr')}`,
        en: `${baseUrl}${getProjectUrl(id, 'en')}`,
        ru: `${baseUrl}${getProjectUrl(id, 'ru')}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      locale: locale,
    },
  }
}

export async function generateStaticParams() {
  return fallbackProjects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params
  const project = findProject(locale, id)

  if (!project) {
    notFound()
  }

  const dict = await getDictionary(locale)

  return (
    <Section id='project-detail' variant='project-detail' padding='xl' contentWidth='wide'>
      <div className='relative z-10'>
        {/* Project Header */}
        <div className='max-w-7xl mx-auto mb-12 pt-24 lg:pt-32'>
          <div className='text-center mb-4'>
            <div className='flex justify-center flex-wrap gap-2 mb-6'>
              <span className='px-4 py-2 bg-accent-alpha-10 text-accent rounded-full text-sm font-medium'>
                {project.category}
              </span>
              {project.featured && (
                <span className='px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium'>
                  ⭐{' '}
                  {locale === 'fr'
                    ? 'Projet vedette'
                    : locale === 'en'
                    ? 'Featured'
                    : 'Рекомендуемый'}
                </span>
              )}
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              {project.title}
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              {project.description}
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-6 lg:h-[800px]'>
            {/* Left Card - Project Image (50% width, full height) */}
            <div className='relative overflow-hidden rounded-3xl shadow-2xl border-2 border-white/50 lg:row-span-2 h-[500px] sm:h-[600px] md:h-[700px] lg:h-auto'>
              <div
                className='absolute inset-0'
                style={{
                  backdropFilter: 'blur(20px) saturate(120%)',
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                }}
              />
              <div className='relative h-full p-6'>
                <div className='h-full rounded-2xl overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover object-left-top'
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Top Card - Project Details */}
            <div
              className='relative overflow-hidden rounded-3xl shadow-xl border-2 border-white/50 p-6 lg:p-8'
              style={{
                backdropFilter: 'blur(20px) saturate(120%)',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 100%)',
                boxShadow:
                  'rgba(255, 255, 255, 0.2) 0px 8px 32px, inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              }}>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-accent-alpha-10 rounded-xl flex items-center justify-center'>
                  <svg
                    className='w-6 h-6 text-accent'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  {locale === 'fr'
                    ? 'Détails du projet'
                    : locale === 'en'
                    ? 'Project Details'
                    : 'Детали проекта'}
                </h3>
              </div>

              <div className='space-y-4 flex-1'>
                <div>
                  <dt className='text-sm font-semibold text-gray-600 mb-1'>
                    {locale === 'fr' ? 'Description' : locale === 'en' ? 'Description' : 'Описание'}
                  </dt>
                  <dd className='text-gray-800 leading-relaxed'>
                    {project.longDescription || project.description}
                  </dd>
                </div>

                <div>
                  <dt className='text-sm font-semibold text-gray-600 mb-1'>
                    {locale === 'fr' ? 'Catégorie' : locale === 'en' ? 'Category' : 'Категория'}
                  </dt>
                  <dd className='text-gray-800'>{project.category}</dd>
                </div>
              </div>
            </div>

            {/* Right Bottom Card - Technologies & Links */}
            <div
              className='relative flex flex-col justify-between overflow-hidden rounded-3xl shadow-xl border-2 border-white/50 p-6 lg:p-8'
              style={{
                backdropFilter: 'blur(20px) saturate(120%)',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 100%)',
                boxShadow:
                  'rgba(255, 255, 255, 0.2) 0px 8px 32px, inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              }}>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center'>
                  <svg
                    className='w-6 h-6 text-purple-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  {locale === 'fr'
                    ? 'Technologies utilisées'
                    : locale === 'en'
                    ? 'Technologies Used'
                    : 'Используемые технологии'}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className='mb-6'>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className='px-3 py-1.5 bg-white/30 backdrop-blur-sm border border-white/60 rounded-full text-sm font-semibold text-gray-700 hover:bg-white/40 transition-all duration-300'
                      style={{ animationDelay: `${index * 100}ms` }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-wrap gap-3 mt-auto'>
                {project.link && (
                  <CTAButton
                    href={project.link}
                    variant='primary'
                    size='md'
                    className='flex-1 min-w-[140px]'
                    trackingAction='view_project_demo'
                    trackingCategory='project_detail'>
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                      />
                    </svg>
                    {locale === 'fr'
                      ? 'Voir le site'
                      : locale === 'en'
                      ? 'View Live'
                      : 'Посмотреть'}
                  </CTAButton>
                )}
                {project.github && (
                  <CTAButton
                    href={project.github}
                    variant='secondary'
                    size='md'
                    className='flex-1 min-w-[140px]'
                    trackingAction='view_project_github'
                    trackingCategory='project_detail'>
                    <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                    {locale === 'fr'
                      ? 'Code source'
                      : locale === 'en'
                      ? 'Source Code'
                      : 'Исходный код'}
                  </CTAButton>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Portfolio Button - Centered at Bottom */}
        <div className='max-w-7xl mx-auto mt-16 text-center'>
          <CTAButton
            href={getProjectsUrl(locale)}
            variant='secondary'
            size='lg'
            className='group'
            trackingAction='back_to_projects'
            trackingCategory='project_detail'>
            <svg
              className='w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            {dict.common?.back || 'Retour'} {dict.navigation?.portfolio || 'aux projets'}
          </CTAButton>
        </div>

        {/* Call to Action Banner */}
        <div className='max-w-7xl mx-auto mt-16'>
          <div
            className='relative overflow-hidden rounded-3xl shadow-2xl border-2 border-white/50 p-8 lg:p-12'
            style={{
              backdropFilter: 'blur(20px) saturate(120%)',
              background:
                'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
              boxShadow:
                'rgba(59, 130, 246, 0.2) 0px 8px 32px, inset 0 1px 0 rgba(255, 255, 255, 0.5)',
            }}>
            <div className='text-center max-w-4xl mx-auto'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                {locale === 'fr'
                  ? 'Prêt à démarrer votre projet ?'
                  : locale === 'en'
                  ? 'Ready to start your project?'
                  : 'Готовы начать свой проект?'}
              </h2>
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                {locale === 'fr'
                  ? "Créons ensemble quelque chose d'extraordinaire. Contactez-nous pour discuter de votre vision."
                  : locale === 'en'
                  ? "Let's create something extraordinary together. Contact us to discuss your vision."
                  : 'Давайте создадим что-то необычное вместе. Свяжитесь с нами, чтобы обсудить ваше видение.'}
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <CTAButton
                  href={getLocalizedUrl('/contact', locale)}
                  variant='primary'
                  size='lg'
                  trackingAction='contact_from_project'
                  trackingCategory='project_detail'>
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                    />
                  </svg>
                  {locale === 'fr'
                    ? 'Discutons de votre projet'
                    : locale === 'en'
                    ? 'Discuss your project'
                    : 'Обсудить проект'}
                </CTAButton>
                <CTAButton
                  href={getProjectsUrl(locale)}
                  variant='secondary'
                  size='lg'
                  trackingAction='view_more_projects'
                  trackingCategory='project_detail'>
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 11H5m14 0l-4 4m4-4l-4-4'
                    />
                  </svg>
                  {locale === 'fr'
                    ? "Voir d'autres projets"
                    : locale === 'en'
                    ? 'View other projects'
                    : 'Посмотреть другие проекты'}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
