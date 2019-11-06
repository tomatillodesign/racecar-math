import React from "react";
import Quiz from "./Quiz.js";
import QuizProblem from "./QuizProblem";
import "./App.css";

function QuizBody(props) {

     const typeOfProblem = props.typeOfProblem;
     const difficulty = props.difficulty;

  return (
    <main className="clb-quiz-body-area">
      <QuizProblem
          typeOfProblem={typeOfProblem}
          difficulty={difficulty}
          />
    </main>
  );
}

export default QuizBody;
