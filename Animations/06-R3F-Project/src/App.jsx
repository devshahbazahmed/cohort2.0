import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Experience from './components/Experience';

const App = () => {
  return (
    <>
      <div className="parent w-full h-screen">
        <Canvas>
          <Experience />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default App;
