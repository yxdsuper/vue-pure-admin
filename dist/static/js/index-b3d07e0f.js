import{A as P,B as C,E as T,G as _,x as k,H as x,L as N}from"./index-00a34d45.js";function b(e){var n;const t=x(e);return(n=t==null?void 0:t.$el)!=null?n:t}const w=P?window:void 0,A=P?window.document:void 0;function O(...e){let n,t,r,l;if(C(e[0])||Array.isArray(e[0])?([t,r,l]=e,n=w):[n,t,r,l]=e,!n)return T;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const o=[],u=()=>{o.forEach(i=>i()),o.length=0},a=(i,m,v)=>(i.addEventListener(m,v,l),()=>i.removeEventListener(m,v,l)),f=VueDemi.watch(()=>b(n),i=>{u(),i&&o.push(...t.flatMap(m=>r.map(v=>a(i,m,v))))},{immediate:!0,flush:"post"}),p=()=>{f(),u()};return _(p),p}function U(e,n,t={}){const{window:r=w,ignore:l,capture:o=!0,detectIframe:u=!1}=t;if(!r)return;let a=!0,f;const p=s=>{r.clearTimeout(f);const c=b(e);if(!(!c||c===s.target||s.composedPath().includes(c))){if(!a){a=!0;return}n(s)}},i=s=>l&&l.some(c=>{const d=b(c);return d&&(s.target===d||s.composedPath().includes(d))}),m=[O(r,"click",p,{passive:!0,capture:o}),O(r,"pointerdown",s=>{const c=b(e);c&&(a=!s.composedPath().includes(c)&&!i(s))},{passive:!0}),O(r,"pointerup",s=>{if(s.button===0){const c=s.composedPath();s.composedPath=()=>c,f=r.setTimeout(()=>p(s),50)}},{passive:!0}),u&&O(r,"blur",s=>{var c;const d=b(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(d!=null&&d.contains(r.document.activeElement))&&n(s)})].filter(Boolean);return()=>m.forEach(s=>s())}const Q=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function W(...e){let n,t,r={};e.length===3?(n=e[0],t=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],r=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:l=w,eventName:o="keydown",passive:u=!1}=r,a=Q(n);return O(l,o,p=>{a(p)&&t(p)},u)}function G(e,n=null){const t=VueDemi.getCurrentInstance();let r=()=>{};const l=VueDemi.customRef((o,u)=>(r=u,{get(){var a,f;return o(),(f=(a=t==null?void 0:t.proxy)==null?void 0:a.$refs[e])!=null?f:n},set(){}}));return k(r),VueDemi.onUpdated(r),l}function R(e,n=!1){const t=VueDemi.ref(),r=()=>t.value=Boolean(e());return r(),k(r,n),t}const E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y="__vueuse_ssr_handlers__";E[y]=E[y]||{};E[y];var h=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,D=(e,n)=>{var t={};for(var r in e)z.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&h)for(var r of h(e))n.indexOf(r)<0&&V.call(e,r)&&(t[r]=e[r]);return t};function H(e,n,t={}){const r=t,{window:l=w}=r,o=D(r,["window"]);let u;const a=R(()=>l&&"ResizeObserver"in l),f=()=>{u&&(u.disconnect(),u=void 0)},p=VueDemi.watch(()=>b(e),m=>{f(),a.value&&l&&m&&(u=new ResizeObserver(n),u.observe(m,o))},{immediate:!0,flush:"post"}),i=()=>{f(),p()};return _(i),{isSupported:a,stop:i}}const I=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function K(e,n={}){const{document:t=A,autoExit:r=!1}=n,l=e||(t==null?void 0:t.querySelector("html")),o=VueDemi.ref(!1);let u=I[0];const a=R(()=>{if(t){for(const d of I)if(d[1]in t)return u=d,!0}else return!1;return!1}),[f,p,i,,m]=u;async function v(){!a.value||(t!=null&&t[i]&&await t[p](),o.value=!1)}async function s(){if(!a.value)return;await v();const d=b(l);d&&(await d[f](),o.value=!0)}async function c(){o.value?await v():await s()}return t&&O(t,m,()=>{o.value=!!(t!=null&&t[i])},!1),r&&_(v),{isSupported:a,isFullscreen:o,enter:s,exit:v,toggle:c}}var g;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(g||(g={}));var L=Object.defineProperty,S=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,F=(e,n,t)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,q=(e,n)=>{for(var t in n||(n={}))j.call(n,t)&&F(e,t,n[t]);if(S)for(var t of S(n))M.call(n,t)&&F(e,t,n[t]);return e};const B={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};q({linear:N},B);export{K as a,H as b,U as c,W as o,G as t,O as u};