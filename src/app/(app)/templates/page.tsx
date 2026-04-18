import React from 'react'

export default function Templates() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      textAlign: 'center',
      padding: '2rem',
    }}>
      {/* Badge */}
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.35rem 1rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))',
        border: '1px solid rgba(99,102,241,0.4)',
        color: '#a78bfa',
      }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#a78bfa',
          boxShadow: '0 0 6px #a78bfa',
          animation: 'pulse 2s infinite',
        }} />
        Coming Soon
      </span>

      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        background: 'linear-gradient(135deg, #e2e8f0 30%, #a78bfa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        margin: 0,
      }}>
        New Templates on the Way
      </h1>

      {/* Subtext */}
      <p style={{
        maxWidth: '480px',
        fontSize: '1.05rem',
        color: '#94a3b8',
        lineHeight: 1.7,
        margin: 0,
      }}>
        We&apos;re crafting beautiful, ready-to-use templates to supercharge your workflow.
        Stay tuned — something great is coming.
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
