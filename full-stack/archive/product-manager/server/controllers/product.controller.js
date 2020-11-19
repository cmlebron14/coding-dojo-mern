// console.log("product.controller");

// step 1
const Product = require("./../models/product.model");

// step 2
module.exports = {
  getAllProducts: (req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.json(err));
  },
  getOneProduct: (req, res) => {
    // Product.findOne({ _id: req.params.id })
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
    // Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    Product.findOneAndUpdate(req.params.id, req.body, { new: true })
    // { new: true } sets it to return the updated product
    // default will return product before it was updated
      .then(updatedProduct => res.json(updatedProduct))
      .catch(err => res.json(err));
  },
  deleteProduct: (req, res) => {
    // Product.deleteOne({ _id: req.params.id })
    Product.findByIdAndRemove(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
}