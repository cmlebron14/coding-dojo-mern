import React from "react";
import { Router } from "@reach/router";
import Main from './views/Main';
import ShowOne from './views/ShowOne';

const App = () => {
  return (
    <Router>
      <Main path="/products" />
      <ShowOne path="/product/:product_id" />
    </Router>
  )
}

export default App;