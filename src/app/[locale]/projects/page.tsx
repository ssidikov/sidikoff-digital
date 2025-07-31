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
      background='pattern'
      backgroundConfig={{
        image: '/images/bg-image-3.svg',
        backgroundColor: '#fafafa',
        size: '100% auto',
        position: 'center top',
        repeat: 'repeat-y',
      }}
      className='px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto px-4 relative z-30'>
        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight mt-16'>
          {dict?.projects?.title || 'All Projects'}
        </h1>
        <ProjectsClient allProjects={allProjects} locale={locale} dict={dict} />
      </div>
    </Section>
  )
}
