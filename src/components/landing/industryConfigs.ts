import { IndustryConfig, IndustryType } from './types'

export const industryConfigs: Record<IndustryType, IndustryConfig> = {
  'restaurant': {
    name: 'Restaurant',
    colors: {
      primary: '#dc2626', // red-600
      secondary: '#f97316', // orange-500
      accent: '#fbbf24', // amber-400
      gradient: {
        from: '#dc2626',
        to: '#f97316'
      }
    },
    hero: {
      image: '/images/services/restaurant-hero.webp',
      imageAlt: 'Restaurant website creation',
      backgroundPattern: 'from-red-50 to-orange-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: true,
      showPortfolio: true,
      showStats: true,
      pricingType: 'detailed',
      processSteps: 4
    },
    icons: {
      primary: 'utensils',
      badge: 'chef-hat',
      features: ['utensils', 'calendar', 'phone', 'map-pin', 'share2', 'zap']
    },
    meta: {
      category: 'Restaurant & Food Service',
      keywords: ['restaurant', 'menu', 'reservation', 'food', 'dining'],
      description: 'Professional restaurant website creation with online menu, reservations, and delivery integration'
    }
  },

  'travel-agency': {
    name: 'Travel Agency',
    colors: {
      primary: '#2563eb', // blue-600
      secondary: '#0891b2', // cyan-600
      accent: '#06b6d4', // cyan-500
      gradient: {
        from: '#2563eb',
        to: '#0891b2'
      }
    },
    hero: {
      image: '/images/services/travel-hero.webp',
      imageAlt: 'Travel agency website creation',
      backgroundPattern: 'from-blue-50 to-cyan-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: true,
      showPortfolio: true,
      showStats: true,
      pricingType: 'detailed',
      processSteps: 5
    },
    icons: {
      primary: 'plane',
      badge: 'compass',
      features: ['globe', 'map', 'compass', 'plane', 'camera', 'heart']
    },
    meta: {
      category: 'Travel & Tourism',
      keywords: ['travel', 'agency', 'booking', 'vacation', 'tours'],
      description: 'Modern travel agency websites with booking system, destination guides, and customer management'
    }
  },

  'barbershop': {
    name: 'Barbershop',
    colors: {
      primary: '#475569', // slate-600
      secondary: '#64748b', // slate-500
      accent: '#f59e0b', // amber-500
      gradient: {
        from: '#475569',
        to: '#64748b'
      }
    },
    hero: {
      image: '/images/barbershop-hero.webp',
      imageAlt: 'Barbershop website creation',
      backgroundPattern: 'from-slate-50 to-gray-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: false,
      showPortfolio: true,
      showStats: true,
      pricingType: 'simple',
      processSteps: 4
    },
    icons: {
      primary: 'scissors',
      badge: 'scissors',
      features: ['scissors', 'calendar', 'clock', 'users', 'star', 'phone']
    },
    meta: {
      category: 'Beauty & Personal Care',
      keywords: ['barbershop', 'salon', 'haircut', 'appointment', 'booking'],
      description: 'Professional barbershop websites with online booking, service showcase, and customer management'
    }
  },

  'doctor': {
    name: 'Medical Practice',
    colors: {
      primary: '#059669', // emerald-600
      secondary: '#0891b2', // cyan-600
      accent: '#06b6d4', // cyan-500
      gradient: {
        from: '#059669',
        to: '#0891b2'
      }
    },
    hero: {
      image: '/images/services/doctor-hero.webp',
      imageAlt: 'Medical practice website creation',
      backgroundPattern: 'from-emerald-50 to-cyan-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: false,
      showPortfolio: false,
      showStats: true,
      pricingType: 'simple',
      processSteps: 4
    },
    icons: {
      primary: 'stethoscope',
      badge: 'heart-pulse',
      features: ['stethoscope', 'calendar', 'phone', 'shield', 'users', 'clock']
    },
    meta: {
      category: 'Healthcare',
      keywords: ['doctor', 'medical', 'clinic', 'healthcare', 'appointment'],
      description: 'Professional medical practice websites with appointment booking, patient portal, and healthcare information'
    }
  },

  'photographer': {
    name: 'Photography',
    colors: {
      primary: '#ea580c', // orange-600
      secondary: '#f59e0b', // amber-500
      accent: '#fbbf24', // amber-400
      gradient: {
        from: '#ea580c',
        to: '#f59e0b'
      }
    },
    hero: {
      image: '/images/services/photographer-hero.webp',
      imageAlt: 'Photography website creation',
      backgroundPattern: 'from-orange-50 to-amber-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: true,
      showPortfolio: true,
      showStats: true,
      pricingType: 'detailed',
      processSteps: 5
    },
    icons: {
      primary: 'camera',
      badge: 'camera',
      features: ['camera', 'image', 'star', 'heart', 'share2', 'zap']
    },
    meta: {
      category: 'Creative Services',
      keywords: ['photographer', 'photography', 'portfolio', 'wedding', 'event'],
      description: 'Stunning photography websites with portfolio galleries, booking system, and client management'
    }
  },

  'boulangerie': {
    name: 'Bakery',
    colors: {
      primary: '#d97706', // amber-600
      secondary: '#f59e0b', // amber-500
      accent: '#fbbf24', // amber-400
      gradient: {
        from: '#d97706',
        to: '#f59e0b'
      }
    },
    hero: {
      image: '/images/services/boulangerie-hero.webp',
      imageAlt: 'Bakery website creation',
      backgroundPattern: 'from-amber-50 to-orange-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: false,
      showPortfolio: true,
      showStats: true,
      pricingType: 'simple',
      processSteps: 4
    },
    icons: {
      primary: 'croissant',
      badge: 'croissant',
      features: ['croissant', 'clock', 'phone', 'map-pin', 'share2', 'users']
    },
    meta: {
      category: 'Food & Beverage',
      keywords: ['bakery', 'bread', 'pastry', 'cafe', 'ordering'],
      description: 'Artisan bakery websites with product showcase, online ordering, and location information'
    }
  },

  'freelance': {
    name: 'Freelance',
    colors: {
      primary: '#2563eb', // blue-600
      secondary: '#3b82f6', // blue-500
      accent: '#60a5fa', // blue-400
      gradient: {
        from: '#2563eb',
        to: '#3b82f6'
      }
    },
    hero: {
      image: '/images/projects/freelance-hero.webp',
      imageAlt: 'Freelance website creation',
      backgroundPattern: 'from-blue-50 to-indigo-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: true,
      showPortfolio: true,
      showStats: true,
      pricingType: 'detailed',
      processSteps: 5
    },
    icons: {
      primary: 'briefcase',
      badge: 'briefcase',
      features: ['briefcase', 'code', 'star', 'users', 'zap', 'trending-up']
    },
    meta: {
      category: 'Professional Services',
      keywords: ['freelance', 'portfolio', 'services', 'professional', 'business'],
      description: 'Professional freelance websites with portfolio showcase, service offerings, and client testimonials'
    }
  },

  'ecommerce': {
    name: 'E-commerce',
    colors: {
      primary: '#7c3aed', // violet-600
      secondary: '#a855f7', // purple-500
      accent: '#c084fc', // purple-400
      gradient: {
        from: '#7c3aed',
        to: '#a855f7'
      }
    },
    hero: {
      image: '/images/services/ecommerce-hero.webp',
      imageAlt: 'E-commerce website creation',
      backgroundPattern: 'from-violet-50 to-purple-50'
    },
    sections: {
      showTestimonials: true,
      showPricing: true,
      showPortfolio: true,
      showStats: true,
      pricingType: 'detailed',
      processSteps: 6
    },
    icons: {
      primary: 'shopping-bag',
      badge: 'shopping-cart',
      features: ['shopping-bag', 'credit-card', 'truck', 'shield', 'star', 'zap']
    },
    meta: {
      category: 'E-commerce & Retail',
      keywords: ['ecommerce', 'online store', 'shop', 'payment', 'products'],
      description: 'Complete e-commerce solutions with product catalog, secure payment processing, and inventory management'
    }
  },

  'web-creation': {
    name: 'Web Creation',
    colors: {
      primary: '#059669', // emerald-600
      secondary: '#10b981', // emerald-500
      accent: '#34d399', // emerald-400
      gradient: {
        from: '#059669',
        to: '#10b981'
      }
    },
    hero: {
      image: '/images/hero-illustration.svg',
      imageAlt: 'Website creation services',
      backgroundPattern: 'from-emerald-50 to-green-50'
    },
    sections: {
      showTestimonials: false,
      showPricing: false,
      showPortfolio: false,
      showStats: true,
      pricingType: 'none',
      processSteps: 4
    },
    icons: {
      primary: 'globe',
      badge: 'star',
      features: ['globe', 'code', 'zap', 'trending-up', 'shield', 'users']
    },
    meta: {
      category: 'Web Development',
      keywords: ['website', 'creation', 'development', 'design', 'responsive'],
      description: 'Professional website creation services with modern design, responsive layout, and SEO optimization'
    }
  },

  'web-redesign': {
    name: 'Web Redesign',
    colors: {
      primary: '#dc2626', // red-600
      secondary: '#ef4444', // red-500
      accent: '#f87171', // red-400
      gradient: {
        from: '#dc2626',
        to: '#ef4444'
      }
    },
    hero: {
      image: '/images/services/redesign-hero.webp',
      imageAlt: 'Website redesign services',
      backgroundPattern: 'from-red-50 to-rose-50'
    },
    sections: {
      showTestimonials: false,
      showPricing: false,
      showPortfolio: false,
      showStats: true,
      pricingType: 'none',
      processSteps: 4
    },
    icons: {
      primary: 'refresh-cw',
      badge: 'zap',
      features: ['refresh-cw', 'trending-up', 'smartphone', 'zap', 'shield', 'star']
    },
    meta: {
      category: 'Web Development',
      keywords: ['redesign', 'modernization', 'upgrade', 'responsive', 'performance'],
      description: 'Website redesign and modernization services to improve performance, design, and user experience'
    }
  },

  'seo-optimization': {
    name: 'SEO Optimization',
    colors: {
      primary: '#7c3aed', // violet-600
      secondary: '#8b5cf6', // violet-500
      accent: '#a78bfa', // violet-400
      gradient: {
        from: '#7c3aed',
        to: '#8b5cf6'
      }
    },
    hero: {
      image: '/images/services/seo-hero.webp',
      imageAlt: 'SEO optimization services',
      backgroundPattern: 'from-violet-50 to-purple-50'
    },
    sections: {
      showTestimonials: false,
      showPricing: false,
      showPortfolio: false,
      showStats: true,
      pricingType: 'none',
      processSteps: 4
    },
    icons: {
      primary: 'search',
      badge: 'trending-up',
      features: ['search', 'trending-up', 'target', 'bar-chart', 'globe', 'zap']
    },
    meta: {
      category: 'Digital Marketing',
      keywords: ['seo', 'optimization', 'search', 'ranking', 'traffic'],
      description: 'Comprehensive SEO optimization services to improve search rankings and organic traffic'
    }
  },

  'maintenance': {
    name: 'Website Maintenance',
    colors: {
      primary: '#059669', // emerald-600
      secondary: '#10b981', // emerald-500
      accent: '#34d399', // emerald-400
      gradient: {
        from: '#059669',
        to: '#10b981'
      }
    },
    hero: {
      image: '/images/services/maintenance-hero.webp',
      imageAlt: 'Website maintenance services',
      backgroundPattern: 'from-emerald-50 to-green-50'
    },
    sections: {
      showTestimonials: false,
      showPricing: false,
      showPortfolio: false,
      showStats: true,
      pricingType: 'none',
      processSteps: 4
    },
    icons: {
      primary: 'wrench',
      badge: 'shield-check',
      features: ['wrench', 'shield', 'zap', 'clock', 'trending-up', 'refresh-cw']
    },
    meta: {
      category: 'Web Services',
      keywords: ['maintenance', 'support', 'updates', 'security', 'backup'],
      description: 'Professional website maintenance services including updates, security monitoring, and technical support'
    }
  }
}

export function getIndustryConfig(industry: IndustryType): IndustryConfig {
  return industryConfigs[industry]
}