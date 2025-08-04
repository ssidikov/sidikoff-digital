import { NextResponse } from 'next/server'

export async function GET() {
  const manifest = {
    name: 'SIDIKOFF DIGITAL - Agence Web & Développement Digital',
    short_name: 'SIDIKOFF DIGITAL',
    description:
      'Agence web spécialisée dans la création de sites internet modernes, applications web et mobiles. Expertise React, Next.js, développement sur mesure.',
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
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Services',
        short_name: 'Services',
        description: 'Découvrez nos services de développement web',
        url: '/#services',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'Consultez nos réalisations et projets',
        url: '/#portfolio',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Contactez-nous pour votre projet',
        url: '/#contact',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
    ],
  }

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
