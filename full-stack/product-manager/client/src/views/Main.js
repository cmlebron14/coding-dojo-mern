import React, { useState, useEffect } from "react";
import CreateForm from "./../components/CreateForm";
import ListAll from "./../components/ListAll";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = productID => {
    setProducts(products.filter(product => product._id !== productID));
  }

  const addNewProduct = (title, price, description) => {
    axios.post("http://localhost:8000/api/products", { title, price, description })
      .then(res => {
        console.log(res);
        axios.get("http://localhost:8000/api/products")
        .then(res => {
          setProducts(res.data);
          setLoaded(true);
        })
        .catch(err => console.log(err));
      })
    .catch(err => console.log(err));
  }

  return (
    <div className="main-page">
      <CreateForm addNewProduct={addNewProduct}/>
      {loaded && <ListAll products={products} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main;