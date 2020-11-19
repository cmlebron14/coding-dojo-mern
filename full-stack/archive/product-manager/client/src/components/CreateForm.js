import Axios from "axios";
import React, { useState } from "react";
import axios from "axios";

const CreateForm = props => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("https://localhost:8000/api/products", { title, price, description })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <form className="create-product-form" onSubmit={ handleSubmit }>
      <input placeholder="Title" type="text" onChange={ e => setTitle(e.target.value) }/>
      <input placeholder="Price" type="text" onChange={ e => setPrice(e.target.value) }/>
      <textarea placeholder="Description" onChange={ e => setDescription(e.target.value) }/>
      <button type="submit">Add New Product</button>
    </form>
  )
}

export default CreateForm;