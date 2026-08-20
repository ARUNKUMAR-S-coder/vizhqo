import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

export default function FreeRecommendation() {
  return (
    <section
      style={{
        padding: '70px 5%',
        background: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          background: 'var(--terracotta-soft)',
          borderRadius: 28,
          padding: '48px 40px',
          border: '1px solid var(--border-accent)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 32,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 580, position: 'relative', zIndex: 2 }}>
          <div className="micro-label" style={{ marginBottom: 10 }}>
            NOT SURE WHAT YOU NEED?
          </div>
          <h3
            className="luxury-title"
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              fontWeight: 800,
              color: 'var(--ink)',
              marginBottom: 12,
              lineHeight: 1.25,
            }}
          >
            Get a Free Design & Marketing <span className="serif" style={{ color: 'var(--terracotta)' }}>Recommendation.</span>
          </h3>
          <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.6, margin: 0 }}>
            Tell us your business type and goals on WhatsApp or Instagram. We'll review your current visuals and suggest the highest-ROI creative solution — 100% free, no obligations.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <a
            href={getWhatsAppUrl('Hi VIZHQO, I would like a free recommendation for my business design and social media!')}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: '16px 32px', fontSize: 15, textDecoration: 'none' }}
          >
            Get Free Recommendation <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
