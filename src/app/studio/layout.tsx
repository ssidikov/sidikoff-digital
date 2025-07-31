import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studio - SIDIKOFF DIGITAL',
  description: 'Content Management System',
  robots: {
    index: false,
    follow: false,
  },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
