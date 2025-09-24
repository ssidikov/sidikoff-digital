import { Dictionary } from '@/lib/dictionaries'

export interface IndustryConfig {
  /** Industry identifier */
  name: string
  
  /** Color scheme for the industry */
  colors: {
    primary: string
    secondary: string
    accent: string
    gradient: {
      from: string
      to: string
    }
  }
  
  /** Hero section configuration */
  hero: {
    image: string
    imageAlt: string
    backgroundPattern?: string
  }
  
  /** Section visibility and behavior */
  sections: {
    showTestimonials: boolean
    showPricing: boolean
    showPortfolio: boolean
    showStats: boolean
    pricingType: 'simple' | 'detailed' | 'none'
    processSteps: number
  }
  
  /** Icon configuration */
  icons: {
    primary: string
    badge: string
    features: string[]
  }
  
  /** Industry-specific metadata */
  meta: {
    category: string
    keywords: string[]
    description: string
  }
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface Breadcrumbs {
  items: BreadcrumbItem[]
}

export interface BaseLandingContentProps {
  dictionary: Dictionary
  locale: string
  breadcrumbs?: Breadcrumbs
  industryConfig: IndustryConfig
}

export interface SectionProps {
  dictionary: Dictionary
  locale: string
  industryConfig: IndustryConfig
}

export interface StatItem {
  number: string
  title: string
  description: string
}

export interface ProcessStep {
  title: string
  description: string
  icon?: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface PricingPackage {
  name: string
  price: string
  currency?: string
  period: string
  description: string
  delivery_time?: string
  features: string[]
  options?: string[]
  is_popular?: boolean
  popular?: boolean
}

export interface TestimonialItem {
  name: string
  position?: string
  role?: string
  company?: string
  restaurant?: string
  location?: string
  content: string
  text?: string
  rating: number
  image?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export type IndustryType = 
  | 'restaurant'
  | 'travel-agency'
  | 'barbershop'
  | 'doctor'
  | 'photographer'
  | 'boulangerie'
  | 'freelance'
  | 'ecommerce'
  | 'web-creation'
  | 'web-redesign'
  | 'seo-optimization'
  | 'maintenance'