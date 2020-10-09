import React from 'react';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advertisement />
      </div>
    );
  }
}

export default Main;