import React from 'react';
import { NICHES_DATA } from '../data/agencyData';

export default function NichesSection() {
  return (
    <section
      id="niches"
      style={{
        padding: '90px 5%',
        background: 'var(--bg-alt)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-block',
            background: 'var(--ink)',
            color: '#FFFFFF',
            padding: '5px 16px',
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 12.5,
            marginBottom: 14,
          }}
        >
          TARGET NICHES
        </div>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--ink)',
            margin: 0,
          }}
        >
          Built for Businesses Like Yours.
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-muted)', marginTop: 10, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', fontWeight: 500 }}>
          We understand the exact visual formats and marketing needs of local industries.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 18,
            marginTop: 44,
          }}
        >
          {NICHES_DATA.map((n) => (
            <div
              key={n.name}
              className="card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: 18,
                padding: '24px 20px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>{n.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                {n.name}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
