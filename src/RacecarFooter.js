import React from "react";
import "./App.css";

// get our fontawesome imports
import {
  faHeart,
  faCoffee,
  faCar,
  faCarSide,
  faFlagCheckered
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RacecarFooter() {
  return (
    <footer className="clb-footer">
    <p className="version">Version 0.1 - Nov 1, 2019 4:40pm</p>
      <p>
        Made by Chris with
        <span className="header-icons">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCoffee} />
        </span>
      </p>
    </footer>
  );
}

export default RacecarFooter;
