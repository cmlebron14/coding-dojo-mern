// console.log("shark.model.js");
const mongoose = require("mongoose");

const SharkSchema = new mongoose.Schema(
  {
    species: { type: String, required: true, minLength: 2 },
    location: { type: String, required: true, minLength: 2 },
    url: { type: String, required: true },
    ferocity: { type: Number, required: true, min: 1, max: 5},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shark", SharkSchema);