#!/usr/bin/env ts-node

/**
 * Test script for the Vercel-compatible nodemailer implementation
 * This script tests the updated email functionality with the async/await pattern
 * recommended for Vercel deployment.
 */

import { sendUserConfirmation, sendAdminNotification, ContactSubmission } from '../lib/email'

const testSubmission: ContactSubmission = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+1-555-0123',
  company: 'Test Company',
  message: 'This is a test message to verify the Vercel-compatible email implementation.',
  projectType: 'Web Development',
  budget: '$5000-$10000',
  timeline: '2-3 months',
  submittedAt: new Date().toISOString()
}

async function testEmailFunctionality() {
  console.log('🧪 Testing Vercel-compatible email implementation...')
  console.log('='.repeat(60))
  
  try {
    console.log('📧 Testing user confirmation email...')
    const userResult = await sendUserConfirmation(testSubmission)
    console.log('User email result:', userResult)
    
    console.log('\n📧 Testing admin notification email...')
    const adminResult = await sendAdminNotification(testSubmission)
    console.log('Admin email result:', adminResult)
    
    console.log('\n=== TEST RESULTS ===')
    console.log(`User email: ${userResult.success ? '✅ SUCCESS' : '❌ FAILED'}`)
    console.log(`Admin email: ${adminResult.success ? '✅ SUCCESS' : '❌ FAILED'}`)
    
    if (!userResult.success) {
      console.log('User email error:', userResult.error)
    }
    
    if (!adminResult.success) {
      console.log('Admin email error:', adminResult.error)
    }
    
    console.log('===================')
    
  } catch (error) {
    console.error('❌ Test failed with error:', error)
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testEmailFunctionality()
}

export { testEmailFunctionality }
