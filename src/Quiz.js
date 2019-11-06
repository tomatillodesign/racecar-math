import React from "react";
import QuizBody from "./QuizBody.js";
import "./App.css";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         isActive: false,
         typeOfProblem: "addition",
         isTimed: false,
         difficulty: "medium",
         backgroundColors: "blue",
         showSummary: false,
         startOver: false,
         score: null,
         answerList: { }
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.answerSubmit = this.answerSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);


  }

  startQuiz(event) {
       event.preventDefault();
      this.setState({isActive: true});
      console.log('TEST startQuiz');
  }

  answerSubmit(event) {
       event.preventDefault();
      this.setState({
           answerList:
      });
      this.setState((prevState) => ({
               answerList: [...prevState.answerList, randomCard],
          }));
      console.log('TEST answerSubmit');
  }


  render() {
       if( this.state.isActive === true ) {

         return (

              <>
                <h2>Quiz Active</h2>
                <QuizBody
                    typeOfProblem={this.state.typeOfProblem}
                    difficulty={this.state.difficulty}
                    answerSubmit={this.state.answerSubmit}
               />
                </>

              );

         } else {

              return (

                  <>
                    <button onClick={this.startQuiz} >Start Quiz</button>
                    </>
               );
         }

  }
}





export default Quiz;
