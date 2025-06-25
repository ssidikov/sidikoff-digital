import { NextResponse } from 'next/server'
import { sendNotificationToAdmins } from '@/lib/push-notifications'

export async function POST() {
  try {
    console.log('🧪 Test form submission triggered (no auth required)')

    // Simulate a form submission notification
    await sendNotificationToAdmins({
      title: '📨 Test Form Submission',
      body: 'This is a test form submission to verify notifications are working',
      type: 'new_submission',
      data: {
        test: true,
        submissionId: 'test-123',
        senderName: 'Test User',
        senderEmail: 'test@example.com',
        viewUrl: '/admin/submissions?highlight=test-123'
      }
    })

    console.log('✅ Test form submission notification sent')

    return NextResponse.json({ 
      success: true,
      message: 'Test form submission notification sent successfully'
    })

  } catch (error) {
    console.error('❌ Test form submission failed:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send test form submission notification',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    console.log('🔍 Test endpoint status check')

    // Check if web-push is available
    let webPushAvailable = false
    try {
      await import('web-push')
      webPushAvailable = true
    } catch {
      webPushAvailable = false
    }

    // Check environment variables
    const vapidKeys = {
      publicKey: process.env.VAPID_PUBLIC_KEY ? 'Set' : 'Missing',
      privateKey: process.env.VAPID_PRIVATE_KEY ? 'Set' : 'Missing',
      email: process.env.VAPID_EMAIL || 'Missing'
    }

    return NextResponse.json({
      status: 'Test endpoint active',
      vapidKeys,
      webPushAvailable,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Test endpoint failed:', error)
    return NextResponse.json(
      { 
        error: 'Test endpoint failed',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
