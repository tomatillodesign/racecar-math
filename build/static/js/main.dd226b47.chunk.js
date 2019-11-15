(this["webpackJsonpracecar-math-sprints"]=this["webpackJsonpracecar-math-sprints"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(14),l=a.n(s),r=(a(21),a(5),a(3)),o=a(4);var c=function(){return n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",null,"Racecar Math",n.a.createElement("span",{className:"header-icons"},n.a.createElement(o.a,{icon:r.a}))))},u=a(15),m=a(6),f=a(7),d=a(9),y=a(8),h=a(2),b=a(10),p=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(y.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.props.typeOfProblem,a=this.props.difficulty,i=this.props.num1,n=this.props.num2,s=this.props.problem,l=this.props.completedProblem,r=parseInt(this.props.answer),o=parseInt(this.state.value),c={typeOfProblem:t,difficulty:a,num1:i,num2:n,problem:s,completedProblem:l,correctAnswer:r,answerSubmit:o,isCorrect:o===r};this.props.answerSubmit(c),this.setState({value:""}),e.preventDefault()}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate"),this.refs.quizInput.focus()}},{key:"render",value:function(){return n.a.createElement("div",{className:"clb-quiz-problem-area"},n.a.createElement("div",{className:"math-problem-numbers"},this.props.problem),n.a.createElement("form",{onSubmit:this.handleSubmit,id:"math-answer-form"},n.a.createElement("label",null,"Your Answer:",n.a.createElement("input",{ref:"quizInput",type:"number",min:"0",step:"1",pattern:"[0-9]",autoFocus:!0,value:this.state.value,onChange:this.handleChange,required:!0})),n.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.a.Component);var v=function(e){var t=e.typeOfProblem,a=e.difficulty,i=e.answerSubmit,s=e.answerList,l=null,r=null,o=null,c=null,u=null;function m(e,t){return Math.floor(Math.random()*(t-e+1)+e)}if("addition"===t)"medium"===a?(r=m(10,100),o=m(10,100)):"easy"===a?(r=m(0,10),o=m(0,10)):"hard"===a&&(r=m(50,999),o=m(50,999)),l=r+" + "+o+" = ?",u=r+" + "+o+" = "+(c=r+o);else if("subtraction"===t)do{"medium"===a?(r=m(10,100),o=m(10,100)):"easy"===a?(r=m(0,10),o=m(0,10)):"hard"===a&&(r=m(50,999),o=m(50,999)),l=r+" - "+o+" = ?",u=r+" - "+o+" = "+(c=r-o)}while(c<=0);else if("multiplication"===t)"medium"===a?(r=m(5,15),o=m(5,15)):"easy"===a?(r=m(0,8),o=m(0,8)):"hard"===a&&(r=m(5,30),o=m(5,30)),l=r+" \xd7 "+o+" = ?",u=r+" \xd7 "+o+" = "+(c=r*o);else if("division"===t)do{"medium"===a?(r=m(5,150),o=m(2,15)):"easy"===a?(r=m(0,24),o=m(1,8)):"hard"===a&&(r=m(10,500),o=m(5,250)),l=r+" \xf7 "+o+" = ?",u=r+" \xf7 "+o+" = "+(c=r/o)}while(c-Math.floor(c)!==0||r===o);return console.log("answerList: "+JSON.stringify(s)),n.a.createElement("main",{className:"clb-quiz-body-area"},n.a.createElement(p,{typeOfProblem:t,difficulty:a,answerSubmit:i,num1:r,num2:o,answer:c,problem:l,completedProblem:u}))};var E=function(e){var t=Math.floor(e.numberCorrect/e.totalNumQuestions*100);return e.totalNumQuestions>0?n.a.createElement("h2",{className:"current-score"},"Score: ",t,"%"):null};var S=function(e){var t=e.typeOfProblem,a=n.a.createElement("button",{onClick:e.setTypeAddition,className:"type-of-problem addition"},"Addition"),i=n.a.createElement("button",{onClick:e.setTypeSub,className:"type-of-problem subtraction"},"Subtraction"),s=n.a.createElement("button",{onClick:e.setTypeMultiplication,className:"type-of-problem multiplication"},"Multiplication"),l=n.a.createElement("button",{onClick:e.setTypeDivision,className:"type-of-problem division"},"Divison");"addition"===t&&(a=n.a.createElement("button",{onClick:e.setTypeAddition,className:"type-of-problem addition active"},"Addition")),"subtraction"===t&&(i=n.a.createElement("button",{onClick:e.setTypeSub,className:"type-of-problem subtraction active"},"Subtraction")),"multiplication"===t&&(s=n.a.createElement("button",{onClick:e.setTypeMultiplication,className:"type-of-problem multiplication active"},"Multiplication")),"division"===t&&(l=n.a.createElement("button",{onClick:e.setTypeDivision,className:"type-of-problem division active"},"Division"));var c=e.difficulty,u=n.a.createElement("button",{onClick:e.setDifficultyEasy,className:"difficulty easy"},"Easy"),m=n.a.createElement("button",{onClick:e.setDifficultyMed,className:"difficulty med"},"Medium"),f=n.a.createElement("button",{onClick:e.setDifficultyHard,className:"difficulty hard"},"Hard");"easy"===c&&(u=n.a.createElement("button",{onClick:e.setDifficultyEasy,className:"difficulty easy active"},"Easy")),"medium"===c&&(m=n.a.createElement("button",{onClick:e.setDifficultyMed,className:"difficulty med active"},"Medium")),"hard"===c&&(f=n.a.createElement("button",{onClick:e.setDifficultyHard,className:"difficulty hard active"},"Hard"));var d=e.showSummary,y=n.a.createElement("button",{onClick:e.showSummarytoUser,className:"show-summary true"},"Yes"),h=n.a.createElement("button",{onClick:e.hideSummaryfromUser,className:"show-summary false"},"No");return!0===d&&(y=n.a.createElement("button",{onClick:e.showSummarytoUser,className:"show-summary true active"},"Yes")),!1===d&&(h=n.a.createElement("button",{onClick:e.hideSummaryfromUser,className:"show-summary false active"},"No")),!0===e.viewSettings?n.a.createElement("div",{className:"clb-settings revealed"},n.a.createElement("div",{className:"single-setting-area"},n.a.createElement("h3",null,"Type of Question"),a,i,s,l),n.a.createElement("div",{className:"single-setting-area"},n.a.createElement("h3",null,"Question Difficulty"),u,m,f),n.a.createElement("div",{className:"single-setting-area"},n.a.createElement("h3",null,"Show Summary of Results?"),y,h),n.a.createElement("div",{className:"single-setting-area start-over"},n.a.createElement("button",{onClick:function(t){return window.confirm("Are you sure you want to start over? Your name and score will be erased from this page.")&&e.startOver(t)}},"Start Over")),n.a.createElement("button",{onClick:e.toggleViewSettings,id:"hide-settings"},n.a.createElement(o.a,{icon:r.d})," Hide Settings")):n.a.createElement("div",{className:"clb-settings hidden"},n.a.createElement("button",{onClick:e.toggleViewSettings},n.a.createElement(o.a,{icon:r.d})," Show Settings"))};var w=function(e){var t=e.answerList.map((function(e,t){return n.a.createElement("div",{key:e.num1+"-"+e.num2,className:"single-answer-result"},n.a.createElement("div",{className:"correct-answer"},e.completedProblem,!0===e.isCorrect&&n.a.createElement("span",{className:"summary-correct"},n.a.createElement(o.a,{icon:r.b})),!1===e.isCorrect&&n.a.createElement("span",{className:"summary-wrong"},n.a.createElement(o.a,{icon:r.g}))),n.a.createElement("div",{className:"single-answer-user"},"Your Answer: ",e.answerSubmit))}));return e.showSummary?n.a.createElement("div",{className:"summary-area"},n.a.createElement("h3",null,"Your Previous Answers"),n.a.createElement("div",{className:"summary"},t)):n.a.createElement("div",{className:"summary-hidden"})},g=function(e){return e.userName?n.a.createElement("div",{className:"clb-welcome-area"},n.a.createElement("p",null,"Welcome, ",e.userName)):n.a.createElement("div",{className:"clb-welcome-area blank"},n.a.createElement("p",null))},N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(y.a)(t).call(this,e))).state={value:"",active:!0},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({active:!1})}},{key:"render",value:function(){return this.state.active?n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:this.handleSubmit,id:"name-form"},n.a.createElement("label",null,"What's Your Name?",n.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),n.a.createElement("input",{type:"submit",value:"Submit"})),n.a.createElement(g,{userName:this.state.value})):n.a.createElement(n.a.Fragment,null,n.a.createElement(g,{userName:this.state.value}))}}]),t}(n.a.Component),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(y.a)(t).call(this,e))).state={isActive:!1,viewSettings:!1,typeOfProblem:"addition",isTimed:!1,difficulty:"medium",backgroundColors:"blue",showSummary:!1,numberCorrect:null,totalNumQuestions:null,answerList:[]},a.startQuiz=a.startQuiz.bind(Object(h.a)(a)),a.startOver=a.startOver.bind(Object(h.a)(a)),a.answerSubmit=a.answerSubmit.bind(Object(h.a)(a)),a.showSummarytoUser=a.showSummarytoUser.bind(Object(h.a)(a)),a.hideSummaryfromUser=a.hideSummaryfromUser.bind(Object(h.a)(a)),a.setDifficultyEasy=a.setDifficultyEasy.bind(Object(h.a)(a)),a.setDifficultyMed=a.setDifficultyMed.bind(Object(h.a)(a)),a.setDifficultyHard=a.setDifficultyHard.bind(Object(h.a)(a)),a.setTypeAddition=a.setTypeAddition.bind(Object(h.a)(a)),a.setTypeSub=a.setTypeSub.bind(Object(h.a)(a)),a.setTypeMultiplication=a.setTypeMultiplication.bind(Object(h.a)(a)),a.setTypeDivision=a.setTypeDivision.bind(Object(h.a)(a)),a.toggleViewSettings=a.toggleViewSettings.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"startQuiz",value:function(e){e.preventDefault(),this.setState({isActive:!0}),console.log("startQuiz")}},{key:"toggleViewSettings",value:function(e){e.preventDefault(),this.setState((function(e){return{viewSettings:!e.viewSettings}})),console.log("toggleViewSettings")}},{key:"startOver",value:function(e){e.preventDefault(),this.setState({isActive:!1,viewSettings:!1,typeOfProblem:"addition",isTimed:!1,difficulty:"medium",backgroundColors:"blue",showSummary:!1,numberCorrect:null,totalNumQuestions:null,answerList:[]}),console.log("startOver")}},{key:"setTypeAddition",value:function(e){e.preventDefault(),this.setState({typeOfProblem:"addition"}),console.log("setTypeAddition")}},{key:"setTypeSub",value:function(e){e.preventDefault(),this.setState({typeOfProblem:"subtraction"}),console.log("setTypeSub")}},{key:"setTypeMultiplication",value:function(e){e.preventDefault(),this.setState({typeOfProblem:"multiplication"}),console.log("setTypeMultiplication")}},{key:"setTypeDivision",value:function(e){e.preventDefault(),this.setState({typeOfProblem:"division"}),console.log("setTypeDivision")}},{key:"setDifficultyEasy",value:function(e){e.preventDefault(),this.setState({difficulty:"easy"}),console.log("setDifficultyEasy")}},{key:"setDifficultyMed",value:function(e){e.preventDefault(),this.setState({difficulty:"medium"}),console.log("setDifficultyMed")}},{key:"setDifficultyHard",value:function(e){e.preventDefault(),this.setState({difficulty:"hard"}),console.log("setDifficultyHard")}},{key:"showSummarytoUser",value:function(e){e.preventDefault(),this.setState({showSummary:!0}),console.log("showSummarytoUser")}},{key:"hideSummaryfromUser",value:function(e){e.preventDefault(),this.setState({showSummary:!1}),console.log("hideSummaryfromUser")}},{key:"answerSubmit",value:function(e){this.setState({answerList:[].concat(Object(u.a)(this.state.answerList),[e])}),this.setState((function(e){return{totalNumQuestions:e.totalNumQuestions+1}})),!0===e.isCorrect&&this.setState((function(e){return{numberCorrect:e.numberCorrect+1}}))}},{key:"render",value:function(){return!0===this.state.isActive?n.a.createElement(n.a.Fragment,null,n.a.createElement(N,null),n.a.createElement(S,{viewSettings:this.state.viewSettings,toggleViewSettings:this.toggleViewSettings,setTypeAddition:this.setTypeAddition,setTypeSub:this.setTypeSub,setTypeMultiplication:this.setTypeMultiplication,setTypeDivision:this.setTypeDivision,setDifficultyEasy:this.setDifficultyEasy,setDifficultyMed:this.setDifficultyMed,setDifficultyHard:this.setDifficultyHard,typeOfProblem:this.state.typeOfProblem,difficulty:this.state.difficulty,showSummary:this.state.showSummary,showSummarytoUser:this.showSummarytoUser,hideSummaryfromUser:this.hideSummaryfromUser,startOver:this.startOver}),n.a.createElement("h2",{className:"quiz-active-message"},"Complete the Question Below"),n.a.createElement("div",{className:"type-of-question"},this.state.difficulty," \xb7 ",this.state.typeOfProblem),n.a.createElement(v,{typeOfProblem:this.state.typeOfProblem,difficulty:this.state.difficulty,answerSubmit:this.answerSubmit,answerList:this.state.answerList}),n.a.createElement(E,{numberCorrect:this.state.numberCorrect,totalNumQuestions:this.state.totalNumQuestions}),n.a.createElement(w,{answerList:this.state.answerList,showSummary:this.state.showSummary})):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:this.startQuiz,id:"start-quiz"},"Start Your Engines ",n.a.createElement(o.a,{icon:r.e})))}}]),t}(n.a.Component);var k=function(){return n.a.createElement("footer",{className:"clb-footer"},n.a.createElement("p",{className:"version"},"Version 0.4 - Nov 15, 2019"),n.a.createElement("p",null,"Made by Chris with",n.a.createElement("span",{className:"header-icons"},n.a.createElement(o.a,{icon:r.f}),n.a.createElement(o.a,{icon:r.c}))))};var D=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(c,null),n.a.createElement(O,null),n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.dd226b47.chunk.js.map