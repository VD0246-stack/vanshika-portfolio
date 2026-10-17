import { type MouseEvent } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 72;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const { personal } = portfolioData;

  return (
    <section id="hero" className="ref-hero">
      {/* Large Transparent Portrait Cutout Bleeding Off Bottom Edge */}
      <div className="ref-hero-portrait-wrap">
        <img
          src="/images/portrait-cutout.webp"
          alt="Portrait of Vanshika Dhaka, Computer Science & Engineering student"
          width="540"
          height="960"
          fetchPriority="high"
          className="ref-hero-portrait-img"
        />
      </div>

      <div className="ref-hero-inner">
        {/* Headline Group (Vertically Centered on Left) */}
        <div className="ref-hero-headline-block">
          {/* Small Introductory Line */}
          <div className="ref-hero-kicker">
            {personal.smallIntro}
          </div>

          <h1 className="ref-hero-h1">
            <span className="ref-hero-line1">{personal.headline.line1}</span>
            <span className="ref-hero-line2">{personal.headline.line2}</span>
          </h1>

          {/* Academic Identification */}
          <div className="ref-hero-academic">
            {personal.academic.map((line, idx) => (
              <span key={idx} className="ref-hero-academic-line">
                {line}
              </span>
            ))}
          </div>

          {/* Availability Label */}
          <div className="ref-hero-availability">
            <span className="ref-hero-avail-dot" aria-hidden="true" />
            <span className="ref-hero-avail-text">{personal.availability}</span>
          </div>
        </div>

        {/* Bottom Row: Left Copy & Dual CTAs */}
        <div className="ref-hero-bottom-row">
          <div className="ref-hero-bottom-left">
            <p className="ref-hero-bio">
              {personal.description}
            </p>

            <div className="ref-hero-cta-group">
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, 'work')}
                className="ref-hero-btn-primary"
              >
                Explore my work
              </a>
              <span className="ref-hero-cta-sep" aria-hidden="true">/</span>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="ref-hero-link-secondary"
              >
                Get to know me
              </a>
            </div>
          </div>

          <div className="ref-hero-bottom-right">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="ref-hero-scroll-link"
              aria-label="Scroll down to About section"
            >
              <span className="ref-hero-scroll-label">Scroll to explore</span>
              <span className="ref-hero-scroll-arrow" aria-hidden="true">↓</span>
            </a>
            <span className="ref-hero-mono-caption">
              AI / SOFTWARE / PRODUCT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
