import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ListAll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="list-all-section">
      <h2>All Projects:</h2>
      <ul>
      {products.map((product, i) => (
        <li key={i}>
          <Link to={`/product-details/${product._id}`}>{ product.title }</Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ListAll;