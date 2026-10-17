import { portfolioData } from '../data/portfolioData';

export const ProblemSolvingApproach = () => {
  const { approach } = portfolioData;

  return (
    <section id="approach" className="editorial-section section-approach">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col">
          <span className="section-mono-label">From Problem to Possibility</span>
        </div>

        {/* Right Columns 4-12: Content */}
        <div className="section-content-col">
          <h2 className="approach-section-heading">
            How I approach a problem.
          </h2>

          <p className="approach-section-intro">
            Every meaningful solution starts by stepping back before writing code.
            This is the deliberate process I follow to move from an initial question
            to a working application.
          </p>

          {/* Editorial Process Rail — Integrated Sequential Composition */}
          <div className="approach-timeline-wrap" role="list" aria-label="Problem-solving stages">
            {approach.map((stage, idx) => (
              <div key={stage.number} className="approach-stage-row" role="listitem">
                <div className="approach-stage-index-col">
                  <span className="approach-stage-num">{stage.number}</span>
                  {idx < approach.length - 1 && (
                    <span className="approach-stage-line" aria-hidden="true" />
                  )}
                </div>

                <div className="approach-stage-content">
                  <div className="approach-stage-header">
                    <span className="approach-stage-connector" aria-hidden="true">—</span>
                    <h3 className="approach-stage-title">{stage.title}</h3>
                  </div>
                  <p className="approach-stage-desc">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
