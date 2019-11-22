import React from "react";
import "./App.css";

// get our fontawesome imports
import {
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuizAlert(props) {

     let message = null;

     // Correct Streaks
     if( props.streak === 3 ) {
          message = <div className="clb-quiz-alert"><div className="success three">3 in a row! 😄</div></div>
     } else if ( props.streak === 4 ) {
          message = <div className="clb-quiz-alert"><div className="success four">4 in a row! 🤩</div></div>
     } else if ( props.streak === 5 ) {
          message = <div className="clb-quiz-alert"><div className="success five">5 in a row! You're on fire! 🔥🔥🔥🔥🔥</div></div>
     } else if ( props.streak === 10 ) {
          message = <div className="clb-quiz-alert"><div className="success ten">That's 10 in a row! 🥳🎉👏<div className="what-next">Are you ready for a bigger challenge?<br/>Use the settings to choose another type of problem or difficulty.</div></div></div>
     } else if ( props.streak === 20 ) {
          message = <div className="clb-quiz-alert"><div className="success twenty">Too easy! That's 20 in a row! 🥳🥳🎉🎉👏👏<div className="what-next">Are you ready for a bigger challenge?<br/>Use the settings to choose another type of problem or difficulty.</div></div></div>
     }

     // Too Hard
     if( props.totalNumQuestions > 9 && props.numberCorrect < 3 ) {
          message = <div className="clb-quiz-alert"><div className="failure">Looks like you're having a hard time. Would you like to try a different problem? Use the settings to change it up.</div></div>
     }

  return (

       <>
      {message}
      </>

  );

}

export default QuizAlert;
