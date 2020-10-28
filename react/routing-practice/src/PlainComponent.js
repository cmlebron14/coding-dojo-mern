import React from 'react';

const PlainComponent = props => {
  return (
    <h2>{`The ${isNaN(props.word) ? "word" : "number"} is: ${props.word}`}</h2>
  );
}

export default PlainComponent;