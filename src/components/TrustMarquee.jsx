import React from 'react';

export default function TrustMarquee() {
  const items = [
    { icon: '✦', text: 'Creative Visual Storytelling' },
    { icon: '⚡', text: '48-Hour Rapid Delivery' },
    { icon: '💎', text: 'Affordable Starting from ₹49' },
    { icon: '📈', text: 'Engineered for Real Conversion' },
    { icon: '🎨', text: 'Zero Generic Templates' },
    { icon: '💬', text: 'Direct WhatsApp Support' },
  ];

  return (
    <section
      style={{
        background: 'var(--ink)',
        color: '#FFFFFF',
        padding: '24px 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee-container">
        <div className="marquee-track">
          {items.concat(items).map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: '0.3px',
              }}
            >
              <span style={{ color: 'var(--amber)' }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
