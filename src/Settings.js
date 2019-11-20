import React from "react";
import "./App.css";

import Select from 'react-select';

import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings(props) {



  // Color Scheme Buttons ------------------- //
  let colorSchemeButtonPink = (
    <button onClick={props.changeColors} className="color-scheme pink">
      Pink
    </button>
  );
  // END Color Scheme Buttons ------------------- //

  // Problem Type Buttons ------------------- //
  let typeOfProblem = props.typeOfProblem;
  let additionButton = (
    <button
      onClick={props.setTypeAddition}
      className="type-of-problem addition"
    >
      Addition
    </button>
  );
  let subButton = (
    <button onClick={props.setTypeSub} className="type-of-problem subtraction">
      Subtraction
    </button>
  );
  let multiplicationButton = (
    <button
      onClick={props.setTypeMultiplication}
      className="type-of-problem multiplication"
    >
      Multiplication
    </button>
  );
  let divisionButton = (
    <button
      onClick={props.setTypeDivision}
      className="type-of-problem division"
    >
      Divison
    </button>
  );

  if (typeOfProblem === "addition") {
    additionButton = (
      <button
        onClick={props.setTypeAddition}
        className="type-of-problem addition active"
      >
        Addition
      </button>
    );
  }
  if (typeOfProblem === "subtraction") {
    subButton = (
      <button
        onClick={props.setTypeSub}
        className="type-of-problem subtraction active"
      >
        Subtraction
      </button>
    );
  }
  if (typeOfProblem === "multiplication") {
    multiplicationButton = (
      <button
        onClick={props.setTypeMultiplication}
        className="type-of-problem multiplication active"
      >
        Multiplication
      </button>
    );
  }
  if (typeOfProblem === "division") {
    divisionButton = (
      <button
        onClick={props.setTypeDivision}
        className="type-of-problem division active"
      >
        Division
      </button>
    );
  }

  // Difficulty Buttons ------------------- //
  let difficulty = props.difficulty;
  let easyButton = (
    <button onClick={props.setDifficultyEasy} className="difficulty easy">
      Easy
    </button>
  );
  let medButton = (
    <button onClick={props.setDifficultyMed} className="difficulty med">
      Medium
    </button>
  );
  let hardButton = (
    <button onClick={props.setDifficultyHard} className="difficulty hard">
      Hard
    </button>
  );

  if (difficulty === "easy") {
    easyButton = (
      <button
        onClick={props.setDifficultyEasy}
        className="difficulty easy active"
      >
        Easy
      </button>
    );
  }
  if (difficulty === "medium") {
    medButton = (
      <button
        onClick={props.setDifficultyMed}
        className="difficulty med active"
      >
        Medium
      </button>
    );
  }
  if (difficulty === "hard") {
    hardButton = (
      <button
        onClick={props.setDifficultyHard}
        className="difficulty hard active"
      >
        Hard
      </button>
    );
  }
  // END Difficulty Buttons ------------------- //

  // Summary Buttons ------------------- //
  let showSummary = props.showSummary;
  let showSummaryYes = (
    <button onClick={props.showSummarytoUser} className="show-summary true">
      Yes
    </button>
  );
  let showSummaryNo = (
    <button onClick={props.hideSummaryfromUser} className="show-summary false">
      No
    </button>
  );

  if (showSummary === true) {
    showSummaryYes = (
      <button
        onClick={props.showSummarytoUser}
        className="show-summary true active"
      >
        Yes
      </button>
    );
  }
  if (showSummary === false) {
    showSummaryNo = (
      <button
        onClick={props.hideSummaryfromUser}
        className="show-summary false active"
      >
        No
      </button>
    );
  }

  if (props.viewSettings === true) {

       const colorSchemeOptions = [
            { value: 'blue', label: 'Blue' },
            { value: 'pink', label: 'Pink' },
            { value: 'orange', label: 'Orange' },
            { value: 'green', label: 'Green' }
       ];
       var defaultValue = colorSchemeOptions[0];
       if( props.currentColorScheme === 'pink' ) { defaultValue = colorSchemeOptions[1]; }
       if( props.currentColorScheme === 'orange' ) { defaultValue = colorSchemeOptions[2]; }
       if( props.currentColorScheme === 'green' ) { defaultValue = colorSchemeOptions[3]; }

    return (
      <div className="clb-settings revealed">
        <div className="single-setting-area">
          <h3>Choose Colors</h3>
          <Select options={colorSchemeOptions} defaultValue={defaultValue} onChange={props.changeColors} id="choose-colors"/>
        </div>
        <div className="single-setting-area">
          <h3>Type of Question</h3>
          {additionButton}
          {subButton}
          {multiplicationButton}
          {divisionButton}
        </div>
        <div className="single-setting-area">
          <h3>Question Difficulty</h3>
          {easyButton}
          {medButton}
          {hardButton}
        </div>
        <div className="single-setting-area">
          <h3>Show Summary of Results?</h3>
          {showSummaryYes}
          {showSummaryNo}
        </div>
        <div className="single-setting-area start-over">
          <button
            onClick={e =>
              window.confirm(
                "Are you sure you want to start over? Your name and score will be erased from this page."
              ) && props.startOver(e)
            }
          >
            Start Over
          </button>
        </div>
        <button onClick={props.toggleViewSettings} id="hide-settings">
          <FontAwesomeIcon icon={faCog} /> Hide Settings
        </button>
      </div>
    );
  } else {
    return (
      <div className="clb-settings hidden">
        <button onClick={props.toggleViewSettings}>
          <FontAwesomeIcon icon={faCog} /> Show Settings
        </button>
      </div>
    );
  }
}

export default Settings;
