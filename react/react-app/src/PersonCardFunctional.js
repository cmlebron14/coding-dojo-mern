import React from 'react';
import './PersonCard.css';

const PersonCardFunctional = props => {
  const { personFirstName, personLastName, personAge, personHair } = props;
  return (
    <div className="person-card">
      <h2>{personLastName}, {personFirstName}</h2>
      <p>Age: {personAge}</p>
      <p>Hair Color: {personHair}</p>
    </div>
  );
}

export default PersonCardFunctional;