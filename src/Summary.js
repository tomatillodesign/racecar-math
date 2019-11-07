import React from "react";
import "./App.css";

import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Summary(props) {

     //Previous Answers: {JSON.stringify(props.answerList)}

     const items = props.answerList.map((item, key) =>
          <div key={item.num1 + "-" + item.num2}>
               {item.completedProblem} | Your Answer: {item.answerSubmit}

               {item.isCorrect === true &&
                  <span className="summary-correct">
                    <FontAwesomeIcon icon={faCheckSquare} />
                  </span>
                }
                {item.isCorrect === false &&
                   <span className="summary-wrong">
                     <FontAwesomeIcon icon={faTimesCircle} />
                   </span>
                 }
          </div>);

     if(props.showSummary) {

            return (
              <div className="summary-area">
                <h3>Your Previous Answers</h3>
                <div className="summary">
                   {items}
               </div>
              </div>
            );

       } else {
            return (<div className="summary-hidden"></div>);
       }
}

export default Summary;
