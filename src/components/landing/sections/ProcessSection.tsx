'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, FileText, Code, Rocket, CheckCircle, 
  Search, Target, BarChart, Users, Zap
} from 'lucide-react'
import { Heading, Text, Badge } from '@/design-system'
import { SectionProps } from '../types'

// Icon mapping for dynamic icon rendering
const iconMap = {
  'message-circle': MessageCircle,
  'file-text': FileText,
  'code': Code,
  'rocket': Rocket,
  'check-circle': CheckCircle,
  'search': Search,
  'target': Target,
  'bar-chart': BarChart,
  'users': Users,
  'zap': Zap,
} as const

function getIcon(iconName: string, className?: string) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || CheckCircle
  return <IconComponent className={className} />
}

export function ProcessSection({ dictionary, industryConfig }: Omit<SectionProps, 'locale'>) {
  const t = (dictionary as unknown as Record<string, Record<string, unknown>>)
  const processData = t.process || {} as Record<string, unknown>
  
  if (!processData.title || !processData.steps) {
    return null
  }

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Heading level="h2" className='mb-4'>
            {processData.title as string}
          </Heading>
          {typeof processData.description === 'string' && processData.description && (
            <Text size="xl" variant="muted" className='max-w-3xl mx-auto'>
              {processData.description}
            </Text>
          )}
        </motion.div>

        {/* Process Steps */}
        {Array.isArray(processData.steps) && (
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {(processData.steps as Array<{
              title: string
              description: string
              icon?: string
            }>).slice(0, industryConfig.sections.processSteps).map((step, index) => (
              <motion.div
                key={index}
                className='text-center relative'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Number Badge */}
                <div className='relative mb-6'>
                  <Badge 
                    variant="default" 
                    size="lg"
                    className='w-16 h-16 rounded-full text-xl font-bold flex items-center justify-center mx-auto'
                    style={{ 
                      backgroundColor: industryConfig.colors.primary,
                      color: 'white'
                    }}
                  >
                    {index + 1}
                  </Badge>
                  
                  {/* Connecting Line */}
                  {index < (processData.steps as unknown[]).length - 1 && (
                    <div 
                      className='hidden lg:block absolute top-8 left-full w-full h-0.5 -translate-x-8'
                      style={{ backgroundColor: `${industryConfig.colors.primary}30` }}
                    />
                  )}
                </div>

                {/* Step Icon */}
                {step.icon && (
                  <div className='mb-4'>
                    <div 
                      className='w-12 h-12 mx-auto rounded-lg flex items-center justify-center'
                      style={{ backgroundColor: `${industryConfig.colors.secondary}15` }}
                    >
                      {getIcon(step.icon, 'w-6 h-6')}
                      <style jsx>{`
                        svg {
                          color: ${industryConfig.colors.secondary};
                        }
                      `}</style>
                    </div>
                  </div>
                )}

                {/* Step Content */}
                <div>
                  <Heading level="h3" className='text-lg mb-3'>
                    {step.title}
                  </Heading>
                  <Text variant="muted" className='text-sm leading-relaxed'>
                    {step.description}
                  </Text>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {typeof processData.cta === 'string' && processData.cta && (
          <motion.div
            className='text-center mt-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Text size="lg" className='font-medium' style={{ color: industryConfig.colors.primary }}>
              {processData.cta}
            </Text>
          </motion.div>
        )}
      </div>
    </section>
  )
}