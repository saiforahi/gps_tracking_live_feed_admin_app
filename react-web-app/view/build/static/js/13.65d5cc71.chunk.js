(this.webpackJsonpjahaji=this.webpackJsonpjahaji||[]).push([[13],{781:function(e,t,n){},800:function(e,t,n){"use strict";n.r(t);var r=n(719),s=n(716),c=n(0),a=n.n(c),i=n(791),o=n(802),j=n(792),l=n(793),b=(n(780),n(781),n(100)),h=n(782),u=n(721),g=n(714),O=n(767),d=n(16),m=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"center"}}}));t.default=function(){var e=m(),t=Object(c.useState)(localStorage.getItem("previous_devices")?localStorage.getItem("previous_devices"):[]),n=Object(r.a)(t,2),g=n[0],p=n[1],x=Object(c.useState)([]),f=Object(r.a)(x,2),v=f[0],_=f[1],M=Object(c.useState)(0),N=Object(r.a)(M,2);N[0],N[1];function y(e){var t=Number(g[e].lat),n=Number(v[e].lat),r=Number(v[e].lng)-Number(g[e].lng),s=Math.cos(t)*Math.sin(r),c=Math.cos(n)*Math.sin(t)-Math.sin(n)*Math.cos(t)*Math.cos(r);return(180*Math.atan2(s,c)/Math.PI+360)%360}return a.a.useEffect((function(){var e=setInterval((function(){b.c.get("device/data/last/").then((function(e){localStorage.setItem("previous_devices",v),p(v),_(e.data.data)}))}),3e4);return function(){return clearInterval(e)}})),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(s.i,{children:v.length>0?Object(d.jsx)(s.C,{className:"justify-content-center",children:Object(d.jsx)(s.h,{children:Object(d.jsxs)(i.a,{center:[23.685,90.3563],zoom:8,scrollWheelZoom:!1,children:[Object(d.jsx)(o.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),v.length>0&&Array.from(v).map((function(e,t){return Object(d.jsx)(j.a,{position:[Number(e.lat),Number(e.lng)],icon:new u.Icon({iconUrl:"True"==e.sos?"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png":h.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(d.jsxs)(l.a,{children:["Lat : ",e.lat,Object(d.jsx)("br",{}),"Lng : ",e.lng,Object(d.jsx)("br",{}),"Device ID : ",e.device__device_id,Object(d.jsx)("br",{}),"Battery: ",e.battery,". ",Object(d.jsx)("br",{})," signal_strength1 : ",e.signal_strength1," ",Object(d.jsx)("br",{})," signal_strength2: ",e.signal_strength2,Object(d.jsx)("br",{})," speed : ",e.speed," ",Object(d.jsx)("br",{})," sos : ",e.sos," ",Object(d.jsx)("br",{})," sim_no : ",e.sim_no," ",Object(d.jsx)("br",{})," locked_satellite : ",e.locked_satellite," ",Object(d.jsx)("br",{})," heading : ",g.length<1?"(N/A)":"0"==y(t)?"not moving":y(t)]})},t)}))]})})}):Object(d.jsx)(O.a,{})})})})}}}]);
//# sourceMappingURL=13.65d5cc71.chunk.js.map