"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[82],{7395:(e,s,t)=>{t.d(s,{A:()=>a});t(5043);const a=t.p+"static/media/arrow-left.663964bd5818d0ae86708ff85e9360e8.svg"},8150:(e,s,t)=>{t.d(s,{A:()=>a});t(5043);const a=t.p+"static/media/arrow-right.546c00a8f4fc58f1ad76de5d0c8aae18.svg"},8321:(e,s,t)=>{t.d(s,{A:()=>d});var a=t(5043),i=t(7395),n=t(8150),r=t(6255),l=t(579);const c=e=>{let{onPrev:s,onNext:t,itemsCount:c}=e;const[d,x]=(0,a.useState)(0),m=(0,r.A)();return(0,l.jsxs)("div",{className:"slider-nav row center-y s-between gap-20",children:[(0,l.jsx)("button",{type:"button",className:"center-gr",onClick:()=>{s(),m(700,(()=>{x((e=>0===e?c-2:e-1))}))},children:(0,l.jsx)("img",{width:8.5,src:i.A,alt:"left-arrow"})}),(0,l.jsx)("div",{className:"slider-indicator",children:(0,l.jsx)("div",{className:"indicator-line",style:{left:100/c*d+"%"}})}),(0,l.jsx)("button",{type:"button",className:"center-gr",onClick:()=>{t(),m(700,(()=>{x((e=>(e+1)%(c-1)))}))},children:(0,l.jsx)("img",{width:8.5,src:n.A,alt:"right-arrow"})})]})};function d(e){let{sliderData:s,wrapper:t,children:i}=e;const n=s.map(((e,s)=>({...e,id:s}))),[d,x]=(0,a.useState)(n),[m,o]=(0,a.useState)(0),[h,j]=(0,a.useState)(!1),u=(0,r.A)(),g=(0,a.useRef)(null);return(0,a.useEffect)((()=>()=>clearTimeout(g.current)),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"slider-container infinite-slider",children:[i,(0,l.jsx)("div",{className:"slider-wrapper",children:d.map(((e,s)=>(0,l.jsx)(t,{adjustTransition:h,transformIndex:s-m,el:e},e.id)))})]}),(0,l.jsx)(c,{onPrev:()=>{j(!0),u(700,(()=>{o((e=>e-1)),g.current=setTimeout((()=>{x((e=>[e[e.length-1],...e.slice(0,-1)])),o(0),j(!1)}),700)}))},onNext:()=>{j(!0),u(700,(()=>{o((e=>e+1)),g.current=setTimeout((()=>{x((e=>{const[s,...t]=e;return[...t,s]})),o(0),j(!1)}),700)}))},itemsCount:d.length})]})}},5046:(e,s,t)=>{t.d(s,{A:()=>i});t(5043);var a=t(579);function i(e){let{bg:s,posY:t,text:i,...n}=e;return(0,a.jsxs)("section",{...n,className:"intro center-gr",style:{background:`url(${s}) no-repeat`,"--posY":t},children:[(0,a.jsx)("div",{className:"mask-layer"}),(0,a.jsxs)("div",{className:"container text-center",children:[(0,a.jsx)("h2",{className:"text-light",children:i.headline}),i.description&&(0,a.jsx)("p",{className:"text-light small-text text-main up-case",dangerouslySetInnerHTML:{__html:i.description}})]})]})}},8934:(e,s,t)=>{t.d(s,{A:()=>r});var a=t(9634),i=t(3216),n=t(579);function r(e){let{el:s,height:t}=e;const r=(0,i.Zp)();return(0,n.jsxs)("div",{className:"news-item",onClick:()=>r(`/news/article/${s.title.toLowerCase().replace(/\s+/g,"_")}?id=${s.id}`),children:[(0,n.jsx)("div",{className:"news-image placeholder",style:t?{height:`${t}`}:{},children:(0,n.jsx)(a.LazyLoadImage,{src:s.previewImage,width:"100%",height:"100%",effect:"blur",alt:`news-image-${s.id+1}`})}),(0,n.jsxs)("div",{className:"row s-between gap-10 xxxsmall-text text-main up-case",children:[(0,n.jsx)("span",{children:s.tag}),(0,n.jsx)("span",{children:s.date})]}),(0,n.jsx)("span",{className:"xsmall-text text-black text-main up-case",children:s.title}),(0,n.jsx)("p",{className:"xsmall-text text-black text-main",children:s.description})]})}},2901:(e,s,t)=>{t.d(s,{A:()=>n});t(5043);var a=t(6990),i=t(579);function n(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("div",{className:"loading row center-x center-y",children:(0,i.jsx)("h2",{children:"Loading..."})})})}},7555:(e,s,t)=>{t.d(s,{A:()=>n});t(5043);var a=t(6990),i=t(579);function n(e){let{message:s}=e;return(0,i.jsx)(a.A,{className:"error row center-x center-y",children:(0,i.jsx)("h2",{className:"text-center",children:s})})}},6255:(e,s,t)=>{t.d(s,{A:()=>i});var a=t(5043);function i(){const[e,s]=(0,a.useState)(!1),t=(0,a.useRef)(null);return(0,a.useEffect)((()=>()=>{t.current&&clearTimeout(t.current)}),[]),function(a,i){e||(s(!0),i(),t.current=setTimeout((()=>{s(!1)}),a))}}},3082:(e,s,t)=>{t.r(s),t.d(s,{default:()=>L});t(5043);var a=t(5046),i=t(9278),n=t(3216),r=t(8321),l=t(2042),c=t(8934),d=t(579);function x(e){let{el:s,adjustTransition:t,transformIndex:a}=e;return(0,d.jsx)("div",{className:"slider-item",style:{left:`calc((var(--moreitems-slider-img-width) + 20px) * ${a})`,transition:t?"var(--transition) left 0.7s":"unset"},children:(0,d.jsx)(c.A,{el:{...s,description:s.description.split(" ").slice(0,8).join(" ")+"..."},height:s.id%2?"var(--moreitems-slider-img-height-even)":"var(--moreitems-slider-img-height-odd)"})})}var m=t(2901),o=t(7555),h=t(3546),j=t(6990);function u(){const{data:e,error:s,isLoading:t}=(0,l.A)(["news",1,16]);return(0,d.jsx)("section",{id:"more-articles",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsx)("h2",{children:"\u0435\u0449\u0435 \u0441\u0442\u0430\u0442\u044c\u0438"}),(0,d.jsx)("span",{className:"small-text text-main text-black up-case",children:"\u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"})]}),(0,d.jsx)(h.N,{mode:"wait",children:s?(0,d.jsx)(o.A,{message:s.message}):!t&&e?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(j.A,{children:(0,d.jsx)(r.A,{sliderData:e.slice(0,10),wrapper:x})})}):(0,d.jsx)(m.A,{})})]})})}var g=t(5475),p=t(8967);function N(e){let{title:s}=e;return(0,d.jsx)("div",{className:"a",children:(0,d.jsx)("span",{className:"xsmall-text text-main up-case",children:s})})}function f(e){let{fullText:s}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"gap-a"}),(0,d.jsx)("div",{className:"b",children:(0,d.jsx)("p",{className:"xsmall-text text-main",children:s[0]})}),(0,d.jsx)("div",{className:"c",children:(0,d.jsx)("p",{className:"xsmall-text text-main",children:s[1]})}),(0,d.jsx)("div",{className:"gap-b"}),(0,d.jsx)("div",{className:"d",children:(0,d.jsx)("p",{className:"xsmall-text text-main",children:s[0]})})]})}var v=t(9634);function w(e){let{images:s}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"article-image e",children:(0,d.jsx)(v.LazyLoadImage,{src:s[0],width:"100%",height:"100%",effect:"blur",alt:"article-image"})}),(0,d.jsx)("div",{className:"article-image h",children:(0,d.jsx)(v.LazyLoadImage,{src:s[1],width:"100%",height:"100%",effect:"blur",alt:"article-image"})}),(0,d.jsx)("div",{className:"gap-c"}),(0,d.jsx)("div",{className:"article-image i",children:(0,d.jsx)(v.LazyLoadImage,{src:s[2],width:"100%",height:"100%",effect:"blur",alt:"article-image"})})]})}function A(e){let{careRules:s}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"f",children:(0,d.jsx)("span",{className:"xsmall-text text-main up-case",children:"10 \u043f\u0440\u0430\u0432\u0438\u043b \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u043c\u0435\u0431\u0435\u043b\u044c\u044e"})}),(0,d.jsx)("ol",{className:"xsmall-text text-main g",children:s.map(((e,s)=>(0,d.jsx)("li",{children:(0,d.jsx)("p",{children:e})},s)))})]})}function b(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"j",children:(0,d.jsx)("span",{className:"xsmall-text text-main up-case",children:"\u043f\u043e\u043c\u043e\u0449\u044c"})}),(0,d.jsx)("div",{className:"k",children:(0,d.jsx)("p",{className:"xsmall-text text-main",children:"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0443\u0445\u043e\u0434\u0443 \u0437\u0430 \u0432\u0430\u0448\u0435\u0439 \u043c\u044f\u0433\u043a\u043e\u0439 \u043c\u0435\u0431\u0435\u043b\u044c\u044e - \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443 info@jamni.ru \u0438 \u0432\u0430\u0441 \u043f\u0440\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u0435\u0442 \u043d\u0430\u0448 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433."})})]})}function y(e){let{data:s}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N,{title:s.title}),(0,d.jsx)(f,{fullText:s.fullText}),(0,d.jsx)(w,{images:s.images}),(0,d.jsx)(A,{careRules:s.careRules}),(0,d.jsx)(b,{})]})}function k(){const[e]=(0,g.ok)(),{title:s}=(0,n.g)(),t=parseInt(e.get("id")),{data:a,error:i,isLoading:r}=(0,l.A)([t,s],p.vO);return(0,d.jsx)("section",{id:"news-article",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"row wrap center-y gap-10 xxxsmall-text text-main text-black up-case",children:[(0,d.jsx)(g.N_,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,d.jsx)("span",{children:"/"}),(0,d.jsx)(g.N_,{to:"/news",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),(0,d.jsx)("span",{children:"/"}),(0,d.jsx)("span",{children:s.replaceAll("_"," ")})]}),(0,d.jsx)(h.N,{mode:"wait",children:i?(0,d.jsx)(o.A,{message:i.message}):a&&!r?(0,d.jsx)(j.A,{className:"section-layout",children:(0,d.jsx)(y,{data:a})}):(0,d.jsx)(m.A,{})})]})})}function L(){const{title:e}=(0,n.g)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.A,{bg:i,id:"article-intro",posY:"85%",text:{headline:e.replaceAll("_"," ")}}),(0,d.jsx)(k,{}),(0,d.jsx)(u,{})]})}},9278:(e,s,t)=>{e.exports=t.p+"static/media/img_22.fe7e6764054d7643ebb3.webp"}}]);
//# sourceMappingURL=82.0c53bdef.chunk.js.map