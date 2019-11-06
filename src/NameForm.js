import React from "react";
import "./App.css";
import Welcome from "./Welcome";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         value: '',
         active: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
    // return (<Welcome userName={this.state.value} />);
    this.setState({active: false});

  }

  render() {
       if( this.state.active ) {
         return (
              <>
                <form onSubmit={this.handleSubmit}>
                  <label>
                  What's Your Name?
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
           <Welcome userName={this.state.value} />
           </>
         );
    } else {
         return (
              <>
                <Welcome userName={this.state.value} />
                </>
         );
    }
  }
}

export default NameForm;
