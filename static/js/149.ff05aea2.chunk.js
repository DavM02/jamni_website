"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[149],{682:(t,e,i)=>{i.d(e,{A:()=>u});var n=i(2042),o=i(3440),a=i(7589),r=i(5065),d=i(8967),c=i(3216),s=i(5475);const u=function(t){const e=(0,o.h)((t=>t.addProduct)),{addProduct:i,products:u}=(0,a.o)(),{toggleAdded:l}=(0,r.Z)(),{toggleFav:p}=(0,r.Z)(),m=u.some((e=>t===e.id)),[g]=(0,s.ok)(),v=g.get("id"),{catalog:f}=(0,c.g)(),{data:h}=(0,n.A)([v,f],d.Gq);return{handleAddToCart:function(t){var i,n;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0;t&&t.preventDefault();const r=null!==a&&void 0!==a?a:h,d={catalog:r.id.split("_")[1],product:r.product,image:null!==(i=r.image)&&void 0!==i?i:r.images[0],name:r.name,collection:r.collection,id:r.id,price:r.price,quantity:null!==(n=r.quantity)&&void 0!==n?n:0,priceConfig:o&&o.length?o.reduce(((t,e)=>t+e.price*e.quantity),0):0,configuration:o&&o.length?o:void 0};if((null===t||void 0===t?void 0:t.target)instanceof HTMLFormElement){const e=new FormData(t.target);for(let[t,i]of e.entries())d[t]=i}e(d),l(),setTimeout((()=>{l()}),1500)},handleAddToFav:(t,e)=>{const n={catalog:t.id.split("_")[1],product:t.product,image:t.images[0],name:t.name,collection:t.collection,id:t.id,price:t.price};if(e){const t=new FormData(e.current);for(let[e,i]of t.entries())n[e]=i}i(n),p(),setTimeout((()=>{p()}),1500)},isFav:m}}},149:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(7589),o=i(3546),a=i(6990),r=i(3716),d=i(5073),c=i(2045),s=i(682),u=i(579);function l(){const{products:t,removeProduct:e,increaseQuantity:i,decreaseQuantity:l}=(0,n.o)(),{handleAddToCart:p}=(0,s.A)();return(0,u.jsx)("section",{id:"favorites",children:(0,u.jsx)("div",{className:"center-flex",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)(o.N,{mode:"wait",initial:!1,children:t.length>0?(0,u.jsx)(a.A,{children:(0,u.jsx)("ul",{className:"fav-items column gap-40",children:t.map((t=>(0,u.jsxs)(c.A,{product:t,children:[(0,u.jsx)(r.A,{product:t,increaseQuantity:i,decreaseQuantity:l,removeProduct:e}),(0,u.jsx)(d.A,{onClick:e=>{e.stopPropagation(),p(e,null,{...t,quantity:t.quantity})},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]},t.id)))})},"list"):(0,u.jsx)(a.A,{children:(0,u.jsx)("h5",{className:"text-center",children:"\u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"})},"no-found")})})})})}},7589:(t,e,i)=>{i.d(e,{o:()=>a});var n=i(4131),o=i(4893);const a=(0,n.v)((0,o.Zr)(((t,e)=>({products:[],addProduct:e=>{t((t=>{if(t.products.some((t=>t.id===e.id))){return{products:t.products.map((t=>t.id===e.id?{...t,quantity:t.quantity+1}:t))}}return{products:[...t.products,{...e,quantity:1}]}}))},removeProduct:e=>{t((t=>({products:t.products.filter((t=>t.id!==e))})))},increaseQuantity:e=>{t((t=>({products:t.products.map((t=>t.id===e?{...t,quantity:t.quantity+1}:t))})))},decreaseQuantity:(e,i)=>{t((t=>{let n=[];return n=1===i?t.products.filter((t=>t.id!==e)):t.products.map((t=>t.id===e?{...t,quantity:Math.max(1,t.quantity-1)}:t)),{products:n}}))}})),{name:"fav-storage",getStorage:()=>localStorage}))}}]);
//# sourceMappingURL=149.ff05aea2.chunk.js.map