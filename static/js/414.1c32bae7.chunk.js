"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[414],{5046:(e,s,a)=>{a.d(s,{A:()=>n});a(5043);var t=a(579);function n(e){let{bg:s,posY:a,text:n,...l}=e;return(0,t.jsxs)("section",{...l,className:"intro center-gr",style:{background:`url(${s}) no-repeat`,"--posY":a},children:[(0,t.jsx)("div",{className:"mask-layer"}),(0,t.jsxs)("div",{className:"container text-center",children:[(0,t.jsx)("h2",{className:"text-light",children:n.headline}),n.description&&(0,t.jsx)("p",{className:"text-light small-text text-main up-case",dangerouslySetInnerHTML:{__html:n.description}})]})]})}},5065:(e,s,a)=>{a.d(s,{A:()=>o});var t=a(5043);const n=a.p+"static/media/pagination-arrow-left.df03b068cc2d9c293788f72e40958200.svg";const l=a.p+"static/media/pagination-arrow-right.09326ff90cb67244b048fb55c1d2b033.svg";var r=a(5475),i=a(1192);var c=a(579);function o(e){let{pagesCount:s,scrollOffset:a}=e;const{pages:o,activePage:d,handlePagination:x}=function(e,s){var a;const[n,l]=(0,t.useState)(e>5?[1,2,3,4,5,"...",e]:Array(e).fill(null).map(((e,s)=>s+1))),[c,o]=(0,r.ok)(),d=parseInt(null!==(a=c.get("page"))&&void 0!==a?a:1),{scrollbarAccess:x}=(0,t.useContext)(i.x);return{pages:n,activePage:d,handlePagination:a=>{a>e||a<=0||"..."===a||(x.current.scrollTo(0,s+110,500),setTimeout((()=>{e>5&&l(a>=5&&a+2<e?[1,"...",a-1,a,a+1,"...",e]:a+2>=e?[1,"...",e-4,e-3,e-2,e-1,e]:[1,2,3,4,5,"...",e]),c.set("page",a),o(c)}),500))}}}(s,a);return(0,c.jsx)("div",{className:"pagination",children:(0,c.jsxs)("div",{className:"row gap-30 center-y end-x",children:[(0,c.jsx)("div",{className:"prev",onClick:()=>x(d-1),children:(0,c.jsx)("img",{src:n,alt:"prev"})}),(0,c.jsx)("ul",{className:"row gap-10 xsmall-text text-main",children:o.map(((e,s)=>(0,c.jsx)("li",{style:{pointerEvents:"..."!==e?"all":"none"},className:d==e&&"..."!==e?"active":"inactive",onClick:()=>x(e),children:e},s)))}),(0,c.jsx)("div",{className:"next",onClick:()=>x(d+1),children:(0,c.jsx)("img",{src:l,alt:"next"})})]})})}},2901:(e,s,a)=>{a.d(s,{A:()=>l});a(5043);var t=a(6990),n=a(579);function l(){return(0,n.jsx)(t.A,{children:(0,n.jsx)("div",{className:"loading row center-x center-y",children:(0,n.jsx)("h2",{children:"Loading..."})})})}},7555:(e,s,a)=>{a.d(s,{A:()=>l});a(5043);var t=a(6990),n=a(579);function l(e){let{message:s}=e;return(0,n.jsx)(t.A,{className:"error row center-x center-y",children:(0,n.jsx)("h2",{className:"text-center",children:s})})}},6822:(e,s,a)=>{a.d(s,{A:()=>i});a(5043);var t=a(6188),n=a(3216),l=a(6990),r=a(579);function i(){const e=(0,n.Zp)();return(0,r.jsxs)(l.A,{className:"no-results center-gr",children:[(0,r.jsx)("h3",{className:"up-case",children:"no results found"}),(0,r.jsx)(t.A,{onClick:()=>e("."),children:"go back"})]})}},630:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(5475);function n(e){var s;const[a,n]=(0,t.ok)();return{handleSearchParams:function(s){const t=new URLSearchParams(a);if("min"===e||"max"===e)return t.set(e,s),void n(t);const l=t.getAll(e);if(l.includes(s)){const a=l.filter((e=>e!==s));t.delete(e),a.forEach((s=>t.append(e,s)))}else t.append(e,s);n(t)},handleFilter:function(e){const s={},t=[];let n=null,l=null;const r={"\u0441\u0435\u0440\u044b\u0439":"palette-gray-light","\u0447\u0435\u0440\u043d\u044b\u0439":"black","\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown","\u0431\u0435\u043b\u044b\u0439":"white","\u0431\u0435\u0436\u0435\u0432\u044b\u0439":"palette-beige","\u0437\u0435\u043b\u0435\u043d\u044b\u0439":"palette-green","\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439":"palette-gray","\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown-light"},i=[];for(const[c,o]of a.entries())"page"!==c&&("min"===c?n=parseFloat(o)||0:"max"===c?l=parseFloat(o)||25e4:"description"===c?t.push(o):"colors"===c?i.push(r[o]):s[c]=s[c]?[...s[c],o]:[o]);e((e=>(console.log("again"),e.map((e=>{const a=Object.entries(s).every((s=>{let[a,t]=s;return t.includes(e[a])})),r=t.every((s=>!0===e[s])),c=(!l||e.price<=l)&&(!n||e.price>=n),o=0===i.length||e.colors.some((e=>i.includes(e)));return{...e,isShown:a&&r&&c&&o}})))),!1)},resetFilter:function(e){a.delete(e),n(a)},allFilterParams:null!==(s=a.getAll(e))&&void 0!==s?s:[]}}},9414:(e,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(1727),n=a(5046),l=a(5043),r=a(2042),i=a(5475),c=a(8967),o=a(7555),d=a(5065),x=a(630),m=a(3546),h=a(6990),p=a(6822),u=a(2901),g=a(579);function v(e){return(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"24",viewBox:"0 0 26 24",children:(0,g.jsx)("path",{d:"M14.0093 1.4952C13.5597 0.720353 12.4407 0.72035 11.9911 1.4952L8.82471 6.95206C8.6026 7.33482 8.21871 7.59603 7.78114 7.66212L1.84711 8.55838C0.850445 8.70891 0.500842 9.96729 1.27703 10.6104L5.69764 14.2728C6.10684 14.6118 6.29924 15.1466 6.19984 15.6686L5.04348 21.7412C4.86068 22.7012 5.86843 23.4471 6.73311 22.9918L12.3207 20.0497C12.746 19.8257 13.2543 19.8257 13.6796 20.0497L19.2673 22.9918C20.132 23.4471 21.1397 22.7012 20.9569 21.7412L19.8005 15.6686C19.7011 15.1466 19.8935 14.6118 20.3027 14.2728L24.7233 10.6104C25.4995 9.9673 25.1499 8.70891 24.1533 8.55838L18.2192 7.66212C17.7817 7.59603 17.3978 7.33482 17.1757 6.95206L14.0093 1.4952Z",fill:e.filled?"black":"#989898"})})}function j(e){let{el:s}=e;return(0,g.jsxs)("div",{className:"review-item text-main",children:[(0,g.jsx)("span",{className:"small-text text-black",children:s.name}),(0,g.jsx)("span",{className:"xxsmall-text",children:"\u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d"}),(0,g.jsxs)("div",{className:"row wrap gap-20 s-between center-y",children:[(0,g.jsx)("div",{className:"reviews-stars row gap-5",children:Array(5).fill(null).map(((e,a)=>(0,g.jsx)(v,{filled:a+1<=s.review},a)))}),(0,g.jsx)("span",{className:"xxsmall-text",children:s.date})]}),s.comment.map(((e,s)=>(0,g.jsx)("p",{className:"text-black xsmall-text",children:e},s))),s.image&&(0,g.jsx)("div",{className:"review-image",style:{background:`url(${s.image})`}}),(0,g.jsx)("span",{className:"xxsmall-text text-black",children:s.product})]})}function f(e){let{data:s,isLoading:a,searchParams:t,error:n}=e;const l=s&&s.every((e=>!1===e.isShown));return(0,g.jsx)(m.N,{mode:"wait",children:n?(0,g.jsx)(o.A,{message:n.message}):!a&&s?l?(0,g.jsx)(p.A,{}):(0,g.jsx)(h.A,{className:"section-layout",children:s.map(((e,s)=>(0,g.jsx)(j,{el:e},s)))},t):(0,g.jsx)(u.A,{})})}function w(e){let{reviewsCount:s}=e;const a=(0,l.useMemo)((()=>(s.reduce(((e,s)=>e+s),0)/s.length).toFixed(1)),[]),t=(0,l.useMemo)((()=>{let e={1:0,2:0,3:0,4:0,5:0};return s.forEach((s=>e[s]++)),e}),[]);return(0,g.jsxs)("div",{className:"reviews-header row wrap center-y s-between gap-20",children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"row gap-15 center-y",children:[(0,g.jsx)("div",{className:"total-rate text-main text-black",children:a}),(0,g.jsxs)("div",{className:"reviews-stars",children:[(0,g.jsx)("div",{className:"row gap-5",children:Array(5).fill(null).map(((e,s)=>(0,g.jsx)(v,{filled:!1},s)))}),(0,g.jsx)("div",{className:"reviews-stars-mask row gap-5",style:{clipPath:`inset(0 ${100-a/5*100}% 0 0)`},children:Array(5).fill(null).map(((e,s)=>(0,g.jsx)(v,{filled:!0},s)))})]})]}),(0,g.jsxs)("span",{className:"xxsmall-text text-main",children:["\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 ",s.length," \u043e\u0442\u0437\u044b\u0432\u043e\u0432"]})]}),(0,g.jsx)("div",{className:"row wrap gap-10",children:Object.values(t).reverse().map(((e,s)=>(0,g.jsxs)("div",{className:"review-output row gap-5 center-y text-main xsmall-text",children:[Math.abs(5-s)," ",(0,g.jsx)(v,{filled:!1})," ",`(${e})`]},s)))})]})}function N(){var e;const[s]=(0,i.ok)(),a=parseInt(null!==(e=s.get("page"))&&void 0!==e?e:1),{data:t,error:n,isLoading:o,mutate:m}=(0,r.A)(["reviews",a,12]),{data:h}=(0,r.A)(["reviews-count"],c.Hq),{handleFilter:p}=(0,x.A)();return(0,l.useEffect)((()=>{t&&p(m)}),[s,o]),(0,g.jsx)("section",{id:"reviews",children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsxs)("div",{className:"row gap-10 xxxsmall-text text-main text-black up-case",children:[(0,g.jsx)(i.N_,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,g.jsx)("span",{children:"/"}),(0,g.jsx)("span",{children:"\u043e\u0442\u0437\u044b\u0432\u044b"})]}),h&&(0,g.jsx)(w,{reviewsCount:h}),(0,g.jsx)(f,{error:n,isLoading:o,searchParams:s,data:t}),h&&(0,g.jsx)(d.A,{scrollOffset:350,pagesCount:Math.ceil((h.length-1)/12)})]})})}const b=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.A,{bg:t,id:"reviews-intro",posY:"70%",text:{headline:"\u043e\u0442\u0437\u044b\u0432\u044b",description:"\u041c\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0448\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u043d\u0430\u0441"}}),(0,g.jsx)(N,{})]})}},1727:(e,s,a)=>{e.exports=a.p+"static/media/img_21.ef47eba8546a1ca705d7.webp"}}]);
//# sourceMappingURL=414.1c32bae7.chunk.js.map