export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { 
  sendUserConfirmationNuclear, 
  sendAdminNotificationNuclear, 
  type ContactSubmission,
  type EmailResult
} from '@/lib/email-nuclear'

export async function GET() {
  try {
    console.log('💥 [NUCLEAR TEST] Starting nuclear email test...')
    
    // Create test submission
    const testSubmission: ContactSubmission = {
      name: 'Nuclear Email Test',
      email: 'galaxys7air@gmail.com',
      phone: '+33 6 12 34 56 78',
      company: 'Test Company',
      message: 'This is a nuclear email test to verify if aggressive timeouts work.',
      projectType: 'Site Essentiel',
      budget: '1000-3000€',
      timeline: '1 mois',
      submittedAt: new Date().toISOString(),
    }

    const startTime = Date.now()
    
    // Test both emails with nuclear approach
    console.log('💥 [NUCLEAR TEST] Testing user confirmation...')
    const userPromise = sendUserConfirmationNuclear(testSubmission)
    
    console.log('💥 [NUCLEAR TEST] Testing admin notification...')
    const adminPromise = sendAdminNotificationNuclear(testSubmission)
    
    // Wait for both with overall timeout
    const results = await Promise.race([
      Promise.all([userPromise, adminPromise]),
      new Promise<[EmailResult, EmailResult]>((_, reject) => 
        setTimeout(() => reject(new Error('Overall test timeout after 10 seconds')), 10000)
      )
    ])
    
    const [userResult, adminResult] = results
    const totalDuration = Date.now() - startTime
    
    console.log('💥 [NUCLEAR TEST] Test completed in', totalDuration, 'ms')
    
    const summary = {
      userEmail: {
        success: userResult.success,
        error: userResult.error,
        messageId: userResult.messageId,
        details: userResult.details,
      },
      adminEmail: {
        success: adminResult.success,
        error: adminResult.error,
        messageId: adminResult.messageId,
        details: adminResult.details,
      },
      summary: {
        bothSucceeded: userResult.success && adminResult.success,
        anySucceeded: userResult.success || adminResult.success,
        bothFailed: !userResult.success && !adminResult.success,
        totalDuration,
      }
    }

    console.log('💥 [NUCLEAR TEST] Final results:', summary)

    return NextResponse.json({
      success: true,
      message: 'Nuclear email test completed',
      results: summary,
      timestamp: new Date().toISOString(),
    })

  } catch (error) {
    console.error('💥 [NUCLEAR TEST] Test failed:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: 'Nuclear email test failed',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
