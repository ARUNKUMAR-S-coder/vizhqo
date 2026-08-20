import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/agencyData';

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    company: "Copper & Clay Bistro",
    text: "VIZHQO completely transformed our menu and social media presence. Since launching the new designs, our average order value has gone up by 30%. Absolutely thrilled with the 48-hour turnaround!",
    rating: 5
  },
  {
    name: "Rahul Mehta",
    company: "Aura Aesthetics",
    text: "The reels they edited for our salon went viral locally. We've seen a massive spike in direct messages and bookings. The team understands modern social media better than anyone else.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    company: "Studio Verde Botanicals",
    text: "Clean, elegant, and professional. They took our messy branding and turned it into a premium aesthetic that perfectly matches our organic skincare line. Highly recommended.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [showForm, setShowForm] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi VIZHQO, I'd like to submit a review!\n\nName: ${reviewerName}\nReview: ${reviewText}`;
    window.open(getWhatsAppUrl(msg), '_blank');
    setShowForm(false);
    setReviewText('');
    setReviewerName('');
  };

  return (
    <section 
      id="reviews"
      style={{
        padding: '100px 5%',
        background: 'var(--bg-canvas)',
        borderTop: '1px solid var(--border)'
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 60 }}>
          <div>
            <div className="micro-label animate-on-scroll" style={{ marginBottom: 14 }}>CLIENT FEEDBACK</div>
            <h2 className="luxury-title animate-on-scroll delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--ink)', margin: 0 }}>
              Trusted by <span className="serif" style={{ color: 'var(--terracotta)' }}>120+ Brands.</span>
            </h2>
          </div>
          
          <button 
            onClick={() => setShowForm(true)}
            className="btn-secondary animate-on-scroll delay-200"
            style={{ padding: '12px 24px', fontSize: 14 }}
          >
            Leave a Review ✎
          </button>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className="card-hover animate-on-scroll"
              style={{
                background: '#FFFFFF',
                padding: '40px 32px',
                borderRadius: 24,
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                transitionDelay: `${idx * 100}ms`
              }}
            >
              <div style={{ color: 'var(--amber)', fontSize: 20, marginBottom: 16, letterSpacing: 2 }}>
                {'★'.repeat(t.rating)}
              </div>
              <p style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)' }}>{t.name}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{t.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Submission Modal/Form */}
        {showForm && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(19, 17, 24, 0.8)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999, padding: 20
          }}>
            <div style={{
              background: '#FFFFFF', padding: '40px', borderRadius: 24,
              width: '100%', maxWidth: 500, position: 'relative'
            }}>
              <button 
                onClick={() => setShowForm(false)}
                style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: 'var(--ink-muted)' }}
              >✕</button>
              
              <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--ink)', marginBottom: 8, fontFamily: 'var(--font-serif)' }}>Post a Review</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-muted)', marginBottom: 24 }}>
                Write your feedback below. It will be sent to our team for approval before being featured on the site!
              </p>
              
              <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>YOUR NAME / BUSINESS</label>
                  <input 
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    type="text" 
                    placeholder="e.g. John Doe, Café Owner"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 14 }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>YOUR EXPERIENCE</label>
                  <textarea 
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows="4"
                    placeholder="How was your experience working with VIZHQO?"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid var(--border)', fontSize: 14, resize: 'vertical' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', marginTop: 8 }}>
                  Submit Review 
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
