// console.log("product.routes");

// step 1
const ProductController = require("./../controllers/product.controller");

// step 2
module.exports = app => {
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/product/:id", ProductController.getOneProduct);
  app.post("/api/products", ProductController.createProduct);
  app.put("/api/product/:id", ProductController.updateProduct);
  app.delete("/api/product/:id", ProductController.deleteProduct);
};