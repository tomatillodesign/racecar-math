import React from "react";
import "./App.css";

import Select from 'react-select';

import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings(props) {


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



       // Color Scheme -- SELECT
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


       // Type of Question -- SELECT
       const questionTypeOptions = [
            { value: 'addition', label: '+ Addition' },
            { value: 'subtraction', label: '– Subtraction' },
            { value: 'multiplication', label: '× Multiplication' },
            { value: 'division', label: '÷ Divison' }
       ];

       var defaultQuestionType = questionTypeOptions[0];
       if( props.typeOfProblem === 'subtraction' ) { defaultQuestionType = questionTypeOptions[1]; }
       if( props.typeOfProblem === 'multiplication' ) { defaultQuestionType = questionTypeOptions[2]; }
       if( props.typeOfProblem === 'division' ) { defaultQuestionType = questionTypeOptions[3]; }


       // Difficulty -- SELECT
       const difficultyOptions = [
            { value: 'easy', label: 'Easy' },
            { value: 'medium', label: 'Medium' },
            { value: 'hard', label: 'Hard' }
       ];

       var defaultDifficulty = difficultyOptions[0];
       if( props.difficulty === 'medium' ) { defaultDifficulty = difficultyOptions[1]; }
       if( props.difficulty === 'hard' ) { defaultDifficulty = difficultyOptions[2]; }

    return (
      <div className="clb-settings revealed">
        <div className="single-setting-area colors">
          <h3>Racecar Colors</h3>
          <Select options={colorSchemeOptions} defaultValue={defaultValue} onChange={props.changeColors} id="choose-colors-select" />
        </div>
        <div className="single-setting-area question-types">
          <h3>Type of Math</h3>
          <Select options={questionTypeOptions} defaultValue={defaultQuestionType} onChange={props.setQuestionType} id="question-type-select" />
        </div>
        <div className="single-setting-area difficulty">
          <h3>Difficulty</h3>
          <Select options={difficultyOptions} defaultValue={defaultDifficulty} onChange={props.setQuestionDifficulty} id="difficulty-select" />
        </div>
        <div className="single-setting-area">
          <h3>Show Summary?</h3>
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
  
}

export default Settings;
