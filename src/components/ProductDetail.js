import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
} from "../redux-module/actions/product-action";

const ProductDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const fetchProductById = async (productId) => {
    const response = await axios
      .get(`http://apolis-grocery.herokuapp.com/api/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(addProduct(response.data.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductById(productId);
    return () => {
      dispatch(removeProduct());
    };
    // else {
    //   dispatch(removeProduct());
    // }
  }, [productId]);

  return (
    <div>
      <h1 className="text-center">Product Detail</h1>
      <div className="card" style={{width: '18rem'}}>
        <img
          src={"http://rjtmobile.com/grocery/images/" + product.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">{product.productName}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
