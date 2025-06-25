// import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  try {
    await requireAdminAuth()
    // const supabase = createAdminClient() // Removed unused variable

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sardorbek! 👋</h1>
          <p className="text-indigo-100 text-lg">Dashboard loaded successfully</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href="/admin/projects/new"
              className="flex items-center w-full p-3 text-left rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200 transition-all duration-200"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                ➕
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-slate-900">Add New Project</p>
                <p className="text-xs text-slate-500">Showcase your latest work</p>
              </div>
            </Link>
            
            <Link
              href="/admin/projects"
              className="flex items-center w-full p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-600 text-white">
                📁
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-slate-900">Manage Projects</p>
                <p className="text-xs text-slate-500">Edit existing portfolio</p>
              </div>
            </Link>
            
            <Link
              href="/admin/submissions"
              className="flex items-center w-full p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-600 text-white">
                📧
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-slate-900">View Inquiries</p>
                <p className="text-xs text-slate-500">Check client messages</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Dashboard error:', error)
    return (
      <div className="space-y-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error loading dashboard:</strong>
          <span className="block sm:inline"> {error instanceof Error ? error.message : 'Unknown error'}</span>
        </div>
      </div>
    )
  }
}
