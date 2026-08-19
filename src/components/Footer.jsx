import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

export default function Footer({ scrollToSection }) {
  return (
    <footer
      style={{
        background: '#070608',
        color: '#FFFFFF',
        padding: '60px 5% 40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: 40,
          marginBottom: 50,
        }}
      >
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14 }}>
            VIZHQO<span style={{ color: 'var(--orange)' }}>.</span>
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)', maxWidth: 300, lineHeight: 1.6, marginBottom: 18 }}>
            Creative digital solutions for businesses that want to stand out, attract high-value clients, and grow.
          </p>
          <div style={{ fontSize: 13, color: 'var(--orange)', fontWeight: 700 }}>
            ★ Trusted by 120+ Businesses
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            Navigation
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['work', 'services', 'transformation', 'why', 'process', 'pricing'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: 14,
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {id === 'work' ? 'Selected Work' : id === 'transformation' ? 'Before & After' : id}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            Services
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
            <div>Poster Design</div>
            <div>Reel Editing</div>
            <div>Menu Design</div>
            <div>Brand Identity</div>
            <div>Website Design</div>
            <div>Paid Ad Creatives</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
            Get In Touch
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
            <a href="mailto:hello@vizhqo.studio" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              ✉️ hello@vizhqo.studio
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>
              💬 Chat on WhatsApp
            </a>
            <a href="https://instagram.com/vizhqo" target="_blank" rel="noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
              📸 @vizhqo on Instagram
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          paddingTop: 24,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 13,
          color: 'rgba(255, 255, 255, 0.4)',
        }}
      >
        <div>© {new Date().getFullYear()} VIZHQO Media. All rights reserved.</div>
        <div>Creative. Premium. Memorable.</div>
      </div>
    </footer>
  );
}
