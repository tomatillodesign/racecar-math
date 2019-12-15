import React from "react";
import "./App.css";

class QuizProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.millisToMinutesAndSeconds = this.millisToMinutesAndSeconds.bind(this);

  }


  millisToMinutesAndSeconds(millis) {
       var minutes = Math.floor(millis / 60000);
       var seconds = ((millis % 60000) / 1000).toFixed(1);
       return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    // alert("QuizProblem handleSubmit: " + this.state.value);

    const typeOfProblem = this.props.typeOfProblem;
    const streak = this.props.streak;
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


    const endTime = Date.now();
    const startTime = this.props.startTime;
    const elapsed = endTime - startTime;
    const formattedElapsed = this.millisToMinutesAndSeconds(elapsed);
    // console.log('ELAPSED: ' + formattedElapsed);

    const answer = {
      typeOfProblem,
      difficulty,
      num1,
      num2,
      problem,
      completedProblem,
      correctAnswer,
      answerSubmit,
      elapsed,
      formattedElapsed,
      isCorrect,
      streak
    };

    this.props.answerSubmit(answer);
    this.setState({ value: "" });

    //let end = Date.now();

    event.preventDefault();
  }

  componentDidUpdate(){
       //console.log('componentDidUpdate');
       this.refs.quizInput.focus();
     }

// componentDidMount() {
//      let start = Date.now();
//      console.log('Mounted / Start Time: ' + start);
// }

  render() {

    return (
      <div className="clb-quiz-problem-area">
        <div className="math-problem-numbers">{this.props.problem}</div>
        <form onSubmit={this.handleSubmit} id="math-answer-form">
          <label>
            Your Answer:
            <input
               ref="quizInput"
              type="number"
              min="0"
              step="1"
              pattern="[0-9]"
              autoFocus={true}
              value={this.state.value}
              onChange={this.handleChange}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default QuizProblem;
