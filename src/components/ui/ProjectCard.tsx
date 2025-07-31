import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { getProjectUrl } from '@/utils/navigation'

export interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    category: string
    technologies?: string[]
    link?: string
  }
  locale: 'en' | 'fr' | 'ru'
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, locale }) => (
  <div className='group flex flex-col sm:flex-row lg:flex-col items-stretch rounded-3xl hover:shadow-2xl transition-all duration-300 p-6 lg:p-4 3xl:p-6 focus-visible:ring-2 focus-visible:ring-black outline-none relative backdrop-blur-xl bg-white/60 border-2 border-white/70 shadow-xl'>
    <Link
      href={getProjectUrl(project.id, locale)}
      className='absolute inset-0 z-10'
      tabIndex={-1}
      aria-label={`Подробнее о проекте ${project.title}`}
    />
    <div className='relative w-full sm:w-[260px] h-56 md:h-96 lg:w-auto shrink-0 rounded-2xl lg:rounded-2xl 3xl:rounded-3xl overflow-hidden'>
      <Image
        src={project.image}
        alt={project.title}
        width={584}
        height={384}
        className='w-full h-full object-cover object-top'
      />
      <div className='absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-40'></div>
    </div>
    <div className='flex flex-col justify-between min-h-[220px] lg:min-h-[260px] 3xl:min-h-[320px] gap-y-4 lg:gap-y-6 pt-6 sm:pl-8 lg:py-10 lg:px-8'>
      <div>
        <h3 className='text-2xl lg:text-2xl 3xl:text-3xl font-bold text-black mb-2 transition-colors duration-200'>
          {project.title}
        </h3>
        <p className='text-base xs:text-lg sm:text-base lg:text-lg 3xl:text-xl leading-6 sm:leading-6 3xl:leading-8 text-gray-700 mb-4 line-clamp-2'>
          {project.description}
        </p>
      </div>
      <div className='flex flex-wrap gap-2.5 text-sm lg:text-sm'>
        {project.technologies?.slice(0, 3).map((tech, techIndex) => (
          <span
            key={techIndex}
            className='h-9 px-3 text-slate-500 font-semibold flex items-center justify-center py-2 md:px-6 md:py-6 rounded-full text-sm border border-gray-400/50 cursor-default'>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
)
