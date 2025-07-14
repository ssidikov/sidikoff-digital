import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'SIDIKOFF DIGITAL - Web Development in Paris';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>
          SIDIKOFF DIGITAL
        </div>
        <div style={{ fontSize: 32, textAlign: 'center', maxWidth: 800 }}>
          Web Development & Digital Solutions in Paris
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
