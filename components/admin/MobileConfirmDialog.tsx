'use client'

import { useEffect } from 'react'

interface MobileConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
  type?: 'danger' | 'warning' | 'info'
}

export default function MobileConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'info',
}: MobileConfirmDialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const getIconColor = () => {
    switch (type) {
      case 'danger':
        return 'text-red-600 bg-red-100'
      case 'warning':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-blue-600 bg-blue-100'
    }
  }

  const getConfirmButtonColor = () => {
    switch (type) {
      case 'danger':
        return 'bg-red-600 hover:bg-red-700'
      case 'warning':
        return 'bg-yellow-600 hover:bg-yellow-700'
      default:
        return 'bg-blue-600 hover:bg-blue-700'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'danger':
        return (
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>
        )
      case 'warning':
        return (
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        )
      default:
        return (
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        )
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300'
        onClick={onClose}
      />

      {/* Dialog */}
      <div className='fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4'>
        <div
          className={`bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md transform transition-all duration-300 modal-mobile ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
          {/* Handle bar for mobile */}
          <div className='flex justify-center pt-4 pb-2 sm:hidden'>
            <div className='w-10 h-1 bg-gray-300 rounded-full' />
          </div>

          <div className='p-6 sm:p-8'>
            {/* Icon and Title */}
            <div className='flex items-center space-x-4 mb-4'>
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getIconColor()}`}>
                {getIcon()}
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
              </div>
            </div>

            {/* Message */}
            <p className='text-gray-600 mb-8 leading-relaxed'>{message}</p>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end'>
              <button
                onClick={onClose}
                className='w-full sm:w-auto px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-all duration-200 active:scale-95 touch-target order-2 sm:order-1'>
                {cancelText}
              </button>
              <button
                onClick={() => {
                  onConfirm()
                  onClose()
                }}
                className={`w-full sm:w-auto px-6 py-3 text-white rounded-xl font-medium transition-all duration-200 active:scale-95 touch-target order-1 sm:order-2 ${getConfirmButtonColor()}`}>
                {confirmText}
              </button>
            </div>
          </div>

          {/* Safe area for mobile */}
          <div className='mobile-safe-bottom sm:hidden' />
        </div>
      </div>
    </>
  )
}
