import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div className="app">
       <Header />
       <Navigation />
       <Main />
      </div>
    );
  }
}

export default App;
