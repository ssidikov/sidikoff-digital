import { NextResponse } from 'next/server'
import { testEmailConfiguration } from '@/lib/email'

/**
 * Test endpoint for email configuration
 * 
 * This endpoint allows testing email functionality in production.
 * For security, it should be removed or protected in production.
 */
export async function POST() {
  console.log('🧪 [TEST EMAIL API] Test email endpoint called')
  
  try {
    // Test the email configuration
    const result = await testEmailConfiguration()
    
    if (result.success) {
      console.log('✅ [TEST EMAIL API] Email test successful')
      return NextResponse.json({
        success: true,
        message: 'Email configuration test passed! Check the admin email for the test message.',
        messageId: result.messageId,
        details: result.details
      }, { status: 200 })
    } else {
      console.error('❌ [TEST EMAIL API] Email test failed:', result.error)
      return NextResponse.json({
        success: false,
        error: result.error,
        message: 'Email configuration test failed. Check server logs for details.'
      }, { status: 500 })
    }
  } catch (error) {
    console.error('❌ [TEST EMAIL API] Test endpoint crashed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Email test endpoint crashed. Check server logs for details.'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Email test endpoint. Use POST to run the test.',
    instructions: 'Send a POST request to this endpoint to test email configuration.'
  })
}
