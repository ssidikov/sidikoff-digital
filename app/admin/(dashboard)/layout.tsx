import { redirect } from 'next/navigation'
import { getAdminSession } from '@/lib/admin-auth-server'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAdminSession()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <AdminSidebar />
      <div className="lg:pl-72">
        <AdminHeader user={user} />
        <main className="py-8">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
