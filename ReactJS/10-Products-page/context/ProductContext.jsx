import { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/productData.js";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState([]);

  const setData = async () => {
    setProductData(await getAllProductData());
  };

  useEffect(function () {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData();
  }, []);
  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
