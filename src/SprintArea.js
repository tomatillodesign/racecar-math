import React from "react";
import QuizBody from "./QuizBody.js";
import NameForm from "./NameForm.js";
import Score from "./Score.js";
import Summary from "./Summary.js";
import Timer from "./Timer.js";
import "./App.css";

import { faFlagCheckered, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SprintArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getStarted: false,
      typeOfProblem: "addition",
      timeStarted: null,
      lengthOfSprint: 60,
      difficulty: "easy",
      showSummary: true,
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

  }


  getStarted(event) {
       event.preventDefault();
           this.setState({
                getStarted: true,
                timeStarted: Date.now(),
           });
      console.log("getStarted");
 }

 endSprint(event) {
          this.setState({
               getStarted: false,
               timeStarted: null,
               postSprintSummary: true,
          });
     console.log("endSprint");
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
      return (
        <div className="clb-sprint-active">
        <Timer timeStarted={this.state.timeStarted} endSprint={this.endSprint}/>
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
          <Score
            numberCorrect={this.state.numberCorrect}
            totalNumQuestions={this.state.totalNumQuestions}
          />
          <Summary
           answerList={this.state.answerList}
           showSummary={this.state.showSummary}
          />
        </div>
      );
} else if (this.state.postSprintSummary === true) {
     return (
       <>
         <h3>SPRINT COMPLETE</h3>
       </>
     );
    } else {
      return (
        <>
          <NameForm />
          <button onClick={this.getStarted} id="clb-lets-go">
            Start Now <FontAwesomeIcon icon={faFlagCheckered} />
          </button>
        </>
      );
    }
  }
}

export default SprintArea;
