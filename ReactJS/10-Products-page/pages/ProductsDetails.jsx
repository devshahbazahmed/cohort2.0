import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../context/ProductContext";

const ProductsDetails = () => {
  const productData = useContext(ProductDataContext);
  const { productId } = useParams();

  let selectedProduct = "";

  if (productData.length > 0) {
    selectedProduct = productData.find((elem) => elem.id == productId);
  }

  return (
    <div>
      <div>
        <img src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
        <h5>${selectedProduct.price}</h5>
      </div>
    </div>
  );
};

export default ProductsDetails;
