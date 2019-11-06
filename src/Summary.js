import React from "react";
import Quiz from "./Quiz.js";
import "./App.css";

function Summary(props) {
  return (
    <div className="summary-area">
      <h3>Summary</h3>
      Previous Answers: {JSON.stringify(props.answerList)}
    </div>
  );
}

export default Summary;
