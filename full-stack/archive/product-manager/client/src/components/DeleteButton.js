import React from "react";

const DeleteButton = () => {
  const handleClick = () => {
    console.log("we are going to delete this product");
  }
  return <button className="button--delete" onClick={handleClick}>Delete this Product</button>;
}

export default DeleteButton;