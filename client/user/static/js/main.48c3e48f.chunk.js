(this.webpackJsonptavush=this.webpackJsonptavush||[]).push([[0],{20:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/arm.d460b6bc.svg"},21:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/eng.e9f9b01a.svg"},46:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/remove.a0b2776d.svg"},47:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/time.ad94d08b.svg"},48:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/community.437da382.svg"},49:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/budget.884be489.svg"},5:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/arrow.a705be43.svg"},50:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/sphere.c8b29079.svg"},51:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/organization.29d1173b.svg"},52:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/head name.3e813644.svg"},53:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/contact.bf5917a2.svg"},54:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/ongoing.b55f131f.svg"},55:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/description.ad5ee0b2.svg"},57:function(e,t){},61:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(1),n=c(11),i=c.n(n),r=c(22),u=c(6),l=c(23),o=c.n(l),d=c(0);var j=function(e){var t=e.data,n=e.setOpensidebar;console.log(t,"222");var i=Object(a.useState)(null),r=Object(s.a)(i,2),u=r[0],l=r[1];return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"infoSidebar",children:Object(d.jsxs)("div",{className:"info_sidebar_container",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"org_icon",onClick:function(){n(!1)},src:c(46).default})}),Object(d.jsx)("div",{style:{marginTop:"40px"},children:t.length>0?t.map((function(e,t){return Object(d.jsx)("div",{className:"info_detail",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:{cursor:"pointer",fontSize:"18px",fontWeight:"500",display:"flex",flexWrap:"wrap",padding:"10px 0px 10px 24px",color:"#808A8A"},onClick:function(t){var c;c=e.id,l(c)},children:[Object(d.jsx)("div",{style:{width:"164px"},children:e.name}),Object(d.jsx)("img",{className:"arrow_select",src:c(5).default})]}),u===e.id?Object(d.jsx)("div",{className:"supports_types",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(47).default}),Object(d.jsxs)("p",{className:"paragraph",children:[e.start_date,"-",e.end_date]})]}),Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(48).default}),Object(d.jsx)("p",{className:"paragraph",children:e.community})]}),Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(49).default}),Object(d.jsx)("p",{className:"paragraph",children:e.budget})]}),e.category_support.map((function(e,t){return Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(50).default}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{className:"paragraph",children:[" ",e.category," "]}),Object(d.jsx)("p",{className:"paragraph",children:e.support})]})]})})),e.organization.map((function(e,t){return Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(51).default}),Object(d.jsx)("p",{className:"paragraph",children:e})]})})),Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(52).default}),Object(d.jsx)("p",{className:"paragraph",children:e.manager})]}),Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(53).default}),Object(d.jsx)("p",{className:"paragraph",children:e.contactPerson})]}),Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(54).default}),Object(d.jsx)("p",{className:"paragraph",children:e.status})]}),Object(d.jsxs)("div",{className:"info_row",children:[Object(d.jsx)("img",{className:"det_icon",src:c(55).default}),Object(d.jsx)("p",{className:"paragraph",children:e.description})]})]})}):null]},t)},e.id)})):null})]})})})};var b=function(e){var t=e.mappointid,c=e.setOpensidebar,n=e.selectedLanguage,i=e.selectedStatuses,r=e.selectedSupports,u=Object(a.useState)([]),l=Object(s.a)(u,2),b=l[0],f=l[1],p=Object(a.useState)(n),O=Object(s.a)(p,2),m=O[0],g=(O[1],Object(a.useState)(i)),h=Object(s.a)(g,2),x=h[0],v=(h[1],Object(a.useState)(r)),S=Object(s.a)(v,2),N=S[0];return S[1],Object(a.useEffect)((function(){f([]),o.a.post("/api/programListForFilterEng",{mappointid:t,language:m,statusid:x,supportid:N}).then((function(e){f(e.data.data)})).catch((function(e){console.log("error")}))}),[t]),Object(d.jsx)(j,{data:b,mappointid:t,setOpensidebar:c})};var f=function(e){var t=e.coordinates,c=e.selectedLanguage,n=e.selectedStatuses,l=e.selectedSupports,o=Object(a.useState)(null),j=Object(s.a)(o,2),f=j[0],p=j[1],O=Object(a.useState)(null),m=Object(s.a)(O,2),g=(m[0],m[1]),h=Object(a.useState)(""),x=Object(s.a)(h,2),v=x[0],S=x[1],N=Object(a.useState)(!1),y=Object(s.a)(N,2),C=y[0],_=y[1],k=function(e){return function(){g(e),_(!0),S(e.mappointId)}};function L(){return(L=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){L.apply(this,arguments)}()}),[]);var w={preset:"islands#blueCircleIcon",iconColor:"#05558F"};return Object(d.jsxs)("div",{className:"maps",children:[Object(d.jsx)(u.d,{query:{lang:"ru_RU",load:"package.full"},children:Object(d.jsx)(u.b,{className:"map",defaultState:{center:[40.987595,45.15185],zoom:9},onLoad:function(e){return p({ymaps:e})},children:Object(d.jsx)(u.a,{children:f&&t.map((function(e,t){return Object(d.jsx)(u.c,{options:w,properties:(c=e.programCount,{iconContent:"<i>".concat(c,"</i>")}),geometry:[e.latitude,e.longitude],onClick:k(e)},t);var c}))})})}),C&&Object(d.jsx)(b,{selectedSupports:l,selectedStatuses:n,mappointid:v,setOpensidebar:_,selectedLanguage:c})]})},p=(c(7),c(4)),O=function(e,t){var c=function(c){e.current&&!e.current.contains(c.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",c),function(){document.removeEventListener("click",c)}}))},m=function(e){var t=e.cities,n=e.selectedCities,i=e.setSelectedCities,r=e.selectedLanguage,u=Object(a.useState)(),l=Object(s.a)(u,2),o=(l[0],l[1]),j=Object(a.useState)(""),b=Object(s.a)(j,2),f=b[0],m=b[1],g=Object(a.useState)(!1),h=Object(s.a)(g,2),x=h[0],v=h[1],S=Object(a.useRef)();O(S,(function(){x&&v(!1)}));return Object(a.useEffect)((function(){m("arm"==r?"\u0540\u0561\u0574\u0561\u0575\u0576\u0584":"Community")})),Object(d.jsxs)("div",{className:"community",children:[Object(d.jsxs)("button",{className:"btnSupport",id:"btnSelect",onClick:function(){return v(!x)},children:[Object(d.jsx)("label",{className:"support",children:f}),Object(d.jsx)("img",{src:c(5).default,onClick:function(){return v(!x)}})]}),x&&Object(d.jsx)("div",{ref:S,className:"NestedSelect",children:Object(d.jsx)("div",{className:"list city",children:t.map((function(e){return Object(d.jsx)("li",{className:"li1",onClick:function(){return function(e){if(o(e),n.some((function(t){return t===e}))){var t=n.filter((function(t){return t!==e}));i(t)}else i([].concat(Object(p.a)(n),[e]))}(e.id)},style:{backgroundColor:n.some((function(t){return t===e.id}))?"#A4C2D8":"#FAFAFA"},children:e.name},e.id)}))})})]})},g=function(e){var t=e.selectedLanguage,n=e.setSelectedLanguage,i=Object(a.useState)(!1),r=Object(s.a)(i,2),u=r[0],l=r[1],o=Object(a.useRef)();O(o,(function(){u&&l(!1)}));var j=function(e){n(e),localStorage.setItem("lang",e)},b={};return Object(d.jsxs)("div",{className:"language",children:[Object(d.jsxs)("button",{className:"btnLng",onClick:function(){return l(!u)},children:["arm"==t?Object(d.jsx)("img",{src:c(20).default,className:"defaultImg",style:b}):Object(d.jsx)("img",{src:c(21).default,className:"defaultImg",style:b}),Object(d.jsx)("img",{className:"arr",src:c(5).default})]}),u&&Object(d.jsx)("div",{ref:o,className:"iconLng",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"li4",onClick:function(){return j("arm")},children:Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:c(20).default})})}),Object(d.jsx)("li",{className:"li4",onClick:function(){return j("en")},children:Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:c(21).default})})})]})})]})},h=function(e){var t=e.statuses,n=e.selectedStatuses,i=e.setSelectedStatuses,r=e.selectedLanguage,u=Object(a.useState)(),l=Object(s.a)(u,2),o=(l[0],l[1]),j=Object(a.useState)(""),b=Object(s.a)(j,2),f=b[0],m=b[1],g=Object(a.useState)(!1),h=Object(s.a)(g,2),x=h[0],v=h[1],S=Object(a.useRef)();O(S,(function(){x&&v(!1)})),Object(a.useEffect)((function(){m("arm"==r?"\u054d\u057f\u0561\u057f\u0578\u0582\u057d":"Status")}));return Object(d.jsxs)("div",{className:"status",children:[Object(d.jsxs)("button",{className:"btnSupport",id:"btnSelect",onClick:function(){return v(!x)},children:[Object(d.jsx)("label",{className:"support",children:f}),Object(d.jsx)("img",{src:c(5).default,onClick:function(){return v(!x)}})]}),x&&Object(d.jsx)("div",{ref:S,className:"NestedStatus",children:Object(d.jsx)("div",{className:"statuses",children:t.map((function(e){return Object(d.jsx)("li",{className:"li2",onClick:function(){return function(e){if(o(e),n.some((function(t){return t===e}))){var t=n.filter((function(t){return t!==e}));n=t}else n.push(e);i(Object(p.a)(n))}(e.id)},style:{backgroundColor:n.some((function(t){return t===e.id}))?"#A4C2D8":"#FAFAFA"},children:e.status},e.id)}))})})]})},x=function(e){var t=e.supports,n=e.setSupports,i=e.selectedSupports,r=e.setSelectedSupports,u=e.selectedLanguage,l=Object(a.useState)([]),o=Object(s.a)(l,2),j=(o[0],o[1],Object(a.useState)([])),b=Object(s.a)(j,2),f=b[0],m=b[1],g=Object(a.useState)([]),h=Object(s.a)(g,2),x=(h[0],h[1],Object(a.useState)(!1)),v=Object(s.a)(x,2),S=v[0],N=v[1],y=Object(a.useRef)();O(y,(function(){S&&N(!1)}));return console.log(i),Object(d.jsxs)("div",{className:"project_name",children:[Object(d.jsxs)("button",{className:"btnSupport",id:"btnSelect",onClick:function(){return N(!S)},children:[Object(d.jsx)("label",{className:"support",children:"arm"==u?"\u0548\u056c\u0578\u0580\u057f":"Sphere"}),Object(d.jsx)("img",{src:c(5).default,onClick:function(){return N(!S)}})]}),S&&Object(d.jsx)("div",{ref:y,className:"nested",children:t.map((function(e,s){return Object(d.jsx)("div",{className:"list3",children:Object(d.jsxs)("ul",{className:"ul3",children:[Object(d.jsx)("div",{className:"supportList",children:Object(d.jsx)("input",{type:"checkbox",id:"check",checked:e.active,className:"checkbox1",onChange:function(e){return function(e,c){var s=e.target.checked,a=t[c].items;if(s){for(var u=function(e){i.some((function(t){return t==a[e].supportid}))||i.push(a[e].supportid)},l=0;l<a.length;l++)u(l);r(Object(p.a)(i))}else{for(var o=i,d=function(e){var t=o.findIndex((function(t){return t==a[e].supportid}));t>=0&&o.splice(t,1)},j=0;j<a.length;j++)d(j);r(Object(p.a)(o))}t[c].active=!t[c].active,n(Object(p.a)(t))}(e,s)}})}),Object(d.jsxs)("label",{className:"category_name",children:[e.category," (",e.items.length,")"]}),Object(d.jsx)("img",{className:"arrowSelect",src:c(5).default,onClick:function(t){return function(e){if(f.some((function(t){return t===e}))){var t=f.findIndex((function(t){return t===e}));f.splice(t,1),m(Object(p.a)(f))}else f.push(e),m(Object(p.a)(f))}(e.categoryid)}}),f.some((function(t){return t===e.categoryid}))?Object(d.jsx)("div",{className:"support_types",children:e.items.map((function(e,t){return Object(d.jsx)("li",{style:{backgroundColor:i.some((function(t){return t===e.supportid}))?"#A4C2D8":"#FAFAFA"},className:"li3",onClick:function(){return function(e){var t=i.filter((function(t){return t!=e}));t.length==i.length?(i.push(e),r(Object(p.a)(i))):r(Object(p.a)(t))}(e.supportid)},children:e.name},t)}))}):null]})},s)}))})]})},v=(c(57),function(e){var t=e.setInfo,c=Object(a.useState)([]),n=Object(s.a)(c,2),i=n[0],r=n[1],u=Object(a.useState)([]),l=Object(s.a)(u,2),o=l[0],j=l[1],b=Object(a.useState)([]),p=Object(s.a)(b,2),O=p[0],v=p[1],S=Object(a.useState)([]),N=Object(s.a)(S,2),y=N[0],C=N[1],_=Object(a.useState)([]),k=Object(s.a)(_,2),L=k[0],w=k[1],A=Object(a.useState)([]),E=Object(s.a)(A,2),I=E[0],F=E[1],T=Object(a.useState)([]),J=Object(s.a)(T,2),P=J[0],R=J[1],z=Object(a.useState)(localStorage.getItem("lang")),D=Object(s.a)(z,2),W=D[0],q=D[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("lang");e?q(e):localStorage.setItem("lang","arm")}),[]),Object(a.useEffect)((function(){fetch("/api/filterEng",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({community_id:o,status_id:L,support_id:P})}).then((function(e){return e.json()})).then((function(e){v(e.data)}))}),[o,L,P]),Object(a.useEffect)((function(){fetch("/api/communities",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:W})}).then((function(e){return e.json()})).then((function(e){r(e.data)})),fetch("/api/statuses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:W})}).then((function(e){return e.json()})).then((function(e){C(e.data)})).catch((function(e){console.log(e)})),fetch("/api/supportsList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:W})}).then((function(e){return e.json()})).then((function(e){var t=e.data;t.forEach((function(e){e.active=!1})),F(t)})).catch((function(e){console.log(e)}))}),[W]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(d.jsx)(f,{selectedSupports:P,selectedStatuses:L,coordinates:O,setInfo:t,selectedLanguage:W}),Object(d.jsxs)("div",{className:"filters",children:[Object(d.jsx)(m,{selectedCities:o,setSelectedCities:j,cities:i,selectedLanguage:W}),Object(d.jsx)(x,{selectedSupports:P,setSelectedSupports:R,supports:I,setSupports:F,selectedLanguage:W}),Object(d.jsx)(h,{selectedStatuses:L,setSelectedStatuses:w,statuses:y,selectedLanguage:W}),Object(d.jsx)(g,{selectedLanguage:W,setSelectedLanguage:q})]})]})})});var S=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=(t[0],t[1]);return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(v,{setInfo:c})})},N=c(24),y=c.n(N),C=document.getElementById("root");y.a.render(Object(d.jsx)(S,{}),C)},7:function(e,t,c){}},[[61,1,2]]]);
//# sourceMappingURL=main.48c3e48f.chunk.js.map