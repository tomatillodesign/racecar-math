import React from "react";
import RacecarHeader from "./RacecarHeader";
import Welcome from "./Welcome";
import NameForm from "./NameForm";
import Quiz from "./Quiz";
import Settings from "./Settings";
import RacecarFooter from "./RacecarFooter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RacecarHeader />
      <NameForm />
      <Settings />
      <Quiz />
      <RacecarFooter />
    </div>
  );
}

export default App;
