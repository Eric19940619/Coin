(this.webpackJsonpcoin=this.webpackJsonpcoin||[]).push([[0],{87:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(20),r=c.n(s),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},o=c(14),j=c(8),d=c(7),l=c(35),h=c(94),b=c(95),u=c(1),O=function(){return Object(u.jsx)(h.a,{bg:"dark",variant:"dark",children:Object(u.jsxs)(b.a,{className:"m-auto",children:[Object(u.jsx)(l.LinkContainer,{exact:!0,to:"/",children:Object(u.jsx)(b.a.Link,{children:"\u9996\u9801"})}),Object(u.jsx)(l.LinkContainer,{to:"/favorite",children:Object(u.jsx)(b.a.Link,{children:"\u6211\u7684\u6700\u611b"})})]})})},x=c(92),p=c(96),m=Object(n.createContext)(),f=c(28),g=c(29),v=function(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),a=c[0],s=c[1],r=e.Sort,i=e.type,o=e.descending,d=e.sortingType;return Object(n.useEffect)((function(){s(d===i&&!1===o)}),[o,d,i]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("button",{className:"d-flex justify-content-center align-items-center",onClick:function(){r(i)},children:[e.children,Object(u.jsx)(f.a,{icon:g.a,transform:a?{rotate:180}:{rotate:0}})]})})},y=function(e){var t=e.percent;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("span",{className:"badge +\n    ".concat(t>0?"bg-danger":"bg-success"),children:[Object(u.jsxs)("span",{children:[t>0?"\u25b2":"\u25bc"," "]}),Math.abs(Math.round(100*t))/100,"%"]})})},k=function(e){var t=Object(n.useContext)(m),c=Object(j.a)(t,2),a=c[0],s=c[1],r=e.data,i=Object(n.useState)([]),d=Object(j.a)(i,2),l=d[0],h=d[1],b=Object(n.useState)("market_cap_rank"),O=Object(j.a)(b,2),k=O[0],_=O[1],S=Object(n.useState)(!1),N=Object(j.a)(S,2),w=N[0],E=N[1],C=function(e){k!==e?(_(e),E(!1)):E(!0!==w),h(r.sort((function(e,t){return w?t[k]-e[k]:e[k]-t[k]})))};Object(n.useEffect)((function(){h(r.sort((function(e,t){return w?t[k]-e[k]:e[k]-t[k]})))}),[r]);return r.length>0&&Object(u.jsx)("div",{style:{width:"90%",margin:"20px auto"},children:Object(u.jsxs)(x.a,{responsive:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:Object(u.jsx)(v,{type:"market_cap_rank",Sort:C,descending:w,sortingType:k,children:Object(u.jsx)("h5",{className:"m-0",children:"Rank"})})}),Object(u.jsx)("th",{children:Object(u.jsx)("h5",{className:"m-0",children:"\u8ca8\u5e63\u540d\u7a31"})}),Object(u.jsx)("th",{children:Object(u.jsx)(v,{type:"current_price",Sort:C,descending:w,sortingType:k,children:Object(u.jsx)("h5",{className:"m-0",children:"\u73fe\u50f9(USD)"})})}),Object(u.jsx)("th",{children:Object(u.jsx)(v,{type:"price_change_percentage_24h",Sort:C,descending:w,sortingType:k,children:Object(u.jsx)("h5",{className:"m-0",children:"24hr%"})})}),Object(u.jsx)("th",{children:Object(u.jsx)(v,{type:"total_volume",Sort:C,descending:w,sortingType:k,children:Object(u.jsx)("h5",{className:"m-0",children:"\u4ea4\u6613\u91cf"})})}),Object(u.jsx)("th",{children:Object(u.jsx)(v,{type:"circulating_supply",Sort:C,descending:w,sortingType:k,children:Object(u.jsx)("h5",{className:"m-0",children:"\u4f9b\u7d66\u91cf"})})})]})}),Object(u.jsx)("tbody",{children:l.map((function(e){var t=e.market_cap_rank,c=e.id,n=e.symbol,r=e.image,i=e.name,j=e.current_price,d=e.price_change_percentage_24h,l=e.total_volume,h=e.circulating_supply,b=e.total_supply;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){!function(e){a.coins.indexOf(e)<0?s({type:"ADD",payload:{id:e}}):s({type:"REMOVE",payload:{id:e}})}(c)},children:Object(u.jsx)(f.a,{icon:g.b,color:a.coins.indexOf(c)<0?"#272727":"#FF8800"})})}),Object(u.jsxs)("td",{children:["#",t]}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.Link,{to:"/coin/".concat(c),children:[Object(u.jsx)("img",{src:r,alt:n,style:{width:"20px",marginRight:"10px"}}),i," (",n,")"]})}),Object(u.jsx)("td",{children:j}),Object(u.jsx)("td",{children:Object(u.jsx)(y,{percent:d})}),Object(u.jsxs)("td",{children:["$",l]}),Object(u.jsxs)("td",{children:[h," ",void 0!==n&&n.toUpperCase(),b>0&&Object(u.jsx)(p.a,{animated:!0,now:100*Number(h/b)})]})]},i)}))})]})})},_=c(16),S=c.n(_),N=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){document.title="\u865b\u64ec\u8ca8\u5e63";var e=setInterval((function(){return S.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)}))}),500);return function(){return clearInterval(e)}}),[]),Object(u.jsxs)("div",{className:"m-1 mt-3",children:[Object(u.jsx)("h2",{className:"text-center",children:"\u8ca8\u5e63\u5217\u8868"}),Object(u.jsx)(k,{data:c})]})},w=function(){var e=Object(n.useContext)(m),t=Object(j.a)(e,1)[0],c=Object(n.useState)([]),a=Object(j.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return S.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){var c=[];t.coins.filter((function(t){return e.data.forEach((function(e){e.id===t&&c.push(e)}))})),r(c)}))}),500);return function(){return clearInterval(e)}}),[t.coins]),Object(u.jsxs)("div",{className:"m-1 mt-3",children:[Object(u.jsx)("h2",{className:"text-center",children:"\u6536\u85cf\u7684\u865b\u64ec\u8ca8\u5e63"}),s.length>0&&Object(u.jsx)(k,{data:s})]})},E=c(18),C=c(54),I=c.n(C),F=(c(86),function(e){var t=e.id,c=e.days,a=e.size,s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)([]),l=Object(j.a)(d,2),h=l[0],b=l[1],O=Object(n.useState)([]),x=Object(j.a)(O,2),p=x[0],m=x[1];return Object(n.useEffect)((function(){S.a.get("https://api.coingecko.com/api/v3/coins/".concat(t.toLowerCase(),"/market_chart?vs_currency=usd&days=").concat(c,"}&interval=daily")).then((function(e){var t=[],c=[],n=[],a=e.data,s=a.prices,r=a.total_volumes;s.forEach((function(e,c){if(c!==s.length-2){var a=new Date(e[0]);n.push("".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate())),t.push(e[1])}})),r.forEach((function(e,t){t!==s.length-2&&c.push(e[1])})),m(n),o(t),b(c)}))}),[t,c]),Object(n.useEffect)((function(){I.a.generate({bindto:"#chart",size:{width:a.w,height:a.h},data:{x:"x",columns:[["x"].concat(Object(E.a)(p)),["vol"].concat(Object(E.a)(h)),["price"].concat(Object(E.a)(i))],axes:{vol:"y2"},types:{price:"line",vol:"bar"},colors:{price:"#CE0000",vol:"#46A3FF"}},point:{show:!1},legend:{show:!0},axis:{x:{show:!0,type:"timeseries",tick:{format:""}},y:{show:!1,label:{text:"\u50f9\u683c",position:"outer-middle"}},y2:{show:!1,max:Math.max.apply(Math,Object(E.a)(h)),min:Math.min.apply(Math,Object(E.a)(h)),label:{text:"\u6210\u4ea4\u91cf",position:"outer-middle"}}}})}),[i,h,p,a]),Object(u.jsx)("div",{children:Object(u.jsx)("div",{id:"chart"})})}),L=c(97),M=c(93),D=c(98),T=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(7),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(d.m)().id;Object(n.useEffect)((function(){S.a.get("https://api.coingecko.com/api/v3/coins/".concat(l)).then((function(e){a(e.data),document.title="\u865b\u64ec\u8ca8\u5e63 - ".concat(e.data.localization["zh-tw"])}))}),[l]);var h=c.symbol,b=c.localization,O=c.market_data;return Object(u.jsx)("div",{className:"text-center m-3",children:Object(u.jsxs)(L.a,{variant:"flush",children:[Object(u.jsx)(L.a.Item,{children:Object(u.jsxs)("h2",{children:[void 0===b?"":"".concat(b["zh-tw"],"(").concat(h,")"),Object(u.jsx)("span",{className:"m-3",children:void 0===O?"":"US$ ".concat(O.current_price.usd)}),void 0===O?"":Object(u.jsx)(y,{percent:O.price_change_percentage_24h})]})}),Object(u.jsxs)(L.a.Item,{children:[Object(u.jsx)("h5",{className:"m-4",children:void 0===O?"":"\u6b77\u53f2\u6700\u9ad8\u50f9 $ ".concat(O.ath.usd," ")}),Object(u.jsx)("h5",{className:"m-4",children:void 0===O?"":"\u6b77\u53f2\u6700\u4f4e\u50f9 $ ".concat(O.atl.usd)})]}),Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("h5",{className:"m-4",children:void 0===O?"":"\u7e3d\u5e02\u503c\u6392\u884c #".concat(O.market_cap_rank)})}),Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("h5",{className:"m-4",children:void 0===O?"":"\u7e3d\u5e02\u503c $ ".concat(O.market_cap.usd)})}),Object(u.jsx)(L.a.Item,{children:Object(u.jsxs)("div",{className:"m-2",children:[Object(u.jsx)(M.a,{toggle:!0,children:[7,10,30].map((function(e){return Object(u.jsxs)(D.a,{type:"radio",variant:"secondary",name:"radio",value:e,checked:i===e,onChange:function(t){return o(e)},children:[e,"\u65e5"]},e)}))}),Object(u.jsxs)("div",{className:"mt-3",children:[Object(u.jsxs)("h4",{children:["\u8fd1",i,"\u65e5\u8d70\u52e2"]}),""!==l&&Object(u.jsx)(F,{id:l,days:i,size:{w:380,h:250}})]})]})})]})})},z={Load:function(e){return JSON.parse(localStorage.getItem(e))||[]},Set:function(e){localStorage.setItem(e.key,JSON.stringify(e.value))}},R=function(e,t){switch(t.type){case"ADD":if(e.coins.indexOf(t.payload.id)<0){var c=[].concat(Object(E.a)(e.coins),[t.payload.id]);return z.Set({key:"coins",value:c}),{coins:c}}return{coins:e.coins};case"REMOVE":var n=e.coins.indexOf(t.payload.id),a=e.coins;return a.splice(n,1),z.Set({key:"coins",value:a}),{coins:a};default:throw new Error}},$=(c(87),{coins:z.Load("coins")}),J=function(){var e=Object(n.useReducer)(R,$),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m.Provider,{value:[c,a],children:[Object(u.jsx)(O,{}),Object(u.jsxs)(d.g,{children:[Object(u.jsx)(d.d,{exact:!0,path:"/",component:N}),Object(u.jsx)(d.d,{path:"/coin/:id",component:T}),Object(u.jsx)(d.d,{path:"/favorite",component:w})]})]})})};c(88);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.HashRouter,{children:Object(u.jsx)(J,{})})}),document.getElementById("root")),i()}},[[90,1,2]]]);
//# sourceMappingURL=main.9afc0032.chunk.js.map