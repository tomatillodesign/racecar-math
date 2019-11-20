import React from "react";
import QuizBody from "./QuizBody.js";
import Score from "./Score.js";
import Settings from "./Settings.js";
import Summary from "./Summary.js";
import NameForm from "./NameForm.js";
//import App from "./App.js";
import "./App.css";

import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      viewSettings: false,
      typeOfProblem: "addition",
      isTimed: false,
      difficulty: "medium",
      startTime: null,
      showSummary: false,
      numberCorrect: null,
      totalNumQuestions: null,
      answerList: []
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.startOver = this.startOver.bind(this);
    this.setQuestionType = this.setQuestionType.bind(this);
    this.setQuestionDifficulty = this.setQuestionDifficulty.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
    this.showSummarytoUser = this.showSummarytoUser.bind(this);
    this.hideSummaryfromUser = this.hideSummaryfromUser.bind(this);
    this.toggleViewSettings = this.toggleViewSettings.bind(this);

  }



  startQuiz(event) {
    event.preventDefault();
    this.setState({
         isActive: true,
         startTime: Date.now(),
    });
    console.log("startQuiz");
  }

  toggleViewSettings(event) {
    event.preventDefault();
    this.setState(prevState => ({
      viewSettings: !prevState.viewSettings
    }));
    console.log("toggleViewSettings");
  }

  startOver(event) {
    event.preventDefault();
    this.props.resetColors(event);

    this.setState({
      isActive: false,
      viewSettings: false,
      typeOfProblem: "addition",
      isTimed: false,
      difficulty: "medium",
      startTime: null,
      backgroundColors: "blue",
      showSummary: false,
      numberCorrect: null,
      totalNumQuestions: null,
      answerList: []
    });

    console.log("startOver");
  }

  setQuestionType(event) {
    this.setState({ typeOfProblem: event.value,
         startTime: Date.now()
     });
    //console.log(event);
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
        return { numberCorrect: prevState.numberCorrect + 1 };
      });
    }
  }

  render() {

       console.log(this.props.currentColorScheme);
       const currentColorScheme = this.props.currentColorScheme;

    if (this.state.isActive === true) {
      return (
        <>
          <NameForm />
          <Settings
            viewSettings={this.state.viewSettings}
            toggleViewSettings={this.toggleViewSettings}
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

          <h2 className="quiz-active-message">Complete the Question Below</h2>
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
    } else {
      return (
        <>
          <button onClick={this.startQuiz} id="start-quiz">
            Start Your Engines <FontAwesomeIcon icon={faFlagCheckered} />
          </button>
        </>
      );
    }
  }
}

export default Quiz;
