'use client'

import { useState, useRef, MouseEvent as ReactMouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import { projects } from '@/data/portfolio-data'
// import AnimatedSection from './AnimatedSection' // Not used
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import {
  // ExternalLink, // Not used
  Eye,
  Code,
  Sparkles,
  FolderOpen,
  ArrowRight,
  ChevronDown,
  Filter,
} from 'lucide-react'

// Project card component to avoid hooks in map
interface LocalizedProject {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  link: string
}

interface ProjectCardProps {
  project: LocalizedProject
  filterTechnology: string
  currentLocale: string
  t: (key: string) => string
  onProjectClick: (project: LocalizedProject) => void
  index: number
  isNewlyAdded: boolean
}

function ProjectCard({
  project,
  filterTechnology,
  currentLocale,
  t,
  onProjectClick,
  index,
  isNewlyAdded,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.08), transparent 60%)`

  // Enhanced animation variants for new projects
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.8,
      rotateX: 15,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: isNewlyAdded ? index * 0.1 : 0,
      }
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.9,
      transition: {
        duration: 0.3,
      }
    },
  }
  return (
    <motion.div
      key={`${project.id}-${filterTechnology}`}
      layout
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`group relative flex flex-col h-full rounded-2xl border border-gray-200/60 bg-white/80 dark:border-white/10 dark:bg-gray-900/80 backdrop-blur-sm cursor-pointer overflow-hidden ${
        isNewlyAdded ? 'ring-2 ring-blue-500/50 ring-offset-2 ring-offset-background' : ''
      }`}
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.98 }}
      onClick={() => onProjectClick(project)}
      style={{ perspective: 1000 }}>
      {/* Enhanced glow effect for new projects */}
      {isNewlyAdded && (
        <motion.div
          className='absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1, 0] }}
          transition={{ duration: 2 }}
        />
      )}
      
      {/* Gradient overlay */}
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100'
        style={{ background }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Border glow effect */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div className='relative z-10 flex flex-col h-full'>
        {/* Enhanced Project Image */}
        <div className='relative h-48 lg:h-52 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-50/20 to-gray-100/20 dark:from-gray-800/20 dark:to-gray-900/20'>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              fill
              loading='lazy'
              className='object-cover object-top transition-all duration-300 group-hover:scale-105'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>
        {/* Project Content */}
        <div className='p-6 flex flex-col flex-1'>
          {/* Title with enhanced styling */}
          <h4 className='font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-2 min-h-[3.5rem]'>
            {project.title}
          </h4>
          {/* Description */}
          <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3 min-h-[4rem]'>
            {project.description}
          </p>
          {/* Technologies - fixed height for consistency */}
          <div className='mb-6 min-h-[5.5rem]'>
            <h5 className='text-xs font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-3'>
              {t('portfolio.technologies')}
            </h5>
            <div className='flex flex-wrap gap-1.5'>
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50'>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'>
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
          {/* Action Buttons */}
          <div className='mt-auto space-y-3'>
            <div className='flex gap-3'>
              <Link
                href={`/${currentLocale}/projects/${project.id}`}
                className='w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 dark:from-gray-700/50 dark:to-gray-800/50 dark:hover:from-gray-600/50 dark:hover:to-gray-700/50 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl'>
                <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700' />
                <div className='relative flex items-center justify-center gap-2'>
                  <Eye className='h-4 w-4' />
                  <span>{t('portfolio.viewDetails')}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface PortfolioProps {
  title?: string
  subtitle?: string
  showAllProjects?: boolean
}

export default function Portfolio({ title, subtitle, showAllProjects = false }: PortfolioProps) {
  const [visibleProjects, setVisibleProjects] = useState(4)
  const [filterTechnology, setFilterTechnology] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [newlyAddedProjects, setNewlyAddedProjects] = useState<number[]>([])
  const { t, language, plural } = useLanguage()
  const { scrollToSection } = useSmoothScroll()
  const router = useRouter()
  const pathname = usePathname()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  // Get current locale from pathname
  const currentLocale = pathname.startsWith('/fr')
    ? 'fr'
    : pathname.startsWith('/en')
    ? 'en'
    : pathname.startsWith('/ru')
    ? 'ru'
    : 'fr'

  // Generate locale-aware URLs
  const getLocalePath = (path: string) => {
    if (currentLocale === 'fr' && !pathname.startsWith('/fr')) {
      return path // Default French without prefix
    }
    return `/${currentLocale}${path}`
  }

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const filterVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Используем Next.js router для навигации без перезагрузки страницы
    router.push(getLocalePath('/'))
    // Небольшая задержка для завершения навигации, затем скролл к секции portfolio
    setTimeout(() => {
      scrollToSection('portfolio')
    }, 150)
  }
  // Handle project click - navigate to project page
  const handleProjectClick = (project: LocalizedProject) => {
    router.push(getLocalePath(`/projects/${project.id}`))
  }

  const loadMoreProjects = async () => {
    setIsLoadingMore(true)
    
    // Get the range of new projects that will be added
    const currentCount = visibleProjects
    const newCount = Math.min(currentCount + 4, filteredProjects.length)
    const newProjectIndices = Array.from(
      { length: newCount - currentCount }, 
      (_, i) => currentCount + i
    )
    
    // Set the newly added projects for animation
    setNewlyAddedProjects(newProjectIndices)
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300))
    
    setVisibleProjects(newCount)
    setIsLoadingMore(false)
    
    // Clear newly added projects after animation completes
    setTimeout(() => {
      setNewlyAddedProjects([])
    }, 800)
  }

  const handleFilterChange = (tech: string) => {
    setFilterTechnology(tech)
    setVisibleProjects(4) // Reset visible projects when filter changes
    setNewlyAddedProjects([]) // Clear newly added projects
    setIsLoadingMore(false) // Reset loading state
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

  // Get unique technologies for filter
  const allTechnologies = Array.from(
    new Set(localizedProjects.flatMap((project) => project.technologies || []))
  ).sort()
  // Filter projects by technology
  const filteredProjects =
    filterTechnology === 'all'
      ? localizedProjects
      : localizedProjects.filter((project) => project.technologies?.includes(filterTechnology))
  return (
    <section
      ref={sectionRef}
      id='portfolio'
      className='py-20 bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-20 -right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4'>
        {/* Header Section */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='text-center mb-16'>
          <motion.div
            variants={cardVariants}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm'>
            <Sparkles className='w-4 h-4 text-indigo-600 dark:text-indigo-100' />
            <span className='text-base font-medium text-indigo-600 dark:text-indigo-100 '>
              {title || t('portfolio.title')}
            </span>
          </motion.div>
          <motion.h2
            variants={cardVariants}
            className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 leading-tight'>
            {subtitle || t('portfolio.subtitle')}
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed'>
            {t('portfolio.description') ||
              'Explore my latest projects showcasing modern web development techniques and innovative solutions.'}
          </motion.p>
          {/* Navigation and Filter Section */}
          <motion.div
            variants={cardVariants}
            className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-8'>
            {/* Navigation Button */}
            {showAllProjects ? (
              <motion.button
                onClick={handleHomeClick}
                className='btn-secondary group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <ArrowRight className='w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1' />
                {t('nav.home')}
              </motion.button>
            ) : (
              <Link href={getLocalePath('/projects')}>
                <motion.button
                  className='btn-primary group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  <FolderOpen className='w-4 h-4' />
                  {t('portfolio.viewAll')}
                  <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                </motion.button>
              </Link>
            )}
            {/* Filter Toggle */}
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-secondary group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                showFilters ? 'bg-primary/10 border-primary/30 text-primary' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              <Filter className='w-4 h-4' />
              {t('portfolio.filter') || 'Filter'}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showFilters ? 'rotate-180' : ''
                }`}
              />
            </motion.button>
          </motion.div>
          {/* Enhanced Technology Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={filterVariants}
                className='mb-12'>
                <div className='bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 max-w-5xl mx-auto'>
                  <div className='flex flex-wrap justify-center gap-3'>
                    <motion.button
                      onClick={() => handleFilterChange('all')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                        filterTechnology === 'all'
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground border border-transparent hover:border-primary/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      {' '}
                      <span className='relative z-10 flex items-center gap-2'>
                        <Sparkles className='w-3 h-3' />
                        {t('portfolio.allProjects')}
                      </span>
                      {filterTechnology === 'all' && (
                        <motion.div
                          className='absolute inset-0 bg-primary/20 rounded-full'
                          layoutId='activeFilter'
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                    {allTechnologies.map((tech) => {
                      return (
                        <motion.button
                          key={tech}
                          onClick={() => handleFilterChange(tech)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                            filterTechnology === tech
                              ? 'bg-primary text-primary-foreground shadow-lg'
                              : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground border border-transparent hover:border-primary/20'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}>
                          <span className='relative z-10 flex items-center gap-2'>
                            <Code className='w-3 h-3' />
                            {tech}
                          </span>
                          {filterTechnology === tech && (
                            <motion.div
                              className='absolute inset-0 bg-primary/20 rounded-full'
                              layoutId='activeFilter'
                              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </motion.button>
                      )
                    })}
                  </div>{' '}
                  {/* Filter Results Summary */}
                  <motion.div
                    className='mt-4 text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}>
                    <p className='text-sm text-muted-foreground'>
                      {filterTechnology === 'all' ? (
                        <>
                          {t('portfolio.showingAll')}{' '}
                          <span className='font-semibold text-primary mx-1'>
                            {filteredProjects.length}
                          </span>{' '}
                          {plural(
                            filteredProjects.length,
                            t('portfolio.project'),
                            t('portfolio.projects')
                          )}
                        </>
                      ) : (
                        <>
                          {t('portfolio.found')}{' '}
                          <span className='font-semibold text-primary mx-1'>
                            {filteredProjects.length}
                          </span>{' '}
                          {plural(
                            filteredProjects.length,
                            t('portfolio.projectWith'),
                            t('portfolio.projectsWith')
                          )}{' '}
                          <span className='font-semibold'>{filterTechnology}</span>
                        </>
                      )}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}{' '}
          </AnimatePresence>
        </motion.div>
        {/* Enhanced Projects Grid */}
        <motion.div
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'>
          <AnimatePresence mode="popLayout">
            {filteredProjects
              .slice(0, showAllProjects ? filteredProjects.length : visibleProjects)
              .map((project, index) => (
                <ProjectCard
                  key={`${project.id}-${filterTechnology}`}
                  project={project}
                  filterTechnology={filterTechnology}
                  currentLocale={currentLocale}
                  t={t}
                  onProjectClick={handleProjectClick}
                  index={index}
                  isNewlyAdded={newlyAddedProjects.includes(index)}
                />
              ))}
          </AnimatePresence>
        </motion.div>
        {/* Load More Button */}
        {!showAllProjects && visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='mt-12 text-center'>
            <motion.button
              onClick={loadMoreProjects}
              disabled={isLoadingMore}
              className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 group relative overflow-hidden ${
                isLoadingMore ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
              }`}
              whileHover={!isLoadingMore ? { scale: 1.02, y: -2 } : {}}
              whileTap={!isLoadingMore ? { scale: 0.98 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
              
              {/* Loading overlay */}
              {isLoadingMore && (
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity
                  }}
                />
              )}
              
              {/* Loading spinner */}
              {isLoadingMore ? (
                <motion.div
                  className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full'
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity
                  }}
                />
              ) : (
                <FolderOpen className='w-5 h-5 group-hover:scale-110 transition-transform duration-200' />
              )}
              
              <span className='text-fluid-base relative z-10'>
                {isLoadingMore ? t('portfolio.loading') || 'Загрузка...' : t('portfolio.showMore')}
              </span>
              
              {!isLoadingMore && (
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
              )}
            </motion.button>
            
            {/* Progress indicator */}
            <motion.div
              className='mt-4 flex justify-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <span>{visibleProjects}</span>
                <div className='w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                  <motion.div
                    className='h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${(visibleProjects / filteredProjects.length) * 100}%` 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span>{filteredProjects.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='text-center py-20'>
            <div className='relative mb-6'>
              <div className='w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl mx-auto flex items-center justify-center shadow-lg'>
                <FolderOpen className='w-12 h-12 text-gray-400 dark:text-gray-600' />
              </div>
              <div className='absolute -top-2 -right-2 w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center'>
                <span className='text-xs text-gray-600 dark:text-gray-400'>0</span>
              </div>
            </div>
            <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3'>
              No projects found
            </h3>
            <p className='text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto'>
              Try adjusting your filter criteria or explore all projects
            </p>
            <motion.button
              onClick={() => setFilterTechnology('all')}
              className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 font-medium'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Sparkles className='w-4 h-4' />
              Show All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// When passing project to <Link href={`/projects/${project.id}`}> or to a details page,
// make sure the details page also uses the same logic to localize fields based on language.
// If you use getStaticProps/getServerSideProps or fetch project by id, localize fields there as well.
