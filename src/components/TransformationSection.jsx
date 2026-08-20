import React from 'react';

export default function TransformationSection({ beforeAfterMode, setBeforeAfterMode }) {
  return (
    <section
      id="transformation"
      style={{
        padding: '100px 5%',
        background: 'var(--ink)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Lighting */}
      <div
        className="glow-ambient"
        style={{
          top: -100,
          right: -50,
          width: 500,
          height: 500,
          background: 'rgba(217, 90, 39, 0.14)',
        }}
      />
      <div
        className="glow-ambient"
        style={{
          bottom: -100,
          left: -50,
          width: 420,
          height: 420,
          background: 'rgba(226, 135, 35, 0.08)',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: 54 }}>
          <div
            className="micro-label"
            style={{
              display: 'inline-block',
              background: 'rgba(217, 90, 39, 0.15)',
              color: 'var(--terracotta)',
              border: '1px solid rgba(217, 90, 39, 0.35)',
              padding: '6px 18px',
              borderRadius: 999,
              marginBottom: 16,
            }}
          >
            THE POWER OF PERCEPTION
          </div>
          <h2
            className="luxury-title"
            style={{
              fontSize: 'clamp(2.1rem, 4.4vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-1px',
              marginBottom: 18,
              color: '#FFFFFF',
            }}
          >
            Good design doesn't just look better.{' '}
            <span className="serif" style={{ color: 'var(--terracotta)' }}>
              It changes how customers perceive you.
            </span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: 680,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: '#FFFFFF' }}>Basic presentation = Basic perception.</strong> Customers judge your quality and prices before they ever contact you.
          </p>

          {/* Mode Switcher */}
          <div
            style={{
              display: 'inline-flex',
              gap: 10,
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '6px',
              borderRadius: 999,
              border: '1px solid rgba(255, 255, 255, 0.12)',
              marginTop: 32,
            }}
          >
            <button
              onClick={() => setBeforeAfterMode('menu')}
              style={{
                background: beforeAfterMode === 'menu' ? 'var(--terracotta)' : 'transparent',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 22px',
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: beforeAfterMode === 'menu' ? '0 4px 16px rgba(217, 90, 39, 0.35)' : 'none',
              }}
            >
              🍽️ Restaurant Menu Transformation
            </button>
            <button
              onClick={() => setBeforeAfterMode('social')}
              style={{
                background: beforeAfterMode === 'social' ? 'var(--terracotta)' : 'transparent',
                color: '#FFFFFF',
                border: 'none',
                padding: '10px 22px',
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: beforeAfterMode === 'social' ? '0 4px 16px rgba(217, 90, 39, 0.35)' : 'none',
              }}
            >
              📱 Social Media Creative Shift
            </button>
          </div>
        </div>

        {beforeAfterMode === 'menu' ? (
          <div
            className="before-after-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 30,
              alignItems: 'stretch',
            }}
          >
            {/* Before Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 24,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#F87171',
                    fontSize: 12.5,
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: 999,
                  }}
                >
                  BEFORE — ORDINARY DESIGN
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-luxury)',
                    fontSize: 26,
                    fontWeight: 700,
                    color: 'var(--amber)',
                    lineHeight: 1,
                    opacity: 0.85,
                  }}
                >
                  01
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-serif)' }}>
                Standard Black & White Printout
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: 14.5, marginBottom: 20 }}>
                Cluttered text, illegible fonts, no visual appetite appeal, discounts look cheap, hard for diners to navigate.
              </p>
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 16,
                  padding: '20px',
                  border: '1px dashed rgba(255, 255, 255, 0.15)',
                  marginTop: 'auto',
                }}
              >
                <div style={{ color: '#F87171', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>
                  ❌ Client Consequence:
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 13.5 }}>
                  Customers order low-ticket items, question prices, and perceive the food as average dining.
                </div>
              </div>
            </div>

            {/* After Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(217, 90, 39, 0.15), rgba(255, 255, 255, 0.05))',
                border: '2px solid var(--terracotta)',
                borderRadius: 24,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -12,
                  right: 28,
                  background: 'var(--terracotta)',
                  color: '#FFF',
                  fontSize: 11,
                  fontWeight: 800,
                  padding: '4px 14px',
                  borderRadius: 999,
                  boxShadow: '0 4px 12px rgba(217, 90, 39, 0.3)',
                }}
              >
                VIZHQO UPGRADE
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(34, 197, 94, 0.2)',
                    color: '#4ADE80',
                    fontSize: 12.5,
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: 999,
                  }}
                >
                  AFTER — PREMIUM VIZHQO MENU
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-luxury)',
                    fontSize: 26,
                    fontWeight: 700,
                    color: 'var(--amber)',
                    lineHeight: 1,
                    opacity: 0.85,
                  }}
                >
                  02
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-serif)' }}>
                Artisan Dining Visual Experience
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: 14.5, marginBottom: 20 }}>
                Luxury layout hierarchy, appetizing presentation, signature dish callouts, digital QR & print-ready formats.
              </p>
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: 16,
                  padding: '20px',
                  border: '1px solid rgba(217, 90, 39, 0.35)',
                  marginTop: 'auto',
                }}
              >
                <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>
                  ✅ Business Result:
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 13.5 }}>
                  Higher average order value, effortless premium pricing justification, and Instagram-worthy dining shares.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="before-after-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 30,
              alignItems: 'stretch',
            }}
          >
            {/* Before Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 24,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#F87171',
                    fontSize: 12.5,
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: 999,
                  }}
                >
                  BEFORE — GENERIC POSTS
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-luxury)',
                    fontSize: 26,
                    fontWeight: 700,
                    color: 'var(--amber)',
                    lineHeight: 1,
                    opacity: 0.85,
                  }}
                >
                  01
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-serif)' }}>
                Stock Graphics & Unedited Clips
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: 14.5, marginBottom: 20 }}>
                Inconsistent colors, lack of storytelling, zero hook in the first 3 seconds, low engagement and wasted ad spend.
              </p>
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 16,
                  padding: '20px',
                  border: '1px dashed rgba(255, 255, 255, 0.15)',
                  marginTop: 'auto',
                }}
              >
                <div style={{ color: '#F87171', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>
                  ❌ Client Consequence:
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 13.5 }}>
                  Users scroll past without pausing. Brand looks unestablished and generic.
                </div>
              </div>
            </div>

            {/* After Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(217, 90, 39, 0.15), rgba(255, 255, 255, 0.05))',
                border: '2px solid var(--terracotta)',
                borderRadius: 24,
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -12,
                  right: 28,
                  background: 'var(--terracotta)',
                  color: '#FFF',
                  fontSize: 11,
                  fontWeight: 800,
                  padding: '4px 14px',
                  borderRadius: 999,
                  boxShadow: '0 4px 12px rgba(217, 90, 39, 0.3)',
                }}
              >
                VIZHQO UPGRADE
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(34, 197, 94, 0.2)',
                    color: '#4ADE80',
                    fontSize: 12.5,
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: 999,
                  }}
                >
                  AFTER — RETENTION-FOCUSED REELS
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-luxury)',
                    fontSize: 26,
                    fontWeight: 700,
                    color: 'var(--amber)',
                    lineHeight: 1,
                    opacity: 0.85,
                  }}
                >
                  02
                </span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-serif)' }}>
                Pacing, Sound & Visual Hooks
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: 14.5, marginBottom: 20 }}>
                High-energy cuts, motion captions, tailored audio design, and conversion-engineered CTAs that compel action.
              </p>
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: 16,
                  padding: '20px',
                  border: '1px solid rgba(217, 90, 39, 0.35)',
                  marginTop: 'auto',
                }}
              >
                <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: 14, marginBottom: 6 }}>
                  ✅ Business Result:
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 13.5 }}>
                  3x to 5x higher reach, viral saves/shares, and direct customer DMs turning into paying sales.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
