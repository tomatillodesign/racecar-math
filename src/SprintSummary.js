import React from "react";
import "./App.css";

import { faCheckSquare,
          faTimesCircle
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SprintSummary(props) {

     //Previous Answers: {JSON.stringify(props.answerList)}

     const items = props.answerList.map((item, index) =>
               <div className="single-answer" key={index} ><div className="question-number">Question {index+1}</div>
                    {item.isCorrect === true &&
                    <div className="single-answer-result correct">
                              <div className="correct-answer">{item.completedProblem}
                                 <span className="summary-correct">
                                   <FontAwesomeIcon icon={faCheckSquare} />
                                 </span>
                            </div>
                            </div>
                     }
                     {item.isCorrect === false &&
                          <div className="single-answer-result incorrect">
                               <div className="correct-answer">{item.completedProblem}
                             <span className="summary-wrong">
                               <FontAwesomeIcon icon={faTimesCircle} />
                             </span>
                        </div>
                        <div className="single-answer-user">Your Answer: {item.answerSubmit}</div>
                        </div>
                      }
               <div className="single-answer-user time-elapsed">Time {item.formattedElapsed}</div>
               </div>);


            return (
              <div className="summary-area">
                <h2>Your Answers</h2>
                <div className="summary">
                   {items}
               </div>
              </div>
            );

}

export default SprintSummary;
