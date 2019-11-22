import React from "react";
import "./App.css";

function Score(props) {

     const score = Math.floor((props.numberCorrect / props.totalNumQuestions) * 100);

     let correctToPublish = 0;
     if( props.numberCorrect > 0 ) {
          correctToPublish = props.numberCorrect;
     }

     if( props.totalNumQuestions > 0 ) {
          return (
               <div className="score-area">
                    <h2 className="current-score">Score: {score}%</h2>
                    <div className="score-detail answered">Answered: {props.totalNumQuestions}</div>
                    <div className="score-detail correct">Correct: {correctToPublish}</div>
               </div>
          );
     } else {
          return null;
     }

}

export default Score;
