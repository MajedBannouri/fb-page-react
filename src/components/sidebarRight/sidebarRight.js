import React from "react";
import "./sidebarRight.css";

function sidebarRight(props) {
  return (
    <a  href="#">
      <img className="person-photo" src={require("./" + props.image)} />
      <p className="person-name"> {props.name}</p>
    </a>
  );
}

export default sidebarRight;
