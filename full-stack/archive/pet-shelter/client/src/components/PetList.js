import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets")
      .then(res => setPets(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <table className="pet-list-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        {pets.map((pet, i) => (
          <tr key={i}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>
              <Link to={`/view-pet/${pet._id}`}>details</Link>|
              <Link to={`/edit-pet/${pet._id}`}>edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PetList;