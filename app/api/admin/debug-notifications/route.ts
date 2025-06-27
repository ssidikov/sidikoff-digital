import { NextResponse, NextRequest } from 'next/server'
import { getAdminSession } from '@/lib/admin-auth-server'
import { sendNotificationToAdmins } from '@/lib/push-notifications'
import fs from 'fs'
import path from 'path'

// Store for tracking real-time data
let lastSubmissionCheck = Date.now()
let submissionCount = 0

export async function POST() {
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
        triggeredBy: user.email,
      },
    })

    console.log('✅ Debug notification sent')

    return NextResponse.json({
      success: true,
      message: 'Debug notification sent successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('❌ Debug notification failed:', error)
    return NextResponse.json(
      {
        error: 'Failed to send debug notification',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // For ping requests, allow without auth to check system health
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    
    if (action === 'ping') {
      // Real-time monitoring ping - check for new submissions
      const now = Date.now()
      const timeSinceLastCheck = now - lastSubmissionCheck
      
      // Simulate checking for new submissions (in real app, this would query the database)
      let newSubmissions = 0
      try {
        // Check if there are any new form submissions since last check
        // For demo purposes, we'll check a simple file-based counter
        const submissionsFile = path.join(process.cwd(), 'data', 'submission-counter.json')
        
        if (fs.existsSync(submissionsFile)) {
          const data = JSON.parse(fs.readFileSync(submissionsFile, 'utf-8'))
          newSubmissions = Math.max(0, data.count - submissionCount)
          submissionCount = data.count
        }
      } catch {
        console.log('No submission counter file found - this is normal')
      }
      
      lastSubmissionCheck = now
      
      return NextResponse.json({
        status: 'ping_ok',
        timestamp: new Date().toISOString(),
        timeSinceLastCheck,
        newSubmissions,
        totalSubmissions: submissionCount,
        systemHealth: {
          vapidConfigured: !!(process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY),
          pushNotificationsEnabled: true,
          realTimeMonitoring: true
        }
      })
    }

    // For other requests, require admin authentication
    const user = await getAdminSession()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check environment variables
    const vapidKeys = {
      publicKey: process.env.VAPID_PUBLIC_KEY ? 'Set' : 'Missing',
      privateKey: process.env.VAPID_PRIVATE_KEY ? 'Set' : 'Missing',
      email: process.env.VAPID_EMAIL || 'Missing',
    }

    // Check if web-push is available
    let webPushAvailable = false
    try {
      await import('web-push')
      webPushAvailable = true
    } catch {
      webPushAvailable = false
    }

    // Check subscription file
    let subscriptionCount = 0
    try {
      const subscriptionsFile = path.join(process.cwd(), 'data', 'push-subscriptions.json')
      if (fs.existsSync(subscriptionsFile)) {
        const subscriptions = JSON.parse(fs.readFileSync(subscriptionsFile, 'utf-8'))
        subscriptionCount = subscriptions.length || 0
      }
    } catch {
      console.log('No subscriptions file found')
    }

    return NextResponse.json({
      status: 'Debug endpoint active',
      user: user.email,
      vapidKeys,
      webPushAvailable,
      subscriptionCount,
      realTimeMonitoring: {
        enabled: true,
        lastCheck: new Date(lastSubmissionCheck).toISOString(),
        submissionCount
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('❌ Debug endpoint failed:', error)
    return NextResponse.json(
      {
        error: 'Debug endpoint failed',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}
