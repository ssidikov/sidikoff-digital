'use client'

import { useCallback } from 'react'

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

interface PageViewData {
  url: string
  title?: string
  referrer?: string
}

/**
 * Custom hook for analytics tracking with type safety and privacy compliance
 */
export const useAnalytics = () => {
  /**
   * Track page view with enhanced data
   */
  const trackPageView = useCallback((data: PageViewData) => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug('Page view tracked:', data)
      return
    }

    // Future analytics implementation can be added here
    // For now, we rely on Vercel Analytics automatic tracking
  }, [])

  /**
   * Track custom event with type safety
   */
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug('Event tracked:', event)
      return
    }

    // Future analytics implementation can be added here
    // Could integrate with GA4, Mixpanel, or other analytics services
  }, [])

  // Specific tracking functions for common use cases
  const trackContactSubmission = useCallback(
    (method: string) => {
      trackEvent({
        action: 'contact_form_submit',
        category: 'engagement',
        label: method,
      })
    },
    [trackEvent]
  )

  const trackProjectView = useCallback(
    (projectName: string) => {
      trackEvent({
        action: 'project_view',
        category: 'portfolio',
        label: projectName,
      })
    },
    [trackEvent]
  )

  const trackServiceInterest = useCallback(
    (serviceName: string) => {
      trackEvent({
        action: 'service_interest',
        category: 'services',
        label: serviceName,
      })
    },
    [trackEvent]
  )

  const trackPricingView = useCallback(
    (planName: string) => {
      trackEvent({
        action: 'pricing_view',
        category: 'pricing',
        label: planName,
      })
    },
    [trackEvent]
  )

  const trackFAQInteraction = useCallback(
    (question: string) => {
      trackEvent({
        action: 'faq_interaction',
        category: 'engagement',
        label: question.substring(0, 50), // Limit length for privacy
      })
    },
    [trackEvent]
  )

  const trackLanguageChange = useCallback(
    (fromLang: string, toLang: string) => {
      trackEvent({
        action: 'language_change',
        category: 'user_preference',
        label: `${fromLang}_to_${toLang}`,
      })
    },
    [trackEvent]
  )

  return {
    trackPageView,
    trackEvent,
    trackContactSubmission,
    trackProjectView,
    trackServiceInterest,
    trackPricingView,
    trackFAQInteraction,
    trackLanguageChange,
  }
}
