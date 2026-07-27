import { axiosInstance } from './config/axiosInstance';
import AppRoutes from './routes/AppRoutes';

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
      <AppRoutes />
    </div>
  );
};

export default App;
