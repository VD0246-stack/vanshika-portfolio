import { portfolioData } from '../data/portfolioData';

export const TechnicalSkills = () => {
  const { skillGroups } = portfolioData;

  return (
    <section id="skills" className="editorial-section section-skills">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col">
          <span className="section-mono-label">Technical Skills</span>
        </div>

        {/* Right Columns 4-12: Content */}
        <div className="section-content-col">
          <h2 className="skills-editorial-heading">
            Tools are how I bring ideas to life.
          </h2>

          <p className="skills-editorial-intro">
            A structured breakdown of languages, web stacks, AI exploration areas,
            and design workflows applied across academic coursework and practical projects.
          </p>

          <div className="skills-editorial-matrix" role="list" aria-label="Technical skills">
            {skillGroups.map((group) => (
              <div key={group.title} className="skills-matrix-row" role="listitem">
                <div className="skills-matrix-category">
                  <h3 className="skills-cat-title">{group.title}</h3>
                  {group.note && (
                    <span className="skills-cat-note">{group.note}</span>
                  )}
                </div>

                <div className="skills-matrix-items">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-typography-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
