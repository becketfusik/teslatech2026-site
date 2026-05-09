import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TeslaTech 2026 — ExtraOrdinary Technology Conference';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #04060d 0%, #0a0e1a 60%, #1a2240 100%)',
          padding: '64px 80px',
          color: '#e8eaf0',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            color: '#d4a943',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          TTN Network presents · 33rd Annual
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 88,
            lineHeight: 1.05,
            fontWeight: 500,
            color: '#f8fafc',
            marginBottom: 32,
          }}
        >
          <span>Free energy.</span>
          <span>Anti-gravity.</span>
          <span style={{ color: '#d4a943', fontStyle: 'italic' }}>Field healing.</span>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#cbd5e1',
            marginTop: 'auto',
          }}
        >
          August 12 to 16, 2026 · Albuquerque, NM · teslatech2026.com
        </div>

        <div
          style={{
            position: 'absolute',
            top: 64,
            right: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            fontSize: 14,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#94a3b8',
          }}
        >
          <div>30+ researchers</div>
          <div style={{ marginTop: 6 }}>5 days, six tracks</div>
        </div>
      </div>
    ),
    size,
  );
}
