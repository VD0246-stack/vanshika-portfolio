import { useEffect } from 'react';

/**
 * Initializes a performant, one-time IntersectionObserver
 * that adds 'is-in-view' class to elements with [data-reveal].
 * Content is 100% visible by default and only animated if JS & IntersectionObserver
 * are supported and prefers-reduced-motion is not requested.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's accessibility preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Flag document as ready for progressive scroll reveals
    document.documentElement.classList.add('js-reveal-active');

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!elements.length) return;

    // Fallback: If IntersectionObserver is not available, reveal immediately
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
            // Unobserve immediately so content never disappears or flickers
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((el) => {
      // If already within or above the initial viewport, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        el.classList.add('is-in-view');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
