import React, { useEffect } from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header Image with Badges & Close Button */}
        <div style={{ position: 'relative', height: 320, background: '#1B1921', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13, 12, 16, 0.9) 0%, rgba(13, 12, 16, 0.2) 60%, rgba(13, 12, 16, 0.5) 100%)',
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF',
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--orange)';
              e.currentTarget.style.borderColor = 'var(--orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            ✕
          </button>

          {/* Overlay Info */}
          <div style={{ position: 'absolute', bottom: 24, left: 28, right: 28, color: '#FFFFFF' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
              <span
                style={{
                  background: 'var(--orange)',
                  color: '#FFFFFF',
                  fontSize: 12,
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: 999,
                  textTransform: 'uppercase',
                }}
              >
                {project.category}
              </span>
              {project.result && (
                <span
                  style={{
                    background: 'rgba(34, 197, 94, 0.25)',
                    border: '1px solid rgba(34, 197, 94, 0.5)',
                    color: '#4ADE80',
                    fontSize: 12,
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: 999,
                  }}
                >
                  ⚡ {project.result}
                </span>
              )}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Client: {project.client}
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, marginTop: 4, lineHeight: 1.2 }}>
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '32px 30px 36px', background: '#FFFFFF' }}>
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>
              The Challenge & Transformation
            </h3>
            <p style={{ fontSize: 15.5, color: 'var(--ink-muted)', lineHeight: 1.7, fontWeight: 500 }}>
              {project.fullStory || project.desc}
            </p>
          </div>

          <div
            style={{
              background: 'var(--bg-alt)',
              borderRadius: 20,
              padding: '22px 24px',
              border: '1px solid var(--border)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-light)', textTransform: 'uppercase' }}>Turnaround</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', marginTop: 2 }}>⚡ 48 Hours</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-light)', textTransform: 'uppercase' }}>Formats Delivered</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', marginTop: 2 }}>Print PDF + Social High-Res</div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-light)', textTransform: 'uppercase' }}>Revisions</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', marginTop: 2 }}>Included & Polished</div>
            </div>
          </div>

          {/* Action Footer */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 13.5, color: 'var(--ink-muted)', fontWeight: 500 }}>
              Need something like this for your business?
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={onClose}
                className="btn-secondary"
                style={{ padding: '12px 22px', fontSize: 14 }}
              >
                Close
              </button>
              <a
                href={getWhatsAppUrl(`Hi VIZHQO, I saw your case study for "${project.title}" (${project.client}) and I want a similar design created for my business.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ padding: '12px 24px', fontSize: 14 }}
              >
                💬 Get Similar Project on WhatsApp <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
