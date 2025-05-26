'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { 
  ArrowTopRightOnSquareIcon, 
  EyeIcon, 
  CodeBracketIcon,
  SparklesIcon,
  FolderOpenIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'

interface PortfolioProps {
  title?: string
  subtitle?: string
  showAllProjects?: boolean
}

export default function Portfolio({ title, subtitle, showAllProjects = false }: PortfolioProps) {
  const [visibleProjects, setVisibleProjects] = useState(4)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [filterTechnology, setFilterTechnology] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)
  const { t, language } = useLanguage()
  const { scrollToSection } = useSmoothScroll()
  const router = useRouter()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const imageVariants = {
    rest: { 
      scale: 1,
      filter: "brightness(0.9) saturate(0.9)"
    },
    hover: { 
      scale: 1.05,
      filter: "brightness(1.1) saturate(1.1)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const overlayVariants = {
    rest: { 
      opacity: 0,
      backdropFilter: "blur(0px)"
    },
    hover: { 
      opacity: 1,
      backdropFilter: "blur(4px)",
      transition: { duration: 0.3 }
    }
  }

  const filterVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
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

  const handleFilterChange = (tech: string) => {
    setFilterTechnology(tech)
    setVisibleProjects(4) // Reset visible projects when filter changes
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
    new Set(localizedProjects.flatMap(project => project.technologies || []))
  ).sort()
  // Filter projects by technology
  const filteredProjects = filterTechnology === 'all' 
    ? localizedProjects 
    : localizedProjects.filter(project => 
        project.technologies?.includes(filterTechnology)
      )

  return (
    <section ref={sectionRef} id='portfolio' className='py-20 bg-gradient-to-br from-background via-background/95 to-primary/5'>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {title || t('portfolio.title')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary/80 bg-clip-text text-transparent"
          >
            {subtitle || t('portfolio.subtitle')}
          </motion.h2>
          
          <motion.p 
            variants={cardVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {t('portfolio.description') || 'Explore my latest projects showcasing modern web development techniques and innovative solutions.'}
          </motion.p>

          {/* Navigation Buttons */}
          <motion.div 
            variants={cardVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {showAllProjects ? (
              <button
                onClick={handleHomeClick}
                className="btn-secondary group">
                <ArrowRightIcon className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                {t('nav.home')}
              </button>
            ) : (
              <Link href='/projects'>
                <button className="btn-primary group">
                  {t('portfolio.viewAll')}
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            )}
            
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-secondary group ${showFilters ? 'bg-primary/10 border-primary/30' : ''}`}
            >
              <FunnelIcon className="w-4 h-4" />
              {t('portfolio.filter') || 'Filter'}
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>

          {/* Technology Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={filterVariants}
                className="mb-8"
              >
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                  <button
                    onClick={() => handleFilterChange('all')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filterTechnology === 'all'
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                        : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All Projects
                  </button>
                  {allTechnologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => handleFilterChange(tech)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        filterTechnology === tech
                          ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                          : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        >
          <AnimatePresence mode="wait">
            {filteredProjects
              .slice(0, showAllProjects ? filteredProjects.length : visibleProjects)
              .map((project, index) => (
                <motion.div
                  key={`${project.id}-${filterTechnology}`}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className='group cursor-pointer'
                >
                  <div className='card-modern overflow-hidden h-full flex flex-col'>
                    {/* Project Image */}
                    <div className='relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5'>
                      <motion.div
                        variants={imageVariants}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className='object-cover object-top'
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                      
                      {/* Hover Overlay */}
                      <motion.div
                        variants={overlayVariants}
                        className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      >
                        <div className="flex gap-3">
                          <Link href={`/projects/${project.id}`}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                            >
                              <EyeIcon className="w-5 h-5 text-gray-800" />
                            </motion.button>
                          </Link>
                          {project.link && (
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                            >
                              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-800" />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>

                      {/* Technology Badge */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 rounded-full">
                            {project.technologies[0]}
                            {project.technologies.length > 1 && (
                              <span className="ml-1 text-primary">+{project.technologies.length - 1}</span>
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className='p-6 flex flex-col flex-1'>
                      <h4 className='font-semibold text-lg mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300'>
                        {project.title}
                      </h4>
                      
                      <p className='text-sm text-muted-foreground leading-relaxed flex-1 mb-4'>
                        {project.description}
                      </p>

                      {/* Technologies */}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Action Button */}
                      <Link href={`/projects/${project.id}`}>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className='w-full btn-secondary group/btn'
                        >
                          {t('portfolio.viewDetails')}
                          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {!showAllProjects && visibleProjects < filteredProjects.length && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='mt-12 text-center'
          >
            <motion.button
              onClick={loadMoreProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='btn-primary group'
            >
              <FolderOpenIcon className="w-5 h-5" />
              {t('portfolio.showMore')}
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                +{Math.min(4, filteredProjects.length - visibleProjects)}
              </span>
            </motion.button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FolderOpenIcon className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              No projects found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// When passing project to <Link href={`/projects/${project.id}`}> or to a details page,
// make sure the details page also uses the same logic to localize fields based on language.
// If you use getStaticProps/getServerSideProps or fetch project by id, localize fields there as well.
