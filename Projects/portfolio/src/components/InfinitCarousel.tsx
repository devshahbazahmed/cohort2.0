'use client';
import { useEffect, useRef } from 'react';
import { Project } from '../types';
import CaraouselCard from './CaraouselCard';
import gsap from '../libs/gsap';

const CARD_W = 300;
const CARD_H = 380;
const CARD_SCALE = 1.35;
const CARD_GAP = 20;
const DURATION = 20;

const TRACK_H = CARD_H * CARD_SCALE;
const TRACK_W = CARD_W * CARD_SCALE;

const InfinitCarousel = ({ projects }: { projects: Project[] }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<GSAPTween | null>(null);
  const doubled = [...projects, ...projects];

  useEffect(() => {
    if (!trackRef.current || projects.length === 0) return;

    const singleWidth = projects.length * (CARD_W + CARD_GAP);

    const tween = gsap.to(trackRef.current, {
      x: -singleWidth,
      ease: 'none',
      duration: DURATION,
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
      tweenRef.current = null;
    };
  }, [projects]);
  return (
    <div className="overflow-hidden" style={{ height: TRACK_H }}>
      <div
        ref={trackRef}
        className="track flex items-center"
        style={{
          gap: `${CARD_GAP}px`,
          width: 'max-content',
          height: `${TRACK_H}px`,
        }}
      >
        {doubled.map((project, index) => (
          <CaraouselCard
            key={`${project.id}-${index}`}
            project={project}
            onHoverStart={() => tweenRef.current?.pause()}
            onHoverEnd={() => tweenRef.current?.play()}
          />
        ))}
      </div>
    </div>
  );
};

export default InfinitCarousel;
