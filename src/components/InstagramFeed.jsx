import React, { useState } from 'react';
import { IMG_DINER, IMG_SALON, IMG_MENU, IMG_HOTEL } from '../assets/images.js';

export default function InstagramFeed() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const feedItems = [
    { img: IMG_DINER, tag: 'Poster Design', title: 'Midnight Diner' },
    { img: IMG_SALON, tag: 'Reel Edit', title: 'Aura Aesthetics' },
    { img: IMG_MENU, tag: 'Menu Art', title: 'Copper & Clay' },
    { img: IMG_HOTEL, tag: 'Identity', title: 'Northside Grand' },
  ];

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
            className="micro-label"
            style={{
              display: 'inline-block',
              background: 'var(--terracotta-soft)',
              color: 'var(--terracotta)',
              padding: '6px 16px',
              borderRadius: 999,
              marginBottom: 12,
            }}
          >
            STUDIO FEED
          </div>
          <h2
            className="luxury-title"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            See What We're <span className="serif" style={{ color: 'var(--terracotta)' }}>Creating.</span>
          </h2>
        </div>
        <a
          href="https://www.instagram.com/vizhqo/"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--amber)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span>Follow @vizhqo on Instagram</span>
          <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>→</span>
        </a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}
      >
        {feedItems.map((item, idx) => (
          <a
            key={idx}
            href="https://www.instagram.com/vizhqo/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="card-hover img-zoom-container"
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              height: 280,
              position: 'relative',
              background: '#E5E1DC',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              display: 'block',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Light overlay on hover */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(255, 255, 255, 0.16)',
                opacity: hoveredIdx === idx ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Top right Instagram Icon with Amber Accent */}
            <div
              style={{
                position: 'absolute',
                top: 14,
                right: 14,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(19, 17, 24, 0.65)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--amber)',
                zIndex: 2,
                transition: 'transform 0.3s ease',
                transform: hoveredIdx === idx ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>

            {/* Gradient bottom overlay with content */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 14, 17, 0.88) 0%, rgba(15, 14, 17, 0.3) 45%, transparent 70%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 20,
                color: '#FFFFFF',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'var(--terracotta)',
                  marginBottom: 4,
                }}
              >
                {item.tag}
              </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>{item.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
