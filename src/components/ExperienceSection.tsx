import { Calendar, Award, BookOpen, Users } from 'lucide-react';
import { portfolioData, type ExperienceItem } from '../data/portfolioData';

const getCategoryIcon = (category: ExperienceItem['category']) => {
  switch (category) {
    case 'academic':
      return <BookOpen size={16} />;
    case 'hackathon':
      return <Award size={16} />;
    case 'leadership':
    case 'student-org':
      return <Users size={16} />;
    default:
      return <Calendar size={16} />;
  }
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="editorial-section experience-section">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="editorial-section-header">
          <div className="section-prelabel">
            <span className="prelabel-bar" />
            <span>04 // TRAJECTORY & EXPERIENCE</span>
          </div>
          <div className="section-title-row">
            <h2 className="section-display-title">
              Academics, initiatives & <span className="title-serif-italic">milestones.</span>
            </h2>
            <p className="section-header-desc">
              A record of ongoing computer science studies, hackathon projects, and collaborative technical
              efforts. Structured so new experiences and recognitions can be updated directly in the data model.
            </p>
          </div>
        </div>

        {/* Editorial Timeline Grid */}
        <div className="experience-timeline">
          {portfolioData.experience.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-row-card ${!item.isConfirmed ? 'is-placeholder-card' : ''}`}
            >
              {/* Left Column: Period & Category */}
              <div className="timeline-meta-col">
                <div className="timeline-period-badge">
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>
                <div className="timeline-cat-pill">
                  {getCategoryIcon(item.category)}
                  <span>{item.category.toUpperCase()}</span>
                </div>
                {!item.isConfirmed && (
                  <span className="timeline-placeholder-flag">
                    EDITABLE PLACEHOLDER
                  </span>
                )}
              </div>

              {/* Right Column: Role, Organization & Contributions */}
              <div className="timeline-content-col">
                <div className="timeline-role-header">
                  <h3 className="timeline-role-title">{item.role}</h3>
                  <span className="timeline-org-name">{item.organization}</span>
                </div>

                <p className="timeline-desc-text">{item.description}</p>

                <ul className="timeline-points-list">
                  {item.contributions.map((point, pIdx) => (
                    <li key={pIdx} className="timeline-point-item">
                      <span className="point-marker">/</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
