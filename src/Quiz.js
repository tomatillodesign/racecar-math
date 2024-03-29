import React from "react";
import QuizBody from "./QuizBody.js";
import QuizAlert from "./QuizAlert.js";
import Score from "./Score.js";
import Settings from "./Settings.js";
import Summary from "./Summary.js";
import SprintArea from "./SprintArea.js";
import "./App.css";

import { faFlagCheckered, faCog, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OffCanvas, OffCanvasMenu } from "react-offcanvas";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSprint: false,
      isActive: false,
      isMenuOpened: false,
      typeOfProblem: "addition",
      isTimed: false,
      difficulty: "easy",
      startTime: null,
      showSummary: false,
      numberCorrect: null,
      totalNumQuestions: null,
      streak: 0,
      answerList: []
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.startOver = this.startOver.bind(this);
    this.setQuestionType = this.setQuestionType.bind(this);
    this.setQuestionDifficulty = this.setQuestionDifficulty.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
    this.showSummarytoUser = this.showSummarytoUser.bind(this);
    this.hideSummaryfromUser = this.hideSummaryfromUser.bind(this);
    this.offCanvasClick = this.offCanvasClick.bind(this);
    this.startSprint = this.startSprint.bind(this);

  }



  startSprint(event) {
       event.preventDefault();
      this.setState({
           isSprint: true,
           startTime: Date.now(),
      });
      this.props.removeNameEntry();
      //console.log("startSprint");
 }

  startQuiz(event) {
    event.preventDefault();
    this.setState({
         isSprint: false,
         isActive: true,
         startTime: Date.now(),
    });
    this.props.removeNameEntry();
  }



  startOver(event) {
    event.preventDefault();
    this.props.resetColors(event);
    this.props.resetName(event);

    this.setState({
      isSprint: false,
      isActive: false,
      isMenuOpened: false,
      typeOfProblem: "addition",
      isTimed: false,
      difficulty: "easy",
      startTime: null,
      backgroundColors: "blue",
      showSummary: false,
      numberCorrect: null,
      totalNumQuestions: null,
      streak: 0,
      answerList: []
    });

    console.log("startOver");
  }

  setQuestionType(event) {
    this.setState({ typeOfProblem: event.value,
         startTime: Date.now()
     });
    console.log("setQuestionType");
  }

  setQuestionDifficulty(event) {
    this.setState({
         difficulty: event.value,
         startTime: Date.now()
     });
    console.log("setQuestionDifficulty");
  }

  showSummarytoUser(event) {
    event.preventDefault();
    this.setState({
         showSummary: true,
         startTime: Date.now()
     });
    console.log("showSummarytoUser");
  }

  hideSummaryfromUser(event) {
    event.preventDefault();
    this.setState({
         showSummary: false,
         startTime: Date.now()
     });
    console.log("hideSummaryfromUser");
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
        return {
             numberCorrect: prevState.numberCorrect + 1,
             streak: prevState.streak + 1,
             };
           });
     } else {

          this.setState(prevState => {
            return {
                 streak: 0,
            };
          });

     }
       }


  offCanvasClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }



  render() {

       const currentColorScheme = this.props.currentColorScheme;

    if (this.state.isActive === true) {
      return (
        <>
             <QuizAlert
                  streak={this.state.streak}
                  answerList={this.state.answerList}
                  numberCorrect={this.state.numberCorrect}
                  totalNumQuestions={this.state.totalNumQuestions}
             />
          <h2 className="quiz-active-message">Complete the Question Below</h2>
          <div className="type-of-question">
            {this.state.difficulty} &middot; {this.state.typeOfProblem}
          </div>

          <div className="clb-settings hidden">
             <button onClick={this.offCanvasClick}>
               <FontAwesomeIcon icon={faCog} /> Show Settings
             </button>
          </div>

          <OffCanvas
             width={400}
             transitionDuration={800}
             effect={"overlay"}
             isMenuOpened={this.state.isMenuOpened}
             position={"right"}
           >
             <OffCanvasMenu className="off-canvas-menu">
               <div className="settings-container">
                  <Settings
                    viewSettings={this.state.viewSettings}
                    toggleViewSettings={this.offCanvasClick}
                    setQuestionType={this.setQuestionType}
                    setQuestionDifficulty={this.setQuestionDifficulty}
                    typeOfProblem={this.state.typeOfProblem}
                    difficulty={this.state.difficulty}
                    showSummary={this.state.showSummary}
                    showSummarytoUser={this.showSummarytoUser}
                    hideSummaryfromUser={this.hideSummaryfromUser}
                    startOver={this.startOver}
                    resetColors={this.props.resetColors}
                    currentColorScheme={currentColorScheme}
                    changeColors={this.props.changeColors}
                  />
                  </div>
             </OffCanvasMenu>
      </OffCanvas>

          <QuizBody
            typeOfProblem={this.state.typeOfProblem}
            difficulty={this.state.difficulty}
            streak={this.state.streak}
            startTime={this.state.startTime}
            answerSubmit={this.answerSubmit}
            answerList={this.state.answerList}
          />
          <Score
            numberCorrect={this.state.numberCorrect}
            totalNumQuestions={this.state.totalNumQuestions}
          />
          <Summary
           answerList={this.state.answerList}
           showSummary={this.state.showSummary}
          />
        </>
      );
} else if (this.state.isSprint === true) {

     return (
       <>
          <div className="clb-sprint-area">
          <SprintArea
               resetColors={this.props.resetColors}
               currentColorScheme={currentColorScheme}
               changeColors={this.props.changeColors}
               startOver={this.startOver}
               numberCorrect={this.state.numberCorrect}
               totalNumQuestions={this.state.totalNumQuestions}
               startTime={this.state.startTime}
               startQuiz={this.startQuiz}
          />
         </div>
       </>
     );

} else {
      return (
        <>
          <button onClick={this.startQuiz} id="start-quiz">
            Practice Laps (Open Practice) <FontAwesomeIcon icon={faTools} />
          </button>
          <button onClick={this.startSprint} id="start-sprints">
            Race (Math Sprints) <FontAwesomeIcon icon={faFlagCheckered} />
          </button>
        </>
      );
    }
  }
}

export default Quiz;
