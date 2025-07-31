'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { getProjectsUrl } from '@/utils/navigation'
import { Dictionary } from '@/lib/dictionaries'
import Section, { SectionHeader } from '@/components/ui/Section'

interface PortfolioNewProps {
  locale: 'en' | 'fr' | 'ru'
  dictionary: Dictionary['portfolio']
}

export default function Portfolio({ locale, dictionary }: PortfolioNewProps) {
  const [activeTag, setActiveTag] = useState<string>('featured')
  const projects = getProjects(locale)

  const tags = Array.from(
    new Set(
      projects.map((item) => item.category).filter((tag): tag is string => typeof tag === 'string')
    )
  )

  const getButtonText = (tag: string) => {
    if (tag === 'featured') {
      // Get featured text based on locale
      const featuredText = {
        'fr': 'En vedette',
        'en': 'Featured',
        'ru': 'Рекомендуемые'
      }
      return featuredText[locale] || 'Featured'
    }
    return tag
  }

  const filteredProjects =
    activeTag === 'featured'
      ? projects.filter((item) => item.featured).slice(0, 2)
      : projects.filter((item) => item.category === activeTag).slice(0, 2)

  return (
    <Section
      id='portfolio'
      background='pattern'
      padding='lg'
      contentWidth='wide'
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#fafafa',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat-y',
      }}>
      <SectionHeader
        title={dictionary?.title || 'Portfolio'}
        subtitle={dictionary?.subtitle || ''}
        titleId='portfolio-title'
        className='text-left mb-16 mt-6'
      />

      {/* Filter Hashtags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='w-full mb-12'>
        <div className='flex flex-wrap gap-2.5'>
          {['featured', ...tags].map((tag, index) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-lg md:text-xl cursor-pointer rounded-xl px-3 md:px-6 transition-all duration-300 outline-none focus:ring-0 h-12 md:h-[60px] ${
                index === ['featured', ...tags].length - 1 ? 'mr-[30px]' : ''
              } ${
                activeTag === tag
                  ? 'text-white bg-black border border-transparent hover:bg-transparent hover:text-black hover:border-black'
                  : 'text-black border border-black hover:bg-black hover:text-white'
              }`}
              tabIndex={0}>
              #{getButtonText(tag)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        key={activeTag}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}>
            <ProjectCard key={project.id} project={project} locale={locale} />
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center'>
        <Link
          href={getProjectsUrl(locale)}
          className='inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg'>
          {dictionary?.view_project || 'View All Projects'}
          <svg
            className='w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </Link>
      </motion.div>
    </Section>
  )
}
