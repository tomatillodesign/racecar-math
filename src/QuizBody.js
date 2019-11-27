import React from "react";
import QuizProblem from "./QuizProblem";
import "./App.css";

function QuizBody(props) {
     const isSprint = props.isSprint;
     const typeOfProblem = props.typeOfProblem;
     const difficulty = props.difficulty;
     const answerSubmit = props.answerSubmit;
     const answerList = props.answerList;
     const startTime = props.startTime;
     const streak = props.streak;

     console.log(answerList);

     let prevAnswerArray = [];
     for (let i = 0; i < answerList.length; i++) {
          let currentAnswer = answerList[i];
          let prevNum1 = currentAnswer.num1;
          let prevNum2 = currentAnswer.num2;
          let prevAnswer = [prevNum1, prevNum2];
          prevAnswerArray.push(prevAnswer);
     }

     console.log(prevAnswerArray);
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


  function arraysMatch(arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};


// addition
if (typeOfProblem === "addition") {

     let doOver = null;

     do {

          doOver = false;

          if(difficulty === "medium") {
               num1 = randomIntFromInterval(9, 100);
               num2 = randomIntFromInterval(9, 100);
          } else if (difficulty === "easy") {
               num1 = randomIntFromInterval(0, 12);
               num2 = randomIntFromInterval(0, 12);
          } else if (difficulty === "hard") {
               num1 = randomIntFromInterval(50, 1000);
               num2 = randomIntFromInterval(50, 1000);
          }
          answer = num1 + num2;
          problem = num1 + " + " + num2 + " = ?";
          completedProblem = num1 + " + " + num2 + " = " + answer;

          // Make sure no problems are repeated in Sprint Mode
          let testCurrentProblem = [num1, num2];

          if( isSprint ) {

               for (let i = 0; i < prevAnswerArray.length; i++) {
                    let match = arraysMatch(prevAnswerArray[i], testCurrentProblem);
                    console.log(match);
                         if( match === true ) {
                              console.log("Matched: " + prevAnswerArray[i] + " --- " + testCurrentProblem);
                              doOver = true;
                         }
               }

          }

     } while ( doOver === true );

}
// subtraction
else if (typeOfProblem === "subtraction") {

     let doOver = null;

     // loop to ensure a positive answer
     do {

          doOver = false;

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

               // Make sure no problems are repeated in Sprint Mode
               let testCurrentProblem = [num1, num2];

               if( isSprint ) {

                    for (let i = 0; i < prevAnswerArray.length; i++) {
                         let match = arraysMatch(prevAnswerArray[i], testCurrentProblem);
                         console.log(match);
                              if( match === true ) {
                                   console.log("Matched: " + prevAnswerArray[i] + " --- " + testCurrentProblem);
                                   doOver = true;
                              }
                    }

               }

     } while ( answer <= 0 || doOver === true );

}
// multiplication
else if (typeOfProblem === "multiplication") {

     let doOver = null;

     do {

          doOver = false;

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

          // Make sure no problems are repeated in Sprint Mode
          let testCurrentProblem = [num1, num2];

          if( isSprint ) {

               for (let i = 0; i < prevAnswerArray.length; i++) {
                    let match = arraysMatch(prevAnswerArray[i], testCurrentProblem);
                    console.log(match);
                         if( match === true ) {
                              console.log("Matched: " + prevAnswerArray[i] + " --- " + testCurrentProblem);
                              doOver = true;
                         }
               }

          }

     } while ( doOver === true );

}
// division
else if ( typeOfProblem === "division" && difficulty === 'easy' ) {

     let doOver = null;

     // loop to ensure an integer answer
     do {

          doOver = false;

          num1 = randomIntFromInterval(0, 24);
          num2 = randomIntFromInterval(1, 8);

          answer = num1 / num2;
          problem = num1 + " ÷ " + num2 + " = ?";
          completedProblem = num1 + " ÷ " + num2 + " = " + answer;

          // Make sure no problems are repeated in Sprint Mode
          let testCurrentProblem = [num1, num2];

          if( isSprint ) {

               for (let i = 0; i < prevAnswerArray.length; i++) {
                    let match = arraysMatch(prevAnswerArray[i], testCurrentProblem);
                    console.log(match);
                         if( match === true ) {
                              console.log("Matched: " + prevAnswerArray[i] + " --- " + testCurrentProblem);
                              doOver = true;
                         }
               }

          }

     } while ( ((answer - Math.floor(answer)) !== 0) || (doOver === true) );

} else if (typeOfProblem === "division") {

     var doOver = null;

     // loop to ensure an integer answer
     do {

          doOver = false;

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

          // Make sure no problems are repeated in Sprint Mode
          let testCurrentProblem = [num1, num2];

          if( isSprint ) {

               for (let i = 0; i < prevAnswerArray.length; i++) {
                    let match = arraysMatch(prevAnswerArray[i], testCurrentProblem);
                    console.log(match);
                         if( match === true ) {
                              console.log("Matched: " + prevAnswerArray[i] + " --- " + testCurrentProblem);
                              doOver = true;
                         }
               }

          }

     } while ( ((answer - Math.floor(answer)) !== 0) || (num1 === num2) || (doOver === true) );

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
