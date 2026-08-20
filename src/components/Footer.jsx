import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

function FooterLink({ href, onClick, children, isExternal = false }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    color: hovered ? 'var(--terracotta)' : 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    fontSize: 14,
    transition: 'color 0.2s ease',
    background: 'none',
    border: 'none',
    padding: 0,
    textAlign: 'left',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={style}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {children}
    </a>
  );
}

export default function Footer({ scrollToSection }) {
  const navItems = [
    { id: 'work', label: 'Selected Work' },
    { id: 'services', label: 'Services' },
    { id: 'transformation', label: 'Before & After' },
    { id: 'why', label: 'Why VIZHQO' },
    { id: 'process', label: 'Our Process' },
    { id: 'pricing', label: 'Pricing & Calculator' },
  ];

  const serviceItems = [
    'Poster & Social Creatives',
    'High-Retention Reels',
    'Menu Design & Engineering',
    'Brand Identity Systems',
    'Website & Landing Pages',
    'Paid Ad Creatives',
  ];

  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: '#FFFFFF',
        padding: '70px 5% 40px',
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
        {/* Column 1: Brand & Bio */}
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 14, letterSpacing: '-0.5px' }}>
            VIZHQO<span style={{ color: 'var(--terracotta)' }}>.</span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: 300,
              lineHeight: 1.65,
              marginBottom: 18,
            }}
          >
            Creative digital solutions for businesses that want to stand out, attract high-value clients, and grow.
          </p>
          <div style={{ fontSize: 13, color: 'var(--terracotta)', fontWeight: 700 }}>
            ★ Trusted by 120+ Businesses
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'rgba(255, 255, 255, 0.45)',
              marginBottom: 16,
            }}
          >
            Navigation
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {navItems.map((item) => (
              <FooterLink
                key={item.id}
                onClick={scrollToSection ? () => scrollToSection(item.id) : undefined}
              >
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>

        {/* Column 3: Services */}
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'rgba(255, 255, 255, 0.45)',
              marginBottom: 16,
            }}
          >
            Services
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {serviceItems.map((service) => (
              <span
                key={service}
                style={{
                  fontSize: 14,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Column 4: Get In Touch */}
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'rgba(255, 255, 255, 0.45)',
              marginBottom: 16,
            }}
          >
            Get In Touch
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <FooterLink href="mailto:hello@vizhqo.studio">
              <span>✉️</span> hello@vizhqo.studio
            </FooterLink>
            <FooterLink href={getWhatsAppUrl('Hi VIZHQO, I would like to chat with you!')} isExternal>
              <span>💬</span> Chat on WhatsApp
            </FooterLink>
            <FooterLink href="https://www.instagram.com/vizhqo/" isExternal>
              <span>📸</span> @vizhqo on Instagram
            </FooterLink>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          paddingTop: 26,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
          fontSize: 13,
          color: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <div>© {new Date().getFullYear()} VIZHQO Media. All rights reserved.</div>
        <div>Creative. Premium. Memorable.</div>
      </div>
    </footer>
  );
}
