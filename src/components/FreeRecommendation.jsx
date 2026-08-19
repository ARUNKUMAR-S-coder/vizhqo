import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

export default function FreeRecommendation() {
  return (
    <section
      style={{
        padding: '60px 5%',
        background: 'var(--bg-alt)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: 24,
          padding: '40px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 28,
        }}
      >
        <div style={{ maxWidth: 540 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 6 }}>
            NOT SURE WHAT YOU NEED?
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--ink)', marginBottom: 8 }}>
            Get a Free Design & Marketing Recommendation
          </h3>
          <p style={{ fontSize: 14.5, color: 'var(--ink-muted)', lineHeight: 1.55 }}>
            Tell us your business type and goals on WhatsApp. We'll review your current visuals and suggest the highest-ROI creative solution — 100% free, no obligations.
          </p>
        </div>
        <a
          href={getWhatsAppUrl('Hi VIZHQO, I would like a free recommendation for my business design and social media!')}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp"
          style={{ padding: '16px 30px', fontSize: 15 }}
        >
          Get Free Recommendation <span>→</span>
        </a>
      </div>
    </section>
  );
}
