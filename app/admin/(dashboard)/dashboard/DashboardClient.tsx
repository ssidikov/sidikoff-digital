'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface StatCardProps {
  stat: {
    name: string
    value: number
    icon: React.ComponentType<{ className?: string }>
    color: string
    trend?: string
    description?: string
  }
  index: number
}

function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group-hover:border-slate-300">
        <div className="flex items-center">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
            <stat.icon className="h-6 w-6" />
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm font-medium text-slate-600 group-hover:text-slate-700 transition-colors">
              {stat.name}
            </p>
            <p className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {stat.value}
            </p>
            {stat.description && (
              <p className="text-xs text-slate-500 mt-1">{stat.description}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface DashboardClientProps {
  stats: Array<{
    name: string
    value: number
    icon: React.ComponentType<{ className?: string }>
    color: string
    description?: string
  }>
  recentSubmissions: Array<{
    id: string
    name: string
    email: string
    created_at: string
    project_type: string
    priority: string
    status: string
  }>
}

export default function DashboardClient({ stats, recentSubmissions }: DashboardClientProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sardorbek! 👋</h1>
          <p className="text-indigo-100 text-lg">Here&apos;s an overview of your portfolio and business metrics.</p>
        </div>
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5" />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.name} stat={stat} index={index} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Submissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Recent Contact Submissions</h3>
                  <p className="text-sm text-slate-500 mt-1">Latest client inquiries and project requests</p>
                </div>
                <Link
                  href="/admin/submissions"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentSubmissions && recentSubmissions.length > 0 ? (
                <div className="space-y-4">
                  {recentSubmissions.map((submission, index) => (
                    <motion.div
                      key={submission.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                        <span className="text-white text-sm font-medium">
                          {submission.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-4 flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{submission.name}</p>
                        <p className="text-sm text-slate-500 truncate">{submission.email}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-slate-400">{submission.project_type}</span>
                          <span className="text-xs text-slate-300">•</span>
                          <span className="text-xs text-slate-400">
                            {new Date(submission.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          submission.status === 'new' ? 'bg-amber-100 text-amber-800' :
                          submission.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                          submission.status === 'in-progress' ? 'bg-purple-100 text-purple-800' :
                          submission.status === 'completed' ? 'bg-green-100 text-green-800' :
                          'bg-slate-100 text-slate-800'
                        }`}>
                          {submission.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <h3 className="mt-4 text-sm font-medium text-slate-900">No submissions yet</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    When clients contact you through the website, they&apos;ll appear here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-6"
        >
          {/* Quick Actions Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/admin/projects/new"
                className="flex items-center w-full p-3 text-left rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200 transition-all duration-200 group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900 group-hover:text-indigo-700">Add New Project</p>
                  <p className="text-xs text-slate-500">Showcase your latest work</p>
                </div>
              </Link>
              
              <Link
                href="/admin/projects"
                className="flex items-center w-full p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-600 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900 group-hover:text-slate-700">Manage Projects</p>
                  <p className="text-xs text-slate-500">Edit existing portfolio</p>
                </div>
              </Link>
              
              <Link
                href="/admin/submissions"
                className="flex items-center w-full p-3 text-left rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-600 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900 group-hover:text-slate-700">View Inquiries</p>
                  <p className="text-xs text-slate-500">Check client messages</p>
                </div>
              </Link>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-sm text-slate-600">Website</span>
                </div>
                <span className="text-xs text-green-600 font-medium">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-sm text-slate-600">Database</span>
                </div>
                <span className="text-xs text-green-600 font-medium">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-sm text-slate-600">Forms</span>
                </div>
                <span className="text-xs text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
