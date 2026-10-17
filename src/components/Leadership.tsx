import { portfolioData } from '../data/portfolioData';

export const Leadership = () => {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="editorial-section section-leadership">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col" data-reveal>
          <span className="section-mono-label">Leadership & Activities</span>
        </div>

        {/* Right Columns 4-12: Content */}
        <div className="section-content-col">
          <h2 className="leadership-editorial-heading" data-reveal>
            Community, initiative & collaboration.
          </h2>

          <div className="leadership-compact-grid" role="list" aria-label="Leadership roles">
            {leadership.map((item) => (
              <div key={item.organization} className="leadership-compact-card" role="listitem" data-reveal>
                <span className="leadership-org-title">{item.organization}</span>
                <span className="leadership-role-title">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
