import { useState } from 'react';
import { Send, Mail, Copy, Check, MessageSquare, Terminal } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Collaboration / Research',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactEmail = 'contact.vanshika.ai@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate digital lab terminal transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'AI Collaboration / Research',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pretitle">// 05. TRANSMISSION TERMINAL</span>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">meaningful together.</span>
          </h2>
          <p className="section-desc">
            Open for technical discussions, AI research collaborations, and forward-looking engineering endeavors.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Side: Direct Channels & Telemetry */}
          <div className="contact-channels">
            <div className="glass-panel" style={{ padding: '36px', height: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--cyan)',
                  marginBottom: '24px',
                  letterSpacing: '0.08em',
                }}
              >
                <Terminal size={16} />
                <span>COMMS_CHANNEL // DIRECT_LINK</span>
              </div>

              <h3 style={{ fontSize: '1.45rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
                Direct Inquiries & Dialogues
              </h3>

              <p style={{ fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '28px' }}>
                Whether you're exploring a research challenge, building an AI-native solution, or simply
                want to exchange perspectives on artificial intelligence and software architecture, feel free to connect.
              </p>

              {/* Direct Email Card with Copy Action */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'rgba(8, 10, 18, 0.6)',
                  borderRadius: '10px',
                  border: '1px solid rgba(100, 133, 255, 0.18)',
                  marginBottom: '28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(100, 133, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--electric-blue)',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      PRIMARY_EMAIL
                    </div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {contactEmail}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: copied ? 'var(--cyan)' : 'var(--text-secondary)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(100, 133, 255, 0.2)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Quick Communication Platforms */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                  }}
                >
                  NETWORK_PROFILES
                </span>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Transmission Form */}
          <div className="contact-form-wrapper">
            <div className="glass-panel" style={{ padding: '36px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--violet)',
                  marginBottom: '20px',
                  letterSpacing: '0.08em',
                }}
              >
                <MessageSquare size={16} />
                <span>SIGNAL_TRANSMISSION // INBOX</span>
              </div>

              {submitted ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '48px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(103, 232, 249, 0.15)',
                      border: '1px solid var(--cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyan)',
                      boxShadow: '0 0 20px rgba(103, 232, 249, 0.25)',
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem' }}>Transmission Received</h4>
                  <p style={{ maxWidth: '420px', color: 'var(--text-secondary)' }}>
                    Your message packet has been routed successfully. I look forward to reviewing it and connecting.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '12px' }}
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      YOUR_NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      EMAIL_ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      INQUIRY_TOPIC
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input form-select"
                    >
                      <option value="AI Collaboration / Research">AI Collaboration / Research</option>
                      <option value="Project Technical Inquiry">Project Technical Inquiry</option>
                      <option value="General Conversation">General Conversation & Ideas</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      MESSAGE_PACKET
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Share details regarding your idea, research question, or collaborative opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: '100%', marginTop: '6px' }}
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING DATA...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
