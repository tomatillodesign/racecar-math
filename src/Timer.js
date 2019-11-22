import React from "react";
import "./App.css";

//import Countdown from 'react-countdown-now';

class Timer extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           timeRemaining: props.lengthOfSprint
         };


         this.endSprint = this.endSprint.bind(this);
         this.tick = this.tick.bind(this);

       }


     endSprint() {
          this.props.endSprint();
     }


     tick() {
          // if( this.state.timeRemaining === 0 ) {
          //      console.log('TIMES UP');
          //      this.props.endSprint();
          // }
          // this.setState(prevState => ({
          //   timeRemaining: prevState.timeRemaining - 1
          // }));
          if(this.state.timeRemaining > 0) {
                this.setState(prevState => ({
                  timeRemaining: prevState.timeRemaining - 1
                }))
              } else {
                   console.log('TIMES UP');
                   this.props.endSprint();
                clearInterval(this.interval);
              }
        }

     componentDidMount() {
       this.interval = setInterval(() => this.tick(), 1000);
     }

     componentWillUnmount() {
          clearInterval(this.tick);
     }

     render() {

          const timeStarted = this.props.timeStarted;
          const endSprint = this.props.endSprint;

          let timeRemaining = Date.now() - timeStarted;

            return (

                 <div className="timer-area">
                    <h2>Time Remaining: {this.state.timeRemaining}</h2>
                 </div>

            );

       }
}

export default Timer;
