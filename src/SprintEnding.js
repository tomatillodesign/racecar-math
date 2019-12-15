import React from "react";
import "./App.css";

function SprintEnding(props) {

     //const test = props.test;

            return (
              <div className="sprint-ending-area">
                <h2>What do you want to do next?</h2>
                <button
                    id="sprint-retry"
                    onClick={props.retrySprint}
                    >
                    Retry the Same Sprint
               </button>

                <button
                    id="sprint-different-settings"
                    onClick={props.newSprint}
                    >
                    Do a Different Sprint
               </button>

               <button
                   id="switch-to-practice"
                   onClick={props.startQuiz}
                   >
                   Do Some Practice Laps
              </button>

                <button
                  onClick={e =>
                    window.confirm(
                      "Are you sure you want to start over? Your name and score will be erased from this page."
                    ) && props.startOver(e)
                  }
                >
                  Start Over
                </button>
              </div>
            );

}

export default SprintEnding;
