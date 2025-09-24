'use client'

import React from 'react'
import { BaseLandingContentProps } from './types'
import { HeroSection } from './sections/HeroSection'
import { ProblemsSection } from './sections/ProblemsSection'
import { ProcessSection } from './sections/ProcessSection'
import { CTASection } from './sections/CTASection'

export function BaseLandingContent({ 
  dictionary, 
  locale, 
  breadcrumbs, 
  industryConfig 
}: BaseLandingContentProps) {
  return (
    <div className='min-h-screen'>
      {/* Hero Section - Always shown */}
      <HeroSection 
        dictionary={dictionary}
        locale={locale}
        industryConfig={industryConfig}
        {...(breadcrumbs && { breadcrumbs })}
      />

      {/* Problems Section - Conditional */}
      <ProblemsSection 
        dictionary={dictionary}
        industryConfig={industryConfig}
      />

      {/* Process Section - Always shown */}
      <ProcessSection 
        dictionary={dictionary}
        industryConfig={industryConfig}
      />

      {/* Stats Section - Conditional */}
      {industryConfig.sections.showStats && (
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <p className='text-gray-600'>Stats section placeholder - to be implemented</p>
          </div>
        </section>
      )}

      {/* Pricing Section - Conditional */}
      {industryConfig.sections.showPricing && (
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <p className='text-gray-600'>Pricing section placeholder - to be implemented</p>
          </div>
        </section>
      )}

      {/* Portfolio Section - Conditional */}
      {industryConfig.sections.showPortfolio && (
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <p className='text-gray-600'>Portfolio section placeholder - to be implemented</p>
          </div>
        </section>
      )}

      {/* Testimonials Section - Conditional */}
      {industryConfig.sections.showTestimonials && (
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <p className='text-gray-600'>Testimonials section placeholder - to be implemented</p>
          </div>
        </section>
      )}

      {/* FAQ Section - Conditional */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-600'>FAQ section placeholder - to be implemented</p>
        </div>
      </section>

      {/* CTA Section - Always shown */}
      <CTASection 
        dictionary={dictionary}
        locale={locale}
        industryConfig={industryConfig}
      />
    </div>
  )
}

export default BaseLandingContent