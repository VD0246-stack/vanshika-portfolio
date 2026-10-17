import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        <div className="footer-content-grid">
          {/* Brand & Statement */}
          <div className="footer-brand-col">
            <span className="footer-wordmark">VANSHIKA</span>
            <p className="footer-tagline">
              Computer Science and Engineering student interested in artificial intelligence,
              machine learning, software engineering, and full-stack development.
            </p>
            <span className="footer-edition">EDITION // 2026</span>
          </div>

          {/* Quick Section Directory */}
          <div className="footer-nav-col">
            <span className="footer-heading">NAVIGATION</span>
            <div className="footer-links-list">
              <a href="#about" className="footer-nav-anchor" data-cursor="pointer">
                About & Background
              </a>
              <a href="#work" className="footer-nav-anchor" data-cursor="pointer">
                Selected Work (KrishiSetu & Start Smart)
              </a>
              <a href="#skills" className="footer-nav-anchor" data-cursor="pointer">
                Technical Toolkit
              </a>
              <a href="#experience" className="footer-nav-anchor" data-cursor="pointer">
                Trajectory & Milestones
              </a>
              <a href="#contact" className="footer-nav-anchor" data-cursor="pointer">
                Contact & Dialogue
              </a>
            </div>
          </div>

          {/* Colophon & Status */}
          <div className="footer-colophon-col">
            <span className="footer-heading">COLOPHON</span>
            <div className="colophon-details">
              <p>Typeset in Instrument Serif, Inter, & JetBrains Mono.</p>
              <p>Designed with deep burgundy, dark wine, and warm ivory palettes.</p>
              <p>Built with React, TypeScript & Vite.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            © 2026 Vanshika. All rights reserved.
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            data-cursor="pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
