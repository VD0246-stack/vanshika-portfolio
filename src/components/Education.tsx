import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="editorial-section section-education">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col">
          <span className="section-mono-label">Education</span>
        </div>

        {/* Right Columns 4-12: Content */}
        <div className="section-content-col">
          <h2 className="education-editorial-heading">
            Learning, building, progressing.
          </h2>

          <div className="education-main-layout">
            {/* Degree Entries */}
            <div className="education-degrees-list" role="list" aria-label="Academic degrees">
              {education.degrees.map((deg) => (
                <div key={deg.institution} className="education-degree-row" role="listitem">
                  <div className="education-inst-header">
                    <span className="education-dot" aria-hidden="true" />
                    <h3 className="education-institution">{deg.institution}</h3>
                  </div>
                  <div className="education-degree-details">
                    <p className="education-degree-title">{deg.degree}</p>
                    {deg.specialization && (
                      <p className="education-spec-text">{deg.specialization}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Metrics Highlight Card */}
            <div className="education-metrics-panel" aria-label="Academic metrics">
              <div className="metrics-block">
                <span className="metric-val">{education.cgpa}</span>
                <span className="metric-lbl">CGPA</span>
              </div>
              <div className="metric-divider" aria-hidden="true" />
              <div className="metrics-block">
                <span className="metric-val">{education.sgpa}</span>
                <span className="metric-lbl">SGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
