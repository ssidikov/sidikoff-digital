import { NextRequest, NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin-auth-server'
import { addSubscription, removeSubscription } from '@/lib/push-notifications'

export async function POST(request: NextRequest) {
  try {
    // Verify admin session
    const user = await getAdminSession()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const subscription = await request.json()

    // Validate subscription object
    if (!subscription || !subscription.endpoint) {
      return NextResponse.json({ error: 'Invalid subscription' }, { status: 400 })
    }

    // Store subscription (use user ID as key)
    addSubscription(user.id.toString(), subscription)

    console.log('Push subscription stored for user:', user.email)

    return NextResponse.json({
      success: true,
      message: 'Subscription saved successfully',
    })
  } catch (error) {
    console.error('Error saving push subscription:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE() {
  try {
    // Verify admin session
    const user = await getAdminSession()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Remove subscription
    removeSubscription(user.id.toString())

    return NextResponse.json({
      success: true,
      message: 'Subscription removed successfully',
    })
  } catch (error) {
    console.error('Error removing push subscription:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
