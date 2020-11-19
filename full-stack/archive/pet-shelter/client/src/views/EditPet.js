import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "@reach/router";

const EditPet = props => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.pet_id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skills[0]);
                setSkillTwo(res.data.skills[1]);
                setSkillThree(res.data.skills[2]);
            })
    }, [props.pet_id])

    const updatePet = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props.pet_id}`,
        { name, type, description })
          .then(res => console.log(res))
          .catch(err => console.log(err));
    }

    return (
      <div className="edit-pet-page">
        <h2>Edit {name}</h2>
        <Link to={"/"} class="nav-link">back to home</Link>
        <form onSubmit={ updatePet }>
          <div className="col-1">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type:</label>
              <input type="text" name="type" value={type} onChange={(e) => { setType(e.target.value) }} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
              <label htmlFor="skill-1">Skill 1:</label>
              <input type="text" name="skill-1" value={skillOne} onChange={(e) => { setSkillOne(e.target.value) }} />
            </div>
            <div className="form-group">
              <label htmlFor="skill-2">Skill 2:</label>
              <input type="text" name="skill-2" value={skillTwo} onChange={(e) => { setSkillTwo(e.target.value) }} />
            </div>
            <div className="form-group">
              <label htmlFor="skill-3">Skill 3:</label>
              <input type="text" name="skill-3" value={skillThree} onChange={(e) => { setSkillThree(e.target.value) }} />
            </div>
            <button type="submit">Edit Pet</button>
          </div>
        </form>
      </div>
    )
}

export default EditPet;