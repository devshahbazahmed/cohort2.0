import { useControls } from 'leva';
import { useMemo, useRef } from 'react';
import { images } from '../data/images.js';
import ImagePlane from './ImagePlane.jsx';
import { useFrame } from '@react-three/fiber';

const FanGroup = () => {
  const {
    numPlanes,
    spreadAngle,
    planeHeight,
    planeWidth,
    positionY,
    rotationYSpeed,
  } = useControls('Book Fan Controls', {
    numPlanes: {
      value: 6,
      min: 2,
      max: 40,
      step: 1,
      label: 'No. of Planes',
    },
    spreadAngle: {
      value: 360,
      min: 20,
      max: 360,
      step: 1,
      label: 'Spread Angle',
    },
    planeWidth: {
      value: 2.5,
      min: 0.4,
      max: 6,
      step: 0.05,
      label: 'Plane Width',
    },
    planeHeight: {
      value: 2.5,
      min: 0.4,
      max: 8,
      step: 0.05,
      label: 'Plane Height',
    },
    positionY: {
      value: -1.5,
      min: -6,
      max: 6,
      step: 0.05,
      label: 'Position-Y',
    },
    rotationYSpeed: {
      value: 0.5,
      min: -0.8,
      max: 0.8,
      step: 0.05,
      label: 'Rotation Speed',
    },
  });

  const planes = useMemo(() => {
    const count = numPlanes;
    const totalArcRad = (spreadAngle * Math.PI) / 180;
    const step = totalArcRad / (count - 1);
    const startAngle = -totalArcRad / 2;

    return Array.from({ length: count }, (_, i) => {
      const angle = startAngle + i * step;
      return {
        key: i,
        url: images[i % images.length],
        position: [0, 0, 0],
        rotation: [0, angle, 0],
      };
    });
  }, [numPlanes, spreadAngle]);

  const groupRef = useRef(null);
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * rotationYSpeed;
  });
  return (
    <group ref={groupRef} position={[0, positionY, 0]}>
      {planes.map((plane) => (
        <ImagePlane
          key={plane.key}
          url={plane.url}
          position={plane.position}
          rotation={plane.rotation}
          planeWidth={planeWidth}
          planeHeight={planeHeight}
        />
      ))}
    </group>
  );
};

export default FanGroup;
