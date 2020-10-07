import React from "react";

class PersonCard extends React.Component {
  render() {
    return (
      <div className="person-card">
        <h2>{this.props.personName}</h2>
        <p>Age: {this.props.personAge}</p>
        <p>Hair Color: {this.props.personHair}</p>
      </div>
    );
  }
}

export default PersonCard;
