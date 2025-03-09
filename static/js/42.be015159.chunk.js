"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[42],{2042:function(e,r,n){n.d(r,{A:function(){return b}});var t=n(675),a=n(467),u=n(9379),i=n(5544),s=n(5043),o=n(9461),c=n(1558),f=s.use||function(e){if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((function(r){e.status="fulfilled",e.value=r}),(function(r){e.status="rejected",e.reason=r})),e)},d={dedupe:!0};c.qv.defineProperty(c.BE,"defaultValue",{value:c.sb});var l=(0,c.qm)((function(e,r,n){var l=n.cache,b=n.compare,v=n.suspense,g=n.fallbackData,E=n.revalidateOnMount,p=n.revalidateIfStale,h=n.refreshInterval,R=n.refreshWhenHidden,V=n.refreshWhenOffline,T=n.keepPreviousData,k=c.bZ.get(l),O=(0,i.A)(k,4),m=O[0],A=O[1],w=O[2],L=O[3],C=(0,c.lK)(e),y=(0,i.A)(C,2),S=y[0],_=y[1],D=(0,s.useRef)(!1),x=(0,s.useRef)(!1),I=(0,s.useRef)(S),N=(0,s.useRef)(r),F=(0,s.useRef)(n),P=function(){return F.current},j=function(){return P().isVisible()&&P().isOnline()},H=(0,c.r9)(l,S),q=(0,i.A)(H,4),M=q[0],Z=q[1],U=q[2],W=q[3],X=(0,s.useRef)({}).current,B=(0,c.b0)(g)?n.fallback[S]:g,K=function(e,r){for(var n in X){var t=n;if("data"===t){if(!b(e[t],r[t])){if(!(0,c.b0)(e[t]))return!1;if(!b(ne,r[t]))return!1}}else if(r[t]!==e[t])return!1}return!0},z=(0,s.useMemo)((function(){var e=!!S&&!!r&&((0,c.b0)(E)?!P().isPaused()&&!v&&(!!(0,c.b0)(p)||p):E),n=function(r){var n=(0,c.rL)(r);return delete n._k,e?(0,u.A)({isValidating:!0,isLoading:!0},n):n},t=M(),a=W(),i=n(t),s=t===a?i:n(a),o=i;return[function(){var e=n(M());return K(e,o)?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},function(){return s}]}),[l,S]),G=(0,o.useSyncExternalStore)((0,s.useCallback)((function(e){return U(S,(function(r,n){K(n,r)||e()}))}),[l,S]),z[0],z[1]),J=!D.current,Q=m[S]&&m[S].length>0,Y=G.data,$=(0,c.b0)(Y)?B:Y,ee=G.error,re=(0,s.useRef)($),ne=T?(0,c.b0)(Y)?re.current:Y:$,te=!(Q&&!(0,c.b0)(ee))&&(J&&!(0,c.b0)(E)?E:!P().isPaused()&&(v?!(0,c.b0)($)&&p:(0,c.b0)($)||p)),ae=!!(S&&r&&J&&te),ue=(0,c.b0)(G.isValidating)?ae:G.isValidating,ie=(0,c.b0)(G.isLoading)?ae:G.isLoading,se=(0,s.useCallback)(function(){var e=(0,a.A)((0,t.A)().mark((function e(r){var a,u,s,o,f,d,l,v,g,E,p,h,R,V,T,k;return(0,t.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=N.current,S&&a&&!x.current&&!P().isPaused()){e.next=3;break}return e.abrupt("return",!1);case 3:return o=!0,f=r||{},d=!w[S]||!f.dedupe,l=function(){return c.dO?!x.current&&S===I.current&&D.current:S===I.current},v={isValidating:!1,isLoading:!1},g=function(){Z(v)},E=function(){var e=w[S];e&&e[1]===s&&delete w[S]},p={isValidating:!0},(0,c.b0)(M().data)&&(p.isLoading=!0),e.prev=12,d&&(Z(p),n.loadingTimeout&&(0,c.b0)(M().data)&&setTimeout((function(){o&&l()&&P().onLoadingSlow(S,n)}),n.loadingTimeout),w[S]=[a(_),(0,c.lg)()]),h=(0,i.A)(w[S],2),u=h[0],s=h[1],e.next=19,u;case 19:if(u=e.sent,d&&setTimeout(E,n.dedupingInterval),w[S]&&w[S][1]===s){e.next=24;break}return d&&l()&&P().onDiscarded(S),e.abrupt("return",!1);case 24:if(v.error=c.ZH,R=A[S],(0,c.b0)(R)||!(s<=R[0]||s<=R[1]||0===R[1])){e.next=30;break}return g(),d&&l()&&P().onDiscarded(S),e.abrupt("return",!1);case 30:V=M().data,v.data=b(V,u)?V:u,d&&l()&&P().onSuccess(u,S,n),e.next=41;break;case 35:e.prev=35,e.t0=e.catch(12),E(),T=P(),k=T.shouldRetryOnError,T.isPaused()||(v.error=e.t0,d&&l()&&(T.onError(e.t0,S,T),(!0===k||(0,c.Tn)(k)&&k(e.t0))&&(P().revalidateOnFocus&&P().revalidateOnReconnect&&!j()||T.onErrorRetry(e.t0,S,T,(function(e){var r=m[S];r&&r[0]&&r[0](c.bu.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(f.retryCount||0)+1,dedupe:!0}))));case 41:return o=!1,g(),e.abrupt("return",!0);case 44:case"end":return e.stop()}}),e,null,[[12,35]])})));return function(r){return e.apply(this,arguments)}}(),[S,l]),oe=(0,s.useCallback)((function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return c.mF.apply(void 0,[l,I.current].concat(r))}),[]);if((0,c.Es)((function(){N.current=r,F.current=n,(0,c.b0)(Y)||(re.current=Y)})),(0,c.Es)((function(){if(S){var e=se.bind(c.ZH,d),r=0,n=(0,c.aw)(S,m,(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n==c.bu.FOCUS_EVENT){var a=Date.now();P().revalidateOnFocus&&a>r&&j()&&(r=a+P().focusThrottleInterval,e())}else if(n==c.bu.RECONNECT_EVENT)P().revalidateOnReconnect&&j()&&e();else{if(n==c.bu.MUTATE_EVENT)return se();if(n==c.bu.ERROR_REVALIDATE_EVENT)return se(t)}}));return x.current=!1,I.current=S,D.current=!0,Z({_k:_}),te&&((0,c.b0)($)||c.X3?e():(0,c.mf)(e)),function(){x.current=!0,n()}}}),[S]),(0,c.Es)((function(){var e;function r(){var r=(0,c.Tn)(h)?h(M().data):h;r&&-1!==e&&(e=setTimeout(n,r))}function n(){M().error||!R&&!P().isVisible()||!V&&!P().isOnline()?r():se(d).then(r)}return r(),function(){e&&(clearTimeout(e),e=-1)}}),[h,R,V,S]),(0,s.useDebugValue)(ne),v&&(0,c.b0)($)&&S){if(!c.dO&&c.X3)throw new Error("Fallback data is required when using suspense in SSR.");N.current=r,F.current=n,x.current=!1;var ce=L[S];if(!(0,c.b0)(ce)){var fe=oe(ce);f(fe)}if(!(0,c.b0)(ee))throw ee;var de=se(d);(0,c.b0)(ne)||(de.status="fulfilled",de.value=!0),f(de)}return{mutate:oe,get data(){return X.data=!0,ne},get error(){return X.error=!0,ee},get isValidating(){return X.isValidating=!0,ue},get isLoading(){return X.isLoading=!0,ie}}})),b=(0,c.Ht)(l,(function(e){return function(r,n,t){return t.revalidateOnFocus=!1,t.revalidateIfStale=!1,t.revalidateOnReconnect=!1,e(r,n,t)}}))}}]);
//# sourceMappingURL=42.be015159.chunk.js.map