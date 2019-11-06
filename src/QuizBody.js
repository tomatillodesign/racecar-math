import React from "react";
import Quiz from "./Quiz.js";
import QuizProblem from "./QuizProblem";
import "./App.css";

function QuizBody(props) {
  const typeOfProblem = props.typeOfProblem;
  const difficulty = props.difficulty;
  const answerSubmit = props.answerSubmit;
  const answerList = props.answerList;

  let problem = null;
  let num1 = null;
  let num2 = null;
  let answer = null;

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (typeOfProblem === "addition" && difficulty === "medium") {
    num1 = randomIntFromInterval(10, 100);
    num2 = randomIntFromInterval(10, 100);
    answer = num1 + num2;
    problem = num1 + " + " + num2 + " = " + answer;
  }

  console.log("answerList: " + answerList);

  return (
    <main className="clb-quiz-body-area">
      <QuizProblem
        typeOfProblem={typeOfProblem}
        difficulty={difficulty}
        answerSubmit={answerSubmit}
        num1={num1}
        num2={num2}
        answer={answer}
        problem={problem}
      />
      <div className="answerList-area">
        Previous Answers: {JSON.stringify(answerList)}
      </div>
    </main>
  );
}

export default QuizBody;
