'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils/styles'
import { useAnalytics } from '@/hooks/useAnalytics'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  trackingAction?: string
  trackingCategory?: string
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  urgency?: boolean
  pulse?: boolean
  target?: string
  rel?: string
}

// Style configurations
const BUTTON_STYLES = {
  base: 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 rounded-full cursor-pointer shadow-sm whitespace-nowrap',
  variants: {
    primary:
      'bg-accent text-white hover:bg-[var(--accent-dark)] hover:text-white border border-accent focus:ring-accent shadow-lg hover:shadow-xl',
    secondary:
      'bg-transparent text-accent border border-accent hover:bg-accent hover:!text-white focus:ring-accent cta-button-secondary',
    outline:
      'border-2 border-accent text-accent hover:bg-accent hover:!text-white focus:ring-accent cta-button-outline',
    ghost:
      'bg-transparent text-accent hover:bg-accent/10 focus:ring-accent border border-transparent',
    success:
      'bg-green-600 text-white hover:bg-green-700 border border-green-600 focus:ring-green-600 shadow-lg hover:shadow-xl',
  },
  sizes: {
    sm: 'px-4 py-2.5 text-xs text-base rounded-full',
    md: 'px-4 py-4 sm:px-6 sm:py-3 xl:px-8 xl:py-4 text-sm xl:text-lg rounded-full',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full',
    xl: 'px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-full',
  },
} as const

/**
 * Checks if a URL is external (http/https/mailto/tel)
 */
function isExternalUrl(href: string): boolean {
  return href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')
}

const CTAButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CTAButtonProps>(
  (
    {
      href,
      onClick,
      children,
      variant = 'primary',
      size = 'md',
      className,
      disabled,
      type = 'button',
      ariaLabel,
      trackingAction,
      trackingCategory,
      ...props
    },
    ref
  ) => {
    const { trackEvent } = useAnalytics()

    const handleClick = () => {
      // Track analytics if tracking props are provided
      if (trackingAction && trackingCategory) {
        trackEvent({
          action: trackingAction,
          category: trackingCategory,
          ...(typeof children === 'string' 
            ? { label: children } 
            : ariaLabel 
              ? { label: ariaLabel }
              : {}
          ),
        })
      }

      // Call original onClick if provided
      if (onClick) {
        onClick()
      }
    }

    const classes = cn(
      BUTTON_STYLES.base,
      BUTTON_STYLES.variants[variant],
      BUTTON_STYLES.sizes[size],
      className
    )

    // Handle link rendering
    if (href) {
      const isExternal = isExternalUrl(href)

      if (isExternal) {
        // External link with anchor tag
        return (
          <a
            href={href}
            className={classes}
            ref={ref as React.Ref<HTMLAnchorElement>}
            aria-label={ariaLabel}
            onClick={handleClick}
            target='_blank'
            rel='noopener noreferrer'
            {...props}>
            {children}
          </a>
        )
      }

      // Internal link with Next.js Link
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-label={ariaLabel}
          onClick={handleClick}
          {...props}>
          {children}
        </Link>
      )
    }

    // Button element
    return (
      <button
        type={type}
        onClick={handleClick}
        className={classes}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        aria-label={ariaLabel}
        {...props}>
        {children}
      </button>
    )
  }
)

CTAButton.displayName = 'CTAButton'

export default CTAButton
