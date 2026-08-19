import React from 'react';
import { SERVICES_DATA, getWhatsAppUrl } from '../data/agencyData';

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: '100px 5%',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div className="micro-label" style={{ marginBottom: 14 }}>OUR SERVICES</div>
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
          Everything Your Brand Needs to{' '}
          <span className="serif" style={{ color: 'var(--terracotta)' }}>Stand Out.</span>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-muted)', maxWidth: 640, margin: '16px auto 0', fontWeight: 500 }}>
          From high-converting menus and viral reels to full brand identities and modern websites — all crafted under one roof with 48-hour delivery.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 24,
        }}
      >
        {SERVICES_DATA.map((s) => (
          <div
            key={s.title}
            className="card-hover"
            style={{
              background: '#FFFFFF',
              borderRadius: 24,
              padding: '32px 28px',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 18,
                  background: s.badgeBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                }}
              >
                {s.icon}
              </div>
              <span
                style={{
                  background: 'var(--terracotta-soft)',
                  color: 'var(--terracotta)',
                  fontSize: 12.5,
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: 999,
                }}
              >
                {s.priceTag}
              </span>
            </div>

            <h3
              style={{
                fontSize: 19,
                fontWeight: 800,
                color: 'var(--ink)',
                marginBottom: 10,
                fontFamily: 'var(--font-serif)',
              }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: 20, flexGrow: 1 }}>
              {s.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {s.deliverables.map((d, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, color: 'var(--ink)' }}
                >
                  <span style={{ color: 'var(--terracotta)', fontWeight: 800, fontSize: 14 }}>✓</span>
                  <span style={{ fontWeight: 500 }}>{d}</span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppUrl(`Hi VIZHQO, I am interested in your ${s.title} service. Can you share more details?`)}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ marginTop: 22, fontSize: 14, padding: '11px 20px', textAlign: 'center' }}
            >
              Enquire Now <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
