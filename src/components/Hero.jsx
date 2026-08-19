import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';
import { IMG_MENU, IMG_SALON, IMG_HOTEL, IMG_DINER } from '../assets/images';

export default function Hero({ scrollToSection }) {
  return (
    <>
      <section
        id="hero"
        style={{
          position: 'relative',
          padding: '60px 5% 70px',
          maxWidth: 1360,
          margin: '0 auto',
        }}
      >
        {/* Soft Ambient Warm Lighting */}
        <div
          className="glow-ambient"
          style={{
            top: -40,
            right: '12%',
            width: 460,
            height: 460,
            background: 'rgba(217, 90, 39, 0.08)',
          }}
        />
        <div
          className="glow-ambient"
          style={{
            top: '25%',
            left: '-6%',
            width: 420,
            height: 420,
            background: 'rgba(226, 135, 35, 0.07)',
          }}
        />

        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 54,
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Left Text Content */}
          <div className="hero-text-wrap">
            <div
              className="luxury-badge"
              style={{ marginBottom: 22 }}
            >
              <span style={{ color: 'var(--amber)', fontSize: 13 }}>★★★★★</span>
              <span style={{ fontWeight: 700 }}>4.9 / 5.0 Rating</span>
              <span style={{ opacity: 0.3 }}>•</span>
              <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>120+ Brands Elevated</span>
            </div>

            <div className="micro-label" style={{ marginBottom: 12 }}>
              LUXURY MEETS MODERN CREATIVE UI
            </div>

            <h1
              className="luxury-title"
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-1px',
                marginBottom: 22,
                color: 'var(--ink)',
              }}
            >
              We Make Brands{' '}
              <span className="serif" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>
                Impossible
              </span>{' '}
              to Ignore.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.7vw, 1.22rem)',
                color: 'var(--ink-muted)',
                lineHeight: 1.65,
                marginBottom: 34,
                maxWidth: 570,
                fontWeight: 500,
              }}
            >
              Elevate your business perception with high-end <strong style={{ color: 'var(--ink)' }}>branding, modern responsive websites, viral reels, and restaurant menus</strong> engineered to attract high-value clients and drive compounding growth.
            </p>

            <div
              className="hero-actions"
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: 36,
              }}
            >
              <button onClick={() => scrollToSection('work')} className="btn-primary">
                Explore Selected Work <span>↓</span>
              </button>
              <a
                href={getWhatsAppUrl('Hi VIZHQO, I want a free design audit & quote for my business!')}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Get a Free Quote <span>→</span>
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 32,
                paddingTop: 22,
                borderTop: '1px solid var(--border)',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div className="luxury-title" style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink)' }}>
                  48 Hours
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', fontWeight: 600 }}>Average Delivery</div>
              </div>
              <div>
                <div className="luxury-title" style={{ fontSize: 22, fontWeight: 800, color: 'var(--terracotta)' }}>
                  From ₹49
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', fontWeight: 600 }}>Accessible Pricing</div>
              </div>
              <div>
                <div className="luxury-title" style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink)' }}>
                  100%
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', fontWeight: 600 }}>Tailored Distinction</div>
              </div>
            </div>
          </div>

          {/* Right Collage with Sunset Arch Backdrop */}
          <div className="hero-collage-wrap" style={{ position: 'relative' }}>
            {/* Warm Sunset Circle */}
            <div
              className="sun-arch-graphic"
              style={{
                width: 320,
                height: 320,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.85,
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div
                className="card-hover"
                style={{
                  background: '#FFFFFF',
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className="img-zoom-container" style={{ height: 210 }}>
                  <img
                    src={IMG_MENU}
                    alt="Restaurant Menu Design"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(19, 17, 24, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFF',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 999,
                    }}
                  >
                    🍽️ Menu Art
                  </div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Copper & Clay</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Fine Dining System</div>
                </div>
              </div>

              <div
                className="card-hover"
                style={{
                  background: '#FFFFFF',
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)',
                  marginTop: 26,
                }}
              >
                <div className="img-zoom-container" style={{ height: 210 }}>
                  <img
                    src={IMG_SALON}
                    alt="Viral Reel Video"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(217, 90, 39, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFF',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 999,
                    }}
                  >
                    🎬 Viral Reel
                  </div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Aura Aesthetics</div>
                  <div style={{ fontSize: 12, color: 'var(--terracotta)', fontWeight: 600 }}>+180% Engagement</div>
                </div>
              </div>

              <div
                className="card-hover"
                style={{
                  background: '#FFFFFF',
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div className="img-zoom-container" style={{ height: 190 }}>
                  <img
                    src={IMG_HOTEL}
                    alt="Luxury Hotel Branding"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(19, 17, 24, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFF',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 999,
                    }}
                  >
                    🏨 Luxury Identity
                  </div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Northside Grand</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Hospitality Brand</div>
                </div>
              </div>

              <div
                className="card-hover"
                style={{
                  background: '#FFFFFF',
                  borderRadius: 22,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-md)',
                  marginTop: 26,
                }}
              >
                <div className="img-zoom-container" style={{ height: 190 }}>
                  <img
                    src={IMG_DINER}
                    alt="Event Poster Creative"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(226, 135, 35, 0.88)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFF',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 999,
                    }}
                  >
                    🎨 Poster Creative
                  </div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>Late Night Diner</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>High-Footfall Campaign</div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Pill */}
            <div
              className="glass-pill-card"
              style={{
                position: 'absolute',
                bottom: -22,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                whiteSpace: 'nowrap',
                zIndex: 4,
              }}
            >
              <span style={{ fontSize: 18 }}>✨</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>
                48-Hr Delivery • Zero Agency Bloat • 100% Tailored
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating 4-Pill Value Proposition Bar (Matching Reference E-Commerce Bar) */}
      <div className="value-props-bar">
        {[
          { icon: '🎨', title: '100% Custom Visuals', desc: 'No generic Canva templates' },
          { icon: '⚡', title: '48-Hour Rapid Delivery', desc: 'Brief to delivery in 2 days' },
          { icon: '💎', title: 'Starting from ₹49', desc: 'Agency quality for local brands' },
          { icon: '💬', title: 'Direct WhatsApp Support', desc: 'Average reply under 15 mins' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              borderRight: idx !== 3 ? '1px solid var(--border)' : 'none',
              paddingRight: idx !== 3 ? 16 : 0,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: 'var(--terracotta-soft)',
                color: 'var(--terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)' }}>
                {item.title}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', fontWeight: 500 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
