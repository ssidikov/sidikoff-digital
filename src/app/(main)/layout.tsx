import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen' suppressHydrationWarning>
      <Header />
      <main className='m-0 p-0'>{children}</main>
      <Footer />
    </div>
  )
}
