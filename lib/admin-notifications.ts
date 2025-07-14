// Simplified notification manager without PWA functionality
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

  private constructor() {
    // Simplified constructor without PWA dependencies
  }

  public static getInstance(): AdminNotificationManager {
    if (!AdminNotificationManager.instance) {
      AdminNotificationManager.instance = new AdminNotificationManager()
    }
    return AdminNotificationManager.instance
  }

  // Initialize the notification system - simplified
  async initialize(): Promise<boolean> {
    console.log('Notification system initialized (PWA features disabled)')
    return true
  }

  // Request permission - simplified
  async requestPermission(): Promise<boolean> {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      return permission === 'granted'
    }
    return false
  }

  // Show notification - simplified without service worker
  async showNotification(options: NotificationOptions): Promise<void> {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(options.title, {
        body: options.body,
        icon: '/favicon.png',
        badge: '/favicon.png',
      })
    }
  }

  // Simplified methods that return false/empty arrays
  isSupported(): boolean {
    return false
  }

  hasPermission(): boolean {
    return 'Notification' in window && Notification.permission === 'granted'
  }

  async subscribeToPush(): Promise<boolean> {
    return false
  }

  async unsubscribeFromPush(): Promise<boolean> {
    return true
  }

  async getPushSubscription(): Promise<PushSubscription | null> {
    return null
  }

  async sendTestNotification(): Promise<void> {
    await this.showNotification({
      title: 'Test Notification',
      body: 'This is a test notification from SIDIKOFF Admin',
      type: 'system',
    })
  }

  // Simplified background sync
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async scheduleBackgroundSync(_tag: string, _data?: unknown): Promise<boolean> {
    return false
  }

  // Simplified network monitoring
  setupNetworkMonitoring(): void {
    console.log('Network monitoring disabled (PWA features removed)')
  }
}
