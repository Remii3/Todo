(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(2),a=s.n(n),i=s(10),r=s.n(i),c=(s(15),s(5)),o=s(6),l=s(8),d=s(7),j=(s(16),s(17),s(0)),h=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Todo"})})},u=function(){return Object(j.jsx)("div",{children:"Made by Remigiusz Wo\u017aniak"})},b=s(4),k=s(3),O=s(1),f=(s(19),s(20),function(t){var e=t.tasks.normalTasks;switch(t.sortDirection?t.sort.current.value:"A-Z"){case"A-Z":e.sort((function(t,e){return t.title>e.title?1:-1}));break;case"Z-A":e.sort((function(t,e){return t.title<e.title?1:-1}));break;case"New-old":e.sort((function(t,e){return t.date>e.date?1:-1}));break;case"Old-new":e.sort((function(t,e){return t.date<e.date?1:-1}));break;default:return e.sort((function(t,e){return t.title>e.title?1:-1}))}var s=e.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)("button",{onClick:function(){return t.deleted(e.id,"notFinishedNormalTask")},children:"X"}),e.title]}),Object(j.jsx)("p",{children:e.date}),Object(j.jsx)("span",{children:e.description}),Object(j.jsx)("button",{onClick:function(){return t.finished(e.id,"FinishedNormalTask")},children:"Finish"})]},"li"+e.id)})}));return console.log(t.tasks),s}),p=function(t){var e=t.tasks.importantTasks;switch(t.sortDirection?t.sort.current.value:"A-Z"){case"A-Z":e.sort((function(t,e){return t.title>e.title?1:-1}));break;case"Z-A":e.sort((function(t,e){return t.title<e.title?1:-1}));break;case"New-old":e.sort((function(t,e){return t.date>e.date?1:-1}));break;case"Old-new":e.sort((function(t,e){return t.date<e.date?1:-1}));break;default:return e.sort((function(t,e){return t.title>e.title?1:-1}))}var s=e.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)("button",{onClick:function(){return t.deleted(e.id,"notFinishedImportantTask")},children:"X"}),e.title]}),Object(j.jsx)("p",{children:e.date}),Object(j.jsx)("span",{children:e.description}),Object(j.jsx)("button",{onClick:function(){return t.finished(e.id,"FinishedImportantTask")},children:"Finish"})]},"im"+e.id)})}));return console.log(t.tasks),s},x=function(t){var e=t.finishedTasks;switch(t.sortDirection?t.sort.current.value:"A-Z"){case"A-Z":e.sort((function(t,e){return t.title>e.title?1:-1}));break;case"Z-A":e.sort((function(t,e){return t.title<e.title?1:-1}));break;case"New-old":e.sort((function(t,e){return t.date>e.date?1:-1}));break;case"Old-new":e.sort((function(t,e){return t.date<e.date?1:-1}));break;default:return e.sort((function(t,e){return t.title>e.title?1:-1}))}var s=(new Date).toLocaleString();return e.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)("button",{onClick:function(){return t.deleted(e.id,"finished")},children:"X"}),e.title]}),Object(j.jsxs)("p",{children:[e.date," (Termination date: ",s,")"]}),Object(j.jsx)("span",{children:e.description})]},"fi"+e.id)})}))},m=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={currentId:0,currentTitle:"",currentDescription:"",currentDate:"",tasks:{normalTasks:[],importantTasks:[]},finishedTasks:[],importantTask:!1,sortDirection:!1},t.sortingMethodNormal=a.a.createRef(),t.sortingMethodImportant=a.a.createRef(),t.sortingMethodFinished=a.a.createRef(),t.handleSubmit=function(e){var s=t.state,n=s.currentId,a=s.currentTitle,i=s.currentDescription,r=s.currentDate,c=s.tasks,o=s.importantTask;e.preventDefault();var l={id:n,title:a,description:i,date:r};!1===o?t.setState((function(e){return{tasks:Object(O.a)(Object(O.a)({},e.tasks),{},{normalTasks:[].concat(Object(k.a)(c.normalTasks),[l])}),currentId:t.state.currentId+1}})):t.setState((function(e){return{tasks:Object(O.a)(Object(O.a)({},e.tasks),{},{importantTasks:[].concat(Object(k.a)(c.importantTasks),[l])}),currentId:t.state.currentId+1}}))},t.handleChange=function(e){var s=e.target.name;if("currentDate"===s){var n=e.target.value.slice(0,10)+" "+e.target.value.slice(12);t.setState(Object(b.a)({},s,n))}else t.setState(Object(b.a)({},s,e.target.value));"importantTask"===s&&e.target.checked?t.setState(Object(b.a)({},s,!0)):"importantTask"===s&&t.setState(Object(b.a)({},s,!1))},t.finishTaskHandle=function(e,s){if("FinishedNormalTask"===s){var n=t.state.tasks.normalTasks.findIndex((function(t){return t.id===e}));t.state.finishedTasks.push(t.state.tasks.normalTasks[n]),t.setState({finishedTasks:Object(k.a)(t.state.finishedTasks)}),t.state.tasks.normalTasks.splice(n,1),t.setState((function(e){return{tasks:Object(O.a)(Object(O.a)({},e.tasks),{},{normalTasks:Object(k.a)(t.state.tasks.normalTasks)})}}))}else{var a=t.state.tasks.importantTasks.findIndex((function(t){return t.id===e}));t.state.finishedTasks.push(t.state.tasks.importantTasks[a]),t.setState({finishedTasks:Object(k.a)(t.state.finishedTasks)}),t.state.tasks.importantTasks.splice(a,1),t.setState((function(e){return{tasks:Object(O.a)(Object(O.a)({},e.tasks),{},{importantTasks:Object(k.a)(t.state.tasks.importantTasks)})}}))}},t.deleteTaskHandle=function(e,s){if("finished"===s){var n=t.state.finishedTasks.findIndex((function(t){return t.id===e}));t.state.finishedTasks.splice(n,1),t.setState({finishedTasks:t.state.finishedTasks})}else if("notFinishedNormalTask"===s){var a=t.state.tasks.normalTasks.findIndex((function(t){return t.id===e}));t.state.tasks.normalTasks.splice(a,1),t.setState((function(e){return{tasks:Object(O.a)(Object(O.a)({},e.tasks),{},{normalTasks:Object(k.a)(t.state.tasks.normalTasks)})}}))}else{var i=t.state.tasks.importantTasks.findIndex((function(t){return t.id===e}));t.state.tasks.importantTasks.splice(i,1),t.setState((function(e){return{tasks:Object(O.a)(Object(O.a)({},e.tasks),{},{importantTasks:Object(k.a)(t.state.tasks.importantTasks)})}}))}},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.setState({sortDirection:!0})}},{key:"render",value:function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{className:"inputInfo",children:[Object(j.jsx)("h1",{children:"Enter information"}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Title:"})," ",Object(j.jsx)("input",{name:"currentTitle",type:"text",onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Description:"})," ",Object(j.jsx)("input",{name:"currentDescription",type:"text",onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"Date:"})," ",Object(j.jsx)("input",{name:"currentDate",type:"datetime-local",onChange:this.handleChange})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{className:"importantCheckbox",children:[Object(j.jsx)("span",{children:"Important:"})," ",Object(j.jsx)("input",{name:"importantTask",type:"checkbox",onChange:this.handleChange})]}),Object(j.jsx)("button",{children:"Add"})]})}),Object(j.jsxs)("div",{className:"normalTasks",children:[Object(j.jsxs)("h3",{children:["Todo tasks",Object(j.jsxs)("select",{ref:this.sortingMethodNormal,onChange:this.handleChange,children:[Object(j.jsx)("option",{value:"A-Z",selected:!0,children:"A-Z"}),Object(j.jsx)("option",{value:"Z-A",children:"Z-A"}),Object(j.jsx)("option",{value:"New-old",children:"New - old"}),Object(j.jsx)("option",{value:"Old-new",children:"Old - new"})]})]}),Object(j.jsx)("ul",{children:Object(j.jsx)(f,{className:"taskList",tasks:this.state.tasks,finished:this.finishTaskHandle,deleted:this.deleteTaskHandle,sort:this.sortingMethodNormal,sortDirection:this.state.sortDirection},"test")})]}),Object(j.jsxs)("div",{className:"importantTasks",children:[Object(j.jsxs)("h3",{children:["Important tasks"," ",Object(j.jsxs)("select",{ref:this.sortingMethodImportant,onChange:this.handleChange,children:[Object(j.jsx)("option",{value:"A-Z",selected:!0,children:"A-Z"}),Object(j.jsx)("option",{value:"Z-A",children:"Z-A"}),Object(j.jsx)("option",{value:"New-old",children:"New - old"}),Object(j.jsx)("option",{value:"Old-new",children:"Old - new"})]})]}),Object(j.jsx)("ul",{children:Object(j.jsx)(p,{className:"importantTaskList",tasks:this.state.tasks,finished:this.finishTaskHandle,deleted:this.deleteTaskHandle,sort:this.sortingMethodImportant,sortDirection:this.state.sortDirection},"test2")})]}),Object(j.jsxs)("div",{className:"finishedTasks",children:[Object(j.jsxs)("h3",{children:["Finished tasks",Object(j.jsxs)("select",{ref:this.sortingMethodFinished,onChange:this.handleChange,children:[Object(j.jsx)("option",{value:"A-Z",selected:!0,children:"A-Z"}),Object(j.jsx)("option",{value:"Z-A",children:"Z-A"}),Object(j.jsx)("option",{value:"New-old",children:"New - old"}),Object(j.jsx)("option",{value:"Old-new",children:"Old - new"})]})]}),Object(j.jsx)("ul",{children:Object(j.jsx)(x,{className:"finishedTasksList",finishedTasks:this.state.finishedTasks,deleted:this.deleteTaskHandle,sort:this.sortingMethodFinished,sortDirection:this.state.sortDirection})})]})]})}}]),s}(n.Component),T=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("header",{children:Object(j.jsx)(h,{})}),Object(j.jsx)("main",{children:Object(j.jsx)(m,{})}),Object(j.jsx)("footer",{children:Object(j.jsx)(u,{})})]})})}}]),s}(a.a.Component);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a1c271cd.chunk.js.map