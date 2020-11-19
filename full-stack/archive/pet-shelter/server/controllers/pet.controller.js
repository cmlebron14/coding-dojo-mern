// console.log("pet.controller");

const Pet = require("./../models/pet.model");

module.exports = {
  getAllPets: (req, res) => {
    Pet.find()
      .then(pets => res.json(pets))
      .catch(err => res.json(err));
  },
  getOnePet: (req, res) => {
    Pet.findById(req.params.id)
      .then(pet => res.json(pet))
      .catch(err => res.json(err));
  },
  createPet: (req, res) => {
    Pet.create(req.body)
      .then(newPet => res.json(newPet))
      .catch(err => res.json(err));
  },
  updatePet: (req, res) => {
    Pet.findOneAndUpdate(req.params.id, req.body, { new: true })
    // { new: true } sets it to return the updated product
    // default will return product before it was updated
      .then(updatedPet => res.json(updatedPet))
      .catch(err => res.json(err));
  },
  deletePet: (req, res) => {
    Pet.findByIdAndRemove(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
}