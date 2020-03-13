import React from "react";
import "./connectedPerson.css";

function ConnectedPerson(props) {
  return (
    <div className="card">
      <img src={require("./" + props.image)} />
      <h1>{props.nom}</h1>

      <img src={require("./" + props.image)} />
    </div>
  );
}

export default ConnectedPerson;
