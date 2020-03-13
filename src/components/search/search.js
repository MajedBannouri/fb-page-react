import React from "react";
import "./search.css";

function Search() {
  return (
    <div className="searchBar">
      <div className="item-status">
        <a href="#">
          <div>
            <img src={require("./message.png")} />
            Message
          </div>
        </a>
        <a href="#">
          <div>
            <img src={require("./photo.png")} />
            Photo
          </div>
        </a>
        <a href="#">
          <div>
            <img src={require("./video.png")} />
            Vidéo en direct
          </div>
        </a>
      </div>

      <input placeholder="Exprimez-vous"></input>
    </div>
  );
}

export default Search;
