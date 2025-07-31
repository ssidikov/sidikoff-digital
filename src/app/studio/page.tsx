'use client'

import { useEffect, useState } from 'react'
import { NextStudio } from 'next-sanity/studio'
import { LoginForm } from '@/components/LoginForm'
import config from '../../../sanity.config'

export default function StudioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Проверяем аутентификацию при загрузке страницы
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/studio-auth', {
        method: 'GET',
        credentials: 'include',
      })

      if (response.ok) {
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/studio-auth', {
        method: 'DELETE',
        credentials: 'include',
      })
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='flex items-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mr-3'></div>
          <span className='text-gray-600'>Loading Studio...</span>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <div className='min-h-screen'>
      {/* Studio Header with Logout */}
      <div className='bg-white border-b border-gray-200 px-4 py-2 flex justify-between items-center'>
        <h1 className='text-lg font-semibold text-gray-900'>
          SIDIKOFF DIGITAL - Content Management
        </h1>
        <button
          onClick={handleLogout}
          className='px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors'>
          Logout
        </button>
      </div>

      {/* Sanity Studio */}
      <NextStudio config={config} />
    </div>
  )
}
