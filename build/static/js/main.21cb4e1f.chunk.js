(this["webpackJsonpracecar-math-sprints"]=this["webpackJsonpracecar-math-sprints"]||[]).push([[0],{105:function(e,t,a){e.exports=a(187)},110:function(e,t,a){},13:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(28),i=a.n(r),l=(a(110),a(4)),o=a(5),c=a(6),m=a(7),u=a(1),h=a(8),d=(a(13),a(11)),f=a(12);var p=function(){return s.a.createElement("header",{className:"App-header"},s.a.createElement("a",{href:"/"},s.a.createElement("h1",null,"Racecar Math",s.a.createElement("span",{className:"header-icons"},s.a.createElement(f.a,{icon:d.a})))))},v=a(29),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.millisToMinutesAndSeconds=a.millisToMinutesAndSeconds.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"millisToMinutesAndSeconds",value:function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(1);return t+":"+(a<10?"0":"")+a}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.typeOfProblem,a=this.props.streak,n=this.props.difficulty,s=this.props.num1,r=this.props.num2,i=this.props.problem,l=this.props.completedProblem,o=parseInt(this.props.answer),c=parseInt(this.state.value),m=null;m=c===o;var u=Date.now()-this.props.startTime,h={typeOfProblem:t,difficulty:n,num1:s,num2:r,problem:i,completedProblem:l,correctAnswer:o,answerSubmit:c,elapsed:u,formattedElapsed:this.millisToMinutesAndSeconds(u),isCorrect:m,streak:a};this.props.answerSubmit(h),this.setState({value:""});var d=Date.now();console.log("End Time: "+d),e.preventDefault()}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate"),this.refs.quizInput.focus()}},{key:"componentDidMount",value:function(){var e=Date.now();console.log("Mounted / Start Time: "+e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"clb-quiz-problem-area"},s.a.createElement("div",{className:"math-problem-numbers"},this.props.problem),s.a.createElement("form",{onSubmit:this.handleSubmit,id:"math-answer-form"},s.a.createElement("label",null,"Your Answer:",s.a.createElement("input",{ref:"quizInput",type:"number",min:"0",step:"1",pattern:"[0-9]",autoFocus:!0,value:this.state.value,onChange:this.handleChange,required:!0})),s.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(s.a.Component);var y=function(e){e.isSprint;var t=e.typeOfProblem,a=e.difficulty,n=e.answerSubmit,r=e.answerList,i=e.startTime,l=e.streak,o=r[r.length-1];console.log(o),console.log("startime: "+i);var c=null,m=null,u=null,h=null,d=null;function f(e,t){return Math.floor(Math.random()*(t-e+1)+e)}if("addition"===t)"medium"===a?(m=f(10,100),u=f(10,100)):"easy"===a?(m=f(0,10),u=f(0,10)):"hard"===a&&(m=f(50,999),u=f(50,999)),c=m+" + "+u+" = ?",d=m+" + "+u+" = "+(h=m+u);else if("subtraction"===t)do{"medium"===a?(m=f(10,100),u=f(10,100)):"easy"===a?(m=f(0,10),u=f(0,10)):"hard"===a&&(m=f(50,999),u=f(50,999)),c=m+" - "+u+" = ?",d=m+" - "+u+" = "+(h=m-u)}while(h<=0);else if("multiplication"===t)"medium"===a?(m=f(5,15),u=f(5,15)):"easy"===a?(m=f(0,8),u=f(0,8)):"hard"===a&&(m=f(5,30),u=f(5,30)),c=m+" \xd7 "+u+" = ?",d=m+" \xd7 "+u+" = "+(h=m*u);else if("division"===t&&"easy"===a)do{c=(m=f(0,24))+" \xf7 "+(u=f(1,8))+" = ?",d=m+" \xf7 "+u+" = "+(h=m/u)}while(h-Math.floor(h)!==0);else if("division"===t)do{"medium"===a?(m=f(5,150),u=f(2,15)):"hard"===a&&(m=f(10,500),u=f(5,250)),c=m+" \xf7 "+u+" = ?",d=m+" \xf7 "+u+" = "+(h=m/u)}while(h-Math.floor(h)!==0||m===u);return console.log("answerList: "+JSON.stringify(r)),s.a.createElement("main",{className:"clb-quiz-body-area"},s.a.createElement(b,{typeOfProblem:t,difficulty:a,startTime:i,answerSubmit:n,num1:m,num2:u,answer:h,problem:c,completedProblem:d,streak:l}))};var S=function(e){var t=null;return 3===e.streak?t=s.a.createElement("div",{className:"clb-quiz-alert"},s.a.createElement("div",{className:"success three"},"3 in a row! \ud83d\ude04")):4===e.streak?t=s.a.createElement("div",{className:"clb-quiz-alert"},s.a.createElement("div",{className:"success four"},"4 in a row! \ud83e\udd29")):5===e.streak?t=s.a.createElement("div",{className:"clb-quiz-alert"},s.a.createElement("div",{className:"success five"},"5 in a row! You're on fire! \ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25")):10===e.streak?t=s.a.createElement("div",{className:"clb-quiz-alert"},s.a.createElement("div",{className:"success ten"},"That's 10 in a row! \ud83e\udd73\ud83c\udf89\ud83d\udc4f",s.a.createElement("div",{className:"what-next"},"Are you ready for a bigger challenge?",s.a.createElement("br",null),"Use the settings to choose another type of problem or difficulty."))):20===e.streak&&(t=s.a.createElement("div",{className:"clb-quiz-alert"},s.a.createElement("div",{className:"success twenty"},"Too easy! That's 20 in a row! \ud83e\udd73\ud83e\udd73\ud83c\udf89\ud83c\udf89\ud83d\udc4f\ud83d\udc4f",s.a.createElement("div",{className:"what-next"},"Are you ready for a bigger challenge?",s.a.createElement("br",null),"Use the settings to choose another type of problem or difficulty.")))),e.totalNumQuestions>9&&e.numberCorrect<3&&(t=s.a.createElement("div",{className:"clb-quiz-alert"},s.a.createElement("div",{className:"failure"},"Looks like you're having a hard time. Would you like to try a different problem? Use the settings to change it up."))),s.a.createElement(s.a.Fragment,null,t)};var g=function(e){var t=Math.floor(e.numberCorrect/e.totalNumQuestions*100),a=0;return e.numberCorrect>0&&(a=e.numberCorrect),e.totalNumQuestions>0?s.a.createElement("div",{className:"score-area"},s.a.createElement("h2",{className:"current-score"},"Score: ",t,"%"),s.a.createElement("div",{className:"score-detail answered"},"Answered: ",e.totalNumQuestions),s.a.createElement("div",{className:"score-detail correct"},"Correct: ",a)):null},E=a(22);var w=function(e){var t=e.showSummary,a=s.a.createElement("button",{onClick:e.showSummarytoUser,className:"show-summary true"},"Yes"),n=s.a.createElement("button",{onClick:e.hideSummaryfromUser,className:"show-summary false"},"No");!0===t&&(a=s.a.createElement("button",{onClick:e.showSummarytoUser,className:"show-summary true active"},"Yes")),!1===t&&(n=s.a.createElement("button",{onClick:e.hideSummaryfromUser,className:"show-summary false active"},"No"));var r=[{value:"blue",label:"Blue"},{value:"pink",label:"Pink"},{value:"orange",label:"Orange"},{value:"green",label:"Green"}],i=r[0];"pink"===e.currentColorScheme&&(i=r[1]),"orange"===e.currentColorScheme&&(i=r[2]),"green"===e.currentColorScheme&&(i=r[3]);var l=[{value:"addition",label:"+ Addition"},{value:"subtraction",label:"\u2013 Subtraction"},{value:"multiplication",label:"\xd7 Multiplication"},{value:"division",label:"\xf7 Divison"}],o=l[0];"subtraction"===e.typeOfProblem&&(o=l[1]),"multiplication"===e.typeOfProblem&&(o=l[2]),"division"===e.typeOfProblem&&(o=l[3]);var c=[{value:"easy",label:"Easy"},{value:"medium",label:"Medium"},{value:"hard",label:"Hard"}],m=c[0];return"medium"===e.difficulty&&(m=c[1]),"hard"===e.difficulty&&(m=c[2]),s.a.createElement("div",{className:"clb-settings revealed"},s.a.createElement("div",{className:"single-setting-area colors"},s.a.createElement("h3",null,"Racecar Colors"),s.a.createElement(E.a,{options:r,defaultValue:i,onChange:e.changeColors,id:"choose-colors-select"})),s.a.createElement("div",{className:"single-setting-area question-types"},s.a.createElement("h3",null,"Type of Math"),s.a.createElement(E.a,{options:l,defaultValue:o,onChange:e.setQuestionType,id:"question-type-select"})),s.a.createElement("div",{className:"single-setting-area difficulty"},s.a.createElement("h3",null,"Difficulty"),s.a.createElement(E.a,{options:c,defaultValue:m,onChange:e.setQuestionDifficulty,id:"difficulty-select"})),s.a.createElement("div",{className:"single-setting-area"},s.a.createElement("h3",null,"Show Summary?"),a,n),s.a.createElement("div",{className:"single-setting-area start-over"},s.a.createElement("button",{onClick:function(t){return window.confirm("Are you sure you want to start over? Your name and score will be erased from this page.")&&e.startOver(t)}},"Start Over")),s.a.createElement("button",{onClick:e.toggleViewSettings,id:"hide-settings"},s.a.createElement(f.a,{icon:d.d})," Hide Settings"))};var N=function(e){var t=e.answerList.map((function(e,t){return s.a.createElement("div",{className:"single-answer",key:t},s.a.createElement("div",{className:"question-number"},"Question ",t+1),!0===e.isCorrect&&s.a.createElement("div",{className:"single-answer-result correct"},s.a.createElement("div",{className:"correct-answer"},e.completedProblem,s.a.createElement("span",{className:"summary-correct"},s.a.createElement(f.a,{icon:d.b})))),!1===e.isCorrect&&s.a.createElement("div",{className:"single-answer-result incorrect"},s.a.createElement("div",{className:"correct-answer"},e.completedProblem,s.a.createElement("span",{className:"summary-wrong"},s.a.createElement(f.a,{icon:d.g}))),s.a.createElement("div",{className:"single-answer-user"},"Your Answer: ",e.answerSubmit)),s.a.createElement("div",{className:"single-answer-user time-elapsed"},"Time ",e.formattedElapsed))}));return e.showSummary?s.a.createElement("div",{className:"summary-area"},s.a.createElement("h2",null,"Your Answers"),s.a.createElement("div",{className:"summary"},t)):s.a.createElement("div",{className:"summary-hidden"})};var C=function(e){var t=[{value:"blue",label:"Blue"},{value:"pink",label:"Pink"},{value:"orange",label:"Orange"},{value:"green",label:"Green"}],a=t[0];"pink"===e.currentColorScheme&&(a=t[1]),"orange"===e.currentColorScheme&&(a=t[2]),"green"===e.currentColorScheme&&(a=t[3]);var n=[{value:"addition",label:"+ Addition"},{value:"subtraction",label:"\u2013 Subtraction"},{value:"multiplication",label:"\xd7 Multiplication"},{value:"division",label:"\xf7 Divison"}],r=n[0];"subtraction"===e.typeOfProblem&&(r=n[1]),"multiplication"===e.typeOfProblem&&(r=n[2]),"division"===e.typeOfProblem&&(r=n[3]);var i=[{value:"easy",label:"Easy"},{value:"medium",label:"Medium"},{value:"hard",label:"Hard"}],l=i[0];"medium"===e.difficulty&&(l=i[1]),"hard"===e.difficulty&&(l=i[2]);var o=[{value:60,label:"1 Minute"},{value:90,label:"90 Seconds"},{value:120,label:"2 Minutes"}],c=o[0];return 90===e.difficulty&&(c=o[1]),120===e.difficulty&&(c=o[2]),s.a.createElement("div",{className:"clb-sprint-settings"},s.a.createElement("div",{className:"single-setting-area colors"},s.a.createElement("h3",null,"Racecar Colors"),s.a.createElement(E.a,{options:t,defaultValue:a,onChange:e.changeColors,id:"choose-colors-select"})),s.a.createElement("div",{className:"single-setting-area question-types"},s.a.createElement("h3",null,"Type of Math"),s.a.createElement(E.a,{options:n,defaultValue:r,onChange:e.setQuestionType,id:"question-type-select"})),s.a.createElement("div",{className:"single-setting-area difficulty"},s.a.createElement("h3",null,"Difficulty"),s.a.createElement(E.a,{options:i,defaultValue:l,onChange:e.setQuestionDifficulty,id:"difficulty-select"})),s.a.createElement("div",{className:"single-setting-area sprint-length"},s.a.createElement("h3",null,"Amount of Time"),s.a.createElement(E.a,{options:o,defaultValue:c,onChange:e.setSprintLength,id:"sprint-length"})),s.a.createElement("div",{className:"single-setting-area start-over"},s.a.createElement("button",{onClick:function(t){return window.confirm("Are you sure you want to start over? Your name and score will be erased from this page.")&&e.startOver(t)}},"Start Over")))};var O=function(e){var t=e.answerList.map((function(e,t){return s.a.createElement("div",{className:"single-answer",key:t},s.a.createElement("div",{className:"question-number"},"Question ",t+1),!0===e.isCorrect&&s.a.createElement("div",{className:"single-answer-result correct"},s.a.createElement("div",{className:"correct-answer"},e.completedProblem,s.a.createElement("span",{className:"summary-correct"},s.a.createElement(f.a,{icon:d.b})))),!1===e.isCorrect&&s.a.createElement("div",{className:"single-answer-result incorrect"},s.a.createElement("div",{className:"correct-answer"},e.completedProblem,s.a.createElement("span",{className:"summary-wrong"},s.a.createElement(f.a,{icon:d.g}))),s.a.createElement("div",{className:"single-answer-user"},"Your Answer: ",e.answerSubmit)),s.a.createElement("div",{className:"single-answer-user time-elapsed"},"Time ",e.formattedElapsed))}));return s.a.createElement("div",{className:"summary-area"},s.a.createElement("h2",null,"Your Answers"),s.a.createElement("div",{className:"summary"},t))};var k=function(e){return s.a.createElement("div",{className:"sprint-ending-area"},s.a.createElement("h2",null,"What do you want to do next?"),s.a.createElement("button",{id:"sprint-retry",onClick:e.retrySprint},"Retry the Same Sprint"),s.a.createElement("button",{id:"sprint-different-settings",onClick:e.newSprint},"Do a Different Sprint"),s.a.createElement("button",{onClick:function(t){return window.confirm("Are you sure you want to start over? Your name and score will be erased from this page.")&&e.startOver(t)}},"Start Over"))},T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={timeRemaining:e.lengthOfSprint},a.tick=a.tick.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"tick",value:function(){this.state.timeRemaining>0?this.setState((function(e){return{timeRemaining:e.timeRemaining-1}})):(console.log("TIMES UP"),this.props.endSprint(),clearInterval(this.interval))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.tick)}},{key:"render",value:function(){return s.a.createElement("div",{className:"timer-area"},s.a.createElement("h2",null,"Time Remaining: ",this.state.timeRemaining))}}]),t}(s.a.Component),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={getStarted:!1,typeOfProblem:"addition",timeStarted:null,timeRemaining:null,lengthOfSprint:60,difficulty:"easy",showSummary:!1,postSprintSummary:!1,numberCorrect:null,totalNumQuestions:null,answerList:[]},a.getStarted=a.getStarted.bind(Object(u.a)(a)),a.setQuestionType=a.setQuestionType.bind(Object(u.a)(a)),a.setQuestionDifficulty=a.setQuestionDifficulty.bind(Object(u.a)(a)),a.answerSubmit=a.answerSubmit.bind(Object(u.a)(a)),a.endSprint=a.endSprint.bind(Object(u.a)(a)),a.retrySprint=a.retrySprint.bind(Object(u.a)(a)),a.newSprint=a.newSprint.bind(Object(u.a)(a)),a.setSprintLength=a.setSprintLength.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getStarted",value:function(e){e.preventDefault(),this.setState({getStarted:!0,timeStarted:Date.now(),startTime:Date.now(),timeRemaining:this.state.lengthOfSprint}),console.log("getStarted - "+this.state.timeRemaining)}},{key:"endSprint",value:function(e){this.setState({getStarted:!1,timeStarted:null,postSprintSummary:!0}),console.log("endSprint")}},{key:"retrySprint",value:function(e){e.preventDefault(),this.setState({getStarted:!0,timeStarted:Date.now(),startTime:Date.now(),numberCorrect:null,totalNumQuestions:null,answerList:[],timeRemaining:this.state.lengthOfSprint}),console.log("RETRY SPRINT")}},{key:"newSprint",value:function(e){e.preventDefault(),this.setState({getStarted:!1,numberCorrect:null,totalNumQuestions:null,answerList:[],timeRemaining:null,postSprintSummary:!1}),console.log("NEW SPRINT")}},{key:"setQuestionType",value:function(e){this.setState({typeOfProblem:e.value}),console.log("setQuestionType")}},{key:"setQuestionDifficulty",value:function(e){this.setState({difficulty:e.value}),console.log("setQuestionDifficulty")}},{key:"setSprintLength",value:function(e){this.setState({lengthOfSprint:e.value}),console.log("setSprintLength")}},{key:"answerSubmit",value:function(e){this.setState({startTime:Date.now()}),this.setState({answerList:[].concat(Object(v.a)(this.state.answerList),[e])}),this.setState((function(e){return{totalNumQuestions:e.totalNumQuestions+1}})),!0===e.isCorrect&&this.setState((function(e){return{numberCorrect:e.numberCorrect+1}}))}},{key:"render",value:function(){console.log(this.props.currentColorScheme);var e=this.props.currentColorScheme;return!0===this.state.getStarted?(console.log("getStarted - "+this.state.timeRemaining),s.a.createElement("div",{className:"clb-sprint-active"},s.a.createElement(T,{timeStarted:this.state.timeStarted,endSprint:this.endSprint,lengthOfSprint:this.state.lengthOfSprint}),s.a.createElement("h2",{className:"quiz-active-message sprint"},"SPRINT: Complete the Question Below"),s.a.createElement("div",{className:"type-of-question"},this.state.difficulty," \xb7 ",this.state.typeOfProblem),s.a.createElement(y,{isSprint:!0,typeOfProblem:this.state.typeOfProblem,difficulty:this.state.difficulty,startTime:this.state.startTime,answerSubmit:this.answerSubmit,answerList:this.state.answerList}))):!0===this.state.postSprintSummary?s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"sprint-complete-message"},"You Completed Your Sprint ",s.a.createElement(f.a,{icon:d.b})),s.a.createElement(g,{numberCorrect:this.state.numberCorrect,totalNumQuestions:this.state.totalNumQuestions}),s.a.createElement(O,{answerList:this.state.answerList}),s.a.createElement(k,{startOver:this.props.startOver,retrySprint:this.retrySprint,newSprint:this.newSprint})):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"settings-container-sprints"},s.a.createElement(C,{viewSettings:this.state.viewSettings,toggleViewSettings:this.offCanvasClick,setQuestionType:this.setQuestionType,setQuestionDifficulty:this.setQuestionDifficulty,typeOfProblem:this.state.typeOfProblem,difficulty:this.state.difficulty,setSprintLength:this.setSprintLength,resetColors:this.props.resetColors,currentColorScheme:e,changeColors:this.props.changeColors,startOver:this.props.startOver})),s.a.createElement("button",{onClick:this.getStarted,id:"clb-lets-go"},"Start Now ",s.a.createElement(f.a,{icon:d.e})))}}]),t}(s.a.Component),j=a(69),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isSprint:!1,isActive:!1,isMenuOpened:!1,typeOfProblem:"addition",isTimed:!1,difficulty:"easy",startTime:null,showSummary:!1,numberCorrect:null,totalNumQuestions:null,streak:0,answerList:[]},a.startQuiz=a.startQuiz.bind(Object(u.a)(a)),a.startOver=a.startOver.bind(Object(u.a)(a)),a.setQuestionType=a.setQuestionType.bind(Object(u.a)(a)),a.setQuestionDifficulty=a.setQuestionDifficulty.bind(Object(u.a)(a)),a.answerSubmit=a.answerSubmit.bind(Object(u.a)(a)),a.showSummarytoUser=a.showSummarytoUser.bind(Object(u.a)(a)),a.hideSummaryfromUser=a.hideSummaryfromUser.bind(Object(u.a)(a)),a.offCanvasClick=a.offCanvasClick.bind(Object(u.a)(a)),a.startSprint=a.startSprint.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"startSprint",value:function(e){e.preventDefault(),this.setState({isSprint:!0,startTime:Date.now()}),console.log("startSprint")}},{key:"startQuiz",value:function(e){e.preventDefault(),this.setState({isSprint:!1,isActive:!0,startTime:Date.now()}),console.log("startQuiz")}},{key:"startOver",value:function(e){e.preventDefault(),this.props.resetColors(e),this.props.resetName(e),this.setState({isSprint:!1,isActive:!1,isMenuOpened:!1,typeOfProblem:"addition",isTimed:!1,difficulty:"easy",startTime:null,backgroundColors:"blue",showSummary:!1,numberCorrect:null,totalNumQuestions:null,streak:0,answerList:[]}),console.log("startOver")}},{key:"setQuestionType",value:function(e){this.setState({typeOfProblem:e.value,startTime:Date.now()}),console.log("setQuestionType")}},{key:"setQuestionDifficulty",value:function(e){this.setState({difficulty:e.value,startTime:Date.now()}),console.log("setQuestionDifficulty")}},{key:"showSummarytoUser",value:function(e){e.preventDefault(),this.setState({showSummary:!0,startTime:Date.now()}),console.log("showSummarytoUser")}},{key:"hideSummaryfromUser",value:function(e){e.preventDefault(),this.setState({showSummary:!1,startTime:Date.now()}),console.log("hideSummaryfromUser")}},{key:"answerSubmit",value:function(e){this.setState({startTime:Date.now()}),this.setState({answerList:[].concat(Object(v.a)(this.state.answerList),[e])}),this.setState((function(e){return{totalNumQuestions:e.totalNumQuestions+1}})),!0===e.isCorrect?this.setState((function(e){return{numberCorrect:e.numberCorrect+1,streak:e.streak+1}})):this.setState((function(e){return{streak:0}}))}},{key:"offCanvasClick",value:function(){this.setState({isMenuOpened:!this.state.isMenuOpened})}},{key:"render",value:function(){console.log(this.props.currentColorScheme);var e=this.props.currentColorScheme;return!0===this.state.isActive?s.a.createElement(s.a.Fragment,null,s.a.createElement(S,{streak:this.state.streak,answerList:this.state.answerList,numberCorrect:this.state.numberCorrect,totalNumQuestions:this.state.totalNumQuestions}),s.a.createElement("h2",{className:"quiz-active-message"},"Complete the Question Below"),s.a.createElement("div",{className:"type-of-question"},this.state.difficulty," \xb7 ",this.state.typeOfProblem),s.a.createElement("div",{className:"clb-settings hidden"},s.a.createElement("button",{onClick:this.offCanvasClick},s.a.createElement(f.a,{icon:d.d})," Show Settings")),s.a.createElement(j.OffCanvas,{width:400,transitionDuration:1e3,effect:"overlay",isMenuOpened:this.state.isMenuOpened,position:"right"},s.a.createElement(j.OffCanvasMenu,{className:"off-canvas-menu"},s.a.createElement("div",{className:"settings-container"},s.a.createElement(w,{viewSettings:this.state.viewSettings,toggleViewSettings:this.offCanvasClick,setQuestionType:this.setQuestionType,setQuestionDifficulty:this.setQuestionDifficulty,typeOfProblem:this.state.typeOfProblem,difficulty:this.state.difficulty,showSummary:this.state.showSummary,showSummarytoUser:this.showSummarytoUser,hideSummaryfromUser:this.hideSummaryfromUser,startOver:this.startOver,resetColors:this.props.resetColors,currentColorScheme:e,changeColors:this.props.changeColors})))),s.a.createElement(y,{typeOfProblem:this.state.typeOfProblem,difficulty:this.state.difficulty,streak:this.state.streak,startTime:this.state.startTime,answerSubmit:this.answerSubmit,answerList:this.state.answerList}),s.a.createElement(g,{numberCorrect:this.state.numberCorrect,totalNumQuestions:this.state.totalNumQuestions}),s.a.createElement(N,{answerList:this.state.answerList,showSummary:this.state.showSummary})):!0===this.state.isSprint?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"clb-sprint-area"},s.a.createElement(Q,{resetColors:this.props.resetColors,currentColorScheme:e,changeColors:this.props.changeColors,startOver:this.startOver,numberCorrect:this.state.numberCorrect,totalNumQuestions:this.state.totalNumQuestions,startTime:this.state.startTime}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:this.startQuiz,id:"start-quiz"},"Practice Laps (Open Practice) ",s.a.createElement(f.a,{icon:d.h})),s.a.createElement("button",{onClick:this.startSprint,id:"start-sprints"},"Race (Math Sprints) ",s.a.createElement(f.a,{icon:d.e})))}}]),t}(s.a.Component);var P=function(e){var t=e.handleNameSubmit,a=e.handleNameChange;return!0===e.nameFormActive?s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{id:"name-form",onSubmit:t},s.a.createElement("label",null,"What's Your Name?",s.a.createElement("input",{type:"text",onChange:a})),s.a.createElement("input",{type:"submit",value:"Submit"}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"clb-welcome-area"},s.a.createElement("p",null,"Welcome, ",e.name)))};var L=function(){return s.a.createElement("footer",{className:"clb-footer"},s.a.createElement("p",{className:"version"},"Version 0.7 - Nov 22, 2019"),s.a.createElement("p",null,"Made by Chris with",s.a.createElement("span",{className:"header-icons"},s.a.createElement(f.a,{icon:d.f}),s.a.createElement(f.a,{icon:d.c}))))},M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={colorScheme:{value:"blue",label:"Blue"},name:null,nameFormActive:!0},a.changeColors=a.changeColors.bind(Object(u.a)(a)),a.resetColors=a.resetColors.bind(Object(u.a)(a)),a.resetName=a.resetName.bind(Object(u.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(u.a)(a)),a.handleNameSubmit=a.handleNameSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"resetName",value:function(e){this.setState({name:null,nameFormActive:!0}),console.log("RESET NAME")}},{key:"changeColors",value:function(e){console.log(e),this.setState({colorScheme:e})}},{key:"resetColors",value:function(e){this.setState({colorScheme:{value:"blue",label:"Blue"}}),console.log("RESET COLORS")}},{key:"handleNameChange",value:function(e){e.preventDefault(),console.log(e.target.value),this.setState({name:e.target.value})}},{key:"handleNameSubmit",value:function(e){e.preventDefault(),this.setState({nameFormActive:!1})}},{key:"render",value:function(){var e="App racecar-math "+this.state.colorScheme.value;return s.a.createElement("div",{className:e},s.a.createElement(p,null),s.a.createElement(P,{name:this.state.name,nameFormActive:this.state.nameFormActive,handleNameChange:this.handleNameChange,handleNameSubmit:this.handleNameSubmit}),s.a.createElement(D,{changeColors:this.changeColors,currentColorScheme:this.state.colorScheme.value,resetColors:this.resetColors,resetName:this.resetName}),s.a.createElement(L,null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[105,1,2]]]);
//# sourceMappingURL=main.21cb4e1f.chunk.js.map