import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import StructuredData from '@/components/StructuredData'
import { generatePageMetadataWithDynamicOG } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadataWithDynamicOG('projects', 'fr')

export default function ProjectsPage() {
  return (
    <>
      <StructuredData 
        type="webpage" 
        pageData={{
          name: 'Projets - Nos Réalisations Web | SIDIKOFF DIGITAL',
          description: 'Découvrez nos projets web : sites vitrine, e-commerce, applications. Projets de SIDIKOFF DIGITAL, agence web à Paris. Exemples et références clients.',
          url: 'https://www.sidikoff.com/projects',
          locale: 'fr-FR',
        }}
        breadcrumbs={[
          { name: 'Accueil', url: 'https://www.sidikoff.com/' },
          { name: 'Projets', url: 'https://www.sidikoff.com/projects' }
        ]}
      />
      <div className='min-h-screen'>
        <Header />
        <main className='container mx-auto py-20 pt-24 md:pt-32'>
          <Portfolio showAllProjects />
        </main>
        <Footer />
      </div>
    </>
  )
}
