import React from "react";
import "./App.css";

//import Countdown from 'react-countdown-now';

function Timer(props) {

     const timeStarted = props.timeStarted;
     const endSprint = props.endSprint;

     let timeRemaining = Date.now() - timeStarted;

  return (

       <div className="timer-area">
          <h2>Time Remaining: {timeStarted}</h2>
       </div>

  );
}

export default Timer;
