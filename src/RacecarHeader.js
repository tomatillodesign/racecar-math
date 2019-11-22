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
      <a href="/"><h1>
        Racecar Math
        <span className="header-icons">
          <FontAwesomeIcon icon={faCarSide} />
        </span>
      </h1></a>
    </header>
  );
}

export default RacecarHeader;
