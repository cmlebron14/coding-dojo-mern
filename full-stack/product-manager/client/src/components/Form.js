import React, { useState, useEffect } from "react";

const Form = props => {
  const { initialTitle, initialPrice, initialDescription } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(initialTitle);
    setPrice(initialPrice);
    setDescription(initialDescription);
  }, [initialTitle, initialPrice, initialDescription])

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(title, price, description);
    setTitle("");
    setPrice("");
    setDescription("");
  }

  return (
    <form className="product-form" onSubmit={ handleSubmit }>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={e => { setTitle(e.target.value) }} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input type="text" name="price" value={price} onChange={e => { setPrice(e.target.value) }} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" name="description" value={description} onChange={e => { setDescription(e.target.value) }} />
      </div>
      <button type="submit">Save Product Details</button>
    </form>
  );
}

export default Form;