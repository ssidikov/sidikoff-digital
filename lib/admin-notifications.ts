// Notification Manager for Admin Dashboard
export interface NotificationOptions {
  title: string
  body: string
  type?: 'new_submission' | 'project_update' | 'system' | 'general'
  url?: string
  requireInteraction?: boolean
  actions?: Array<{
    action: string
    title: string
    icon?: string
  }>
  data?: Record<string, unknown>
}

export class AdminNotificationManager {
  private static instance: AdminNotificationManager
  private swRegistration: ServiceWorkerRegistration | null = null
  private isSupported: boolean = false

  private constructor() {
    this.isSupported =
      'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window
  }

  public static getInstance(): AdminNotificationManager {
    if (!AdminNotificationManager.instance) {
      AdminNotificationManager.instance = new AdminNotificationManager()
    }
    return AdminNotificationManager.instance
  }

  // Initialize the notification system
  async initialize(): Promise<boolean> {
    if (!this.isSupported) {
      console.warn('Push notifications are not supported')
      return false
    }

    try {
      // Register service worker
      this.swRegistration = await navigator.serviceWorker.register('/admin-sw.js', {
        scope: '/admin/',
      })

      console.log('Service Worker registered successfully')

      // Listen for service worker updates
      this.swRegistration.addEventListener('updatefound', () => {
        const newWorker = this.swRegistration?.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker available
              this.showUpdateNotification()
            }
          })
        }
      })

      return true
    } catch (error) {
      console.error('Service Worker registration failed:', error)
      return false
    }
  }

  // Request notification permission
  async requestPermission(): Promise<NotificationPermission> {
    if (!this.isSupported) {
      return 'denied'
    }

    const permission = await Notification.requestPermission()
    console.log('Notification permission:', permission)
    return permission
  }

  // Subscribe to push notifications with enhanced Android support
  async subscribeToPush(): Promise<PushSubscription | null> {
    if (!this.swRegistration) {
      console.error('Service Worker not registered')
      return null
    }

    try {
      // Check if already subscribed
      const existingSubscription = await this.swRegistration.pushManager.getSubscription()
      if (existingSubscription) {
        console.log('✅ Already subscribed to push notifications')
        // Verify the subscription is still valid by sending to server
        await this.sendSubscriptionToServer(existingSubscription)
        return existingSubscription
      }

      // Request notification permission first
      const permission = await this.requestPermission()
      if (permission !== 'granted') {
        console.warn('❌ Notification permission denied')
        return null
      }

      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      console.log('🔧 VAPID Public Key available:', !!vapidPublicKey)

      if (!vapidPublicKey) {
        console.error('❌ VAPID public key not found')
        return null
      }

      console.log('🔔 Subscribing to push notifications...')
      const subscription = await this.swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(vapidPublicKey) as BufferSource,
      })

      console.log('✅ Push subscription successful:', {
        endpoint: subscription.endpoint,
        keys: subscription.getKey ? {
          p256dh: subscription.getKey('p256dh'),
          auth: subscription.getKey('auth')
        } : 'Keys not available'
      })

      // Send subscription to server with retry logic
      await this.sendSubscriptionToServer(subscription)

      // Store subscription info locally for debugging
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('admin-push-subscription', JSON.stringify({
          endpoint: subscription.endpoint,
          expirationTime: subscription.expirationTime,
          subscribed: new Date().toISOString(),
          userAgent: navigator.userAgent
        }))
      }

      return subscription
    } catch (error) {
      console.error('❌ Push subscription failed:', error)
      
      // Enhanced error logging for Android debugging
      if (error instanceof Error) {
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        })
      }
      
      return null
    }
  }

  // Show local notification
  async showNotification(options: NotificationOptions): Promise<void> {
    const permission = await this.requestPermission()

    if (permission !== 'granted') {
      console.warn('Notification permission not granted')
      return
    }

    if (!this.swRegistration) {
      // Fallback to browser notification
      new Notification(options.title, {
        body: options.body,
        icon: '/favicon.png',
        badge: '/favicon.png',
        data: options.data,
      })
      return
    }

    // Use service worker notification
    const notificationOptions: Record<string, unknown> = {
      body: options.body,
      icon: '/favicon.png',
      badge: '/favicon.png',
      data: {
        type: options.type,
        url: options.url,
        ...options.data,
      },
      tag: `admin-${options.type}-${Date.now()}`,
      requireInteraction: options.requireInteraction || false,
      vibrate: [100, 50, 100],
      renotify: true,
    }

    // Add actions if provided
    if (options.actions && options.actions.length > 0) {
      notificationOptions.actions = options.actions
    }

    await this.swRegistration.showNotification(options.title, notificationOptions)
  }

  // Show notification for new form submission
  async showNewSubmissionNotification(submissionData: {
    name: string
    email: string
    subject: string
    id: string
  }): Promise<void> {
    await this.showNotification({
      title: '📨 New Contact Submission',
      body: `From ${submissionData.name}: ${submissionData.subject}`,
      type: 'new_submission',
      url: `/admin/submissions?highlight=${submissionData.id}`,
      requireInteraction: true,
      actions: [
        {
          action: 'view',
          title: 'View Message',
        },
        {
          action: 'dismiss',
          title: 'Dismiss',
        },
      ],
      data: {
        submissionId: submissionData.id,
        senderEmail: submissionData.email,
        viewUrl: `/admin/submissions?highlight=${submissionData.id}`,
      },
    })
  }

  // Show update available notification
  private showUpdateNotification(): void {
    this.showNotification({
      title: '🔄 Update Available',
      body: 'A new version of the admin dashboard is available. Refresh to update.',
      type: 'system',
      requireInteraction: true,
      actions: [
        {
          action: 'refresh',
          title: 'Refresh Now',
        },
        {
          action: 'later',
          title: 'Later',
        },
      ],
    })
  }

  // Check if notifications are supported and enabled
  isNotificationEnabled(): boolean {
    return this.isSupported && Notification.permission === 'granted'
  }

  // Get current notification permission status
  getPermissionStatus(): NotificationPermission {
    return Notification.permission
  }

  // Helper function to convert VAPID key
  private urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  // Send subscription to server
  private async sendSubscriptionToServer(subscription: PushSubscription): Promise<void> {
    try {
      console.log('📤 Sending subscription to server...')
      const response = await fetch('/api/admin/notifications/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      })

      if (response.ok) {
        console.log('✅ Subscription sent to server successfully')
      } else {
        console.error(
          '❌ Failed to send subscription to server:',
          response.status,
          response.statusText
        )
      }
    } catch (error) {
      console.error('❌ Error sending subscription to server:', error)
    }
  }

  // Test notification
  async testNotification(): Promise<void> {
    await this.showNotification({
      title: '🧪 Test Notification',
      body: 'This is a test notification from SIDIKOFF Admin Dashboard',
      type: 'general',
      data: { test: true },
    })
  }
}
