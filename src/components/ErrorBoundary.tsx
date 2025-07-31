'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
          <div className='text-center p-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Oops! Quelque chose s&apos;est mal passé
            </h1>
            <p className='text-gray-600 mb-6'>
              Une erreur inattendue s&apos;est produite. Veuillez rafraîchir la page ou réessayer plus
              tard.
            </p>
            <button
              onClick={() => window.location.reload()}
              className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
              Rafraîchir la page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
