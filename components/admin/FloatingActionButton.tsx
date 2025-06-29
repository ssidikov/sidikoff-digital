'use client'

import { useState } from 'react'

interface FloatingActionButtonProps {
  actions: Array<{
    icon: React.ReactNode
    label: string
    onClick: () => void
    color?: 'primary' | 'success' | 'danger' | 'warning'
  }>
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center'
}

export default function FloatingActionButton({
  actions,
  position = 'bottom-right',
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2',
  }

  const getActionColor = (color?: string) => {
    switch (color) {
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white'
      case 'danger':
        return 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white shadow-lg hover:shadow-red-500/25'
      case 'warning':
        return 'bg-yellow-600 hover:bg-yellow-700 text-white'
      default:
        return 'bg-indigo-600 hover:bg-indigo-700 text-white'
    }
  }

  return (
    <>
      {/* Mobile FAB - Only show on small screens */}
      <div className={`fixed z-50 lg:hidden ${positionClasses[position]}`}>
        {/* Action buttons */}
        {isOpen && (
          <div className='mb-4 space-y-2'>
            {actions.map((action, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 ease-out ${
                  isOpen
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-4 opacity-0 scale-75'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}>
                <button
                  onClick={() => {
                    action.onClick()
                    setIsOpen(false)
                  }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 active:scale-95 ripple ${getActionColor(
                    action.color
                  )}`}
                  title={action.label}>
                  {action.icon}
                </button>
                {/* Action label */}
                <div className='absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity'>
                  {action.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main FAB button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl transition-all duration-300 active:scale-95 ripple ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
      </div>

      {/* Backdrop when FAB is open */}
      {isOpen && <div className='fixed inset-0 z-40 lg:hidden' onClick={() => setIsOpen(false)} />}
    </>
  )
}
