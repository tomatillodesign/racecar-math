import React from "react";
import "./App.css";

function NameForm(props) {

     const name = props.name;
     const handleNameSubmit = props.handleNameSubmit;
     const handleNameChange = props.handleNameChange;

     if( props.nameFormActive === true ) {

       return (
            <>
              <form id="name-form" onSubmit={handleNameSubmit} >
                <label>
                What's Your Name?
                  <input type="text" onChange={handleNameChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
         </>
       );

 } else if( (props.nameFormActive === false) && (name !== null) ) {

           return (
                 <>
                 <div className="clb-welcome-area">
                 <p>Welcome, {props.name}</p>
                 </div>
                   </>
           );

     } else {

          return <></>;

     }

}

export default NameForm;
