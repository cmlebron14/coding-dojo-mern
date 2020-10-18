import React, { useState } from 'react';
import './BoxGeneratorForm.css';

const BoxForm = props => {
  const [ boxColor, setBoxColor ] = useState("");
  const [ boxSize, setBoxSize ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.onNewBox([boxColor, `${boxSize}px`, Date.now()]);
    setBoxColor("");
    setBoxSize("");
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="color">Color</label>
      <input type="text" name="color" onChange={ e => setBoxColor(e.target.value) } value={ boxColor } />
      <label htmlFor="size">Size</label>
      <input type="text" name="size" onChange={ e => setBoxSize(e.target.value) } value={ boxSize } />
      <button type="submit">Add</button>
    </form>
  );
}

export default BoxForm;