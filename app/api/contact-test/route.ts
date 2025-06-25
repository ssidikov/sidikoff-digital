import { NextRequest, NextResponse } from 'next/server'
import { sendUserConfirmation, sendAdminNotification, type ContactSubmission } from '@/lib/email'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  
  // Simple security check
  if (secret !== 'test-contact-123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    console.log('🧪 Testing contact form email flow...')
    
    // Create test data exactly like the contact form
    const testData: ContactSubmission = {
      name: 'Test User',
      email: 's.sidikoff@gmail.com', // Send to yourself
      phone: '+33123456789',
      company: 'Test Company',
      message: 'This is a test message from the contact form email flow test.',
      projectType: 'Website Development',
      budget: '500-1000€',
      timeline: '2-4 weeks',
      submittedAt: new Date().toISOString()
    }

    console.log('📧 Starting email sending process...')
    
    const [userResult, adminResult] = await Promise.all([
      sendUserConfirmation(testData),
      sendAdminNotification(testData)
    ])
    
    console.log('=== EMAIL RESULTS ===')
    console.log('User confirmation email:', userResult.success ? '✅ SENT' : '❌ FAILED')
    if (userResult.error) console.log('User email error:', userResult.error)
    if (userResult.messageId) console.log('User email message ID:', userResult.messageId)
    
    console.log('Admin notification email:', adminResult.success ? '✅ SENT' : '❌ FAILED')
    if (adminResult.error) console.log('Admin email error:', adminResult.error)
    if (adminResult.messageId) console.log('Admin email message ID:', adminResult.messageId)
    
    console.log('=== END EMAIL RESULTS ===')
    
    return NextResponse.json({
      success: true,
      message: 'Contact form email test completed',
      results: {
        userConfirmation: {
          success: userResult.success,
          error: userResult.error || null,
          messageId: userResult.messageId || null
        },
        adminNotification: {
          success: adminResult.success,
          error: adminResult.error || null,
          messageId: adminResult.messageId || null
        }
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('❌ Contact form email test failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}
