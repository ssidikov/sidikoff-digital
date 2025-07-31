'use client'

import { useCallback } from 'react'

// Custom hook for analytics tracking
export const useAnalytics = () => {
  // Track page view
  const trackPageView = useCallback((url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_title: title || document.title,
        page_location: url,
      })
    }
  }, [])

  // Track custom event
  const trackEvent = useCallback((action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }, [])

  // Track contact form submission
  const trackContactSubmission = useCallback((method: string) => {
    trackEvent('contact_form_submit', 'engagement', method)
    
    // Track conversion for Google Ads
    if (typeof window !== 'undefined' && window.gtag) {
      const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
      const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
      
      if (adsId && conversionLabel) {
        window.gtag('event', 'conversion', {
          send_to: `${adsId}/${conversionLabel}`,
        })
      }
    }
  }, [trackEvent])

  // Track project view
  const trackProjectView = useCallback((projectName: string) => {
    trackEvent('project_view', 'portfolio', projectName)
  }, [trackEvent])

  // Track service interest
  const trackServiceInterest = useCallback((serviceName: string) => {
    trackEvent('service_interest', 'services', serviceName)
  }, [trackEvent])

  // Track pricing plan view
  const trackPricingView = useCallback((planName: string) => {
    trackEvent('pricing_view', 'pricing', planName)
  }, [trackEvent])

  // Track FAQ interaction
  const trackFAQInteraction = useCallback((question: string) => {
    trackEvent('faq_click', 'support', question)
  }, [trackEvent])

  // Track file download
  const trackDownload = useCallback((fileName: string) => {
    trackEvent('file_download', 'downloads', fileName)
  }, [trackEvent])

  // Track external link click
  const trackExternalLink = useCallback((url: string, linkText?: string) => {
    trackEvent('external_link_click', 'navigation', linkText || url)
  }, [trackEvent])

  return {
    trackPageView,
    trackEvent,
    trackContactSubmission,
    trackProjectView,
    trackServiceInterest,
    trackPricingView,
    trackFAQInteraction,
    trackDownload,
    trackExternalLink,
  }
}

export default useAnalytics
