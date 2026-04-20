import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 id="home-title">This is the Home Page</h1>
      <button
        id="home-cta-btn"
        onClick={() => {
          navigate("/products");
        }}
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
