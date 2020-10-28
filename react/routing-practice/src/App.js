import React from 'react';
import { Router } from '@reach/router';
import HomeComponent from './HomeComponent';
import PlainComponent from './PlainComponent';
import FancyComponent from './FancyComponent';

function App() {
  return (
    <div className="app">
      <Router>
        <HomeComponent path="/home" />
        <PlainComponent path="/:word" />
        <FancyComponent path="/:word/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
