import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";

const Products = () => {
  const productData = useContext(ProductDataContext);

  let renderData = "Loading...";

  if (productData.length > 0) {
    renderData = productData.map((elem, idx) => {
      return (
        <div key={idx}>
          <img src={elem.image} alt={elem.title} />
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
        </div>
      );
    });
  }

  return <div>{renderData}</div>;
};

export default Products;
