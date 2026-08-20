import React from 'react';
import { PACKAGES_DATA, QUOTE_OPTIONS, getWhatsAppUrl } from '../data/agencyData';

export default function PricingSection({ selectedServices, setSelectedServices, calculatedQuote, customQuoteWaMsg }) {
  return (
    <section
      id="pricing"
      style={{
        padding: '100px 5%',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 54 }}>
        <div className="micro-label" style={{ marginBottom: 14 }}>
          HONEST & ACCESSIBLE PRICING
        </div>
        <h2
          className="luxury-title"
          style={{
            fontSize: 'clamp(2rem, 4.4vw, 3.3rem)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--ink)',
            margin: 0,
          }}
        >
          Premium Design.{' '}
          <span className="serif" style={{ color: 'var(--terracotta)' }}>
            Without the Agency Price.
          </span>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-muted)', maxWidth: 600, margin: '14px auto 0', fontWeight: 500 }}>
          Individual creative assets starting from ₹49, plus all-inclusive monthly growth retainers.
        </p>
      </div>

      {/* Starting From Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: 18,
          marginBottom: 60,
        }}
      >
        {[
          { name: 'Poster Design', price: '149', desc: 'Print & social ready', icon: '🎨' },
          { name: 'Reel Video Edit', price: '299', desc: 'Sound design & hooks', icon: '🎬' },
          { name: 'Restaurant Menu', price: '399', desc: 'Digital & print PDF', icon: '📋' },
          { name: 'Logo & Branding', price: '999', desc: 'Vectors & color palette', icon: '✨' },
        ].map((item) => (
          <div
            key={item.name}
            className="card-hover"
            style={{
              background: '#FFFFFF',
              borderRadius: 20,
              padding: '26px 20px',
              border: '1px solid var(--border)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: 6 }}>
              {item.name}
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--ink)', marginBottom: 6 }}>
              ₹{item.price}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', fontWeight: 500 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}>
          Monthly Growth Retainers
        </h3>
        <p style={{ fontSize: 14.5, color: 'var(--ink-muted)' }}>
          Consistent compounding creative output for scaling brands.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 70,
        }}
      >
        {PACKAGES_DATA.map((pkg) => (
          <div
            key={pkg.name}
            className="card-hover"
            style={{
              background: pkg.featured ? 'var(--ink)' : '#FFFFFF',
              color: pkg.featured ? '#FFFFFF' : 'var(--ink)',
              borderRadius: 24,
              padding: '38px 30px',
              border: pkg.featured ? '2px solid var(--terracotta)' : '1px solid var(--border)',
              position: 'relative',
              boxShadow: pkg.featured ? '0 16px 40px rgba(0,0,0,0.2)' : 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {pkg.featured && (
              <div
                style={{
                  position: 'absolute',
                  top: -14,
                  left: 28,
                  background: 'var(--terracotta)',
                  color: '#FFFFFF',
                  padding: '5px 16px',
                  borderRadius: 999,
                  fontSize: 11.5,
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                }}
              >
                MOST POPULAR
              </div>
            )}

            <div style={{ fontSize: 14, fontWeight: 700, opacity: 0.8, textTransform: 'uppercase', marginBottom: 6 }}>
              {pkg.name}
            </div>
            <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 8 }}>
              ₹{pkg.price}
              <span style={{ fontSize: 14, fontWeight: 500, opacity: 0.7 }}> /mo</span>
            </div>
            <p style={{ fontSize: 13.5, opacity: 0.8, marginBottom: 24, minHeight: 40 }}>
              {pkg.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 30, flexGrow: 1 }}>
              {pkg.features.map((f, i) => (
                <div key={i} style={{ fontSize: 13.5, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: pkg.featured ? 'var(--amber)' : 'var(--terracotta)' }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppUrl('Hi VIZHQO, I want to book the ' + pkg.name + ' Plan (₹' + pkg.price + '/mo). Let\'s connect!')}
              target="_blank"
              rel="noreferrer"
              className={pkg.featured ? 'btn-primary' : 'btn-secondary'}
              style={{ width: '100%', textAlign: 'center' }}
            >
              Choose {pkg.name} <span>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* CUSTOM ESTIMATOR */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: 28,
          padding: '40px 36px',
          border: '2px solid var(--terracotta)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div
          className="quote-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 36,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'var(--terracotta-soft)',
                color: 'var(--terracotta)',
                fontSize: 12,
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: 999,
                marginBottom: 10,
              }}
            >
              CUSTOM ESTIMATOR
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--ink)', marginBottom: 8, fontFamily: 'var(--font-serif)' }}>
              Build Your Own Custom Creative Package
            </h3>
            <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginBottom: 20 }}>
              Check the exact services you need. Get an immediate transparent estimate and send it directly via Instagram DM in one click.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {QUOTE_OPTIONS.map((opt) => {
                const isChecked = selectedServices.includes(opt.id);
                return (
                  <label
                    key={opt.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 14px',
                      borderRadius: 12,
                      background: isChecked ? 'var(--terracotta-soft)' : 'var(--bg-light)',
                      border: isChecked ? '1px solid var(--terracotta)' : '1px solid var(--border)',
                      cursor: 'pointer',
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: isChecked ? 'var(--terracotta)' : 'var(--ink)',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {
                        if (isChecked) {
                          setSelectedServices(selectedServices.filter((s) => s !== opt.id));
                        } else {
                          setSelectedServices([...selectedServices, opt.id]);
                        }
                      }}
                      style={{ accentColor: 'var(--terracotta)', width: 16, height: 16 }}
                    />
                    <span>{opt.label}</span>
                    <span style={{ marginLeft: 'auto', fontSize: 12, opacity: 0.8 }}>+₹{opt.price}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg-alt)',
              borderRadius: 20,
              padding: '30px 24px',
              textAlign: 'center',
              border: '1px solid var(--border)',
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-light)', textTransform: 'uppercase' }}>
              Estimated Package Total
            </div>
            <div style={{ fontSize: 44, fontWeight: 800, color: 'var(--ink)', margin: '8px 0' }}>
              ₹{calculatedQuote.toLocaleString('en-IN')}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-muted)', marginBottom: 20, fontWeight: 500 }}>
              {selectedServices.length} service(s) selected • 48-hr turnaround
            </div>

            <a
              href={getWhatsAppUrl(customQuoteWaMsg)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ width: '100%', padding: '14px 20px', fontSize: 14 }}
            >
              Send Quote via Instagram DM <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
