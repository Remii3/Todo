(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(9),i=a.n(c),r=a(1),l=a(3),o=(a(14),a(0)),d=function(){return Object(o.jsx)("footer",{id:"footer",children:Object(o.jsx)("p",{className:"footer_title",children:"Made by Remigiusz Wo\u017aniak"})})},j=(a(16),function(){return Object(o.jsx)("header",{id:"header",children:Object(o.jsx)("h1",{className:"header_title",children:"Todo"})})}),u=a(7),m=(a(17),a(4)),k=function(e,t,a){var n=Object(s.useState)({title:!1,date:!1,desc:!1}),c=Object(l.a)(n,2),i=c[0],r=c[1];return{titleCheck:""===e.trim()&&i.title,dateCheck:t.slice(0,10)<(new Date).toISOString().slice(0,10)&&i.date,descCheck:""===a.trim()&&i.desc,titleBlurHandler:function(){r(Object(m.a)(Object(m.a)({},i),{},{title:!0}))},dateBlurHandler:function(){r(Object(m.a)(Object(m.a)({},i),{},{date:!0}))},descBlurHandler:function(){r(Object(m.a)(Object(m.a)({},i),{},{desc:!0}))}}},b=(a(18),function(e){var t=e.submitHandler,a=e.changeHandler,s=e.titleCheck,n=e.dateCheck,c=e.descCheck,i=e.titleBlurHandler,r=e.dateBlurHandler,l=e.descBlurHandler;return Object(o.jsx)("div",{className:"taskFormSpace",children:Object(o.jsxs)("form",{onSubmit:t,className:"taskFormSpace_taskForm",children:[Object(o.jsx)("h1",{className:"taskForm_title",children:"Enter information"}),Object(o.jsxs)("div",{className:"taskForm_informationSpace",children:[Object(o.jsx)("label",{className:"informationSpace_title",children:"Title:"})," ",Object(o.jsx)("input",{className:"informationSpace_input",name:"currentTitle",type:"text",onChange:a,onBlur:i})]}),s&&Object(o.jsx)("p",{className:"taskForm_errorMessage",children:"Please provide title."}),Object(o.jsxs)("div",{className:"taskForm_informationSpace",children:[Object(o.jsx)("label",{className:"informationSpace_title",children:"Date:"})," ",Object(o.jsx)("input",{className:"informationSpace_input informationSpace_input-date",name:"currentDate",type:"datetime-local",onChange:a,onBlur:r})]}),n&&Object(o.jsx)("p",{className:"taskForm_errorMessage",children:"Please select future date."}),Object(o.jsxs)("div",{className:"taskForm_informationSpace",children:[Object(o.jsx)("label",{className:"informationSpace_title",children:"Description:"})," ",Object(o.jsx)("textarea",{className:"informationSpace_input",name:"currentDescription",rows:8,onChange:a,onBlur:l})]}),c&&Object(o.jsx)("p",{className:"taskForm_errorMessage",children:"Please provide description."}),Object(o.jsxs)("div",{className:"taskForm_informationSpace",children:[Object(o.jsx)("label",{className:"informationSpace_title",children:"Important:"})," ",Object(o.jsx)("input",{className:"informationSpace_input informationSpace_input-importantCheckbox",name:"importantTask",type:"checkbox",onChange:a})]}),Object(o.jsx)("div",{className:"taskForm_buttonSpace",children:Object(o.jsx)("button",{type:"submit",className:"buttonSpace_button",children:"Submit"})})]})})}),p=function(e){var t=e.addTaskHandler,a=Object(s.useState)(0),n=Object(l.a)(a,2),c=n[0],i=n[1],r=Object(s.useState)(""),d=Object(l.a)(r,2),j=d[0],u=d[1],m=Object(s.useState)(""),p=Object(l.a)(m,2),h=p[0],O=p[1],f=Object(s.useState)(""),T=Object(l.a)(f,2),x=T[0],S=T[1],N=Object(s.useState)(!1),_=Object(l.a)(N,2),v=_[0],H=_[1],g=k(j,x,h),C=g.titleCheck,D=g.dateCheck,I=g.descCheck,B=g.titleBlurHandler,F=g.dateBlurHandler,A=g.descBlurHandler;return Object(o.jsx)(b,{submitHandler:function(e){if(e.preventDefault(),!(C||D||I)){var a={id:c,title:j,description:h,date:x};!1===v?(t(a,!1),i((function(e){return e+1}))):(t(a,!0),i((function(e){return e+1})))}},changeHandler:function(e){var t=e.target.name;if("currentDate"===t){var a=e.target.value.slice(0,10),s=e.target.value.slice(11);S(a+" "+s)}else"currentTitle"===t?u(e.target.value):"currentDescription"===t&&O(e.target.value);"importantTask"===t&&e.target.checked?H(!0):"importantTask"===t&&H(!1)},titleCheck:C,dateCheck:D,descCheck:I,titleBlurHandler:B,dateBlurHandler:F,descBlurHandler:A})},h=function(e,t,a){switch(e?a.current.value:"A-Z"){case"A-Z":return t.sort((function(e,t){return e.title>t.title?1:-1}));case"Z-A":return t.sort((function(e,t){return e.title<t.title?1:-1}));case"New-old":return t.sort((function(e,t){return e.date>t.date?1:-1}));case"Old-new":return t.sort((function(e,t){return e.date<t.date?1:-1}));default:return t.sort((function(e,t){return e.title>t.title?1:-1}))}},O=(a(19),function(e){var t=e.sortDirection,a=e.sort,s=e.tasks,n=e.type,c=s.normalTasks;"IMPORTANT"===n?c=s.importantTasks:"FINISHED"===n&&(c=s.finishedTasks);var i=(new Date).toLocaleString();return h(t,c,a).map((function(t){return Object(o.jsxs)("li",{className:"taskList_task",children:[Object(o.jsx)("h4",{className:"task_title",children:t.title}),Object(o.jsx)("p",{className:"task_date",children:t.date}),"FINISHED"===n&&Object(o.jsxs)("p",{className:"task_date",children:["(Termination date: ",i,")"]}),Object(o.jsx)("p",{className:"task_description",children:t.description}),Object(o.jsxs)("div",{className:"task_buttonSpace",children:[Object(o.jsx)("button",{className:"buttonSpace_deleteButton",onClick:function(){return e.deleted(t.id,n)},children:"Delete"}),"FINISHED"!==n&&Object(o.jsx)("button",{className:"buttonSpace_finishButton",onClick:function(){return e.finished(t.id,n)},children:"Finish"})]})]},n.slice(0,3)+t.id)}))}),f=(a(20),function(e){var t=e.sortingMethod,a=e.changeHandler;return Object(o.jsxs)("select",{ref:t,onChange:a,className:"sortList",defaultValue:"A-Z",children:[Object(o.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(o.jsx)("option",{value:"Z-A",children:"Z-A"}),Object(o.jsx)("option",{value:"New-old",children:"New - old"}),Object(o.jsx)("option",{value:"Old-new",children:"Old - new"})]})}),T=function(e){var t=e.tasks,a=e.finishTaskHandle,n=e.deleteTaskHandle,c=e.addTaskHandler,i=e.taskTypes,r=Object(s.useState)(!1),d=Object(l.a)(r,2),j=d[0],m=d[1],k=Object(s.useRef)(""),b=Object(s.useRef)(""),h=Object(s.useRef)("");Object(s.useEffect)((function(){m({sortDirection:!0})}),[]);var T=function(e){var t=e.target.name;m(Object(u.a)({},t,e.target.value))};return Object(o.jsxs)("main",{id:"mainSection",children:[Object(o.jsx)(p,{addTaskHandler:c}),Object(o.jsxs)("section",{className:"mainSection_taskSpace",children:[Object(o.jsxs)("div",{className:"taskSpace_titleAndSortSpace",children:[Object(o.jsx)("h3",{className:"titleAndSortSpace_title",children:"Todo tasks"}),Object(o.jsx)(f,{sortingMethod:k,changeHandler:T})]}),Object(o.jsx)("div",{className:"taskSpace_taskListSpace",children:Object(o.jsx)("ul",{className:"taskListSpace_taskList",children:Object(o.jsx)(O,{type:i.normal,tasks:t,finished:a,deleted:n,sort:k,sortDirection:j})})})]}),Object(o.jsxs)("section",{className:"mainSection_taskSpace",children:[Object(o.jsxs)("div",{className:"taskSpace_titleAndSortSpace",children:[Object(o.jsx)("h3",{className:"titleAndSortSpace_Title",children:"Important tasks"}),Object(o.jsx)(f,{sortingMethod:b,changeHandler:T})]}),Object(o.jsx)("div",{className:"taskSpace_taskListSpace",children:Object(o.jsx)("ul",{className:"taskListSpace_taskList",children:Object(o.jsx)(O,{type:i.important,tasks:t,finished:a,deleted:n,sort:b,sortDirection:j})})})]}),Object(o.jsxs)("section",{className:"mainSection_taskSpace",children:[Object(o.jsxs)("div",{className:"taskSpace_titleAndSortSpace",children:[Object(o.jsx)("h3",{className:"titleAndSortSpace_Title",children:"Finished tasks"}),Object(o.jsx)(f,{sortingMethod:h,changeHandler:T})]}),Object(o.jsx)("div",{className:"taskSpace_taskListSpace",children:Object(o.jsx)("ul",{className:"taskListSpace_taskList",children:Object(o.jsx)(O,{type:i.finished,tasks:t,deleted:n,sort:h,sortDirection:j})})})]})]})},x=(a(21),function(){var e=Object(s.useState)({normalTasks:[],importantTasks:[],finishedTasks:[]}),t=Object(l.a)(e,2),a=t[0],n=t[1],c={normal:"NORMAL",important:"IMPORTANT",finished:"FINISHED"};return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(j,{}),Object(o.jsx)(T,{taskTypes:c,tasks:a,finishTaskHandle:function(e,t){if(t===c.normal){var s=a.normalTasks.findIndex((function(t){return t.id===e}));a.finishedTasks.push(a.normalTasks[s]),a.normalTasks.splice(s,1),n((function(e){return{normalTasks:Object(r.a)(a.normalTasks),importantTasks:Object(r.a)(e.importantTasks),finishedTasks:Object(r.a)(e.finishedTasks)}}))}else if(t===c.important){var i=a.importantTasks.findIndex((function(t){return t.id===e}));a.finishedTasks.push(a.importantTasks[i]),a.importantTasks.splice(i,1),n((function(e){return{normalTasks:Object(r.a)(e.normalTasks),importantTasks:Object(r.a)(a.importantTasks),finishedTasks:Object(r.a)(e.finishedTasks)}}))}},deleteTaskHandle:function(e,t){var s;switch(t){case c.finished:s=a.finishedTasks.findIndex((function(t){return t.id===e})),a.finishedTasks.splice(s,1),n((function(e){return{normalTasks:Object(r.a)(a.normalTasks),importantTasks:Object(r.a)(e.importantTasks),finishedTasks:Object(r.a)(e.finishedTasks)}}));break;case c.normal:s=a.normalTasks.findIndex((function(t){return t.id===e})),a.normalTasks.splice(s,1),n((function(e){return{normalTasks:Object(r.a)(a.normalTasks),importantTasks:Object(r.a)(e.importantTasks),finishedTasks:Object(r.a)(e.finishedTasks)}}));break;case c.important:s=a.importantTasks.findIndex((function(t){return t.id===e})),a.importantTasks.splice(s,1),n((function(e){return{normalTasks:Object(r.a)(e.normalTasks),importantTasks:Object(r.a)(a.importantTasks),finishedTasks:Object(r.a)(e.finishedTasks)}}));break;default:n((function(e){return{normalTasks:Object(r.a)(e.normalTasks),importantTasks:Object(r.a)(e.importantTasks),finishedTasks:Object(r.a)(e.finishedTasks)}}))}},addTaskHandler:function(e,t){!1===t?n((function(t){return{normalTasks:[].concat(Object(r.a)(a.normalTasks),[e]),importantTasks:Object(r.a)(t.importantTasks),finishedTasks:Object(r.a)(t.finishedTasks)}})):!0===t&&n((function(t){return{normalTasks:Object(r.a)(t.normalTasks),importantTasks:[].concat(Object(r.a)(a.importantTasks),[e]),finishedTasks:Object(r.a)(t.finishedTasks)}}))}}),Object(o.jsx)(d,{})]})});i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.dc2f36e1.chunk.js.map