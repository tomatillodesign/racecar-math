import React from "react";
import "./App.css";

function Score(props) {

     const score = Math.floor((props.numberCorrect / props.totalNumQuestions) * 100);

     if( props.totalNumQuestions > 0 ) {
          return <h2>Score: {score}%</h2>
     } else {
          return null;
     }

}

export default Score;
