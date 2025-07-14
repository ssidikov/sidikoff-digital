import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin-auth-server'
import AdminSidebar, { MobileMenuProvider } from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'
import ChunkErrorBoundary from '@/components/admin/ChunkErrorBoundary'
import ChunkLoaderInit from '@/components/admin/ChunkLoaderInit'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'

// Force dynamic rendering for admin routes due to authentication
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'SIDIKOFF Admin Dashboard',
  description: 'Admin dashboard for managing SIDIKOFF Digital website',
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getAdminSession()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <ChunkErrorBoundary>
      <ChunkLoaderInit />
      <MobileMenuProvider>
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100'>
          <AdminSidebar user={user} />
          <div className='lg:pl-72'>
            <AdminHeader />
            <main className='py-4 sm:py-6 lg:py-8 min-h-[calc(100vh-4rem)]'>
              <div className='px-3 sm:px-4 lg:px-8 max-w-7xl mx-auto'>{children}</div>
            </main>
          </div>
          <Toaster
            position='top-center'
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
                fontSize: '14px',
                maxWidth: '90vw',
                borderRadius: '12px',
                padding: '12px 16px',
              },
              success: {
                duration: 3000,
                style: {
                  background: '#10b981',
                },
              },
              error: {
                duration: 5000,
                style: {
                  background: '#ef4444',
                },
              },
            }}
          />
        </div>
      </MobileMenuProvider>
    </ChunkErrorBoundary>
  )
}
