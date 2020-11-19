import React from "react";
import { Link } from "@reach/router";
import CreateForm from "./../components/CreateForm";

const AddNewPet = () => {
  return (
    <div className="add-new-pet-page">
      <h2>Know a pet needing a home?</h2>
      <CreateForm />
      <Link to={"/"} className="nav-link">back to home</Link>
    </div >
  )
}

export default AddNewPet;
