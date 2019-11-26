import React from "react";
import QuizProblem from "./QuizProblem";
import "./App.css";

function QuizBody(props) {
     //const isSprint = props.isSprint;
     const typeOfProblem = props.typeOfProblem;
     const difficulty = props.difficulty;
     const answerSubmit = props.answerSubmit;
     const answerList = props.answerList;
     const startTime = props.startTime;
     const streak = props.streak;

     const prevAnswer = answerList[answerList.length - 1];
     console.log(prevAnswer);

  console.log("startime: " + startTime);


  let problem = null;
  let num1 = null;
  let num2 = null;
  let answer = null;
  let completedProblem = null;

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// addition
if (typeOfProblem === "addition") {
     if(difficulty === "medium") {
          num1 = randomIntFromInterval(10, 100);
          num2 = randomIntFromInterval(10, 100);
     } else if (difficulty === "easy") {
          num1 = randomIntFromInterval(0, 10);
          num2 = randomIntFromInterval(0, 10);
     } else if (difficulty === "hard") {
          num1 = randomIntFromInterval(50, 999);
          num2 = randomIntFromInterval(50, 999);
     }
     answer = num1 + num2;
     problem = num1 + " + " + num2 + " = ?";
     completedProblem = num1 + " + " + num2 + " = " + answer;
}
// subtraction
else if (typeOfProblem === "subtraction") {

     // loop to ensure a positive answer
     do {

          if(difficulty === "medium") {
               num1 = randomIntFromInterval(10, 100);
               num2 = randomIntFromInterval(10, 100);
          } else if (difficulty === "easy") {
               num1 = randomIntFromInterval(0, 10);
               num2 = randomIntFromInterval(0, 10);
          } else if (difficulty === "hard") {
               num1 = randomIntFromInterval(50, 999);
               num2 = randomIntFromInterval(50, 999);
          }
          answer = num1 - num2;
          problem = num1 + " - " + num2 + " = ?";
          completedProblem = num1 + " - " + num2 + " = " + answer;

     } while ( answer <= 0 );

}
// multiplication
else if (typeOfProblem === "multiplication") {

     if(difficulty === "medium") {
          num1 = randomIntFromInterval(5, 15);
          num2 = randomIntFromInterval(5, 15);
     } else if (difficulty === "easy") {
          num1 = randomIntFromInterval(0, 8);
          num2 = randomIntFromInterval(0, 8);
     } else if (difficulty === "hard") {
          num1 = randomIntFromInterval(5, 30);
          num2 = randomIntFromInterval(5, 30);
     }
     answer = num1 * num2;
     problem = num1 + " × " + num2 + " = ?";
     completedProblem = num1 + " × " + num2 + " = " + answer;

}
// division
else if ( typeOfProblem === "division" && difficulty === 'easy' ) {

     // loop to ensure an integer answer
     do {

          num1 = randomIntFromInterval(0, 24);
          num2 = randomIntFromInterval(1, 8);

          answer = num1 / num2;
          problem = num1 + " ÷ " + num2 + " = ?";
          completedProblem = num1 + " ÷ " + num2 + " = " + answer;

     } while ( ((answer - Math.floor(answer)) !== 0) );

} else if (typeOfProblem === "division") {

     // loop to ensure an integer answer
     do {

          if(difficulty === "medium") {
               num1 = randomIntFromInterval(5, 150);
               num2 = randomIntFromInterval(2, 15);
          } else if (difficulty === "hard") {
               num1 = randomIntFromInterval(10, 500);
               num2 = randomIntFromInterval(5, 250);
          }
          answer = num1 / num2;
          problem = num1 + " ÷ " + num2 + " = ?";
          completedProblem = num1 + " ÷ " + num2 + " = " + answer;

     } while ( ((answer - Math.floor(answer)) !== 0) || (num1 === num2) );

}

  console.log("answerList: " + JSON.stringify(answerList));

  return (
    <main className="clb-quiz-body-area">
      <QuizProblem
        typeOfProblem={typeOfProblem}
        difficulty={difficulty}
        startTime={startTime}
        answerSubmit={answerSubmit} 
        num1={num1}
        num2={num2}
        answer={answer}
        problem={problem}
        completedProblem={completedProblem}
        streak={streak}
      />
    </main>
  );
}

export default QuizBody;
