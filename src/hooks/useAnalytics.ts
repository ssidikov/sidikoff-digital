'use client'

import { useCallback } from 'react'

// Custom hook for analytics tracking (currently using only Vercel Analytics)
export const useAnalytics = () => {
  // Track page view - placeholder for future analytics implementation
  const trackPageView = useCallback((url: string, title?: string) => {
    // Future analytics implementation can be added here
    console.log('Page view tracked:', { url, title })
  }, [])

  // Track custom event - placeholder for future analytics implementation
  const trackEvent = useCallback(
    (action: string, category: string, label?: string, value?: number) => {
      // Future analytics implementation can be added here
      console.log('Event tracked:', { action, category, label, value })
    },
    []
  )

  // Track contact form submission
  const trackContactSubmission = useCallback(
    (method: string) => {
      trackEvent('contact_form_submit', 'engagement', method)
    },
    [trackEvent]
  )

  // Track project view
  const trackProjectView = useCallback(
    (projectName: string) => {
      trackEvent('project_view', 'portfolio', projectName)
    },
    [trackEvent]
  )

  // Track service interest
  const trackServiceInterest = useCallback(
    (serviceName: string) => {
      trackEvent('service_interest', 'services', serviceName)
    },
    [trackEvent]
  )

  // Track pricing plan view
  const trackPricingView = useCallback(
    (planName: string) => {
      trackEvent('pricing_view', 'pricing', planName)
    },
    [trackEvent]
  )

  // Track FAQ interaction
  const trackFAQInteraction = useCallback(
    (question: string) => {
      trackEvent('faq_interaction', 'engagement', question)
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
  }
}
