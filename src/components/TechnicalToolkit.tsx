import { portfolioData } from '../data/portfolioData';

export const TechnicalToolkit = () => {
  return (
    <section id="skills" className="editorial-section toolkit-section">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="editorial-section-header">
          <div className="section-prelabel">
            <span className="prelabel-bar" />
            <span>03 // TECHNICAL TOOLKIT</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-display-title">
              Tools, languages & <span className="title-serif-italic">environments.</span>
            </h2>
            <p className="section-header-desc">
              Technologies and frameworks I actively use for coursework, independent projects, and machine learning
              experiments. Kept strictly to confirmed tools without inflated claims.
            </p>
          </div>
        </div>

        {/* 4-Column Editorial Matrix */}
        <div className="toolkit-grid">
          {portfolioData.skills.map((group, idx) => (
            <div key={group.category} className="toolkit-card">
              {/* Top Accent Line */}
              <div className="toolkit-card-accent" aria-hidden="true" />

              <div className="toolkit-card-header">
                <span className="toolkit-idx">0{idx + 1}</span>
                <h3 className="toolkit-category">{group.category}</h3>
                <p className="toolkit-desc">{group.description}</p>
              </div>

              <div className="toolkit-items-wrap">
                {group.items.map((item) => (
                  <span key={item} className="toolkit-pill">
                    <span className="pill-dot" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
