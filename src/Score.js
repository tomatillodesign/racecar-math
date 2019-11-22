import React from "react";
import "./App.css";

function Score(props) {

     const score = Math.floor((props.numberCorrect / props.totalNumQuestions) * 100);

     if( props.totalNumQuestions > 0 ) {
          return (
               <div className="score-area">
                    <h2 className="current-score">Score: {score}%</h2>
                    <div className="score-detail answered">Answered: {props.totalNumQuestions}</div>
                    <div className="score-detail correct">Correct: {props.numberCorrect}</div>
               </div>
          );
     } else {
          return null;
     }

}

export default Score;
