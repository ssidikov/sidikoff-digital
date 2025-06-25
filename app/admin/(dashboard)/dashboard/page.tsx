import { createAdminClient } from '@/utils/supabase/server'
import { requireAdminAuth } from '@/lib/admin-auth-server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

function formatRelativeTime(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return "Less than an hour ago"
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default async function AdminDashboard() {
  await requireAdminAuth()
  const supabase = createAdminClient()

  // Get dashboard statistics
  const [projectsResult, submissionsResult] = await Promise.all([
    supabase.from('projects').select('*', { count: 'exact' }),
    supabase.from('contact_submissions').select('*', { count: 'exact' }),
  ])

  const totalProjects = projectsResult.count || 0
  const totalSubmissions = submissionsResult.count || 0

  // Get recent submissions
  const { data: recentSubmissions } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  // Get new submissions count (last 24 hours)
  const twentyFourHoursAgo = new Date()
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)
  
  const { data: newSubmissions } = await supabase
    .from('contact_submissions')
    .select('*')
    .gte('created_at', twentyFourHoursAgo.toISOString())

  // Get project statistics
  const { data: featuredProjects } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)

  const { data: recentProjects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  // Get payment statistics
  const { data: paidProjects } = await supabase
    .from('projects')
    .select('*')
    .eq('payment_status', 'completed')

  const { data: pendingPayments } = await supabase
    .from('projects')
    .select('*')
    .in('payment_status', ['pending', 'partial', 'overdue'])

  const { data: overduePayments } = await supabase
    .from('projects')
    .select('*')
    .eq('payment_status', 'overdue')

  const { data: freeProjects } = await supabase
    .from('projects')
    .select('*')
    .eq('payment_status', 'free')

  // Calculate revenue estimate (assuming average project value)
  const totalRevenue = (paidProjects?.length || 0) * 2500 // Estimate
  const pendingRevenue = (pendingPayments?.length || 0) * 2500
  
  // Use freeProjects for potential future features
  console.log('Free projects count:', freeProjects?.length || 0)

  return (
    <div className='space-y-8'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
          <p className='text-gray-600 mt-1'>Welcome back! Here&apos;s what&apos;s happening with your business.</p>
        </div>
        <div className='flex items-center space-x-4 mt-4 sm:mt-0'>
          <div className='text-sm text-gray-500'>
            Last updated: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <Link
            href='/admin/projects/new'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors'>
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
            </svg>
            New Project
          </Link>
        </div>
      </div>

      {/* Key Metrics */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center'>
                <svg className='w-6 h-6 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>{totalProjects}</p>
              <p className='text-sm text-gray-500'>Total Projects</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span className='text-green-600 font-medium'>{featuredProjects?.length || 0} featured</span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>{totalSubmissions}</p>
              <p className='text-sm text-gray-500'>Contact Messages</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span className='text-orange-600 font-medium'>{newSubmissions?.length || 0} new today</span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>${totalRevenue.toLocaleString()}</p>
              <p className='text-sm text-gray-500'>Total Revenue</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span className='text-green-600 font-medium'>{paidProjects?.length || 0} paid projects</span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center'>
                <svg className='w-6 h-6 text-yellow-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>${pendingRevenue.toLocaleString()}</p>
              <p className='text-sm text-gray-500'>Pending Revenue</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span className='text-red-600 font-medium'>{overduePayments?.length || 0} overdue</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Recent Contact Messages */}
        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-lg font-semibold text-gray-900'>Recent Contact Messages</h2>
            <Link 
              href='/admin/submissions'
              className='text-sm text-indigo-600 hover:text-indigo-700 font-medium'>
              View all →
            </Link>
          </div>
          <div className='space-y-4'>
            {recentSubmissions && recentSubmissions.length > 0 ? (
              recentSubmissions.map((submission) => (
                <div key={submission.id} className='flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
                  <div className='flex-shrink-0'>
                    <div className='h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium'>
                      {submission.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className='ml-3 flex-1 min-w-0'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-gray-900 truncate'>{submission.name}</p>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        submission.status === 'new' ? 'bg-red-100 text-red-800' :
                        submission.status === 'read' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {submission.status}
                      </span>
                    </div>
                    <p className='text-xs text-gray-500 truncate'>{submission.subject}</p>
                    <p className='text-xs text-gray-400 mt-1'>{formatRelativeTime(submission.created_at)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center py-8'>
                <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <svg className='w-6 h-6 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <p className='text-sm text-gray-500'>No recent messages</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Projects */}
        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-lg font-semibold text-gray-900'>Recent Projects</h2>
            <Link 
              href='/admin/projects'
              className='text-sm text-indigo-600 hover:text-indigo-700 font-medium'>
              View all →
            </Link>
          </div>
          <div className='space-y-4'>
            {recentProjects && recentProjects.length > 0 ? (
              recentProjects.map((project) => (
                <div key={project.id} className='flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
                  <div className='flex-shrink-0'>
                    <div className='h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-medium'>
                      {project.title.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className='ml-3 flex-1 min-w-0'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-gray-900 truncate'>{project.title}</p>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                      <p className='text-xs text-gray-500'>{project.category}</p>
                      <span className={`text-xs font-medium ${
                        project.payment_status === 'completed' ? 'text-green-600' :
                        project.payment_status === 'overdue' ? 'text-red-600' :
                        'text-yellow-600'
                      }`}>
                        {project.payment_status}
                      </span>
                    </div>
                    <p className='text-xs text-gray-400 mt-1'>{formatRelativeTime(project.created_at)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center py-8'>
                <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <svg className='w-6 h-6 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                  </svg>
                </div>
                <p className='text-sm text-gray-500'>No recent projects</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white'>
        <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Link
            href='/admin/projects/new'
            className='flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors'>
            <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
            </svg>
            <span className='font-medium'>New Project</span>
          </Link>
          
          <Link
            href='/admin/projects'
            className='flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors'>
            <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
            </svg>
            <span className='font-medium'>Manage Projects</span>
          </Link>
          
          <Link
            href='/admin/submissions'
            className='flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors'>
            <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
            <span className='font-medium'>View Messages</span>
          </Link>
          
          <a
            href='/'
            target='_blank'
            className='flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors'>
            <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
            </svg>
            <span className='font-medium'>View Website</span>
          </a>
        </div>
      </div>
    </div>
  )
}
