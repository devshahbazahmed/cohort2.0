import { OrbitControls } from '@react-three/drei';
import FanGroup from './FanGroup';

const Experience = () => {
  // const { x, y, z } = useControls({
  //   x: { value: 0, min: -4, max: 4, step: 0.01, label: 'X-Position' },
  //   y: { value: 0, min: -4, max: 4, step: 0.01, label: 'Y-Position' },
  //   z: { value: 0, min: -4, max: 4, step: 0.01, label: 'Z-Position' },
  // });
  return (
    <>
      <ambientLight intensity={2} color={'#fff'} />
      <FanGroup />
      <OrbitControls />
    </>
  );
};

export default Experience;
