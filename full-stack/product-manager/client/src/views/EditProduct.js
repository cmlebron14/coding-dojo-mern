import React, { useEffect, useState } from 'react'
import Form from "./../components/Form";
import axios from 'axios';
import { navigate } from "@reach/router";

const EditProduct = props => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${props.product_id}`)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
  }, [props.product_id])

  const editProduct = (title, price, description) => {
    axios.put(`http://localhost:8000/api/products/${props.product_id}`, {
      title,
      price,
      description
    })
      .then(res => navigate("/") );
  }

  return (
    <Form onSubmit={editProduct} initialTitle={title} initialPrice={price} initialDescription={description}/>
  );
}

export default EditProduct;