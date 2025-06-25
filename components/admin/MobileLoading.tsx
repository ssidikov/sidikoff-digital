'use client'

interface MobileLoadingProps {
  text?: string
  size?: 'sm' | 'md' | 'lg'
  overlay?: boolean
}

export default function MobileLoading({
  text = 'Loading...',
  size = 'md',
  overlay = false,
}: MobileLoadingProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6'
      case 'lg':
        return 'w-12 h-12'
      default:
        return 'w-8 h-8'
    }
  }

  const LoadingSpinner = () => (
    <div className={`${getSizeClasses()} animate-spin`}>
      <svg className='w-full h-full' viewBox='0 0 24 24'>
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
        />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  )

  if (overlay) {
    return (
      <div className='fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center'>
        <div className='bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 max-w-xs w-full mx-4'>
          <div className='flex flex-col items-center space-y-4'>
            <div className='text-indigo-600'>
              <LoadingSpinner />
            </div>
            <p className='text-gray-700 font-medium text-center'>{text}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center space-x-3 p-8'>
      <div className='text-indigo-600'>
        <LoadingSpinner />
      </div>
      <span className='text-gray-600 font-medium'>{text}</span>
    </div>
  )
}
