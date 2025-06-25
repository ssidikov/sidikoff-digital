import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * Simple Gmail authentication test
 * Tests if Gmail credentials work on Vercel
 */
export async function POST() {
  console.log('🔐 [GMAIL AUTH TEST] Testing Gmail authentication...')

  try {
    // Test Gmail authentication without sending email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      connectionTimeout: 5000,
      greetingTimeout: 3000,
      socketTimeout: 5000,
    } as nodemailer.TransportOptions)

    console.log('🔐 [GMAIL AUTH TEST] Testing connection...')
    
    // Just verify the connection without sending
    const verified = await Promise.race([
      transporter.verify(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Auth verification timeout')), 6000)
      )
    ])

    transporter.close()

    if (verified) {
      console.log('✅ [GMAIL AUTH TEST] Authentication successful!')
      
      // If auth works, try a simple send
      console.log('📧 [GMAIL AUTH TEST] Attempting quick send test...')
      
      const sendTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        connectionTimeout: 5000,
        greetingTimeout: 3000,
        socketTimeout: 5000,
      } as nodemailer.TransportOptions)

      const sendResult = await Promise.race([
        sendTransporter.sendMail({
          from: `"SIDIKOFF Digital" <${process.env.SMTP_USER}>`,
          to: 's.sidikoff@gmail.com',
          subject: '✅ Gmail Auth Test Success',
          text: 'Gmail authentication and sending test successful on Vercel!'
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Send test timeout')), 7000)
        )
      ])

      sendTransporter.close()

      return NextResponse.json({
        success: true,
        message: 'Gmail authentication and sending test successful!',
        authResult: true,
        sendResult: sendResult,
        timestamp: new Date().toISOString()
      })
    }

  } catch (error) {
    console.error('❌ [GMAIL AUTH TEST] Failed:', error)
    
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    
    return NextResponse.json({
      success: false,
      message: 'Gmail authentication test failed',
      error: errorMsg,
      recommendations: [
        'Check if Gmail App Password is correct',
        'Verify 2-Factor Authentication is enabled',
        'Ensure Less Secure Apps is NOT enabled (use App Password instead)',
        'Try regenerating the Gmail App Password'
      ],
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Gmail Authentication Test',
    instructions: 'Send a POST request to test Gmail credentials',
    currentConfig: {
      host: 'smtp.gmail.com',
      port: 587,
      user: process.env.SMTP_USER || 'Not set'
    }
  })
}
