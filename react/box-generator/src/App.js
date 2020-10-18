import React, { Fragment } from 'react';
import './App.css';
import BoxGeneratorForm from './BoxGeneratorForm';
import BoxGeneratorDisplay from './BoxGeneratorDisplay';

const App = props => {
  return (
    <Fragment>
      <BoxGeneratorForm />
      <BoxGeneratorDisplay />
    </Fragment>
  );
}

export default App;
