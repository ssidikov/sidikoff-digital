'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  readonly children: ReactNode
  readonly fallback?: ReactNode
  readonly onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  readonly hasError: boolean
  readonly error?: Error
  readonly errorInfo?: ErrorInfo
}

// Error configuration constants
const ERROR_CONFIG = {
  messages: {
    title: 'Oops! Quelque chose s\'est mal passé',
    description: 'Une erreur inattendue s\'est produite. Veuillez rafraîchir la page ou réessayer plus tard.',
    buttonText: 'Rafraîchir la page'
  },
  
  styles: {
    container: 'min-h-screen flex items-center justify-center bg-gray-50',
    content: 'text-center p-8 max-w-md mx-auto',
    title: 'text-4xl font-bold text-gray-900 mb-4',
    description: 'text-gray-600 mb-6 leading-relaxed',
    button: 'bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
    icon: 'w-16 h-16 text-red-500 mx-auto mb-4'
  }
} as const

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true, 
      error 
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // Update state with error info
    this.setState({
      hasError: true,
      error,
      errorInfo
    })

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Report to error monitoring service (if available)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag
      if (typeof gtag === 'function') {
        gtag('event', 'exception', {
          description: error.message,
          fatal: false
        })
      }
    }
  }

  /**
   * Handle page refresh
   */
  private handleRefresh = (): void => {
    window.location.reload()
  }

  /**
   * Render error fallback UI
   */
  private renderErrorFallback(): ReactNode {
    return (
      <div className={ERROR_CONFIG.styles.container}>
        <div className={ERROR_CONFIG.styles.content}>
          {/* Error Icon */}
          <svg
            className={ERROR_CONFIG.styles.icon}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>

          {/* Error Title */}
          <h1 className={ERROR_CONFIG.styles.title}>
            {ERROR_CONFIG.messages.title}
          </h1>

          {/* Error Description */}
          <p className={ERROR_CONFIG.styles.description}>
            {ERROR_CONFIG.messages.description}
          </p>

          {/* Refresh Button */}
          <button
            onClick={this.handleRefresh}
            className={ERROR_CONFIG.styles.button}
            type='button'
            aria-label='Rafraîchir la page'>
            {ERROR_CONFIG.messages.buttonText}
          </button>

          {/* Error Details in Development */}
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className='mt-6 text-left'>
              <summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700'>
                Détails de l&apos;erreur (développement uniquement)
              </summary>
              <pre className='mt-2 text-xs text-red-600 bg-red-50 p-3 rounded overflow-auto max-h-40'>
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      </div>
    )
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Return custom fallback component if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Return default error UI
      return this.renderErrorFallback()
    }

    // Return children if no error
    return this.props.children
  }
}

export default ErrorBoundary
