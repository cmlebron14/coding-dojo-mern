import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";

const EditProduct = props => {
  const { id } = props;
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + id)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
  }, [id])

  const handleSubmit = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/products/' + id, {
      title,
      price,
      description
    })
      .then(res => navigate("/") );
  }

  return (
    <form onSubmit={handleSubmit} className="edit-form">
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

export default EditProduct;