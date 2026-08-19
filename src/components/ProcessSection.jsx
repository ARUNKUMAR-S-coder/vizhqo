import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        padding: '100px 5%',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 54 }}>
        <div className="micro-label" style={{ marginBottom: 14 }}>SIMPLE 4-STEP PROCESS</div>
        <h2
          className="luxury-title"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--ink)',
            margin: 0,
          }}
        >
          How We Work{' '}
          <span className="serif" style={{ color: 'var(--terracotta)' }}>With You.</span>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-muted)', marginTop: 14, fontWeight: 500 }}>
          Zero confusing briefs or endless delays. Clean, fast execution from day one.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 22,
        }}
      >
        {PROCESS_STEPS.map((st, idx) => (
          <div
            key={st.step}
            className="card-hover"
            style={{
              background: '#FFFFFF',
              borderRadius: 22,
              padding: '32px 24px',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Step Number Watermark */}
            <div
              style={{
                position: 'absolute',
                top: -10,
                right: 16,
                fontSize: 80,
                fontWeight: 800,
                color: 'var(--bg-alt)',
                fontFamily: 'var(--font-luxury)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {st.step}
            </div>

            {/* Step Indicator Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: idx === 0 ? 'var(--terracotta)' : 'var(--terracotta-soft)',
                color: idx === 0 ? '#FFFFFF' : 'var(--terracotta)',
                fontSize: 14,
                fontWeight: 800,
                marginBottom: 18,
              }}
            >
              {idx + 1}
            </div>

            <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)', marginBottom: 10, fontFamily: 'var(--font-serif)', position: 'relative' }}>
              {st.title}
            </h3>
            <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.6, position: 'relative' }}>
              {st.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
