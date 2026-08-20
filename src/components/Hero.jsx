import React from 'react';
import { getWhatsAppUrl } from '../data/agencyData';
import IMG_HERO_BG from '../assets/images/hero-bg-light.jpg'; 

export default function Hero({ scrollToSection }) {
  return (
    <section 
      className="hero-full-width"
      style={{
        backgroundImage: `url(${IMG_HERO_BG})`,
      }}
    >
      {/* Changed overlay to a light gradient to ensure text readability */}
      <div className="hero-overlay-light" style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(to right, rgba(250, 248, 245, 0.9) 0%, rgba(250, 248, 245, 0.6) 50%, rgba(250, 248, 245, 0.1) 100%)',
        zIndex: 1
      }}></div>
      
      <div className="hero-content-wrapper">
        <div style={{ maxWidth: '700px', color: 'var(--ink)' }}>
          <div 
            className="micro-label animate-on-scroll" 
            style={{ 
              marginBottom: 16, 
              color: 'var(--terracotta)',
              background: 'var(--terracotta-soft)',
              border: '1px solid rgba(217, 90, 39, 0.3)'
            }}
          >
            PREMIUM DESIGN AGENCY
          </div>
          
          <h1 
            className="luxury-title animate-on-scroll delay-100"
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.8rem)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
              color: 'var(--ink)',
              marginBottom: 24,
            }}
          >
            Thoughtfully Crafted.<br />
            <span className="serif" style={{ color: 'var(--terracotta)', fontWeight: 400, fontStyle: 'italic' }}>
              Naturally Inspired.
            </span>
          </h1>
          
          <p 
            className="animate-on-scroll delay-200"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--ink-muted)',
              fontWeight: 500,
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: '540px'
            }}
          >
            We celebrate the finest visual design, prepared with care and creativity to deliver a brand experience like no other.
          </p>
          
          <div className="animate-on-scroll delay-300" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a 
              href={getWhatsAppUrl("Hi VIZHQO, I'd like to discuss a project.")}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: 15, padding: '14px 28px' }}
            >
              Start a Project <span>→</span>
            </a>
            <button 
              onClick={() => scrollToSection('work')}
              className="btn-secondary"
              style={{ 
                fontSize: 15, 
                padding: '14px 28px',
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
