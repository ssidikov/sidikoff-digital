// Utility for sending push notifications to admin users
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const SUBSCRIPTIONS_FILE = join(process.cwd(), 'data', 'push-subscriptions.json')

// In-memory cache for performance
const subscriptions = new Map<string, PushSubscription>()

// Load subscriptions from file on startup
function loadSubscriptions() {
  try {
    if (existsSync(SUBSCRIPTIONS_FILE)) {
      const data = readFileSync(SUBSCRIPTIONS_FILE, 'utf8')
      const saved = JSON.parse(data)
      for (const [key, value] of Object.entries(saved)) {
        subscriptions.set(key, value as PushSubscription)
      }
      console.log(`Loaded ${subscriptions.size} push subscriptions`)
    }
  } catch (error) {
    console.error('Failed to load subscriptions:', error)
  }
}

// Save subscriptions to file
function saveSubscriptions() {
  try {
    const data = Object.fromEntries(subscriptions)
    const dir = join(process.cwd(), 'data')

    // Create data directory if it doesn't exist
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }

    writeFileSync(SUBSCRIPTIONS_FILE, JSON.stringify(data, null, 2))
    console.log(`Saved ${subscriptions.size} push subscriptions`)
  } catch (error) {
    console.error('Failed to save subscriptions:', error)
  }
}

// Load subscriptions on module initialization
loadSubscriptions()

export function addSubscription(userId: string, subscription: PushSubscription) {
  subscriptions.set(userId, subscription)
  saveSubscriptions()
  console.log(`Added subscription for user: ${userId}`)
}

export function removeSubscription(userId: string) {
  const removed = subscriptions.delete(userId)
  if (removed) {
    saveSubscriptions()
    console.log(`Removed subscription for user: ${userId}`)
  }
}

export async function sendNotificationToAdmins(notificationData: {
  title: string
  body: string
  type: string
  data?: Record<string, unknown>
  requireInteraction?: boolean
  actions?: Array<{
    action: string
    title: string
    icon?: string
  }>
}) {
  console.log(`🔔 Attempting to send notification to ${subscriptions.size} subscriptions`)
  console.log(`📊 Notification data:`, notificationData)

  if (subscriptions.size === 0) {
    console.log('❌ No subscriptions found - notification not sent')
    return
  }

  // Validate VAPID keys
  const vapidPublic = process.env.VAPID_PUBLIC_KEY
  const vapidPrivate = process.env.VAPID_PRIVATE_KEY
  const vapidEmail = process.env.VAPID_EMAIL

  if (!vapidPublic || !vapidPrivate || !vapidEmail) {
    console.error('❌ Missing VAPID keys:', {
      public: !!vapidPublic,
      private: !!vapidPrivate,
      email: !!vapidEmail,
    })
    return
  }

  // Use dynamic import for web-push
  const webpush = await import('web-push')

  // Configure VAPID keys
  webpush.setVapidDetails(
    `mailto:${vapidEmail}`, // VAPID subject must be a valid URL (mailto: format)
    vapidPublic,
    vapidPrivate
  )

  console.log('🔧 VAPID configured successfully')

  const promises = Array.from(subscriptions.entries()).map(async ([userId, subscription]) => {
    try {
      console.log(`📤 Sending notification to user: ${userId}`)
      await webpush.sendNotification(
        subscription as unknown as import('web-push').PushSubscription,
        JSON.stringify(notificationData)
      )
      console.log(`✅ Notification sent successfully to user: ${userId}`)
    } catch (error: unknown) {
      console.error(`❌ Error sending notification to user ${userId}:`, error)
      // Remove invalid subscriptions
      if (error && typeof error === 'object' && 'statusCode' in error) {
        const statusCode = (error as { statusCode: number }).statusCode
        if (statusCode === 410 || statusCode === 404) {
          console.log(`🗑️ Removing invalid subscription for user: ${userId}`)
          subscriptions.delete(userId)
          saveSubscriptions()
        }
      }
    }
  })

  await Promise.all(promises)
  console.log('🏁 Notification sending completed')
}
