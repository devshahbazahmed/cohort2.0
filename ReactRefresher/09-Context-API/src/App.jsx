import { useContext } from 'react';
import { userDataContext } from './context/UserContext';

const App = () => {
  const data = useContext(userDataContext);
  console.log(data);
  return <div className="w-full h-screen bg-black text-white">App</div>;
};

export default App;
