import { useState } from 'react';

interface PortraitProps {
  className?: string;
}

export const Portrait = ({ className = '' }: PortraitProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`portrait-composition-root ${className}`}>
      {/* Architectural Backdrop Color Block (Burgundy Layering) */}
      <div className="portrait-backdrop-panel" aria-hidden="true" />
      <div className="portrait-offset-frame" aria-hidden="true" />

      {/* Main Portrait Frame */}
      <div className="portrait-image-wrapper">
        <img
          src="/images/vanshika.jpg"
          alt="Portrait of Vanshika in a burgundy sweater, Computer Science and Engineering student"
          className={`portrait-image ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          loading="eager"
        />

        {/* Subtle Bottom Ambient Gradient for Natural Integration */}
        <div className="portrait-editorial-overlay" aria-hidden="true" />

        {/* Editorial Corner Markings */}
        <div className="corner-mark top-left" aria-hidden="true" />
        <div className="corner-mark top-right" aria-hidden="true" />
        <div className="corner-mark bottom-left" aria-hidden="true" />
        <div className="corner-mark bottom-right" aria-hidden="true" />

        {/* Technical Label Tag */}
        <div className="portrait-caption-tag">
          <span className="caption-dot" />
          <span className="caption-text">VANSHIKA // PORTRAIT</span>
        </div>
      </div>

      {/* Editorial Shadow/Reflect Floor */}
      <div className="portrait-ground-accent" aria-hidden="true" />
    </div>
  );
};
