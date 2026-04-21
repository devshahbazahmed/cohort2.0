import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Products</button>
    </div>
  );
};

export default Home;

// We have to add to favourite at last
