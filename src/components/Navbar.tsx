import { useState, useEffect, type MouseEvent } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`target-nav-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="target-nav-container">
        {/* Top-Left: Simple Vanshika Wordmark (No Studio, No italic V mark) */}
        <a
          href="#"
          className="target-nav-wordmark"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          VANSHIKA
        </a>

        {/* Center: Floating Pill Nav (Solid #140709, border-radius: 999px, no blur/glass) */}
        <nav className="target-nav-pill" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="target-pill-link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Top-Right: Plain Text "Connect" (No icon, no arrow) */}
        <a
          href="#contact"
          className="target-nav-connect"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Connect
        </a>
      </div>
    </header>
  );
};
