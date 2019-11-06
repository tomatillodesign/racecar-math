import React from "react";
import "./App.css";

function Summary(props) {

     if(props.showSummary) {

            return (
              <div className="summary-area">
                <h3>Summary</h3>
                Previous Answers: {JSON.stringify(props.answerList)}
              </div>
            );

       } else {
            return (<div className="summary-hidden"></div>);
       }
}

export default Summary;
