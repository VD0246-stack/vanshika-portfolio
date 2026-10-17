import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="editorial-section section-certifications">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col">
          <span className="section-mono-label">Certifications</span>
        </div>

        {/* Right Columns 4-12: Content */}
        <div className="section-content-col">
          <h2 className="certifications-editorial-heading">
            Learning beyond the classroom.
          </h2>

          <p className="certifications-note-text">
            Independent coursework completed to deepen applied software engineering,
            project execution workflows, and foundational algorithmic thinking.
          </p>

          <div className="certifications-list" role="list" aria-label="Certifications list">
            {certifications.map((cert, idx) => (
              <div key={idx} className="certification-row" role="listitem">
                <div className="certification-meta">
                  <span className="certification-idx">0{idx + 1} —</span>
                  <h3 className="certification-title">{cert.title}</h3>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-credential-link"
                    aria-label={`Credential link for ${cert.title}`}
                  >
                    <span>Credential link</span>
                    <span className="certification-credential-link-arrow" aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
