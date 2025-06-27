'use client'

import { Component, ReactNode } from 'react'
import { RefreshCw, AlertTriangle } from 'lucide-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ChunkErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if it's a chunk loading error
    const isChunkError = error.message.includes('Loading chunk') || 
                        error.message.includes('ChunkLoadError') ||
                        error.name === 'ChunkLoadError'
    
    return { 
      hasError: true, 
      error: isChunkError ? error : undefined 
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log chunk loading errors specifically
    if (error.message.includes('Loading chunk')) {
      console.error('Chunk loading error:', error, errorInfo)
      
      // Try to reload the page after a short delay for chunk errors
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }

  handleReload = () => {
    // Clear the error state and try again
    this.setState({ hasError: false, error: undefined })
    
    // Force reload the page to get fresh chunks
    window.location.reload()
  }

  handleRetry = () => {
    // Just clear the error state to retry rendering
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const isChunkError = this.state.error?.message.includes('Loading chunk')
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-red-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {isChunkError ? 'Loading Error' : 'Something went wrong'}
                  </h3>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  {isChunkError 
                    ? 'We encountered a loading error. This usually happens when the app has been updated. Please reload the page to get the latest version.'
                    : 'We encountered an unexpected error. Please try again.'
                  }
                </p>
              </div>

              {isChunkError && (
                <div className="mb-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-xs text-blue-700">
                    <strong>Technical details:</strong> {this.state.error?.message}
                  </p>
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  onClick={this.handleReload}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </button>
                
                {!isChunkError && (
                  <button
                    onClick={this.handleRetry}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ChunkErrorBoundary
