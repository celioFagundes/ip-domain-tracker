(this["webpackJsonpip-domain-tracker"]=this["webpackJsonpip-domain-tracker"]||[]).push([[0],{28:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),s=n(11),a=n.n(s),o=n(4),r=(n(28),n(12)),d=n.n(r),j=n(50),l=n(53),h=n(51),b=n(52),p=n(1),O="https://geo.ipify.org/api/v2/country,city?apiKey=at_nSIqsffl0QJMdpOL8fMmHbdiHAFkW&";var u=function(){var t=Object(c.useState)({}),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(!0),a=Object(o.a)(s,2),r=a[0],u=a[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),g=f[0],m=f[1];return Object(c.useEffect)((function(){d.a.get("https://geo.ipify.org/api/v2/country,city?apiKey=at_nSIqsffl0QJMdpOL8fMmHbdiHAFkW&ipAddress").then((function(t){i(t.data),u(!1)}))}),[]),r?Object(p.jsx)("p",{children:"Loading ..."}):Object(p.jsxs)("div",{children:[Object(p.jsx)("header",{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"IP Address Tracker"}),Object(p.jsxs)("div",{className:"input-box",children:[Object(p.jsx)("input",{type:"text",className:"input",placeholder:"Search for an IP address or domain",onChange:function(t){return m(t.target.value)}}),Object(p.jsx)("button",{className:"input-button",onClick:function(){/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(g)&&""!==g?(u(!0),d.a.get(O+"ipAddress="+g).then((function(t){i(t.data),u(!1),m("")}))):/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(g)&&""!==g?(u(!0),d.a.get(O+"domain="+g).then((function(t){i(t.data),u(!1),m("")}))):(m(""),alert("Enter a valid IP address or Domain"))},children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"14",children:Object(p.jsx)("path",{fill:"none",stroke:"#FFF",strokeWidth:"3",d:"M2 1l6 6-6 6"})})})]}),Object(p.jsxs)("div",{className:"infos",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"IP ADDRESS"}),Object(p.jsx)("span",{children:n.ip})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"LOCATION"}),Object(p.jsx)("span",{children:"".concat(n.location.city,",").concat(n.location.country," ").concat(n.location.postalCode)})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"TIMEZONE"}),Object(p.jsxs)("span",{children:["UTC ",n.location.timezone]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"ISP"}),Object(p.jsx)("span",{children:n.isp})]})]})]})}),Object(p.jsxs)(j.a,{center:[n.location.lat,n.location.lng],zoom:13,scrollWheelZoom:!0,zoomControl:!1,children:[Object(p.jsx)(l.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(p.jsx)(h.a,{position:[n.location.lat,n.location.lng],children:Object(p.jsx)(b.a,{children:n.ip})})]})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(u,{})}),document.getElementById("root")),x()}},[[48,1,2]]]);
//# sourceMappingURL=main.cb56aaf2.chunk.js.map