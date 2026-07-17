import InfinitCarousel from '../components/InfinitCarousel';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <main className="h-screen w-full flex items-center text-white pt-[5rem]">
      <InfinitCarousel projects={projects} />
    </main>
  );
};

export default Home;
