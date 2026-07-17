'use client';

import { useRef } from 'react';
import TextReveal, { TextRevealHandle } from './TextReveal';
import { CaraouselCardProps } from '../types';
import Image from 'next/image';
import gsap from '../libs/gsap';
import useViewTransition from '../hooks/useViewTransition';

const CARD_W = 400;
const CARD_H = 490;
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
      duration: 0.25,
      ease: 'power3.out',
    });

    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.22,
      ease: 'expo.out',
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.17,
      ease: 'power3.out',
    });

    gsap.to(imgRef.current, {
      scale: 1.6,
      duration: 0.19,
      ease: 'expo.out',
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  const navigateTo = useViewTransition({ href: `/project/${project.slug}` });

  const handleClick = () => {
    navigateTo();
  };
  return (
    <div
      onClick={handleClick}
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
        style={{ bottom: 'calc(100% + 1.5rem)' }}
        className="titlePanel absolute left-0 pointer-events-none flex gap-[0.8rem] flex-col"
      >
        <TextReveal
          ref={numberRef}
          duration={0.25}
          trigger="manual"
          splitBy="chars"
        >
          <h3 className="text-[1.2rem] uppercase text-[#f0f0f0]">
            {project.number}
          </h3>
        </TextReveal>
        <TextReveal
          ref={titleRef}
          duration={0.25}
          trigger="manual"
          splitBy="words"
        >
          <h3 className="text-[1.2rem] uppercase text-[#f0f0f0]">
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
          className="h-full w-full object-cover scale-[1.6]"
          style={{ transformOrigin: 'center center', userSelect: 'none' }}
        />
      </div>
    </div>
  );
};

export default CaraouselCard;
