(this["webpackJsonpreact-counter"]=this["webpackJsonpreact-counter"]||[]).push([[0],{23:function(e,a,t){e.exports=t(38)},38:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(10),l=t.n(c),o=(t(28),t(51)),u=t(13),i=t(11),m=t(22),d=t(39),s=t(40),E=t(52),v=t(41),f=t(42),p=t(43),g=t(44);function h(e){var a=Object(m.a)({},e.list),t=a.name,n=a.value,c=a.id;return r.a.createElement(d.a,null,r.a.createElement(s.a,null,r.a.createElement(E.a,{addonType:"prepend"},r.a.createElement(v.a,{xs:"5"},t)),r.a.createElement(v.a,{xs:"6"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.a,{onClick:function(){return e.counterChange(c,-1)}},"-"),r.a.createElement(g.a,{disabled:!0},r.a.createElement(E.a,{outline:!0,color:"secondary"},n)),r.a.createElement(g.a,{onClick:function(){return e.counterChange(c,1)}},"+")),r.a.createElement(p.a,null,r.a.createElement(g.a,{color:"danger",onClick:function(){return e.removeItem(c)}},"Delete"),r.a.createElement(g.a,{color:"warning",onClick:function(){return e.resetItem(c)}},"Reset"))))))}var b=t(45),C=t(46);function j(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(0),u=Object(i.a)(o,2),m=u[0],f=u[1];return r.a.createElement(d.a,{color:"secondary"},r.a.createElement(s.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{xs:"2"},r.a.createElement(E.a,{addonType:"prepend"},"New counter")),r.a.createElement(E.a,{addonType:"append"},r.a.createElement(C.a,{onChange:function(e){return a=e.target.value,void l(a);var a},placeholder:"Counter name"}),r.a.createElement(C.a,{onChange:function(e){return a=e.target.value,void f(+a);var a},placeholder:"Counter value"}),r.a.createElement(g.a,{addonType:"prepend",color:"secondary",onClick:function(){return e.addItem(c,m)}},"Add")))))}var O=t(53),k=t(47),y=t(48),w=function(e){var a=e.className,t=e.toggle,n=e.modal;return r.a.createElement("div",null,r.a.createElement(O.a,{isOpen:n,toggle:t,className:a},r.a.createElement(k.a,{toggle:t},"Please enter counter name!"),r.a.createElement(y.a,null,r.a.createElement(g.a,{color:"secondary",onClick:t},"Close"))))},I=t(49),S=t(50),x=[{name:"First",value:12,id:1},{name:"Second",value:13,id:2}];function N(){var e=Object(n.useState)(x),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),m=o[0],d=o[1],s=function(){return d(!m)},E=function(e,a){var n=Object(u.a)(t);n.map((function(t){return t.id===e?t.value+=a:""})),c(n)},v=function(e){var a=t.filter((function(a){return a.id!==e}));c(a)},f=function(e){var a=Object(u.a)(t);a.map((function(a){return a.id===e?a.value=0:""})),c(a)};return r.a.createElement("div",null,r.a.createElement(I.a,{color:"dark",className:"d-flex align-items-center justify-content-center "},r.a.createElement("h3",null,"Total:",0!==t.length?t.map((function(e){return e.value})).reduce((function(e,a){return e+a})):0,r.a.createElement(g.a,{size:"md",color:"warning",onClick:function(){var e=Object(u.a)(t);e.map((function(e){return e.value=0})),c(e)}},"Reset All"))),r.a.createElement(S.a,null,t.map((function(e){return r.a.createElement(h,{key:e.id,list:e,counterChange:E,removeItem:v,resetItem:f})}))),r.a.createElement(j,{addItem:function(e,a){if(""!==e){var n=Object(u.a)(t);n.push({name:e,value:a,id:Math.random()}),c(n)}else s()}}),r.a.createElement(w,{modal:m,toggle:s}))}var T=function(){return r.a.createElement(o.a,{className:"themed-container"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4fe01190.chunk.js.map