import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// API endpoint to get real-time submission statistics for monitoring
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    if (action === 'stats') {
      // Return submission statistics
      const dataDir = path.join(process.cwd(), 'data')
      const counterFile = path.join(dataDir, 'submission-counter.json')
      
      let submissionCount = 0
      let lastUpdate = null
      
      if (fs.existsSync(counterFile)) {
        try {
          const data = JSON.parse(fs.readFileSync(counterFile, 'utf-8'))
          submissionCount = data.count || 0
          lastUpdate = data.lastUpdate
        } catch (error) {
          console.error('Error reading counter file:', error)
        }
      }

      // Get current timestamp for monitoring
      const now = new Date().toISOString()
      
      return NextResponse.json({
        submissionCount,
        lastUpdate,
        currentTime: now,
        monitoring: true
      })
    }

    if (action === 'reset') {
      // Reset counter (for testing purposes)
      const dataDir = path.join(process.cwd(), 'data')
      const counterFile = path.join(dataDir, 'submission-counter.json')
      
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }
      
      fs.writeFileSync(counterFile, JSON.stringify({
        count: 0,
        lastUpdate: new Date().toISOString()
      }, null, 2))
      
      return NextResponse.json({
        message: 'Counter reset to 0',
        submissionCount: 0,
        currentTime: new Date().toISOString()
      })
    }

    // Default response - current stats
    const dataDir = path.join(process.cwd(), 'data')
    const counterFile = path.join(dataDir, 'submission-counter.json')
    
    let submissionCount = 0
    let lastUpdate = null
    
    if (fs.existsSync(counterFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(counterFile, 'utf-8'))
        submissionCount = data.count || 0
        lastUpdate = data.lastUpdate
      } catch (error) {
        console.error('Error reading counter file:', error)
      }
    }

    return NextResponse.json({
      submissionCount,
      lastUpdate,
      currentTime: new Date().toISOString(),
      endpoints: {
        stats: '/api/real-time-stats?action=stats',
        reset: '/api/real-time-stats?action=reset'
      }
    })

  } catch (error) {
    console.error('Real-time stats API error:', error)
    return NextResponse.json(
      { error: 'Failed to get real-time statistics' },
      { status: 500 }
    )
  }
}

// POST endpoint for updating stats (if needed)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, increment } = body

    if (action === 'increment') {
      const dataDir = path.join(process.cwd(), 'data')
      const counterFile = path.join(dataDir, 'submission-counter.json')
      
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true })
      }
      
      let currentCount = 0
      if (fs.existsSync(counterFile)) {
        try {
          const data = JSON.parse(fs.readFileSync(counterFile, 'utf-8'))
          currentCount = data.count || 0
        } catch {
          console.log('Counter file corrupted, starting from 0')
        }
      }
      
      currentCount += increment || 1
      
      fs.writeFileSync(counterFile, JSON.stringify({
        count: currentCount,
        lastUpdate: new Date().toISOString()
      }, null, 2))
      
      return NextResponse.json({
        submissionCount: currentCount,
        incremented: increment || 1,
        currentTime: new Date().toISOString()
      })
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Real-time stats POST error:', error)
    return NextResponse.json(
      { error: 'Failed to update statistics' },
      { status: 500 }
    )
  }
}
