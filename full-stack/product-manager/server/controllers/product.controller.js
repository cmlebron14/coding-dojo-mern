// console.log("controller");

const Product = require("./../models/product.model");

module.exports = {
  getAllProducts: (req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.json(err));
  },
  getOneProduct: (req, res) => {
    Product.findById(req.params.id)
      .then(product => res.json(product))
      .catch(err => res.json(err));
  },
  createProduct: (req, res) => {
    Product.create(req.body)
      .then(newProduct => res.json(newProduct))
      .catch(err => res.json(err));
  },
  updateProduct: (req, res) => {
    Product.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then(updatedProduct => res.json(updatedProduct))
      .catch(err => res.json(err));
  },
  deleteProduct: (req, res) => {
    Product.findByIdAndRemove(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
}