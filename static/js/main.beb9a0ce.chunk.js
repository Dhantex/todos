(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(5),a=c.n(r),s=(c(12),c(4)),i=c(2);var l=c(0),d=Object(n.createContext)();function u(e){var t=function(e,t){var c=Object(n.useState)(!0),o=Object(i.a)(c,2),r=o[0],a=o[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),d=l[0],u=l[1],j=Object(n.useState)(t),b=Object(i.a)(j,2),O=b[0],m=b[1];return Object(n.useEffect)((function(){setTimeout((function(){try{var c,n=localStorage.getItem(e);n?c=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),c=[]),m(c),a(!1)}catch(d){u(d)}}),1e3)})),{item:O,saveItem:function(t){try{var c=JSON.stringify(t);localStorage.setItem(e,c),m(t)}catch(d){u(d)}},loading:r,error:d}}("TODOS_V1",[]),c=t.item,o=t.saveItem,r=t.loading,a=t.error,u=Object(n.useState)(""),j=Object(i.a)(u,2),b=j[0],O=j[1],m=Object(n.useState)(!1),x=Object(i.a)(m,2),h=x[0],f=x[1],p=c.filter((function(e){return!!e.completed})).length,v=c.length,g=c.filter((function(e){return e.text.toLowerCase().includes(b.toLowerCase())}));return Object(l.jsx)(d.Provider,{value:{totalTodos:v,completedTodos:p,searchValue:b,setSearchValue:O,searchedTodos:g,completeTodoItem:function(e){var t=c.findIndex((function(t){return t.id===e})),n=Object(s.a)(c);n[t].completed=!n[t].completed,o(n)},deleteTodoItem:function(e){var t=c.findIndex((function(t){return t.id===e})),n=Object(s.a)(c);n.splice(t,1),o(n)},AddTodoItem:function(e){var t=c.findIndex((function(t){return t.text===e}));if(console.log("AddTodoItem: ".concat(t)),-1===t){var n=Math.max.apply(Math,Object(s.a)(c))+1,r=Object(s.a)(c);r.push({id:n,text:e,completed:!1}),o(r)}},loading:r,error:a,openModal:h,setOpenModal:f},children:e.children})}c(14);function j(){var e=Object(n.useContext)(d),t=e.totalTodos,c=e.completedTodos;return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",c," de ",t," TODO"]})})}c(15);function b(){var e=Object(n.useContext)(d),t=e.searchValue,c=e.setSearchValue;return Object(l.jsx)("input",{className:"TodoSearch",placeholder:"Ingresa to TODO",onChange:function(e){console.log(e.target.value),c(e.target.value)},value:t})}c(16);function O(e){return Object(l.jsx)("section",{children:e.children})}c(17);function m(e){var t=e.setOpenModal;return Object(l.jsx)("button",{className:"CreateTodoButton",onClick:function(){t((function(e){return!e}))},children:"+"})}c(18);function x(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(l.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}c(19);function h(e){var t=e.children;return a.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}c(20);function f(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],o=t[1],r=Object(n.useContext)(d),a=r.AddTodoItem,s=r.setOpenModal,u=function(e){e.preventDefault(),a(c),s(!1)};return Object(l.jsxs)("form",{onSubmit:u,children:[Object(l.jsx)("label",{children:"Agrega un nuevo TODO"}),Object(l.jsx)("textarea",{value:c,onChange:function(e){o(e.target.value)},name:"ToDo",placeholder:"Ingresa tu nuevo ToDo"}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{className:"TodoForm-button TodoForm-button--cancel",onClick:function(){s(!1)},type:"button",children:"Cancelar"}),Object(l.jsx)("button",{className:"TodoForm-button TodoForm-button--add",onClick:u,type:"submit",children:"A\xf1adir"})]})]})}c(21);function p(){return Object(l.jsx)("article",{class:"container",children:Object(l.jsxs)("div",{class:"background",children:[Object(l.jsxs)("div",{class:"left",children:[Object(l.jsx)("div",{class:"image"}),Object(l.jsx)("div",{class:"mask thick"})]}),Object(l.jsxs)("div",{class:"right",children:[Object(l.jsx)("div",{class:"bar"}),Object(l.jsx)("div",{class:"mask thick"}),Object(l.jsx)("div",{class:"bar"}),Object(l.jsx)("div",{class:"mask thin"}),Object(l.jsx)("div",{class:"bar medium"}),Object(l.jsx)("div",{class:"mask thick"}),Object(l.jsx)("div",{class:"bar small"})]})]})})}function v(e){e.error;return Object(l.jsx)("p",{children:"Ocurri\xf3 un error en la aplicaci\xf3n..."})}function g(){return Object(l.jsx)("p",{children:"!Crea tu primer TODO!"})}function T(){var e=Object(n.useContext)(d),t=e.error,c=e.loading,r=e.searchedTodos,a=e.completeTodoItem,s=e.deleteTodoItem,i=e.openModal,u=e.setOpenModal;return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{}),Object(l.jsxs)(O,{children:[t&&Object(l.jsx)(v,{error:t}),c&&Object(l.jsx)(p,{}),!c&&!r.length&&Object(l.jsx)(g,{}),r.map((function(e){return Object(l.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return a(e.id)},onDelete:function(){return s(e.id)}},e.id)}))]}),!!i&&Object(l.jsx)(h,{children:Object(l.jsx)(f,{})}),Object(l.jsx)(m,{setOpenModal:u})]})}var I=function(){return Object(l.jsx)(u,{children:Object(l.jsx)(T,{})})};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.beb9a0ce.chunk.js.map