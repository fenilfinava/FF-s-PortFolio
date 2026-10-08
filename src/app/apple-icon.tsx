import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 800,
            color: '#FAFAF8',
            letterSpacing: '-2px',
            lineHeight: 1,
            marginTop: '8px',
          }}
        >
          FF
        </div>
        <div
          style={{
            width: '40px',
            height: '8px',
            background: '#7d30e8',
            borderRadius: '4px',
            marginTop: '8px',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
