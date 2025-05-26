import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, pagesSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = generateSEOMetadata(pagesSEO.services.fr)

export default function ServicesPage() {
  return (
    <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
      <Header />

      <main className='pt-20'>
        <div className='container mx-auto px-4 py-16'>
          <div className='max-w-4xl mx-auto text-center mb-16'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Services & <span className='text-primary'>Tarifs</span>
            </h1>
            <p className='text-xl text-muted-foreground'>
              Des solutions web accessibles et sur mesure pour votre entreprise parisienne
            </p>
          </div>

          {/* Redirect message */}
          <div className='max-w-2xl mx-auto text-center'>
            <div className='bg-primary/10 p-8 rounded-lg'>
              <h2 className='text-2xl font-bold mb-4'>
                Nos Services Sont Maintenant sur la Page d'Accueil
              </h2>
              <p className='text-muted-foreground mb-6'>
                Retrouvez tous nos services, tarifs et réponses aux questions fréquentes directement
                sur notre page d'accueil.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/#services'
                  className='bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'>
                  Voir Nos Services
                </a>
                <a
                  href='/#faq'
                  className='border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors'>
                  Questions Fréquentes
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
