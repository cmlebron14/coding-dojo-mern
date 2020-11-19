// console.log("product.model");

// step 1
const mongoose = require("mongoose");

// step 2
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 1, max: 1000 },
    description: { type: String, required: true, minLength: 5 },
  },
  { timestamps: true }
);

// step 3
module.exports = mongoose.model("Product", ProductSchema);