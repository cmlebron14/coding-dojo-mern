import React from "react";
import { Link } from "@reach/router";
import PetList from "./../components/PetList";

const Home = () => {
  return (
    <div className="home-page">
      <h2>These pets are looking for a good home!</h2>
      <PetList />
      <Link to={"/add-pet"} className="nav-link">Add a pet to the shelter +</Link>
    </div>
  );
}

export default Home;