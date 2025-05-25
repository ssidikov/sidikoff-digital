'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import { useLanguage } from '@/context/LanguageContext'

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <div className='min-h-screen text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main className='container mx-auto py-20 pt-24 md:pt-32'>
        <Portfolio showAllProjects />
      </main>
      <Footer />
    </div>
  )
}
