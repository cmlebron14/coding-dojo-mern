// console.log("pet.model");

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minLength: 2 },
    type: { type: String, required: true, minLength: 2 },
    description: { type: String, required: true, minLength: 15 },
    skills: { type: Array, maxLength: 3 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", PetSchema);