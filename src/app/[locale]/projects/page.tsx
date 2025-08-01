import { getProjects } from '@/data/projects'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { ProjectsClient } from './projects-client'
import { Section } from '@/components/ui'

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const allProjects = getProjects(locale)

  return (
    <Section
      id='portfolio'
      background='white'
      padding='lg'
      contentWidth='wide'>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/8 to-purple-400/8"></div>
      <div className='relative z-10'>
        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight pt-16 md:pt-20'>
          {dict?.projects?.title || 'All Projects'}
        </h1>
        <ProjectsClient allProjects={allProjects} locale={locale} dict={dict} />
      </div>
    </Section>
  )
}
