import React, { useState } from 'react';
import './HookForm.css';

const HookForm = props => {
  const [ firstname, setFirstname ] = useState("");
  const [ lastname, setLastname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  return (
    <div className="wrapper">
      <form>
        <div className="form-group">
          <label>First Name: </label>
          <input type="text" onChange={ e => setFirstname(e.target.value) }/>
        </div>
        <div className="form-group">
          <label>Last Name: </label>
          <input type="text" onChange={ e => setLastname(e.target.value) }/>
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input type="email" onChange={ e => setEmail(e.target.value) }/>
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input type="password" onChange={ e => setPassword(e.target.value) }/>
        </div>
        <div className="form-group">
          <label>Confirm Password: </label>
          <input type="password" onChange={ e => setConfirmPassword(e.target.value) }/>
        </div>
      </form>
      <div className="form-output">
        <p>First Name: { firstname }</p>
        <p>Last Name: { lastname }</p>
        <p>Email: { email }</p>
        <p>Password: { password }</p>
        <p>Confirm Password: { confirmPassword }</p>
      </div>
    </div>
  );
}

export default HookForm;