'use client'

import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-hot-toast'
import FloatingActionButton from './FloatingActionButton'

interface Message {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  project_type?: string
  budget?: string
  timeline?: string
  status: string
  priority: string
  notes?: string
  created_at: string
  updated_at: string
  deleted_at?: string | null
}

interface Stats {
  active: number
  trash: number
  total: number
}

export default function MessageManager() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessages, setSelectedMessages] = useState<string[]>([])
  const [currentView, setCurrentView] = useState<'active' | 'trash'>('active')
  const [stats, setStats] = useState<Stats>({ active: 0, trash: 0, total: 0 })
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [migrationRequired, setMigrationRequired] = useState(false)

  const fetchMessages = useCallback(
    async (view: 'active' | 'trash' = currentView) => {
      try {
        setLoading(true)
        const response = await fetch(`/api/admin/messages?view=${view}`)
        const result = await response.json()

        if (result.success) {
          setMessages(result.data)
          setStats(result.stats)
          setMigrationRequired(result.migrationStatus === 'required')

          if (result.migrationStatus === 'required') {
            toast.error('Database migration required for trash functionality')
          }
        } else {
          if (
            result.error &&
            result.error.includes('column') &&
            result.error.includes('does not exist')
          ) {
            toast.error(
              'Database migration required. Please apply the trash functionality migration first.'
            )
            setMigrationRequired(true)
          } else {
            toast.error('Failed to fetch messages')
          }
        }
      } catch (error) {
        console.error('Error fetching messages:', error)
        toast.error('Error loading messages')
      } finally {
        setLoading(false)
      }
    },
    [currentView]
  )

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  const handleSelectAll = () => {
    if (selectedMessages.length === messages.length) {
      setSelectedMessages([])
    } else {
      setSelectedMessages(messages.map((msg) => msg.id))
    }
  }

  const handleSelectMessage = (messageId: string) => {
    setSelectedMessages((prev) =>
      prev.includes(messageId) ? prev.filter((id) => id !== messageId) : [...prev, messageId]
    )
  }

  const handleBulkAction = async (action: 'moveToTrash' | 'restore' | 'permanentDelete') => {
    if (selectedMessages.length === 0) {
      toast.error('Please select messages first')
      return
    }

    const confirmMessages = {
      moveToTrash: 'Are you sure you want to move selected messages to trash?',
      restore: 'Are you sure you want to restore selected messages?',
      permanentDelete:
        'Are you sure you want to PERMANENTLY delete selected messages? This action cannot be undone!',
    }

    if (!confirm(confirmMessages[action])) {
      return
    }

    try {
      setActionLoading(true)
      const response = await fetch('/api/admin/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          messageIds: selectedMessages,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success(result.message)
        setSelectedMessages([])
        await fetchMessages()
      } else {
        if (result.migrationRequired) {
          toast.error('Database migration required for trash functionality')
          setMigrationRequired(true)
        } else {
          toast.error(result.error || 'Action failed')
        }
      }
    } catch (error) {
      console.error('Error performing bulk action:', error)
      toast.error('Failed to perform action')
    } finally {
      setActionLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getStatusBadge = (status: string) => {
    const baseClasses = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium'

    switch (status) {
      case 'new':
        return <span className={`${baseClasses} bg-red-100 text-red-800`}>New</span>
      case 'contacted':
        return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Contacted</span>
      case 'in-progress':
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>In Progress</span>
      case 'completed':
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>Completed</span>
      case 'trash':
        return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>Trash</span>
      default:
        return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</span>
    }
  }

  return (
    <div className='space-y-6'>
      {/* Migration Warning Banner */}
      {migrationRequired && (
        <div className='bg-amber-50 border-l-4 border-amber-400 p-4'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <svg className='h-5 w-5 text-amber-400' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='ml-3'>
              <p className='text-sm text-amber-700'>
                <strong>Database Migration Required:</strong> The trash functionality requires a
                database update. Please apply the migration to enable moving messages to trash and
                permanent deletion.
              </p>
              <div className='mt-2'>
                <details className='text-xs text-amber-600'>
                  <summary className='cursor-pointer hover:text-amber-800'>
                    Show migration instructions
                  </summary>
                  <div className='mt-2 p-2 bg-amber-100 rounded text-amber-800'>
                    <p>Run this SQL in your Supabase SQL Editor:</p>
                    <pre className='mt-1 text-xs overflow-x-auto'>
                      {`ALTER TABLE contact_submissions 
ADD COLUMN deleted_at timestamp with time zone DEFAULT NULL;`}
                    </pre>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header with View Tabs - Mobile Enhanced */}
      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        <div className='px-4 py-4 sm:px-6 border-b border-gray-200'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <div>
              <h1 className='text-xl sm:text-2xl font-bold text-gray-900'>Messages</h1>
              <p className='text-sm text-gray-500 mt-1'>Manage customer inquiries</p>
            </div>

            {/* Mobile-friendly bulk actions */}
            {selectedMessages.length > 0 && (
              <div className='bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-3'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
                  <div className='flex items-center space-x-2'>
                    <div className='w-6 h-6 bg-indigo-100 rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-3 h-3 text-indigo-600'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <span className='text-sm font-medium text-indigo-700'>
                      {selectedMessages.length} selected
                    </span>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {currentView === 'active' && (
                      <button
                        onClick={() => handleBulkAction('moveToTrash')}
                        disabled={actionLoading || migrationRequired}
                        className={`touch-target px-3 py-2 text-white text-sm rounded-lg font-medium transition-all duration-200 ${
                          migrationRequired
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-red-600 hover:bg-red-700 active:scale-95 mobile-card-hover ripple'
                        } disabled:opacity-50 flex items-center space-x-2`}
                        title={migrationRequired ? 'Database migration required' : ''}>
                        <svg
                          className='w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                        <span>Trash</span>
                      </button>
                    )}
                    {currentView === 'trash' && (
                      <>
                        <button
                          onClick={() => handleBulkAction('restore')}
                          disabled={actionLoading || migrationRequired}
                          className={`touch-target px-3 py-2 text-white text-sm rounded-lg font-medium transition-all duration-200 ${
                            migrationRequired
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-green-600 hover:bg-green-700 active:scale-95 mobile-card-hover ripple'
                          } disabled:opacity-50 flex items-center space-x-2`}
                          title={migrationRequired ? 'Database migration required' : ''}>
                          <svg
                            className='w-4 h-4'
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
                          <span>Restore</span>
                        </button>
                        <button
                          onClick={() => handleBulkAction('permanentDelete')}
                          disabled={actionLoading || migrationRequired}
                          className={`touch-target px-3 py-2 text-white text-sm rounded-lg font-medium transition-all duration-200 ${
                            migrationRequired
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-red-800 hover:bg-red-900 active:scale-95 mobile-card-hover ripple'
                          } disabled:opacity-50 flex items-center space-x-2`}
                          title={migrationRequired ? 'Database migration required' : ''}>
                          <svg
                            className='w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                          <span>Delete Forever</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <nav className='flex space-x-8'>
          <button
            onClick={() => {
              setCurrentView('active')
              setSelectedMessages([])
            }}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              currentView === 'active'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}>
            Active Messages
            <span className='ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs'>
              {stats.active}
            </span>
          </button>
          <button
            onClick={() => {
              if (!migrationRequired) {
                setCurrentView('trash')
                setSelectedMessages([])
              }
            }}
            disabled={migrationRequired}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              currentView === 'trash'
                ? 'border-indigo-500 text-indigo-600'
                : migrationRequired
                ? 'border-transparent text-gray-400 cursor-not-allowed'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            title={migrationRequired ? 'Database migration required for trash functionality' : ''}>
            Trash
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs ${
                migrationRequired ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-gray-600'
              }`}>
              {stats.trash}
            </span>
          </button>
        </nav>
      </div>

      {/* Messages Table */}
      {loading ? (
        <div className='text-center py-8'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto'></div>
          <p className='mt-2 text-gray-600'>Loading messages...</p>
        </div>
      ) : messages.length === 0 ? (
        <div className='text-center py-8'>
          <svg
            className='mx-auto h-12 w-12 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m-2 0v5m2-5h16v-5'
            />
          </svg>
          <h3 className='mt-2 text-sm font-medium text-gray-900'>
            No messages in {currentView === 'active' ? 'active' : 'trash'}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            {currentView === 'active'
              ? 'New messages will appear here when submitted.'
              : 'Messages you move to trash will appear here.'}
          </p>
        </div>
      ) : (
        <div className='bg-white shadow overflow-hidden sm:rounded-md'>
          <div className='px-4 py-3 bg-gray-50 border-b border-gray-200'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={selectedMessages.length === messages.length && messages.length > 0}
                onChange={handleSelectAll}
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <span className='ml-2 text-sm text-gray-700'>Select all</span>
            </label>
          </div>

          <ul className='divide-y divide-gray-200'>
            {messages.map((message) => (
              <li
                key={message.id}
                className='hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200 mobile-card-hover'>
                <div className='px-4 py-4 flex items-start space-x-4'>
                  <div className='flex-shrink-0 pt-1'>
                    <input
                      type='checkbox'
                      checked={selectedMessages.includes(message.id)}
                      onChange={() => handleSelectMessage(message.id)}
                      className='h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md transition-all duration-200 hover:scale-110 cursor-pointer touch-target focus-enhanced'
                    />
                  </div>

                  <div className='flex-shrink-0'>
                    <div className='h-12 w-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center shadow-sm'>
                      <span className='text-indigo-700 font-bold text-lg'>
                        {message.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className='flex-1 min-w-0'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3'>
                      <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                        <h3 className='text-base font-semibold text-gray-900 truncate'>
                          {message.name}
                        </h3>
                        {getStatusBadge(message.status)}
                      </div>
                      <div className='flex items-center text-sm text-gray-500'>
                        <svg
                          className='w-4 h-4 mr-1'
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
                        <time>{formatDate(message.created_at)}</time>
                      </div>
                    </div>

                    <div className='mb-3'>
                      <p className='text-sm text-gray-600 mb-2'>📧 {message.email}</p>
                      <div className='bg-gray-50 rounded-lg p-3'>
                        <p className='text-sm text-gray-700 line-clamp-2'>{message.message}</p>
                      </div>
                    </div>

                    {(message.company ||
                      message.phone ||
                      message.budget ||
                      message.project_type) && (
                      <div className='flex flex-wrap gap-2 text-xs'>
                        {message.phone && (
                          <span className='bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium'>
                            📞 {message.phone}
                          </span>
                        )}
                        {message.project_type && (
                          <span className='bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium'>
                            {message.project_type}
                          </span>
                        )}
                        {message.budget && (
                          <span className='bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium'>
                            💰 {message.budget}
                          </span>
                        )}
                        {message.company && (
                          <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium'>
                            🏢 {message.company}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className='flex-shrink-0'>
                    <a
                      href={`/admin/submissions/${message.id}`}
                      className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 active:scale-95 touch-target'>
                      <svg
                        className='w-4 h-4 mr-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                      View
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Floating Action Button for Mobile Quick Actions */}
      {selectedMessages.length > 0 && (
        <FloatingActionButton
          actions={[
            ...(currentView === 'active'
              ? [
                  {
                    icon: (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                      </svg>
                    ),
                    label: 'Move to Trash',
                    onClick: () => handleBulkAction('moveToTrash'),
                    color: 'danger' as const,
                  },
                ]
              : []),
            ...(currentView === 'trash'
              ? [
                  {
                    icon: (
                      <svg
                        className='w-5 h-5'
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
                    ),
                    label: 'Restore',
                    onClick: () => handleBulkAction('restore'),
                    color: 'success' as const,
                  },
                  {
                    icon: (
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    ),
                    label: 'Delete Forever',
                    onClick: () => handleBulkAction('permanentDelete'),
                    color: 'danger' as const,
                  },
                ]
              : []),
          ]}
        />
      )}
    </div>
  )
}
