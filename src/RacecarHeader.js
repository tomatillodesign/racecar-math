import React from "react";
import "./App.css";

// get our fontawesome imports
import {
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RacecarHeader() {
  return (
    <header className="App-header">
    <div className="header-icons">
     <FontAwesomeIcon icon={faCarSide} />
    </div>
      <a href="http://racecarmath.org/" onClick={e =>
       window.confirm(
          "Are you sure you want to start over? Your name and score will be erased from this page."
       )
      }><h1>Racecar Math</h1></a>
    </header>
  );
}

export default RacecarHeader;
