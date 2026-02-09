import type { Metadata } from 'next'
import './globals.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
})

// ============================================================
// SITE DISABLED — flip this to false to re-enable the website
// ============================================================
const MAINTENANCE_MODE = true

export const metadata: Metadata = {
  title: MAINTENANCE_MODE
    ? 'Site Under Maintenance'
    : 'Top 5 Weight-Support Supplements for Women Over 45',
  description: MAINTENANCE_MODE
    ? 'This site is currently undergoing maintenance. Please check back soon.'
    : 'Independent review of the most talked-about weight-support supplements for women over 45.',
}

function MaintenancePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      {/* animated pulse ring */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          border: '3px solid rgba(99,102,241,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      </div>

      <h1
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          fontWeight: 700,
          margin: '0 0 0.75rem',
          letterSpacing: '-0.02em',
        }}
      >
        Deployment Pending
      </h1>

      <p
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: 460,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        This site is currently being updated.
        <br />
        Please check back shortly.
      </p>

      {/* keyframes injected via style tag */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={caveat.variable}>
        {MAINTENANCE_MODE ? <MaintenancePage /> : children}
      </body>
    </html>
  )
}
