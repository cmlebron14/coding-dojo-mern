import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductList = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="product-list">
      <h2>All Products:</h2>
      <ul>
        {products.map((product, i) => 
          <li key={i}><Link to={`/product/${product._id}`}>{product.title}</Link></li>
        )}
      </ul>
    </div>
  );
}

export default ProductList;