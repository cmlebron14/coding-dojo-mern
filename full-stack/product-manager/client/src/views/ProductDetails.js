import React, { useState, useEffect } from "react";
import DeleteButton from "./../components/DeleteButton";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const ProductDetails = props => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${props.product_id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [props.product_id]);

  const deleteProduct = productID => {
    axios.delete(`http://localhost:8000/api/products/${productID}`)
      .then(res => navigate("/"));
  }

  return (
    <div className="product-details-page">
      <h3>{ product.title }</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={"/edit-product/" + product._id} className="button edit">Edit Product</Link>
      <DeleteButton product_id={product._id} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductDetails;