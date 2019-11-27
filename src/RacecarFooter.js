import React from "react";
import "./App.css";

// get our fontawesome imports
import {
  faHeart,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RacecarFooter() {
  return (
    <footer className="clb-footer">

    <p className="version">Version 0.8 - Nov 27, 2019</p>
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
