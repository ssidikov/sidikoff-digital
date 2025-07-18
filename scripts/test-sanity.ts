// This is a simple test file to verify Sanity setup
// Run: npx ts-node scripts/test-sanity.ts

import { client } from '../lib/sanity'

async function testSanityConnection() {
  try {
    console.log('Testing Sanity connection...')

    // Test basic connection
    const datasets = await client.datasets.list()
    console.log('✅ Sanity connection successful!')
    console.log(
      'Available datasets:',
      datasets.map((d) => d.name)
    )

    // Test schema query
    const schemaTypes = await client.fetch('*[_type == "sanity.imageAsset"][0]')
    console.log('✅ Schema query successful!')

    console.log('\n🚀 Sanity is properly configured!')
    console.log('Next steps:')
    console.log('1. Visit http://localhost:3000/studio to access Sanity Studio')
    console.log('2. Create your first blog post')
    console.log('3. Visit http://localhost:3000/blog to see your blog')
  } catch (error) {
    console.error('❌ Sanity connection failed:')
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('Error:', errorMessage)

    if (errorMessage.includes('projectId')) {
      console.log('\n💡 Fix: Update your .env.local file with correct Sanity project ID')
    }
    if (errorMessage.includes('dataset')) {
      console.log('\n💡 Fix: Update your .env.local file with correct Sanity dataset name')
    }
    if (errorMessage.includes('token')) {
      console.log('\n💡 Fix: Add a valid Sanity API token to your .env.local file')
    }
  }
}

testSanityConnection()
