import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import PersonCard from "./PersonCard";
// import PersonCardFunctional from "./PersonCardFunctional";
import HookForm from "./HookForm";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* <PersonCard personName="Doe, Jane" personAge={45} personHair="Brown" /> */}
    {/* <PersonCard personName="Smith, John" personAge={88} personHair="Brown" /> */}
    {/* <PersonCard personName="Fillmore, Millard" personAge={50} personHair="Brown" /> */}
    {/* <PersonCard personName="Smith, Maria" personAge={62} personHair="Brown" /> */}

    {/* <PersonCardFunctional personFirstName="Jane" personLastName="Doe" personAge={45} personHair="Black" /> */}
    {/* <PersonCardFunctional personFirstName="John" personLastName="Smith" personAge={88} personHair="Brown" /> */}
    {/* <PersonCardFunctional personFirstName="Millard" personLastName="Fillmore" personAge={50} personHair="Brown" /> */}
    {/* <PersonCardFunctional personFirstName="Maria" personLastName="Smith" personAge={62} personHair="Brown" /> */}

    <HookForm />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
