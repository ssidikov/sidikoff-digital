// Quick test to verify environment variables
console.log('=== SANITY ENVIRONMENT VARIABLES TEST ===')
console.log('NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('NEXT_PUBLIC_SANITY_DATASET:', process.env.NEXT_PUBLIC_SANITY_DATASET)
console.log('SANITY_API_TOKEN present:', !!process.env.SANITY_API_TOKEN)
console.log('SANITY_API_TOKEN length:', process.env.SANITY_API_TOKEN?.length || 0)

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.error('❌ MISSING: NEXT_PUBLIC_SANITY_PROJECT_ID')
} else {
  console.log('✅ Project ID found')
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  console.error('❌ MISSING: NEXT_PUBLIC_SANITY_DATASET')
} else {
  console.log('✅ Dataset found')
}

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ MISSING: SANITY_API_TOKEN')
} else {
  console.log('✅ API Token found')
}

export {}
