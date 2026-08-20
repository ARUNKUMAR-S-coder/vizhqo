import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

export default function Navbar({ navScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  return (
    <>
      {/* Top Promo Bar */}
      <div
        style={{
          background: 'var(--bg-alt)',
          color: 'var(--ink)',
          padding: '8px 5%',
          fontSize: 13,
          textAlign: 'center',
        }}
      >
        New Arrivals • 48‑Hr Delivery • WhatsApp Support • From ₹49
      </div>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: navScrolled ? 'rgba(250, 248, 245, 0.92)' : 'transparent',
          backdropFilter: navScrolled ? 'blur(12px)' : 'none',
          borderBottom: navScrolled ? '1px solid var(--border)' : '1px solid transparent',
          padding: navScrolled ? '12px 5%' : '18px 5%',
          transition: 'all 0.3s ease',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => scrollToSection('hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'inherit',
          }}
        >
          <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--ink)' }}>
            VIZHQO
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--terracotta)',
              display: 'inline-block',
            }}
          />
        </button>

        {/* Desktop Nav Links */}
        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {[
            { id: 'work', label: 'Selected Work' },
            { id: 'services', label: 'Services' },
            { id: 'transformation', label: 'Before & After' },
            { id: 'why', label: 'Why Us' },
            { id: 'process', label: 'Process' },
            { id: 'pricing', label: 'Pricing & Quote' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14.5,
                fontWeight: 600,
                color: 'var(--ink-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--terracotta)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary nav-desktop"
            style={{ padding: '10px 22px', fontSize: 13.5 }}
          >
            Let's Talk <span>→</span>
          </a>

          <button
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none', // will be shown via media query in CSS
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: 12,
              width: 44,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 18,
              color: 'var(--ink)',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 72,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(250, 248, 245, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            padding: '30px 6%',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            borderBottom: '1px solid var(--border)',
          }}
        >
          {[
            { id: 'work', label: '⭐ Selected Work' },
            { id: 'services', label: '🎨 Services' },
            { id: 'transformation', label: '✨ Before & After' },
            { id: 'why', label: '💎 Why VIZHQO' },
            { id: 'process', label: '🚀 How It Works' },
            { id: 'pricing', label: '🏷️ Pricing & Quote' },
            { id: 'niches', label: '🏢 Built For You' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontSize: 18,
                fontWeight: 700,
                color: 'var(--ink)',
                padding: '10px 0',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
            style={{ marginTop: 12, width: '100%' }}
          >
            💬 Chat on WhatsApp Now
          </a>
        </div>
      )}
    </>
  );
}
