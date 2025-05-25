'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { technologies } from '@/data/portfolio-data'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState('Technologies')
  const { t } = useLanguage()

  return (
    <section className='container mx-auto px-4 py-20'>
      <div className='grid grid-cols-4 md:grid-cols-6 gap-[1px] border border-gray-800 bg-gray-800'>
        {/* Title */}
        <AnimatedSection className='col-span-4 md:col-span-2 bg-background p-[clamp(1rem,2vw,2rem)] flex flex-col border justify-cente'>
          <AnimatePresence mode='wait'>
            <motion.h2
              key={hoveredTech}
              variants={textVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={{ duration: 0.2 }}
              className='text-2xl md:text-[clamp(1rem,2.5vw,2.5rem)] font-bold leading-tight gradient-text'>
              {hoveredTech}
            </motion.h2>
          </AnimatePresence>
          <p className='text-2xl md:text-[clamp(1rem,1.5vw,2rem)] font-bold leading-tight'>
            {t('tech.suffix')}
          </p>
        </AnimatedSection>

        {/* Technologies */}
        {technologies.map((tech, index) => (
          <AnimatedSection
            key={index}
            className={`relative bg-background aspect-square flex items-center justify-center group border-gray-800 ${
              index >= 8 ? 'hidden md:flex' : 'flex'
            }`}>
            <div
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(t('tech.title'))}
              className='w-full h-full flex items-center justify-center'>
              <motion.div
                className='relative w-10 h-10 md:w-14 md:h-14 transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]'
                animate={{ opacity: 1 }}
                whileHover={{
                  opacity: [1, 0.9, 1],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className='object-contain dark:invert'
                />
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
