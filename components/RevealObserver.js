'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
    revealEls.forEach((el) => el.classList.add('in'));
  }, []);

  return null;
}
