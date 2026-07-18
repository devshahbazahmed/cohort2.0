import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Experience from './components/Experience';

const App = () => {
  return (
    <>
      <div className="parent h-screen w-full">
        <Canvas camera={{ position: [0, 8, 0] }}>
          <OrbitControls />
          <Experience />
        </Canvas>
      </div>
    </>
  );
};

export default App;
