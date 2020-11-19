import React, {useState, useEffect} from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { navigate } from "@reach/router";

const PetDetails = props => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${props.pet_id}`)
      .then(res => setPet(res.data))
      .catch(err => console.log(err));
  }, [props.pet_id]);

  const adoptPet = e => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/pets/${props.pet_id}`)
      .then(result => navigate("/"))
      .catch(err => console.log(err));
  }

  return (
    <div className="pet-details-page">
      <div className="header">
        <h2>Details about {pet.name}</h2>
        <button onClick={adoptPet}>Adopt {pet.name}</button>
      </div>
      <div className="pet-card">
        <p>Pet type: {pet.type}</p>
        <p>Description: {pet.description}</p>
        <p>Skills:</p>
        {/*<ul>
          {pet.skills.map((skill, i) => 
            <li key={i}>{skill}</li>
          )}
          </ul>*/}
      </div>
      <Link to={"/"} className="nav-link">back to home</Link>
    </div>
  );
}

export default PetDetails;