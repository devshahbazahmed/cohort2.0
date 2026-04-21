import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-screen h-screen text-white bg-gray-800 font-medium py-10 px-[20%]">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
