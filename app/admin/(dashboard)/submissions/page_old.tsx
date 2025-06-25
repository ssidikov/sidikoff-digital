'use client'

import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'
import SubmissionActions from '@/components/admin/SubmissionActions'
import { motion } from 'framer-motion'

export default async function AdminSubmissions() {
  await requireAdminAuth()
  const supabase = createAdminClient()

  const { data: submissions, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching submissions:', error)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'in-progress': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return (
          <svg className="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        )
      case 'high':
        return (
          <svg className="h-3 w-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
      >
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Contact Submissions</h1>
            <p className="text-slate-600">
              Manage client inquiries and project requests from your website contact form.
            </p>
            <div className="mt-4 flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-slate-600">
                  {submissions?.filter(s => s.status === 'new').length || 0} New
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-slate-600">
                  {submissions?.filter(s => s.status === 'contacted').length || 0} Contacted
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-slate-600">
                  {submissions?.filter(s => s.status === 'in-progress').length || 0} In Progress
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-slate-600">
                  {submissions?.filter(s => s.status === 'completed').length || 0} Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Submissions List */}
      {submissions && submissions.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">All Submissions ({submissions.length})</h2>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="py-4 pl-6 pr-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th scope="col" className="px-3 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-3 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Budget
                  </th>
                  <th scope="col" className="px-3 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Priority
                  </th>
                  <th scope="col" className="px-3 py-4 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="relative py-4 pl-3 pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {submissions.map((submission, index) => (
                  <motion.tr
                    key={submission.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-4 pl-6 pr-3">
                      <div className="flex items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                          <span className="text-white text-sm font-semibold">
                            {submission.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="font-semibold text-slate-900">{submission.name}</div>
                          <div className="text-slate-500 text-sm">{submission.email}</div>
                          {submission.phone && (
                            <div className="text-slate-500 text-xs">{submission.phone}</div>
                          )}
                          {submission.company && (
                            <div className="text-slate-600 text-xs font-medium">{submission.company}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                          {submission.project_type || 'N/A'}
                        </span>
                        {submission.message && (
                          <div className="text-xs text-slate-500 mt-2 max-w-xs truncate">
                            {submission.message}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-600 font-medium">
                      {submission.budget || 'Not specified'}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(submission.priority)}`}>
                        {getPriorityIcon(submission.priority) && (
                          <span className="mr-1">{getPriorityIcon(submission.priority)}</span>
                        )}
                        {submission.priority}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                      <div>
                        {new Date(submission.created_at).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-slate-400">
                        {new Date(submission.created_at).toLocaleTimeString()}
                      </div>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-6">
                      <SubmissionActions submission={submission} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden">
            <div className="p-4 space-y-4">
              {submissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-slate-50 rounded-xl p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                        <span className="text-white text-sm font-semibold">
                          {submission.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-slate-900">{submission.name}</h3>
                        <p className="text-sm text-slate-500">{submission.email}</p>
                        {submission.company && (
                          <p className="text-xs text-slate-600 font-medium">{submission.company}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(submission.priority)}`}>
                        {getPriorityIcon(submission.priority) && (
                          <span className="mr-1">{getPriorityIcon(submission.priority)}</span>
                        )}
                        {submission.priority}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500">Project Type:</span>
                      <div className="font-medium text-slate-900">
                        {submission.project_type || 'Not specified'}
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500">Budget:</span>
                      <div className="font-medium text-slate-900">
                        {submission.budget || 'Not specified'}
                      </div>
                    </div>
                  </div>
                  
                  {submission.message && (
                    <div>
                      <span className="text-slate-500 text-sm">Message:</span>
                      <div className="text-sm text-slate-700 mt-1 bg-white p-3 rounded-lg">
                        {submission.message}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-slate-500">
                      {new Date(submission.created_at).toLocaleDateString()} at{' '}
                      {new Date(submission.created_at).toLocaleTimeString()}
                    </div>
                    <SubmissionActions submission={submission} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12"
        >
          <div className="text-center">
            <svg className="mx-auto h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">No submissions yet</h3>
            <p className="mt-2 text-slate-500 max-w-sm mx-auto">
              When clients contact you through the website contact form, their messages will appear here for you to review and respond to.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center gap-x-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Contact form is active and ready to receive submissions
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {submissions?.map((submission) => (
                    <tr key={submission.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div>
                          <div className="font-medium text-gray-900">{submission.name}</div>
                          <div className="text-gray-500">{submission.email}</div>
                          {submission.phone && (
                            <div className="text-gray-500 text-xs">{submission.phone}</div>
                          )}
                          {submission.company && (
                            <div className="text-gray-600 text-xs font-medium">{submission.company}</div>
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {submission.project_type || 'N/A'}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {submission.budget || 'N/A'}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          submission.status === 'new' ? 'bg-yellow-100 text-yellow-800' :
                          submission.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                          submission.status === 'in-progress' ? 'bg-purple-100 text-purple-800' :
                          submission.status === 'completed' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          submission.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                          submission.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                          submission.priority === 'medium' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {submission.priority}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <SubmissionActions submission={submission} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {(!submissions || submissions.length === 0) && (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No submissions</h3>
                  <p className="mt-1 text-sm text-gray-500">No contact form submissions have been received yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
