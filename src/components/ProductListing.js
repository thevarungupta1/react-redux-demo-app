import React, { useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux-module/actions/product-action";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios
      .get("http://apolis-grocery.herokuapp.com/api/products")
      .catch((error) => {
        console.log(error);
      });
    dispatch(setProducts(response.data.data));
  };

  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div className="row">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductListing;
