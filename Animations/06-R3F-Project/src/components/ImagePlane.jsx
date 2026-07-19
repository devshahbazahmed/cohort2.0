import { useMemo } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

const ImagePlane = ({ url, position, rotation, planeWidth, planeHeight }) => {
  const texture = useTexture(url);
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(planeWidth, planeHeight);
    geo.translate(2, planeHeight / 2, 0);
    return geo;
  }, [planeWidth, planeHeight]);
  return (
    <mesh position={position} rotation={rotation} geometry={geometry}>
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default ImagePlane;
