import React from "react";
import CreateForm from "./../components/CreateForm";
import ProductList from "./../components/ProductList";

const Main = () => {
  return (
    <div className="product-manager">
      <h1 className="main-heading">Product Manager</h1>
      <CreateForm />
      <ProductList />
    </div>
  );
}

export default Main;