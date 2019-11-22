import React from "react";
import QuizBody from "./QuizBody.js";
import Score from "./Score.js";
import SprintSettings from "./SprintSettings.js";
import SprintSummary from "./SprintSummary.js";
import SprintEnding from "./SprintEnding.js";
import Timer from "./Timer.js";
import "./App.css";

import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SprintArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getStarted: false,
      typeOfProblem: "addition",
      timeStarted: null,
      timeRemaining: null,
      lengthOfSprint: 60,
      difficulty: "easy",
      showSummary: false,
      postSprintSummary: false,
      numberCorrect: null,
      totalNumQuestions: null,
      answerList: []
    };

    this.getStarted = this.getStarted.bind(this);
    this.setQuestionType = this.setQuestionType.bind(this);
    this.setQuestionDifficulty = this.setQuestionDifficulty.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
    this.endSprint = this.endSprint.bind(this);
    this.retrySprint = this.retrySprint.bind(this);
    this.newSprint = this.newSprint.bind(this);
    this.setSprintLength = this.setSprintLength.bind(this);

  }


  getStarted(event) {
       event.preventDefault();
           this.setState({
                getStarted: true,
                timeStarted: Date.now(),
                startTime: Date.now(),
                timeRemaining: this.state.lengthOfSprint
           });
      console.log("getStarted - " + this.state.timeRemaining);
 }

 endSprint(event) {
          this.setState({
               getStarted: false,
               timeStarted: null,
               postSprintSummary: true,
          });
     console.log("endSprint");
}

retrySprint(event) {
     event.preventDefault();
         this.setState({
              getStarted: true,
              timeStarted: Date.now(),
              startTime: Date.now(),
              numberCorrect: null,
             totalNumQuestions: null,
             answerList: [],
              timeRemaining: this.state.lengthOfSprint
         });
    console.log("RETRY SPRINT");
}

newSprint(event) {
     event.preventDefault();
         this.setState({
              getStarted: false,
              numberCorrect: null,
             totalNumQuestions: null,
             answerList: [],
              timeRemaining: null,
              postSprintSummary: false,
         });
    console.log("NEW SPRINT");
}

  setQuestionType(event) {
    this.setState({
         typeOfProblem: event.value
     });
    console.log("setQuestionType");
  }

  setQuestionDifficulty(event) {
    this.setState({
         difficulty: event.value
     });
    console.log("setQuestionDifficulty");
  }

  setSprintLength(event) {
       this.setState({
           lengthOfSprint: event.value
       });
      console.log("setSprintLength");
 }

  answerSubmit(answerObj) {

       this.setState({ startTime: Date.now() });

    // alert("Quiz answerSubmit: " + JSON.stringify(answerObj));
    this.setState({ answerList: [...this.state.answerList, answerObj] }); //simple value
    this.setState(prevState => {
      return { totalNumQuestions: prevState.totalNumQuestions + 1 };
    });

    if (answerObj.isCorrect === true) {
      this.setState(prevState => {
        return { numberCorrect: prevState.numberCorrect + 1 };
      });
    }
  }




  render() {

       console.log(this.props.currentColorScheme);
       const currentColorScheme = this.props.currentColorScheme;

    if (this.state.getStarted === true) {
         console.log("getStarted - " + this.state.timeRemaining);

      return (
        <div className="clb-sprint-active">
        <Timer timeStarted={this.state.timeStarted} endSprint={this.endSprint} lengthOfSprint={this.state.lengthOfSprint} />
          <h2 className="quiz-active-message sprint">SPRINT: Complete the Question Below</h2>
          <div className="type-of-question">
            {this.state.difficulty} &middot; {this.state.typeOfProblem}
          </div>
          <QuizBody
            typeOfProblem={this.state.typeOfProblem}
            difficulty={this.state.difficulty}
            startTime={this.state.startTime}
            answerSubmit={this.answerSubmit}
            answerList={this.state.answerList}
          />
        </div>
      );
} else if (this.state.postSprintSummary === true) {
     return (
       <>
         <h3>SPRINT COMPLETE</h3>
         <Score
           numberCorrect={this.state.numberCorrect}
           totalNumQuestions={this.state.totalNumQuestions}
         />
         <SprintSummary
               answerList={this.state.answerList}
         />
         <SprintEnding
               startOver={this.props.startOver}
               retrySprint={this.retrySprint}
               newSprint={this.newSprint}
          />
       </>
     );
    } else {
      return (
        <>
          <div className="settings-container-sprints">
             <SprintSettings
               viewSettings={this.state.viewSettings}
               toggleViewSettings={this.offCanvasClick}
               setQuestionType={this.setQuestionType}
               setQuestionDifficulty={this.setQuestionDifficulty}
               typeOfProblem={this.state.typeOfProblem}
               difficulty={this.state.difficulty}
               setSprintLength={this.setSprintLength}
               startOver={this.startOver}
               resetColors={this.props.resetColors}
               currentColorScheme={currentColorScheme}
               changeColors={this.props.changeColors}
               startOver={this.props.startOver}
               />
             </div>
          <button onClick={this.getStarted} id="clb-lets-go">
            Start Now <FontAwesomeIcon icon={faFlagCheckered} />
          </button>
        </>
      );
    }
  }
}

export default SprintArea;
