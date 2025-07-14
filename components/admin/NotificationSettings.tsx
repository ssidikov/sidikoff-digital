'use client'

import { useState, useEffect, useCallback } from 'react'
import { AdminNotificationManager } from '@/lib/admin-notifications'

export default function NotificationSettings() {
  const [notificationManager] = useState(() => AdminNotificationManager.getInstance())
  const [isSupported, setIsSupported] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>('default')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const checkNotificationSupport = useCallback(async () => {
    const supported = 'Notification' in window
    setIsSupported(supported)

    if (supported) {
      setPermission(Notification.permission)

      // Initialize notification manager
      await notificationManager.initialize()

      // Since we disabled PWA, isSubscribed is always false
      setIsSubscribed(false)
    }
  }, [notificationManager])

  useEffect(() => {
    checkNotificationSupport()
  }, [checkNotificationSupport])

  const enableNotifications = async () => {
    setIsLoading(true)
    try {
      // Request permission
      const granted = await notificationManager.requestPermission()
      
      // Update permission state based on actual Notification.permission
      if ('Notification' in window) {
        setPermission(Notification.permission)
      }

      if (granted) {
        // Subscribe to push notifications
        const subscription = await notificationManager.subscribeToPush()
        setIsSubscribed(!!subscription)

        if (subscription) {
          // Show success notification
          await notificationManager.sendTestNotification()
        }
      }
    } catch (error) {
      console.error('Failed to enable notifications:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const disableNotifications = async () => {
    setIsLoading(true)
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready
        const subscription = await registration.pushManager.getSubscription()

        if (subscription) {
          await subscription.unsubscribe()
          setIsSubscribed(false)

          // Notify server to remove subscription
          await fetch('/api/admin/notifications/subscribe', {
            method: 'DELETE',
          })
        }
      }
    } catch (error) {
      console.error('Failed to disable notifications:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const testNotification = async () => {
    setIsLoading(true)
    try {
      // Test local notification first
      await notificationManager.sendTestNotification()

      // Also test server-side push notification
      const response = await fetch('/api/admin/debug-notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        console.log('✅ Debug notification triggered from server')
      } else {
        console.error('❌ Failed to trigger debug notification from server')
      }
    } catch (error) {
      console.error('Failed to send test notification:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isSupported) {
    return (
      <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
        <div className='flex'>
          <div className='flex-shrink-0'>
            <svg className='h-5 w-5 text-yellow-400' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='ml-3'>
            <h3 className='text-sm font-medium text-yellow-800'>Notifications not supported</h3>
            <div className='mt-2 text-sm text-yellow-700'>
              <p>
                Your browser doesn&apos;t support push notifications. Please use a modern browser
                like Chrome, Firefox, or Safari.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-white shadow rounded-lg'>
      <div className='px-4 py-5 sm:p-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>Push Notifications</h3>
        <div className='mt-2 max-w-xl text-sm text-gray-500'>
          <p>Get notified instantly when new contact forms are submitted.</p>
        </div>

        <div className='mt-5'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div
                className={`flex-shrink-0 h-5 w-5 rounded-full ${
                  permission === 'granted'
                    ? 'bg-green-400'
                    : permission === 'denied'
                    ? 'bg-red-400'
                    : 'bg-gray-400'
                }`}
              />
              <div className='ml-3'>
                <div className='text-sm font-medium text-gray-900'>
                  Status:{' '}
                  {permission === 'granted'
                    ? 'Enabled'
                    : permission === 'denied'
                    ? 'Blocked'
                    : 'Not set'}
                </div>
                <div className='text-sm text-gray-500'>
                  {isSubscribed ? 'Subscribed to notifications' : 'Not subscribed'}
                </div>
              </div>
            </div>

            <div className='flex space-x-3'>
              {permission !== 'granted' || !isSubscribed ? (
                <button
                  onClick={enableNotifications}
                  disabled={isLoading || permission === 'denied'}
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200'>
                  {isLoading ? (
                    <>
                      <svg
                        className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                        fill='none'
                        viewBox='0 0 24 24'>
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        />
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        />
                      </svg>
                      Enabling...
                    </>
                  ) : (
                    'Enable Notifications'
                  )}
                </button>
              ) : (
                <button
                  onClick={disableNotifications}
                  disabled={isLoading}
                  className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors duration-200'>
                  {isLoading ? 'Disabling...' : 'Disable'}
                </button>
              )}

              {permission === 'granted' && isSubscribed && (
                <button
                  onClick={testNotification}
                  className='inline-flex items-center px-4 py-2 border border-indigo-300 text-sm font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200'>
                  Test Notification
                </button>
              )}
            </div>
          </div>
        </div>

        {permission === 'denied' && (
          <div className='mt-4 bg-red-50 border border-red-200 rounded-md p-4'>
            <div className='text-sm text-gray-500'>
              <p className='font-medium'>Notifications are blocked</p>
              <p className='mt-1'>To enable notifications, please:</p>
              <ol className='mt-2 list-decimal list-inside space-y-1'>
                <li>Click the lock icon in your browser&apos;s address bar</li>
                <li>Change notifications to &quot;Allow&quot;</li>
                <li>Refresh this page</li>
              </ol>
            </div>
          </div>
        )}

        <div className='mt-6 border-t border-gray-200 pt-6'>
          <h4 className='text-sm font-medium text-gray-900 mb-3'>Install as App</h4>
          <p className='text-sm text-gray-500 mb-4'>
            Install this admin dashboard as a mobile app for quick access and better notifications.
          </p>
          <div className='bg-blue-50 border border-blue-200 rounded-md p-4'>
            <div className='text-sm text-blue-800'>
              <p className='font-medium'>Installation Instructions:</p>
              <ol className='mt-2 list-decimal list-inside space-y-1'>
                <li>
                  <strong>Chrome Mobile:</strong> Tap &quot;Add to Home Screen&quot; in the browser
                  menu
                </li>
                <li>
                  <strong>Safari Mobile:</strong> Tap the share button, then &quot;Add to Home
                  Screen&quot;
                </li>
                <li>
                  <strong>Desktop:</strong> Look for the install icon in the address bar
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
