import React, { useState } from "react";
import axios from "axios";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");

  const createNewPet = e => {
    e.preventDefault();
    const skills = [ skillOne, skillTwo, skillThree ];
    axios.post("http://localhost:8000/api/pets", { name, type, description, skills })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <form className="create-form" onSubmit={ createNewPet }>
      <div className="col-1">
        <h3>Pet Details</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={ e => setName(e.target.value) }/>
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input type="text" name="type" onChange={ e => setType(e.target.value) }/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea name="description" onChange={ e => setDescription(e.target.value) }/>
        </div>
      </div>
      <div className="col-2">
        <h3>Pet Skills (optional)</h3>
        <div className="form-group">
          <label htmlFor="skill-1">Skill 1:</label>
          <input type="text" name="skill-1" onChange={ e => setSkillOne(e.target.value) }/>
        </div>
        <div className="form-group">
          <label htmlFor="skill-2">Skill 2:</label>
          <input type="text" name="skill-2" onChange={ e => setSkillTwo(e.target.value) }/>
        </div>
        <div className="form-group">
          <label htmlFor="skill-3">Skill 3:</label>
          <input type="text" name="skill-3" onChange={ e => setSkillThree(e.target.value) }/>
        </div>
        <button type="submit">Add Pet</button>
      </div>
    </form>
  );
}

export default CreateForm;
