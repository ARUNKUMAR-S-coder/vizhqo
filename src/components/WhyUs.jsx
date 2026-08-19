import React from 'react';
import { WHY_PILLARS } from '../data/agencyData';

export default function WhyUs() {
  return (
    <section
      id="why"
      style={{
        padding: '100px 5%',
        background: 'var(--bg-subtle)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="micro-label" style={{ marginBottom: 14 }}>WHY PARTNER WITH US</div>
          <h2
            className="luxury-title"
            style={{
              fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-1px',
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            Not Just Design.{' '}
            <span className="serif" style={{ color: 'var(--terracotta)' }}>We Build Perception.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-muted)', maxWidth: 600, margin: '16px auto 0', fontWeight: 500 }}>
            Your business deserves to look as good as the work you do. Here's why 120+ growing brands trust VIZHQO.
          </p>
        </div>

        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 22,
          }}
        >
          {WHY_PILLARS.map((p) => (
            <div
              key={p.number}
              className="card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: 22,
                padding: '32px 24px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: 'var(--terracotta)',
                  letterSpacing: '1px',
                  marginBottom: 16,
                  fontFamily: 'var(--font-luxury)',
                  fontSize: 28,
                  opacity: 0.5,
                }}
              >
                {p.number}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 800, color: 'var(--ink)', marginBottom: 10, fontFamily: 'var(--font-serif)' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
