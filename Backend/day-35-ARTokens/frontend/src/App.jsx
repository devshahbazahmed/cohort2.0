import { axiosInstance } from './config/axiosInstance';

const App = () => {
  const getData = async () => {
    try {
      const response = await axiosInstance.get(`/products`);
      console.log('This is UI app', response.data);
    } catch (error) {
      console.log(`Error in fetching api: ${error}`);
    }
  };

  getData();
  return (
    <div>
      <h1>Heyyy there</h1>
    </div>
  );
};

export default App;
