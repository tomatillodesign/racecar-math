import React from "react";
import "./App.css";

import Countdown from 'react-countdown-now';

function Timer(props) {

     // Random component
     const Completionist = () => <span>You are good to go!</span>;

     // Renderer callback with condition
     const renderer = ({ hours, minutes, seconds, completed }) => {
     if (completed) {

          props.endSprint();

     } else {

           // Render a countdown
           return <span>{minutes}:{seconds}</span>;

     }

     };

     const timeStarted = props.timeStarted;
     const endSprint = props.endSprint;

  return (

       <Countdown
            date={timeStarted + 5000}
            renderer={renderer}
         />

  );
}

export default Timer;
