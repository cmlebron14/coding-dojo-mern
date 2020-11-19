// console.log("shark.controller.js");
const Shark = require("./../models/shark.model");

module.exports = {
  getAll: (req, res) => {
    Shark.find()
      .then(sharks => res.json(sharks))
      .catch(err => res.json(err));
  },
  create: (req, res) => {
    console.log(req.body);
    Shark.create(req.body)
      .then(newShark => res.json(newShark))
      .catch(err => res.json(err));
  },
}

//58:59