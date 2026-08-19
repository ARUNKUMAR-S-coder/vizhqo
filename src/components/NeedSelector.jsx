import React from 'react';
import { LOOKING_TO_CREATE } from '../data/agencyData';

export default function NeedSelector({ handleNeedClick, activeNeedHighlight }) {
  return (
    <section
      id="choose-need"
      style={{
        padding: '90px 5% 80px',
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <div className="micro-label" style={{ marginBottom: 14 }}>
        INTERACTIVE SELECTOR
      </div>
      <h2
        className="luxury-title"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-1px',
          marginBottom: 14,
          color: 'var(--ink)',
        }}
      >
        What are you looking to{' '}
        <span className="serif" style={{ color: 'var(--terracotta)' }}>create?</span>
      </h2>
      <p
        style={{
          fontSize: 16,
          color: 'var(--ink-muted)',
          maxWidth: 580,
          margin: '0 auto 48px',
          fontWeight: 500,
        }}
      >
        Select what your business needs right now — we'll guide you straight to the exact work, pricing, and solution.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
          textAlign: 'left',
        }}
      >
        {LOOKING_TO_CREATE.map((item) => {
          const isHighlighted = activeNeedHighlight === item.title;
          return (
            <div
              key={item.title}
              onClick={() => handleNeedClick(item)}
              className="card-hover"
              style={{
                background: isHighlighted ? 'var(--terracotta-soft)' : '#FFFFFF',
                border: isHighlighted ? '2px solid var(--terracotta)' : '1px solid var(--border)',
                borderRadius: 20,
                padding: '22px 20px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 14,
                transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 16,
                    background: item.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--ink)', marginBottom: 3 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-muted)', fontWeight: 500 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: isHighlighted ? 'var(--terracotta)' : 'var(--bg-alt)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  color: isHighlighted ? '#FFFFFF' : 'var(--ink)',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  fontWeight: 700,
                }}
              >
                →
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
