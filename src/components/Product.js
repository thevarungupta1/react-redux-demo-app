import React from 'react';

const Product = (props) => {
    const {productName, image} = props.data;
    return(
        <div className="col-sm-3">
          <div className="card">
          <img src={ 'http://rjtmobile.com/grocery/images/' + image } class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ productName }</h5>
              
              <a href="#" className="btn btn-primary">
               Add to cart
              </a>
            </div>
          </div>
        </div>
    )
}
export default Product;