import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
}

interface SynapseSignal {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export const NeuralNetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let signals: SynapseSignal[] = [];

    // Pointer state with gentle smoothing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const colorPalette = [
      { fill: '#6485FF', glow: 'rgba(100, 133, 255, 0.6)' }, // Electric blue
      { fill: '#A78BFA', glow: 'rgba(167, 139, 250, 0.6)' }, // Violet
      { fill: '#67E8F9', glow: 'rgba(103, 232, 249, 0.7)' }, // Cyan
    ];

    const initParticles = (w: number, h: number) => {
      // Density based on canvas area
      const count = Math.min(Math.floor((w * h) / 11000), 45);
      particles = [];

      for (let i = 0; i < count; i++) {
        const palette = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        const baseRadius = 2 + Math.random() * 2.2;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          baseRadius,
          radius: baseRadius,
          color: palette.fill,
          glowColor: palette.glow,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    resize();

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) {
        drawStaticScene();
      }
    });
    resizeObserver.observe(canvas);

    // Reduced motion static fallback rendering
    const drawStaticScene = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes statically
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.strokeStyle = `rgba(100, 133, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    if (prefersReducedMotion) {
      drawStaticScene();
      return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        resizeObserver.disconnect();
      };
    }

    // Animation Loop for full dynamic neural visualization
    let lastTime = performance.now();
    let signalSpawnTimer = 0;

    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Pointer interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      ctx.clearRect(0, 0, width, height);

      // Randomly spawn synaptic data signals along edges
      signalSpawnTimer += dt;
      if (signalSpawnTimer > 0.45 && particles.length > 2) {
        signalSpawnTimer = 0;
        const i1 = Math.floor(Math.random() * particles.length);
        // Find a close neighbor
        for (let j = 0; j < particles.length; j++) {
          if (i1 === j) continue;
          const dx = particles[i1].x - particles[j].x;
          const dy = particles[i1].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 135) {
            signals.push({
              fromIndex: i1,
              toIndex: j,
              progress: 0,
              speed: 0.6 + Math.random() * 0.7,
              color: Math.random() > 0.5 ? '#67E8F9' : '#A78BFA',
            });
            break;
          }
        }
      }

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off borders
        if (p.x < 10) { p.x = 10; p.vx *= -1; }
        if (p.x > width - 10) { p.x = width - 10; p.vx *= -1; }
        if (p.y < 10) { p.y = 10; p.vy *= -1; }
        if (p.y > height - 10) { p.y = height - 10; p.vy *= -1; }

        // Subtle gentle pointer interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = 140;

          if (dist < mouseRadius && dist > 1) {
            // Gentle magnetic attraction towards pointer with slight repulsion if too close
            const force = (mouseRadius - dist) / mouseRadius;
            const dirX = dx / dist;
            const dirY = dy / dist;

            if (dist > 50) {
              p.x += dirX * force * 1.2;
              p.y += dirY * force * 1.2;
            } else {
              p.x -= dirX * force * 1.5;
              p.y -= dirY * force * 1.5;
            }
          }
        }

        // Pulse radius gently
        p.pulsePhase += dt * 1.8;
        p.radius = p.baseRadius + Math.sin(p.pulsePhase) * 0.6;
      }

      // Draw connection lines
      const maxDistance = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.32;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(100, 133, 255, ${alpha})`);
            gradient.addColorStop(1, `rgba(167, 139, 250, ${alpha * 0.9})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Draw connections to pointer if in range
        if (mouse.active) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 125) {
            const alpha = (1 - dist / 125) * 0.45;
            ctx.strokeStyle = `rgba(103, 232, 249, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw synaptic signals traveling between nodes
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed * dt;

        if (sig.progress >= 1 || !particles[sig.fromIndex] || !particles[sig.toIndex]) {
          signals.splice(s, 1);
          continue;
        }

        const p1 = particles[sig.fromIndex];
        const p2 = particles[sig.toIndex];
        const currentX = p1.x + (p2.x - p1.x) * sig.progress;
        const currentY = p1.y + (p2.y - p1.y) * sig.progress;

        ctx.fillStyle = sig.color;
        ctx.shadowColor = sig.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Soft outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.glowColor;
        ctx.globalAlpha = 0.28;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Core node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      // Pointer node if active
      if (mouse.active) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#67E8F9';
        ctx.shadowColor = '#67E8F9';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div 
      className="neural-canvas-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '420px',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, #0d1326 0%, #080a12 85%)',
        border: '1px solid rgba(100, 133, 255, 0.2)',
        boxShadow: '0 20px 48px -12px rgba(8, 10, 18, 0.9), inset 0 0 24px rgba(100, 133, 255, 0.05)',
      }}
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        aria-label="Interactive neural network visualization showing connected artificial intelligence nodes and synaptic data signals"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          cursor: 'crosshair',
        }}
      />

      {/* Laboratory Technical Overlay Badge */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          color: 'var(--text-secondary)',
          background: 'rgba(8, 10, 18, 0.7)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(100, 133, 255, 0.16)',
          borderRadius: '6px',
          padding: '6px 12px',
          pointerEvents: 'none',
        }}
      >
        <span 
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--cyan)',
            boxShadow: '0 0 8px var(--cyan)',
          }} 
        />
        <span>SYNAPTIC_TOPOLOGY // V2.4</span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '18px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)',
          background: 'rgba(8, 10, 18, 0.6)',
          padding: '4px 10px',
          borderRadius: '4px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          pointerEvents: 'none',
        }}
      >
        INTERACTIVE_NODES: POINTER_SENSITIVE
      </div>
    </div>
  );
};
