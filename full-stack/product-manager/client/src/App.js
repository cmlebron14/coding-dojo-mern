import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import EditProduct from './views/EditProduct';
import { Router } from "@reach/router";

const App = () => {
  return (
    <div className="product-manager-app">
      <h1>Product Manager</h1>
      <Router>
        <Main path="/" />
        <ProductDetails path="/product-details/:product_id" />
        <EditProduct path="/edit-product/:product_id"/>
      </Router>
    </div>
  );
}

export default App;
