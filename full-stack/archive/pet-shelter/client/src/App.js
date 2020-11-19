import React from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import PetDetails from "./views/PetDetails";
import EditPet from "./views/EditPet";
import AddNewPet from "./views/AddNewPet";

const App = () => {
  return (
    <div className="pet-shelter-app">
      <h1>Pet Shelter</h1>
      <Router>
        <Home path="/" />
        <PetDetails path="/view-pet/:pet_id" />
        <EditPet path="/edit-pet/:pet_id" />
        <AddNewPet path="/add-pet" />
      </Router>
    </div>
  );
}

export default App;
