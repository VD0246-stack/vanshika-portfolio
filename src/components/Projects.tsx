import { Layers, Clock, ShieldCheck } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: string;
  stageNote: string;
}

const projects: Project[] = [
  {
    id: 'krishisetu',
    title: 'KrishiSetu',
    category: 'AI & AGRICULTURAL SYSTEMS',
    description:
      'An agricultural technology initiative focused on bridging farmer needs with intelligent agronomic insights and data-driven decision support.',
    tags: ['Computer Vision', 'Agronomic Intelligence', 'System Architecture', 'Python'],
    status: 'In Active Research & Design',
    stageNote: 'Case study and architectural documentation currently in progress.',
  },
  {
    id: 'start-smart',
    title: 'Start Smart',
    category: 'INTELLIGENT WORKFLOWS & IDEATION',
    description:
      'An intelligent system designed to streamline early-stage problem validation, strategic planning, and structured workflow orchestration.',
    tags: ['Applied Machine Learning', 'Workflow Intelligence', 'TypeScript', 'System Design'],
    status: 'System Prototyping Phase',
    stageNote: 'Technical prototype specifications currently under documentation.',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">// 01. SELECTED WORK</span>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">tangible impact.</span>
          </h2>
          <p className="section-desc">
            A curated look into current artificial intelligence research and systems engineering initiatives.
            Detailed technical breakdowns and architecture documentation are currently in preparation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="glass-panel project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px 32px',
                position: 'relative',
              }}
            >
              {/* Subtle Card Accent Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background:
                    idx === 0
                      ? 'linear-gradient(90deg, var(--electric-blue), var(--cyan))'
                      : 'linear-gradient(90deg, var(--violet), var(--electric-blue))',
                }}
              />

              {/* Card Top Meta */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      color: 'var(--cyan)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.category}
                  </span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      background: 'rgba(8, 10, 18, 0.5)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid rgba(100, 133, 255, 0.12)',
                    }}
                  >
                    <Clock size={12} color="var(--electric-blue)" />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <span>{project.title}</span>
                </h3>

                {/* Concise Description */}
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                    marginBottom: '28px',
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tags & Stage Notice */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '24px',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Restrained Stage Notice */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(100, 133, 255, 0.1)',
                    fontSize: '0.825rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={14} color="var(--violet)" />
                    <span>{project.stageNote}</span>
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--electric-blue)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span>Lab Project</span>
                    <Layers size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
