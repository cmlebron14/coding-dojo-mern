import React from 'react';

const FancyComponent = props => {
  const styleObject = {
    "backgroundColor": `${props.bgColor}`,
    "color": `${props.textColor}`
  }
  return (
    <h2 style={styleObject}>{`The ${isNaN(props.word) ? "word" : "number"} is: ${props.word}`}</h2>
  );
}

export default FancyComponent;