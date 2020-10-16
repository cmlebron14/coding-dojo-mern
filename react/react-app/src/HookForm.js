import React, { useState } from 'react';
import './HookForm.css';

const HookForm = props => {
  const [ firstname, setFirstname ] = useState("");
  const [ lastname, setLastname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ firstnameError, setFirstnameError ] = useState("");
  const [ lastnameError, setLastnameError ] = useState("");
  const [ emailError, setEmailError ] = useState("");
  const [ passwordError, setPasswordError ] = useState("");
  const [ confirmPasswordError, setConfirmPasswordError ] = useState("");

  const handleFirstname = e => {
    setFirstname(e.target.value);
    if (e.target.value.length < 2 && e.target.value.length > 0) {
      setFirstnameError("First name must be at least 2 characters");
    } else {
      setFirstnameError("");
    }
  }
  const handleLastname = e => {
    setLastname(e.target.value);
    if (e.target.value.length < 2 && e.target.value.length > 0) {
      setLastnameError("Last name must be at least 2 characters");
    } else {
      setLastnameError("");
    }
  }
  const handleEmail = e => {
    setEmail(e.target.value);
    if (e.target.value.length < 5 && e.target.value.length > 0) {
      setEmailError("Email must be at least 5 characters");
    } else {
      setEmailError("");
    }
  }
  const handlePassword= e => {
    setPassword(e.target.value);
    if (e.target.value.length < 8 && e.target.value.length > 0) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setConfirmPasswordError("Password and Confirm Password must match exactly");
    } else {
      setConfirmPasswordError("");
    }
  }

  return (
    <div className="wrapper">
      <form>
        <div className="form-group">
          <label>First Name: </label>
          <input type="text" onChange={ handleFirstname }/>
          {
            firstnameError ?
            <p className="error-message">{ firstnameError }</p> :
            ''
          }
        </div>
        <div className="form-group">
          <label>Last Name: </label>
          <input type="text" onChange={ handleLastname }/>
          {
            lastnameError ?
            <p className="error-message">{ lastnameError }</p> :
            ''
          }
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input type="email" onChange={ handleEmail }/>
          {
            emailError ?
            <p className="error-message">{ emailError }</p> :
            ''
          }
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input type="password" onChange={ handlePassword }/>
          {
            passwordError ?
            <p className="error-message">{ passwordError }</p> :
            ''
          }
        </div>
        <div className="form-group">
          <label>Confirm Password: </label>
          <input type="password" onChange={ handleConfirmPassword }/>
          {
            confirmPasswordError ?
            <p className="error-message">{ confirmPasswordError }</p> :
            ''
          }
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