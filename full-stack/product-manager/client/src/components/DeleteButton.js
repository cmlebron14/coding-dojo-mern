import React from "react";

const DeleteButton = props => {
  const handleClick = e => {
    e.preventDefault();
    props.deleteProduct(props.product_id);
  }

  return (
    <button className="delete" onClick={ handleClick }>Delete Product</button>
  )
}

export default DeleteButton;