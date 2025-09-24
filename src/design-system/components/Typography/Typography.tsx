import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const headingVariants = cva('font-bold tracking-tight text-foreground', {
  variants: {
    level: {
      h1: 'text-4xl lg:text-5xl xl:text-6xl',
      h2: 'text-3xl lg:text-4xl xl:text-5xl',
      h3: 'text-2xl lg:text-3xl xl:text-4xl',
      h4: 'text-xl lg:text-2xl xl:text-3xl',
      h5: 'text-lg lg:text-xl xl:text-2xl',
      h6: 'text-base lg:text-lg xl:text-xl',
    },
    variant: {
      default: '',
      gradient: 'bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent',
      muted: 'text-muted-foreground',
      accent: 'text-accent-foreground',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    level: 'h1',
    variant: 'default',
    align: 'left',
  },
})

const textVariants = cva('text-foreground', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    variant: {
      default: '',
      muted: 'text-muted-foreground',
      accent: 'text-accent-foreground',
      success: 'text-green-600',
      warning: 'text-amber-600',
      error: 'text-destructive',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'default',
    weight: 'normal',
    align: 'left',
  },
})

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h1', variant, align, as, ...props }, ref) => {
    const Component = (as || level) as React.ElementType

    return React.createElement(Component, {
      className: cn(headingVariants({ level, variant, align }), className),
      ref,
      ...props,
    })
  }
)
Heading.displayName = 'Heading'

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, size, variant, weight, align, as = 'p', ...props }, ref) => {
    const Component = as as React.ElementType

    return React.createElement(Component, {
      className: cn(textVariants({ size, variant, weight, align }), className),
      ref,
      ...props,
    })
  }
)
Text.displayName = 'Text'

export { Heading, Text }
