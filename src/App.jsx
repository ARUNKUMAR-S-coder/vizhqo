import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import NeedSelector from './components/NeedSelector';
import SelectedWork from './components/SelectedWork';
import TransformationSection from './components/TransformationSection';
import ServicesSection from './components/ServicesSection';
import WhyUs from './components/WhyUs';
import ProcessSection from './components/ProcessSection';
import NichesSection from './components/NichesSection';
import PricingSection from './components/PricingSection';
import InstagramFeed from './components/InstagramFeed';
import FreeRecommendation from './components/FreeRecommendation';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { PORTFOLIO_PROJECTS, QUOTE_OPTIONS, getWhatsAppUrl } from './data/agencyData';

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeNeedHighlight, setActiveNeedHighlight] = useState(null);
  const [beforeAfterMode, setBeforeAfterMode] = useState('menu');
  const [selectedServices, setSelectedServices] = useState(['poster', 'reel', 'menu']);
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Handle sticky navbar scroll elevation
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects by active category tab
  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  // Calculate live custom package quote
  const calculatedQuote = selectedServices.reduce((sum, id) => {
    const opt = QUOTE_OPTIONS.find((o) => o.id === id);
    return sum + (opt ? opt.price : 0);
  }, 0);

  // Generate WhatsApp message with live custom package breakdown
  const selectedLabels = selectedServices
    .map((id) => QUOTE_OPTIONS.find((o) => o.id === id)?.label)
    .filter(Boolean);

  const customQuoteWaMsg =
    `Hi VIZHQO! I selected a custom package on your website:\n` +
    `• Services: ${selectedLabels.length > 0 ? selectedLabels.join(', ') : 'None'}\n` +
    `• Estimated Total: ₹${calculatedQuote.toLocaleString('en-IN')}\n\n` +
    `Can we discuss moving forward with this?`;

  // Smooth scroll helper
  const scrollToSection = useCallback((id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  // Interactive Need card click handler
  const handleNeedClick = useCallback((item) => {
    setActiveNeedHighlight(item.title);
    if (item.category && item.category !== 'All') {
      setActiveCategory(item.category);
    }
    setTimeout(() => {
      scrollToSection(item.targetId || 'work');
    }, 150);
    setTimeout(() => {
      setActiveNeedHighlight(null);
    }, 2000);
  }, [scrollToSection]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar
        navScrolled={navScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Page Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero scrollToSection={scrollToSection} />
        <TrustMarquee />
        <NeedSelector
          handleNeedClick={handleNeedClick}
          activeNeedHighlight={activeNeedHighlight}
        />
        <SelectedWork
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filteredProjects={filteredProjects}
          setActiveModalProject={setActiveModalProject}
        />
        <TransformationSection
          beforeAfterMode={beforeAfterMode}
          setBeforeAfterMode={setBeforeAfterMode}
        />
        <ServicesSection />
        <WhyUs />
        <ProcessSection />
        <NichesSection />
        <PricingSection
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          calculatedQuote={calculatedQuote}
          customQuoteWaMsg={customQuoteWaMsg}
        />
        <InstagramFeed />
        <FreeRecommendation />
        <FinalCTA />
      </main>

      {/* Global Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Case Study Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={getWhatsAppUrl('Hi VIZHQO, I have a question about your design and video services!')}
        target="_blank"
        rel="noreferrer"
        className="wa-float-btn"
        aria-label="Chat with VIZHQO on WhatsApp"
        title="Chat with us on WhatsApp (Avg reply: < 15 mins)"
      >
        💬
      </a>
    </div>
  );
}
