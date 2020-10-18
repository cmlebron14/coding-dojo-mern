import React from 'react';
import './BoxGeneratorDisplay.css';

const BoxDisplay = props => {
  const boxesToDisplay = props.boxes.map(box => <div class="box" key={box[2]} style={{backgroundColor: box[0], height: box[1], width: box[1]}}></div>);

  return (
    <div className="output">
      { boxesToDisplay }
    </div>
  );
}

export default BoxDisplay;