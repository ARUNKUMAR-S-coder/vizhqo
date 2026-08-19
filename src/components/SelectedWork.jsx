import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

export default function SelectedWork({ activeCategory, setActiveCategory, filteredProjects, setActiveModalProject }) {
  return (
    <section
      id="work"
      style={{
        padding: '90px 5% 100px',
        background: 'var(--bg-subtle)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 44,
          }}
        >
          <div>
            <div className="micro-label" style={{ marginBottom: 10 }}>
              OUR PORTFOLIO
            </div>
            <h2
              className="luxury-title"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-1px',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              Selected{' '}
              <span className="serif" style={{ color: 'var(--terracotta)' }}>Work.</span>
            </h2>
            <p style={{ fontSize: 15.5, color: 'var(--ink-muted)', marginTop: 10, fontWeight: 500 }}>
              High-converting visual assets crafted for ambitious businesses.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              background: '#FFFFFF',
              padding: '6px',
              borderRadius: 999,
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {['All', 'Branding', 'Menus', 'Reels & Video', 'Posters'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? 'var(--ink)' : 'transparent',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--ink-muted)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: 999,
                  fontSize: 13.5,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 26,
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModalProject(proj)}
              className="card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="img-zoom-container" style={{ height: 260, background: '#EFE8E1', position: 'relative' }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    background: 'rgba(19, 17, 24, 0.78)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFF',
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: 999,
                  }}
                >
                  {proj.category}
                </div>
                {proj.result && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      background: 'rgba(217, 90, 39, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFF',
                      fontSize: 12,
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: 999,
                    }}
                  >
                    {proj.result}
                  </div>
                )}
              </div>

              <div style={{ padding: '22px 22px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--terracotta)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>
                  {proj.client}
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 800, color: 'var(--ink)', marginBottom: 8, fontFamily: 'var(--font-serif)' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: 13.5, color: 'var(--ink-muted)', lineHeight: 1.55, marginBottom: 18, flexGrow: 1 }}>
                  {proj.desc}
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border)',
                    paddingTop: 14,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>
                    View Project Details
                  </span>
                  <span style={{ color: 'var(--terracotta)', fontWeight: 800, fontSize: 16 }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontSize: 16, color: 'var(--ink-muted)', marginBottom: 18, fontWeight: 600 }}>
            Want stunning visuals like these crafted for your business?
          </p>
          <a
            href={getWhatsAppUrl('Hi VIZHQO, I love your portfolio! Can we discuss creating something similar for my business?')}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Start Your Project With Us <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
