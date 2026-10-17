import { Calendar, Sparkles } from 'lucide-react';

interface TimelineItem {
  period: string;
  role: string;
  context: string;
  description: string;
  highlights: string[];
}

const timeline: TimelineItem[] = [
  {
    period: 'PRESENT // ACTIVE',
    role: 'AI Engineering & Applied Systems Research',
    context: 'Personal Digital Laboratory',
    description:
      'Designing and developing intelligent software architectures with an emphasis on applied machine learning, neural networks, and domain-specific challenges.',
    highlights: [
      'Spearheading research and development for KrishiSetu and Start Smart.',
      'Investigating neural topologies, computer vision algorithms, and agentic workflows.',
      'Synthesizing end-to-end full-stack architectures integrating AI models with modern web interfaces.',
    ],
  },
  {
    period: 'FOUNDATIONS & EXPLORATION',
    role: 'Computer Science & Artificial Intelligence Studies',
    context: 'Academic & Technical Focus',
    description:
      'Building foundational depth in computer science, algorithms, software engineering principles, and statistical learning.',
    highlights: [
      'In-depth study of data structures, computational complexity, and system design.',
      'Practical implementation of foundational machine learning algorithms and neural networks.',
      'Collaborative projects, technical workshops, and continuous technical growth.',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">// 04. TRAJECTORY & MILESTONES</span>
          <h2 className="section-title">
            Research path and <span className="gradient-text">engineering journey.</span>
          </h2>
          <p className="section-desc">
            A chronological timeline of technical exploration, research projects, and systems development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-spine" />

          <div className="timeline-items">
            {timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                {/* Node on Spine */}
                <div className="timeline-node">
                  <div className="timeline-node-inner" />
                </div>

                {/* Content Box */}
                <div className="glass-panel timeline-card" style={{ padding: '32px' }}>
                  <div className="timeline-meta">
                    <span className="timeline-badge">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <span className="timeline-context">{item.context}</span>
                  </div>

                  <h3 className="timeline-role">{item.role}</h3>

                  <p className="timeline-desc">{item.description}</p>

                  <ul className="timeline-highlights">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <Sparkles size={14} className="highlight-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
