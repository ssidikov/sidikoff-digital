import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    // Security check - only allow in development or with debug secret
    const isDev = process.env.NODE_ENV === 'development'
    const debugSecret = process.env.EMAIL_DEBUG_SECRET
    const providedSecret = request.headers.get('x-debug-secret')
    
    if (!isDev && (!debugSecret || providedSecret !== debugSecret)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.log('🧪 EMAIL DEBUG TEST STARTED')
    console.log('🌍 Environment:', process.env.NODE_ENV)
    console.log('📧 Testing email configuration...')

    // Check environment variables
    const envCheck = {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASSWORD: !!process.env.SMTP_PASSWORD,
      ADMIN_EMAIL: !!process.env.ADMIN_EMAIL,
    }

    console.log('🔍 Environment variables check:', envCheck)

    const missingVars = Object.entries(envCheck)
      .filter(([, exists]) => !exists)
      .map(([name]) => name)

    if (missingVars.length > 0) {
      console.error('❌ Missing environment variables:', missingVars)
      return NextResponse.json({
        success: false,
        error: 'Missing environment variables',
        missing: missingVars,
        envCheck
      })
    }

    // Test email sending
    const testEmail = process.env.ADMIN_EMAIL!
    const testResult = await sendEmail(
      testEmail,
      '🧪 Vercel Production Email Test',
      `
      <h1>Email Test from Vercel Production</h1>
      <p>This is a test email sent from your Vercel production environment.</p>
      <ul>
        <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
        <li><strong>Environment:</strong> ${process.env.NODE_ENV}</li>
        <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
        <li><strong>SMTP Port:</strong> ${process.env.SMTP_PORT}</li>
        <li><strong>From:</strong> ${process.env.SMTP_USER}</li>
      </ul>
      <p>If you receive this email, your SMTP configuration is working correctly!</p>
      `,
      `
EMAIL TEST FROM VERCEL PRODUCTION

This is a test email sent from your Vercel production environment.

Timestamp: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV}
SMTP Host: ${process.env.SMTP_HOST}
SMTP Port: ${process.env.SMTP_PORT}
From: ${process.env.SMTP_USER}

If you receive this email, your SMTP configuration is working correctly!
      `
    )

    console.log('🧪 Test result:', testResult)

    return NextResponse.json({
      success: true,
      message: 'Email debug test completed',
      envCheck,
      testResult,
      config: {
        smtpHost: process.env.SMTP_HOST,
        smtpPort: process.env.SMTP_PORT,
        smtpUser: process.env.SMTP_USER?.replace(/(.{3}).*(@.*)/, '$1***$2'),
        adminEmail: process.env.ADMIN_EMAIL?.replace(/(.{3}).*(@.*)/, '$1***$2'),
      }
    })

  } catch (error) {
    console.error('🚨 Email debug test failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Email debug endpoint',
    usage: 'Send a POST request to test email configuration',
    note: 'Requires EMAIL_DEBUG_SECRET header in production'
  })
}
