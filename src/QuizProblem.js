import React from "react";
import Quiz from "./Quiz.js";
import QuizBody from "./QuizBody";
import "./App.css";

function QuizProblem(props) {

     let problem = null;
     let num1 = null;
     let num2 = null;
     let answer = null;

     const typeOfProblem = props.typeOfProblem;
     const difficulty = props.difficulty;

     if( typeOfProblem === "addition" && difficulty === "medium" ) {

          num1 = Math.floor(Math.random() * 100);
          num2 = Math.floor(Math.random() * 100);
          answer = num1+num2;
          problem = num1 + " + " + num2 + " = " + answer;
          
     }

  return (
    <div className="clb-quiz-problem-area">
      <p>Quiz Question Here: {typeOfProblem} {difficulty}</p>
      <p>{problem}</p>
    </div>
  );
}

export default QuizProblem;
