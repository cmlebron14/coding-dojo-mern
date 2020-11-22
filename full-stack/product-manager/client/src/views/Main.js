import React, { useState, useEffect } from "react";
import Form from "./../components/Form";
import ListAll from "./../components/ListAll";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  //to refresh DOM when deleting a product
  const removeFromDom = productID => {
    setProducts(products.filter(product => product._id !== productID));
  }

  const addNewProduct = (title, price, description) => {
    axios.post("http://localhost:8000/api/products", { title, price, description })
      .then(res => setProducts([...products, res.data]))
      .catch(err => console.log(err));
  }

  return (
    <div className="main-page">
      <Form onSubmit={addNewProduct} />
      <ListAll products={products} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main;