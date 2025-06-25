// Test script for debugging push notifications
// This will help us understand what's happening with the notification system

import { sendNotificationToAdmins } from '../lib/push-notifications'

async function testPushNotifications() {
  console.log('🔍 Testing push notification system...')

  try {
    console.log('🔄 Attempting to send test notification...')

    await sendNotificationToAdmins({
      title: '🧪 Test Notification',
      body: 'This is a test notification from the debug script',
      type: 'system',
      data: {
        test: true,
        timestamp: new Date().toISOString(),
      },
    })

    console.log('✅ Test notification sent successfully!')
  } catch (error) {
    console.error('❌ Failed to send test notification:', error)
  }
}

// Run the test
testPushNotifications()
