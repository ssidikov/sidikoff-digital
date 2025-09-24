'use client'

import React from 'react'
import { BaseLandingContent, getIndustryConfig } from '@/components/landing'
import { Dictionary } from '@/lib/dictionaries'

interface RestaurantLandingContentProps {
  dictionary: Dictionary
  locale: string
  breadcrumbs?: {
    items: Array<{ label: string; href?: string }>
  }
}

export default function RestaurantLandingContentUnified({
  dictionary,
  locale,
  breadcrumbs,
}: RestaurantLandingContentProps) {
  const industryConfig = getIndustryConfig('restaurant')

  return (
    <BaseLandingContent
      dictionary={dictionary}
      locale={locale}
      {...(breadcrumbs && { breadcrumbs })}
      industryConfig={industryConfig}
    />
  )
}