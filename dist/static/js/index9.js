import{d as E,r as h,ad as dt,X as R,a as P,ae as rt,g as _,n as A,l as ft,v as mt,h as d,af as $,j as b,t as z,k as D,x as T,p as pt,m as gt,W as x,ag as ht,G as C,ah as vt,ai as yt,u as w,F as wt,y as _t,aj as bt,ak as N,al as At,c as B,f as Ot,w as k,am as It,an as St,ao as $t}from"./index.js";import{b as zt}from"./back_top.js";function Et(t=6){return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)}const xt=["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399"];function Ct(t,e){return Math.floor(Math.random()*(e-t+1))+t}function kt(){return xt[Ct(0,4)]}const Lt="https://www.getphotoblanket.com",Rt=({page:t=1,pageSize:e=20})=>{const o=`${Lt}/products.json?page=${t}&limit=${e}`;return fetch(o).then(n=>n.json()).then(n=>n.products).then(n=>n.map(r=>({id:Et(),star:!1,price:r.variants[0].price,src:{original:r.images[0].src},backgroundColor:kt(),name:r.title})))},Pt="/vue-pure-admin/static/png/error.png",Tt="/vue-pure-admin/static/png/loading.png";function jt(t,e){const o=t.getBoundingClientRect();if(!e)return o.top>=0&&o.bottom<=window.innerHeight;const n=e.getBoundingClientRect();return o.top>=n.top&&o.bottom<=n.bottom}async function Dt(t){return await T(),t.value instanceof HTMLElement?t.value:t.value?document.querySelector(t.value):null}function M(t){let e=`0px 0px ${t.distance}px 0px`;t.top&&(e=`${t.distance}px 0px 0px 0px`);const o=new IntersectionObserver(n=>{n[0].isIntersecting&&(t.firstload&&t.emit(),t.firstload=!0)},{root:t.parentEl,rootMargin:e});return o.observe(t.infiniteLoading.value),o}const it=(t,e)=>{const o=t.__vccOpts||t;for(const[n,r]of e)o[n]=r;return o},Nt={},Bt=t=>(pt("data-v-d3e37633"),t=t(),gt(),t),Mt={class:"container"},Vt=Bt(()=>d("div",{class:"spinner"},null,-1)),Ft=[Vt];function Wt(t,e){return _(),A("div",Mt,Ft)}const Gt=it(Nt,[["render",Wt],["__scopeId","data-v-d3e37633"]]),Ht={class:"state-error"},Ut=E({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(t,{emit:e}){const o=t;let n=null,r=0;const s=h(null),i=h(""),{top:a,firstload:c,distance:l}=o,{identifier:g,target:f}=dt(o),u={infiniteLoading:s,top:a,firstload:c,distance:l,parentEl:null,emit(){r=(u.parentEl||document.documentElement).scrollHeight,m.loading(),e("infinite",m)}},m={loading(){i.value="loading"},async loaded(){i.value="loaded";const p=u.parentEl||document.documentElement;await T(),a&&(p.scrollTop=p.scrollHeight-r),jt(s.value,u.parentEl)&&u.emit()},complete(){i.value="complete",n==null||n.disconnect()},error(){i.value="error"}};return R(g,()=>{n==null||n.disconnect(),n=M(u)}),P(async()=>{u.parentEl=await Dt(f),n=M(u)}),rt(()=>{n==null||n.disconnect()}),(p,y)=>(_(),A("div",{ref_key:"infiniteLoading",ref:s,style:{"min-height":"1px"}},[ft(d("div",null,[$(p.$slots,"spinner",{},()=>[b(Gt)],!0)],512),[[mt,i.value=="loading"]]),i.value=="complete"?$(p.$slots,"complete",{key:0},()=>{var v;return[d("span",null,z(((v=p.slots)==null?void 0:v.complete)||"No more results!"),1)]},!0):D("",!0),i.value=="error"?$(p.$slots,"error",{key:1,retry:u.emit},()=>{var v;return[d("span",Ht,[d("span",null,z(((v=p.slots)==null?void 0:v.error)||"Oops something went wrong!"),1),d("button",{class:"retry",onClick:y[0]||(y[0]=(...O)=>u.emit&&u.emit(...O))},"retry")])]},!0):D("",!0)],512))}}),Kt=it(Ut,[["__scopeId","data-v-a7077831"]]);function Xt(t){return vt()?(yt(t),!0):!1}const st=typeof window<"u";function Yt(t,e){function o(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}return o}function qt(t,e={}){let o,n;return s=>{const i=w(t),a=w(e.maxWait);if(o&&clearTimeout(o),i<=0||a!==void 0&&a<=0)return n&&(clearTimeout(n),n=null),s();a&&!n&&(n=setTimeout(()=>{o&&clearTimeout(o),n=null,s()},a)),o=setTimeout(()=>{n&&clearTimeout(n),n=null,s()},i)}}function Jt(t,e=200,o={}){return Yt(qt(e,o),t)}function Qt(t){var e;const o=w(t);return(e=o==null?void 0:o.$el)!=null?e:o}const Zt=st?window:void 0,V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";V[F]=V[F]||{};var W=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,ne=(t,e)=>{var o={};for(var n in t)te.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&W)for(var n of W(t))e.indexOf(n)<0&&ee.call(t,n)&&(o[n]=t[n]);return o};function oe(t,e,o={}){const n=o,{window:r=Zt}=n,s=ne(n,["window"]);let i;const a=r&&"ResizeObserver"in r,c=()=>{i&&(i.disconnect(),i=void 0)},l=R(()=>Qt(t),f=>{c(),a&&r&&f&&(i=new ResizeObserver(e),i.observe(f,s))},{immediate:!0,flush:"post"}),g=()=>{c(),l()};return Xt(g),{isSupported:a,stop:g}}var G,H;st&&(window!=null&&window.navigator)&&((G=window==null?void 0:window.navigator)!=null&&G.platform)&&/iP(ad|hone|od)/.test((H=window==null?void 0:window.navigator)==null?void 0:H.platform);const re=({breakpoints:t,wrapperWidth:e,gutter:o,hasAroundGutter:n,initWidth:r})=>{const s=Object.keys(t).map(l=>Number(l)).sort((l,g)=>l-g);let i=e,a=!1;for(const l of s)if(e<=l){i=l,a=!0;break}if(!a)return r;const c=t[i].rowPerView;return n?(e-o)/c-o:(e-(c-1)*o)/c};function ie(t){const e=h(0),o=h(null);oe(o,i=>{const a=i[0],{width:c}=a.contentRect;e.value=c});const n=C(()=>re({wrapperWidth:e.value,breakpoints:t.breakpoints,gutter:t.gutter,hasAroundGutter:t.hasAroundGutter,initWidth:t.width})),r=C(()=>{const i=t.hasAroundGutter?-t.gutter:t.gutter;return Math.floor((e.value+i)/(n.value+t.gutter))}),s=C(()=>{const i=t.hasAroundGutter?t.gutter:-t.gutter,a=r.value*(n.value+t.gutter)+i;return(e.value-a)/2});return{waterfallWrapper:o,wrapperWidth:e,colWidth:n,cols:r,offsetX:s}}function at(t,e){return new RegExp(`(^|\\s)${e}(\\s|$)`).test(t.className)}function U(t,e){if(at(t,e))return;const o=t.className.split(/\s+/);o.push(e),t.className=o.join(" ")}const se=document.createElement("div").style,L=(()=>{const t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(const e in t){const o=t[e];if(se[o]!==void 0)return e}return!1})();function S(t){return L===!1?!1:L==="standard"?t:L+t.charAt(0).toUpperCase()+t.substr(1)}const K=S("transform"),X=S("animation-duration"),Y=S("animation-delay"),q=S("transition"),J=S("animation-fill-mode");function ae(t,e,o,n,r){const s=h([]),i=h(0),a=f=>{const u=t.hasAroundGutter?f+1:f;return t.gutter*u+e.value*f+n.value},c=()=>{s.value=new Array(o.value).fill(t.hasAroundGutter?t.gutter:0)},l=le(t);return{wrapperHeight:i,layoutHandle:async()=>{c();const f=[];if(r&&r.value&&r.value.childNodes.forEach(u=>{u.className==="waterfall-item"&&f.push(u)}),f.length===0)return!1;for(let u=0;u<f.length;u++){const m=f[u],p=Math.min.apply(null,s.value),y=s.value.indexOf(p),v=a(y),O=m.style;K&&(O[K]=`translate3d(${v}px,${p}px, 0)`),O.width=`${e.value}px`;const{height:ut}=m.getBoundingClientRect();s.value[y]+=ut+t.gutter,l(m,()=>{q&&(O[q]="transform .3s")})}i.value=Math.max.apply(null,s.value)}}}function le(t){return(e,o)=>{const n=e.firstChild;if(n&&!at(n,t.animationPrefix)){const r=`${t.animationDuration/1e3}s`,s=`${t.animationDelay/1e3}s`,i=n.style;i.visibility="visible",X&&(i[X]=r),Y&&(i[Y]=s),J&&(i[J]="both"),U(n,t.animationPrefix),U(n,t.animationEffect),o&&setTimeout(()=>{o()},t.animationDuration+t.animationDelay)}}}const ce=typeof window<"u"&&window!==null,Q=fe(),ue=Object.prototype.propertyIsEnumerable,Z=Object.getOwnPropertySymbols;function de(t,...e){return e.map(n=>n.replace(/\[(\w+)\]/g,".$1").split(".").reduce((r,s)=>r&&r[s],t))}function fe(){return ce&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function I(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function me(t){return typeof t=="object"?t===null:typeof t!="function"}function pe(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function ge(t,...e){if(!I(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof Z!="function")return t;for(const o of e){const n=Z(o);for(const r of n)ue.call(o,r)&&(t[r]=o[r])}return t}function lt(t,...e){let o=0;for(me(t)&&(t=e[o++]),t||(t={});o<e.length;o++)if(I(e[o])){for(const n of Object.keys(e[o]))pe(n)&&(I(t[n])&&I(e[o][n])?lt(t[n],e[o][n]):t[n]=e[o][n]);ge(t,e[o])}return t}function tt(t,e){return new Promise((o,n)=>{const r=new Image;r.onload=()=>{o(r)},r.onerror=()=>{n(new Error("Image load error"))},e&&(r.crossOrigin="Anonymous"),r.src=t})}const he={rootMargin:"0px",threshold:0},et="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ve="";class ye{constructor(e=!0,o,n=!0){this.lazyActive=!0,this.crossOrigin=!0,this.options={loading:et,error:ve,observerOptions:he,log:!0},this._images=new WeakMap,this.lazyActive=e,this.crossOrigin=n,this.config(o)}config(e={}){lt(this.options,e)}mount(e,o,n){const{src:r,loading:s,error:i}=this._valueFormatter(o);e.setAttribute("lazy","loading"),e.setAttribute("src",s||et),this.lazyActive?(Q||(this._setImageSrc(e,r,n,i),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,r,n,i)):this._setImageSrc(e,r,n,i)}resize(e,o){const n=e.getAttribute("lazy"),r=e.getAttribute("src");n&&n==="loaded"&&r&&tt(r,this.crossOrigin).then(s=>{const{width:i,height:a}=s,c=e.width/i*a;e.height=c;const l=e.style;l.height=`${c}px`,o()})}unmount(e){const o=this._realObserver(e);o&&o.unobserve(e),this._images.delete(e)}_setImageSrc(e,o,n,r){!o||e.getAttribute("src")===o||tt(o,this.crossOrigin).then(i=>{const{width:a,height:c}=i,l=c/a,g=e.parentNode.parentNode;g.style.paddingBottom=`${l*100}%`,e.setAttribute("lazy","loaded"),e.removeAttribute("src"),e.setAttribute("src",o),n(!0)}).catch(()=>{const i=this._realObserver(e);i&&i.disconnect(),r&&(e.setAttribute("lazy","error"),e.setAttribute("src",r),n(!1)),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${o} `)})})}_isOpenLazy(){return Q&&this.lazyActive}_initIntersectionObserver(e,o,n,r){const s=this.options.observerOptions;this._images.set(e,new IntersectionObserver(a=>{Array.prototype.forEach.call(a,c=>{if(c.isIntersecting){const l=this._realObserver(e);l&&l.unobserve(c.target),this._setImageSrc(e,o,n,r)}})},s));const i=this._realObserver(e);i&&i.observe(e)}_valueFormatter(e){let o=e,n=this.options.loading,r=this.options.error;return I(e)&&(o=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:o,loading:n,error:r}}_log(e){this.options.log&&e()}_realObserver(e){return this._images.get(e)}}var ct=(t,e)=>{const o=t.__vccOpts||t;for(const[n,r]of e)o[n]=r;return o};const j=E({props:{list:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},imgSelector:{type:String,default:"src"},width:{type:Number,default:200},breakpoints:{type:Object,default:()=>({1200:{rowPerView:3},800:{rowPerView:2},500:{rowPerView:1}})},gutter:{type:Number,default:10},hasAroundGutter:{type:Boolean,default:!0},animationPrefix:{type:String,default:"animate__animated"},animationEffect:{type:String,default:"fadeIn"},animationDuration:{type:Number,default:1e3},animationDelay:{type:Number,default:300},backgroundColor:{type:String,default:"#fff"},lazyload:{type:Boolean,default:!0},loadProps:{type:Object,default:()=>{}},crossOrigin:{type:Boolean,default:!0},delay:{type:Number,default:300}},setup(t){const e=new ye(t.lazyload,t.loadProps,t.crossOrigin);x("lazy",e);const{waterfallWrapper:o,wrapperWidth:n,colWidth:r,cols:s,offsetX:i}=ie(t),{wrapperHeight:a,layoutHandle:c}=ae(t,r,s,i,o),l=Jt(()=>{c()},t.delay);R(()=>[n,r,t.list],()=>{n.value>0&&l()},{deep:!0});const g=h(0);return x("sizeChangeTime",g),x("imgLoaded",l),{waterfallWrapper:o,wrapperHeight:a,getRenderURL:m=>de(m,t.imgSelector)[0],getKey:(m,p)=>m[t.rowKey]||p,renderer:l}}}),nt=()=>{ht(t=>({"1d5a2b91":t.backgroundColor}))},ot=j.setup;j.setup=ot?(t,e)=>(nt(),ot(t,e)):nt;const we=j,_e={class:"waterfall-card"};function be(t,e,o,n,r,s){return _(),A("div",{ref:"waterfallWrapper",class:"waterfall-list",style:bt({height:`${t.wrapperHeight}px`})},[(_(!0),A(wt,null,_t(t.list,(i,a)=>(_(),A("div",{key:t.getKey(i,a),class:"waterfall-item"},[d("div",_e,[$(t.$slots,"item",{item:i,index:a,url:t.getRenderURL(i)},void 0,!0)])]))),128))],4)}var Ae=ct(we,[["render",be],["__scopeId","data-v-2465a0ec"]]);const Oe=E({props:{url:{type:String,default:""}},setup(t,e){const o=N("imgLoaded"),n=N("lazy"),r=h(null);P(()=>{s()}),rt(()=>{i()});function s(){r.value&&n.mount(r.value,t.url,c=>{o(),c?e.emit("success",t.url):e.emit("error",t.url)})}function i(){r.value&&n.unmount(r.value)}function a(){e.emit("load",t.url)}return{lazyRef:r,imageLoad:a}}}),Ie={class:"lazy__box"},Se={class:"lazy__resource"};function $e(t,e,o,n,r,s){return _(),A("div",Ie,[d("div",Se,[d("img",{ref:"lazyRef",class:"lazy__img",onLoad:e[0]||(e[0]=(...i)=>t.imageLoad&&t.imageLoad(...i))},null,544)])])}var ze=ct(Oe,[["render",$e],["__scopeId","data-v-019f8998"]]);const Ee=["onClick"],xe={class:"overflow-hidden"},Ce={class:"px-4 pt-2 pb-4 border-t border-t-gray-800"},ke={class:"pb-4 text-gray-50 group-hover:text-yellow-300"},Le={class:"pt-3 flex justify-between items-center border-t border-t-gray-600 border-opacity-50"},Re={class:"text-gray-50"},Pe=["onClick"],De=E({__name:"index",setup(t){const e=At({rowKey:"id",gutter:10,hasAroundGutter:!0,width:320,breakpoints:{1200:{rowPerView:4},800:{rowPerView:3},500:{rowPerView:2}},animationEffect:"animate__zoomInUp",animationDuration:1e3,animationDelay:300,imgSelector:"src.original",loadProps:{loading:Tt,error:Pt},lazyload:!0}),o=h(1),n=h([]),r=h(),s=h();function i(){s.value=It.service({target:".content",background:"transparent",text:"加载中"}),Rt({page:o.value,pageSize:r.value}).then(l=>{setTimeout(()=>{n.value.push(...l),o.value+=1,T(()=>{s.value.close()})},500)})}function a(l,g){n.value.splice(g,1)}function c(l){}return P(()=>{i()}),(l,g)=>{const f=B("el-backtop"),u=B("el-scrollbar");return _(),Ot(u,{height:"87vh",class:"content"},{default:k(()=>[b(w(Ae),$t({list:n.value},e),{item:k(({item:m,url:p,index:y})=>[d("div",{class:"bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-linear hover:shadow-lg hover:shadow-gray-600 group",onClick:v=>void 0},[d("div",xe,[b(w(ze),{url:p,class:"cursor-pointer transition-all duration-300 ease-linear group-hover:scale-105"},null,8,["url"])]),d("div",Ce,[d("h4",ke,z(m.name),1),d("div",Le,[d("div",Re,"$ "+z(m.price),1),d("div",null,[d("button",{class:"px-3 h-7 rounded-full bg-red-500 text-sm text-white shadow-lg transition-all duration-300 hover:bg-red-600",onClick:St(v=>a(m,y),["stop"])}," 删除 ",8,Pe)])])])],8,Ee)]),_:1},16,["list"]),b(f,{title:"回到顶部",right:35,"visibility-height":400,target:".content .el-scrollbar__wrap"},{default:k(()=>[b(w(zt))]),_:1}),b(w(Kt),{firstload:!1,onInfinite:i})]),_:1})}}});export{De as default};