import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SIDIKOFF DIGITAL- Agence Web & Développement Digital',
    short_name: 'Sidikoff',
    description:
      'Agence web française spécialisée dans la création de sites internet modernes, applications web et mobiles. Expertise React, Next.js, développement sur mesure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#667eea',
    orientation: 'portrait',
    scope: '/',
    lang: 'fr',
    categories: ['business', 'productivity', 'technology'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Services',
        short_name: 'Services',
        description: 'Découvrez nos services de développement web',
        url: '/#services',
        icons: [{ src: '/logo-sidikoff.webp', sizes: '96x96' }],
      },
      {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'Consultez nos réalisations',
        url: '/#portfolio',
        icons: [{ src: '/logo-sidikoff.webp', sizes: '96x96' }],
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Contactez-nous pour votre projet',
        url: '/contact',
        icons: [{ src: '/logo-sidikoff.webp', sizes: '96x96' }],
      },
    ],
  }
}
