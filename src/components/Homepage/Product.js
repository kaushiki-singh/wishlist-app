import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
          <div className="product_info">
              <p className="product_brand">Brand</p>
              <p className="product_name">Name of product</p>
              <p className="product_price"></p>
              <strong>Rs</strong>
              <strong>Price</strong>
          </div>

        </div>
    )
}

export default Product
