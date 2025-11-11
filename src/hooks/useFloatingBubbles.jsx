import { useEffect, useRef } from 'react';

export const useFloatingBubbles = (containerRef, enabled = true) => {
  const animationRef = useRef();

  useEffect(() => {
    if (!containerRef.current || !enabled) return;

    const container = containerRef.current;
    const layer = container.querySelector('.float-layer');
    if (!layer) return;

    const bubbles = Array.from(layer.querySelectorAll('.tech-bubble')).map((el, idx) => {
      const r = parseFloat(el.dataset.r || 160);
      const s = parseFloat(el.dataset.s || 0.6);
      const phase = (idx / layer.children.length) * Math.PI * 2;
      return { el, r, s, phase, x: 0, y: 0 };
    });

    let w = 0, h = 0, cx = 0, cy = 0;
    let time = 0;

    const measure = () => {
      const rect = container.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      cx = rect.left + w / 2;
      cy = rect.top + h / 2 + window.scrollY;
    };

    const animate = () => {
      time += 0.016;
      bubbles.forEach((b) => {
        const t = time * b.s + b.phase;
        const x = Math.cos(t) * b.r;
        const y = Math.sin(t) * (b.r * 0.5);
        const px = cx + x;
        const py = cy + y - window.scrollY;
        b.el.style.left = `${px}px`;
        b.el.style.top = `${py}px`;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      measure();
    };

    const handleScroll = () => {
      measure();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    measure();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [containerRef, enabled]);
};