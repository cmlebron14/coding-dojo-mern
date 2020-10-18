import React, { useState } from 'react';
import './App.css';
import BoxForm from './BoxGeneratorForm';
import BoxDisplay from './BoxGeneratorDisplay';

const App = () => {
  const [ currentBoxes, setCurrentBoxes] = useState([]);

  const addNewBox = (newBox) => {
    setCurrentBoxes([...currentBoxes, newBox]);
  }

  return (
    <>
      <BoxForm onNewBox={ addNewBox }/>
      <BoxDisplay boxes={ currentBoxes } />
    </>
  );
}

export default App;
