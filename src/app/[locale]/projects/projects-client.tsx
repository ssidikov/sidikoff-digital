'use client'

import React from 'react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Locale } from '@/lib/i18n'

interface Project {
  id: string
  title: string
  description: string
  image: string
  longDescription: string
  technologies: string[]
  link: string
  category: string
  featured?: boolean
}

interface ProjectsClientProps {
  allProjects: Project[]
  locale: Locale
  dict: {
    projects?: {
      filter_all: string
      filter_featured: string
    }
  }
}

export function ProjectsClient({ allProjects, locale, dict }: ProjectsClientProps) {
  const tags = Array.from(
    new Set(
      allProjects
        .map((item) => item.category)
        .filter((tag): tag is string => typeof tag === 'string')
    )
  )
  const [activeTag, setActiveTag] = React.useState<string>('all')
  const featured = allProjects.filter((item) => item.featured)
  const nonFeatured = allProjects.filter((item) => !item.featured)
  const sortedProjects = [...featured, ...nonFeatured]
  const filteredProjects =
    activeTag === 'all'
      ? sortedProjects
      : activeTag === 'featured'
        ? featured
        : allProjects.filter((item) => item.category === activeTag)

  return (
    <>
      {/* Filter Hashtags */}
      <div className='flex flex-wrap gap-2.5 mb-12'>
        <button
          onClick={() => setActiveTag('all')}
          className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0 ${
            activeTag === 'all'
              ? 'text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black'
              : 'text-black border border-black hover:bg-black hover:text-white'
          }`}
          tabIndex={0}>
          #{dict?.projects?.filter_all || 'all'}
        </button>
        <button
          onClick={() => setActiveTag('featured')}
          className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0 ${
            activeTag === 'featured'
              ? 'text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black'
              : 'text-black border border-black hover:bg-black hover:text-white'
          }`}
          tabIndex={0}>
          #{dict?.projects?.filter_featured || 'featured'}
        </button>
        {tags.map((tag, idx) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0
              ${idx === 0 ? 'ml-30px' : ''}
              ${idx === tags.length - 1 ? 'mr-30px' : ''}
              ${
                activeTag === tag
                  ? 'text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black'
                  : 'text-black border border-black hover:bg-black hover:text-white'
              }
            `}
            tabIndex={0}>
            #{tag}
          </button>
        ))}
      </div>
      <div className='grid lg:grid-cols-2 gap-5 sm:gap-[30px] lg:gap-16'>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale} />
        ))}
      </div>
    </>
  )
}
