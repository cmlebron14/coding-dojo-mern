import React, { useState } from "react";

const CreateForm = props => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewProduct(title, price, description);
  }

  return (
    <form className="create-form" onSubmit={ handleSubmit }>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" onChange={e => setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="text" name="price" onChange={e => setPrice(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea name="description" onChange={e => setDescription(e.target.value)}></textarea>
      </div>
      <button type="submit">Add New Product</button>
    </form>
  );
}

export default CreateForm;