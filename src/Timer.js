import React from "react";
import "./App.css";


class Timer extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           timeRemaining: props.lengthOfSprint
         };

         this.tick = this.tick.bind(this);

       }


     tick() {
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

          let color = 'regular';
          if( this.state.timeRemaining < 10 ) {
               color = 'red';
          }

            return (

                 <div className="timer-area">
                    <h2><span class="time-remaining-text">Time Remaining: </span><span class={"tick-number " + color}>{this.state.timeRemaining}</span></h2>
                 </div>

            );

       }
}

export default Timer;
