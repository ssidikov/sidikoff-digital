'use client'

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-indigo-600 rounded-full mx-auto mb-4 animate-spin" />
        <div className="animate-pulse">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Loading Dashboard</h2>
          <p className="text-slate-600">Preparing your admin panel...</p>
        </div>
      </div>
    </div>
  )
}
