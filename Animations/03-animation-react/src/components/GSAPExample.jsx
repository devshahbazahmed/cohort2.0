import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import AnimateOnX from './AnimateOnX';

const GSAPExample = () => {
  const boxRef = useRef([]);
  const containerRef = useRef(null);
  const { contextSafe } = useGSAP(
    () => {
      gsap.to(boxRef.current, {
        x: 700,
        duration: 1,
        delay: 0.5,
      });
    },
    { scope: containerRef.current, dependencies: [], revertOnUpdate: true }
  );
  return (
    <div ref={containerRef}>
      <div ref={(el) => boxRef.current.push(el)} className="box"></div>
      <AnimateOnX>
        <div className="box"></div>
      </AnimateOnX>

      <div className="box1" ref={(el) => boxRef.current.push(el)}></div>
    </div>
  );
};

export default GSAPExample;
