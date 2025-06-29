'use client'

import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
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
  const [initialized, setInitialized] = useState(false)

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/messages?view=${currentView}`)
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
  }, [currentView])

  // Initialize component and fetch data
  useEffect(() => {
    let mounted = true
    
    const initializeData = async () => {
      if (!initialized) {
        setInitialized(true)
        if (mounted) {
          await fetchMessages()
        }
      }
    }
    
    initializeData()
    
    return () => {
      mounted = false
    }
  }, [initialized, fetchMessages])

  // Fetch messages when view changes (only after initialization)
  useEffect(() => {
    let mounted = true
    
    if (initialized) {
      const loadData = async () => {
        if (mounted) {
          await fetchMessages()
        }
      }
      loadData()
    }
    
    return () => {
      mounted = false
    }
  }, [currentView, initialized, fetchMessages])

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

            {/* Mobile-friendly bulk actions with enhanced design */}
            {selectedMessages.length > 0 && (
              <div className='bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200/60 rounded-2xl p-4 shadow-lg backdrop-blur-sm'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
                      <svg
                        className='w-5 h-5 text-white'
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
                    <div>
                      <span className='text-base font-bold text-indigo-800'>
                        {selectedMessages.length} selected
                      </span>
                      <p className='text-xs text-indigo-600 mt-0.5'>
                        Choose an action below
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-3'>
                    {currentView === 'active' && (
                      <button
                        onClick={() => handleBulkAction('moveToTrash')}
                        disabled={actionLoading || migrationRequired}
                        className={`touch-target px-4 py-3 text-white text-sm rounded-2xl font-bold transition-all duration-300 ${
                          migrationRequired
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 active:scale-95 mobile-card-hover ripple shadow-lg hover:shadow-xl'
                        } disabled:opacity-50 flex items-center space-x-2 min-w-[120px] justify-center`}
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
                        <span>Move to Trash</span>
                      </button>
                    )}
                    {currentView === 'trash' && (
                      <>
                        <button
                          onClick={() => handleBulkAction('restore')}
                          disabled={actionLoading || migrationRequired}
                          className={`touch-target px-4 py-3 text-white text-sm rounded-2xl font-bold transition-all duration-300 ${
                            migrationRequired
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 active:scale-95 mobile-card-hover ripple shadow-lg hover:shadow-xl'
                          } disabled:opacity-50 flex items-center space-x-2 min-w-[120px] justify-center`}
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
                          className={`touch-target px-4 py-3 text-white text-sm rounded-2xl font-bold transition-all duration-300 ${
                            migrationRequired
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 active:scale-95 mobile-card-hover ripple shadow-lg hover:shadow-xl hover:shadow-red-500/25'
                          } disabled:opacity-50 flex items-center space-x-2 min-w-[120px] justify-center`}
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

        <nav className='flex space-x-0 bg-gray-50 rounded-t-xl overflow-hidden sm:bg-transparent sm:rounded-none'>
          <button
            onClick={() => {
              setCurrentView('active')
              setSelectedMessages([])
            }}
            className={`flex-1 py-4 px-6 border-b-3 font-semibold text-sm transition-all duration-300 touch-target ${
              currentView === 'active'
                ? 'border-indigo-500 text-indigo-600 bg-white shadow-sm'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-100'
            }`}>
            <div className='flex items-center justify-center space-x-2'>
              <span>Active Messages</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                currentView === 'active' 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {stats.active}
              </span>
            </div>
          </button>
          <button
            onClick={() => {
              if (!migrationRequired) {
                setCurrentView('trash')
                setSelectedMessages([])
              }
            }}
            disabled={migrationRequired}
            className={`flex-1 py-4 px-6 border-b-3 font-semibold text-sm transition-all duration-300 touch-target ${
              currentView === 'trash'
                ? 'border-indigo-500 text-indigo-600 bg-white shadow-sm'
                : migrationRequired
                ? 'border-transparent text-gray-400 cursor-not-allowed bg-gray-100'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-100'
            }`}
            title={migrationRequired ? 'Database migration required for trash functionality' : ''}>
            <div className='flex items-center justify-center space-x-2'>
              <span>Trash</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                currentView === 'trash' 
                  ? 'bg-indigo-100 text-indigo-700' 
                  : migrationRequired 
                  ? 'bg-gray-200 text-gray-500' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {stats.trash}
              </span>
            </div>
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
        <div className='space-y-4 sm:space-y-0'>
          {/* Mobile: Enhanced header - removed select all since no checkboxes */}
          <div className='sm:hidden bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl shadow-sm border border-gray-200/60 p-4'>
            <div className='text-center'>
              <h2 className='text-lg font-bold text-gray-800 mb-1'>
                {messages.length} message{messages.length !== 1 ? 's' : ''}
              </h2>
              <p className='text-sm text-gray-500'>
                Tap on any message to view details
              </p>
            </div>
          </div>

          {/* Desktop: Original header */}
          <div className='hidden sm:block bg-white shadow overflow-hidden sm:rounded-md'>
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
          </div>

          {/* Messages List */}
          <div className='space-y-3 sm:space-y-0'>
            {/* Mobile Cards */}
            <div className='sm:hidden space-y-5'>
              {messages.map((message, index) => (
                <Link
                  key={message.id}
                  href={`/admin/submissions/${message.id}`}
                  className='mobile-message-card bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 ease-out mobile-card-hover transform hover:shadow-xl hover:border-gray-300 hover:-translate-y-1 block'
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}>
                  
                  {/* Card Header with enhanced visuals */}
                  <div className='relative p-5 pb-4'>
                    
                    <div className='relative mb-4'>
                      <div className='flex items-start justify-between'>
                        <div className='flex-1 min-w-0'>
                          <h3 className='text-xl font-bold text-gray-900 mb-2 leading-tight'>
                            {message.name}
                          </h3>
                          <div className='flex items-center flex-wrap gap-2'>
                            {getStatusBadge(message.status)}
                            <div className='text-xs text-gray-500 flex items-center bg-gray-100 px-2 py-1 rounded-lg'>
                              <svg className='w-3 h-3 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                              </svg>
                              {formatDate(message.created_at)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Contact Info */}
                    <div className='bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-4 mb-4 border border-gray-100/80'>
                      <div className='space-y-3'>
                        <div className='flex items-center text-sm text-gray-700'>
                          <div className='w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mr-3 shadow-sm'>
                            <svg className='w-4 h-4 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                            </svg>
                          </div>
                          <span className='font-semibold'>{message.email}</span>
                        </div>
                        {message.phone && (
                          <div className='flex items-center text-sm text-gray-700'>
                            <div className='w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mr-3 shadow-sm'>
                              <svg className='w-4 h-4 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                              </svg>
                            </div>
                            <span className='font-semibold'>{message.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Message Preview */}
                    <div className='bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 rounded-2xl p-4 mb-4 border border-gray-200/60 relative overflow-hidden'>
                      <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-full -translate-y-10 translate-x-10'></div>
                      <div className='relative flex items-start space-x-3'>
                        <div className='w-6 h-6 bg-gradient-to-br from-slate-200 to-gray-300 rounded-xl flex items-center justify-center mt-1 shadow-sm'>
                          <svg className='w-3 h-3 text-slate-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                          </svg>
                        </div>
                        <p className='text-sm text-gray-700 leading-relaxed line-clamp-3 flex-1 font-medium'>
                          {message.message}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Tags and Details */}
                    {(message.company || message.project_type || message.budget || message.timeline) && (
                      <div className='flex flex-wrap gap-2.5 mb-5'>
                        {message.company && (
                          <div className='flex items-center bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 px-3 py-2 rounded-2xl text-xs font-semibold shadow-sm border border-gray-200'>
                            <div className='w-5 h-5 bg-gradient-to-br from-gray-300 to-slate-300 rounded-xl flex items-center justify-center mr-2'>
                              <svg className='w-2.5 h-2.5 text-gray-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z' clipRule='evenodd' />
                              </svg>
                            </div>
                            {message.company}
                          </div>
                        )}
                        {message.project_type && (
                          <div className='flex items-center bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-3 py-2 rounded-2xl text-xs font-semibold shadow-sm border border-purple-200'>
                            <div className='w-5 h-5 bg-gradient-to-br from-purple-300 to-violet-300 rounded-xl flex items-center justify-center mr-2'>
                              <svg className='w-2.5 h-2.5 text-purple-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                              </svg>
                            </div>
                            {message.project_type}
                          </div>
                        )}
                        {message.budget && (
                          <div className='flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-2 rounded-2xl text-xs font-semibold shadow-sm border border-green-200'>
                            <div className='w-5 h-5 bg-gradient-to-br from-green-300 to-emerald-300 rounded-xl flex items-center justify-center mr-2'>
                              <svg className='w-2.5 h-2.5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z' />
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z' clipRule='evenodd' />
                              </svg>
                            </div>
                            {message.budget}
                          </div>
                        )}
                        {message.timeline && (
                          <div className='flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-3 py-2 rounded-2xl text-xs font-semibold shadow-sm border border-orange-200'>
                            <div className='w-5 h-5 bg-gradient-to-br from-orange-300 to-amber-300 rounded-xl flex items-center justify-center mr-2'>
                              <svg className='w-2.5 h-2.5 text-orange-600' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
                              </svg>
                            </div>
                            {message.timeline}
                          </div>
                        )}
                      </div>
                    )}

                    {/* View indicator at bottom right */}
                    <div className='flex justify-end'>
                      <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-bold rounded-2xl shadow-lg'>
                        <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                        </svg>
                        <span>Tap to view</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop List */}
            <div className='hidden sm:block bg-white shadow overflow-hidden sm:rounded-md'>
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
                        <Link
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
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
