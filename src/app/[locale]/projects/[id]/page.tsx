import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { projects } from '@/data/projects'
import { getProjectsUrl, getProjectUrl, getLocalizedUrl } from '@/utils/navigation'
import CTAButton from '@/components/ui/CTAButton'
import { Section } from '@/components/ui'

interface ProjectPageProps {
  params: Promise<{ locale: Locale; id: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Projet non trouvé',
    }
  }

  const projectUrl = getProjectUrl(id, locale)

  return {
    title: `${project.title} | SIDIKOFF DIGITAL- Projets`,
    description: project.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${projectUrl}`,
      languages: {
        fr: getProjectUrl(id, 'fr'),
        en: getProjectUrl(id, 'en'),
        ru: getProjectUrl(id, 'ru'),
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
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const dict = await getDictionary(locale)

  return (
    <Section
      id='portfolio'
      background='pattern'
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#fafafa',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat-y',
      }}
      className='px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto px-4 py-36 relative'>
        <CTAButton
          href={getProjectsUrl(locale)}
          variant='secondary'
          size='sm'
          className='text-gray-600 hover:text-gray-900 mb-8 border-none bg-transparent shadow-none px-0 h-auto justify-start group'
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

        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Project Info */}
            <div className='order-2 lg:order-1'>
              <div className='flex flex-wrap gap-2 mb-6'>
                <span className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'>
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

              <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                {project.title}
              </h1>

              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>{project.description}</p>

              {/* Action Buttons */}
              <div className='flex flex-wrap gap-4'>
                {(project.demo || project.link) && (
                  <CTAButton
                    href={project.demo || project.link}
                    variant='primary'
                    size='lg'
                    trackingAction='view_project_demo'
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
                    size='lg'
                    className='bg-gray-900 text-white hover:bg-gray-800 border-gray-900 rounded-xl px-6 py-3 h-auto'
                    trackingAction='view_project_github'
                    trackingCategory='project_detail'>
                    <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
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

            {/* Project Image */}
            <div className='order-1 lg:order-2'>
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300'></div>
                <div className='relative h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details Section */}
      <div className='container mx-auto px-4 py-16 lg:py-24'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
            {/* Technologies */}
            <div className='bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center'>
                  <svg
                    className='w-6 h-6 text-blue-600'
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

              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {project.technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className='group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300'
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className='text-center'>
                      <div className='text-sm font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300'>
                        {tech}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className='bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300'>
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

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0'></div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {locale === 'fr' ? 'Catégorie' : locale === 'en' ? 'Category' : 'Категория'}
                    </h4>
                    <p className='text-gray-600'>{project.category}</p>
                  </div>
                </div>

                {project.longDescription && (
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div>
                      <h4 className='font-semibold text-gray-900 mb-2'>
                        {locale === 'fr'
                          ? 'Description détaillée'
                          : locale === 'en'
                            ? 'Detailed Description'
                            : 'Подробное описание'}
                      </h4>
                      <p className='text-gray-600 leading-relaxed'>{project.longDescription}</p>
                    </div>
                  </div>
                )}

                {(project.demo || project.link || project.github) && (
                  <div className='flex items-start gap-4'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0'></div>
                    <div className='w-full'>
                      <h4 className='font-semibold text-gray-900 mb-3'>
                        {locale === 'fr'
                          ? 'Liens du projet'
                          : locale === 'en'
                            ? 'Project Links'
                            : 'Ссылки проекта'}
                      </h4>
                      <div className='space-y-3'>
                        {(project.demo || project.link) && (
                          <a
                            href={project.demo || project.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors duration-200 group'>
                            <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200'>
                              <svg
                                className='w-4 h-4 text-blue-600'
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
                            </div>
                            <span className='text-blue-700 font-medium'>
                              {locale === 'fr'
                                ? 'Voir le site en ligne'
                                : locale === 'en'
                                  ? 'View Live Website'
                                  : 'Посмотреть сайт'}
                            </span>
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors duration-200 group'>
                            <div className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200'>
                              <svg
                                className='w-4 h-4 text-gray-600'
                                fill='currentColor'
                                viewBox='0 0 24 24'>
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                              </svg>
                            </div>
                            <span className='text-gray-700 font-medium'>
                              {locale === 'fr'
                                ? 'Voir le code source'
                                : locale === 'en'
                                  ? 'View Source Code'
                                  : 'Исходный код'}
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden rounded-2xl'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90'></div>
        <div className='container mx-auto px-4 py-16 lg:py-20 relative'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
              {locale === 'fr'
                ? 'Prêt à démarrer votre projet ?'
                : locale === 'en'
                  ? 'Ready to start your project?'
                  : 'Готовы начать свой проект?'}
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              {locale === 'fr'
                ? "Créons ensemble quelque chose d'extraordinaire. Contactez-nous pour discuter de votre vision."
                : locale === 'en'
                  ? "Let's create something extraordinary together. Contact us to discuss your vision."
                  : 'Давайте создадим что-то необычное вместе. Свяжитесь с нами, чтобы обсудить ваше видение.'}
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <CTAButton
                href={getLocalizedUrl('/contact', locale)}
                variant='primary'
                size='lg'
                className='hover:bg-white/10 hover:text-white hover:border-white/50 transition-colors duration-300'
                trackingAction='contact_from_project'
                trackingCategory='project_detail'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
                    ? "Let's discuss your project"
                    : 'Обсудим ваш проект'}
              </CTAButton>
              <CTAButton
                variant='secondary'
                href={getProjectsUrl(locale)}
                size='lg'
                className='text-white border-white/50 hover:border-white/80 bg-transparent hover:bg-white/10 transition-colors duration-300'
                trackingAction='view_more_projects'
                trackingCategory='project_detail'>
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
    </Section>
  )
}
