// console.log("model");

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minLength: 2 },
    price: { type: Number, required: true },
    description: { type: String, required: true, minLength: 2 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);