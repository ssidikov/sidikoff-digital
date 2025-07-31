import React from 'react'

interface SectionBackgroundProps {
  type: 'hero' | 'services' | 'portfolio' | 'contact' | 'faq' | 'pricing'
  children?: React.ReactNode
  className?: string
}

export function SectionBackground({ type, children, className = '' }: SectionBackgroundProps) {
  const getBackgroundConfig = (sectionType: string) => {
    const configs = {
      hero: {
        bgClass: 'section-bg-hero',
        gradients: ['gradient-hero', 'gradient-hero-secondary', 'gradient-hero-tertiary']
      },
      services: {
        bgClass: 'section-bg-services', 
        gradients: ['gradient-services', 'gradient-services-secondary', 'gradient-services-tertiary']
      },
      portfolio: {
        bgClass: 'section-bg-portfolio',
        gradients: ['gradient-services', 'gradient-services-secondary', 'gradient-services-tertiary']
      },
      contact: {
        bgClass: 'section-bg-contact',
        gradients: ['gradient-hero', 'gradient-hero-secondary', 'gradient-hero-tertiary']
      },
      faq: {
        bgClass: 'section-bg-faq',
        gradients: ['gradient-services', 'gradient-services-secondary', 'gradient-services-tertiary']
      },
      pricing: {
        bgClass: 'section-bg-pricing',
        gradients: ['gradient-hero', 'gradient-hero-secondary', 'gradient-hero-tertiary']
      }
    }
    return configs[sectionType as keyof typeof configs]
  }

  const config = getBackgroundConfig(type)

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <div className={`absolute inset-0 w-full h-full pointer-events-none select-none ${config.bgClass}`} />
      {config.gradients.map((gradientClass, index) => (
        <div key={index} className={`absolute inset-0 ${gradientClass}`} />
      ))}
      {children}
    </div>
  )
}

// Utility component for section wrapper
interface SectionWrapperProps {
  id: string
  backgroundType: SectionBackgroundProps['type']
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({ 
  id, 
  backgroundType, 
  className = '', 
  children 
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`relative py-20 overflow-hidden ${className}`}
    >
      <SectionBackground type={backgroundType} />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
