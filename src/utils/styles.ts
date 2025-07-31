// Utility function to merge classes (simplified version)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Common Tailwind CSS classes
export const buttonStyles = {
  primary:
    'bg-black hover:bg-white text-white hover:text-black border border-black transition-all duration-300',
  secondary:
    'text-gray-900 border border-black hover:bg-black hover:text-white transition-all duration-300',
  sizes: {
    sm: 'h-12 lg:h-14 text-base px-6 lg:px-7',
    md: 'h-14 lg:h-16 text-lg px-6 lg:px-8',
    lg: 'h-16 lg:h-[77px] 3xl:h-[98px] text-lg 3xl:text-xl px-6 lg:px-8',
    xl: 'h-18 lg:h-20 3xl:h-24 text-xl 3xl:text-2xl px-8 lg:px-10',
  },
  base: 'w-full sm:w-auto font-medium whitespace-nowrap rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
}

export const cardStyles = {
  base: 'bg-white rounded-2xl shadow-lg border transition-all duration-300',
  hover: 'hover:shadow-2xl hover:border-gray-300',
  focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
}

export const sectionStyles = {
  base: 'py-20 px-4 sm:px-6 lg:px-8',
  container: 'container mx-auto px-4',
  title: 'text-3xl md:text-4xl lg:text-5xl font-bold text-[#112D4E] mb-6',
  subtitle: 'text-[#3F72AF]',
  description: 'text-gray-600 text-lg md:text-xl leading-relaxed',
  // Hero section specific padding (accounts for fixed header)
  hero: {
    mobile: 'pt-24 pb-16', // Extra top padding for mobile header
    tablet: 'sm:pt-28 sm:pb-20', // Medium screens
    desktop: 'lg:pt-32 lg:pb-32', // Large screens
  },
  // Responsive padding utilities
  padding: {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-4 lg:px-8',
    lg: 'px-4 sm:px-4 lg:px-24',
    xl: 'px-4 sm:px-4 lg:px-16',
  },
  // Content width constraints
  content: {
    narrow: 'max-w-4xl mx-auto',
    normal: 'max-w-6xl mx-auto',
    wide: 'max-w-8xl mx-auto',
    full: 'w-full',
  },
}

export const animationStyles = {
  fadeInUp: 'opacity-0 translate-y-8',
  fadeIn: 'opacity-0',
  scaleIn: 'opacity-0 scale-95',
}

// Color palette
export const colors = {
  primary: '#112D4E',
  secondary: '#3F72AF',
  accent: '#F9F7F7',
  text: {
    primary: '#112D4E',
    secondary: '#6B7280',
    muted: '#9CA3AF',
  },
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
}
