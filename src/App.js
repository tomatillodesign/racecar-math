import React from "react";
import RacecarHeader from "./RacecarHeader";
import Quiz from "./Quiz";
import RacecarFooter from "./RacecarFooter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorScheme: { value: 'blue', label: 'Blue' }
    };

    this.changeColors = this.changeColors.bind(this);
    this.resetColors = this.resetColors.bind(this);
  }

  changeColors(event) {
      console.log(event);
      this.setState({ colorScheme: event });
  }

  resetColors(event) {
       this.setState({ colorScheme: { value: 'blue', label: 'Blue' } });
       console.log('RESET COLORS');
 }

  render() {
    let appClasses = "App racecar-math " + this.state.colorScheme.value;

    return (
      <div className={appClasses}>
        <RacecarHeader />
        <Quiz changeColors={this.changeColors} currentColorScheme={this.state.colorScheme.value} resetColors={this.resetColors} />
        <RacecarFooter />
      </div>
    );
  }
}

export default App;
