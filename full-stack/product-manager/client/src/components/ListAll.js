import React from "react";
import DeleteButton from "./DeleteButton";
import axios from "axios";
import { Link } from "@reach/router";

const ListAll = props => {

  const deleteProduct = productID => {
    axios.delete(`http://localhost:8000/api/products/${productID}`)
      .then(res => props.removeFromDom(productID))
  }

  return (
    <div className="list-all-section">
      <h2>All Projects:</h2>
      <ul>
      {props.products.map((product, i) => (
        <li key={i}>
          <Link to={`/product-details/${product._id}`}>{ product.title }</Link>
          <DeleteButton product_id={product._id} deleteProduct={deleteProduct} />
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ListAll;