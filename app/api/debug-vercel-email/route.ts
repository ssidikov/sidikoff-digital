import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

/**
 * Enhanced email debug endpoint specifically for Vercel deployment issues
 * 
 * This endpoint provides detailed logging and error reporting to help
 * diagnose email sending issues in production.
 */
export async function POST() {
  const startTime = Date.now()
  console.log('🧪 [VERCEL EMAIL DEBUG] Starting enhanced email debug test...')
  console.log('🌍 Environment:', process.env.NODE_ENV)
  console.log('📍 Vercel Region:', process.env.VERCEL_REGION)
  console.log('⏰ Function Start Time:', new Date().toISOString())

  try {
    // Check environment variables first
    const envVars = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASSWORD: process.env.SMTP_PASSWORD ? '***SET***' : undefined,
    }

    console.log('🔍 Environment Variables Check:', envVars)

    // Validate all required variables are present
    const missing = Object.entries(envVars)
      .filter(([, value]) => !value)
      .map(([key]) => key)

    if (missing.length > 0) {
      console.error('❌ Missing environment variables:', missing)
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        missing,
        timestamp: new Date().toISOString(),
        duration: Date.now() - startTime
      }, { status: 500 })
    }

    // Test email configuration with a simple test
    const testEmail = 's.sidikoff@gmail.com'
    const testSubject = `🧪 Vercel Email Debug Test - ${new Date().toISOString()}`
    const testHtml = `
      <h1>🧪 Vercel Email Debug Test</h1>
      <p><strong>Test Time:</strong> ${new Date().toISOString()}</p>
      <p><strong>Environment:</strong> ${process.env.NODE_ENV}</p>
      <p><strong>Vercel Region:</strong> ${process.env.VERCEL_REGION || 'Unknown'}</p>
      <p><strong>Function Duration:</strong> ${Date.now() - startTime}ms</p>
      <p>This email confirms that the SIDIKOFF Digital email system is working correctly on Vercel!</p>
    `
    const testText = `
Vercel Email Debug Test

Test Time: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV}
Vercel Region: ${process.env.VERCEL_REGION || 'Unknown'}
Function Duration: ${Date.now() - startTime}ms

This email confirms that the SIDIKOFF Digital email system is working correctly on Vercel!
    `

    console.log('📧 [VERCEL DEBUG] Attempting to send test email...')
    console.log('📧 [VERCEL DEBUG] To:', testEmail)
    console.log('📧 [VERCEL DEBUG] Subject:', testSubject)

    const emailResult = await sendEmail(testEmail, testSubject, testHtml, testText)

    const totalDuration = Date.now() - startTime
    console.log(`🏁 [VERCEL DEBUG] Test completed in ${totalDuration}ms`)

    if (emailResult.success) {
      console.log('✅ [VERCEL DEBUG] Email test SUCCESSFUL!')
      return NextResponse.json({
        success: true,
        message: 'Email debug test completed successfully',
        emailResult,
        environment: {
          nodeEnv: process.env.NODE_ENV,
          vercelRegion: process.env.VERCEL_REGION,
          smtpHost: process.env.SMTP_HOST,
          smtpPort: process.env.SMTP_PORT,
        },
        timing: {
          totalDuration,
          emailDuration: emailResult.details?.duration
        },
        timestamp: new Date().toISOString()
      })
    } else {
      console.error('❌ [VERCEL DEBUG] Email test FAILED!')
      console.error('❌ [VERCEL DEBUG] Error:', emailResult.error)
      console.error('❌ [VERCEL DEBUG] Details:', emailResult.details)
      
      return NextResponse.json({
        success: false,
        message: 'Email debug test failed',
        error: emailResult.error,
        details: emailResult.details,
        environment: {
          nodeEnv: process.env.NODE_ENV,
          vercelRegion: process.env.VERCEL_REGION,
          smtpHost: process.env.SMTP_HOST,
          smtpPort: process.env.SMTP_PORT,
        },
        timing: {
          totalDuration,
          emailDuration: emailResult.details?.duration
        },
        timestamp: new Date().toISOString()
      }, { status: 500 })
    }

  } catch (error) {
    const totalDuration = Date.now() - startTime
    console.error('💥 [VERCEL DEBUG] Test crashed:', error)
    
    if (error instanceof Error) {
      console.error('💥 [VERCEL DEBUG] Error message:', error.message)
      console.error('💥 [VERCEL DEBUG] Error stack:', error.stack)
    }

    return NextResponse.json({
      success: false,
      message: 'Email debug test crashed',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timing: {
        totalDuration
      },
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Vercel Email Debug Endpoint',
    instructions: 'Send a POST request to this endpoint to test email configuration on Vercel',
    usage: 'curl -X POST https://your-domain.vercel.app/api/debug-vercel-email'
  })
}
