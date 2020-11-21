import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const DeleteButton = props => {
  const handleClick = e => {
    axios.delete(`http://localhost:8000/api/products/${props.product_id}`)
      .then(res => {
        console.log(res);
        if (window.location.href === "http://localhost:3000/") {

        } else {
          navigate("http://localhost:3000/");
        }
      });
  }
  return (
    <button className="delete" onClick={ handleClick }>Delete Product</button>
  )
}

export default DeleteButton;