'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  project_type?: string
  budget?: string
  timeline?: string
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'archived'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  notes?: string
  created_at: string
}

interface Project {
  id: string
  title: string
  description: string
  category: string
  status: 'in-progress' | 'completed' | 'archived'
  payment_status: 'pending' | 'partial' | 'completed' | 'overdue' | 'free'
  featured: boolean
  created_at: string
}

interface DashboardStats {
  totalProjects: number
  totalSubmissions: number
  newSubmissions: number
  featuredProjects: number
  paidProjects: number
  pendingPayments: number
  overduePayments: number
  totalRevenue: number
  pendingRevenue: number
}

function formatRelativeTime(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return 'Less than an hour ago'
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function DashboardClient() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalSubmissions: 0,
    newSubmissions: 0,
    featuredProjects: 0,
    paidProjects: 0,
    pendingPayments: 0,
    overduePayments: 0,
    totalRevenue: 0,
    pendingRevenue: 0,
  })
  const [recentSubmissions, setRecentSubmissions] = useState<ContactSubmission[]>([])
  const [recentProjects, setRecentProjects] = useState<Project[]>([])
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [previousNewCount, setPreviousNewCount] = useState(0)
  const hasPlayedNotification = useRef(false)

  const fetchDashboardData = async (showRefreshing = false) => {
    try {
      if (showRefreshing) {
        setIsRefreshing(true)
      }
      setError(null)

      // Get dashboard statistics via API
      const [submissionsResponse, projectsResponse] = await Promise.all([
        fetch('/api/admin/submissions'),
        fetch('/api/admin/projects'),
      ])

      if (!submissionsResponse.ok || !projectsResponse.ok) {
        throw new Error('Failed to fetch dashboard data')
      }

      const [submissionsData, projectsData] = await Promise.all([
        submissionsResponse.json(),
        projectsResponse.json(),
      ])

      const totalProjects = projectsData.length || 0
      const totalSubmissions = submissionsData.length || 0

      // Get recent submissions (first 5 from API response)
      const recentSubmissionsData = submissionsData.slice(0, 5)

      // Get new submissions count (last 24 hours)
      const twentyFourHoursAgo = new Date()
      twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)

      const newSubmissionsData = submissionsData.filter(
        (submission: ContactSubmission) => new Date(submission.created_at) >= twentyFourHoursAgo
      )

      // Get project statistics
      const featuredProjectsData = projectsData.filter((project: Project) => project.featured)
      const recentProjectsData = projectsData.slice(0, 5)

      // Get payment statistics
      const paidProjectsData = projectsData.filter(
        (project: Project) => project.payment_status === 'completed'
      )
      const pendingPaymentsData = projectsData.filter((project: Project) =>
        ['pending', 'partial', 'overdue'].includes(project.payment_status)
      )
      const overduePaymentsData = projectsData.filter(
        (project: Project) => project.payment_status === 'overdue'
      )

      // Calculate revenue estimate (assuming average project value)
      const totalRevenue = (paidProjectsData?.length || 0) * 2500
      const pendingRevenue = (pendingPaymentsData?.length || 0) * 2500

      setStats({
        totalProjects,
        totalSubmissions,
        newSubmissions: newSubmissionsData?.length || 0,
        featuredProjects: featuredProjectsData?.length || 0,
        paidProjects: paidProjectsData?.length || 0,
        pendingPayments: pendingPaymentsData?.length || 0,
        overduePayments: overduePaymentsData?.length || 0,
        totalRevenue,
        pendingRevenue,
      })

      setRecentSubmissions(recentSubmissionsData || [])
      setRecentProjects(recentProjectsData || [])

      // Check for new messages and play notification sound if needed
      const newSubmissionsCount = newSubmissionsData?.length || 0
      if (newSubmissionsCount > previousNewCount && !hasPlayedNotification.current && !isLoading) {
        // Play notification sound for new messages
        try {
          const audio = new Audio(
            'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEASQAAAI0CAABGAQAABAABEAUAA...'
          )
          audio.volume = 0.3
          audio.play().catch(() => {}) // Ignore errors if audio can't play
        } catch {
          // Ignore audio errors
        }
        hasPlayedNotification.current = true
        // Reset after 5 seconds to allow new notifications
        setTimeout(() => {
          hasPlayedNotification.current = false
        }, 5000)
      }
      setPreviousNewCount(newSubmissionsCount)

      setLastUpdated(new Date())
      setIsLoading(false)
      setIsRefreshing(false)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      setError(error instanceof Error ? error.message : 'Failed to fetch dashboard data')
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  const handleManualRefresh = () => {
    fetchDashboardData(true)
  }

  useEffect(() => {
    // Initial load
    fetchDashboardData()

    // Set up polling intervals for updates since we removed real-time subscriptions
    const quickInterval = setInterval(() => {
      // Quick check for new submissions every 30 seconds
      fetchDashboardData()
    }, 30000)

    const regularInterval = setInterval(() => {
      // Full dashboard refresh every 5 minutes
      fetchDashboardData()
    }, 300000)

    return () => {
      clearInterval(quickInterval)
      clearInterval(regularInterval)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-[400px]'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600'></div>
      </div>
    )
  }

  return (
    <div className='space-y-8'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
          <p className='text-gray-600 mt-1'>
            Welcome back! Here&apos;s what&apos;s happening with your business.
          </p>
        </div>
        <div className='flex items-center space-x-4 mt-4 sm:mt-0'>
          <div className='text-sm text-gray-500 flex items-center space-x-2'>
            <div
              className={`w-2 h-2 rounded-full ${
                error ? 'bg-red-500' : 'bg-green-500 animate-pulse'
              }`}></div>
            <span>
              {error ? 'Connection error' : 'Live data'} - Last updated:{' '}
              {lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <button
            onClick={handleManualRefresh}
            disabled={isRefreshing}
            className={`inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
              isRefreshing ? 'opacity-50 cursor-not-allowed' : ''
            }`}>
            <svg
              className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              />
            </svg>
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>
          <Link
            href='/admin/projects/new'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors'>
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
            New Project
          </Link>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <svg
                className='h-5 w-5 text-red-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-medium text-red-800'>Connection Error</h3>
              <p className='text-sm text-red-700 mt-1'>{error}</p>
              <button
                onClick={handleManualRefresh}
                className='text-sm text-red-600 underline hover:text-red-500 mt-2'>
                Try again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Key Metrics */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-6 h-6 text-indigo-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>{stats.totalProjects}</p>
              <p className='text-sm text-gray-500'>Total Projects</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span className='text-green-600 font-medium'>{stats.featuredProjects} featured</span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center relative'>
                {stats.newSubmissions > 0 && (
                  <div className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'>
                    <span className='text-xs text-white font-bold'>{stats.newSubmissions}</span>
                  </div>
                )}
                <svg
                  className='w-6 h-6 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>{stats.totalSubmissions}</p>
              <p className='text-sm text-gray-500'>Contact Messages</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span
                className={`font-medium ${
                  stats.newSubmissions > 0 ? 'text-red-600 animate-pulse' : 'text-orange-600'
                }`}>
                {stats.newSubmissions} new today
              </span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                <svg
                  className='w-6 h-6 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>
                ${stats.totalRevenue.toLocaleString()}
              </p>
              <p className='text-sm text-gray-500'>Total Revenue</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span className='text-green-600 font-medium'>{stats.paidProjects} paid projects</span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center relative'>
                {stats.overduePayments > 0 && (
                  <div className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center'>
                    <span className='text-xs text-white font-bold'>!</span>
                  </div>
                )}
                <svg
                  className='w-6 h-6 text-yellow-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
            </div>
            <div className='ml-4'>
              <p className='text-2xl font-bold text-gray-900'>
                ${stats.pendingRevenue.toLocaleString()}
              </p>
              <p className='text-sm text-gray-500'>Pending Revenue</p>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center text-sm'>
              <span
                className={`font-medium ${
                  stats.overduePayments > 0 ? 'text-red-600 animate-pulse' : 'text-red-600'
                }`}>
                {stats.overduePayments} overdue
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Recent Contact Messages */}
        <div className='bg-white rounded-xl border border-gray-200 p-6 shadow-sm'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-lg font-semibold text-gray-900 flex items-center'>
              Recent Contact Messages
              {stats.newSubmissions > 0 && (
                <span className='ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse'>
                  {stats.newSubmissions} new
                </span>
              )}
            </h2>
            <Link
              href='/admin/submissions'
              className='text-sm text-indigo-600 hover:text-indigo-700 font-medium'>
              View all →
            </Link>
          </div>
          <div className='space-y-4'>
            {recentSubmissions && recentSubmissions.length > 0 ? (
              recentSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className={`flex items-start p-4 rounded-lg transition-all duration-300 ${
                    submission.status === 'new'
                      ? 'bg-red-50 border border-red-200'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                  <div className='flex-shrink-0'>
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        submission.status === 'new'
                          ? 'bg-gradient-to-r from-red-500 to-red-600'
                          : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                      }`}>
                      {submission.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className='ml-3 flex-1 min-w-0'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-gray-900 truncate'>
                        {submission.name}
                      </p>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          submission.status === 'new'
                            ? 'bg-red-100 text-red-800'
                            : submission.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : submission.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : submission.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                        {submission.status}
                      </span>
                    </div>
                    <p className='text-xs text-gray-500 truncate'>
                      {submission.project_type || 'General inquiry'}
                    </p>
                    <p className='text-xs text-gray-400 mt-1'>
                      {formatRelativeTime(submission.created_at)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center py-8'>
                <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
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
                <div
                  key={project.id}
                  className='flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
                  <div className='flex-shrink-0'>
                    <div className='h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-medium'>
                      {project.title.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className='ml-3 flex-1 min-w-0'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-gray-900 truncate'>{project.title}</p>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : project.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className='flex items-center justify-between mt-1'>
                      <p className='text-xs text-gray-500'>{project.category}</p>
                      <span
                        className={`text-xs font-medium ${
                          project.payment_status === 'completed'
                            ? 'text-green-600'
                            : project.payment_status === 'overdue'
                            ? 'text-red-600'
                            : 'text-yellow-600'
                        }`}>
                        {project.payment_status}
                      </span>
                    </div>
                    <p className='text-xs text-gray-400 mt-1'>
                      {formatRelativeTime(project.created_at)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center py-8'>
                <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                    />
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
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
            <span className='font-medium'>New Project</span>
          </Link>

          <Link
            href='/admin/projects'
            className='flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors'>
            <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              />
            </svg>
            <span className='font-medium'>Manage Projects</span>
          </Link>

          <Link
            href='/admin/submissions'
            className={`flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors relative ${
              stats.newSubmissions > 0 ? 'animate-pulse' : ''
            }`}>
            {stats.newSubmissions > 0 && (
              <div className='absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center'>
                <span className='text-xs text-white font-bold'>{stats.newSubmissions}</span>
              </div>
            )}
            <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <span className='font-medium'>View Messages</span>
          </Link>

          <a
            href='/'
            target='_blank'
            className='flex items-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors'>
            <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
            <span className='font-medium'>View Website</span>
          </a>
        </div>
      </div>
    </div>
  )
}
