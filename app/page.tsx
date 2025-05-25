'use client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Prices from '@/components/Prices'

export default function Page() {
  return (
    <div className='scroll-smooth min-h-screen bg-background text-foreground transition-colors duration-300 bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <Hero />
      <Expertise />
      <About />
      <Technologies />
      <Portfolio />
      <Prices />
      <Contact />
      <Footer />
    </div>
  )
}
