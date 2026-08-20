import React from 'react';
import { NICHES_DATA } from '../data/agencyData';

export default function NichesSection() {
  return (
    <section
      id="niches"
      style={{
        padding: '100px 5%',
        background: 'var(--bg-subtle)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', textAlign: 'center' }}>
        <div className="micro-label" style={{ marginBottom: 14 }}>
          TARGET NICHES
        </div>
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
          Built for <span className="serif" style={{ color: 'var(--terracotta)' }}>Businesses Like Yours.</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: 'var(--ink-muted)',
            marginTop: 14,
            maxWidth: 580,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          We understand the exact visual formats and marketing needs of local industries.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 20,
            marginTop: 48,
          }}
        >
          {NICHES_DATA.map((n) => (
            <div
              key={n.name}
              className="card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: 20,
                padding: '28px 24px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'left',
                transition: 'transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.32s ease, border-color 0.32s ease',
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: 'var(--terracotta-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  marginBottom: 16,
                  border: '1px solid var(--border)',
                }}
              >
                {n.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: 8,
                  letterSpacing: '-0.3px',
                }}
              >
                {n.name}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: 'var(--ink-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
