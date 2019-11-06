import React from "react";
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
    // event.preventDefault();
    // alert("QuizProblem handleSubmit: " + this.state.value);

    const typeOfProblem = this.props.typeOfProblem;
    const difficulty = this.props.difficulty;
    const num1 = this.props.num1;
    const num2 = this.props.num2;
    const problem = this.props.problem;
    const completedProblem = this.props.completedProblem;
    const correctAnswer = parseInt(this.props.answer);
    const answerSubmit = parseInt(this.state.value);
    var isCorrect = null;
    if (answerSubmit === correctAnswer) {
      isCorrect = true;
    } else {
      isCorrect = false;
    }

    const answer = {
      typeOfProblem,
      difficulty,
      num1,
      num2,
      problem,
      completedProblem,
      correctAnswer,
      answerSubmit,
      isCorrect
    };

    //alert("QuizProblem handleSubmit: " + this.state.value);
    //this.props.answerSubmit(this.state.value);
    this.props.answerSubmit(answer);
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {

    return (
      <div className="clb-quiz-problem-area">
        <p>{this.props.problem}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Answer:
            <input
              type="number"
              min="0"
              step="1"
              pattern="[0-9]"
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


export default QuizProblem;
