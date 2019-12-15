import React from "react";
import RacecarHeader from "./RacecarHeader";
import Quiz from "./Quiz";
import NameForm from "./NameForm.js";
import RacecarFooter from "./RacecarFooter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorScheme: { value: 'blue', label: 'Blue' },
      name: null,
      nameFormActive: true,
    };

    this.changeColors = this.changeColors.bind(this);
    this.resetColors = this.resetColors.bind(this);
    this.resetName = this.resetName.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.removeNameEntry = this.removeNameEntry.bind(this)

  }

  resetName(event) {
       this.setState({
            name: null,
            nameFormActive: true
       });
       console.log("RESET NAME");
 }

  changeColors(event) {
      console.log(event);
      this.setState({ colorScheme: event });
  }

  resetColors(event) {
       this.setState({
            colorScheme: { value: 'blue', label: 'Blue' }
       });
       console.log('RESET COLORS');
 }


 handleNameChange(event) {
     event.preventDefault();
     // console.log(event.target.value);
     this.setState({
          name: event.target.value
     });
 }


 handleNameSubmit(event) {
   event.preventDefault();
   this.setState({
        nameFormActive: false
   });
 }


 removeNameEntry() {
      this.setState({
           nameFormActive: false
      });
}

  render() {
    let appClasses = "App racecar-math " + this.state.colorScheme.value;

    //console.log('Current Name: ' + this.state.name);

    return (
      <div className={appClasses}>
        <RacecarHeader />
        <NameForm
            name={this.state.name}
            nameFormActive={this.state.nameFormActive}
            handleNameChange={this.handleNameChange}
            handleNameSubmit={this.handleNameSubmit}
        />
        <Quiz
               changeColors={this.changeColors}
               currentColorScheme={this.state.colorScheme.value}
               resetColors={this.resetColors}
               resetName={this.resetName}
               removeNameEntry={this.removeNameEntry}
          />
        <RacecarFooter />
      </div>
    );
  }
}

export default App;
