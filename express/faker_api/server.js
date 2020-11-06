const express = require("express");
const faker = require("faker");

const app = express();

const User = class {
  constructor(firstName, lastName, phoneNumber, email, password) {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
const Company = class {
  constructor(name, address) {
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    }
  }
}

app.get("/api/users/new", (req, res) => {
  res.send(new User());
})
app.get("/api/companies/new", (req, res) => {
  res.send(new Company());
})
app.get("/api/user/company", (req, res) => {
  const results = [
    { newUser: new User() },
    { newCompany: new Company() },
  ]
  return res.json({ newResults: results });
})

const server = app.listen(8000, () => {
  console.log("Server is locked and loaded on port 8000");
})