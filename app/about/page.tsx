import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, pagesSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = generateSEOMetadata(pagesSEO.about.fr)

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://sidikoff-digital.fr/about#aboutpage',
  url: 'https://sidikoff-digital.fr/about',
  name: 'À Propos de SIDIKOFF DIGITAL',
  description: 'Découvrez SIDIKOFF DIGITAL, votre agence web parisienne',
  mainEntity: {
    '@id': 'https://sidikoff-digital.fr/#organization'
  }
}

export default function AboutPage() {
  return (
    <>
      <StructuredData customData={aboutSchema} />
        <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
        <Header />
        <Breadcrumbs />
        
        <main className='pt-8'>
          <div className='container mx-auto px-4 py-16'>
            <div className='max-w-4xl mx-auto'>
              <h1 className='text-4xl md:text-5xl font-bold text-center mb-8'>
                À Propos de <span className='text-primary'>SIDIKOFF DIGITAL</span>
              </h1>
              
              <div className='prose prose-lg max-w-none dark:prose-invert'>
                <p className='text-xl text-muted-foreground text-center mb-12'>
                  Votre agence web parisienne spécialisée en création de sites internet et applications web modernes
                </p>
                
                <div className='grid md:grid-cols-2 gap-12 mb-16'>
                  <div>
                    <h2 className='text-2xl font-semibold mb-4'>Notre Mission</h2>
                    <p>
                      SIDIKOFF DIGITAL est une agence web basée à Paris, dédiée à accompagner les entreprises, 
                      PME et associations dans leur transformation digitale. Nous créons des sites internet 
                      performants, évolutifs et centrés sur l'utilisateur.
                    </p>
                    <p>
                      Notre approche est basée sur l'écoute, la qualité du code et la réussite de vos projets. 
                      Nous allions expertise technique, créativité et sens du détail pour livrer des expériences 
                      digitales sur mesure.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className='text-2xl font-semibold mb-4'>Notre Expertise</h2>
                    <ul className='space-y-2'>
                      <li>✓ Développement web moderne (React, Next.js, TypeScript)</li>
                      <li>✓ Design UX/UI responsive et accessible</li>
                      <li>✓ Optimisation SEO et performances</li>
                      <li>✓ E-commerce et applications web</li>
                      <li>✓ Maintenance et support technique</li>
                      <li>✓ Stratégie digitale et conseil</li>
                    </ul>
                  </div>
                </div>
                
                <div className='bg-muted p-8 rounded-lg mb-16'>
                  <h2 className='text-2xl font-semibold mb-4 text-center'>Pourquoi Choisir SIDIKOFF DIGITAL ?</h2>
                  <div className='grid md:grid-cols-3 gap-6'>
                    <div className='text-center'>
                      <h3 className='text-lg font-semibold mb-2'>🎯 Approche Personnalisée</h3>
                      <p className='text-sm'>Chaque projet est unique et mérite une solution sur mesure</p>
                    </div>
                    <div className='text-center'>
                      <h3 className='text-lg font-semibold mb-2'>⚡ Performance Optimale</h3>
                      <p className='text-sm'>Sites rapides, sécurisés et optimisés pour le référencement</p>
                    </div>
                    <div className='text-center'>
                      <h3 className='text-lg font-semibold mb-2'>🤝 Accompagnement Complet</h3>
                      <p className='text-sm'>De la conception à la maintenance, nous restons à vos côtés</p>
                    </div>
                  </div>
                </div>
                
                <div className='text-center'>
                  <h2 className='text-2xl font-semibold mb-4'>Basés à Paris, Rayonnement National</h2>
                  <p className='text-lg mb-8'>
                    Implantés au cœur de Paris, nous intervenons partout en France pour accompagner 
                    votre croissance digitale. Rencontrons-nous pour discuter de votre projet !
                  </p>
                  
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <a 
                      href='#contact' 
                      className='bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'
                    >
                      Parlons de votre projet
                    </a>
                    <a 
                      href='/portfolio' 
                      className='border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors'
                    >
                      Voir nos réalisations
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
