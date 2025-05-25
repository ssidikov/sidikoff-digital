import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'SIDIKOFF Digital - Современные веб-решения',
  description:
    'Создание современных веб-сайтов и приложений с использованием передовых технологий. Next.js, TypeScript, красивый дизайн.',
  keywords: ['веб-разработка', 'Next.js', 'TypeScript', 'современный дизайн', 'веб-сайты'],
  authors: [{ name: 'SIDIKOFF Digital' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru' className='scroll-smooth'>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
