import React from "react";
import "./App.css";

// get our fontawesome imports
// import {
//   faHeart,
//   faCoffee,
// } from "@fortawesome/free-solid-svg-icons";
//import { faAbacus } from "@fortawesome/pro-solid-svg-icons";
//import { faAbacus } from "@fortawesome/pro-light-svg-icons";
import { faAbacus } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RacecarFooter() {
  return (
    <footer className="clb-footer">
     <p className="inspired">
        Inspired by all the Lemurs in Ms. Jaworski's 2nd-grade class! <FontAwesomeIcon icon={faAbacus} />
      </p>
      <p className="version"><a href="https://github.com/tomatillodesign/racecar-math" target="_blank" rel="noopener noreferrer">Version 1.0</a></p>
    </footer>
  );
}

export default RacecarFooter;
