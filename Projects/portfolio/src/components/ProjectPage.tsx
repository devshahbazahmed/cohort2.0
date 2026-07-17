'use client';

import { useRef } from 'react';
import type { Project } from '@/types';
import TextReveal from './TextReveal';
import gsap, { ScrollTrigger, useGSAP } from '@/libs/gsap';
import useViewTransition from '@/hooks/useViewTransition';

interface ProjectPageProps {
  project: Project;
  nextProject: Project;
}

const ProjectPage = ({ project, nextProject }: ProjectPageProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>('section');

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          clipPath: 'inset(0 0 0% 0)',
          scale: 1,
          duration: 1.6,
          ease: 'expo.out',
          delay: 0.7,
        });
      }

      sections.forEach((section, index) => {
        const sectionContainer = section.firstElementChild;

        if (!(sectionContainer instanceof HTMLElement)) return;

        gsap.to(sectionContainer, {
          rotate: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top 20%',
            scrub: true,
          },
        });

        if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: 'bottom bottom',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        });
      });
    },
    {
      scope: containerRef,
      dependencies: [project],
      revertOnUpdate: true,
    }
  );

  const navigateTo = useViewTransition({
    href: `/project/${nextProject.slug}`,
  });

  const handleClick = (): void => {
    navigateTo();
  };

  return (
    <main ref={containerRef}>
      <section className="h-screen w-full">
        <div className="sectionContainer flex h-full w-full px-[3rem] pt-[7rem] pb-[4rem]">
          <div className="firstSegment h-full w-[10%]">
            <TextReveal>
              <h3 className="text-[2rem]">{project.number}</h3>
            </TextReveal>
          </div>

          <div className="secondSegment h-[85%] w-[30%]">
            <div className="imageDiv h-full w-full overflow-hidden">
              <img
                ref={imageRef}
                style={{
                  clipPath: 'inset(0 0 100% 0)',
                }}
                className="h-full w-full scale-[1.7] object-cover"
                src={project.coverImage}
                alt={project.title}
              />
            </div>
          </div>

          <div className="thirdSegment flex h-[85%] w-[60%] flex-col justify-end pl-[8rem]">
            <div className="heading">
              <TextReveal delay={0.8} ease="power4.out" splitBy="chars">
                <h1 className="text-[5rem] leading-[1.1]">{project.title}</h1>
              </TextReveal>
            </div>

            <div className="subHeading flex gap-[3rem]">
              <TextReveal delay={0.85} splitBy="words">
                <h2 className="text-[2rem]">{project.subtitle}</h2>
              </TextReveal>

              <TextReveal delay={0.85} splitBy="chars">
                <h2 className="text-[2rem]">{project.year}</h2>
              </TextReveal>
            </div>

            <div className="description mt-[2rem] w-[70%] text-balance">
              <TextReveal delay={0.85} splitBy="lines">
                <p className="text-[1.5rem] leading-[1.2]">
                  {project.description}
                </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {project.gallery.map((image, index) => (
        <section key={`${project.id}-${index}`} className="h-screen w-full">
          <div
            style={{ transformOrigin: 'bottom left' }}
            className="sectionContainer h-full w-full rotate-[30deg]"
          >
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={`${project.title} gallery image ${index + 1}`}
            />
          </div>
        </section>
      ))}

      <footer className="flex h-screen w-full items-center justify-center">
        <h2>Next Project</h2>

        <button type="button" onClick={handleClick}>
          {nextProject.title}
        </button>
      </footer>
    </main>
  );
};

export default ProjectPage;
