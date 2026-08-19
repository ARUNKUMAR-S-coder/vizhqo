import React from 'react';
import { IMG_DINER, IMG_SALON, IMG_MENU, IMG_HOTEL } from '../assets/images';

export default function InstagramFeed() {
  return (
    <section
      id="instagram"
      style={{
        padding: '100px 5%',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 20,
          marginBottom: 40,
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-block',
              background: 'var(--orange-soft)',
              color: 'var(--orange)',
              padding: '5px 16px',
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 12.5,
              marginBottom: 12,
            }}
          >
            STUDIO FEED
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--ink)', margin: 0 }}>
            See What We're <span className="serif" style={{ color: 'var(--orange)' }}>Creating.</span>
          </h2>
        </div>
        <a
          href="https://instagram.com/vizhqo"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ fontSize: 14 }}
        >
          📸 Follow @vizhqo on Instagram <span>→</span>
        </a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}
      >
        {[
          { img: IMG_DINER, tag: 'Poster Design', title: 'Midnight Diner' },
          { img: IMG_SALON, tag: 'Reel Edit', title: 'Aura Aesthetics' },
          { img: IMG_MENU, tag: 'Menu Art', title: 'Copper & Clay' },
          { img: IMG_HOTEL, tag: 'Identity', title: 'Northside Grand' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="card-hover img-zoom-container"
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              height: 280,
              position: 'relative',
              background: '#E5E1DC',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 14, 17, 0.85) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 20,
                color: '#FFFFFF',
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', color: 'var(--orange)' }}>
                {item.tag}
              </span>
              <span style={{ fontSize: 16, fontWeight: 700 }}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
