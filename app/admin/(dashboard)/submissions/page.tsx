import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'

export const dynamic = 'force-dynamic'

interface Submission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: 'new' | 'read' | 'replied'
  created_at: string
}

async function getSubmissions(): Promise<Submission[]> {
  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching submissions:', error)
    return []
  }

  return data || []
}

function getStatusBadge(status: string) {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors'

  switch (status) {
    case 'new':
      return (
        <span
          className={`${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 shadow-sm`}>
          <div className='w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse'></div>
          New
        </span>
      )
    case 'read':
      return (
        <span
          className={`${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 shadow-sm`}>
          <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
          Read
        </span>
      )
    case 'replied':
      return (
        <span
          className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow-sm`}>
          <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
          Replied
        </span>
      )
    default:
      return (
        <span
          className={`${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 shadow-sm`}>
          <div className='w-2 h-2 bg-gray-500 rounded-full mr-2'></div>
          {status}
        </span>
      )
  }
}

function formatRelativeTime(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) {
    return "Less than an hour ago"
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  } else {
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
    } else {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }
}

function getPriorityLevel(dateString: string, status: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (status === 'new' && diffInHours < 24) return 'high'
  if (status === 'read' && diffInHours > 72) return 'medium'
  return 'low'
}

export default async function SubmissionsPage() {
  await requireAdminAuth()
  const submissions = await getSubmissions()

  const stats = {
    total: submissions.length,
    new: submissions.filter(s => s.status === 'new').length,
    read: submissions.filter(s => s.status === 'read').length,
    replied: submissions.filter(s => s.status === 'replied').length,
  }

  return (
    <div className='container mx-auto p-6'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Contact Messages</h1>
          <p className='text-gray-600'>Manage and respond to customer inquiries</p>
        </div>
        <div className='flex items-center space-x-4 mt-4 sm:mt-0'>
          <div className='text-sm text-gray-500'>
            Last updated: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center'>
                <svg className='w-6 h-6 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>{stats.total}</p>
              <p className='text-sm text-gray-500'>Total Messages</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center'>
                <div className='w-4 h-4 bg-red-500 rounded-full animate-pulse'></div>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-red-600'>{stats.new}</p>
              <p className='text-sm text-gray-500'>New Messages</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-blue-600'>{stats.read}</p>
              <p className='text-sm text-gray-500'>Read Messages</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-green-600'>{stats.replied}</p>
              <p className='text-sm text-gray-500'>Replied</p>
            </div>
          </div>
        </div>
      </div>

      {submissions.length === 0 ? (
        <div className='bg-white rounded-xl border border-gray-200 shadow-sm'>
          <div className='text-center py-16'>
            <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>No contact messages yet</h3>
            <p className='text-gray-500 max-w-md mx-auto'>
              When customers send messages through your contact form, they&apos;ll appear here for you to review and respond to.
            </p>
          </div>
        </div>
      ) : (
        <div className='bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Contact Information
                  </th>
                  <th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Subject & Message
                  </th>
                  <th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Status
                  </th>
                  <th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Received
                  </th>
                  <th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {submissions.map((submission) => {
                  const priority = getPriorityLevel(submission.created_at, submission.status)
                  return (
                    <tr 
                      key={submission.id} 
                      className={`hover:bg-gray-50 transition-colors ${
                        priority === 'high' ? 'bg-red-50 hover:bg-red-100' : 
                        priority === 'medium' ? 'bg-yellow-50 hover:bg-yellow-100' : ''
                      }`}>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0'>
                            <div className='w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center'>
                              <span className='text-indigo-600 font-medium text-sm'>
                                {submission.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {submission.name}
                            </div>
                            <div className='text-sm text-gray-500 break-all'>
                              {submission.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4'>
                        <div className='max-w-xs'>
                          <div className='text-sm font-medium text-gray-900 truncate mb-1'>
                            {submission.subject}
                          </div>
                          <div className='text-sm text-gray-500 line-clamp-2'>
                            {submission.message}
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4'>
                        {getStatusBadge(submission.status)}
                      </td>
                      <td className='px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          {formatRelativeTime(submission.created_at)}
                        </div>
                        <div className='text-xs text-gray-500'>
                          {new Date(submission.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </td>
                      <td className='px-6 py-4'>
                        <a
                          href={`/admin/submissions/${submission.id}`}
                          className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors'>
                          <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                          </svg>
                          View Details
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
