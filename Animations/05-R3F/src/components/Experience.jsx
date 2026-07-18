import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
// import * as THREE from 'three';

const Experience = () => {
  const cubeRef = useRef(null);
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  const dreiTexture = useTexture(
    'https://images.unsplash.com/photo-1665289420974-1168352d4848?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

  // const texture = useLoader(
  //   THREE.TextureLoader,
  //   'https://images.unsplash.com/photo-1665289420974-1168352d4848?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // );
  return (
    <>
      <group position={[0, 2, 0]}>
        <mesh ref={cubeRef} position={[-2, 0, 0]}>
          <boxGeometry args={[2, 3, 2]} />
          <meshBasicMaterial map={dreiTexture} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[3, 3, 2]} />
          <meshBasicMaterial color={'green'} />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
