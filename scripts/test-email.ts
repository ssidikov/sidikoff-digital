#!/usr/bin/env tsx

/**
 * Email Configuration Test Script
 *
 * This script tests the email configuration and SMTP connectivity.
 * Use this to diagnose email issues during development or after deployment.
 *
 * Usage:
 * npm run test-email
 * or
 * npx tsx scripts/test-email.ts
 */

import { sendEmail, sendUserConfirmation, type ContactSubmission } from '../lib/email'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

async function testEmailConfiguration() {
  console.log('🧪 Starting Email Configuration Test...\n')

  // Check environment variables
  console.log('📋 Environment Variables Check:')
  const requiredVars = ['EMAIL_USER', 'EMAIL_PASS']
  const optionalVars = ['EMAIL_SERVICE', 'EMAIL_FROM', 'EMAIL_TO']

  let allPresent = true

  // Check required environment variables
  for (const varName of requiredVars) {
    const value = process.env[varName]
    if (value) {
      if (varName === 'EMAIL_USER') {
        console.log(`✅ ${varName}: ${value.replace(/(.{3}).*(@.*)/, '$1***$2')}`)
      } else if (varName === 'EMAIL_PASS') {
        console.log(`✅ ${varName}: ${'*'.repeat(8)}`)
      } else {
        console.log(`✅ ${varName}: ${value}`)
      }
    } else {
      console.log(`❌ ${varName}: MISSING`)
      allPresent = false
    }
  }

  // Check optional environment variables
  console.log('\n📧 Optional Configuration:')
  for (const varName of optionalVars) {
    const value = process.env[varName]
    if (value) {
      if (varName === 'EMAIL_FROM' || varName === 'EMAIL_TO') {
        console.log(`✅ ${varName}: ${value.replace(/(.{3}).*(@.*)/, '$1***$2')}`)
      } else {
        console.log(`✅ ${varName}: ${value}`)
      }
    } else {
      console.log(`⚪ ${varName}: NOT SET (using defaults)`)
    }
  }

  if (!allPresent) {
    console.log('\n❌ Missing required environment variables. Please check your .env.local file.')
    console.log('💡 Required environment variables:')
    console.log('   EMAIL_USER=s.sidikoff@gmail.com')
    console.log('   EMAIL_PASS=your-gmail-app-password')
    console.log('💡 Optional environment variables:')
    console.log('   EMAIL_SERVICE=gmail')
    console.log('   EMAIL_FROM=s.sidikoff@gmail.com')
    console.log('   EMAIL_TO=s.sidikoff@gmail.com')
    process.exit(1)
  }

  console.log('\n📧 Testing basic email sending...')

  // Test basic email
  const adminEmail = process.env.EMAIL_TO || 's.sidikoff@gmail.com'
  const testResult = await sendEmail(
    adminEmail,
    '🧪 Test Email - SIDIKOFF Digital',
    `
    <h1>Test Email</h1>
    <p>This is a test email sent from the SIDIKOFF Digital email configuration test script.</p>
    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
    `,
    `
Test Email

This is a test email sent from the SIDIKOFF Digital email configuration test script.

Timestamp: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV || 'development'}
    `
  )

  if (testResult.success) {
    console.log('✅ Basic email test PASSED')
    console.log(`📬 Message ID: ${testResult.messageId}`)
  } else {
    console.log('❌ Basic email test FAILED')
    console.log(`❌ Error: ${testResult.error}`)
    if (testResult.details) {
      console.log('❌ Details:', testResult.details)
    }
    return
  }

  console.log('\n📧 Testing user confirmation email...')

  // Test user confirmation email
  const testSubmission: ContactSubmission = {
    name: 'Test User',
    email: adminEmail,
    message: 'This is a test submission from the email configuration test script.',
    projectType: 'Website Development',
    company: 'Test Company',
    submittedAt: new Date().toISOString(),
  }

  const confirmationResult = await sendUserConfirmation(testSubmission)

  if (confirmationResult.success) {
    console.log('✅ User confirmation email test PASSED')
    console.log(`📬 Message ID: ${confirmationResult.messageId}`)
  } else {
    console.log('❌ User confirmation email test FAILED')
    console.log(`❌ Error: ${confirmationResult.error}`)
    if (confirmationResult.details) {
      console.log('❌ Details:', confirmationResult.details)
    }
  }

  console.log('\n🎉 Email configuration test completed!')
  console.log('\n Next steps:')
  console.log('1. Check your email inbox for the test messages')
  console.log('2. If emails are not received, check your spam folder')
  console.log('3. Verify SMTP credentials and server settings')
  console.log("4. For Gmail: ensure you're using an App Password, not your regular password")
  console.log('5. For production: ensure environment variables are set correctly on Vercel')
}

// Run the test
testEmailConfiguration().catch((error) => {
  console.error('💥 Test script failed:', error)
  process.exit(1)
})
