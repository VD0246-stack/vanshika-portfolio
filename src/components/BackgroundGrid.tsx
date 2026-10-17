export const BackgroundGrid = () => {
  return (
    <div 
      aria-hidden="true" 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: '#080A12',
      }}
    >
      {/* Subtle Restrained Ambient Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 133, 255, 0.08) 0%, rgba(13, 18, 34, 0.02) 65%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '35%',
          left: '-10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, rgba(8, 10, 18, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 232, 249, 0.04) 0%, rgba(8, 10, 18, 0) 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Technical Grid Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(100, 133, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 133, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)',
        }}
      />

      {/* Subtle Scanline / Noise Texture for Digital Lab Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.015,
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
