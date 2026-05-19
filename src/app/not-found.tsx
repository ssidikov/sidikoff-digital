import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page non trouvée | Sidikoff Digital',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[var(--background)]'>
      <div className='text-center px-6'>
        <h1 className='text-8xl font-bold text-[var(--accent)] mb-4'>404</h1>
        <h2 className='text-2xl font-semibold text-[var(--foreground)] mb-4'>
          Page non trouvée
        </h2>
        <p className='text-lg text-gray-500 mb-8 max-w-md mx-auto'>
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href='/'
          className='inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity'>
          <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
