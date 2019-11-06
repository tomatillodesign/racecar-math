import React from "react";
import "./App.css";

import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings() {
  return (
    <div className="clb-settings">
      <FontAwesomeIcon icon={faCog} />
      <p>Settings Here</p>
      <h3>Show Summary of Results?</h3>
      <button>Yes</button>
      <button>No</button>
    </div>
  );
}

export default Settings;
