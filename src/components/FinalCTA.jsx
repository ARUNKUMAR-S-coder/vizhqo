import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      style={{
        padding: '110px 5%',
        background: 'var(--ink)',
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="glow-ambient"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'rgba(255, 85, 32, 0.16)',
        }}
      />

      <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            lineHeight: 1.12,
            marginBottom: 22,
          }}
        >
          Your Brand Deserves to{' '}
          <span className="serif" style={{ color: 'var(--orange)' }}>
            Look Better.
          </span>
        </h2>
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: 40,
            lineHeight: 1.6,
            maxWidth: 580,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Let's turn your idea into high-converting visuals your customers remember. Fast replies on WhatsApp — no endless forms, no waiting.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 32,
          }}
        >
          <a
            href={getWhatsAppUrl('Hi VIZHQO! I want to start a project with you.')}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
            style={{ padding: '18px 36px', fontSize: 16 }}
          >
            💬 WhatsApp VIZHQO <span>→</span>
          </a>
          <a
            href="mailto:hello@vizhqo.studio"
            className="btn-secondary"
            style={{ padding: '18px 32px', fontSize: 16 }}
          >
            ✉️ hello@vizhqo.studio
          </a>
        </div>

        <div style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)', fontWeight: 500 }}>
          Average response time: <strong>Under 15 minutes</strong> on WhatsApp
        </div>
      </div>
    </section>
  );
}
