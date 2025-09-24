'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  DollarSign,
  Users,
  Smartphone,
  Globe,
  Star,
  Search,
  Target,
} from 'lucide-react'
import { Heading, Text, Card, CardContent } from '@/design-system'
import { SectionProps } from '../types'

// Icon mapping for dynamic icon rendering
const iconMap = {
  'alert-triangle': AlertTriangle,
  'trending-down': TrendingDown,
  clock: Clock,
  'dollar-sign': DollarSign,
  users: Users,
  smartphone: Smartphone,
  globe: Globe,
  star: Star,
  search: Search,
  target: Target,
} as const

function getIcon(iconName: string, className?: string) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || AlertTriangle
  return <IconComponent className={className} />
}

export function ProblemsSection({ dictionary, industryConfig }: Omit<SectionProps, 'locale'>) {
  const t = dictionary as unknown as Record<string, Record<string, unknown>>
  const problemsData = t.problems || ({} as Record<string, unknown>)

  if (!problemsData.title || !problemsData.list) {
    return null
  }

  const problemsList = problemsData.list as Array<{
    icon: string
    title: string
    description: string
  }>

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Heading level='h2' className='mb-4'>
            {problemsData.title as string}
          </Heading>
          {typeof problemsData.description === 'string' && problemsData.description && (
            <Text size='xl' variant='muted' className='max-w-3xl mx-auto'>
              {problemsData.description}
            </Text>
          )}
        </motion.div>

        {/* Problems Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {problemsList.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Card className='text-center h-full hover:shadow-lg transition-shadow duration-300'>
                <CardContent className='p-6'>
                  <div className='mb-4'>
                    <div
                      className='w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4'
                      style={{ backgroundColor: `${industryConfig.colors.primary}15` }}>
                      {getIcon(problem.icon, `w-8 h-8`)}
                      <style jsx>{`
                        svg {
                          color: ${industryConfig.colors.primary};
                        }
                      `}</style>
                    </div>
                  </div>

                  <Heading level='h3' className='text-xl mb-3'>
                    {problem.title}
                  </Heading>

                  <Text variant='muted' className='leading-relaxed'>
                    {problem.description}
                  </Text>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
