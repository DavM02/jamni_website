"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[158],{5046:(e,a,t)=>{t.d(a,{A:()=>l});t(5043);var s=t(579);function l(e){let{id:a,bg:t,posY:l,description:n,headline:i}=e;return(0,s.jsxs)("section",{id:a,className:"intro center-gr",style:{background:`url(${t}) no-repeat`,"--posY":l},children:[(0,s.jsx)("div",{className:"mask-layer"}),(0,s.jsxs)("div",{className:"container text-center",children:[(0,s.jsx)("h2",{className:"text-light",children:i}),n&&(0,s.jsx)("p",{className:"text-light small-text text-main up-case",dangerouslySetInnerHTML:{__html:n}})]})]})}},3101:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(9634),l=t(3216),n=t(579);function i(e){let{el:a,height:t}=e;const i=(0,l.Zp)();return(0,n.jsxs)("div",{className:"news-item",onClick:()=>i(`/news/article/${a.title.toLowerCase().replace(/\s+/g,"_")}?id=${a.id}`),children:[(0,n.jsx)("div",{className:"news-image placeholder",style:t?{height:`${t}`}:{},children:(0,n.jsx)(s.LazyLoadImage,{src:a.previewImage,width:"100%",height:"100%",effect:"blur",alt:`news-image-${a.id+1}`})}),(0,n.jsxs)("div",{className:"row s-between gap-10 xxxsmall-text text-main text-gray up-case",children:[(0,n.jsx)("span",{children:a.tag}),(0,n.jsx)("span",{children:a.date})]}),(0,n.jsx)("span",{className:"xsmall-text text-black text-main up-case",children:a.title}),(0,n.jsx)("p",{className:"xsmall-text text-black text-main",children:a.description})]})}},9684:(e,a,t)=>{t.d(a,{A:()=>o});var s=t(5043);const l=t.p+"static/media/pagination-arrow-left.df03b068cc2d9c293788f72e40958200.svg";const n=t.p+"static/media/pagination-arrow-right.09326ff90cb67244b048fb55c1d2b033.svg";var i=t(5475),r=t(1192);var c=t(579);function o(e){let{pagesCount:a,scrollOffset:t}=e;const{pages:o,activePage:d,handlePagination:p}=function(e,a){var t;const[l,n]=(0,s.useState)(e>5?[1,2,3,4,5,"...",e]:Array(e).fill(null).map(((e,a)=>a+1))),[c,o]=(0,i.ok)(),d=parseInt(null!==(t=c.get("page"))&&void 0!==t?t:1),{scrollbarAccess:p}=(0,s.useContext)(r.x);return{pages:l,activePage:d,handlePagination:t=>{t>e||t<=0||"..."===t||(p.current.scrollTo(0,a+110,500),setTimeout((()=>{e>5&&n(t>=5&&t+2<e?[1,"...",t-1,t,t+1,"...",e]:t+2>=e?[1,"...",e-4,e-3,e-2,e-1,e]:[1,2,3,4,5,"...",e]),c.set("page",t),o(c)}),500))}}}(a,t);return(0,c.jsx)("div",{className:"pagination",children:(0,c.jsxs)("div",{className:"row gap-30 center-y end-x",children:[(0,c.jsx)("div",{className:"prev",onClick:()=>p(d-1),children:(0,c.jsx)("img",{src:l,alt:"prev"})}),(0,c.jsx)("ul",{className:"row gap-10 xsmall-text text-main",children:o.map(((e,a)=>(0,c.jsx)("li",{style:{pointerEvents:"..."!==e?"all":"none"},className:d==e&&"..."!==e?"active":"inactive",onClick:()=>p(e),children:e},a)))}),(0,c.jsx)("div",{className:"next",onClick:()=>p(d+1),children:(0,c.jsx)("img",{src:n,alt:"next"})})]})})}},6822:(e,a,t)=>{t.d(a,{A:()=>r});t(5043);var s=t(241),l=t(3216),n=t(6990),i=t(579);function r(e){let{level:a}=e;const t=(0,l.Zp)();return(0,i.jsxs)(n.A,{className:"no-results center-gr",children:[(0,i.jsx)("h3",{className:"up-case",children:"no results found"}),(0,i.jsx)(s.A,{onClick:()=>t(null!==a&&void 0!==a?a:"."),children:"go back"})]},"no-results")}},630:(e,a,t)=>{t.d(a,{A:()=>n,m:()=>l});var s=t(5475);const l={"\u0441\u0435\u0440\u044b\u0439":"palette-gray-light","\u0447\u0435\u0440\u043d\u044b\u0439":"black","\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown","\u0431\u0435\u043b\u044b\u0439":"white","\u0431\u0435\u0436\u0435\u0432\u044b\u0439":"palette-beige","\u0437\u0435\u043b\u0435\u043d\u044b\u0439":"palette-green","\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439":"palette-gray","\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown-light"};function n(e){var a;const[t,n]=(0,s.ok)(),i=null!==(a=t.getAll(e))&&void 0!==a?a:[],r=["minprice","maxprice","minwidth","maxwidth","mindepth","maxdepth"];return{handleSearchParams:function(a){const s=new URLSearchParams(t);if(r.includes(e))return s.set(e,a),void n(s);const l=s.getAll(e);if(l.includes(a)){const t=l.filter((e=>e!==a));s.delete(e),t.forEach((a=>s.append(e,a)))}else s.append(e,a);n(s)},handleFilter:function(e){const a={},s=[],n=[];let i=null,r=null,c=null,o=null,d=null,p=null;for(const[x,h]of t.entries())"page"!==x&&("minprice"===x?i=parseFloat(h)||0:"maxprice"===x?r=parseFloat(h)||25e4:"minwidth"===x?c=parseFloat(h)||0:"maxwidth"===x?o=parseFloat(h)||1e4:"mindepth"===x?d=parseFloat(h)||0:"maxdepth"===x?p=parseFloat(h)||1e4:"description"===x?s.push(h):"colors"===x?n.push(l[h]):a[x]=a[x]?[...a[x],h]:[h]);e((e=>e.map((e=>{const t=Object.entries(a).every((a=>{let[t,s]=a;return s.includes(e[t])})),l=s.every((a=>!0===e[a])),x=(!r||e.price<=r)&&(!i||e.price>=i),h=(!o||e.width<=o)&&(!c||e.width>=c),m=(!p||e.depth<=p)&&(!d||e.depth>=d),u=0===n.length||e.colors.some((e=>n.includes(e)));return{...e,isShown:t&&l&&x&&h&&m&&u}}))),!1)},resetFilter:function(e){t.delete(e),n(t)},allFilterParams:i}}},8158:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var s=t(5046),l=t(5043),n=t(5475),i=t(2042),r=t(8967),c=t(630),o=t(9684),d=t(579);function p(){const{handleSearchParams:e,resetFilter:a,allFilterParams:t}=(0,c.A)("tag");return(0,d.jsx)("div",{className:"news-filter row center-x xsmall-text text-main text-gray up-case",children:(0,d.jsx)("div",{className:"row wrap",children:[{label:"\u0432\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",value:""},{label:"\u0442\u0440\u0435\u043d\u0434\u044b",value:"\u0442\u0440\u0435\u043d\u0434\u044b"},{label:"\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435",value:"\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435"},{label:"\u043e\u0431\u0437\u043e\u0440\u044b",value:"\u043e\u0431\u0437\u043e\u0440\u044b"},{label:"\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",value:"\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}].map((s=>{let{label:l,value:n}=s;const i=t.includes(n)||""===n&&0===t.length;return(0,d.jsx)("div",{className:"news-filter-item "+(i?"active":"inactive"),onClick:()=>n?e(n):a("tag"),children:(0,d.jsx)("span",{children:l})},n)}))})})}var x=t(3101),h=t(3546),m=t(6990),u=t(6822),g=t(2901),v=t(7555);function j(e){let{data:a,isLoading:t,searchParams:s,error:l}=e;const n=a&&a.filter((e=>!1!==(null===e||void 0===e?void 0:e.isShown))),i=a&&a.every((e=>!1===e.isShown));return(0,d.jsx)(h.N,{mode:"wait",children:l?(0,d.jsx)(v.A,{message:l.message}):!t&&a?i?(0,d.jsx)(u.A,{}):(0,d.jsx)(m.A,{className:"section-layout",children:n.map(((e,a)=>(0,d.jsx)(x.A,{el:e},e.id)))},s):(0,d.jsx)(g.A,{})})}function f(){var e;const[a]=(0,n.ok)(),t=parseInt(null!==(e=a.get("page"))&&void 0!==e?e:1),{data:s,error:x,isLoading:h,mutate:m}=(0,i.A)(["news",t,16]),{data:u}=(0,i.A)(["news"],r.R3),{handleFilter:g}=(0,c.A)();return(0,l.useEffect)((()=>{s&&g(m)}),[a,h]),(0,d.jsx)("section",{id:"news",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"row gap-10 xxxsmall-text text-main text-black up-case",children:[(0,d.jsx)(n.N_,{className:"text-gray",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,d.jsx)("span",{children:"/"}),(0,d.jsx)("span",{children:"\u043d\u043e\u0432\u043e\u0441\u0442\u0438"})]}),(0,d.jsx)(p,{}),(0,d.jsx)(j,{error:x,isLoading:h,searchParams:a,data:s}),u&&(0,d.jsx)(o.A,{scrollOffset:350,pagesCount:Math.ceil(u/16)})]})})}const w=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.A,{bg:"https://images.pexels.com/photos/25182965/pexels-photo-25182965/free-photo-of-flowers-in-vase-on-table.jpeg",id:"news-intro",posY:"50%",headline:"\u043d\u043e\u0432\u043e\u0441\u0442\u0438",description:"\u0421\u0432\u0435\u0436\u0438\u0435 \u0442\u0440\u0435\u043d\u0434\u044b \u0438 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435: <br/> \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0438\u0437 \u043c\u0438\u0440\u0430 \u043c\u0435\u0431\u0435\u043b\u0438"}),(0,d.jsx)(f,{})]})}}}]);
//# sourceMappingURL=158.f98486a4.chunk.js.map