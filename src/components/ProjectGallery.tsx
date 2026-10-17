import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export const ProjectGallery = () => {
  const { featuredProjects, moreProjects } = portfolioData;
  const galleryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || prefersReducedMotion) return;

    const container = galleryRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('.featured-project-item, .more-project-card');

    const handlePointerMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.featured-project-item, .more-project-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Restrained, sophisticated tilt angle
      const tiltX = (y - 0.5) * -5.5;
      const tiltY = (x - 0.5) * 5.5;

      card.style.setProperty('--card-rotate-x', `${tiltX.toFixed(2)}deg`);
      card.style.setProperty('--card-rotate-y', `${tiltY.toFixed(2)}deg`);
      card.style.setProperty('--card-shine-x', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--card-shine-y', `${(y * 100).toFixed(1)}%`);
    };

    const handlePointerLeave = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.featured-project-item, .more-project-card');
      if (!card) return;

      card.style.setProperty('--card-rotate-x', '0deg');
      card.style.setProperty('--card-rotate-y', '0deg');
      card.style.setProperty('--card-shine-x', '50%');
      card.style.setProperty('--card-shine-y', '50%');
    };

    cards.forEach((card) => {
      card.addEventListener('pointermove', handlePointerMove as EventListener, { passive: true });
      card.addEventListener('pointerleave', handlePointerLeave as EventListener);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('pointermove', handlePointerMove as EventListener);
        card.removeEventListener('pointerleave', handlePointerLeave as EventListener);
      });
    };
  }, []);

  return (
    <section id="work" ref={galleryRef} className="editorial-section section-work">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col">
          <span className="section-mono-label" data-reveal>Selected Work</span>
        </div>

        {/* Right Columns 4-12: Content */}
        <div className="section-content-col">
          {/* Section Heading & Intro */}
          <div className="work-header-group" data-reveal>
            <h2 className="work-section-title">Ideas into action.</h2>
            <p className="work-section-intro">
              Every project starts with a question. These are some of the problems
              I've explored, products I've helped shape, and applications I've built
              while learning along the way.
            </p>
          </div>

          {/* Featured Projects: Varied Editorial Showcase */}
          <div className="featured-projects-showcase" role="list" aria-label="Featured projects">
            {featuredProjects.map((project, idx) => (
              <article
                key={project.number}
                className={`featured-project-item project-layout-${idx % 2 === 0 ? 'alpha' : 'beta'}`}
                role="listitem"
                data-reveal
              >
                {/* Editorial Header */}
                <div className="project-item-header">
                  <div className="project-index-tag">
                    <span className="project-idx-num">{project.number}</span>
                    <span className="project-idx-line" aria-hidden="true" />
                  </div>
                  <div className="project-title-wrap">
                    <h3 className="project-display-title">{project.title}</h3>
                    <div className="project-categories-bar">
                      {project.categories}
                    </div>
                  </div>
                </div>

                {/* Editorial Body: Description & Contribution */}
                <div className="project-item-details">
                  <div className="project-desc-col">
                    <h4 className="project-sub-label">THE PROBLEM & CONCEPT</h4>
                    <p className="project-desc-text">{project.description}</p>
                  </div>

                  <div className="project-contrib-col">
                    <div className="project-contrib-panel">
                      <div className="project-contrib-header">
                        <span className="contrib-dot" aria-hidden="true" />
                        <h4 className="project-sub-label contrib-label">MY CONTRIBUTION</h4>
                      </div>
                      <p className="project-contrib-text">{project.contribution}</p>
                    </div>
                  </div>
                </div>

                {/* CSS-Based Architectural Metadata Schematic */}
                <div className="project-schematic-strip" aria-hidden="true">
                  <span className="schematic-mark">PROPOSAL // PROTOTYPE</span>
                  <span className="schematic-line" />
                  <span className="schematic-mark">CONFIRMED SCOPE</span>
                </div>
              </article>
            ))}
          </div>

          {/* Differentiated Subsection: MORE PROJECTS */}
          <div className="more-projects-section">
            <div className="more-projects-header" data-reveal>
              <span className="more-projects-sublabel">ADDITIONAL EXPLORATIONS</span>
              <h3 className="more-projects-title">More Projects</h3>
              <p className="more-projects-intro">
                Independent applications that helped me develop practical experience
                with backend logic, application workflows, validation, and databases.
              </p>
            </div>

            <div className="more-projects-grid" role="list" aria-label="More projects">
              {moreProjects.map((project) => (
                <div key={project.number} className="more-project-card" role="listitem" data-reveal>
                  <div className="more-project-top">
                    <span className="more-project-num">{project.number}</span>
                    <div className="more-project-tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4 className="more-project-title">{project.title}</h4>
                  <p className="more-project-desc">{project.description}</p>

                  <div className="more-project-contrib">
                    <span className="contrib-inline-label">Contribution:</span>
                    <p className="contrib-inline-text">{project.contribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
