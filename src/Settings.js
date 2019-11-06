import React from "react";
import "./App.css";

import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings(props) {

     if( props.viewSettings === true ) {

       return (
         <div className="clb-settings">
           <button onClick={props.toggleViewSettings}><FontAwesomeIcon icon={faCog} /></button>
           <div className="single-setting-area">
           <h3>Type of Question</h3>
                <button onClick={props.setTypeAddition}>Addition</button>
                <button onClick={props.setTypeSub}>Subtraction</button>
                <button onClick={props.setTypeMultiplication}>Multiplication</button>
                <button onClick={props.setTypeDivision}>Division</button>
           </div>
           <div className="single-setting-area">
           <h3>Question Difficulty</h3>
                <button onClick={props.setDifficultyEasy}>Easy</button>
                <button onClick={props.setDifficultyMed}>Medium</button>
                <button onClick={props.setDifficultyHard}>Hard</button>
           </div>
           <div className="single-setting-area">
           <h3>Show Summary of Results?</h3>
                <button onClick={props.showSummarytoUser}>Yes</button>
                <button onClick={props.hideSummaryfromUser}>No</button>
           </div>
           <div className="single-setting-area start-over">
                <button onClick={props.startOver}>Start Over</button>
           </div>
         </div>
       );

 } else {
      return (
      <div className="clb-settings">
        <button onClick={props.toggleViewSettings}><FontAwesomeIcon icon={faCog} /></button>
        </div>);
     }

}

export default Settings;
