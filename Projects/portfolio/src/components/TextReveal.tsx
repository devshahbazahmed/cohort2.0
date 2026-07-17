'use client';

import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { SplitText, ScrollTrigger, useGSAP } from '@/libs/gsap';
import gsap from '@/libs/gsap';

type SplitBy = 'chars' | 'words' | 'lines';

export interface TextRevealHandle {
  play: () => void;
  reverse: () => void;
  reset: () => void;
}

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  trigger?: string;
  scrollStart?: string;
  splitBy?: SplitBy;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
}

const TextReveal = forwardRef<TextRevealHandle, TextRevealProps>(
  function TextReveal(
    {
      children,
      className = '',
      trigger = 'mount',
      scrollStart = 'top 75%',
      splitBy = 'lines',
      duration = 0.67,
      stagger = 0.085,
      delay = 0,
      ease = 'power3.out',
    },
    ref
  ) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const splitRef = useRef<InstanceType<typeof SplitText> | null>(null);
    const tlRef = useRef<GSAPTimeline | null>(null);

    useImperativeHandle(
      ref,
      () => ({
        play: () => {
          tlRef.current?.play();
        },
        reverse: () => {
          tlRef.current?.reverse();
        },
        reset: () => {
          tlRef.current?.pause(0);
        },
      }),
      []
    );

    useGSAP(
      () => {
        if (!wrapperRef.current) return;

        const split = new SplitText(wrapperRef.current, {
          type: splitBy,
          lineThreshold: 0.3,
        });

        splitRef.current = split;

        const elements = split[splitBy];

        gsap.set(elements, {
          yPercent: 110,
        });

        const timeline = gsap.timeline({
          paused: true,
          defaults: {
            delay,
          },
        });

        tlRef.current = timeline;

        timeline.to(elements, {
          yPercent: 0,
          opacity: 1,
          duration,
          ease,
          stagger: {
            each: stagger,
            from: 'start',
          },
        });

        if (trigger === 'mount') {
          timeline.play();
        }

        let scrollTrigger: ScrollTrigger | null = null;

        if (trigger === 'scroll') {
          scrollTrigger = ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: scrollStart,
            once: true,
            onEnter: () => tlRef.current?.play(),
          });
        }

        return () => {
          scrollTrigger?.kill();
          timeline.kill();
          split.revert();

          tlRef.current = null;
          splitRef.current = null;
        };
      },
      {
        scope: wrapperRef,
        dependencies: [splitBy, stagger, trigger, duration],
      }
    );

    return (
      <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
        {children}
      </div>
    );
  }
);

export default TextReveal;
