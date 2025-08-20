
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Section } from '@/components/ui'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params

  // Here you would typically fetch the project data
  // For now, we'll just show a placeholder
  if (!id) {
    notFound()
  }

  return (
    <Section
      id='project-detail'
      variant='project-detail'
      padding='xl'
      contentWidth='wide'>
      <div className='relative z-10'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='bg-white/80 backdrop-blur-sm rounded-lg shadow p-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-8'>Project: {id}</h1>

            <div className='space-y-6 text-gray-700'>
              <p>Project details would be displayed here.</p>
              <p>Project ID: {id}</p>
            </div>

            <div className='mt-8 pt-6 border-t'>
              <Link href='/projects' className='text-blue-600 hover:text-blue-800 transition-colors'>
                ← Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
