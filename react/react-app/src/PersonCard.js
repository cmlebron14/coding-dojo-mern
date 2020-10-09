import React from "react";
import "./PersonCard.css";

class PersonCard extends React.Component {
  state = {
    age: this.props.personAge,
  }
  birthday = () => {
    let age = this.state.age;
    age++;
    this.setState({ age });
  }
  render() {
    return (
      <div className="person-card">
        <h2>{this.props.personName}</h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.personHair}</p>
        <button onClick={this.birthday}>Birthday Button</button>
      </div>
    );
  }
}

export default PersonCard;
