import { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return finePointer && !reducedMotion;
  });

  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [isViewMode, setIsViewMode] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check element under cursor for data-cursor attributes
      const el = e.target as HTMLElement | null;
      if (!el) return;

      const cursorTrigger = el.closest('[data-cursor]') as HTMLElement | null;
      const clickableTrigger = el.closest('a, button, [role="button"]') as HTMLElement | null;

      if (cursorTrigger) {
        const text = cursorTrigger.getAttribute('data-cursor-text') || 'VIEW ↗';
        setCursorText(text);
        setIsViewMode(true);
        setIsHovered(true);
      } else if (clickableTrigger) {
        setCursorText('');
        setIsViewMode(false);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsViewMode(false);
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth follower animation loop
    const animate = () => {
      const ease = 0.18;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible, enabled]);

  if (!enabled) return null;

  return (
    <div
      className="custom-cursor-root"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.25s ease',
      }}
    >
      {/* Central Sharp Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: isViewMode ? '0px' : '6px',
          height: isViewMode ? '0px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#F3EAE5',
          marginTop: '-3px',
          marginLeft: '-3px',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Smooth Contextual Follower */}
      <div
        ref={followerRef}
        className={`cursor-follower ${isViewMode ? 'view-mode' : ''} ${isHovered ? 'hovered' : ''}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          borderRadius: isViewMode ? '999px' : '50%',
          transformOrigin: 'center center',
          transition:
            'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease',
          ...(isViewMode
            ? {
                width: '136px',
                height: '42px',
                marginTop: '-21px',
                marginLeft: '-68px',
                backgroundColor: 'rgba(100, 31, 50, 0.94)',
                border: '1px solid rgba(243, 234, 229, 0.45)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px rgba(100, 31, 50, 0.5)',
                backdropFilter: 'blur(6px)',
              }
            : isHovered
            ? {
                width: '46px',
                height: '46px',
                marginTop: '-23px',
                marginLeft: '-23px',
                backgroundColor: 'rgba(185, 120, 139, 0.15)',
                border: '1px solid #B9788B',
              }
            : {
                width: '28px',
                height: '28px',
                marginTop: '-14px',
                marginLeft: '-14px',
                backgroundColor: 'transparent',
                border: '1px solid rgba(243, 234, 229, 0.3)',
              }),
        }}
      >
        {isViewMode && cursorText && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#F3EAE5',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
