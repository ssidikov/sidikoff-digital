#!/usr/bin/env node

const webpush = require('web-push')

// Generate VAPID keys
const vapidKeys = webpush.generateVAPIDKeys()

console.log('=== VAPID Keys Generated ===')
console.log('Add these to your .env.local file:')
console.log('')
console.log(`VAPID_PUBLIC_KEY=${vapidKeys.publicKey}`)
console.log(`VAPID_PRIVATE_KEY=${vapidKeys.privateKey}`)
console.log('')
console.log('Add this to your Next.js environment variables:')
console.log(`NEXT_PUBLIC_VAPID_PUBLIC_KEY=${vapidKeys.publicKey}`)
console.log('')
console.log('=== End VAPID Keys ===')
