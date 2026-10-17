import { useEffect, useRef, type MouseEvent } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable 3D pointer parallax on fine pointer desktop devices
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const isDesktop = window.innerWidth > 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || !isDesktop || prefersReducedMotion) return;

    const heroEl = heroRef.current;
    if (!heroEl) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetPos.current = {
        x: Math.max(-1, Math.min(1, (x - 0.5) * 2)),
        y: Math.max(-1, Math.min(1, (y - 0.5) * 2)),
      };
    };

    const handleMouseLeave = () => {
      targetPos.current = { x: 0, y: 0 };
    };

    const updateParallax = () => {
      const ease = 0.08;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      heroEl.style.setProperty('--hero-mouse-x', currentPos.current.x.toFixed(4));
      heroEl.style.setProperty('--hero-mouse-y', currentPos.current.y.toFixed(4));

      rafId.current = requestAnimationFrame(updateParallax);
    };

    heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    heroEl.addEventListener('mouseleave', handleMouseLeave);
    rafId.current = requestAnimationFrame(updateParallax);

    return () => {
      heroEl.removeEventListener('mousemove', handleMouseMove);
      heroEl.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

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
    <section id="hero" ref={heroRef} className="ref-hero">
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
            <span className="hero-mask-wrapper">
              <span className="hero-reveal-text ref-hero-line1">{personal.headline.line1}</span>
            </span>
            <span className="hero-mask-wrapper">
              <span className="hero-reveal-text ref-hero-line2">{personal.headline.line2}</span>
            </span>
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
