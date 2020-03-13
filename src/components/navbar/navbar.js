import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="Imag">
          <a href="#messenger">
            <img src={require("./messenger.png")} />
          </a>
        </li>
        <li className="Imag">
          <a href="#notification">
            <img src={require("./notification.png")} />
          </a>
        </li>
        <li className="Imag">
          <a href="#invitation">
            <img src={require("./invitation.png")} />
          </a>
        </li>

        <li>
          <a href="#news">Créer</a>
        </li>
        <li>
          <a href="#contact">Acceuil</a>
        </li>
        <li>
          <a href="#about">Profil</a>
        </li>
      </ul>
      <div className="searchBarNav">
        <input placeholder=""></input>
      </div>
    </div>
  );
}

export default Navbar;
