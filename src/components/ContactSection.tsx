import { portfolioData } from '../data/portfolioData';

export const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="editorial-section section-contact-dark">
      <div className="editorial-grid-layout">
        {/* Left Columns 1-3: Small Mono Label */}
        <div className="section-label-col">
          <span className="section-mono-label contact-dark-label">
            {contact.label}
          </span>
        </div>

        {/* Right Columns 4-12: Content in Black-and-Burgundy Theme */}
        <div className="section-content-col">
          <h2 className="contact-editorial-heading">{contact.heading}</h2>
          <p className="contact-editorial-lead">{contact.description}</p>

          {/* Prominent Professional External Profiles & Direct Email */}
          <div className="contact-profiles-grid" role="list" aria-label="Professional contact channels">
            {contact.socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="contact-profile-card"
                role="listitem"
              >
                <div className="profile-card-top">
                  <span className="profile-card-name">{item.name}</span>
                  <span className="profile-card-arrow" aria-hidden="true">↗</span>
                </div>
                {item.note && (
                  <p className="profile-card-note">{item.note}</p>
                )}
                <span className="profile-card-url-hint">
                  {item.url.replace(/^https?:\/\/(www\.)?/, '').replace(/^mailto:/, '')}
                </span>
              </a>
            ))}
          </div>

          {/* Direct Collaboration Note & Email Access */}
          <div className="contact-direct-panel">
            <div className="direct-panel-content">
              <h3 className="direct-panel-title">Internship Inquiries & Collaborations</h3>
              <p className="direct-panel-desc">
                I am actively open to internship opportunities in software development, AI/ML, and product development.
                Feel free to email me directly or connect on LinkedIn.
              </p>
              <div className="direct-panel-actions">
                <a
                  href={`mailto:${contact.email}`}
                  className="direct-panel-btn"
                >
                  Send Email ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/vanshika-dhaka-6a4591368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-panel-btn direct-panel-btn-secondary"
                >
                  Message on LinkedIn ↗
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="direct-panel-email-status"
                >
                  <span className="status-indicator-dot" aria-hidden="true" />
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Closing Line & Colophon */}
          <div className="contact-closing-wrap">
            <p className="contact-closing-line">{contact.closingLine}</p>
          </div>

          <div className="contact-editorial-colophon">
            <span>© 2026 Vanshika Dhaka</span>
            <span className="colophon-dept">
              Computer Science & Engineering · AI/ML
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
