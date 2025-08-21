'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils/styles'
import useAnalytics from '@/hooks/useAnalytics'

interface CTAButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  trackingAction?: string
  trackingCategory?: string
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
        trackEvent(
          trackingAction,
          trackingCategory,
          typeof children === 'string' ? children : ariaLabel
        )
      }

      // Call original onClick if provided
      if (onClick) {
        onClick()
      }
    }
    const baseClasses =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 rounded-full cursor-pointer shadow-sm whitespace-nowrap'

    const variants = {
      primary:
        'bg-accent text-white hover:bg-[var(--accent-dark)] hover:text-white border border-accent focus:ring-accent shadow-lg hover:shadow-xl',
      secondary:
        'bg-transparent text-accent border border-accent hover:bg-accent hover:!text-white focus:ring-accent cta-button-secondary',
      outline:
        'border-2 border-accent text-accent hover:bg-accent hover:!text-white focus:ring-accent cta-button-outline',
    }

    const sizes = {
      sm: 'px-4 py-2.5 text-xs text-base rounded-full',
      md: 'px-4 py-4 sm:px-6 sm:py-3 xl:px-8 xl:py-4 text-sm xl:text-lg rounded-full',
      lg: 'px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-base sm:text-lg md:text-xl lg:text-2xl rounded-full',
    }

    const classes = cn(baseClasses, variants[variant], sizes[size], className)

    // Check if href is external (starts with http/https or mailto/tel)
    const isExternal =
      href && (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'))

    if (href) {
      if (isExternal) {
        // Use regular anchor tag for external links
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
      } else {
        // Use Next.js Link for internal links
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
    }

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
