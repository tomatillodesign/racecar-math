import React from "react";
import "./App.css";

// get our fontawesome imports
import {
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RacecarHeader extends React.Component {

     constructor(props) {
         super(props);
         this.state = {
              timer: 0,
              showIcon: true,
         };
  }

componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
       this.setState(prevState => {
        return { timer: prevState.timer + 1 };
      });
  }

  render() {


       return (
         <header className="App-header">

         { this.state.timer <= 62 &&
             <div className="header-icons">
              <FontAwesomeIcon icon={faCarSide} />
             </div>
          }

           <a href="http://racecarmath.org/" onClick={e =>
            window.confirm(
               "Are you sure you want to start over? Your name and score will be erased from this page."
            )
           }><h1>Racecar Math</h1></a>
         </header>
       );
     }

}

export default RacecarHeader;
