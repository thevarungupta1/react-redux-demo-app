import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id, productName, image } = props.data;
  return (
    <div className="col-sm-3">
      <Link to={`/product/${_id}`}>
        <div className="card">
          <img
            src={"http://rjtmobile.com/grocery/images/" + image}
            class="card-img-top"            
          />
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>

            <a href="#" className="btn btn-primary btn-block">
              Add to cart
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Product;
