import { Metadata } from 'next'
import Link from 'next/link'
import { Project } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Nos Projets | SIDIKOFF DIGITAL- Portfolio',
  description:
    'Découvrez notre portfolio de projets web et applications développés pour nos clients.',
}

export default async function ProjectsPage() {
  // Mock projects data for now
  const projects: Project[] = []

  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-8'>Nos Projets</h1>

        {projects.length === 0 ? (
          <div className='text-center py-16'>
            <p className='text-gray-600 mb-8'>Nos projets seront bientôt disponibles.</p>
            <Link
              href='/'
              className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
              Retour à l&apos;accueil
            </Link>
          </div>
        ) : (
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <div key={project.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                {/* Project card content will be added here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
