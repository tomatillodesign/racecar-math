import React from "react";
import "./App.css";

const Welcome = (props) => {

     if( !props.userName ) {

       return (
         <div className="clb-welcome-area blank">
           <p></p>
         </div>
       );

      } else {

           return (
             <div className="clb-welcome-area">
               <p>Welcome, {props.userName}</p>
             </div>
           );

     }

}

export default Welcome;
