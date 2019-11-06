import React from "react";
import "./App.css";

// get our fontawesome imports
import {
  faHome,
  faCoffee,
  faCar,
  faCarSide,
  faFlagCheckered
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RacecarHeader() {
  return (
    <header className="App-header">
      <h1>
        Racecar Math
        <span className="header-icons">
          <FontAwesomeIcon icon={faCarSide} />
          <FontAwesomeIcon icon={faFlagCheckered} />
        </span>
      </h1>
    </header>
  );
}

export default RacecarHeader;
