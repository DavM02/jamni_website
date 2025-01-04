"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[977],{5046:(e,a,t)=>{t.d(a,{A:()=>i});t(5043);var s=t(579);function i(e){let{bg:a,posY:t,text:i,...l}=e;return(0,s.jsxs)("section",{...l,className:"intro center-gr",style:{background:`url(${a}) no-repeat`,"--posY":t},children:[(0,s.jsx)("div",{className:"mask-layer"}),(0,s.jsxs)("div",{className:"container text-center",children:[(0,s.jsx)("h2",{className:"text-light",children:i.headline}),i.description&&(0,s.jsx)("p",{className:"text-light small-text text-main up-case",dangerouslySetInnerHTML:{__html:i.description}})]})]})}},6840:(e,a,t)=>{t.d(a,{A:()=>p});t(5043);var s=t(4256),i=t(3546),l=t(7555),n=t(2901),r=t(6990),c=t(9634),d=t(5033),o=t(5475),m=t(579);function x(e){let{el:a}=e;return(0,m.jsxs)(o.N_,{to:`/catalog/${a.catalog}/${a.name.toLowerCase()}?id=${a.id}`,children:[(0,m.jsx)(d.A,{data:a}),(0,m.jsx)("div",{className:"slider-image",style:{height:a.slideId%2?"var(--moreitems-slider-img-height-even)":"var(--moreitems-slider-img-height-odd)"},children:(0,m.jsx)(c.LazyLoadImage,{src:a.images[1],width:"100%",height:"100%",effect:"blur",alt:`slider-image-${a.id+1}`})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"xxsmall-text text-main text-black up-case",children:a.name}),(0,m.jsxs)("span",{className:"xxxsmall-text  text-main text-black",children:[a.price.toLocaleString("ru-RU")," \u0440\u0443\u0431."]})]})]})}var h=t(3216),u=t(2042);function p(e){let{headline:a="\u0435\u0449\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}=e;const t=(0,h.g)()["*"].split("/")[0],{data:c,error:d,isLoading:o}=(0,u.A)([t,1,10]);return(0,m.jsx)("section",{id:"more-products",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)("h2",{children:a}),(0,m.jsx)("span",{className:"small-text text-main text-black up-case",children:"\u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"})]}),(0,m.jsx)(i.N,{mode:"wait",children:d?(0,m.jsx)(l.A,{message:d.message}):!o&&c?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(s.A,{itemWidth:"moreitems-slider-img-width",sliderData:c.map((e=>({...e,catalog:t}))),wrapper:x})})}):(0,m.jsx)(n.A,{})})]})})}},9684:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(5043);const i=t.p+"static/media/pagination-arrow-left.df03b068cc2d9c293788f72e40958200.svg";const l=t.p+"static/media/pagination-arrow-right.09326ff90cb67244b048fb55c1d2b033.svg";var n=t(5475),r=t(1192);var c=t(579);function d(e){let{pagesCount:a,scrollOffset:t}=e;const{pages:d,activePage:o,handlePagination:m}=function(e,a){var t;const[i,l]=(0,s.useState)(e>5?[1,2,3,4,5,"...",e]:Array(e).fill(null).map(((e,a)=>a+1))),[c,d]=(0,n.ok)(),o=parseInt(null!==(t=c.get("page"))&&void 0!==t?t:1),{scrollbarAccess:m}=(0,s.useContext)(r.x);return{pages:i,activePage:o,handlePagination:t=>{t>e||t<=0||"..."===t||(m.current.scrollTo(0,a+110,500),setTimeout((()=>{e>5&&l(t>=5&&t+2<e?[1,"...",t-1,t,t+1,"...",e]:t+2>=e?[1,"...",e-4,e-3,e-2,e-1,e]:[1,2,3,4,5,"...",e]),c.set("page",t),d(c)}),500))}}}(a,t);return(0,c.jsx)("div",{className:"pagination",children:(0,c.jsxs)("div",{className:"row gap-30 center-y end-x",children:[(0,c.jsx)("div",{className:"prev",onClick:()=>m(o-1),children:(0,c.jsx)("img",{src:i,alt:"prev"})}),(0,c.jsx)("ul",{className:"row gap-10 xsmall-text text-main",children:d.map(((e,a)=>(0,c.jsx)("li",{style:{pointerEvents:"..."!==e?"all":"none"},className:o==e&&"..."!==e?"active":"inactive",onClick:()=>m(e),children:e},a)))}),(0,c.jsx)("div",{className:"next",onClick:()=>m(o+1),children:(0,c.jsx)("img",{src:l,alt:"next"})})]})})}},5033:(e,a,t)=>{t.d(a,{A:()=>n});var s=t(7589),i=t(5065),l=t(579);function n(e){let{data:a}=e;const t=(0,s.o)((e=>e.addProduct)),{toggleFav:n}=(0,i.Z)();return(0,l.jsxs)("div",{className:"add-to-favorites",onClick:e=>{e.stopPropagation(),function(){const e={catalog:a.catalog,id:a.id,product:a.product,image:a.images[0],name:a.name,collection:a.collection,price:a.price};t(e),n(),setTimeout((()=>{n()}),1500)}()},children:[(0,l.jsx)("input",{type:"checkbox"}),(0,l.jsx)("svg",{width:"28",height:"25",viewBox:"-2 -1 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.000650381 6.49917C-0.0200806 5.03049 0.455348 3.59918 1.34726 2.44508C2.23918 1.29099 3.49338 0.484252 4.8997 0.160054C6.30602 -0.164144 7.77899 0.0139016 9.07178 0.664354C10.3646 1.31481 11.3986 2.39814 12.0006 3.73281C12.6041 2.39369 13.6424 1.30748 14.9404 0.65729C16.2384 0.00710175 17.7168 -0.167297 19.1263 0.163495C20.5358 0.494287 21.7903 1.31004 22.6782 2.47323C23.5661 3.63642 24.0332 5.0759 24.0006 6.54901C23.9291 8.42848 23.2881 10.2393 22.1658 11.7328C21.0431 13.2871 19.7227 14.6825 18.2392 15.8823C16.3827 17.4018 14.3879 18.737 12.282 19.8699L12.0006 19.9322L11.7193 19.7827C9.61342 18.6498 7.61863 17.3146 5.76212 15.7951C4.2786 14.5952 2.95817 13.1998 1.83551 11.6456C0.720273 10.1624 0.0797062 8.36573 0.000650381 6.49917Z",stroke:"black",strokeWidth:"1.5"})})]})}},6783:(e,a,t)=>{t.d(a,{A:()=>i});var s=t(579);function i(e){let{label:a,checked:t,children:i,...l}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"custom-checkbox",children:[(0,s.jsx)("input",{checked:t,...l,type:"checkbox"}),(0,s.jsx)("div",{className:"input-state"})]}),a&&(0,s.jsx)("label",{htmlFor:l.id,children:(0,s.jsx)("p",{className:"text-main xxsmall-text",style:{color:""+(t?"var(--black)":"var(--gray-text)")},children:i})})]})}},6822:(e,a,t)=>{t.d(a,{A:()=>r});t(5043);var s=t(241),i=t(3216),l=t(6990),n=t(579);function r(e){let{level:a}=e;const t=(0,i.Zp)();return(0,n.jsxs)(l.A,{className:"no-results center-gr",children:[(0,n.jsx)("h3",{className:"up-case",children:"no results found"}),(0,n.jsx)(s.A,{onClick:()=>t(null!==a&&void 0!==a?a:"."),children:"go back"})]},"no-results")}},630:(e,a,t)=>{t.d(a,{A:()=>l,m:()=>i});var s=t(5475);const i={"\u0441\u0435\u0440\u044b\u0439":"palette-gray-light","\u0447\u0435\u0440\u043d\u044b\u0439":"black","\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown","\u0431\u0435\u043b\u044b\u0439":"white","\u0431\u0435\u0436\u0435\u0432\u044b\u0439":"palette-beige","\u0437\u0435\u043b\u0435\u043d\u044b\u0439":"palette-green","\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439":"palette-gray","\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown-light"};function l(e){var a;const[t,l]=(0,s.ok)();return{handleSearchParams:function(a){const s=new URLSearchParams(t);if("min"===e||"max"===e)return s.set(e,a),void l(s);const i=s.getAll(e);if(i.includes(a)){const t=i.filter((e=>e!==a));s.delete(e),t.forEach((a=>s.append(e,a)))}else s.append(e,a);l(s)},handleFilter:function(e){const a={},s=[];let l=null,n=null;const r=[];for(const[c,d]of t.entries())"page"!==c&&("min"===c?l=parseFloat(d)||0:"max"===c?n=parseFloat(d)||25e4:"description"===c?s.push(d):"colors"===c?r.push(i[d]):a[c]=a[c]?[...a[c],d]:[d]);e((e=>e.map((e=>{const t=Object.entries(a).every((a=>{let[t,s]=a;return s.includes(e[t])})),i=s.every((a=>!0===e[a])),c=(!n||e.price<=n)&&(!l||e.price>=l),d=0===r.length||e.colors.some((e=>r.includes(e)));return{...e,isShown:t&&i&&c&&d}}))),!1)},resetFilter:function(e){t.delete(e),l(t)},allFilterParams:null!==(a=t.getAll(e))&&void 0!==a?a:[]}}},977:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ae});var s=t(5043),i=t(6325),l=t(686),n=t(5467),r=t(6352),c=t(4647),d=t(6313),o=t(7409),m=t(3216),x=t(5475),h=t(2042),u=t(8967),p=t(630),g=t(579);function j(e){let{headline:a}=e;const{allFilterParams:t,resetFilter:s,handleSearchParams:i}=(0,p.A)("description"),l=[{label:a,value:""},{label:"\u0441\u043a\u0438\u0434\u043a\u0438",value:"discount"},{label:"\u043d\u043e\u0432\u0438\u043d\u043a\u0438",value:"isNew"},{label:"\u0431\u0435\u0441\u0442\u0441\u0435\u043b\u043b\u0435\u0440\u044b",value:"bestseller"}];return(0,g.jsx)("div",{className:"main-filter column gap-15 xsmall-text text-main text-black up-case",children:l.map((e=>{let{label:a,value:l}=e;const n=t.includes(l)||""===l&&0===t.length;return(0,g.jsx)("span",{className:n?"active":"inactive",onClick:()=>l?i(l):s("description"),children:a},l)}))})}function v(e){let{headline:a,dataLength:t,elHeight:i,isOpen:l,children:n}=e;const[r,c]=(0,s.useState)(l);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"row center-y s-between",children:[(0,g.jsx)("span",{className:"xsmall-text up-case",children:a}),(0,g.jsx)("span",{className:"open-accordion",style:{margin:r?"-3px 23px 0px 0px":"0 25px 0 0"},onClick:()=>c(!r),children:r?"\u2014":"+"})]}),(0,g.jsx)("div",{className:"accordion",style:{height:r?t*i+15*(t-1)+20+"px":"0px"},children:n})]})}var f=t(6783);function b(e){let{filterParam:a,data:t}=e;const{handleSearchParams:s,allFilterParams:i}=(0,p.A)(a);return(0,g.jsx)("ul",{className:"column gap-15",children:t.map(((e,a)=>(0,g.jsxs)("li",{className:"row center-y gap-10",children:[(0,g.jsx)(f.A,{checked:i.includes(e),onChange:a=>s(e),id:e,value:e}),(0,g.jsx)("span",{children:e})]},a)))})}function N(e){let{collections:a}=e;return(0,g.jsx)("div",{className:"collection-filter xsmall-text text-main text-black up-case",children:(0,g.jsx)(v,{headline:"\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438",dataLength:a.length,elHeight:30,isOpen:!0,children:(0,g.jsx)(b,{filterParam:"collection",data:a})})})}function w(e){let{materials:a}=e;return(0,g.jsx)("div",{className:"material-filter xxsmall-text text-main text-black",children:(0,g.jsx)(v,{headline:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",dataLength:a.length,elHeight:20,isOpen:!0,children:(0,g.jsx)(b,{filterParam:"material",data:a})})})}function y(){return(0,g.jsx)("div",{className:"colors-filter xxsmall-text text-main text-black",children:(0,g.jsx)(v,{headline:"\u0446\u0432\u0435\u0442",dataLength:8,elHeight:20,isOpen:!0,children:(0,g.jsx)(b,{filterParam:"colors",data:["\u0441\u0435\u0440\u044b\u0439","\u0447\u0435\u0440\u043d\u044b\u0439","\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439","\u0431\u0435\u043b\u044b\u0439","\u0431\u0435\u0436\u0435\u0432\u044b\u0439","\u0437\u0435\u043b\u0435\u043d\u044b\u0439","\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439","\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439"]})})})}var k=t(1192);const A=e=>{var a,t;let{min:i,max:l,val:n}=e;const{handleSearchParams:r,allFilterParams:c}=(0,p.A)("min"),{handleSearchParams:d,allFilterParams:o}=(0,p.A)("max"),[m,x]=(0,s.useState)(Math.max(null!==(a=c[0])&&void 0!==a?a:i,i)),[h,u]=(0,s.useState)(Math.min(null!==(t=o[0])&&void 0!==t?t:l,l)),{scrollbarAccess:j}=(0,s.useContext)(k.x),v=(0,s.useRef)(null),f=(0,s.useCallback)((e=>Math.round((e-i)/(l-i)*100)),[i,l]);function b(){j.current.updatePluginOptions("overflow",{open:!1})}function N(){j.current.updatePluginOptions("overflow",{open:!0})}return(0,s.useEffect)((()=>{const e=f(m),a=f(h);v.current&&(v.current.style.left=`${e}%`,v.current.style.width=a-e+"%")}),[m,h,f]),(0,g.jsxs)("div",{className:"range-input",children:[(0,g.jsxs)("div",{className:"values row s-between gap-5 xxxsmall-text center-y",children:[(0,g.jsxs)("div",{className:"slider-left-value center-gr",children:[m.toLocaleString("ru-RU")," ",n]}),(0,g.jsx)("span",{children:"\u2014"}),(0,g.jsxs)("div",{className:"slider-right-valu center-gr",children:[h.toLocaleString("ru-RU")," ",n]})]}),(0,g.jsx)("input",{type:"range",min:i,max:l,value:m,onTouchStart:()=>N(),onTouchEnd:()=>{r(m),b()},onTouchCancel:()=>{r(m),b()},onMouseUp:()=>{r(m),b()},onChange:e=>{const a=Math.min(Number(e.target.value),h-1);x(a)},className:"thumb thumb-left",style:{zIndex:m>l-100&&"5"}}),(0,g.jsx)("input",{type:"range",min:i,max:l,value:h,onTouchStart:()=>N(),onTouchCancel:()=>{d(h),b()},onTouchEnd:()=>{d(h),b()},onMouseUp:()=>{d(h),b()},onChange:e=>{const a=Math.max(Number(e.target.value),m+1);u(a)},className:"thumb thumb-right"}),(0,g.jsxs)("div",{className:"slider",children:[(0,g.jsx)("div",{className:"slider-track"}),(0,g.jsx)("div",{ref:v,className:"slider-range"})]})]})};function C(e){let{min:a,max:t,val:s}=e;return(0,g.jsx)("div",{className:"price-filter xsmall-text text-main text-black up-case",children:(0,g.jsx)(v,{headline:"\u0446\u0435\u043d\u0430",dataLength:1,elHeight:65,isOpen:!0,children:(0,g.jsx)(A,{min:a,max:t,val:s})})})}function P(e){let{data:a}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j,{headline:a.headline}),(0,g.jsx)(N,{collections:a.collections}),(0,g.jsx)(w,{materials:a.materials}),(0,g.jsx)(C,{min:a.price.min,val:a.price.val,max:a.price.max}),(0,g.jsx)(y,{})]})}var S=t(3546),L=t(6990);function F(e){const{data:a}=(0,h.A)(["news"],u.R3),t=(0,s.useMemo)((()=>[Math.floor(Math.random()*a),"news"]),[a]),{data:i,error:l,isLoading:n}=(0,h.A)(t,u.Gq);return(0,g.jsx)("article",{...e,id:"article",className:"row",children:(0,g.jsx)(S.N,{mode:"wait",children:i&&(0,g.jsx)(L.A,{blur:!0,className:"self-end-y",children:(0,g.jsxs)(x.N_,{to:`/news/article/${i.title.toLowerCase().replace(/\s+/g,"_")}?id=${i.id}`,children:[(0,g.jsx)("span",{className:"text-main xxxsmall-text text-gray",children:"\u0421\u0442\u0430\u0442\u044c\u044f"}),(0,g.jsx)("span",{className:"text-main xxsmall-text text-black up-case",children:(0,g.jsxs)("b",{children:[i&&i.title.split(" ").slice(0,5).join(" "),"..."]})}),(0,g.jsxs)("p",{className:"text-main xxsmall-text text-black-secondary",children:[i&&i.description.split(" ").slice(0,10).join(" "),"..."]})]})})})})}var M=t(9634),_=t(5033);function $(e){let{item:a,el:t}=e;const s=(0,m.Zp)();return(0,g.jsxs)("div",{className:"filter-item",onClick:()=>s(`${a.name.toLowerCase()}?id=${a.id}`),style:{gridArea:t},children:[(0,g.jsx)(_.A,{data:a}),a?(0,g.jsx)("div",{className:"placeholder",style:{height:"l"===t?"calc(var(--filter-item-img-height) * 2 + 101px)":"var(--filter-item-img-height)"},children:(0,g.jsx)(M.LazyLoadImage,{effect:"opacity",height:"inherit",width:"100%",src:a.images[0],alt:a.name,className:"image"})}):null,(0,g.jsx)("span",{className:"xxsmall-text text-main text-black up-case",children:a.name}),(0,g.jsxs)("span",{className:"xxxsmall-text text-main",children:[a.price.toLocaleString("ru-RU")," \u0440\u0443\u0431."]}),(0,g.jsx)("div",{className:"palette row gap-10",children:a.colors.map(((e,a)=>(0,g.jsx)("div",{style:{backgroundColor:`var(--${e})`,border:"white"===e?"1px solid #DDDDDD":"none"}},a)))})]})}function q(e){let{data:a,catalog:t}=e;const s=a.filter((e=>!1!==(null===e||void 0===e?void 0:e.isShown)));let i=0;return(0,g.jsx)("div",{className:"filter-display",children:a&&["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"].slice(0,s.length>=9?s.length+1:s.length).map(((e,a)=>{if("j"===e)return(0,g.jsx)(F,{style:{gridArea:"j"}},"article");const l=s[i];return l&&i++,(0,g.jsx)($,{el:e,item:{...l,catalog:t}},l.id)}))})}var O=t(6822),D=t(2901),R=t(7555);function T(e){let{isLoading:a,searchParams:t,data:s,error:i,catalog:l}=e;const n=s&&s.every((e=>!1===e.isShown));return(0,g.jsx)(S.N,{mode:"wait",children:i?(0,g.jsx)(R.A,{message:i.message}):!a&&s?n?(0,g.jsx)(O.A,{}):(0,g.jsx)(L.A,{children:(0,g.jsx)(q,{catalog:l,data:s})},t):(0,g.jsx)(D.A,{})})}const I=t.p+"static/media/filter.a4f0829c29ad21ceb10147669edea6eb.svg";const E=t.p+"static/media/sort.80fbb66127018c957111332b4732ed26.svg",U={popularity:(e,a)=>e.rating-a.rating,descending:(e,a)=>e.price-a.price,ascending:(e,a)=>a.price-e.price};function z(){var e;const[a,t]=(0,s.useState)(!1),[i,l]=(0,s.useState)(null),n=(0,m.zy)().pathname.split("/")[2],[r]=(0,x.ok)(),c=parseInt(null!==(e=r.get("page"))&&void 0!==e?e:1),{mutate:d}=(0,h.A)([n,c,18]),o=(0,s.useCallback)((e=>{l(e),d((a=>a?[...a].sort(U[e]):a),!1)}),[d]);return(0,g.jsxs)("div",{className:"sorting row gap-5 center-y",onClick:()=>t((e=>!e)),children:[(0,g.jsx)("img",{src:E,alt:"sort"}),(0,g.jsx)("span",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),(0,g.jsx)(S.N,{mode:"wait",children:a&&(0,g.jsx)(L.A,{className:"sorting-params column gap-15 xsmall-text text-main text-black",blur:!0,children:Object.entries({popularity:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c",descending:"\u0426\u0435\u043d\u0430: \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0430\u044f",ascending:"\u0426\u0435\u043d\u0430: \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0430\u044f"}).map((e=>{let[a,t]=e;return(0,g.jsx)("div",{children:(0,g.jsx)("span",{className:i===a?"active":"inactive",onClick:o.bind(null,a),children:t})},a)}))})})]})}var H=t(8141),Z=t(1352);function W(e){let{data:a,showMobileParams:t,setShowMobileParams:s}=e;return(0,g.jsxs)(Z.A,{root:"modal-root",className:"filter-params",value:t,children:[(0,g.jsxs)("div",{className:"row s-between center-y",children:[(0,g.jsx)("span",{className:"text-heading text-black",children:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b"}),(0,g.jsxs)("div",{className:"menu-bars active",onClick:()=>s(!1),children:[(0,g.jsx)("div",{}),(0,g.jsx)("div",{})]})]}),(0,g.jsx)(P,{data:a})]})}function Y(e){let{data:a,setShowParams:t,query:i,isMobile:l}=e;const[n,r]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{l?t(!1):r(!1)}),[l]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"filter-header",children:[(0,g.jsxs)("div",{className:"row gap-10 xxxsmall-text text-main text-black up-case",children:[(0,g.jsx)(x.N_,{className:"text-gray",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,g.jsx)("span",{children:"/"}),(0,g.jsx)("span",{children:a.headline.split(" ")[1]})]}),(0,g.jsxs)("div",{className:"row s-between gap-10 xxsmall-text text-main text-black",children:[(0,g.jsxs)("div",{className:"filters row gap-5 center-y",onClick:()=>{l?r(!0):i&&t((e=>!e))},children:[(0,g.jsx)("img",{src:I,alt:"filter"}),(0,g.jsx)("span",{children:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b"})]}),(0,g.jsx)(z,{})]})]}),(0,g.jsx)(W,{data:a,setShowMobileParams:r,showMobileParams:n}),(0,g.jsx)(H.A,{root:"modal-root",value:n})]})}var Q=t(1955),B=t(9684);function G(e){var a;let{collections:t,materials:i,headline:l,price:n}=e;const r=(0,m.zy)().pathname.split("/")[2],[c]=(0,x.ok)(),d=parseInt(null!==(a=c.get("page"))&&void 0!==a?a:1),{data:o,error:j,isLoading:v,mutate:f}=(0,h.A)([r,d,18]),{data:b}=(0,h.A)([r],u.R3),{handleFilter:N}=(0,p.A)(),[w,y]=(0,s.useState)(!1);(0,s.useEffect)((()=>{o&&N(f)}),[c,v]);const k=(0,Q.A)("(max-width: 1023px)"),A=(0,Q.A)("(max-width: 480px)");return(0,g.jsx)("section",{id:"filter",children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)(Y,{isMobile:A,setShowParams:y,data:{collections:t,materials:i,headline:l,price:n},query:k&&!A}),(0,g.jsxs)("div",{className:"section-layout",children:[(0,g.jsx)(S.N,{initial:!1,mode:"wait",children:(!k&&!A||w)&&(0,g.jsx)(L.A,{blur:!0,className:"filter-params",children:(0,g.jsx)(P,{data:{collections:t,materials:i,headline:l,price:n}})})}),(0,g.jsx)(T,{error:j,isLoading:v,searchParams:c,data:o,catalog:r&&r}),b&&(0,g.jsx)(B.A,{scrollOffset:780,pagesCount:Math.ceil(b/17)})]})]})})}var J=t(6840);function K(e){let{el:a}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"slider-image",children:(0,g.jsx)(M.LazyLoadImage,{src:a.image,width:"100%",height:"100%",effect:"blur",alt:`slider-image-${a.id+1}`})}),(0,g.jsx)("h6",{className:"text-black up-case",children:a.name})]})}var V=t(4256);function X(e){let{sliderData:a}=e;return(0,g.jsx)("section",{id:"catalog-collections",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)(V.A,{sliderData:a,itemWidth:"catalog-slider-img-width",wrapper:K})})})}var ee=t(5046);function ae(){const e=[{name:"\u043a\u0430\u0440\u0442\u0438\u043d\u044b",image:l},{name:"\u0441\u0432\u0435\u0447\u0438",image:n},{name:"\u0432\u0430\u0437\u044b \u0438 \u043a\u0430\u0448\u043f\u043e",image:r},{name:"\u0437\u0435\u0440\u043a\u0430\u043b\u0430",image:c},{name:"\u0447\u0430\u0441\u044b",image:d},{name:"\u0448\u043a\u0430\u0442\u0443\u043b\u043a\u0438",image:o},{name:"\u043a\u0430\u0440\u0442\u0438\u043d\u044b",image:l},{name:"\u0441\u0432\u0435\u0447\u0438",image:n},{name:"\u0432\u0430\u0437\u044b \u0438 \u043a\u0430\u0448\u043f\u043e",image:r},{name:"\u0437\u0435\u0440\u043a\u0430\u043b\u0430",image:c},{name:"\u0447\u0430\u0441\u044b",image:d},{name:"\u0448\u043a\u0430\u0442\u0443\u043b\u043a\u0438",image:o}];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(ee.A,{id:"decor-intro",posY:"32%",bg:i,text:{headline:"\u0434\u0435\u043a\u043e\u0440",description:"\u0418\u0437\u044b\u0441\u043a\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438 \u0434\u043b\u044f \u0443\u044e\u0442\u0430 \u0438 \u0441\u0442\u0438\u043b\u044f: \u043e\u0431\u043e\u0433\u0430\u0442\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0430\u043a\u0446\u0435\u043d\u0442\u0430\u043c\u0438"}}),(0,g.jsx)(X,{sliderData:e}),(0,g.jsx)(G,{price:{min:1e3,max:25e4,val:"\u0440\u0443\u0431"},headline:"\u0432\u0435\u0441\u044c \u0434\u0435\u043a\u043e\u0440",materials:["\u0442\u043a\u0430\u043d\u044c","\u043a\u043e\u0436\u0430","\u0441\u0442\u0435\u043a\u043b\u043e","\u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430","\u043c\u0440\u0430\u043c\u043e\u0440"],collections:["\u043a\u0430\u0440\u0442\u0438\u043d\u044b","\u0441\u0432\u0435\u0447\u0438","\u0448\u043a\u0430\u0442\u0443\u043b\u043a\u0438","\u0432\u0430\u0437\u044b \u0438 \u043a\u0430\u0448\u043f\u043e","\u0437\u0435\u0440\u043a\u0430\u043b\u0430","\u0447\u0430\u0441\u044b"]}),(0,g.jsx)(J.A,{})]})}},7589:(e,a,t)=>{t.d(a,{o:()=>l});var s=t(4131),i=t(4893);const l=(0,s.v)((0,i.Zr)(((e,a)=>({products:[],addProduct:a=>{e((e=>{if(e.products.some((e=>e.id===a.id))){return{products:e.products.map((e=>e.id===a.id?{...e,quantity:e.quantity+1}:e))}}return{products:[...e.products,{...a,quantity:1}]}}))},removeProduct:a=>{e((e=>({products:e.products.filter((e=>e.id!==a))})))},increaseQuantity:a=>{e((e=>({products:e.products.map((e=>e.id===a?{...e,quantity:e.quantity+1}:e))})))},decreaseQuantity:a=>{e((e=>({products:e.products.map((e=>e.id===a?{...e,quantity:Math.max(1,e.quantity-1)}:e))})))}})),{name:"fav-storage",getStorage:()=>localStorage}))},7409:(e,a,t)=>{e.exports=t.p+"static/media/img_11.52901f81784901132a0e.webp"},4647:(e,a,t)=>{e.exports=t.p+"static/media/img_9.0073356ab0a81852cb49.webp"},6325:(e,a,t)=>{e.exports=t.p+"static/media/img_16.ce5378d03261964deece.webp"},6313:(e,a,t)=>{e.exports=t.p+"static/media/img_10.ee6a0100be4b32cba406.jpg"},686:(e,a,t)=>{e.exports=t.p+"static/media/img_6.96dcd179591d51c7c613.jpg"},5467:(e,a,t)=>{e.exports=t.p+"static/media/img_7.ec293b3a045a6f81da91.jpg"},6352:(e,a,t)=>{e.exports=t.p+"static/media/img_8.9f0c0c66aee4b97f80f4.jpg"}}]);
//# sourceMappingURL=977.1579913e.chunk.js.map