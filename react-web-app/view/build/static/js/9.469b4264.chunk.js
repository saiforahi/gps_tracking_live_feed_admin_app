(this.webpackJsonpjahaji=this.webpackJsonpjahaji||[]).push([[9],{731:function(e,c,t){},755:function(e,c,t){},757:function(e,c){function t(e){var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=757},794:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),s=t(33),r=t(719),i=t(21),o=t(716),j=(t(731),t(182)),l=[{path:"/dashboard",exact:!0,name:"Dashboard",component:a.a.lazy((function(){return Promise.all([t.e(10),t.e(11)]).then(t.bind(null,798))}))},{path:"/dashboard/live-tracking",exact:!0,name:"Live Tracking",component:a.a.lazy((function(){return Promise.all([t.e(7),t.e(13)]).then(t.bind(null,788))}))}],d=t(16),b=Object(d.jsx)("div",{className:"pt-3 text-center",children:Object(d.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),u=function(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),t=c[0],j=c[1];return a.a.useEffect((function(){j(l)}),[]),Object(d.jsxs)("main",{className:"c-main",children:[Object(d.jsx)("div",{class:"hero-image"}),Object(d.jsx)(o.i,{className:"mt-4",children:Object(d.jsx)(n.Suspense,{fallback:b,children:Object(d.jsxs)(i.d,{children:[t.map((function(e,c){return e.component&&Object(d.jsx)(i.b,{path:e.path,exact:e.exact,name:e.name,render:function(c){return Object(d.jsx)(o.n,{children:Object(d.jsx)(e.component,Object(s.a)({},c))})}},c)})),Object(d.jsx)(i.a,{from:"/",to:"/dashboard"})]})})})]})},m=a.a.memo(u),O=function(){return Object(d.jsx)(o.o,{fixed:!1})},h=a.a.memo(O),x=t(186),f=function(){var e=Object(j.b)(),c=Object(j.c)((function(e){return e.sidebar.sidebarShow}));return a.a.useEffect((function(){console.log("sidebar --- ",c)}),[]),Object(d.jsxs)(o.q,{withSubheader:!0,children:[Object(d.jsx)(o.J,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(c)||"responsive";e(Object(x.a)(t))}}),Object(d.jsx)(o.J,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(c)&&"responsive";e(Object(x.a)(t))}}),Object(d.jsx)(o.r,{className:"d-md-down-none mr-auto",children:Object(d.jsx)(o.s,{className:"px-3",children:Object(d.jsx)(o.t,{to:"/dashboard",children:"Dashboard"})})}),Object(d.jsx)(o.r,{className:"px-3",children:Object(d.jsx)(v,{})})]})},p=t(717),g=t(183),v=function(){var e=Object(j.c)((function(e){return e.user.data.first_name?e.user.data.first_name+" "+e.user.data.last_name:"Kaptan"})),c=Object(j.c)((function(e){return e.user.data.profile_pic})),t=Object(i.g)();return Object(d.jsxs)(o.j,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(d.jsxs)(o.m,{className:"c-header-nav-link",caret:!1,children:[Object(d.jsx)("div",{className:"c-avatar",children:Object(d.jsx)(o.u,{src:null!=c?g.a+c:"assets/images/avatar.png",className:"c-avatar-img",alt:""})}),Object(d.jsx)("span",{style:{marginLeft:"8px"},children:e})]}),Object(d.jsxs)(o.l,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(o.k,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(d.jsx)("strong",{children:"Account"})}),Object(d.jsxs)(o.k,{onClick:function(){localStorage.clear(),t.push("/")},children:[Object(d.jsx)(p.a,{name:"cil-account-logout",className:"mfe-2"}),"Logout"]})]})]})},N=(t(755),function(){var e=Object(j.b)(),c=Object(i.g)(),t=Object(j.c)((function(e){return e.sidebar.sidebarShow})),s=(Object(j.c)((function(e){return e.user.data.badge_number})),a.a.useState("")),l=Object(r.a)(s,2),b=(l[0],l[1]);return Object(n.useEffect)((function(){b(localStorage.getItem("group"))}),[]),Object(d.jsxs)(o.D,{show:t,onShowChange:function(c){return e(Object(x.a)(c))},children:[Object(d.jsx)(o.E,{className:"d-md-down-none text-center",to:"/",children:Object(d.jsx)(p.a,{name:"cib-codeship",height:25})}),Object(d.jsxs)(o.G,{children:[Object(d.jsx)(o.H,{to:"/dashboard",icon:"cil-speedometer",name:"Dashboard"}),Object(d.jsx)(o.I,{children:"Administration"}),Object(d.jsx)(o.H,{to:"/dashboard/live-tracking",onClick:function(){c.push("/dashboard/live-tracking")},icon:"cil-map",name:"Live Tracking"})]}),Object(d.jsx)(o.F,{className:"c-d-md-down-none"})]})}),k=a.a.memo(N),w=t(756),S=(t(732),t(414));c.default=function(){var e=Object(S.b)();e.enqueueSnackbar,e.closeSnackbar,Object(j.b)(),Object(i.g)(),new w.WebSocketBridge;return Object(d.jsxs)(d.Fragment,{children:[!1===(null!==localStorage.getItem(g.d)&&""!==localStorage.getItem(g.d))&&Object(d.jsx)(i.a,{to:"/login"}),Object(d.jsxs)("div",{className:"c-app c-default-layout",children:[Object(d.jsx)(k,{}),Object(d.jsxs)("div",{className:"c-wrapper",children:[Object(d.jsx)(f,{}),Object(d.jsx)("div",{className:"c-body",children:Object(d.jsx)(m,{})}),Object(d.jsx)(h,{})]})]})]})}}}]);
//# sourceMappingURL=9.469b4264.chunk.js.map