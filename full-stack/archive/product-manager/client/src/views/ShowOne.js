import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import DeleteButton from "./../components/DeleteButton";

const ShowOne = props => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${props.product_id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  });

  return (
    <div className="single-product">
      <h3>{product.title}</h3>
      <span>Price: ${product.price}</span>
      <p>Description: {product.description}</p>
      <div className="buttons">
        <DeleteButton></DeleteButton>
      </div>
    </div>
  );
}

        // <button><Link to={`/edit/${props.product_id}`}></Link></button>
export default ShowOne;