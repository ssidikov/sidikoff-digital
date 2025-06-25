// Utility for sending push notifications to admin users
const subscriptions = new Map<string, PushSubscription>()

export function addSubscription(userId: string, subscription: PushSubscription) {
  subscriptions.set(userId, subscription)
}

export function removeSubscription(userId: string) {
  subscriptions.delete(userId)
}

export async function sendNotificationToAdmins(notificationData: {
  title: string
  body: string
  type: string
  data?: Record<string, unknown>
}) {
  if (subscriptions.size === 0) {
    console.log('No subscriptions found')
    return
  }

  // Use dynamic import for web-push  
  const webpush = await import('web-push')
  
  // Configure VAPID keys (set these in your environment variables)
  webpush.setVapidDetails(
    process.env.VAPID_EMAIL || 'mailto:admin@sidikoff.com',
    process.env.VAPID_PUBLIC_KEY || '',
    process.env.VAPID_PRIVATE_KEY || ''
  )

  const promises = Array.from(subscriptions.values()).map(async (subscription) => {
    try {
      await webpush.sendNotification(subscription as unknown as import('web-push').PushSubscription, JSON.stringify(notificationData))
      console.log('Notification sent successfully')
    } catch (error: unknown) {
      console.error('Error sending notification:', error)
      // Remove invalid subscriptions
      if (error && typeof error === 'object' && 'statusCode' in error) {
        const statusCode = (error as { statusCode: number }).statusCode
        if (statusCode === 410 || statusCode === 404) {
          // Find and remove the invalid subscription
          for (const [key, sub] of subscriptions.entries()) {
            if (sub.endpoint === subscription.endpoint) {
              subscriptions.delete(key)
              break
            }
          }
        }
      }
    }
  })

  await Promise.all(promises)
}
