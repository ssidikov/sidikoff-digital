import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SIDIKOFF Digital - Modern Web Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Inter',
        }}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          SIDIKOFF Digital
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.2,
          }}>
          Modern Web Solutions & Development Agency
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 30,
            opacity: 0.9,
          }}>
          Next.js • React • TypeScript • Modern Design
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
