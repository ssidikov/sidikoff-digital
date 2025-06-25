import { NextRequest, NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-auth-server'
import { sendNotificationToAdmins } from '@/lib/push-notifications'

export async function POST(request: NextRequest) {
  try {
    // Verify admin session
    const user = await getAdminSession()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('🔍 Debug notification endpoint called by user:', user.email)

    // Send a test notification
    await sendNotificationToAdmins({
      title: '🧪 Debug Test Notification',
      body: 'This is a debug test notification triggered manually',
      type: 'system',
      data: {
        debug: true,
        timestamp: new Date().toISOString(),
        triggeredBy: user.email
      }
    })

    console.log('✅ Debug notification sent')

    return NextResponse.json({ 
      success: true,
      message: 'Debug notification sent successfully',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Debug notification failed:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send debug notification',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Verify admin session
    const user = await getAdminSession()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check environment variables
    const vapidKeys = {
      publicKey: process.env.VAPID_PUBLIC_KEY ? 'Set' : 'Missing',
      privateKey: process.env.VAPID_PRIVATE_KEY ? 'Set' : 'Missing',
      email: process.env.VAPID_EMAIL || 'Missing'
    }

    // Check if web-push is available
    let webPushAvailable = false
    try {
      await import('web-push')
      webPushAvailable = true
    } catch {
      webPushAvailable = false
    }

    return NextResponse.json({
      status: 'Debug endpoint active',
      user: user.email,
      vapidKeys,
      webPushAvailable,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('❌ Debug endpoint failed:', error)
    return NextResponse.json(
      { 
        error: 'Debug endpoint failed',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
