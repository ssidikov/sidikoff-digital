import { Metadata } from 'next'
import React from 'react'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { generatePageMetadataWithDynamicOG, SupportedLocale, supportedLocales } from '@/lib/seo'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as SupportedLocale
  
  if (!supportedLocales.includes(locale)) {
    notFound()
  }
  
  return generatePageMetadataWithDynamicOG('projects', locale)
}

export default async function LocaleProjectsPage({ params }: PageProps) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  if (!supportedLocales.includes(locale as SupportedLocale)) {
    notFound()
  }

  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container mx-auto py-20 pt-24 md:pt-32'>
        <Portfolio showAllProjects />
      </main>
      <Footer />
      <StructuredData type='all' />
    </div>
  )
}
