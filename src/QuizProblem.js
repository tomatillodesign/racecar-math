import React from "react";
import Quiz from "./Quiz.js";
import QuizBody from "./QuizBody";
import "./App.css";

class QuizProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("QuizProblem handleSubmit: " + this.state.value);
    this.props.answerSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    console.log("THIS, NUM1: " + this.props.num1);

    return (
      <div className="clb-quiz-problem-area">
        <p>
          Quiz Question Here: {this.props.typeOfProblem} {this.props.difficulty}
        </p>
        <p>{this.props.problem}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Answer:
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// function QuizProblem(props) {
//
//
//      return (
//        <div className="clb-quiz-problem-area">
//          <p>
//            Quiz Question Here: {typeOfProblem} {difficulty}
//          </p>
//          <p>{problem}</p>
//          <form id="quiz-problem">
//            <label>Your Answer:</label>
//            <input type="number" />
//            <button onClick={props.answerSubmit}>Submit</button>
//          </form>
//        </div>
//      );
//
//
// }

export default QuizProblem;
