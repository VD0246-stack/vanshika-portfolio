import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personal } = portfolioData;

  const focusPillars = [
    {
      label: 'Software Development',
      note: 'Writing clean, resilient code and building structured applications from first principles.',
    },
    {
      label: 'Artificial Intelligence & ML',
      note: 'Exploring intelligent models, dataset research, and practical machine learning applications.',
    },
    {
      label: 'Product & User Flow',
      note: 'Thinking deeply about how users navigate solutions and how technical systems create real value.',
    },
  ];

  return (
    <section id="about" className="editorial-section section-about">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col">
          <span className="section-mono-label" data-reveal>About</span>
        </div>

        {/* Right Columns 4-12: Content */}
        <div className="section-content-col">
          {/* Main Heading in Instrument Serif */}
          <h2 className="about-editorial-heading" data-reveal>
            {personal.aboutHeading}
          </h2>

          {/* Narrative Body Copy with Deliberate Editorial Rhythm */}
          <div className="about-editorial-prose" data-reveal>
            <p className="about-prose-lead">
              {personal.aboutParagraphs[0]}
            </p>

            <div className="about-prose-body">
              <p>{personal.aboutParagraphs[1]}</p>
              <p>{personal.aboutParagraphs[2]}</p>
              <p className="about-prose-emphasis">
                {personal.aboutParagraphs[3]}
              </p>
            </div>
          </div>

          {/* Focus Pillars: Clean Editorial Grid */}
          <div className="about-focus-pillars" role="list" aria-label="Core focus areas">
            {focusPillars.map((pillar) => (
              <div key={pillar.label} className="about-pillar-item" role="listitem" data-reveal>
                <span className="about-pillar-bullet" aria-hidden="true">—</span>
                <div className="about-pillar-content">
                  <h3 className="about-pillar-title">{pillar.label}</h3>
                  <p className="about-pillar-note">{pillar.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
