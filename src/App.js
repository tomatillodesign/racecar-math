import React from "react";
import RacecarHeader from "./RacecarHeader";
import Quiz from "./Quiz";
import RacecarFooter from "./RacecarFooter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RacecarHeader />
      <Quiz />
      <RacecarFooter />
    </div>
  );
}

export default App;
