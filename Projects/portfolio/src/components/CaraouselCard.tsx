'use client';

import { useRef } from 'react';
import TextReveal, { TextRevealHandle } from './TextReveal';
import { CaraouselCardProps } from '../types';
import Image from 'next/image';
import gsap from '../libs/gsap';

const CARD_W = 300;
const CARD_H = 380;
const CARD_SCALE = 1.35;

const CaraouselCard = ({
  project,
  onHoverStart,
  onHoverEnd,
}: CaraouselCardProps) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const numberRef = useRef<TextRevealHandle | null>(null);
  const titleRef = useRef<TextRevealHandle | null>(null);

  const onEnter = () => {
    onHoverStart?.();

    gsap.to(cardRef.current, {
      width: CARD_W * CARD_SCALE,
      height: CARD_H * CARD_SCALE,
      duration: 0.45,
      ease: 'power3.out',
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.24,
      ease: 'power3.out',
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      ref={cardRef}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: 'visible',
        cursor: 'pointer',
      }}
      className="relative"
    >
      {/* Title Panel */}
      <div
        style={{ bottom: 'calc(100% + 3rem)' }}
        className="titlePanel absolute left-0 pointer-events-none flex gap-[1rem] flex-col"
      >
        <TextReveal ref={numberRef} trigger="manual" splitBy="chars">
          <h3 className="text-[1rem] uppercase text-[#010101]">
            {project.number}
          </h3>
        </TextReveal>
        <TextReveal ref={titleRef} trigger="manual" splitBy="words">
          <h3 className="text-[1rem] uppercase text-[#010101]">
            {project.title}
          </h3>
        </TextReveal>
      </div>

      {/* Image */}
      <div className="imageDiv absolute h-full w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={20}
          height={20}
          ref={imgRef}
          className="h-full w-full object-cover"
          style={{ transformOrigin: 'center center', userSelect: 'none' }}
        />
      </div>
    </div>
  );
};

export default CaraouselCard;
