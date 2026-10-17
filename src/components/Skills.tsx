import { useState, type ReactNode } from 'react';
import { Cpu, Code2, Database, Terminal, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
  skills: { name: string; tag: string }[];
}

const categories: SkillCategory[] = [
  {
    id: 'ai-ml',
    name: 'Artificial Intelligence & ML',
    icon: <Cpu size={20} color="var(--electric-blue)" />,
    description: 'Neural modeling, representation learning, and applied machine learning pipelines.',
    skills: [
      { name: 'Deep Learning', tag: 'Core' },
      { name: 'Computer Vision', tag: 'Applied' },
      { name: 'Natural Language Processing', tag: 'Applied' },
      { name: 'Neural Network Architectures', tag: 'Theory & Practice' },
      { name: 'PyTorch / ML Frameworks', tag: 'Tools' },
      { name: 'Model Evaluation & Optimization', tag: 'Workflow' },
      { name: 'Prompt & Context Engineering', tag: 'LLM Systems' },
    ],
  },
  {
    id: 'software-eng',
    name: 'Software Engineering',
    icon: <Code2 size={20} color="var(--violet)" />,
    description: 'Constructing performant, maintainable software and interactive web applications.',
    skills: [
      { name: 'Python', tag: 'Primary' },
      { name: 'TypeScript / JavaScript', tag: 'Modern Web' },
      { name: 'React & Component Architecture', tag: 'Frontend' },
      { name: 'FastAPI / RESTful Services', tag: 'Backend' },
      { name: 'Data Structures & Algorithms', tag: 'CS Foundations' },
      { name: 'System Design Principles', tag: 'Architecture' },
      { name: 'Modern CSS & UI Systems', tag: 'Design' },
    ],
  },
  {
    id: 'data-infra',
    name: 'Data & Infrastructure',
    icon: <Database size={20} color="var(--cyan)" />,
    description: 'Managing structured/unstructured datasets and robust development environments.',
    skills: [
      { name: 'Data Pipeline Design', tag: 'Pipelines' },
      { name: 'Vector Embeddings & Search', tag: 'AI Data' },
      { name: 'Relational Databases / SQL', tag: 'Persistence' },
      { name: 'Docker & Containerization', tag: 'DevOps' },
      { name: 'Git & Version Control', tag: 'Tooling' },
      { name: 'Linux / Shell Scripting', tag: 'Environment' },
    ],
  },
  {
    id: 'lab-practices',
    name: 'Research & Creative Problem Solving',
    icon: <Terminal size={20} color="var(--electric-blue)" />,
    description: 'Iterative scientific inquiry, rapid experimentation, and cross-domain innovation.',
    skills: [
      { name: 'Empirical Experimentation', tag: 'Research' },
      { name: 'Rapid Proof-of-Concepting', tag: 'Innovation' },
      { name: 'Technical Synthesis & Writing', tag: 'Documentation' },
      { name: 'Cross-Functional Collaboration', tag: 'Teamwork' },
      { name: 'Root Cause Problem Analysis', tag: 'Strategy' },
    ],
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">// 03. CAPABILITIES & TOOLING</span>
          <h2 className="section-title">
            The digital laboratory <span className="gradient-text">stack.</span>
          </h2>
          <p className="section-desc">
            A comprehensive matrix of technical proficiencies across machine learning, software engineering,
            and data infrastructure.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="skills-filter-bar">
          <button
            type="button"
            className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Disciplines
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`filter-tab ${activeCategory === c.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel skill-card"
              style={{ padding: '32px 28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div className="skill-icon-wrap">{category.icon}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  {category.name}
                </h3>
              </div>

              <p style={{ fontSize: '0.9rem', marginBottom: '24px', color: 'var(--text-secondary)' }}>
                {category.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      background: 'rgba(8, 10, 18, 0.45)',
                      borderRadius: '8px',
                      border: '1px solid rgba(100, 133, 255, 0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color="var(--electric-blue)" />
                      <span style={{ fontSize: '0.925rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--cyan)',
                        background: 'rgba(103, 232, 249, 0.08)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
