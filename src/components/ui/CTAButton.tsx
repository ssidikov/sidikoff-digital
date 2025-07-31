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
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 rounded-full h-16 lg:h-[77px] 3xl:h-[98px] px-6 lg:px-16 text-lg 3xl:text-22 cursor-pointer shadow-sm'

    const variants = {
      primary:
        'bg-black text-white hover:bg-transparent hover:text-black border border-black focus:ring-black',
      secondary:
        'bg-transparent text-black hover:bg-black hover:text-white border border-black focus:ring-black',
      outline:
        'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    }

    const sizes = {
      sm: 'px-3 py-2 text-sm rounded-full',
      md: 'px-4 py-2 text-base rounded-full',
      lg: 'px-6 py-3 text-lg rounded-full',
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
