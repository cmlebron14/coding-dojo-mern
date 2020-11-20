import React from "react";
import CreateForm from "./../components/CreateForm";
import ListAll from "./../components/ListAll";

const Main = () => {
  return (
    <div className="main-page">
      <CreateForm />
      <ListAll />
    </div>
  )
}

export default Main;