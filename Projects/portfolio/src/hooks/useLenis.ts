'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,

      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      orientation: 'vertical',
      gestureOrientation: 'vertical',

      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,

      // GSAP will control Lenis's requestAnimationFrame loop.
      autoRaf: false,
    });

    lenisRef.current = lenis;

    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    const handleGsapTick = (time: number) => {
      // GSAP provides seconds, while Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };

    lenis.on('scroll', handleLenisScroll);
    gsap.ticker.add(handleGsapTick);

    // Prevent GSAP from smoothing over delayed frames.
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger positions after Lenis is initialized.
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.off('scroll', handleLenisScroll);
      gsap.ticker.remove(handleGsapTick);

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /*
   * Next.js App Router does not reload the root layout when navigating.
   * Refresh ScrollTrigger after the new page has rendered.
   */
  useEffect(() => {
    const refreshTimeout = window.setTimeout(() => {
      lenisRef.current?.scrollTo(0, {
        immediate: true,
      });

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      window.clearTimeout(refreshTimeout);
    };
  }, [pathname]);

  return lenisRef;
}
